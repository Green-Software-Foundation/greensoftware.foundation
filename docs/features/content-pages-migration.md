# Feature Spec: Markdown Content Pages & Legacy Migration

**Status:** Planned
**Created:** 2026-02-27
**Last Updated:** 2026-02-27

## Overview

Bring markdown-based content into the Astro site: policy/flat pages, articles, and the manifesto. All are variations of the same underlying system — Astro content collections rendering markdown with frontmatter metadata and SEO tags.

## Problem Statement

The legacy Gatsby site has ~200 markdown content pages that need migrating:

- **4 policy pages** — code-of-conduct, terms, trademark, steering membership (simple text)
- **195 articles** — 188 EN + 4 JA + 2 PT + 1 ZH (rich metadata, images, author bios)
- **8 manifesto versions** — 7 languages + illustrations (currently bespoke, should become a normal article)

The legacy system had poor markdown support (bespoke rendering, limited image handling). The new system should use proper markdown with rich typography and flexible image treatments.

## Content Types

### 1. Flat Pages (policy, terms, etc.)

Simple markdown pages with minimal frontmatter. Served under their own URL paths.

**Legacy location:** `_legacy/content/pages/`
**Files:** `code-of-conduct.md`, `policy-terms.md`, `policy-trademark.md`, `policy-steering-membership.md`

**Legacy frontmatter:**
```yaml
---
title: "Page Title"
slug: "url-path"
---
```

**New frontmatter (proposed):**
```yaml
---
title: "Code of Conduct"
slug: "code-of-conduct"
description: "SEO description for this page"
---
```

These are just articles without dates, authors, or images. They could live in the same content collection with a `type: page` field, or in a separate `pages` collection. Either works.

### 2. Articles

Rich content pages with author bios, images, dates, and metadata.

**Legacy location:** `_legacy/content/articles/{en,ja,pt,zh}/`
**Scale:** 195 articles across 4 languages, 190+ image directories

**Legacy frontmatter schema:**
```yaml
---
title: "Article Title"
date: "YYYY-MM-DD"
summary: "Short summary for listings"
teaserText: "Longer teaser displayed above content"
mainImage: "../images/article-slug/main.png"
originBlogName: "Source Publication"        # optional, for reproduced articles
publishedOriginUrl: "https://..."          # optional
authors:
  - fullName: "Author Name"
    role: "Job Title"
    company: "Company Name"
    companyWebsite: "https://..."
    photo: "../images/authors/photo.jpg"
    socialMedia:
      - platform: "Twitter"
        link: "https://..."
translators:                               # optional, for translated articles
  - fullName: "Translator Name"
    role: "Role"
    company: "Company"
    # same shape as authors
---
```

**New frontmatter (proposed):**
```yaml
---
title: "Article Title"
date: 2025-01-23
description: "SEO meta description"
summary: "Short summary for listings and cards"
mainImage: "./images/main.png"
mainImageAlt: "Descriptive alt text"
authors:
  - name: "Author Name"
    role: "Job Title"
    company: "Company Name"
    avatar: "./images/authors/photo.jpg"
    links:
      twitter: "https://..."
      linkedin: "https://..."
origin:                                     # optional
  name: "Source Publication"
  url: "https://..."
lang: "en"                                  # for multilingual variants
translators: []                             # optional, same shape as authors
---
```

### 3. Manifesto

Currently a bespoke page with structured YAML (mission/vision/topics arrays, SVG illustrations). Available in 8 languages.

**Legacy location:** `_legacy/content/manifesto/{en,ja,pt,zh,de,es,it}/`

**Recommendation:** Convert to a standard article page. The structured YAML (topics array, illustrations) can be flattened into regular markdown with headings and inline images. This eliminates the need for a custom template. The content is the same — it's just text, headings, and images.

If the manifesto needs a visually distinct treatment, that can be handled via a `layout: manifesto` frontmatter field that selects a different template, rather than a completely separate content type.

## Technical Decision: Remark/Rehype Plugins + Remark Directives

**Decision:** Use **remark/rehype plugins** for markdown processing, with **`remark-directive`** for extended image treatments. Not MDX, not CSS class attributes.

### Why not MDX?

