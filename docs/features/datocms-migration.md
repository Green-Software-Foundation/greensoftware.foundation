# Feature Spec: Migrate DatoCMS to Local Markdown with i18n

**Status:** Planned
**Created:** 2026-02-23
**Last Updated:** 2026-02-23

## Overview

Remove the DatoCMS dependency entirely by migrating all content into local Markdown/JSON files within the repo. Introduces a proper i18n URL scheme and uses Netlify Image CDN for image transforms instead of DatoCMS/imgix or Gatsby Sharp.

## Problem Statement

All dynamic content is sourced from DatoCMS, which adds cost, an external dependency, and a hard-coded API token in the repo. The current multilanguage support is a per-item hack (translated articles/manifestos are separate DatoCMS records linked by custom fields) with no consistent URL scheme. Images are served via DatoCMS's imgix CDN with on-the-fly transforms baked into GraphQL queries. Moving to local content gives the team full ownership, simplifies the stack, and enables a cleaner i18n approach.

## Decisions

- **URL scheme:** English stays at current URLs (no prefix). Translations get `/{lang}/` prefix (e.g. `/es/articles/slug`, `/pt/manifesto`). Zero redirects needed for English content.
- **Translation linking:** Same slug in locale folders — `content/articles/en/green-software.md` and `content/articles/es/green-software.md` are implicitly linked by sharing a filename.
- **Image handling:** Netlify Image CDN for all image transforms (resize, compression, format). No build-time image processing. Store originals in the repo, serve via `/.netlify/images?url=/path&w=750`. Greyscale effect via CSS `filter: grayscale(100%)`.
- **Pages to remove:** onboarding, projects, subscribe.
- **Out of scope:** Team and homepage membership data will move to Notion separately.

## Content Directory Structure

```
content/
  articles/
    en/
      what-is-green-software.md
      carbon-aware-computing.md
    es/
      what-is-green-software.md       # same filename = translation
    zh/
      what-is-green-software.md
    images/
      what-is-green-software/
        main.jpg
        figure-1.png
  manifesto/
    en/
      manifesto.md
    es/
      manifesto.md
    pt/
      manifesto.md
    images/
      illustration-carbon.svg
  pages/
    policy/
      steering-membership.md
    other-flat-page.md
  press/
    press.json
    logos/
      techcrunch.png
```

## URL Mapping

| Content | English URL | Translated URL |
|---------|------------|----------------|
| Article | `/articles/{slug}` (unchanged) | `/{lang}/articles/{slug}` |
| Article list | `/articles`, `/articles/2` (unchanged) | `/{lang}/articles` (if needed) |
| Manifesto | `/manifesto` (unchanged) | `/{lang}/manifesto` |
| Flat page | `/{slug}` (unchanged) | N/A (no i18n currently) |
| Press | `/press` (unchanged) | N/A |

## Redirects

Old translated URLs redirect (301) to new locale-prefixed URLs:

```
/manifesto-es        → /es/manifesto
/manifesto-pt        → /pt/manifesto
/manifesto-zh        → /zh/manifesto
... etc for each manifesto language

/articles/slug-es    → /es/articles/slug
... etc for each translated article

/subscribe           → /
/onboarding          → /
```

The migration script generates the full redirect list by comparing old DatoCMS slugs with new paths. Redirects go in `netlify.toml`.

## Frontmatter Schemas

### Articles (`content/articles/{lang}/{slug}.md`)

```yaml
---
title: "What is Green Software?"
date: "2022-03-15"
teaserText: "A brief introduction to green software..."
mainImage: "../images/what-is-green-software/main.jpg"
authors:
  - fullName: "Asim Hussain"
    role: "Executive Director"
    company: "Green Software Foundation"
    companyWebsite: "https://greensoftware.foundation"
    photo: "../images/authors/asim-hussain.jpg"
    socialMedia:
      - platform: "Twitter"
        link: "https://twitter.com/jawache"
translators: []          # only on translated articles
originBlogName: ""       # optional, for republished articles
publishedOriginUrl: ""   # optional
---

Article body in Markdown...
```

- `lang` and `slug` are derived from the file path, not duplicated in frontmatter.
- `isATranslatedArticle` / `originalArticle` fields are gone — any file not in `en/` is a translation, linked by matching filename.

### Manifesto (`content/manifesto/{lang}/manifesto.md`)

