# Carmen Page

Project page for Carmen (Carbon Measurement Engine) at `/tools/carmen/`.

**File:** `src/pages/tools/carmen/index.astro`

## What the Page Shows

A long-form landing page for Carmen, the open-source measurement engine that implements SCI at scale across cloud infrastructure and Kubernetes applications. Covers: hero, origin story, what it is, why it matters, business benefits, audience roles, prerequisites, resources, timeline, project leadership, and get-involved cards.

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

All other content is hardcoded in the Astro file (in page order):

- Hero copy (heading, subtitle, body, CTAs)
- "From Amadeus to Open Source" SplitCards (origin story with Asim Hussain quote)
- Virginie Corraze Testimonial
- "What is Carmen?" CTACard — includes "Two ways to deploy Carmen" (Carbon Daemon and Carmen as a Service) as an inline two-column section within `bodyHtml`
- "Why Carmen Matters" TextBlock
- "Industry Impact" TextWithImage
- "Business Benefits" TextWithImage with iconFeatures
- "Built for Every Role" — three always-visible cards (inline `<section>` with Tailwind grid, replacing former TabbedSection)
- "What you need to run Carmen" prerequisites callout (inline `<section>`, two-column card)
- "Get Started" ResourceCards (GitHub, Quickstart, Movement Platform, GSF Article)
- Timeline milestones
- Project Status info callout (inline `<section>`, left-bordered note)
- "Get Involved" CardGrid (4 cards including "21 Contributors and Growing")
- CTABanner

### Secondary CTA (webinar vs community)

The hero's secondary CTA switches automatically at build time:
- Before 23 April 2026: "Register for Webinar" (Zoom link)
- On/after 23 April 2026: "Join the Carmen community" (Movement Platform)

This uses `new Date()` at build time. It switches on the next Netlify deploy after April 22. If no deploy happens that day, trigger a manual deploy on April 23.

## Assets

- **Hero/section image:** `public/assets/tools/carmen/hero.png` — copied from the article `main.png`. Replace with a proper SVG illustration when available from design.
- **Section icons:** Currently reuse `/assets/standards/rtc/` icons as semantic placeholders. Replace with Carmen-specific SVGs in `public/assets/tools/carmen/` when available.

## How to Update

- **Change lifecycle stage or leads** — edit in Notion PWCIs DB, run `npm run fetch-notion`
- **Add articles to the carousel** — add tag `"carmen"` to the article's frontmatter `tags` array
- **Edit page copy** — modify `src/pages/tools/carmen/index.astro` directly
- **Replace placeholder assets** — add SVGs to `public/assets/tools/carmen/` and update the paths in the page file
- **Navigation** — the Carmen entry in `src/lib/nav-items.ts` (Adoption → Tools section) points to `/tools/carmen/`
