#!/usr/bin/env node

/**
 * DatoCMS to Local Markdown Migration Script
 *
 * Fetches all content from DatoCMS and writes it as local Markdown/JSON files.
 * Run once: node scripts/migrate-from-datocms.js
 */

const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

const API_TOKEN = "92c1b380aae9e3cd567d6f16f11e47";
const CONTENT_DIR = path.resolve(__dirname, "../content");

const LOCALE_MAP = {
  English: "en",
  Portugese: "pt", // sic — DatoCMS has the typo
  Spanish: "es",
  Mandarin: "zh",
  Japanese: "ja",
  German: "de",
  Italian: "it",
};

// ---------------------------------------------------------------------------
// DatoCMS GraphQL helpers
// ---------------------------------------------------------------------------

function datocmsQuery(query, variables = {}) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ query, variables });
    const req = https.request(
      {
        hostname: "graphql.datocms.com",
        path: "/",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          const parsed = JSON.parse(data);
          if (parsed.errors) reject(new Error(JSON.stringify(parsed.errors, null, 2)));
          else resolve(parsed.data);
        });
      }
    );
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

// Paginated fetch — DatoCMS limits to 100 records per query
async function fetchAllRecords(modelQuery, nodeFields, modelName) {
  const allNodes = [];
  let skip = 0;
  const batchSize = 100;
  while (true) {
    const query = `{
      ${modelQuery}(first: ${batchSize}, skip: ${skip}) {
        ${nodeFields}
      }
    }`;
    const data = await datocmsQuery(query);
    const key = Object.keys(data)[0];
    const nodes = data[key];
    if (!nodes || nodes.length === 0) break;
    allNodes.push(...nodes);
    if (nodes.length < batchSize) break;
    skip += batchSize;
  }
  console.log(`  Fetched ${allNodes.length} ${modelName} records`);
  return allNodes;
}

// ---------------------------------------------------------------------------
// Image download
// ---------------------------------------------------------------------------

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    if (!url) return resolve(null);
    fs.mkdirSync(path.dirname(destPath), { recursive: true });

    const protocol = url.startsWith("https") ? https : http;
    protocol
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return downloadFile(res.headers.location, destPath).then(resolve, reject);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        const ws = fs.createWriteStream(destPath);
        res.pipe(ws);
        ws.on("finish", () => {
          ws.close();
          resolve(destPath);
        });
        ws.on("error", reject);
      })
      .on("error", reject);
  });
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getExtFromUrl(url) {
  if (!url) return ".jpg";
  const parsed = new URL(url);
  const ext = path.extname(parsed.pathname);
  return ext || ".jpg";
}

// ---------------------------------------------------------------------------
// DAST (DatoCMS Structured Text) to Markdown converter
// ---------------------------------------------------------------------------

function dastToMarkdown(structuredText, blocks, links, articleSlug) {
  if (!structuredText || !structuredText.value) return "";
  const doc = structuredText.value;
  if (!doc.document) return "";
  return doc.document.children
    .map((node) => renderNode(node, blocks, links, articleSlug))
    .join("\n\n");
}

function renderNode(node, blocks, links, articleSlug) {
  if (!node) return "";

  switch (node.type) {
    case "paragraph":
      return node.children.map((c) => renderInline(c, links)).join("");

    case "heading": {
      const level = "#".repeat(node.level || 2);
      const text = node.children.map((c) => renderInline(c, links)).join("");
      return `${level} ${text}`;
    }

    case "list": {
      return node.children
        .map((li, i) => {
          const prefix = node.style === "numbered" ? `${i + 1}. ` : "- ";
          const content = li.children
            .map((c) => renderNode(c, blocks, links, articleSlug))
            .join("\n");
          return `${prefix}${content}`;
        })
        .join("\n");
    }

    case "listItem":
      return node.children
        .map((c) => renderNode(c, blocks, links, articleSlug))
        .join("\n");

    case "blockquote": {
      const content = node.children
        .map((c) => renderNode(c, blocks, links, articleSlug))
        .join("\n");
      return content
        .split("\n")
        .map((line) => `> ${line}`)
        .join("\n");
    }

    case "code":
      return "```" + (node.language || "") + "\n" + node.code + "\n```";

    case "block": {
      const block = blocks
        ? blocks.find(
            (b) => b.id === node.item || b.originalId === node.item
          )
        : null;
      if (!block) return "";
      return renderBlock(block, articleSlug);
    }

    case "thematicBreak":
      return "---";

    default:
      if (node.children) {
        return node.children
          .map((c) => renderNode(c, blocks, links, articleSlug))
          .join("");
      }
      return "";
  }
}