```yaml
---
title: "Green Software Foundation Manifesto"
mainParagraph: "We believe..."
mission: "Our mission is..."
vision: "Our vision is..."
topics:
  - title: "Carbon"
    illustration: "../images/illustration-carbon.svg"
    description: "Description text..."
    operationalise: |
      - Action item one
      - Action item two
editors:
  - fullName: "Editor Name"
    role: "Translator"
    photo: "../images/editors/name.jpg"
---
```

### Flat Pages (`content/pages/{slug-or-path}.md`)

```yaml
---
title: "Steering Membership Policy"
slug: "policy/steering-membership"
---

Page content in Markdown...
```

The `slug` field allows nested URL paths without needing nested directories.

### Press (`content/press/press.json`)

```json
[
  {
    "headline": "Green Software Foundation launches...",
    "articleLink": "https://techcrunch.com/...",
    "logo": "logos/techcrunch.png"
  }
]
```

## Image Strategy

**Approach: Netlify Image CDN** — all image transforms happen at the edge, zero build-time processing.

Current DatoCMS/imgix transforms and their replacements:

| Current (imgix) | Usage | Replacement |
|-----------------|-------|-------------|
| `w: "1920"` | Article full-width images | `/.netlify/images?url=/path&w=1920` |
| `w: "750"` | Article list thumbnails | `/.netlify/images?url=/path&w=750` |
| `w: "130"` | Author/team avatar photos | `/.netlify/images?url=/path&w=130` |
| `auto: "compress"` | Everywhere | Netlify auto-negotiates format (WebP/AVIF) + `q=75` |
| `fm: "jpg"` | Author/team photos | Not needed — Netlify auto-negotiates best format |
| `sat: -100` | Author photos (greyscale) | CSS `filter: grayscale(100%)` |

How it works:
- Store original full-resolution images in the repo under `content/*/images/`.
- Reference them via Netlify Image CDN URLs: `/.netlify/images?url=/content/articles/images/photo.jpg&w=750`.
- Netlify transforms on first request, caches at the edge. Auto-negotiates WebP/AVIF based on browser support.
- Use `loading="lazy"` on `<img>` tags for lazy loading.
- Create a small React helper component for convenience:

```jsx
const NetlifyImage = ({ src, width, alt, className, ...props }) => (
  <img
    src={`/.netlify/images?url=${src}${width ? `&w=${width}` : ''}&q=75`}
    alt={alt}
    className={className}
    loading="lazy"
    {...props}
  />
);
```

Benefits over Gatsby Sharp:
- No build-time image processing (fastest part of the build to slow down)
- No `gatsby-plugin-image` / `gatsby-plugin-sharp` / `gatsby-transformer-sharp` / `gatsby-remark-images` complexity
- No `GatsbyImage` component or `gatsbyImageData` GraphQL queries
- Plain `<img>` tags — simpler templates, easier to reason about
- Works identically in dev and production (via `netlify dev`)

## Implementation Plan

### Phase 1: Migration Script

Create `scripts/migrate-from-datocms.js` — a one-time Node.js script that:

1. Connects to DatoCMS API using the existing token
2. Fetches all articles, manifestos, flat pages, press items
3. Converts DatoCMS structured text (DAST) to Markdown:
   - Standard nodes (paragraph, heading, list, blockquote, code) → Markdown
   - `DatoCmsArticleContentImage` blocks → `<figure>` HTML in Markdown
   - `DatoCmsArticleContentTable` blocks → already stored as Markdown in DatoCMS
   - `DatoCmsArticleYoutubeVideo` blocks → `<iframe>` HTML in Markdown
   - Inline record links → resolved to `/articles/{slug}` Markdown links
4. Downloads all images (article images, author photos, manifesto illustrations, press logos) to `content/*/images/`
5. Writes `.md` and `.json` files with proper frontmatter
6. Generates a redirect mapping file (old slug → new URL) for `netlify.toml`

### Phase 2: Gatsby Config

**Files:** `gatsby-config.js`, `package.json`

1. Add `gatsby-source-filesystem` entries for each content directory
2. Add `gatsby-transformer-json` (for press data)
3. Remove `gatsby-source-datocms` plugin config
4. Remove `gatsby-plugin-image`, `gatsby-plugin-sharp`, `gatsby-transformer-sharp` (no longer needed)
5. Add `siteMetadata` with global SEO defaults (replaces `datoCmsSite` query)
6. Update `gatsby-plugin-feed` config to query `allMarkdownRemark` instead of `allDatoCmsArticle`

