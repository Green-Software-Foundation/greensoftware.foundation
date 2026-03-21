/**
 * Fetch members and team data from Notion and write JSON + images
 * to content/ directories for Gatsby to consume.
 *
 * Usage: node scripts/fetch-notion-data.js
 * Requires: NOTION_API_KEY environment variable
 */

try { require("dotenv").config(); } catch (_) {
  // dotenv is optional — on Netlify, env vars come from the dashboard
}

const { Client } = require("@notionhq/client");
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const NOTION_API_KEY = process.env.NOTION_API_KEY;
if (!NOTION_API_KEY) {
  console.warn("WARNING: NOTION_API_KEY not set — skipping Notion data fetch.");
  // Ensure src/data/ exists with empty fallback files so the build doesn't break
  const ROOT_DIR = path.resolve(__dirname, "..");
  const fallbackDir = path.join(ROOT_DIR, "src", "data");
  fs.mkdirSync(fallbackDir, { recursive: true });
  const fallbacks = {
    "members.json": [],   // all members (steering + general), with active flag and membershipLevel
    "people.json": [],    // all team/volunteer people with groups and leadershipRoles
    "stats.json": {},
    "projects.json": [],
    "press-mentions.json": [],
    "assemblies.json": [],
  };
  for (const [file, data] of Object.entries(fallbacks)) {
    const filePath = path.join(fallbackDir, file);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      console.warn(`  Created fallback ${file}`);
    } else {
      console.warn(`  Using existing cached ${file}`);
    }
  }
  process.exit(0);
}

const notion = new Client({ auth: NOTION_API_KEY });

// Data source IDs (Notion MCP "data_source_id" values)
const DS = {
  MEMBERS: "13c561d4-30ca-47ef-92cc-5f59fe803c80",
  SUBSCRIPTIONS: "9ac54c12-ae9b-43ae-8a46-db440a485cb2",
  PWCIS: "68118401-8eba-471d-bfec-fc09b5f99257",
  VOLUNTEERS: "5274eabc-3b79-4eef-a254-4ed92879d86d",
  GSF_TEAM: "123456c0-7cab-806c-86a0-000b10bfc753",
  PRESS_MENTIONS: "e9e7a23c-9c9e-4811-8eae-e473fbeaa0e5",
  ASSEMBLIES: "a3d1f9ea-d3ba-435b-8824-53886b0fb64f",
};

// Database IDs (the actual Notion database UUIDs for the SDK)
const DB = {
  MEMBERS: "9b19c603-f9fb-4504-82bb-a72d39b01d59",
  SUBSCRIPTIONS: "468492d9-ecda-4e6c-bbd2-28be92208de6",
  PWCIS: "d97a1aa9-26e1-42aa-a9f3-bb13723c049f",
  VOLUNTEERS: "f8282697-eb6e-4406-bd37-db8d55de9109",
};

// Output paths — JSON data goes to src/data/, images to public/assets/
const ROOT_DIR = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT_DIR, "src", "data");
const LOGOS_DIR = path.join(ROOT_DIR, "public", "assets", "logos");
const PHOTOS_DIR = path.join(ROOT_DIR, "public", "assets", "team");
const PROJECT_ICONS_DIR = path.join(ROOT_DIR, "public", "assets", "project-icons");

// Pass --force to re-download all images even if they already exist on disk
const FORCE_DOWNLOAD = process.argv.includes("--force");

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Extract plain text from a Notion rich_text array */
function richText(arr) {
  if (!arr || !Array.isArray(arr)) return "";
  return arr.map((t) => t.plain_text || "").join("").trim();
}

/** Extract plain text from a Notion title array */
function titleText(prop) {
  if (!prop || !prop.title) return "";
  return richText(prop.title);
}

/** Extract select value name */
function selectName(prop) {
  return prop?.select?.name || "";
}

/** Extract multi_select value names */
function multiSelectNames(prop) {
  if (!prop?.multi_select) return [];
  return prop.multi_select.map((s) => s.name);
}

/** Extract URL */
function urlValue(prop) {
  return prop?.url || "";
}

/** Extract file URL from a files property (first file) */
function fileUrl(prop) {
  if (!prop?.files || prop.files.length === 0) return null;
  const file = prop.files[0];
  if (file.type === "file") return file.file.url;
  if (file.type === "external") return file.external.url;
  return null;
}

/** Extract relation IDs */
function relationIds(prop) {
  if (!prop?.relation) return [];
  return prop.relation.map((r) => r.id);
}

/** Download a file to disk. Returns the filename used, or null on failure.
 *  Skips the download if the file already exists on disk (unless --force is passed). */