function renderInline(node, links) {
  if (!node) return "";

  if (node.type === "span") {
    let text = node.value || "";
    if (node.marks) {
      for (const mark of node.marks) {
        if (mark === "strong" || mark.type === "strong") text = `**${text}**`;
        else if (mark === "emphasis" || mark.type === "emphasis") text = `*${text}*`;
        else if (mark === "code" || mark.type === "code") text = "`" + text + "`";
        else if (mark === "underline" || mark.type === "underline") text = `<u>${text}</u>`;
      }
    }
    return text;
  }

  if (node.type === "link") {
    const text = node.children
      ? node.children.map((c) => renderInline(c, links)).join("")
      : "";
    return `[${text}](${node.url})`;
  }

  if (node.type === "itemLink") {
    const linked = links
      ? links.find(
          (l) => l.id === node.item || l.originalId === node.item
        )
      : null;
    const text = node.children
      ? node.children.map((c) => renderInline(c, links)).join("")
      : "";
    if (linked) {
      if (linked.__typename === "ArticleRecord" || linked.__typename === "DatoCmsArticle") {
        return `[${text}](/articles/${linked.slug})`;
      }
      if (linked.__typename === "ProjectRecord" || linked.__typename === "DatoCmsProject") {
        return `[${text}](/projects/${linked.slug})`;
      }
      if (linked.__typename === "WorkingGroupRecord" || linked.__typename === "DatoCmsWorkingGroup") {
        return `[${text}](/working-groups/${linked.slug})`;
      }
      return `[${text}](/${linked.slug})`;
    }
    return text;
  }

  if (node.type === "inlineItem") {
    return "";
  }

  if (node.children) {
    return node.children.map((c) => renderInline(c, links)).join("");
  }

  return node.value || "";
}

function renderBlock(block, articleSlug) {
  const typename = block.__typename;

  if (
    typename === "ArticleContentImageRecord" ||
    typename === "DatoCmsArticleContentImage"
  ) {
    const url = block.image?.url || "";
    const alt = block.image?.alt || "";
    const title = block.image?.title || "";
    // We'll download this image and reference it locally
    if (url) {
      const ext = getExtFromUrl(url);
      const filename = `${slugify(alt || title || "image")}${ext}`;
      const localPath = `../images/${articleSlug}/${filename}`;
      // Store download task
      if (!renderBlock._downloads) renderBlock._downloads = [];
      renderBlock._downloads.push({ url, articleSlug, filename });
      if (title) {
        return `<figure>\n<img src="${localPath}" alt="${alt}" />\n<figcaption><em>${title}</em></figcaption>\n</figure>`;
      }
      return `![${alt}](${localPath})`;
    }
    return "";
  }

  if (
    typename === "ArticleContentTableRecord" ||
    typename === "DatoCmsArticleContentTable"
  ) {
    // Table content is already markdown
    return block.table || "";
  }

  if (
    typename === "ArticleYoutubeVideoRecord" ||
    typename === "DatoCmsArticleYoutubeVideo"
  ) {
    const videoUrl = block.videoUrl?.url || block.videoUrl || "";
    let videoId = "";
    if (videoUrl.includes("v=")) {
      videoId = videoUrl.split("v=")[1];
      const amp = videoId.indexOf("&");
      if (amp !== -1) videoId = videoId.substring(0, amp);
    } else if (videoUrl.includes("youtu.be/")) {
      videoId = videoUrl.split("youtu.be/")[1];
    }
    if (videoId) {
      const title = block.videoUrl?.title || "YouTube video";
      return `<div class="youtube-embed">\n<iframe width="100%" height="480" src="https://www.youtube.com/embed/${videoId}" title="${title}" allowfullscreen></iframe>\n</div>`;
    }
    return "";
  }

  return "";
}

