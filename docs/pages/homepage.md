# Homepage

**URL:** `/`
**File:** `src/pages/index.astro`

## What the Page Shows

The primary entry point to the site. Leads with the member-acquisition message ("the challenges you're solving alone, your peers are solving together") as the hero, followed by proof of the network (logos), a "What is green software?" definition, the four GSF functions, five member challenges as challenge/solution/impact stories, community reach, and routes visitors by role.

## Section Order

| # | Component | Background | Notes |
|---|-----------|-----------|-------|
| 1 | Hero | cream | "The sustainability challenges you're solving alone? *Your peers are solving together*" — the page `<h1>`, with a single "Discuss your challenges with us" CTA (`primary` button) |
| 2 | LogoMarquee | white | Member logos, headed "A global network shaping industry standards" |
| — | TextBlock | cream | "What is green software?" definition: minimize carbon, energy, water, waste |
| 11 | FeatureGrid | — | "What we do" — four functions. Moved here (right after the green software definition) in the redesign — was previously between CommunityReach and ResourceCards |
| — | CTABanner | primary (green) | Newsletter subscribe CTA: "Stay up to date" / "Subscribe to our newsletter" → `/newsletter/`. Added in the redesign, placed high on the page rather than only inside the CommunityReach stats grid |
| 4–8 | TabbedSection ×5 | cream | Member challenge stories |
| 9 | CTACard | — | "Discuss your challenges with us" |
| 10 | CommunityReach | — | Reach stats + world map |
| 12 | ResourceCards | — | "Where to go next" — routes by role |
| 13 | ArticleCarousel | — | Featured content (conditional) |
| 14 | CTABanner | — | Final CTA |

Section numbering in the comments is historical and has gaps — sections added later are labelled by name rather than renumbering the whole file; it no longer reflects rendering order after the FeatureGrid move above. A "130,000+ practitioners trained · ISO adoption · ..." stat line was tried above the logo marquee during the redesign and removed again; `CommunityReach` ("Our Reach") covers reach stats instead.

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

- **Hero "solving alone / solving together"** — the page `<h1>` and its accent. Body copy does not mention "silicon to screen" — that phrase now lives only in the "What is green software?" definition below, to avoid repeating it twice in three sections. Single CTA, "Discuss your challenges with us", to `/membership/`, with `variant: "primary"` set explicitly — the `Hero`/`Button` combination falls back to an unstyled invisible button if a CTA omits `variant` (the Button component has no "default" variant despite Hero's fallback assuming one), so any Hero CTA on this page must set a real variant
- **TextBlock "What is green software?"** — plain question heading with the green software definition as body text (minimize carbon, energy, water, waste). No image, no CTA — replaced the previous SplitCards problem-statement + GSF Chair quote section, and before that an "Our mission" heading with the same body text
- **FeatureGrid "What we do"** — Standards, Policy & Research, Education, Community. Sits right after the green software definition
- **Newsletter CTABanner** — a second `CTABanner` instance (green `bg-primary`, distinct from the final dark-green `bg-primary-dark` one), "Stay up to date" / "Subscribe to our newsletter" → `/newsletter/`. Sits between "What we do" and the first challenge story so the newsletter CTA isn't buried near the bottom
- **Five TabbedSections** — each with a badge, quoted heading, illustration, CTA to a story page, and challenge/solution/impact tab copy
- **CommunityReach** — five hardcoded stats (course completions, LinkedIn, meetup, podcast, newsletter) plus the world map — still has its own "Subscribe" link on the newsletter stat, separate from the CTABanner above
- **ResourceCards "Where to go next"** — three role-based routes
- **CTACard / CTABanner (final)** — both point at `/membership/`

Note the page uses American spelling (`organizations`, `standardized`, `minimize`) while the rest of the site is predominantly British (`organisations`, `optimise`). Keep new homepage copy American for internal consistency.

## How to Update

| Change | Where |
|--------|-------|
| Change the hero heading, body, or CTA | Edit the `Hero` props in `index.astro` — this is the page `<h1>`, so treat as a design/SEO change |
| Replace the hero illustration | Replace `public/assets/silicon-to-screen.webp`. An SVG is preferable if the designer can supply one — `npm run build` runs `optimise-svgs`, and the current raster is only 411px wide against a 448px display slot, so it is soft on high-DPI screens |
| Change the "global network" heading over the logos | Edit the `LogoMarquee` `heading` prop in `index.astro` |
| Change the "What is green software?" definition | Edit the `TextBlock` props in `index.astro` |
| Change the newsletter CTA copy or link | Edit the `CTABanner` props right after `FeatureGrid` in `index.astro` — not to be confused with the final `CTABanner` at the bottom of the page |
| Add/remove a challenge story | Add or remove a `TabbedSection` block; the linked story lives in `src/content/stories/` |
| Change which orgs appear on a story | Edit the `resolveOrgs([...])` array for that section |
| Update reach stats | Edit the `CommunityReach` `stats` array |
| Feature an article in the carousel | Set `featured: true` in the article's frontmatter — do not hardcode articles here |
| Change member logos | Notion Members DB, then `npm run fetch-notion` — not in this file |