function downloadFile(url, destDir, filename) {
  return new Promise((resolve) => {
    if (!url) return resolve(null);

    if (!FORCE_DOWNLOAD) {
      if (path.extname(filename)) {
        if (fs.existsSync(path.join(destDir, filename))) return resolve(filename);
      } else {
        const exts = [".svg", ".png", ".jpg", ".jpeg", ".gif"];
        const existing = exts.find((ext) => fs.existsSync(path.join(destDir, filename + ext)));
        if (existing) return resolve(filename + existing);
      }
    }

    const protocol = url.startsWith("https") ? https : http;
    protocol
      .get(url, { timeout: 30000 }, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          // Follow redirect
          return downloadFile(res.headers.location, destDir, filename).then(resolve);
        }
        if (res.statusCode !== 200) {
          console.warn(`  WARN: HTTP ${res.statusCode} downloading ${filename}`);
          res.resume();
          return resolve(null);
        }

        // Determine extension from content-type if not in filename
        if (!path.extname(filename)) {
          const ct = res.headers["content-type"] || "";
          if (ct.includes("svg")) filename += ".svg";
          else if (ct.includes("png")) filename += ".png";
          else if (ct.includes("gif")) filename += ".gif";
          else if (ct.includes("jpeg") || ct.includes("jpg")) filename += ".jpg";
          else filename += ".png"; // fallback
        }

        const destPath = path.join(destDir, filename);
        const fileStream = fs.createWriteStream(destPath);
        res.pipe(fileStream);
        fileStream.on("finish", () => {
          fileStream.close();
          resolve(filename);
        });
        fileStream.on("error", (err) => {
          console.warn(`  WARN: Error writing ${filename}: ${err.message}`);
          resolve(null);
        });
      })
      .on("error", (err) => {
        console.warn(`  WARN: Error downloading ${filename}: ${err.message}`);
        resolve(null);
      });
  });
}

/** Count pages matching a filter without storing results (lighter than queryAll) */
async function countAll(dataSourceId, filter) {
  let count = 0;
  let cursor;
  do {
    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      filter,
      start_cursor: cursor,
      page_size: 100,
    });
    count += response.results.length;
    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);
  return count;
}

/** Query all pages from a Notion data source, handling pagination */
async function queryAll(dataSourceId, filter) {
  const pages = [];
  let cursor;
  do {
    const query = { data_source_id: dataSourceId, start_cursor: cursor, page_size: 100 };
    if (filter) query.filter = filter;
    const response = await notion.dataSources.query(query);
    pages.push(...response.results);
    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);
  return pages;
}

// Module-level caches — avoid redundant Notion API round-trips across all queries
const pwciNameCache = new Map();   // pwciId → name string
// Volunteer photo fallback — Notion roll-ups don't return signed file URLs,
// so we fall back to the volunteer's direct Photo property fetched in main().
const volunteerPhotoByName = new Map(); // fullName.toLowerCase() → { url, origName }

// ---------------------------------------------------------------------------
// Query 1 & 2: Member Organisations
// ---------------------------------------------------------------------------

async function fetchMembers() {
  console.log("\nFetching all members (all tiers, all statuses)...");
  const pages = await queryAll(DS.MEMBERS);
  console.log(`  Found ${pages.length} members total`);

  const members = [];
  for (const page of pages) {
    const p = page.properties;
    const name = titleText(p["Member Name "]);
    const website = urlValue(p["Website"]);
    const logoUrl = fileUrl(p["Logo"]);
    const membershipLevel = selectName(p["Membership Level "]);
    const organisationType = selectName(p["Organisation Type"]);
    const status = selectName(p["Status"]);
    const active = status === "Active";
    const hideLogo = p["Hide Logo"]?.checkbox === true;
    const slug = slugify(name);

    let logoPath = null;
    let logoWidth = null;
    let logoHeight = null;
    let logoFormat = null;

    if (logoUrl) {
      const origName = p["Logo"]?.files?.[0]?.name || "";
      const ext = path.extname(origName).toLowerCase();
      const filename = slug + (ext || "");

      const savedName = await downloadFile(logoUrl, LOGOS_DIR, filename);
      if (savedName) {
        logoPath = `logos/${savedName}`;
        logoFormat = path.extname(savedName).replace(".", "").toLowerCase();
        if (logoFormat === "jpeg") logoFormat = "jpg";

        try {
          const buf = fs.readFileSync(path.join(LOGOS_DIR, savedName));
          const dims = getImageDimensions(buf, logoFormat);
          if (dims) {
            logoWidth = dims.width;
            logoHeight = dims.height;
          }
        } catch (_) {
          // dimensions not critical
        }
      }
    }

    members.push({
      id: page.id,
      companyName: name,
      companyWebsite: website,
      membershipLevel,
      active,
      hideLogo,
      logo: logoPath,
      logoWidth,
      logoHeight,
      logoFormat,
      organisationType,
    });
  }

  return members;
}

