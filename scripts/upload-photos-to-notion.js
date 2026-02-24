/**
 * Upload team photos from the DatoCMS migration to Notion Volunteers database.
 *
 * This is a staged script with human-in-the-loop checkpoints:
 *
 *   Stage 1 (--match):   Generate a CSV mapping local photos → Notion Volunteer records
 *                         for spot-checking before any uploads happen.
 *
 *   Stage 2 (--upload):  Upload photos listed in the CSV to Notion.
 *                         Use --limit N to upload only N photos (for testing).
 *                         Use --name "First Last" to upload a single person.
 *
 * Usage:
 *   node scripts/upload-photos-to-notion.js --match
 *   node scripts/upload-photos-to-notion.js --upload --limit 2
 *   node scripts/upload-photos-to-notion.js --upload --name "Gadhu Sundaram"
 *   node scripts/upload-photos-to-notion.js --upload
 *
 * Requires: NOTION_API_KEY environment variable
 */

try { require("dotenv").config(); } catch (_) {}

const { Client } = require("@notionhq/client");
const fs = require("fs");
const path = require("path");
// Using Node 18+ built-in FormData and Blob for multipart uploads

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const NOTION_API_KEY = process.env.NOTION_API_KEY;
if (!NOTION_API_KEY) {
  console.error("ERROR: NOTION_API_KEY environment variable is required");
  process.exit(1);
}

const notion = new Client({ auth: NOTION_API_KEY });

const DS = {
  VOLUNTEERS: "5274eabc-3b79-4eef-a254-4ed92879d86d",
};

const DB = {
  VOLUNTEERS: "f8282697-eb6e-4406-bd37-db8d55de9109",
};

const NOTION_VERSION = "2025-09-03";

const PHOTOS_DIR = path.resolve(__dirname, "..", "content", "team", "photos");
const CSV_PATH = path.resolve(__dirname, "..", "content", "team", "photo-upload-plan.csv");

// The DatoCMS-era team.json is in git history; we use the local photos directory
// (slugified names) and match against Notion Volunteer first/last name fields.

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function richText(arr) {
  if (!arr || !Array.isArray(arr)) return "";
  return arr.map((t) => t.plain_text || "").join("").trim();
}

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const types = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
  };
  return types[ext] || "application/octet-stream";
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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ---------------------------------------------------------------------------
// Stage 1: Match local photos to Notion Volunteer records
// ---------------------------------------------------------------------------

async function buildMatchCSV() {
  console.log("=== Stage 1: Building photo → Volunteer match CSV ===\n");

  // 1. Get all local photo files
  const photoFiles = fs.readdirSync(PHOTOS_DIR).filter((f) => {
    const ext = path.extname(f).toLowerCase();
    return [".jpg", ".jpeg", ".png", ".gif", ".svg", ".webp"].includes(ext);
  });
  console.log(`Found ${photoFiles.length} local photos in ${PHOTOS_DIR}\n`);

  // 2. Build a slug → filename map
  const slugToFile = {};
  for (const f of photoFiles) {
    const slug = path.basename(f, path.extname(f)); // e.g. "gadhu-sundaram"
    slugToFile[slug] = f;
  }

  // 3. Fetch all Volunteers from Notion
  console.log("Fetching all Volunteers from Notion...");
  const volunteers = await queryAll(DS.VOLUNTEERS);
  console.log(`Found ${volunteers.length} Volunteer records\n`);

  // 4. Match each volunteer to a local photo
  const rows = [];
  let matched = 0;
  let alreadyHasPhoto = 0;
  let noLocalPhoto = 0;

  for (const vol of volunteers) {
    const props = vol.properties;
    const firstName = richText(props["First Name"]?.rich_text);
    const lastName = richText(props["Last Name"]?.rich_text);
    const fullName = `${firstName} ${lastName}`.trim();
    const slug = slugify(fullName);
    const pageId = vol.id;
    const hasExistingPhoto = (props["Photo"]?.files?.length || 0) > 0;
    const localFile = slugToFile[slug] || "";

    let status;
    if (hasExistingPhoto) {
      status = "SKIP_HAS_PHOTO";
      alreadyHasPhoto++;
    } else if (!localFile) {
      status = "NO_LOCAL_PHOTO";
      noLocalPhoto++;
    } else {
      status = "WILL_UPLOAD";
      matched++;
    }

    rows.push({
      fullName,
      slug,
      pageId,
      localFile,
      hasExistingPhoto: hasExistingPhoto ? "yes" : "no",
      status,
    });
  }

  // 5. Sort: WILL_UPLOAD first, then SKIP, then NO_LOCAL, then alphabetically by name
  rows.sort((a, b) => {
    const order = { WILL_UPLOAD: 0, SKIP_HAS_PHOTO: 1, NO_LOCAL_PHOTO: 2 };
    const diff = (order[a.status] ?? 3) - (order[b.status] ?? 3);
    if (diff !== 0) return diff;
    return a.fullName.localeCompare(b.fullName);
  });

  // 6. Write CSV
  const header = "status,fullName,slug,pageId,localFile,hasExistingPhoto";
  const csvLines = rows.map(
    (r) =>
      `${r.status},"${r.fullName}",${r.slug},${r.pageId},${r.localFile},${r.hasExistingPhoto}`
  );
  const csv = [header, ...csvLines].join("\n") + "\n";
  fs.writeFileSync(CSV_PATH, csv);

  console.log(`Results:`);
  console.log(`  WILL_UPLOAD:    ${matched} (have local photo, no Notion photo)`);
  console.log(`  SKIP_HAS_PHOTO: ${alreadyHasPhoto} (already have photo in Notion)`);
  console.log(`  NO_LOCAL_PHOTO: ${noLocalPhoto} (no matching local file)`);
  console.log(`\nCSV written to: ${CSV_PATH}`);
  console.log(`\nPlease review the CSV, then run:`);
  console.log(`  node scripts/upload-photos-to-notion.js --upload --limit 2   # test with 2`);
  console.log(`  node scripts/upload-photos-to-notion.js --upload              # upload all`);
}