- Content authors would need to learn React component syntax (`<FullWidthImage src="..." />`)
- All 195 legacy `.md` files would need converting to `.mdx`
- Overkill for what amounts to image layout variations
- Note: `@astrojs/mdx` is already installed but not needed for this — Astro processes `.md` natively through remark/rehype

### Why not CSS class attributes (`{.full-width}`)?

- Requires a remark plugin anyway (`remark-attr` or similar) to parse the attribute syntax
- Non-standard — content authors may not know the syntax
- Less readable than directives for block-level treatments

### Why remark/rehype + remark-directive?

- Content stays as **standard markdown** — legacy articles migrate as-is with zero changes
- Astro's markdown pipeline is already remark/rehype based (native, no extra integration)
- **`remark-directive`** adds a clean, readable syntax for extended treatments using the [generic directives proposal](https://talk.commonmark.org/t/generic-directives-plugins-syntax/444)
- Plugins compose incrementally — add features without changing existing content

### Remark Plugins Needed

| Plugin | Purpose |
|--------|---------|
| `remark-directive` | Enables `:::directive` syntax for image treatments and custom blocks |
| `rehype-autolink-headings` | Adds anchor links to headings |
| `rehype-slug` | Generates heading IDs for anchor links |
| `remark-gfm` | GitHub Flavoured Markdown (tables, strikethrough, task lists) |
| `rehype-pretty-code` / `shiki` | Syntax highlighting for code blocks |
| Custom rehype plugin | Wraps standalone images in `<figure>` with `<figcaption>` from alt text |

### Image Treatment Syntax

**Default image** — standard markdown, renders at content width inside a `<figure>`:
```markdown
![Chart showing emissions reduction over time](./images/chart.png)
```

**Full-width image** — breaks out of the content column:
```markdown
:::full-width
![Aerial view of the data centre](./images/aerial.png)
:::
```

**Captioned image** — explicit caption separate from alt text:
```markdown
:::figure{caption="Source: IEA World Energy Outlook 2025"}
![Global energy consumption by sector](./images/energy.png)
:::
```

**Side-by-side images** — two images in columns:
```markdown
:::columns
![Before optimisation](./images/before.png)

![After optimisation](./images/after.png)
:::
```

**Float image** — smaller image with text wrapping:
```markdown
:::float-right
![Author photo](./images/author.png)
:::

The rest of this paragraph wraps around the image...
```

**Callout/aside blocks** (bonus — same directive syntax):
```markdown
:::note
This article was originally published on the AWS Sustainability Blog.
:::
```

## Article Page Design

The article page should support rich markdown with good typography. Unlike the legacy system, we want proper markdown rendering with flexible image treatments.

### Markdown Features Required

The article template must handle all standard markdown plus extensions:

- **Headings** (h1-h6) with proper hierarchy and anchor links
- **Block quotes** with styled treatment
- **Code blocks** with syntax highlighting (for technical articles)
- **Tables** with responsive handling
- **Footnotes** (if supported by the markdown processor)
- **Images** with multiple treatments (see above)
- **Directives** for callouts, full-width blocks, columns

### Markdown Demo Page

Add a **"Markdown & Typography"** section to the existing component catalogue at `/catalogue`. This keeps all visual references in one place. The section should exercise every markdown feature and image treatment:

- All heading levels (h1-h6)
- Paragraphs, bold, italic, strikethrough, inline code
- Ordered and unordered lists (nested)
- Block quotes (single and nested)
- Code blocks with syntax highlighting (multiple languages)
- Tables (simple and complex)
- Horizontal rules
- Links (internal and external)
- Standard images
- Full-width images (`::: full-width`)
- Captioned images (`::: figure`)
- Side-by-side images (`::: columns`)
- Float images (`::: float-right`)
- Callout blocks (`::: note`, `::: warning`)
- Footnotes (if supported)

This is the **first implementation step** — build the catalogue demo, verify the typography and styles visually, then proceed to templates and migration.

### SEO & Metadata

Every content page (flat pages, articles, manifesto) should have:

- `<title>` tag from frontmatter
- `<meta name="description">` from frontmatter `description` field
- Open Graph tags (`og:title`, `og:description`, `og:image`)
- Twitter card tags
- `<link rel="canonical">` (see `html-lang-canonical.md`)
- `lang` attribute matching the content language
- Structured data (JSON-LD) for articles: `@type: Article`, `datePublished`, `author`, etc.

### Article Listing Page

A `/articles` page that lists all articles with:

- Title, date, summary, main image thumbnail
- Filtering by category/theme (using existing article metadata)
- Pagination or infinite scroll
- Search integration (links to site search — see `site-search.md`)

## Implementation Plan

### Phase 0: Markdown Demo in Catalogue (FIRST)

1. Install remark/rehype plugins (`remark-directive`, `remark-gfm`, `rehype-slug`, `rehype-autolink-headings`, syntax highlighting)
2. Configure plugins in `astro.config.mjs`
3. Build a custom rehype plugin to wrap images in `<figure>` and handle directives
4. Write article prose styles (typography, spacing, image treatments) in Tailwind
5. Add a "Markdown & Typography" section to `/catalogue` with every feature exercised
6. Review and refine visually

### Phase 1: Astro Content Collections Setup

1. Define content collection schemas in `src/content/config.ts` for `articles` and `pages`
2. Set up the directory structure: `src/content/articles/en/`, `src/content/pages/`
3. Wire up dynamic routes (`[...slug].astro`) to render content collections

### Phase 2: Article Template

1. Build the article layout component using the styles proven in Phase 0
2. Add author bio section at the bottom
3. Add SEO/meta tags component (title, description, OG, Twitter, JSON-LD)
4. Add related articles section (optional)

### Phase 3: Flat Page Template

1. Build a simpler layout for policy/terms pages (no author, no date, no images)
2. This is likely just the article template with those sections hidden

### Phase 4: Content Migration

1. Copy policy pages from `_legacy/content/pages/` → `src/content/pages/`
2. Copy articles from `_legacy/content/articles/` → `src/content/articles/`
3. Copy and reorganise images from `_legacy/content/articles/images/` → appropriate location
4. Update image paths in frontmatter and markdown bodies
5. Validate all frontmatter against the new schema
6. Convert manifesto from structured YAML to standard markdown article

### Phase 5: Article Listing Page

1. Build `/articles` page with card grid
2. Add filtering and pagination
3. Connect to the ArticleCarousel component on the homepage

### Phase 6: Multilingual Content

1. Set up language-based routing for translated articles (`/ja/articles/...`)
2. Add language switcher to article pages (when translations exist)
3. Migrate translated articles (4 JA, 2 PT, 1 ZH)
4. Migrate manifesto translations (7 languages)

### Phase 4a: Legacy Markdown Cleanup

The DatoCMS export produced markdown with several systematic issues that need automated cleanup across all 195 articles. Run these as batch find-and-replace operations:

| Issue | Count | Pattern | Fix |
|-------|-------|---------|-----|
| Broken italic spacing | ~12 articles | `*word, *` or `*word *` (space before closing `*`) | Remove space before closing asterisk |
| Bold-wrapped headings | 58 articles | `## **Heading**` | Strip inner `**` — headings are already bold |
| Unnecessary `<u>` tags | 147 articles | `[<u>link text</u>](url)` | Strip `<u></u>` tags — prose links are already styled |
| Raw HTML figures | 16 articles | `<figure><img src="..."><figcaption>` | Convert to markdown `![alt](src)` or `:::figure` directive |

These are all DatoCMS export artefacts. The fixes should be scripted rather than manual — a single cleanup script can handle all four patterns across all articles in one pass.

## Legacy Content Inventory

| Content | Count | Legacy Path | Notes |
|---------|-------|-------------|-------|
| Policy pages | 4 | `_legacy/content/pages/` | Simple markdown |
| Articles (EN) | 188 | `_legacy/content/articles/en/` | Full metadata |
| Articles (JA) | 4 | `_legacy/content/articles/ja/` | With translator credits |
| Articles (PT) | 2 | `_legacy/content/articles/pt/` | Minimal metadata |
| Articles (ZH) | 1 | `_legacy/content/articles/zh/` | Minimal metadata |
| Manifesto | 8 versions | `_legacy/content/manifesto/` | 7 languages + 29 SVG illustrations |
| Article images | 190+ dirs | `_legacy/content/articles/images/` | PNG/JPG mixed |