// ---------------------------------------------------------------------------
// YAML frontmatter helpers
// ---------------------------------------------------------------------------

function toYaml(obj, indent = 0) {
  const pad = "  ".repeat(indent);
  let out = "";
  for (const [key, val] of Object.entries(obj)) {
    if (val === undefined || val === null || val === "") continue;
    if (Array.isArray(val)) {
      if (val.length === 0) continue;
      out += `${pad}${key}:\n`;
      for (const item of val) {
        if (typeof item === "object" && item !== null) {
          const entries = Object.entries(item).filter(
            ([, v]) => v !== undefined && v !== null && v !== ""
          );
          if (entries.length === 0) continue;
          const [firstKey, firstVal] = entries[0];
          out += `${pad}  - ${firstKey}: ${yamlValue(firstVal)}\n`;
          for (const [k, v] of entries.slice(1)) {
            if (Array.isArray(v)) {
              out += `${pad}    ${k}:\n`;
              for (const subItem of v) {
                if (typeof subItem === "object") {
                  const subEntries = Object.entries(subItem).filter(
                    ([, sv]) => sv !== undefined && sv !== null && sv !== ""
                  );
                  if (subEntries.length === 0) continue;
                  const [sk, sv] = subEntries[0];
                  out += `${pad}      - ${sk}: ${yamlValue(sv)}\n`;
                  for (const [rk, rv] of subEntries.slice(1)) {
                    out += `${pad}        ${rk}: ${yamlValue(rv)}\n`;
                  }
                } else {
                  out += `${pad}      - ${yamlValue(subItem)}\n`;
                }
              }
            } else {
              out += `${pad}    ${k}: ${yamlValue(v)}\n`;
            }
          }
        } else {
          out += `${pad}  - ${yamlValue(item)}\n`;
        }
      }
    } else if (typeof val === "object") {
      out += `${pad}${key}:\n`;
      out += toYaml(val, indent + 1);
    } else {
      out += `${pad}${key}: ${yamlValue(val)}\n`;
    }
  }
  return out;
}

function yamlValue(val) {
  if (typeof val === "boolean" || typeof val === "number") return String(val);
  if (typeof val === "string") {
    if (
      val.includes(":") ||
      val.includes("#") ||
      val.includes('"') ||
      val.includes("'") ||
      val.includes("\n") ||
      val.startsWith("[") ||
      val.startsWith("{") ||
      val.startsWith("*") ||
      val.startsWith("&") ||
      val === "true" ||
      val === "false" ||
      val === "null"
    ) {
      return `"${val.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n")}"`;
    }
    return `"${val}"`;
  }
  return String(val);
}

function writeFrontmatter(obj) {
  return `---\n${toYaml(obj)}---\n`;
}

// ---------------------------------------------------------------------------
// Migrate Articles
// ---------------------------------------------------------------------------