// ---------------------------------------------------------------------------
// Stage 2: Upload photos to Notion
// ---------------------------------------------------------------------------

async function uploadPhotos({ limit, nameFilter }) {
  console.log("=== Stage 2: Uploading photos to Notion ===\n");

  // 1. Read the CSV
  if (!fs.existsSync(CSV_PATH)) {
    console.error("ERROR: No CSV found. Run --match first to generate it.");
    process.exit(1);
  }

  const csvContent = fs.readFileSync(CSV_PATH, "utf-8");
  const lines = csvContent.trim().split("\n").slice(1); // skip header

  let toUpload = lines
    .map((line) => {
      // Parse CSV (simple — our values don't contain commas except in quoted fullName)
      const match = line.match(/^([^,]+),"([^"]+)",([^,]+),([^,]+),([^,]+),([^,]+)$/);
      if (!match) return null;
      return {
        status: match[1],
        fullName: match[2],
        slug: match[3],
        pageId: match[4],
        localFile: match[5],
        hasExistingPhoto: match[6],
      };
    })
    .filter((r) => r && r.status === "WILL_UPLOAD");

  // Apply filters
  if (nameFilter) {
    toUpload = toUpload.filter(
      (r) => r.fullName.toLowerCase() === nameFilter.toLowerCase()
    );
    if (toUpload.length === 0) {
      console.error(`No WILL_UPLOAD match for name "${nameFilter}"`);
      process.exit(1);
    }
  }

  if (limit && limit > 0) {
    toUpload = toUpload.slice(0, limit);
  }

  console.log(`Uploading ${toUpload.length} photo(s)...\n`);

  let success = 0;
  let failed = 0;

  for (const row of toUpload) {
    const filePath = path.join(PHOTOS_DIR, row.localFile);
    if (!fs.existsSync(filePath)) {
      console.log(`  SKIP ${row.fullName}: file not found (${row.localFile})`);
      failed++;
      continue;
    }

    try {
      console.log(`  Uploading ${row.fullName} (${row.localFile})...`);

      // Step 1: Create file upload object
      const createRes = await fetch("https://api.notion.com/v1/file_uploads", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${NOTION_API_KEY}`,
          "Content-Type": "application/json",
          "Notion-Version": NOTION_VERSION,
        },
        body: JSON.stringify({
          filename: row.localFile,
          content_type: getMimeType(filePath),
        }),
      });

      if (!createRes.ok) {
        const errText = await createRes.text();
        throw new Error(`Create file upload failed (${createRes.status}): ${errText}`);
      }

      const createData = await createRes.json();
      const fileUploadId = createData.id;

      // Step 2: Send the binary
      const fileBuffer = fs.readFileSync(filePath);
      const blob = new Blob([fileBuffer], { type: getMimeType(filePath) });
      const form = new FormData();
      form.append("file", blob, row.localFile);

      const sendRes = await fetch(
        `https://api.notion.com/v1/file_uploads/${fileUploadId}/send`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${NOTION_API_KEY}`,
            "Notion-Version": NOTION_VERSION,
          },
          body: form,
        }
      );

      if (!sendRes.ok) {
        const errText = await sendRes.text();
        throw new Error(`Send file binary failed (${sendRes.status}): ${errText}`);
      }

      // Step 3: Attach to Volunteer page
      const patchRes = await fetch(
        `https://api.notion.com/v1/pages/${row.pageId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${NOTION_API_KEY}`,
            "Content-Type": "application/json",
            "Notion-Version": NOTION_VERSION,
          },
          body: JSON.stringify({
            properties: {
              Photo: {
                type: "files",
                files: [
                  {
                    type: "file_upload",
                    file_upload: { id: fileUploadId },
                    name: row.localFile,
                  },
                ],
              },
            },
          }),
        }
      );

      if (!patchRes.ok) {
        const errText = await patchRes.text();
        throw new Error(`Patch page failed (${patchRes.status}): ${errText}`);
      }

      console.log(`    ✓ Done`);
      success++;

      // Rate limiting: 3 API calls done, wait 1s to stay under 3 req/s
      await sleep(1000);
    } catch (err) {
      console.error(`    ✗ FAILED: ${err.message}`);
      failed++;
      // Continue with next person
      await sleep(500);
    }
  }

  console.log(`\nComplete: ${success} uploaded, ${failed} failed`);
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);

  if (args.includes("--match")) {
    await buildMatchCSV();
  } else if (args.includes("--upload")) {
    const limitIdx = args.indexOf("--limit");
    const limit = limitIdx >= 0 ? parseInt(args[limitIdx + 1], 10) : 0;

    const nameIdx = args.indexOf("--name");
    const nameFilter = nameIdx >= 0 ? args[nameIdx + 1] : null;

    await uploadPhotos({ limit, nameFilter });
  } else {
    console.log("Usage:");
    console.log("  node scripts/upload-photos-to-notion.js --match           # Stage 1: generate CSV");
    console.log('  node scripts/upload-photos-to-notion.js --upload --limit 2 # Stage 2: test upload');
    console.log('  node scripts/upload-photos-to-notion.js --upload --name "Gadhu Sundaram"');
    console.log("  node scripts/upload-photos-to-notion.js --upload           # Upload all");
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
