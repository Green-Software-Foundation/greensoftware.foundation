# Articles

**URL:** `/articles/` (listing) and `/articles/{slug}/` (detail)
**Source files:** `src/pages/articles/[...page].astro` (listing), `src/pages/articles/[...slug].astro` (detail)

## What the pages show

The **listing page** displays all published English articles in a paginated grid (12 per page), sorted by date (newest first). Each card shows the main image, date, title, and summary.

The **detail page** shows the full article content with author information, language switcher (if translations exist), structured data (JSON-LD), and a newsletter signup.

## Dynamic elements

| Element | Source | Notes |
|---------|--------|-------|
| Article content | Content collection (`src/content/articles/`) | Managed via [Sveltia CMS](../cms.md) or Markdown files |
| Translations | Language subfolders (`en/`, `ja/`, `pt/`, `zh/`) | See [CMS i18n docs](../cms.md#internationalisation-i18n) |
| Draft banner | `published` frontmatter field | Shows amber banner when `published: false` |

## Static elements

- Page heading and description
- CTA banner at the bottom
- Breadcrumb navigation

## How articles work

Articles are Markdown files in `src/content/articles/en/`. Each file's frontmatter defines its metadata.

### Key frontmatter fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Article title |
| `date` | date | Yes | Publication date (YYYY-MM-DD) |
| `summary` | string | Yes | 1-3 sentence summary for listings and carousels |
| `published` | boolean | No | Defaults to `true`. Set `false` to hide from listings while keeping the page accessible via direct URL |
| `featured` | boolean | No | Set `true` to show in the homepage carousel |
| `tags` | string[] | No | Controls which page [carousels](../components/article-carousels.md) the article appears in |
| `mainImage` | image | No | Hero image for the article |
| `organizations` | array | No | Organisations associated with the article (logos resolved from members.json) |
| `authors` | array | No | Author names and optional LinkedIn URLs |
| `teaserText` | string | No | Short text for compact card displays |

### Translations

Articles support multiple languages. Translations live in language subfolders:

```
src/content/articles/
  en/my-article/index.md     ← English (always present)
  ja/my-article/index.md     ← Japanese (only if translated)
```

Only English articles appear in the listing page. Translated articles are accessible via `/articles/{lang}/{slug}/`.

### Search indexing

Article detail pages are indexed by [PageFind](../search.md) when:

- The article is in English (`lang === "en"`)
- The article has `published !== false`

### Draft mode

Setting `published: false` in frontmatter:

- Hides the article from the listing page and all [carousels](../components/article-carousels.md)
- Keeps the page accessible at its direct URL
- Shows a draft banner
- Adds `noindex` to prevent search engine indexing
- Excludes from PageFind site search

## Rich content directives

Articles support custom Markdown directives for embedding rich content — videos, documents, buttons, and more. These work in plain `.md` files with no special setup.

**See the live showcase:** The unpublished article at [`/articles/rich-content-showcase/`](https://greensoftware.foundation/articles/rich-content-showcase/) demonstrates every directive with real GSF examples and syntax references. Source: `src/content/articles/en/rich-content-showcase/index.md`.

### Quick reference

| Directive | What it does |
|-----------|-------------|
| `::youtube{id="VIDEO_ID"}` | Responsive YouTube embed (privacy-enhanced) |
| `::vimeo{id="VIDEO_ID"}` | Responsive Vimeo embed |
| `::google-slides{id="ID"}` | Embedded Google Slides presentation |
| `::google-docs{id="ID"}` | Embedded Google Docs document |
| `::google-sheets{id="ID"}` | Embedded Google Sheets spreadsheet |
| `::google-drive{id="ID"}` | Google Drive file preview (PDFs, reports) |
| `::pdf{src="URL" title="..."}` | External PDF with download fallback |
| `::button{href="URL" label="..."}` | Centred CTA button (`variant="outline"` for outline style) |
| `::link-card{href="URL" title="..." description="..."}` | Rich link preview card |
| `::article{slug="article-slug"}` | Auto-reads title & summary from the linked article's frontmatter |
| `:::card` ... `:::` | Bordered content card wrapper (can contain any Markdown) |

All embeds accept an optional `caption="..."` attribute.

### Cross-linking articles

Use `::article{slug="..."}` to link to another GSF article. The slug is the folder name in `src/content/articles/en/`. Title and summary are pulled from the target article's frontmatter automatically — no need to type them.

```markdown
::article{slug="gsf-announces-executive-director-transition"}
```

### Existing Markdown features

These were already supported before the directives and still work:

- **GitHub-style alerts** — `> [!NOTE]`, `> [!TIP]`, `> [!WARNING]`, `> [!IMPORTANT]`, `> [!CAUTION]`
- **GFM tables, task lists, strikethrough**
- **KaTeX maths** — `$inline$` and `$$block$$`
- **Auto heading anchors** — hover to see the `#` link

### Technical details

Directives are powered by `remark-directive` + a custom handler plugin at `src/plugins/remark-directives-handler.mjs`. Styles are in `src/styles/global.css` under the "Embed directives" section. Unrecognised text directives (e.g. `:2024` in `ISO/IEC 21031:2024`) are automatically preserved as plain text.

## How to update

- **Add/edit articles** — use [Sveltia CMS](../cms.md) or edit Markdown files in `src/content/articles/en/`
- **Feature on homepage** — set `featured: true` in frontmatter
- **Show on a page carousel** — add the right [tag](../components/article-carousels.md)
- **Hide without deleting** — set `published: false`