### Phase 3: gatsby-node.js Rewrite

**File:** `gatsby-node.js`

1. Add `onCreateNode` — for each `MarkdownRemark` node, derive and attach:
   - `collection` from `sourceInstanceName` ("articles", "manifesto", "pages")
   - `lang` from parent directory name ("en", "es", etc.)
   - `slug` from filename
2. Rewrite `createPages`:
   - **Articles:** Query `allMarkdownRemark` filtered by collection=articles. Create paginated English list at `/articles/`. Create individual pages at `/articles/{slug}` (English) or `/{lang}/articles/{slug}` (translations).
   - **Manifesto:** Create pages at `/manifesto` (English) or `/{lang}/manifesto`.
   - **Flat pages:** Create pages at `/{slug}` from frontmatter.

### Phase 4: Template Rewrites

**`src/templates/article.js`** (most complex):
- Replace `datoCmsArticle` GraphQL query with `markdownRemark` query
- Replace `<StructuredText>` with `dangerouslySetInnerHTML={{ __html: html }}`
- Replace `<GatsbyImage>` with `<NetlifyImage>` helper (plain `<img>` through Netlify CDN)
- Translation links: query `allMarkdownRemark` for same slug across locales
- Authors/translators from frontmatter instead of linked DatoCMS records
- Remove `react-datocms` and `gatsby-plugin-image` imports

**`src/templates/articles-list.js`**:
- Query `allMarkdownRemark` filtered by collection=articles, lang=en
- Sort by `frontmatter___date`
- Replace `<GatsbyImage>` with `<NetlifyImage>`

**`src/templates/manifesto.js`**:
- Query `markdownRemark` for current page, `allMarkdownRemark` for language switcher
- Topics from frontmatter YAML array (operationalise field needs Markdown→HTML at build time)

**`src/templates/flat-page.js`**:
- Simplest rewrite — swap `datoCmsFlatPage` query for `markdownRemark`, render `html`

### Phase 5: Page & Component Updates

- **`src/pages/press.js`** — switch from `allDatoCmsPress` to `allPressJson`
- **`src/components/seo.js`** — remove `HelmetDatoCms` and `datoCmsSite` static query, use `siteMetadata` via `useStaticQuery`
- **`src/components/person-blob.js`** — replace `<GatsbyImage>` with `<NetlifyImage>`
- **`src/components/member-blob.js`** — replace `<GatsbyImage>` with `<NetlifyImage>`
- **`src/pages/index.js`** and **`src/pages/team.js`** — interim: extract current data into JSON files until Notion integration is built
- **`src/utils/algolia-queries.js`** — rewrite queries from DatoCMS to MarkdownRemark

### Phase 6: Cleanup

1. Delete removed pages: `onboarding.js`, `projects.js`, `subscribe.js`
2. Add all redirects to `netlify.toml`
3. Remove `gatsby-source-datocms`, `react-datocms`, `gatsby-plugin-image`, `gatsby-plugin-sharp`, `gatsby-transformer-sharp` from `package.json`
4. Remove DatoCMS API token from `gatsby-config.js`
5. Remove `datocms-structured-text-to-plain-text` dependency
6. Update footer/nav links that pointed to removed pages
7. Run `yarn build` and verify

## Edge Cases

- **SEO tags:** Article template currently hacks `seoMetaTags.tags[3]` directly. Replace with clean `<Seo>` component using frontmatter title + teaserText.
- **Article pagination:** Currently filters `isATranslatedArticle: { ne: true }`. Replace with `lang: { eq: "en" }` filter.
- **RSS feed:** Currently filters translations. Update to filter by `fields.lang === "en"`.
- **Manifesto `operationalise` field:** Contains Markdown in YAML frontmatter. Process to HTML at build time in `gatsby-node.js` via `createPages` context, or use a small utility.
- **Greyscale author photos:** Replace imgix `sat: -100` with CSS `filter: grayscale(100%)` on the `<img>` element. Enables hover effects too.
- **Local dev:** Use `netlify dev` to test Netlify Image CDN locally (mirrors production behaviour).
