# Homepage

**URL:** `/`
**File:** `src/pages/index.astro`

## What the Page Shows

The primary entry point to the site. Leads with the member-acquisition message ("the challenges you're solving alone, your peers are solving together") as the hero, followed by proof of the network (logos), a "What is green software?" definition, the four GSF functions, five member challenges as challenge/solution/impact stories, community reach, and routes visitors by role.

## Section Order

| # | Component | Background | Notes |
|---|-----------|-----------|-------|
| — | Navbar | — | `topBar="utility"` with a single centered link, "Subscribe to Our Newsletter" → `/newsletter/`. Every other page on the site uses `topBar="none"`, so this is homepage-only |
| 1 | Hero | cream | "The sustainability challenges you're solving alone? *Your peers are solving together*" — the page `<h1>`, with a single "Discuss your challenges with us" CTA (`primary` button) |
| 2 | LogoMarquee | white | Member logos, headed "A global network shaping industry standards" |
| — | TextBlock | cream | "What is green software?" definition: minimize carbon, energy, water, waste |
| 11 | FeatureGrid | — | "How GSF *helps*" (renamed from "What we do") — four functions. Moved here (right after the green software definition) in the redesign — was previously between CommunityReach and ResourceCards |
| — | TextBlock | cream | "How our members solve common challenges together" — a `compact` heading-only intro added right before the first challenge story, no body/CTA |
| 4–8 | TabbedSection ×5 | cream | Member challenge stories |
| 9 | CTACard | — | "Discuss your challenges with us" |
| 10 | CommunityReach | — | Reach stats + world map |
| — | CTABanner | primary (green) | Newsletter subscribe CTA: "Stay up to date" / "Subscribe to our newsletter" → `/newsletter/`. Added in the redesign; briefly placed right after "What we do" but moved here, after the challenge stories and CommunityReach, so it lands after the page has made its strongest case rather than interrupting the definition → function → proof flow |
| 12 | ResourceCards | — | "Find your *next step*" (renamed from "Where to go next") — routes by role |
| 13 | ArticleCarousel | — | "Latest from the GSF" (renamed from "Featured Content") — featured content (conditional) |
| 14 | CTABanner | primary-dark (dark green) | Final CTA: "Discuss your challenges with us" / "Request a discussion" → `/membership/`. This is the third mention of the same core CTA on the page (after the Hero and the CTACard) — deliberate top/middle/bottom repetition of the primary conversion goal, not an oversight. Briefly removed during the redesign, then restored: without it the page's last full-width section was the article carousel, a low-commitment close for a page built to drive membership conversations |
| — | Footer | primary-darker | `showNewsletter={false}` — the footer's own "Join our newsletter" signup form is hidden on this page only, since the homepage already has two other newsletter touchpoints (header link, mid-page CTABanner) in close proximity. Every other page still shows it |

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

- **Navbar header newsletter link** — `topBar="utility"` with one link, "Subscribe to Our Newsletter" → `/newsletter/`, centered and bold via small changes to the shared `Navbar` component: the topBar row's alignment class is now conditional on `topBar !== "utility"` (`class:list`) so the existing `topBar="project-by"` line (used by `catalogue/index.astro`, the only other page not setting `topBar="none"`) keeps its original right alignment untouched, and `font-bold` was added to the plain-text topBarLink `<a>` (the icon-link branch is unaffected)
- **Hero "solving alone / solving together"** — the page `<h1>` and its accent. Body copy does not mention "silicon to screen" — that phrase now lives only in the "What is green software?" definition below, to avoid repeating it twice in three sections. Single CTA, "Discuss your challenges with us", to `/membership/`, with `variant: "primary"` set explicitly — the `Hero`/`Button` combination falls back to an unstyled invisible button if a CTA omits `variant` (the Button component has no "default" variant despite Hero's fallback assuming one), so any Hero CTA on this page must set a real variant
- **TextBlock "What is green software?"** — plain question heading with the green software definition as body text (minimize carbon, energy, water, waste). No image, no CTA — replaced the previous SplitCards problem-statement + GSF Chair quote section, and before that an "Our mission" heading with the same body text
- **FeatureGrid "How GSF helps"** — Standards, Policy & Research, Education, Community. Sits right after the green software definition, directly ahead of the challenge stories that serve as proof of each function
- **TextBlock "How our members solve common challenges together"** — heading-only, `compact`, no body or CTA, right before the five TabbedSections — introduces the stories rather than restating "How GSF helps"
- **Five TabbedSections** — each with a badge, quoted heading, illustration, CTA to a story page, and challenge/solution/impact tab copy
- **CommunityReach** — five hardcoded stats (course completions, LinkedIn, meetup, podcast, newsletter) plus the world map — still has its own "Subscribe" link on the newsletter stat, separate from the CTABanner below
- **Newsletter CTABanner** — a second `CTABanner` instance (green `bg-primary`, distinct from the final dark-green `bg-primary-dark` one), "Stay up to date" / "Subscribe to our newsletter" → `/newsletter/`. Sits right after CommunityReach — after the stories and reach stats have made the case, not interrupting the "How GSF helps" → stories flow
- **ResourceCards "Find your next step"** — three role-based routes
- **CTACard** — the page's second "Discuss your challenges with us" CTA, points at `/membership/`
- **Final CTABanner** — the page's third and last "Discuss your challenges with us" CTA, right before the footer — see the Section Order note above on why this repetition is deliberate
- **Footer, newsletter form hidden** — `<Footer showNewsletter={false} />`. `Footer` gained a `showNewsletter` prop (default `true`, so every other page is unaffected) specifically so the homepage's third newsletter touchpoint (the footer's own "Join our newsletter" form) doesn't stack on top of the header link and the mid-page CTABanner

Note the page uses American spelling (`organizations`, `standardized`, `minimize`) while the rest of the site is predominantly British (`organisations`, `optimise`). Keep new homepage copy American for internal consistency.

## How to Update

| Change | Where |
|--------|-------|
| Change the header newsletter link text or link | Edit the `Navbar` `topBarLinks` prop in `index.astro` |
| Change the hero heading, body, or CTA | Edit the `Hero` props in `index.astro` — this is the page `<h1>`, so treat as a design/SEO change |
| Replace the hero illustration | Replace `public/assets/silicon-to-screen.webp`. An SVG is preferable if the designer can supply one — `npm run build` runs `optimise-svgs`, and the current raster is only 411px wide against a 448px display slot, so it is soft on high-DPI screens |
| Change the "global network" heading over the logos | Edit the `LogoMarquee` `heading` prop in `index.astro` |
| Change the "What is green software?" definition | Edit the `TextBlock` props in `index.astro` |
| Change "How GSF helps" heading or the four function cards | Edit the `FeatureGrid` props in `index.astro` |
| Change the "How our members solve..." story intro | Edit the `TextBlock` (`compact`) right before the first `TabbedSection` in `index.astro` |
| Change the newsletter CTA copy or link | Edit the `CTABanner` props right after `CommunityReach` in `index.astro` |
| Add/remove a challenge story | Add or remove a `TabbedSection` block; the linked story lives in `src/content/stories/` |
| Change which orgs appear on a story | Edit the `resolveOrgs([...])` array for that section |
| Update reach stats | Edit the `CommunityReach` `stats` array |
| Feature an article in the carousel | Set `featured: true` in the article's frontmatter — do not hardcode articles here |
| Change member logos | Notion Members DB, then `npm run fetch-notion` — not in this file |
| Show the footer newsletter form again on this page | Remove `showNewsletter={false}` from the `Footer` call in `index.astro` |
