# Article Carousels

Article carousels appear on most pages to show related content. They are powered by frontmatter tags on article Markdown files.

**Components:** `src/components/article-carousel.astro` (Astro wrapper) + `src/components/react/article-carousel.tsx` (React island with Embla Carousel)

## How Tags Work

Articles in `src/content/articles/en/` have an optional `tags` field in their YAML frontmatter. Each page filters articles by tag to build its carousel.

```yaml
---
title: "My Article"
tags: ["sci", "standards"]
---
```

The filtering pattern used across all pages:

```js
const filtered = allArticles
  .filter(a => (a.data.tags || []).map(t => t.toLowerCase()).includes("tagname"))
  .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
```

## Tags Reference

| Tag | Page | URL |
|-----|------|-----|
| `standards` | Standards overview | `/standards/` |
| `sci` | SCI standard | `/standards/sci/` |
| `sci-web` | SCI for Web | `/standards/sci-web/` |
| `sci-ai` | SCI for AI | `/standards/sci-ai/` |
| `rtc` | Real-Time Cloud | `/standards/rtc/` |
| `see` | Software Emissions Estimator | `/standards/see/` |
| `soft` | SCI Open Footprint | `/standards/soft/` |
| `wdpc` | Web & Digital Product Carbon | `/standards/wdpc/` |
| `policy` | Policy & Research | `/policy/` |
| `research` | Policy & Research | `/policy/` |
| `community` | Community | `/community/` |
| `education` | Education | `/education/` |

## Homepage Carousel

The homepage carousel uses `featured: true` in frontmatter instead of tags. Up to 10 featured articles are shown, sorted newest first.

## 3-Article Minimum

Carousels **only render when 3 or more articles match** the tag. Below that threshold, the entire section is hidden. This is enforced by conditional rendering in each page:

```astro
{filteredArticles.length >= 3 && (
  <ArticleCarousel articles={filteredArticles} ... />
)}
```

## Organisation Logos on Cards

Article cards can show organisation logos. The `organizations` array in frontmatter contains organisation names as strings. At build time, these are matched case-insensitively against `members.json` to resolve logo paths.

- If a logo resolves, it renders at `h-4` (16px)
- If no logo is found, the org name renders as text
- `additionalOrgCount` shows a "+N more members" label
- Some carousels disable org display with `showOrganizations={false}`

For rules on which organisations to list, see the [CMS doc](../cms.md).

## How to Add an Article to a Page Carousel

1. Open the article in [Sveltia CMS](../cms.md) at `/admin/`, or edit the Markdown file directly
2. Add the appropriate tag to the `tags` array in frontmatter
3. Ensure `published` is `true` (or absent — defaults to true)
4. Check there are at least 3 articles with that tag (otherwise the carousel won't show)

## Related Articles on Story Pages

Story detail pages use the `relatedSlugs` frontmatter field to curate specific related articles, rather than tag-based filtering. The slugs reference article IDs (filenames without extension).