async function migrateArticles() {
  console.log("\n📰 Migrating articles...");

  const articles = await fetchAllRecords(
    "allArticles",
    `
      id
      slug
      title
      date
      summary
      teaserText
      language
      isATranslatedArticle
      publishedOriginUrl
      originBlogName
      originalArticle { id slug }
      mainImage { url alt title }
      content {
        value
        links {
          __typename
          ... on ArticleRecord { id slug }
          ... on ProjectRecord { id slug }
          ... on WorkingGroupRecord { id slug }
        }
        blocks {
          __typename
          ... on ArticleContentImageRecord { id image { url alt title } }
          ... on ArticleContentTableRecord { id table }
          ... on ArticleYoutubeVideoRecord { id videoUrl { url title } }
        }
      }
      authors { fullName role companyName companyWebsite photo { url } socialMediaLink { platform link } }
      translators { fullName role companyName companyWebsite photo { url } socialMediaLink { platform link } }
    `,
    "articles"
  );

  const redirects = [];
  const imageDownloads = [];

  for (const article of articles) {
    const lang = LOCALE_MAP[article.language] || "en";
    const isTranslation = article.isATranslatedArticle;

    // For translations, use the original article's slug so they match by filename
    let slug = article.slug;
    let originalSlug = slug;
    if (isTranslation && article.originalArticle) {
      const original = articles.find(
        (a) => a.id === article.originalArticle.id
      );
      if (original) {
        originalSlug = original.slug;
        // Old URL was /articles/{translation-slug}, new URL is /{lang}/articles/{original-slug}
        if (slug !== originalSlug) {
          redirects.push({
            from: `/articles/${slug}`,
            to: `/${lang}/articles/${originalSlug}`,
          });
        }
        slug = originalSlug; // Use original slug as filename
      }
    }

    const dir = path.join(CONTENT_DIR, "articles", lang);
    fs.mkdirSync(dir, { recursive: true });

    // Download main image
    let mainImagePath = "";
    if (article.mainImage?.url) {
      const ext = getExtFromUrl(article.mainImage.url);
      const imgFilename = `main${ext}`;
      const imgDir = path.join(CONTENT_DIR, "articles", "images", slug);
      fs.mkdirSync(imgDir, { recursive: true });
      imageDownloads.push({
        url: article.mainImage.url,
        dest: path.join(imgDir, imgFilename),
      });
      mainImagePath = `../images/${slug}/${imgFilename}`;
    }

    // Convert structured text to markdown
    renderBlock._downloads = [];
    const content = dastToMarkdown(
      article.content,
      article.content?.blocks || [],
      article.content?.links || [],
      slug
    );

    // Collect inline image downloads
    for (const dl of renderBlock._downloads || []) {
      const imgDir = path.join(CONTENT_DIR, "articles", "images", dl.articleSlug);
      fs.mkdirSync(imgDir, { recursive: true });
      imageDownloads.push({
        url: dl.url,
        dest: path.join(imgDir, dl.filename),
      });
    }

    // Build authors array for frontmatter
    const authors = (article.authors || []).map((a) => {
      const author = {
        fullName: a.fullName,
        role: a.role,
        company: a.companyName,
        companyWebsite: a.companyWebsite,
      };
      if (a.photo?.url) {
        const ext = getExtFromUrl(a.photo.url);
        const photoFilename = `${slugify(a.fullName)}${ext}`;
        const photoDir = path.join(CONTENT_DIR, "articles", "images", "authors");
        fs.mkdirSync(photoDir, { recursive: true });
        imageDownloads.push({
          url: a.photo.url,
          dest: path.join(photoDir, photoFilename),
        });
        author.photo = `../images/authors/${photoFilename}`;
      }
      if (a.socialMediaLink?.length) {
        author.socialMedia = a.socialMediaLink.map((s) => ({
          platform: s.platform,
          link: s.link,
        }));
      }
      return author;
    });

    // Build translators array
    const translators = (article.translators || []).map((t) => {
      const translator = {
        fullName: t.fullName,
        role: t.role,
        company: t.companyName,
        companyWebsite: t.companyWebsite,
      };
      if (t.photo?.url) {
        const ext = getExtFromUrl(t.photo.url);
        const photoFilename = `${slugify(t.fullName)}${ext}`;
        const photoDir = path.join(CONTENT_DIR, "articles", "images", "authors");
        fs.mkdirSync(photoDir, { recursive: true });
        imageDownloads.push({
          url: t.photo.url,
          dest: path.join(photoDir, photoFilename),
        });
        translator.photo = `../images/authors/${photoFilename}`;
      }
      if (t.socialMediaLink?.length) {
        translator.socialMedia = t.socialMediaLink.map((s) => ({
          platform: s.platform,
          link: s.link,
        }));
      }
      return translator;
    });

    const frontmatter = {
      title: article.title,
      date: article.date,
      summary: article.summary,
      teaserText: article.teaserText,
      mainImage: mainImagePath,
      authors,
    };
    if (translators.length > 0) frontmatter.translators = translators;
    if (article.originBlogName) frontmatter.originBlogName = article.originBlogName;
    if (article.publishedOriginUrl) frontmatter.publishedOriginUrl = article.publishedOriginUrl;

    const fileContent = writeFrontmatter(frontmatter) + "\n" + content + "\n";
    const filePath = path.join(dir, `${slug}.md`);
    fs.writeFileSync(filePath, fileContent);
  }

  // Download all images
  console.log(`  Downloading ${imageDownloads.length} images...`);
  let downloaded = 0;
  let failed = 0;
  for (const dl of imageDownloads) {
    try {
      // Skip if already downloaded (same author photo used by multiple articles)
      if (!fs.existsSync(dl.dest)) {
        await downloadFile(dl.url, dl.dest);
      }
      downloaded++;
    } catch (err) {
      console.error(`  ⚠ Failed to download ${dl.url}: ${err.message}`);
      failed++;
    }
  }
  console.log(`  Downloaded ${downloaded} images (${failed} failed)`);

  return redirects;
}

