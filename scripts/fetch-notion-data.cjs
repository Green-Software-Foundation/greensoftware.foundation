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
    "logos.json": [],
    "steering-members.json": [],
    "general-members.json": [],
    "academic-government-members.json": [],
    "team.json": [],
    "stats.json": {},
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
const STEERING_LOGOS_DIR = path.join(ROOT_DIR, "public", "assets", "logos", "steering");
const GENERAL_LOGOS_DIR = path.join(ROOT_DIR, "public", "assets", "logos", "general");
const PHOTOS_DIR = path.join(ROOT_DIR, "public", "assets", "team");

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

/** Download a file to disk. Returns the filename used, or null on failure. */
function downloadFile(url, destDir, filename) {
  return new Promise((resolve) => {
    if (!url) return resolve(null);

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
    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      filter,
      start_cursor: cursor,
      page_size: 100,
    });
    pages.push(...response.results);
    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);
  return pages;
}

// ---------------------------------------------------------------------------
// Query 1 & 2: Member Organisations
// ---------------------------------------------------------------------------

async function fetchMembers(level) {
  console.log(`\nFetching ${level} members...`);
  const pages = await queryAll(DS.MEMBERS, {
    and: [
      { property: "Status", select: { equals: "Active" } },
      { property: "Membership Level ", select: { equals: level } },
    ],
  });
  console.log(`  Found ${pages.length} active ${level} members`);

  const logoDir = level === "Steering" ? STEERING_LOGOS_DIR : GENERAL_LOGOS_DIR;
  fs.mkdirSync(logoDir, { recursive: true });

  const members = [];
  for (const page of pages) {
    const p = page.properties;
    const name = titleText(p["Member Name "]);
    const website = urlValue(p["Website"]);
    const logoUrl = fileUrl(p["Logo"]);
    const organisationType = selectName(p["Organisation Type"]);
    const slug = slugify(name);

    let logoPath = null;
    let logoWidth = null;
    let logoHeight = null;
    let logoFormat = null;

    if (logoUrl) {
      // Get original filename for extension
      const origName = p["Logo"]?.files?.[0]?.name || "";
      const ext = path.extname(origName).toLowerCase();
      const filename = slug + (ext || "");

      const savedName = await downloadFile(logoUrl, logoDir, filename);
      if (savedName) {
        const subDir = level === "Steering" ? "steering" : "general";
        logoPath = `logos/${subDir}/${savedName}`;
        logoFormat = path.extname(savedName).replace(".", "").toLowerCase();
        if (logoFormat === "jpeg") logoFormat = "jpg";

        // Try to read image dimensions (basic approach for common formats)
        try {
          const buf = fs.readFileSync(path.join(logoDir, savedName));
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

async function fetchSteeringCommittee() {
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

  // Filter to committee roles only (not "Subscriber")
  const committeeRoles = ["Committee Chair", "Committee Vice-Chair", "Committee Member"];
  const committeeSubs = allSubs.filter((sub) => {
    const role = selectName(sub.properties["Role for Subscription"]);
    return committeeRoles.includes(role);
  });
  console.log(`  Found ${committeeSubs.length} committee subscriptions (of ${allSubs.length} total)`);

  // Step 3: Resolve names from Volunteers
  const people = [];
  const seenVolunteerIds = new Set();

  for (const sub of committeeSubs) {
    const subId = sub.id;
    const role = selectName(sub.properties["Role for Subscription"]);

    // Find the volunteer linked to this subscription
    const volunteers = await queryAll(DS.VOLUNTEERS, {
      property: "Subscriptions",
      relation: { contains: subId },
    });

    for (const vol of volunteers) {
      if (seenVolunteerIds.has(vol.id)) continue;
      seenVolunteerIds.add(vol.id);

      const vp = vol.properties;
      const person = await extractPerson(vol, role);
      people.push(person);
    }
  }

  console.log(`  Resolved ${people.length} unique Steering Committee members`);
  return people;
}

// ---------------------------------------------------------------------------
// Query 4a: Chairs & Project Leads
// ---------------------------------------------------------------------------

async function fetchChairsAndLeads() {
  console.log("\nFetching Chairs & Project Leads (from Subscriptions)...");

  const leadershipRoles = [
    "Working Group Chair",
    "Project Lead",
    "Project Co-Lead",
    "Committee Chair",
    "Committee Vice Chair",
    "Committee Member",
  ];

  // Query active subscriptions with any of the leadership roles
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

  // Resolve each subscription to a person + their role label
  const people = [];
  const seenVolunteerIds = new Set();

  for (const sub of subs) {
    const role = selectName(sub.properties["Role for Subscription"]);

    // Resolve the PWCI name (working group / project / committee name)
    let pwciName = "";
    const pwciIds = relationIds(sub.properties["PWCIs"]);
    if (pwciIds.length > 0) {
      try {
        const pwciPage = await notion.pages.retrieve({ page_id: pwciIds[0] });
        pwciName = titleText(pwciPage.properties["Name"]);
      } catch (err) {
        console.warn(`  WARN: Could not resolve PWCI name: ${err.message}`);
      }
    }

    // Build a human-readable label, e.g. "Software Standards WG (Chair)"
    const roleShort = role
      .replace("Working Group ", "")
      .replace("Project ", "")
      .replace("Committee ", "");
    const label = pwciName ? `${pwciName} (${roleShort})` : role;

    // Resolve the volunteer
    const volunteers = await queryAll(DS.VOLUNTEERS, {
      property: "Subscriptions",
      relation: { contains: sub.id },
    });

    for (const vol of volunteers) {
      if (seenVolunteerIds.has(vol.id)) {
        // Person already seen — just append the additional role label
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

async function fetchOrgLeads() {
  console.log("\nFetching Organisation Leads (from Subscriptions)...");

  // Query Subscriptions where Role = "Organization Lead" and Status = "Active"
  const subs = await queryAll(DS.SUBSCRIPTIONS, {
    and: [
      { property: "Role for Subscription", select: { equals: "Organization Lead" } },
      { property: "Subscription Status", select: { equals: "Active" } },
    ],
  });
  console.log(`  Found ${subs.length} Organisation Lead subscriptions`);

  // Resolve each subscription to a person via the linked Volunteer
  const people = [];
  const seenVolunteerIds = new Set();

  for (const sub of subs) {
    const volunteers = await queryAll(DS.VOLUNTEERS, {
      property: "Subscriptions",
      relation: { contains: sub.id },
    });

    for (const vol of volunteers) {
      if (seenVolunteerIds.has(vol.id)) continue;
      seenVolunteerIds.add(vol.id);

      const person = await extractPerson(vol, "Organisation Lead");
      people.push(person);
    }
  }

  console.log(`  Resolved ${people.length} unique Organisation Leads`);
  return people;
}

// ---------------------------------------------------------------------------
// Query 5: Administrative Team (GSF Staff via [DB] GSF Team)
// ---------------------------------------------------------------------------

async function fetchAdminTeam() {
  console.log("\nFetching Administrative Team (GSF Team DB)...");

  const teamPages = await queryAll(DS.GSF_TEAM, {
    property: "Status",
    select: { equals: "Active" },
  });
  console.log(`  Found ${teamPages.length} active GSF team members`);

  const people = [];
  for (const page of teamPages) {
    const p = page.properties;
    const fullName = richText(p["Person"]?.rich_text);
    const role = titleText(p["Role"]);  // "Role" is the title property

    if (!fullName.trim()) continue;

    // Try to find this person in Volunteers to get LinkedIn and photo
    let linkedin = "";
    let photoPath = null;
    try {
      const [firstName, ...lastParts] = fullName.split(" ");
      const lastName = lastParts.join(" ");
      const vols = await queryAll(DS.VOLUNTEERS, {
        and: [
          { property: "First Name", rich_text: { equals: firstName } },
          { property: "Last Name", rich_text: { contains: lastName } },
        ],
      });
      if (vols.length > 0) {
        const vp = vols[0].properties;
        linkedin = urlValue(vp["LinkedIn"]);
        const photoUrl = fileUrl(vp["Photo"]);
        if (photoUrl) {
          const origName = vp["Photo"]?.files?.[0]?.name || "";
          const ext = path.extname(origName).toLowerCase() || ".jpg";
          const filename = slugify(fullName) + ext;
          const savedName = await downloadFile(photoUrl, PHOTOS_DIR, filename);
          if (savedName) photoPath = `/assets/team/${savedName}`;
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

  // Resolve company name from Member relation
  let company = "";
  let companyWebsite = "";
  const memberIds = relationIds(vp["Member"]);
  if (memberIds.length > 0) {
    try {
      const memberPage = await notion.pages.retrieve({ page_id: memberIds[0] });
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
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("=== Notion Data Fetch ===");
  console.log(`Started at ${new Date().toISOString()}\n`);

  // Ensure output directories exist
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.mkdirSync(STEERING_LOGOS_DIR, { recursive: true });
  fs.mkdirSync(GENERAL_LOGOS_DIR, { recursive: true });
  fs.mkdirSync(PHOTOS_DIR, { recursive: true });

  // --- Homepage: Members ---
  const steeringMembers = await fetchMembers("Steering");
  const allGeneralMembers = await fetchMembers("General");

  // Split general members: only separate out Academia and Government
  const academicGovTypes = ["Academia", "Government"];
  const generalMembers = allGeneralMembers.filter(
    (m) => !academicGovTypes.includes(m.organisationType)
  );
  const academicGovMembers = allGeneralMembers.filter(
    (m) => academicGovTypes.includes(m.organisationType)
  );
  console.log(`  Split: ${generalMembers.length} general, ${academicGovMembers.length} academic/government`);

  fs.writeFileSync(
    path.join(DATA_DIR, "steering-members.json"),
    JSON.stringify(steeringMembers, null, 2)
  );
  fs.writeFileSync(
    path.join(DATA_DIR, "general-members.json"),
    JSON.stringify(generalMembers, null, 2)
  );
  fs.writeFileSync(
    path.join(DATA_DIR, "academic-government-members.json"),
    JSON.stringify(academicGovMembers, null, 2)
  );

  // logos.json — combined flat list for the logo marquee component
  const allMembers = [...steeringMembers, ...generalMembers, ...academicGovMembers];
  const logos = allMembers
    .filter((m) => m.logo)
    .map((m) => ({
      name: m.companyName,
      logo: `/assets/${m.logo}`,
      website: m.companyWebsite,
    }));
  fs.writeFileSync(
    path.join(DATA_DIR, "logos.json"),
    JSON.stringify(logos, null, 2)
  );

  // --- Homepage: Stats ---
  console.log("\nCounting active volunteers...");
  const numberOfIndividuals = await countAll(DS.VOLUNTEERS, {
    property: "Volunteer Status",
    select: { equals: "Active" },
  });
  console.log(`  Found ${numberOfIndividuals} active volunteers`);

  // Wrapped in an array so gatsby-transformer-json creates allStatsJson
  const stats = [{
    numberOfOrganisations: steeringMembers.length + allGeneralMembers.length,
    numberOfIndividuals,
  }];
  fs.writeFileSync(
    path.join(DATA_DIR, "stats.json"),
    JSON.stringify(stats, null, 2)
  );

  // --- Team page ---
  const steeringCommittee = await fetchSteeringCommittee();
  const chairsAndLeads = await fetchChairsAndLeads();
  const orgLeads = await fetchOrgLeads();
  const adminTeam = await fetchAdminTeam();

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

  // --- Summary ---
  console.log("\n=== Summary ===");
  console.log(`Steering members: ${steeringMembers.length}`);
  console.log(`General members: ${generalMembers.length}`);
  console.log(`Academic/Government members: ${academicGovMembers.length}`);
  console.log(`Steering Committee people: ${steeringCommittee.length}`);
  console.log(`Chairs & Project Leads: ${chairsAndLeads.length}`);
  console.log(`Organisation Leads: ${orgLeads.length}`);
  console.log(`Admin Team: ${adminTeam.length}`);
  console.log(`Total team.json entries: ${teamJson.length}`);
  console.log(`\nFinished at ${new Date().toISOString()}`);
}

main().catch((err) => {
  console.error("FATAL:", err);
  process.exit(1);
});
