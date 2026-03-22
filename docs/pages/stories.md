# Member Stories

**URLs:** `/stories/` (listing), `/stories/[slug]/` (detail)
**Files:** `src/pages/stories/[slug].astro` (detail page)

## What the Page Shows

Rich, long-form member stories showing how GSF members solved problems together. Each story has a problem statement, timeline, impact stats, contributor profiles, quotes, and related articles.

## Data Source

Stories are Markdown files in `src/content/stories/`. The Markdown body contains the "problem" narrative; structured data is in YAML frontmatter.

A story **must have a `timeline` array** to generate a page — without it, the static path is not created (`getStaticPaths` filters on `!!s.data.timeline`).

## Frontmatter Schema

Defined in `src/content.config.ts`:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | The problem statement (used as the page heading) |
| `summary` | string | Yes | One-paragraph summary |
| `published` | boolean | No | Default `true`; `false` hides from listings and shows draft banner |
| `problemHeading` | string | No | Heading for "The Problem" section |
| `journeyHeading` | string | No | Heading for "The Journey" section |
| `mainImage` | string | No | Hero image path |
| `orgs` | array | No | Organisations involved: `[{ name, logo? }]` |
| `stats` | array | No | Impact stats: `[{ value, label }]` |
| `timeline` | array | No* | Journey milestones: `[{ date, heading, body, source? }]` (*required for page generation) |
| `featuredQuote` | object | No | Highlighted quote: `{ text, author, role? }` |
| `contributors` | array | No | People who made it happen: `[{ name, role, org, photo?, contribution }]` |
| `quotes` | array | No | Additional quotes: `[{ text, author, role }]` |
| `relatedSlugs` | array | No | Article IDs for related articles carousel |
| `cta` | object | No | Call-to-action: `{ heading, body, ctaText?, ctaHref?, note? }` |

## Dynamic Data Resolution

### Organisation logos

Org names from frontmatter are matched against `members.json` to resolve logo paths. The filter includes inactive members (`m.logo && !m.hideLogo` without `m.active` check) so historical stories show accurate logos even for departed members.

### Contributor photos

Contributors listed in frontmatter are matched by name against `people.json` to auto-resolve photos:

```js
const personByName = new Map(peopleData.map(p => [p.fullName.toLowerCase(), p]));
const resolvedContributors = contributors.map(c => {
  const found = personByName.get(c.name.toLowerCase());
  return { ...c, photo: c.photo ?? found?.photo ?? null };
});
```

A contributor can also specify a `photo` path directly in frontmatter, which takes precedence.

### Related articles

The `relatedSlugs` array references article IDs (filenames without extension). These are looked up in the articles collection and displayed in an ArticleCarousel (3-article minimum).

## PageFind Indexing

Story detail pages have `data-pagefind-body` when published, making them searchable. Draft stories (`published: false`) are excluded from search.

## How to Add a Story

1. Create a Markdown file in `src/content/stories/` (e.g. `my-story.md`)
2. Add the required frontmatter: `title`, `summary`, and a `timeline` array
3. Write the problem narrative in the Markdown body
4. Add optional sections: `orgs`, `stats`, `contributors`, `quotes`, `featuredQuote`, `cta`
5. Add `relatedSlugs` to link to relevant articles

Look at `src/content/stories/carbon-aware-sdk.md` for a complete example.
