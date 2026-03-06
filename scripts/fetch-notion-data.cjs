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
    "logos.json": [],           // active members only — for logo marquee
    "steering-members.json": [], // all steering (active + historical), with active flag
    "general-members.json": [],  // all general (active + historical), with active flag
    "academic-government-members.json": [],
    "team.json": [],
    "stats.json": {},
    "projects.json": [],
    "press-mentions.json": [],
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
const memberPageCache = new Map(); // memberId → page
const pwciNameCache = new Map();   // pwciId  → name string

// ---------------------------------------------------------------------------
// Query 1 & 2: Member Organisations
// ---------------------------------------------------------------------------

async function fetchMembers(level) {
  console.log(`\nFetching ${level} members (all statuses)...`);
  const pages = await queryAll(DS.MEMBERS, {
    property: "Membership Level ",
    select: { equals: level },
  });
  console.log(`  Found ${pages.length} ${level} members total`);

  const members = [];
  for (const page of pages) {
    const p = page.properties;
    const name = titleText(p["Member Name "]);
    const website = urlValue(p["Website"]);
    const logoUrl = fileUrl(p["Logo"]);
    const organisationType = selectName(p["Organisation Type"]);
    const status = selectName(p["Status"]);
    const active = status === "Active";
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
      companyName: name,
      companyWebsite: website,
      membershipLevel: level,
      active,
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

async function fetchSteeringCommittee(volunteerBySubId) {
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

  // Step 3: Resolve from pre-fetched volunteer map (no per-subscription API calls)
  const people = [];
  const seenVolunteerIds = new Set();

  for (const sub of committeeSubs) {
    const role = selectName(sub.properties["Role for Subscription"]);
    for (const vol of (volunteerBySubId.get(sub.id) || [])) {
      if (seenVolunteerIds.has(vol.id)) continue;
      seenVolunteerIds.add(vol.id);
      people.push(await extractPerson(vol, role));
    }
  }

  console.log(`  Resolved ${people.length} unique Steering Committee members`);
  return people;
}

// ---------------------------------------------------------------------------
// Query 4a: Chairs & Project Leads
// ---------------------------------------------------------------------------

async function fetchChairsAndLeads(volunteerBySubId) {
  console.log("\nFetching Chairs & Project Leads (from Subscriptions)...");

  const leadershipRoles = [
    "Working Group Chair",
    "Project Lead",
    "Project Co-Lead",
    "Committee Chair",
    "Committee Vice Chair",
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

  const people = [];
  const seenVolunteerIds = new Set();

  for (const sub of subs) {
    const role = selectName(sub.properties["Role for Subscription"]);

    const pwciIds = relationIds(sub.properties["PWCIs"]);
    const pwciName = pwciIds.length > 0 ? (pwciNameCache.get(pwciIds[0]) || "") : "";
    const roleShort = role.replace("Working Group ", "").replace("Project ", "").replace("Committee ", "");
    const label = pwciName ? `${pwciName} (${roleShort})` : role;

    // Resolve from pre-fetched map (no API call)
    for (const vol of (volunteerBySubId.get(sub.id) || [])) {
      if (seenVolunteerIds.has(vol.id)) {
        const existing = people.find((p) => p._volunteerIds?.includes(vol.id));
        if (existing && label && !existing.leadershipRoles.includes(label)) {
          existing.leadershipRoles.push(label);
        }
        continue;
      }
      seenVolunteerIds.add(vol.id);
      const person = await extractPerson(vol, role);
      person.leadershipRoles = label ? [label] : [];
      person._volunteerIds = [vol.id];
      people.push(person);
    }
  }

  console.log(`  Resolved ${people.length} unique chairs/leads`);
  return people;
}

// ---------------------------------------------------------------------------
// Query 4b: Organisation Leads
// ---------------------------------------------------------------------------

async function fetchOrgLeads(volunteerBySubId) {
  console.log("\nFetching Organisation Leads (from Subscriptions)...");

  const subs = await queryAll(DS.SUBSCRIPTIONS, {
    and: [
      { property: "Role for Subscription", select: { equals: "Organization Lead" } },
      { property: "Subscription Status", select: { equals: "Active" } },
    ],
  });
  console.log(`  Found ${subs.length} Organisation Lead subscriptions`);

  const people = [];
  const seenVolunteerIds = new Set();

  for (const sub of subs) {
    for (const vol of (volunteerBySubId.get(sub.id) || [])) {
      if (seenVolunteerIds.has(vol.id)) continue;
      seenVolunteerIds.add(vol.id);
      people.push(await extractPerson(vol, "Organisation Lead"));
    }
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
      role,
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

  // Resolve company name from Member relation (cached to avoid duplicate API calls)
  let company = "";
  let companyWebsite = "";
  const memberIds = relationIds(vp["Member"]);
  if (memberIds.length > 0) {
    try {
      const memberId = memberIds[0];
      if (!memberPageCache.has(memberId)) {
        memberPageCache.set(memberId, await notion.pages.retrieve({ page_id: memberId }));
      }
      const memberPage = memberPageCache.get(memberId);
      company = titleText(memberPage.properties["Member Name "]);
      companyWebsite = urlValue(memberPage.properties["Website"]);
    } catch (err) {
      console.warn(`  WARN: Could not resolve member org for ${fullName}: ${err.message}`);
    }
  }

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
    fullName,
    role: jobTitle || role,
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

const PRESS_MENTIONS_DS = "e9e7a23c-9c9e-4811-8eae-e473fbeaa0e5";

async function fetchPressMentions() {
  const allPages = [];
  let cursor;
  do {
    const resp = await notion.databases.query({
      database_id: PRESS_MENTIONS_DS,
      sorts: [{ property: "Date", direction: "descending" }],
      page_size: 100,
      ...(cursor ? { start_cursor: cursor } : {}),
    });
    allPages.push(...resp.results);
    cursor = resp.has_more ? resp.next_cursor : undefined;
  } while (cursor);

  return allPages
    .map((page) => {
      const props = page.properties;
      const title = props.Title?.title?.[0]?.plain_text?.trim() || "";
      const url = props["Source URL"]?.url?.trim() || "";
      const source = props["Source Name"]?.rich_text?.[0]?.plain_text?.trim() || "";
      const date = props.Date?.date?.start || "";
      if (!title || !url) return null;
      return { title, url, source, date };
    })
    .filter(Boolean);
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

  // --- Members ---
  // Fetch all members regardless of status — active flag set per record
  const allSteering = await fetchMembers("Steering");
  const allGeneral = await fetchMembers("General");

  const academicGovTypes = ["Academia", "Government"];

  // Per-level JSON files include ALL members (active + inactive) with active flag.
  // Consumers filter by active: true for display; inactive entries preserve history.
  fs.writeFileSync(
    path.join(DATA_DIR, "steering-members.json"),
    JSON.stringify(allSteering, null, 2)
  );
  fs.writeFileSync(
    path.join(DATA_DIR, "general-members.json"),
    JSON.stringify(allGeneral.filter((m) => !academicGovTypes.includes(m.organisationType)), null, 2)
  );
  fs.writeFileSync(
    path.join(DATA_DIR, "academic-government-members.json"),
    JSON.stringify(allGeneral.filter((m) => academicGovTypes.includes(m.organisationType)), null, 2)
  );

  const activeSteeringCount = allSteering.filter((m) => m.active).length;
  const activeGeneralCount = allGeneral.filter((m) => m.active).length;
  console.log(`  Active: ${activeSteeringCount} steering, ${activeGeneralCount} general`);
  console.log(`  Historical: ${allSteering.length - activeSteeringCount} steering, ${allGeneral.length - activeGeneralCount} general`);

  // logos.json — active members only, for the logo marquee component
  const allMembers = [...allSteering, ...allGeneral];
  const logos = allMembers
    .filter((m) => m.active && m.logo)
    .map((m) => ({
      name: m.companyName,
      logo: `/assets/${m.logo}`,
      website: m.companyWebsite,
    }));
  fs.writeFileSync(
    path.join(DATA_DIR, "logos.json"),
    JSON.stringify(logos, null, 2)
  );

  // --- Homepage: Stats (active members only) ---
  console.log("\nCounting active volunteers...");
  const numberOfIndividuals = await countAll(DS.VOLUNTEERS, {
    property: "Volunteer Status",
    select: { equals: "Active" },
  });
  console.log(`  Found ${numberOfIndividuals} active volunteers`);

  // Wrapped in an array so gatsby-transformer-json creates allStatsJson
  const stats = [{
    numberOfOrganisations: activeSteeringCount + activeGeneralCount,
    numberOfIndividuals,
  }];
  fs.writeFileSync(
    path.join(DATA_DIR, "stats.json"),
    JSON.stringify(stats, null, 2)
  );

  // --- Team page ---
  // Pre-fetch all volunteers once, then build indexes for O(1) lookups.
  // This replaces ~135 sequential per-subscription API calls with a single paginated fetch.
  console.log("\nPre-fetching all volunteers...");
  const allVolunteers = await queryAll(DS.VOLUNTEERS);
  console.log(`  Fetched ${allVolunteers.length} volunteers`);

  // Index: subscriptionId → volunteer[]  (for resolving subscription → person)
  const volunteerBySubId = new Map();
  // Index: "firstname|lastname" → volunteer  (for admin team name lookup)
  const volunteerByName = new Map();
  for (const vol of allVolunteers) {
    const vp = vol.properties;
    for (const subId of relationIds(vp["Subscriptions"])) {
      if (!volunteerBySubId.has(subId)) volunteerBySubId.set(subId, []);
      volunteerBySubId.get(subId).push(vol);
    }
    const first = richText(vp["First Name"]?.rich_text).toLowerCase();
    const last = richText(vp["Last Name"]?.rich_text).toLowerCase();
    if (first || last) volunteerByName.set(`${first}|${last}`, vol);
  }

  const steeringCommittee = await fetchSteeringCommittee(volunteerBySubId);
  const chairsAndLeads = await fetchChairsAndLeads(volunteerBySubId);
  const orgLeads = await fetchOrgLeads(volunteerBySubId);
  const adminTeam = await fetchAdminTeam(volunteerByName);

  // Build team.json with groups
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
  const teamJson = Array.from(teamMap.values()).map(({ _groups, _volunteerIds, ...rest }) => ({
    ...rest,
    groups: _groups,
  }));

  fs.writeFileSync(
    path.join(DATA_DIR, "team.json"),
    JSON.stringify(teamJson, null, 2)
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
  fs.writeFileSync(
    path.join(DATA_DIR, "projects.json"),
    JSON.stringify(projects, null, 2)
  );

  // --- Summary ---
  console.log("\n=== Summary ===");
  console.log(`Steering members: ${activeSteeringCount} active, ${allSteering.length - activeSteeringCount} historical`);
  console.log(`General members: ${activeGeneralCount} active, ${allGeneral.length - activeGeneralCount} historical`);
  console.log(`Steering Committee people: ${steeringCommittee.length}`);
  console.log(`Chairs & Project Leads: ${chairsAndLeads.length}`);
  console.log(`Organisation Leads: ${orgLeads.length}`);
  console.log(`Admin Team: ${adminTeam.length}`);
  console.log(`Total team.json entries: ${teamJson.length}`);
  console.log(`Projects: ${projects.length} (${projects.filter(p => p.icon).length} with icons)`);
  console.log(`\nFinished at ${new Date().toISOString()}`);
}

main().catch((err) => {
  console.error("FATAL:", err);
  process.exit(1);
});