/** Basic image dimension reading for PNG, JPEG, GIF, SVG */
function getImageDimensions(buffer, format) {
  try {
    if (format === "png" && buffer.length > 24) {
      return {
        width: buffer.readUInt32BE(16),
        height: buffer.readUInt32BE(20),
      };
    }
    if ((format === "jpg" || format === "jpeg") && buffer.length > 2) {
      let offset = 2;
      while (offset < buffer.length) {
        if (buffer[offset] !== 0xff) break;
        const marker = buffer[offset + 1];
        if (marker === 0xc0 || marker === 0xc2) {
          return {
            height: buffer.readUInt16BE(offset + 5),
            width: buffer.readUInt16BE(offset + 7),
          };
        }
        const blockLen = buffer.readUInt16BE(offset + 2);
        offset += blockLen + 2;
      }
    }
    if (format === "gif" && buffer.length > 10) {
      return {
        width: buffer.readUInt16LE(6),
        height: buffer.readUInt16LE(8),
      };
    }
    if (format === "svg") {
      const str = buffer.toString("utf8", 0, Math.min(buffer.length, 2000));
      const widthMatch = str.match(/width="(\d+)/);
      const heightMatch = str.match(/height="(\d+)/);
      if (widthMatch && heightMatch) {
        return { width: parseInt(widthMatch[1]), height: parseInt(heightMatch[1]) };
      }
      // Try viewBox
      const vbMatch = str.match(/viewBox="[\d.]+ [\d.]+ ([\d.]+) ([\d.]+)"/);
      if (vbMatch) {
        return { width: Math.round(parseFloat(vbMatch[1])), height: Math.round(parseFloat(vbMatch[2])) };
      }
    }
  } catch (_) {
    // ignore
  }
  return null;
}

// ---------------------------------------------------------------------------
// Query 3: Steering Committee People
// ---------------------------------------------------------------------------

async function fetchSteeringCommittee(memberById) {
  console.log("\nFetching Steering Committee...");

  // Step 1: Find the Steering Committee PWCI
  const pwcis = await queryAll(DS.PWCIS, {
    and: [
      { property: "Name", title: { equals: "Steering Committee" } },
      { property: "Internal Status", select: { equals: "Active" } },
    ],
  });

  if (pwcis.length === 0) {
    console.warn("  WARN: Steering Committee PWCI not found");
    return [];
  }
  const scId = pwcis[0].id;
  console.log(`  Steering Committee PWCI: ${scId}`);

  // Step 2: Get active subscriptions with committee roles
  const allSubs = await queryAll(DS.SUBSCRIPTIONS, {
    and: [
      { property: "PWCIs", relation: { contains: scId } },
      { property: "Subscription Status", select: { equals: "Active" } },
    ],
  });

  const committeeRoles = ["Committee Chair", "Committee Vice-Chair", "Committee Member"];
  const committeeSubs = allSubs.filter((sub) =>
    committeeRoles.includes(selectName(sub.properties["Role for Subscription"]))
  );
  console.log(`  Found ${committeeSubs.length} committee subscriptions (of ${allSubs.length} total)`);

  // Step 3: Extract person data directly from subscription roll-ups
  const people = [];
  const seenNames = new Set();

  for (const sub of committeeSubs) {
    const person = await extractPersonFromSub(sub, memberById);
    if (!person.fullName || seenNames.has(person.fullName)) continue;
    seenNames.add(person.fullName);
    people.push(person);
  }

  console.log(`  Resolved ${people.length} unique Steering Committee members`);
  return people;
}

// ---------------------------------------------------------------------------
// Query 4a: Chairs & Project Leads
// ---------------------------------------------------------------------------

async function fetchChairsAndLeads(memberById) {
  console.log("\nFetching Chairs & Project Leads (from Subscriptions)...");

  const leadershipRoles = [
    "Working Group Chair",
    "Project Lead",
    "Project Co-Lead",
    "Committee Chair",
    "Committee Vice-Chair",
    "Committee Member",
  ];

  const subs = await queryAll(DS.SUBSCRIPTIONS, {
    and: [
      { property: "Subscription Status", select: { equals: "Active" } },
      {
        or: leadershipRoles.map((role) => ({
          property: "Role for Subscription",
          select: { equals: role },
        })),
      },
    ],
  });
  console.log(`  Found ${subs.length} leadership subscriptions`);

  // Pre-fetch all unique PWCI names in parallel (cached — avoids sequential round-trips)
  const uniquePwciIds = [...new Set(
    subs.flatMap((sub) => relationIds(sub.properties["PWCIs"]))
  )];
  await Promise.all(uniquePwciIds.map(async (id) => {
    if (!pwciNameCache.has(id)) {
      try {
        const page = await notion.pages.retrieve({ page_id: id });
        pwciNameCache.set(id, titleText(page.properties["Name"]));
      } catch (err) {
        console.warn(`  WARN: Could not resolve PWCI name for ${id}: ${err.message}`);
        pwciNameCache.set(id, "");
      }
    }
  }));

  // Roles that qualify as named leads on a project (not "Committee Member" — too broad)
  const leadRoleLabels = {
    "Working Group Chair": "Chair",
    "Project Lead": "Lead",
    "Project Co-Lead": "Co-Lead",
    "Committee Chair": "Chair",
    "Committee Vice-Chair": "Vice-Chair",
  };

  const people = [];
  const seenNames = new Set();
  const pwciLeadsMap = new Map(); // pwciId → [{ fullName, roleLabel, jobTitle, company, linkedin }]

  for (const sub of subs) {
    const sp = sub.properties;
    const role = selectName(sp["Role for Subscription"]);

    const pwciIds = relationIds(sp["PWCIs"]);
    const pwciName = pwciIds.length > 0 ? (pwciNameCache.get(pwciIds[0]) || "") : "";
    const roleShort = role.replace("Working Group ", "").replace("Project ", "").replace("Committee ", "");
    const label = pwciName ? `${pwciName} (${roleShort})` : role;
    const roleLabel = leadRoleLabels[role]; // undefined for Committee Member

    // Read name from roll-ups (lightweight — no photo download yet)
    const firstName = richText(sp["First Name"]?.rollup?.array?.[0]?.rich_text);
    const lastName = richText(sp["Surname"]?.rollup?.array?.[0]?.rich_text);
    const fullName = `${firstName} ${lastName}`.trim();
    if (!fullName) continue;

    // Build pwciLeadsMap for named lead roles only (no photo needed here)
    if (roleLabel && pwciIds.length > 0) {
      const linkedin = sp["LinkedIn"]?.rollup?.array?.[0]?.url || null;
      const jobTitle = richText(sp["Title"]?.rollup?.array?.[0]?.rich_text) || null;
      const memberRelId = sp["Member"]?.rollup?.array?.[0]?.relation?.[0]?.id;
      const memberRecord = memberRelId ? memberById.get(memberRelId) : null;
      const company = memberRecord?.companyName || "";
      for (const pwciId of pwciIds) {
        if (!pwciLeadsMap.has(pwciId)) pwciLeadsMap.set(pwciId, []);
        const leads = pwciLeadsMap.get(pwciId);
        if (!leads.some((l) => l.fullName === fullName)) {
          leads.push({ fullName, roleLabel, jobTitle, company, linkedin });
        }
      }
    }

    if (seenNames.has(fullName)) {
      const existing = people.find((p) => p.fullName === fullName);
      if (existing && label && !existing.leadershipRoles.includes(label)) {
        existing.leadershipRoles.push(label);
      }
      continue;
    }
    seenNames.add(fullName);
    const person = await extractPersonFromSub(sub, memberById);
    person.leadershipRoles = label ? [label] : [];
    people.push(person);
  }

  console.log(`  Resolved ${people.length} unique chairs/leads`);
  return { people, pwciLeadsMap };
}

// ---------------------------------------------------------------------------
// Query 4b: Organisation Leads
// ---------------------------------------------------------------------------

async function fetchOrgLeads(memberById) {
  console.log("\nFetching Organisation Leads (from Subscriptions)...");

  const subs = await queryAll(DS.SUBSCRIPTIONS, {
    and: [
      { property: "Role for Subscription", select: { equals: "Organization Lead" } },
      { property: "Subscription Status", select: { equals: "Active" } },
    ],
  });
  console.log(`  Found ${subs.length} Organisation Lead subscriptions`);

  const people = [];
  const seenNames = new Set();

  for (const sub of subs) {
    const person = await extractPersonFromSub(sub, memberById);
    if (!person.fullName || seenNames.has(person.fullName)) continue;
    seenNames.add(person.fullName);
    people.push(person);
  }

  console.log(`  Resolved ${people.length} unique Organisation Leads`);
  return people;
}

// ---------------------------------------------------------------------------
// Query 5: Administrative Team (GSF Staff via [DB] GSF Team)
// ---------------------------------------------------------------------------

async function fetchAdminTeam(volunteerByName) {
  console.log("\nFetching Administrative Team (GSF Team DB)...");

  const teamPages = await queryAll(DS.GSF_TEAM, {
    property: "Status",
    select: { equals: "Active" },
  });
  console.log(`  Found ${teamPages.length} active GSF team members`);

  const people = [];
  for (const page of teamPages) {
    const p = page.properties;
    const fullName = titleText(p["Person"]);
    const role = richText(p["Role"]?.rich_text);

    if (!fullName.trim()) continue;

    // Try photo directly from the GSF Team page first, then fall back to Volunteers DB
    let linkedin = "";
    let photoPath = null;
    try {
      // 1. Photo from GSF Team DB page itself
      const directPhotoUrl = fileUrl(p["Photo"]);
      if (directPhotoUrl) {
        const origName = p["Photo"]?.files?.[0]?.name || "";
        const ext = path.extname(origName).toLowerCase() || ".jpg";
        const filename = slugify(fullName) + ext;
        const savedName = await downloadFile(directPhotoUrl, PHOTOS_DIR, filename);
        if (savedName) photoPath = `/assets/team/${savedName}`;
      }

      // 2. Look up from pre-fetched volunteer map for LinkedIn (and photo if still missing)
      const [firstName, ...lastParts] = fullName.split(" ");
      const lastName = lastParts.join(" ");
      const vol = volunteerByName.get(`${firstName.toLowerCase()}|${lastName.toLowerCase()}`);
      if (vol) {
        const vp = vol.properties;
        linkedin = urlValue(vp["LinkedIn"]);
        if (!photoPath) {
          const photoUrl = fileUrl(vp["Photo"]);
          if (photoUrl) {
            const origName = vp["Photo"]?.files?.[0]?.name || "";
            const ext = path.extname(origName).toLowerCase() || ".jpg";
            const filename = slugify(fullName) + ext;
            const savedName = await downloadFile(photoUrl, PHOTOS_DIR, filename);
            if (savedName) photoPath = `/assets/team/${savedName}`;
          }
        }
      }
    } catch (_) {
      // Volunteer lookup is optional — continue without LinkedIn/photo
    }

    const socialMedia = [];
    if (linkedin) socialMedia.push({ platform: "Linkedin", link: linkedin });

    people.push({
      fullName,
      jobTitle: role,
      company: "Green Software Foundation",
      companyWebsite: "https://greensoftware.foundation/",
      photo: photoPath,
      socialMedia,
      _groups: [],
    });
  }

  return people;
}

// ---------------------------------------------------------------------------
// Shared: Extract person data from a Subscription page (via roll-up fields)
// ---------------------------------------------------------------------------

/** Extract person data directly from a Subscription page using roll-up fields.
 *  Eliminates the need to cross-reference the Volunteers DB for the three
 *  main subscription-driven people fetches. */
async function extractPersonFromSub(sub, memberById) {
  const sp = sub.properties;

  // Name from roll-ups
  const firstName = richText(sp["First Name"]?.rollup?.array?.[0]?.rich_text);
  const lastName = richText(sp["Surname"]?.rollup?.array?.[0]?.rich_text);
  const fullName = `${firstName} ${lastName}`.trim();

  // Job title from "Title" roll-up
  const jobTitle = richText(sp["Title"]?.rollup?.array?.[0]?.rich_text) || null;

  // LinkedIn from roll-up
  const linkedin = sp["LinkedIn"]?.rollup?.array?.[0]?.url || null;

  // Volunteer status — warn if not Active but still include
  const volunteerStatus = sp["Volunteer Status"]?.rollup?.array?.[0]?.select?.name;
  if (fullName && volunteerStatus && volunteerStatus !== "Active") {
    console.warn(`  WARN: ${fullName} has active subscription but Volunteer Status is "${volunteerStatus}" — including anyway`);
  }

  // Member org from relation roll-up → memberById lookup
  const memberRelId = sp["Member"]?.rollup?.array?.[0]?.relation?.[0]?.id;
  const memberRecord = memberRelId ? memberById.get(memberRelId) : null;
  const company = memberRecord?.companyName || "";
  const companyWebsite = memberRecord?.companyWebsite || "";

  // Photo — Notion roll-ups don't return signed file URLs, so the roll-up is always empty.
  // Fall back to the volunteer's direct Photo property (populated in main() from allActiveVolunteers).
  const rollupPhotoFiles = sp["Photo"]?.rollup?.array?.[0]?.files || [];
  let resolvedPhotoUrl = fileUrl({ files: rollupPhotoFiles });
  let resolvedPhotoOrigName = "";
  if (!resolvedPhotoUrl && fullName) {
    const fallback = volunteerPhotoByName.get(fullName.toLowerCase());
    if (fallback) {
      resolvedPhotoUrl = fallback.url;
      resolvedPhotoOrigName = fallback.origName;
    }
  }

  let photoPath = null;
  if (resolvedPhotoUrl && fullName) {
    const ext = path.extname(resolvedPhotoOrigName).toLowerCase() || "";
    const filename = slugify(fullName) + (ext || "");
    const savedName = await downloadFile(resolvedPhotoUrl, PHOTOS_DIR, filename);
    if (savedName) photoPath = `/assets/team/${savedName}`;
  }

  const socialMedia = [];
  if (linkedin) socialMedia.push({ platform: "Linkedin", link: linkedin });

  return {
    id: sub.id,
    fullName,
    jobTitle,
    company,
    companyWebsite,
    photo: photoPath,
    socialMedia,
    _groups: [],
  };
}

// ---------------------------------------------------------------------------
// Shared: Extract person data from a Volunteer page
// ---------------------------------------------------------------------------

async function extractPerson(vol, role) {
  const vp = vol.properties;
  const firstName = richText(vp["First Name"]?.rich_text);
  const lastName = richText(vp["Last Name"]?.rich_text);
  const fullName = `${firstName} ${lastName}`.trim();
  const jobTitle = richText(vp["Job Title"]?.rich_text);
  const linkedin = urlValue(vp["LinkedIn"]);
  const photoUrl = fileUrl(vp["Photo"]);

  // Resolve company name + website from roll-up properties (no extra API calls)
  const companyNameArr = vp["Company Name"]?.rollup?.array || [];
  const companyWebsiteArr = vp["Company Website"]?.rollup?.array || [];
  const company = titleText(companyNameArr[0]) || "";
  const companyWebsite = companyWebsiteArr[0]?.url || "";

  // Download photo
  let photoPath = null;
  if (photoUrl) {
    const origName = vp["Photo"]?.files?.[0]?.name || "";
    const ext = path.extname(origName).toLowerCase() || ".jpg";
    const filename = slugify(fullName) + ext;
    const savedName = await downloadFile(photoUrl, PHOTOS_DIR, filename);
    if (savedName) {
      photoPath = `/assets/team/${savedName}`;
    }
  }

  // Social media
  const socialMedia = [];
  if (linkedin) {
    socialMedia.push({ platform: "Linkedin", link: linkedin });
  }

  return {
    id: vol.id,
    fullName,
    jobTitle: jobTitle || null,
    company,
    companyWebsite,
    photo: photoPath,
    socialMedia,
    _groups: [], // filled in later
  };
}

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Query 6: Press Mentions (from "GSF Mentions in the News" database)
// ---------------------------------------------------------------------------

async function fetchPressMentions() {
  const allPages = await queryAll(DS.PRESS_MENTIONS);

  return allPages
    .map((page) => {
      const props = page.properties;
      const title = titleText(props["Title"]) || richText(props["Title"]?.rich_text);
      const url = urlValue(props["Source URL"]);
      const source = richText(props["Source Name"]?.rich_text);
      const date = props.Date?.date?.start || "";
      if (!title || !url) return null;
      return { id: page.id, title, url, source, date };
    })
    .filter(Boolean)
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

// ---------------------------------------------------------------------------
// Query 7: Projects, Working Groups, Committees & Initiatives (from PWCI table)
// ---------------------------------------------------------------------------

async function fetchProjects() {
  console.log("\nFetching projects from PWCI table...");
  const pages = await queryAll(DS.PWCIS);
  console.log(`  Found ${pages.length} PWCI records`);

  const wantedTypes = [
    "Working Group",
    "Committee",
    "WG Project",
    "Committee Project",
    "Executive Initiative",
  ];

  const projects = [];
  for (const page of pages) {
    const p = page.properties;
    const name = titleText(p["Name"]);
    const type = selectName(p["Type"]);
    const status = selectName(p["Internal Status"]);
    const lifecycle = selectName(p["Lifecycle Stage"]);
    const area = selectName(p["Area"]);
    const parent = selectName(p["Parent"]);
    const website = urlValue(p["Website URL"]);
    const description = richText(p["Description"]?.rich_text);
    const slug = richText(p["slug"]?.rich_text) || slugify(name);

    if (!wantedTypes.includes(type)) continue;

    // Download page icon (file or custom_emoji — skip plain emoji)
    let iconPath = null;
    let iconUrl = null;
    if (page.icon) {
      if (page.icon.type === "file" && page.icon.file) {
        iconUrl = page.icon.file.url;
      } else if (page.icon.type === "custom_emoji" && page.icon.custom_emoji) {
        iconUrl = page.icon.custom_emoji.url;
      }
    }
    if (iconUrl) {
      const filename = slug;
      const savedName = await downloadFile(iconUrl, PROJECT_ICONS_DIR, filename);
      if (savedName) {
        iconPath = `/assets/project-icons/${savedName}`;
      }
    }

    projects.push({
      id: page.id,
      name,
      slug,
      type,
      status,
      lifecycle: lifecycle || null,
      area: area || null,
      parent: parent || null,
      website: website || null,
      description: description || null,
      icon: iconPath,
    });
  }

  // Sort: active first, then by type, then by name
  projects.sort((a, b) => {
    if (a.status === "Active" && b.status !== "Active") return -1;
    if (a.status !== "Active" && b.status === "Active") return 1;
    if (a.type !== b.type) return a.type.localeCompare(b.type);
    return a.name.localeCompare(b.name);
  });

  console.log(`  Exported ${projects.length} projects (${projects.filter(p => p.icon).length} with icons)`);
  return projects;
}

// ---------------------------------------------------------------------------
// Query 8: Assemblies
// ---------------------------------------------------------------------------

/**
 * Convert a Notion block to simple HTML.
 * Supports paragraph, headings, bulleted/numbered lists, and to_do blocks.
 */
function blockToHtml(block) {
  const richTextToHtml = (rt) => {
    if (!rt || !Array.isArray(rt)) return "";
    return rt.map((t) => {
      let text = t.plain_text || "";
      // Escape HTML entities
      text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      if (t.annotations?.bold) text = `<strong>${text}</strong>`;
      if (t.annotations?.italic) text = `<em>${text}</em>`;
      if (t.annotations?.code) text = `<code>${text}</code>`;
      if (t.href) text = `<a href="${t.href}">${text}</a>`;
      return text;
    }).join("");
  };

  switch (block.type) {
    case "paragraph":
      return `<p>${richTextToHtml(block.paragraph?.rich_text)}</p>`;
    case "heading_1":
      return `<h2>${richTextToHtml(block.heading_1?.rich_text)}</h2>`;
    case "heading_2":
      return `<h3>${richTextToHtml(block.heading_2?.rich_text)}</h3>`;
    case "heading_3":
      return `<h4>${richTextToHtml(block.heading_3?.rich_text)}</h4>`;
    case "bulleted_list_item":
      return `<li>${richTextToHtml(block.bulleted_list_item?.rich_text)}</li>`;
    case "numbered_list_item":
      return `<li>${richTextToHtml(block.numbered_list_item?.rich_text)}</li>`;
    case "to_do":
      return `<li>${richTextToHtml(block.to_do?.rich_text)}</li>`;
    case "divider":
      return "<hr />";
    default:
      return "";
  }
}

/**
 * Wrap consecutive <li> items in <ul> or <ol> tags.
 */
function wrapListItems(htmlParts, blocks) {
  const result = [];
  let inList = false;
  let listType = null;

  for (let i = 0; i < htmlParts.length; i++) {
    const block = blocks[i];
    const html = htmlParts[i];
    if (!html) continue;

    const isBullet = block.type === "bulleted_list_item" || block.type === "to_do";
    const isNumbered = block.type === "numbered_list_item";
    const isListItem = isBullet || isNumbered;

    if (isListItem && !inList) {
      listType = isNumbered ? "ol" : "ul";
      result.push(`<${listType}>`);
      inList = true;
    } else if (!isListItem && inList) {
      result.push(`</${listType}>`);
      inList = false;
      listType = null;
    }

    result.push(html);
  }

  if (inList) result.push(`</${listType}>`);
  return result.join("\n");
}

async function fetchAssemblies() {
  console.log("\nFetching assemblies...");
  const pages = await queryAll(DS.ASSEMBLIES);
  console.log(`  Found ${pages.length} assembly records`);

  const assemblies = [];
  for (const page of pages) {
    const p = page.properties;
    const name = titleText(p["Workshop"]) || titleText(p["Name"]);
    if (!name) continue;

    const slug = slugify(name);
    // Status is a Notion "status" type, not "select"
    const status = p["Status"]?.status?.name || "";
    const stage = selectName(p["Stage"]);
    const purpose = selectName(p["Purpose"]);
    const summary = richText(p["Summary"]?.rich_text);
    const deliverable = richText(p["Deliverable"]?.rich_text);
    const lead = richText(p["Lead"]?.rich_text);
    const facilitator = richText(p["Facilitator"]?.rich_text);
    const reportUrl = urlValue(p["Report"]);
    const startDate = p["Start Date"]?.date?.start || null;
    const endDate = p["End Date"]?.date?.start || null;
    const applicationsOpen = p["Applications Open"]?.date?.start || null;
    const applicationDeadline = p["Application Deadline"]?.date?.start || null;
    const startsHuman = richText(p["Starts"]?.rich_text);
    const averageAttendees = p["Average Attendees"]?.number || null;
    const seats = p["Seats"]?.number || null;
    const visibility = selectName(p["Visibility"]);

    // Rollup links (from related PWCI records)
    const governingBodyLink = p["Governing Body Link"]?.rollup?.array?.[0]?.url || null;
    const projectLink = p["Project Link"]?.rollup?.array?.[0]?.url || null;

    // Resolve Project relation via pwciNameCache
    const projectIds = relationIds(p["Project"]);
    let project = null;
    let projectSlug = null;
    if (projectIds.length > 0) {
      const projId = projectIds[0];
      if (pwciNameCache.has(projId)) {
        project = pwciNameCache.get(projId);
        projectSlug = slugify(project);
      }
    }

    // Resolve Working Group relation via pwciNameCache
    const wgIds = relationIds(p["Working Group"]);
    let workingGroup = null;
    if (wgIds.length > 0) {
      const wgId = wgIds[0];
      if (pwciNameCache.has(wgId)) {
        workingGroup = pwciNameCache.get(wgId);
      }
    }

    // Fetch page body — look for a "Details" heading, extract content below it
    let detailsHtml = null;
    try {
      const blocksResp = await notion.blocks.children.list({ block_id: page.id, page_size: 100 });
      const blocks = blocksResp.results;

      // Find the "Details" heading
      let detailsStart = -1;
      for (let i = 0; i < blocks.length; i++) {
        const b = blocks[i];
        if (b.type === "heading_1" || b.type === "heading_2" || b.type === "heading_3") {
          const text = richText(b[b.type]?.rich_text).toLowerCase();
          if (text.includes("detail")) {
            detailsStart = i + 1;
            break;
          }
        }
      }

      if (detailsStart >= 0) {
        // Collect blocks until next heading or end
        const detailBlocks = [];
        const detailBlockRefs = [];
        for (let i = detailsStart; i < blocks.length; i++) {
          const b = blocks[i];
          if (b.type === "heading_1" || b.type === "heading_2" || b.type === "heading_3") break;
          detailBlocks.push(blockToHtml(b));
          detailBlockRefs.push(b);
        }
        const html = wrapListItems(detailBlocks, detailBlockRefs);
        if (html.trim()) detailsHtml = html;
      }
    } catch (err) {
      console.warn(`  WARN: Could not fetch blocks for assembly "${name}": ${err.message}`);
    }

    assemblies.push({
      id: page.id,
      name,
      slug,
      status,
      stage: stage || null,
      purpose: purpose || null,
      summary: summary || null,
      deliverable: deliverable || null,
      lead: lead || null,
      facilitator: facilitator || null,
      reportUrl: reportUrl || null,
      startDate,
      endDate,
      applicationsOpen,
      applicationDeadline,
      startsHuman: startsHuman || null,
      averageAttendees,
      seats,
      visibility: visibility || null,
      project,
      projectSlug,
      projectLink,
      workingGroup,
      governingBodyLink,
      detailsHtml,
    });
  }

  // Sort: active/open first, then by name
  const statusOrder = {
    "Apply now": 0,
    "Register interest": 1,
    "In Progress": 2,
    "Upcoming": 3,
    "Done": 4,
    "Pending": 5,
    "Backlog": 6,
  };
  assemblies.sort((a, b) => {
    const aOrder = statusOrder[a.status] ?? 99;
    const bOrder = statusOrder[b.status] ?? 99;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return a.name.localeCompare(b.name);
  });

  console.log(`  Exported ${assemblies.length} assemblies`);
  return assemblies;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("=== Notion Data Fetch ===");
  console.log(`Started at ${new Date().toISOString()}\n`);

  // Ensure output directories exist
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.mkdirSync(LOGOS_DIR, { recursive: true });
  fs.mkdirSync(PHOTOS_DIR, { recursive: true });
  fs.mkdirSync(PROJECT_ICONS_DIR, { recursive: true });

  // --- Members + Volunteers (parallel) ---
  // Two independent DB fetches run concurrently:
  //   1. All members (one query, all tiers) — used for memberById lookup and JSON output
  //   2. Active volunteers — used for admin team LinkedIn lookup and individual count stat
  console.log("\nFetching members and volunteers in parallel...");
  const [allMembers, allActiveVolunteers] = await Promise.all([
    fetchMembers(),
    queryAll(DS.VOLUNTEERS, { property: "Volunteer Status", select: { equals: "Active" } }),
  ]);
  const numberOfIndividuals = allActiveVolunteers.length;

  const allSteering = allMembers.filter((m) => m.membershipLevel === "Steering");
  const allGeneral  = allMembers.filter((m) => m.membershipLevel === "General");
  const activeSteeringCount = allSteering.filter((m) => m.active).length;
  const activeGeneralCount  = allGeneral.filter((m) => m.active).length;
  console.log(`  Members: ${activeSteeringCount} steering active, ${activeGeneralCount} general active`);
  console.log(`  Active volunteers (stat): ${numberOfIndividuals}`);

  // members.json — all members combined; consumers filter by membershipLevel / organisationType / active
  fs.writeFileSync(path.join(DATA_DIR, "members.json"), JSON.stringify(allMembers, null, 2));

  // --- Homepage: Stats ---

  const stats = [{ numberOfOrganisations: activeSteeringCount + activeGeneralCount, numberOfIndividuals }];
  fs.writeFileSync(path.join(DATA_DIR, "stats.json"), JSON.stringify(stats, null, 2));

  // --- Build lookup indexes ---

  // memberById — for resolving member relation roll-ups in subscription-based fetches
  const memberById = new Map(allMembers.map((m) => [m.id, m]));

  // volunteerByName — for admin team LinkedIn/photo fallback lookup
  // volunteerPhotoByName — for extractPersonFromSub photo fallback (roll-ups don't return file URLs)
  const volunteerByName = new Map();
  for (const vol of allActiveVolunteers) {
    const vp = vol.properties;
    const first = richText(vp["First Name"]?.rich_text);
    const last = richText(vp["Last Name"]?.rich_text);
    const fullName = `${first} ${last}`.trim();
    if (first || last) volunteerByName.set(`${first.toLowerCase()}|${last.toLowerCase()}`, vol);
    const photoUrl = fileUrl(vp["Photo"]);
    if (fullName && photoUrl) {
      const origName = vp["Photo"]?.files?.[0]?.name || "";
      volunteerPhotoByName.set(fullName.toLowerCase(), { url: photoUrl, origName });
    }
  }

  // All four people fetches are independent (each queries its own subscription filter)
  // Steering, chairs/leads, and org leads read person data directly from subscription roll-ups.
  // Admin team still uses the pre-fetched volunteer map for LinkedIn/photo fallback.
  const [steeringCommittee, chairsAndLeadsResult, orgLeads, adminTeam] = await Promise.all([
    fetchSteeringCommittee(memberById),
    fetchChairsAndLeads(memberById),
    fetchOrgLeads(memberById),
    fetchAdminTeam(volunteerByName),
  ]);
  const { people: chairsAndLeads, pwciLeadsMap } = chairsAndLeadsResult;

  // Build people.json with groups
  // Use a Map to deduplicate people who appear in multiple groups
  // Skip entries with empty names (incomplete Notion records)
  const teamMap = new Map();

  function addToTeam(person, group) {
    if (!person.fullName.trim()) return;
    const key = person.fullName;
    if (teamMap.has(key)) {
      const existing = teamMap.get(key);
      if (!existing._groups.includes(group)) existing._groups.push(group);
      // Merge leadershipRoles if the incoming person has them
      if (person.leadershipRoles?.length) {
        if (!existing.leadershipRoles) existing.leadershipRoles = [];
        for (const role of person.leadershipRoles) {
          if (!existing.leadershipRoles.includes(role)) {
            existing.leadershipRoles.push(role);
          }
        }
      }
    } else {
      person._groups = [group];
      teamMap.set(key, person);
    }
  }

  for (const person of steeringCommittee) {
    addToTeam(person, "steeringCommittee");
  }

  for (const person of chairsAndLeads) {
    addToTeam(person, "chairsAndLeads");
  }

  for (const person of adminTeam) {
    addToTeam(person, "administrativeTeam");
  }

  for (const person of orgLeads) {
    addToTeam(person, "organisationalLeads");
  }

  // Convert to array and clean up internal fields
  const peopleJson = Array.from(teamMap.values()).map(({ _groups, _volunteerIds, ...rest }) => ({
    ...rest,
    groups: _groups,
  }));

  fs.writeFileSync(
    path.join(DATA_DIR, "people.json"),
    JSON.stringify(peopleJson, null, 2)
  );

  // --- Press Mentions ---
  console.log("\nFetching press mentions...");
  const pressMentions = await fetchPressMentions();
  fs.writeFileSync(
    path.join(DATA_DIR, "press-mentions.json"),
    JSON.stringify(pressMentions, null, 2)
  );
  console.log(`Press mentions: ${pressMentions.length}`);

  // --- Projects (PWCI) ---
  const projects = await fetchProjects();

  // Annotate each project with its named leads, resolving photos from people.json
  const personPhotoMap = new Map(peopleJson.map((p) => [p.fullName, p.photo]));
  for (const project of projects) {
    const rawLeads = pwciLeadsMap.get(project.id) || [];
    project.leads = rawLeads.map((lead) => ({
      ...lead,
      photo: personPhotoMap.get(lead.fullName) || null,
    }));
  }

  fs.writeFileSync(
    path.join(DATA_DIR, "projects.json"),
    JSON.stringify(projects, null, 2)
  );

  // --- Assemblies ---
  const assemblies = await fetchAssemblies();
  fs.writeFileSync(
    path.join(DATA_DIR, "assemblies.json"),
    JSON.stringify(assemblies, null, 2)
  );

  // --- Summary ---
  console.log("\n=== Summary ===");
  console.log(`Steering members: ${activeSteeringCount} active, ${allSteering.length - activeSteeringCount} historical`);
  console.log(`General members: ${activeGeneralCount} active, ${allGeneral.length - activeGeneralCount} historical`);
  console.log(`Total members.json entries: ${allMembers.length}`);
  console.log(`Steering Committee people: ${steeringCommittee.length}`);
  console.log(`Chairs & Project Leads: ${chairsAndLeads.length}`);
  console.log(`Organisation Leads: ${orgLeads.length}`);
  console.log(`Admin Team: ${adminTeam.length}`);
  console.log(`Total people.json entries: ${peopleJson.length}`);
  console.log(`Projects: ${projects.length} (${projects.filter(p => p.icon).length} with icons)`);
  console.log(`Assemblies: ${assemblies.length}`);
  console.log(`\nFinished at ${new Date().toISOString()}`);
}

main().catch((err) => {
  console.error("FATAL:", err);
  process.exit(1);
});