// ---------------------------------------------------------------------------
// Migrate Manifesto
// ---------------------------------------------------------------------------

async function migrateManifesto() {
  console.log("\n📜 Migrating manifesto...");

  const manifestos = await fetchAllRecords(
    "allManifestos",
    `
      id
      slug
      title
      language
      mainParagraph
      mission
      vision
      manifestoTopic {
        title
        description
        operationalise
        illustration { url }
      }
      editors {
        fullName
        role
        company
        companyWebsite
        photo { url }
        socialMediaLink { platform link }
      }
    `,
    "manifestos"
  );

  const redirects = [];
  const imageDownloads = [];

  for (const manifesto of manifestos) {
    const lang = LOCALE_MAP[manifesto.language] || "en";
    const dir = path.join(CONTENT_DIR, "manifesto", lang);
    fs.mkdirSync(dir, { recursive: true });

    // Generate redirect from old slug to new locale path
    if (lang !== "en") {
      redirects.push({
        from: `/${manifesto.slug}`,
        to: `/${lang}/manifesto`,
      });
    }

    // Download topic illustrations
    const topics = (manifesto.manifestoTopic || []).map((topic, i) => {
      const t = {
        title: topic.title,
        description: topic.description,
        operationalise: topic.operationalise,
      };
      if (topic.illustration?.url) {
        const ext = getExtFromUrl(topic.illustration.url);
        const filename = `${slugify(topic.title)}${ext}`;
        const imgDir = path.join(CONTENT_DIR, "manifesto", "images");
        fs.mkdirSync(imgDir, { recursive: true });
        imageDownloads.push({
          url: topic.illustration.url,
          dest: path.join(imgDir, filename),
        });
        t.illustration = `../images/${filename}`;
      }
      return t;
    });

    // Download editor photos
    const editors = (manifesto.editors || []).map((e) => {
      const editor = {
        fullName: e.fullName,
        role: e.role,
        company: e.company,
        companyWebsite: e.companyWebsite,
      };
      if (e.photo?.url) {
        const ext = getExtFromUrl(e.photo.url);
        const filename = `${slugify(e.fullName)}${ext}`;
        const imgDir = path.join(CONTENT_DIR, "manifesto", "images", "editors");
        fs.mkdirSync(imgDir, { recursive: true });
        imageDownloads.push({
          url: e.photo.url,
          dest: path.join(imgDir, filename),
        });
        editor.photo = `../images/editors/${filename}`;
      }
      if (e.socialMediaLink?.length) {
        editor.socialMedia = e.socialMediaLink.map((s) => ({
          platform: s.platform,
          link: s.link,
        }));
      }
      return editor;
    });

    const frontmatter = {
      title: manifesto.title,
      mainParagraph: manifesto.mainParagraph,
      mission: manifesto.mission,
      vision: manifesto.vision,
      topics,
      editors,
    };

    const filePath = path.join(dir, "manifesto.md");
    fs.writeFileSync(filePath, writeFrontmatter(frontmatter) + "\n");
  }

  // Download images
  console.log(`  Downloading ${imageDownloads.length} images...`);
  for (const dl of imageDownloads) {
    try {
      if (!fs.existsSync(dl.dest)) {
        await downloadFile(dl.url, dl.dest);
      }
    } catch (err) {
      console.error(`  ⚠ Failed to download ${dl.url}: ${err.message}`);
    }
  }

  return redirects;
}

// ---------------------------------------------------------------------------
// Migrate Flat Pages
// ---------------------------------------------------------------------------

