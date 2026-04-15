# Carmen Page

Project page for Carmen (Carbon Measurement Engine) at `/tools/carmen/`.

**File:** `src/pages/tools/carmen/index.astro`

## What the Page Shows

A long-form landing page for Carmen, the open-source measurement engine that implements SCI at scale across cloud infrastructure and Kubernetes applications. Covers: hero, what it is, why it matters, business benefits, audience roles, origin story, resources, timeline, project leadership, and get-involved cards.

## Dynamic Elements

### Project data (from Notion)

- **Project metadata** — imported from `src/data/projects.json`, looked up by slug `"carmen"`
- **Lifecycle stage** — displayed as a badge in the hero, read from `projects.json`
- **Parent working group** — resolved from `projects.json` to show "A [WG Name] Project" badge
- **Project leads** — the `leads` array from `projects.json` feeds the TeamGrid

See [Notion doc](../notion.md) for how `projects.json` is populated from the PWCIs database. Carmen must exist in the Notion PWCIs database with slug `"carmen"` for the dynamic elements to populate.

### Leadership fallback (TeamGrid)

If Carmen is not yet in `projects.json`, the TeamGrid uses a hardcoded fallback:
- Florent Morel — Project Lead
- Robin Castellon — Project Lead
- Joseph Cook — GSF Project Manager

Once Carmen is in Notion with correct leads, remove the fallback and use `carmenProject.leads` directly (matching the RTC page pattern).

### Article carousel (tag-based)

Filters articles tagged `"carmen"` and shows a carousel when at least 1 article matches (threshold is intentionally lower than the standard 3, as Carmen content will grow over time). The GSF announcement article is already tagged.

### Logo marquee

Standard LogoMarquee showing member logos.

## Static Elements

All other content is hardcoded in the Astro file:

- Hero copy (heading, subtitle, body, CTAs)
- "What is Carmen?" CTACard
- "Why Carmen Matters" TextBlock
- "Industry Impact" TextWithImage
- "Business Benefits" TextWithImage with iconFeatures
- "Built for Every Role" TabbedSection (3 tabs)
- "From Amadeus to Open Source" SplitCards (origin story with Asim Hussain quote)
- Virginie Corraze Testimonial
- "Get Started" ResourceCards (GitHub, Quickstart, Movement Platform, GSF Article)
- Timeline milestones
- "Get Involved" CardGrid
- CTABanner

## Assets

- **Hero/section image:** `public/assets/tools/carmen/hero.png` — copied from the article `main.png`. Replace with a proper SVG illustration when available from design.
- **Section icons:** Currently reuse `/assets/standards/rtc/` icons as semantic placeholders. Replace with Carmen-specific SVGs in `public/assets/tools/carmen/` when available.

## How to Update

- **Change lifecycle stage or leads** — edit in Notion PWCIs DB, run `npm run fetch-notion`
- **Add articles to the carousel** — add tag `"carmen"` to the article's frontmatter `tags` array
- **Edit page copy** — modify `src/pages/tools/carmen/index.astro` directly
- **Replace placeholder assets** — add SVGs to `public/assets/tools/carmen/` and update the paths in the page file
- **Navigation** — the Carmen entry in `src/lib/nav-items.ts` (Adoption → Tools section) points to `/tools/carmen/`
