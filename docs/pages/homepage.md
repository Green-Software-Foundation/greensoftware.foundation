# Homepage

**URL:** `/`
**File:** `src/pages/index.astro`

## What the Page Shows

The primary entry point to the site. Leads with the member-acquisition message ("the challenges you're solving alone, your peers are solving together") as the hero, followed by proof of the network (logos + stats), the GSF mission statement, five member challenges as challenge/solution/impact stories, the four GSF functions, and routes visitors by role.

## Section Order

| # | Component | Background | Notes |
|---|-----------|-----------|-------|
| 1 | Hero | cream | "The sustainability challenges you're solving alone? *Your peers are solving together*" — the page `<h1>`, with a single "Discuss your challenges with us" CTA |
| — | Stat line | cream | Own section, separate from the white logo section below: "130,000+ practitioners trained · ISO adoption · Global standards developed through cross-industry collaboration" |
| 2 | LogoMarquee | white | Member logos, headed "A global network shaping industry standards" |
| — | TextBlock | cream | Mission statement: "Our *mission*" / minimize carbon, energy, water, waste |
| 4–8 | TabbedSection ×5 | cream | Member challenge stories |
| 9 | CTACard | — | "Discuss your challenges with us" |
| 11 | FeatureGrid | — | "What we do" — four functions |
| 12 | ResourceCards | — | "Where to go next" — routes by role |
| 13 | ArticleCarousel | — | Featured content (conditional) |
| 14 | CTABanner | — | Final CTA |

Section numbering in the comments is historical and has gaps — sections added later are labelled by name rather than renumbering the whole file. The "Our Reach" section (`CommunityReach`, world map + 5 stats) was removed in the landing page redesign — reach is now covered by the short stat line above the logo marquee instead.

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

## Static Elements

- **Hero "solving alone / solving together"** — the page `<h1>` and its accent. Body copy names the "silicon to screen" scope of green software without a dedicated "silicon to screen" section. Single CTA, "Discuss your challenges with us", to `/membership/`. Illustration is `/assets/silicon-to-screen.webp` (411×403, transparent). The Hero component uses a plain `<img loading="eager">` rather than [image.astro](../../src/components/image.astro), so this asset is *not* routed through the Netlify Image CDN. Not to be confused with `GS-Vision-stack2.png` in the "Revisiting Green Software" article, which is the labelled six-layer diagram
- **Stat line above the logo marquee** — a plain `<div>`/`<p>` in `index.astro` (not a reusable component), on its own cream (`bg-accent-lightest-2`) band so it reads as a distinct section from the white logo marquee below it. Three hardcoded phrases separated by "·": practitioners trained, ISO adoption, and standards developed through cross-industry collaboration
- **TextBlock mission statement** — "Our *mission*" heading with the GSF mission sentence as body text. No image, no CTA — replaced the previous SplitCards problem-statement + GSF Chair quote section
- **Five TabbedSections** — each with a badge, quoted heading, illustration, CTA to a story page, and challenge/solution/impact tab copy
- **FeatureGrid "What we do"** — Standards, Policy & Research, Education, Community
- **ResourceCards "Where to go next"** — three role-based routes
- **CTACard / CTABanner** — both point at `/membership/`

Note the page uses American spelling (`organizations`, `standardized`, `minimize`) while the rest of the site is predominantly British (`organisations`, `optimise`). Keep new homepage copy American for internal consistency.

## How to Update

| Change | Where |
|--------|-------|
| Change the hero heading, body, or CTA | Edit the `Hero` props in `index.astro` — this is the page `<h1>`, so treat as a design/SEO change |
| Replace the hero illustration | Replace `public/assets/silicon-to-screen.webp`. An SVG is preferable if the designer can supply one — `npm run build` runs `optimise-svgs`, and the current raster is only 411px wide against a 448px display slot, so it is soft on high-DPI screens |
| Change the "global network" heading over the logos | Edit the `LogoMarquee` `heading` prop in `index.astro` |
| Change the stat line above the logos | Edit the plain `<div>`/`<p>` immediately before `LogoMarquee` in `index.astro` — it's hardcoded copy, not Notion-sourced |
| Change the mission statement | Edit the `TextBlock` props in `index.astro` |
| Add/remove a challenge story | Add or remove a `TabbedSection` block; the linked story lives in `src/content/stories/` |
| Change which orgs appear on a story | Edit the `resolveOrgs([...])` array for that section |
| Feature an article in the carousel | Set `featured: true` in the article's frontmatter — do not hardcode articles here |
| Change member logos | Notion Members DB, then `npm run fetch-notion` — not in this file |