async function migrateFlatPages() {
  console.log("\n📄 Migrating flat pages...");

  const flatPages = await fetchAllRecords(
    "allFlatPages",
    `
      id
      slug
      title
      content { value }
    `,
    "flat pages"
  );

  for (const page of flatPages) {
    const dir = path.join(CONTENT_DIR, "pages");
    fs.mkdirSync(dir, { recursive: true });

    const content = dastToMarkdown(
      page.content,
      [],
      page.content?.links || [],
      page.slug
    );

    const frontmatter = {
      title: page.title,
      slug: page.slug,
    };

    const filePath = path.join(dir, `${slugify(page.slug)}.md`);
    fs.writeFileSync(filePath, writeFrontmatter(frontmatter) + "\n" + content + "\n");
  }
}

// ---------------------------------------------------------------------------
// Migrate Press
// ---------------------------------------------------------------------------

async function migratePress() {
  console.log("\n📰 Migrating press...");

  const press = await fetchAllRecords(
    "allPresses",
    `
      headline
      articleLink
      logo { url }
    `,
    "press items"
  );

  const dir = path.join(CONTENT_DIR, "press");
  const logosDir = path.join(dir, "logos");
  fs.mkdirSync(logosDir, { recursive: true });

  const pressData = [];
  for (const item of press) {
    const entry = {
      headline: item.headline,
      articleLink: item.articleLink,
    };

    if (item.logo?.url) {
      const ext = getExtFromUrl(item.logo.url);
      const filename = `${slugify(item.headline).substring(0, 50)}${ext}`;
      try {
        if (!fs.existsSync(path.join(logosDir, filename))) {
          await downloadFile(item.logo.url, path.join(logosDir, filename));
        }
        entry.logo = `logos/${filename}`;
      } catch (err) {
        console.error(`  ⚠ Failed to download logo for ${item.headline}: ${err.message}`);
        entry.logo = item.logo.url; // Fall back to remote URL
      }
    }

    pressData.push(entry);
  }

  fs.writeFileSync(path.join(dir, "press.json"), JSON.stringify(pressData, null, 2) + "\n");
  console.log(`  Wrote ${pressData.length} press items to press.json`);
}

// ---------------------------------------------------------------------------
// Migrate Homepage data (interim JSON until Notion integration)
// ---------------------------------------------------------------------------

async function migrateHomepage() {
  console.log("\n🏠 Migrating homepage data...");

  const data = await datocmsQuery(`{
    homepage {
      numberOfIndividuals
      numberOfOrganisations
      steeringMembers {
        companyName
        companyWebsite
        companyLogo { url width height format }
      }
      generalMembers {
        companyName
        companyWebsite
        companyLogo { url width height format }
      }
    }
  }`);

  const homepage = data.homepage;
  const dir = path.join(CONTENT_DIR, "homepage");
  fs.mkdirSync(dir, { recursive: true });

  // Download logos
  async function processMembers(members, type) {
    const logosDir = path.join(dir, "logos", type);
    fs.mkdirSync(logosDir, { recursive: true });
    const result = [];
    for (const m of members) {
      const entry = {
        companyName: m.companyName,
        companyWebsite: m.companyWebsite,
        logoWidth: m.companyLogo?.width,
        logoHeight: m.companyLogo?.height,
        logoFormat: m.companyLogo?.format,
      };
      if (m.companyLogo?.url) {
        const ext = getExtFromUrl(m.companyLogo.url);
        const filename = `${slugify(m.companyName)}${ext}`;
        try {
          if (!fs.existsSync(path.join(logosDir, filename))) {
            await downloadFile(m.companyLogo.url, path.join(logosDir, filename));
          }
          entry.logo = `logos/${type}/${filename}`;
        } catch (err) {
          console.error(`  ⚠ Failed to download logo for ${m.companyName}: ${err.message}`);
          entry.logo = m.companyLogo.url;
        }
      }
      result.push(entry);
    }
    return result;
  }

  const steeringMembers = await processMembers(homepage.steeringMembers, "steering");
  const generalMembers = await processMembers(homepage.generalMembers, "general");

  fs.writeFileSync(
    path.join(dir, "steering-members.json"),
    JSON.stringify(steeringMembers, null, 2) + "\n"
  );
  fs.writeFileSync(
    path.join(dir, "general-members.json"),
    JSON.stringify(generalMembers, null, 2) + "\n"
  );
  fs.writeFileSync(
    path.join(dir, "stats.json"),
    JSON.stringify(
      {
        numberOfIndividuals: homepage.numberOfIndividuals,
        numberOfOrganisations: homepage.numberOfOrganisations,
      },
      null,
      2
    ) + "\n"
  );

  console.log(`  Wrote ${steeringMembers.length} steering members, ${generalMembers.length} general members`);
}

