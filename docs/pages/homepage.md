# Homepage

**URL:** `/`
**File:** `src/pages/index.astro`

## What the Page Shows

The primary entry point to the site. Leads with the "silicon to screen" definition of green software, follows with the member-acquisition message ("the challenges you're solving alone, your peers are solving together"), then presents five member challenges as challenge/solution/impact stories, community reach, the four GSF functions, and routes visitors by role.

## Section Order

| # | Component | Background | Notes |
|---|-----------|-----------|-------|
| 1 | Hero | cream | "Sustainable technology, from *silicon to screen*" — the page `<h1>` |
| — | TextWithImage | cream | "Solving alone / solving together" — the membership proposition. Was the Hero until the silicon-to-screen reorder, hence the h2 |
| 2 | LogoMarquee | white | Member logos |
| — | SplitCards | cream | Problem statement + GSF Chair quote |
| 4–8 | TabbedSection ×5 | cream | Member challenge stories |
| 9 | CTACard | — | "Discuss your challenges with us" |
| 10 | CommunityReach | — | Reach stats + world map |
| 11 | FeatureGrid | — | "What we do" — four functions |
| 12 | ResourceCards | — | "Where to go next" — routes by role |
| 13 | ArticleCarousel | — | Featured content (conditional) |
| 14 | CTABanner | — | Final CTA |

Section numbering in the comments is historical and has gaps — sections added later are labelled by name rather than renumbering the whole file.

## Dynamic Elements

### Featured articles

The ArticleCarousel pulls from the `articles` content collection, not from hardcoded data:

```js
const allArticles = await getCollection("articles", (a) => a.data.published !== false);
const featuredArticles = allArticles
  .filter(a => a.data.featured && a.data.lang === "en")
  .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
  .slice(0, 10);
```

The whole section is wrapped in `{featuredArticles.length >= 3 && (...)}` — it disappears entirely below three articles rather than rendering a broken carousel. To feature an article, set `featured: true` in its frontmatter. See [article carousels doc](../components/article-carousels.md).

### Organisation logos on the challenge stories

Each TabbedSection takes an `orgs` array built by the local `resolveOrgs()` helper, which resolves organisation names against `members.json` and sorts Steering members first:

```js
orgs={resolveOrgs(["Accenture", "Avanade", "EPAM", ...])}
```

Names are matched case-insensitively on `companyName`. A name that doesn't match any member still renders, but with an empty logo — so check spelling against `members.json` when adding one.

### Logo marquee

The standard LogoMarquee component. Data comes from `members.json`, not a separate logos file. See [logo marquee doc](../components/logo-marquee.md).

### Chair quote avatar

The SplitCards attribution photo (`/assets/team/gadhu-sundaram.jpeg`) is a Notion-fetched asset — `public/assets/team/` is gitignored and populated by `npm run fetch-notion`. See [notion doc](../notion.md).

## Static Elements

- **Hero "silicon to screen"** — tagline, the green software definition, the bridging line "Making that real takes four things." (`ctaLeadIn`), and four CTAs: Standards (`/standards/`), Policy (`/policy/`), Education (`/education/`), Community (`/community/`). All four use the `outline` variant deliberately — a filled button among outlines reads as a *selected* state and implies a tab strip, but these are plain links to four pages. Labels are the short forms so all four fit one row at `xl`; the "What we do" grid lower down uses the longer names (Policy & Research, etc.). Laid out with `ctaLayout="grid"` — 2×2, going 4-across at `xl`, so a set of four never orphans one button on its own row. These are the **same four destinations** as that grid — deliberate, as top-of-page quick nav, but keep the two in sync when either changes. Illustration is `/assets/silicon-to-screen.webp` (411×403, transparent). The Hero component uses a plain `<img loading="eager">` rather than [image.astro](../../src/components/image.astro), so this asset is *not* routed through the Netlify Image CDN. Not to be confused with `GS-Vision-stack2.png` in the "Revisiting Green Software" article, which is the labelled six-layer diagram
- **Membership proposition** — TextWithImage, `reversed`: the "solving alone / solving together" message with its CTA to `/membership/`. It cannot be a second Hero, because Hero renders `<h1>` and the page already has one. Its heading sits one step below the hero at every breakpoint (`text-2xl md:text-3xl lg:text-4xl` against the hero's `text-3xl md:text-4xl lg:text-5xl`) — that is the intended hierarchy, and it matches every other section heading on the site
- **SplitCards** — problem statement and the GSF Chair quote (quote text and attribution are hardcoded)
- **Five TabbedSections** — each with a badge, quoted heading, illustration, CTA to a story page, and challenge/solution/impact tab copy
- **CommunityReach** — five hardcoded stats (course completions, LinkedIn, meetup, podcast, newsletter) plus the world map
- **FeatureGrid "What we do"** — Standards, Policy & Research, Education, Community
- **ResourceCards "Where to go next"** — three role-based routes
- **CTACard / CTABanner** — both point at `/membership/`

Note the page uses American spelling (`organizations`, `standardized`, `minimize`) while the rest of the site is predominantly British (`organisations`, `optimise`). Keep new homepage copy American for internal consistency.

## How to Update

| Change | Where |
|--------|-------|
| Change the "silicon to screen" tagline or definition | Edit the `Hero` props in `index.astro` — this is the page `<h1>`, so treat as a design/SEO change |
| Change the membership message or CTA | Edit the `TextWithImage` props in `index.astro` |
| Replace the "silicon to screen" illustration | Replace `public/assets/silicon-to-screen.webp`. An SVG is preferable if the designer can supply one — `npm run build` runs `optimise-svgs`, and the current raster is only 411px wide against a 448px display slot, so it is soft on high-DPI screens |
| Add/remove a challenge story | Add or remove a `TabbedSection` block; the linked story lives in `src/content/stories/` |
| Change which orgs appear on a story | Edit the `resolveOrgs([...])` array for that section |
| Update reach stats | Edit the `CommunityReach` `stats` array |
| Feature an article in the carousel | Set `featured: true` in the article's frontmatter — do not hardcode articles here |
| Change member logos | Notion Members DB, then `npm run fetch-notion` — not in this file |
