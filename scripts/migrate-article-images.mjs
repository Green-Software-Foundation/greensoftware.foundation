#!/usr/bin/env node
/**
 * migrate-article-images.mjs
 *
 * Migrates all articles from the flat-file format to co-located folder format:
 *
 *   BEFORE:
 *     src/content/articles/en/my-article.md
 *     public/assets/articles/my-article/main.png
 *     public/assets/articles/my-article/diagram.png   ← inline body image
 *
 *   AFTER:
 *     src/content/articles/en/my-article/index.md
 *     src/content/articles/en/my-article/main.png     ← co-located
 *     src/content/articles/en/my-article/diagram.png  ← co-located
 *
 * What gets migrated:
 *   - frontmatter mainImage: /assets/articles/SLUG/... → ./filename
 *   - inline body images:    /assets/articles/SLUG/... → ./filename
 *
 * What stays in public/ (not migrated):
 *   - Author photos:         /assets/articles/authors/...
 *   - Images from OTHER article folders referenced in this article's body
 *   - Images used in the global site UI
 *
 * Author photos are shared across articles and left as absolute paths.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const ARTICLES_DIR = path.join(REPO_ROOT, "src/content/articles");
const PUBLIC_DIR = path.join(REPO_ROOT, "public");

const LANGS = ["en", "ja", "pt", "zh"];

const stats = {
  files: 0,
  imageCopied: 0,
  imageMissing: 0,
  errors: [],
};

/**
 * Find all /assets/articles/SLUG/... image references in text (frontmatter or body).
 * Returns an array of { match, imagePath } where imagePath is the full /assets/... path.
 */
function findImageRefs(text, slug) {
  const results = [];
  // Match image paths in frontmatter values or markdown image syntax
  // Covers: "path", 'path', (path), src=path
  const pattern = /["'(]?(\/assets\/articles\/[^\s"')>]+\.(png|jpg|jpeg|gif|webp|svg))["')>]?/gi;
  let match;
  while ((match = pattern.exec(text)) !== null) {
    const imagePath = match[1];
    // Only migrate images that belong to this article's own folder
    const expectedPrefix = `/assets/articles/${slug}/`;
    if (imagePath.startsWith(expectedPrefix)) {
      results.push(imagePath);
    }
  }
  // Deduplicate
  return [...new Set(results)];
}

function migrateArticle(langDir, filename) {
  const slug = filename.replace(/\.md$/, "");
  const srcFile = path.join(langDir, filename);
  const destDir = path.join(langDir, slug);
  const destFile = path.join(destDir, "index.md");

  let content = fs.readFileSync(srcFile, "utf-8");

  fs.mkdirSync(destDir, { recursive: true });

  // Find ALL image references belonging to this article's public folder
  const imageRefs = findImageRefs(content, slug);

  for (const imagePath of imageRefs) {
    const imageFilename = path.basename(imagePath);
    const publicImagePath = path.join(PUBLIC_DIR, imagePath);
    const destImagePath = path.join(destDir, imageFilename);

    if (fs.existsSync(publicImagePath)) {
      fs.copyFileSync(publicImagePath, destImagePath);
      stats.imageCopied++;

      // Replace all occurrences of this absolute path with the relative version
      // Use a regex that matches the path regardless of surrounding quotes/parens
      const escapedPath = imagePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      content = content.replace(new RegExp(escapedPath, "g"), `./${imageFilename}`);
    } else {
      stats.imageMissing++;
      console.warn(`    ⚠ image not found: ${imagePath}`);
    }
  }

  fs.writeFileSync(destFile, content);
  fs.unlinkSync(srcFile);
  stats.files++;

  const imageCount = imageRefs.length;
  const foundCount = imageRefs.filter((ref) => {
    const p = path.join(PUBLIC_DIR, ref);
    return fs.existsSync(p);
  }).length;

  console.log(
    `  ✓ ${slug}${imageCount > 0 ? ` (${foundCount}/${imageCount} images)` : " (no article images)"}`
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────

console.log("Migration: article flat files → co-located folders\n");

for (const lang of LANGS) {
  const langDir = path.join(ARTICLES_DIR, lang);
  if (!fs.existsSync(langDir)) continue;

  // Only process .md files that are NOT already inside a subfolder
  const files = fs.readdirSync(langDir).filter(
    (f) => f.endsWith(".md") && f !== "index.md"
  );

  if (files.length === 0) {
    console.log(`\n── ${lang.toUpperCase()} — already migrated or empty, skipping`);
    continue;
  }

  console.log(`\n── ${lang.toUpperCase()} (${files.length} articles) ──`);

  for (const file of files) {
    try {
      migrateArticle(langDir, file);
    } catch (err) {
      stats.errors.push({ file: `${lang}/${file}`, error: err.message });
      console.error(`  ✗ ${file}: ${err.message}`);
    }
  }
}

console.log("\n── Summary ──────────────────────────────────────────────────");
console.log(`  Articles migrated: ${stats.files}`);
console.log(`  Images copied:     ${stats.imageCopied}`);
console.log(`  Images missing:    ${stats.imageMissing}`);
if (stats.errors.length > 0) {
  console.log(`  Errors:            ${stats.errors.length}`);
  stats.errors.forEach((e) => console.error(`    ✗ ${e.file}: ${e.error}`));
}
console.log("\nDone. Run `npm run build` to verify the migration.");