// ---------------------------------------------------------------------------
// Migrate Team data (interim JSON until Notion integration)
// ---------------------------------------------------------------------------

async function migrateTeam() {
  console.log("\n👥 Migrating team data...");

  const members = await fetchAllRecords(
    "allMembers",
    `
      fullName
      role
      company
      companyWebsite
      isSteeringCommitteeMember
      isAdministrativeTeamMember
      isGeneralMember
      photo { url }
      socialMediaLink { platform link }
    `,
    "team members"
  );

  const dir = path.join(CONTENT_DIR, "team");
  const photosDir = path.join(dir, "photos");
  fs.mkdirSync(photosDir, { recursive: true });

  const teamData = [];
  for (const m of members) {
    const groups = [];
    if (m.isSteeringCommitteeMember) groups.push("steeringCommittee");
    if (m.isAdministrativeTeamMember) groups.push("administrativeTeam");
    if (m.isGeneralMember) groups.push("organisationalLeads");

    const entry = {
      fullName: m.fullName,
      role: m.role,
      company: m.company,
      companyWebsite: m.companyWebsite,
      groups,
    };

    if (m.photo?.url) {
      const ext = getExtFromUrl(m.photo.url);
      const filename = `${slugify(m.fullName)}${ext}`;
      try {
        if (!fs.existsSync(path.join(photosDir, filename))) {
          await downloadFile(m.photo.url, path.join(photosDir, filename));
        }
        entry.photo = `photos/${filename}`;
      } catch (err) {
        console.error(`  ⚠ Failed to download photo for ${m.fullName}: ${err.message}`);
      }
    }

    if (m.socialMediaLink?.length) {
      entry.socialMedia = m.socialMediaLink.map((s) => ({
        platform: s.platform,
        link: s.link,
      }));
    }

    teamData.push(entry);
  }

  fs.writeFileSync(path.join(dir, "team.json"), JSON.stringify(teamData, null, 2) + "\n");
  console.log(`  Wrote ${teamData.length} team members`);
}

// ---------------------------------------------------------------------------
// Generate Redirects
// ---------------------------------------------------------------------------

function writeRedirects(redirects) {
  console.log(`\n🔀 Generating ${redirects.length} redirects...`);

  let toml = "\n# DatoCMS migration redirects\n";
  for (const r of redirects) {
    toml += `\n[[redirects]]\nfrom = "${r.from}"\nto = "${r.to}"\nstatus = 301\n`;
  }

  // Also add redirects for removed pages
  toml += `\n# Removed pages\n`;
  toml += `\n[[redirects]]\nfrom = "/subscribe"\nto = "/"\nstatus = 301\n`;

  const redirectsFile = path.join(__dirname, "redirects-to-add.toml");
  fs.writeFileSync(redirectsFile, toml);
  console.log(`  Wrote redirect rules to scripts/redirects-to-add.toml`);
  console.log(`  Merge these into netlify.toml manually.`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("🚀 Starting DatoCMS migration...\n");
  console.log(`Content directory: ${CONTENT_DIR}`);

  // Clean content directory
  if (fs.existsSync(CONTENT_DIR)) {
    fs.rmSync(CONTENT_DIR, { recursive: true });
  }
  fs.mkdirSync(CONTENT_DIR, { recursive: true });

  const allRedirects = [];

  const articleRedirects = await migrateArticles();
  allRedirects.push(...articleRedirects);

  const manifestoRedirects = await migrateManifesto();
  allRedirects.push(...manifestoRedirects);

  await migrateFlatPages();
  await migratePress();
  await migrateHomepage();
  await migrateTeam();

  writeRedirects(allRedirects);

  console.log("\n✅ Migration complete!");
  console.log(`\nContent written to: ${CONTENT_DIR}`);
}

main().catch((err) => {
  console.error("❌ Migration failed:", err);
  process.exit(1);
});
