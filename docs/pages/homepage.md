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
| 11 | FeatureGrid | — | "What we *do*" — four functions, `compact` padding. Moved here (right after the green software definition) in the redesign — was previously between CommunityReach and ResourceCards. Briefly renamed to "How GSF helps" during the redesign, then reverted |
| — | TextBlock | cream | "How our members solve shared challenges" — a heading-only intro (no `compact`, full padding) added right before the first challenge story, no body/CTA |
| — | Testimonial | cream | GSF Chair quote (Gadhu Sundaram, NTT DATA), `align="left"`. Restored from the original pre-redesign SplitCards section, which this same quote was originally paired with alongside a "You're not the first to face these challenges" problem statement — that framing role is now covered by "What is green software?" earlier on the page, so only the quote itself came back, as a standalone `Testimonial`, right after the story intro headline it now supports |
| 4–8 | TabbedSection ×5 | cream | Member challenge stories |
| 9 | CTACard | — | "Discuss your challenges with us", `compactTop` (reduces only the top padding — the gap coming in from the last story — leaving the bottom padding, and therefore the gap into CommunityReach, unchanged) |
| 10 | CommunityReach | — | Reach stats + world map |
| — | CTABanner | primary (green) | Newsletter subscribe CTA: "Stay up to date" / "Subscribe to our newsletter" → `/newsletter/`. Added in the redesign; briefly placed right after "What we do" but moved here, after the challenge stories and CommunityReach, so it lands after the page has made its strongest case rather than interrupting the definition → function → proof flow |
| 12 | ResourceCards | — | "Find your *next step*" (renamed from "Where to go next") — routes by role |
| 13 | ArticleCarousel | — | "Latest from the GSF" (renamed from "Featured Content") — featured content (conditional) |
| 14 | CTABanner | primary-dark (dark green) | Final CTA: "Discuss your challenges with us" / "Request a discussion" → `/membership/`. This is the third mention of the same core CTA on the page (after the Hero and the CTACard) — deliberate top/middle/bottom repetition of the primary conversion goal, not an oversight. Briefly removed during the redesign, then restored: without it the page's last full-width section was the article carousel, a low-commitment close for a page built to drive membership conversations |
| — | Footer | primary-darker | `showNewsletter={false}` — the footer's own "Join our newsletter" signup form is hidden on this page only, since the homepage already has two other newsletter touchpoints (header link, mid-page CTABanner) in close proximity. Every other page still shows it |

Section numbering in the comments is historical and has gaps — sections added later are labelled by name rather than renumbering the whole file; it no longer reflects rendering order after the FeatureGrid move above. A "130,000+ practitioners trained · ISO adoption · ..." stat line was tried above the logo marquee during the redesign and removed again; `CommunityReach` ("Our Reach") covers reach stats instead.

### Section spacing

Section gaps are the sum of the bottom padding of one section and the top padding of the next (sections are adjacent siblings with no margin between them). Most transitions on the page are 160px total (the reference point: "Discuss your challenges with us" → "Our Reach"). When new sections were added in the redesign (the story-intro `TextBlock` and the `Testimonial`), their default padding created narrower, inconsistent gaps (104–144px) — an early fix over-corrected these to a uniform 160px everywhere, which read as too much space, so they were pulled back down instead: `FeatureGrid` is `compact` (definition → "What we do" and "What we do" → story intro are both 120px), `Testimonial` uses its default (non-`spacious`) padding (144px on both sides of the quote), and `CTACard` uses the new `compactTop` prop so only the incoming gap from the last story shrinks (120px), while its outgoing gap into CommunityReach stays the reference 160px. Don't reach for uniform 160px spacing as a rule — match gaps to what reads right for the content on either side of them.

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
- **FeatureGrid "What we do"** — Standards, Policy & Research, Education, Community, `compact` padding. Sits right after the green software definition, directly ahead of the challenge stories that serve as proof of each function
- **TextBlock "How our members solve shared challenges"** — heading-only, full (non-`compact`) padding, no body or CTA, right before the five TabbedSections — introduces the stories rather than restating "What we do"
- **Testimonial (GSF Chair quote)** — Gadhu Sundaram's quote about challenges feeding back into standards and being applied to real problems, which maps directly onto the challenge/solution/impact structure of the stories that follow. Uses the existing `Testimonial` component (previously unused on the homepage, already used on 4 other pages) with a new `align="left"` prop — added because the component's `align` only ever defaulted to `"center"` before, and long (3-line) quotes read better left-aligned than centered; the other 4 pages using `Testimonial` are unaffected since they don't pass `align` and keep the `"center"` default. `company` is explicitly set to `""` since the component defaults `company` to `"Accenture"` when omitted, which would have been wrong here. Also gained a `spacious` prop (default `false`, unused here after the spacing pass below) for a larger padding variant if ever needed
- **Five TabbedSections** — each with a badge, quoted heading, illustration, CTA to a story page, and challenge/solution/impact tab copy
- **CommunityReach** — five hardcoded stats (course completions, LinkedIn, meetup, podcast, newsletter) plus the world map. LinkedIn followers and meetup members are both `13,000+` — still has its own "Subscribe" link on the newsletter stat, separate from the CTABanner below
- **Newsletter CTABanner** — a second `CTABanner` instance (green `bg-primary`, distinct from the final dark-green `bg-primary-dark` one), "Stay up to date" / "Subscribe to our newsletter" → `/newsletter/`. Sits right after CommunityReach — after the stories and reach stats have made the case, not interrupting the "What we do" → stories flow
- **ResourceCards "Find your next step"** — three role-based routes
- **CTACard** — the page's second "Discuss your challenges with us" CTA, points at `/membership/`. Uses the new `compactTop` prop (see Section spacing above) — this component is used on 13 other pages, none of which pass `compactTop`, so they keep the original full top padding
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
| Change "What we do" heading or the four function cards | Edit the `FeatureGrid` props in `index.astro` |
| Change the "How our members solve..." story intro | Edit the `TextBlock` right before the first `TabbedSection` in `index.astro` |
| Change the GSF Chair quote or attribution | Edit the `Testimonial` props right after the story intro `TextBlock` in `index.astro` |
| Change the newsletter CTA copy or link | Edit the `CTABanner` props right after `CommunityReach` in `index.astro` |
| Add/remove a challenge story | Add or remove a `TabbedSection` block; the linked story lives in `src/content/stories/` |
| Change which orgs appear on a story | Edit the `resolveOrgs([...])` array for that section |
| Update reach stats | Edit the `CommunityReach` `stats` array |
| Adjust spacing between sections | See "Section spacing" above before reaching for a blanket fix — check the actual gap first (sum of adjacent sections' padding, no margin between sections) rather than assuming everything should match 160px |
| Feature an article in the carousel | Set `featured: true` in the article's frontmatter — do not hardcode articles here |
| Change member logos | Notion Members DB, then `npm run fetch-notion` — not in this file |
| Show the footer newsletter form again on this page | Remove `showNewsletter={false}` from the `Footer` call in `index.astro` |
