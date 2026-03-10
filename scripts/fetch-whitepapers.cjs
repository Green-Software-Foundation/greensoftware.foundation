/**
 * Fetch whitepapers from the GSF GitHub repository and save them locally.
 *
 * Usage:  node scripts/fetch-whitepapers.cjs
 *
 * This downloads all .md files from the "whitepapers" directory of:
 *   https://github.com/Green-Software-Foundation/sci-policy-and-legislation-alignment-white-paper-series
 *
 * Files are saved to src/content/whitepapers/ so they can be used at build time
 * without requiring network access during the Astro build.
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

const REPO = "Green-Software-Foundation/sci-policy-and-legislation-alignment-white-paper-series";
const BRANCH = "main";
const DIR = "whitepapers";
const OUTPUT_DIR = path.join(__dirname, "..", "src", "content", "whitepapers");

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "GSF-Website-Build" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return httpsGet(res.headers.location).then(resolve, reject);
      }
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode}: ${data.slice(0, 200)}`));
        }
        resolve(data);
      });
      res.on("error", reject);
    }).on("error", reject);
  });
}

async function main() {
  console.log("[whitepapers] Fetching file listing from GitHub...");

  let listing;
  try {
    const raw = await httpsGet(
      `https://api.github.com/repos/${REPO}/contents/${DIR}?ref=${BRANCH}`
    );
    listing = JSON.parse(raw);
  } catch (err) {
    console.warn("[whitepapers] Could not fetch listing — skipping.", err.message);
    return;
  }

  const mdFiles = listing.filter((f) => f.name.endsWith(".md"));
  console.log(`[whitepapers] Found ${mdFiles.length} whitepaper(s).`);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  for (const file of mdFiles) {
    console.log(`[whitepapers]   Downloading: ${file.name}`);
    try {
      const content = await httpsGet(file.download_url);
      fs.writeFileSync(path.join(OUTPUT_DIR, file.name), content, "utf8");
    } catch (err) {
      console.warn(`[whitepapers]   Failed to download ${file.name}:`, err.message);
    }
  }

  console.log("[whitepapers] Done.");
}

main().catch((err) => {
  console.error("[whitepapers] Fatal error:", err);
  process.exit(1);
});
