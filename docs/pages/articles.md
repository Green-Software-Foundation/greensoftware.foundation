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

## How to update

- **Add/edit articles** — use [Sveltia CMS](../cms.md) or edit Markdown files in `src/content/articles/en/`
- **Feature on homepage** — set `featured: true` in frontmatter
- **Show on a page carousel** — add the right [tag](../components/article-carousels.md)
- **Hide without deleting** — set `published: false`
