# CLAUDE.md

**IMPORTANT: Never commit directly to `main`. All work must go into the `dev` branch. Create feature branches off `dev` and merge back into `dev`. Only the project owner merges `dev` into `main` for production deploys.**

**IMPORTANT: Never commit without explicit permission from the user. Always ask before committing, even if the work appears complete.**

**IMPORTANT: Never push to any remote branch unless the user explicitly says "push". Every push triggers a Netlify build that costs money. Commit locally and tell the user what to push.**

**IMPORTANT: Always restart the dev server yourself after making changes — never ask the user to do it. Kill the existing process on port 4322, then run `npm run dev -- --port 4322` in the background.**

**IMPORTANT: Article links must use `/articles/<slug>/`, NOT `/articles/en/<slug>/`. English is the default language — including `/en/` would break when the site is translated. The `en/` prefix exists in the content directory structure but should never appear in URLs.**

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Green Software Foundation website — an Astro 5 site with a parameterised component library. The legacy Gatsby 4 site has been moved to `_legacy/`.

## Site Architecture

The site is built using a **parameterised component library** approach. See `docs/features/site-rebuild-componentisation.md` for the full feature spec.

### Key Principle

**Content is separate from components** — all content is passed as props or data files, never hardcoded in component files. Pages are composed by importing components and passing content as props.

### Architecture

- **Framework:** Astro 5 with React 19 islands, Tailwind CSS 4, Radix UI
- **Component styling:** CVA (Class Variance Authority) for variants, Tailwind utility classes
- **Design tokens:** CSS custom properties defined in `src/styles/global.css`, mapped to Tailwind via `--color-*` aliases
- **Font:** Nunito Sans (Google Fonts, weights 200–900, normal + italic)

### Technology Stack Explained

The UI stack has four layers, each with a distinct role:

1. **Tailwind CSS** — A utility-first CSS framework. Unlike Bootstrap which gives pre-built components (`class="btn btn-primary"`), Tailwind provides atomic utility classes that each do one thing (`bg-primary text-white px-4 py-2 rounded-lg`). You compose styles directly in HTML. No opinions about what a "button" looks like — you build it yourself from small pieces. The advantage is full design control with no framework aesthetics to override.

2. **Radix UI** — A headless (unstyled) React component library. It provides accessible interactive behaviour for things like tabs, dropdown menus, dialogs, and navigation menus — handling keyboard navigation, ARIA attributes, focus management — but renders with **zero styling**. You get a perfectly accessible tabs component that looks like nothing until you style it.

3. **shadcn/ui** — Not a package you install, but a **code generator**. Running `npx shadcn@latest add button` copies a ready-made component file into `src/components/ui/`. That file wraps a Radix primitive with Tailwind styling. You own the code and can freely modify it. It bridges the gap between Radix (behaviour only) and a fully styled component.

4. **CVA (Class Variance Authority)** — A small utility for defining component variants. Instead of writing conditionals for different button styles, you declare a variants map (e.g. `primary`, `outline`, `secondary`) and CVA generates the right Tailwind classes.

**How they connect in practice:**

```
Astro (framework — builds pages, handles routing)
  └── React islands (interactive components that need JS)
        └── shadcn/ui components (src/components/ui/ — copied, owned code)
              └── Radix UI (accessible behaviour) + Tailwind (styling) + CVA (variants)
```

**Theming:** The entire site theme is controlled by ~20 CSS variables in `src/styles/global.css` (lines 66-89). Tailwind maps these via `--color-*` aliases so that classes like `bg-primary` resolve to `var(--color-primary)` which resolves to `var(--primary)` which is `#006d69`. Changing the hex values re-themes the entire site — no component code needs to change.

### Brand & Design Tokens

Tokens are defined in `src/styles/global.css`.

**Primary palette (teal):**

| Token | Hex | Tailwind class | Usage |
|-------|-----|----------------|-------|
| `--primary-darkest-2` | `#002625` | `bg-primary-darkest-2` | — |
| `--primary-darkest` | `#002c2a` | `bg-primary-darkest` | — |
| `--primary-darker` | `#003734` | `bg-primary-darker` | Featured card bg, dark sections |
| `--primary-dark` | `#00524f` | `bg-primary-dark` | Body text on light bg |
| `--primary` | `#006d69` | `bg-primary`, `text-primary` | Brand colour, headings, links, CTA buttons |
| `--primary-light` | `#80b6b4` | `bg-primary-light` | — |
| `--primary-lighter` | `#bfdbd9` | `bg-primary-lighter` | Navbar border |
| `--primary-lightest-2` | `#e5f0f0` | `bg-primary-lightest-2` | — |
| `--primary-lightest-1` | `#f2f8f7` | `bg-primary-lightest-1` | — |

**Accent palette (green/lime):**

| Token | Hex | Tailwind class | Usage |
|-------|-----|----------------|-------|
| `--accent-darker` | `#576629` | `bg-accent-darker` | — |
| `--accent-dark` | `#83993e` | `bg-accent-dark` | — |
| `--accent` | `#aecc53` | `bg-accent`, `text-accent` | Accent highlights, tab indicators, heading accents |
| `--accent-light` | `#d7e6a9` | `bg-accent-light` | — |
| `--accent-lighter` | `#ebf2d4` | `bg-accent-lighter` | Card backgrounds |
| `--accent-lightest-2` | `#f7faee` | `bg-accent-lightest-2` | **Default section background (cream)** |
| `--accent-lightest-1` | `#fbfcf6` | `bg-accent-lightest-1` | — |

**Grey palette:**

| Token | Hex | Usage |
|-------|-----|-------|
| `--gray-darker` | `#606060` | Secondary text |
| `--gray-dark` | `#b2b2b2` | — |
| `--gray` | `#ededed` | — |
| `--gray-light` | `#f6f6f6` | — |
| `--border` | `#e5e5e5` | Card/section borders |

**Key brand rules:**

- Default section bg is `bg-accent-lightest-2` (cream `#f7faee`) — most components default to this
- Logo marquee uses `bg-white` for contrast
- Heading accent text uses `text-primary` (teal `#006d69`)
- Member logos must always be shown in **colour** (not greyscale) — contractual requirement
- CTA buttons use `bg-primary` with white text
- Featured cards use `bg-primary-darker` with white text
- Font: **Nunito Sans** — `font-extrabold` (800) for headings, `font-bold` (700) for subheadings, regular (400) for body

### Three-Tier Component Library

1. **UI Primitives** (Tier 1) — Radix UI components in `src/components/ui/` (button, navigation-menu, sheet, etc.).
2. **Layout Components** (Tier 2) — Navbar, Footer, Hero. Parameterised with props for content.
3. **Content Section Components** (Tier 3) — TextWithImage, FeatureGrid, CardGrid, StatsGrid, CTABanner, CTACard, TextBlock, LogoMarquee, Testimonial, TabbedSection, CommunityReach, ArticleCarousel, ResourceCards. All content via props.

### Key Directories

- `src/pages/` — Pages (homepage.astro is the main homepage)
- `src/components/` — Parameterised Astro components
- `src/components/react/` — React islands (navbar.tsx uses Radix NavigationMenu)
- `src/components/ui/` — UI primitives (button, navigation-menu, sheet)
- `src/data/` — Data files (logos.json with 60+ member logos)
- `src/assets/` — SVG assets imported as components
- `public/assets/` — Static assets (images, SVGs)
- `.microsites/` — Reference microsites (sci, wdpc, soft) — separate repos, used as design reference

### Parameterised Components

| Component | File | Key Props |
|-----------|------|-----------|
| Navbar | `navbar.astro` + `react/navbar.tsx` | navItems, logoSrc, topBar ("project-by"\|"utility"\|"none"), ctaText |
| Hero | `hero.astro` | heading, headingAccent, body, ctas[], imageSrc, bgClass, scrollIndicator |
| LogoMarquee | `logo-marquee.astro` | heading, greyscale, bgClass (auto-loads logos.json) |
| Testimonial | `testimonial.astro` | quote, author, title, company |
| TextBlock | `text-block.astro` | heading (supports `*accent*`), body, imageSrc, card, compact |
| TabbedSection | `tabbed-section.astro` | badge, heading, imageSrc, ctaText, tabs[] ({value, heading, description}), compact |
| TextWithImage | `text-with-image.astro` | badge, heading, headingAccent, stats[], body, ctaText, reversed |
| FeatureGrid | `feature-grid.astro` | heading (supports `*accent*`), body, features[] (with linkText/linkHref), columns (2\|3\|4), variant ("cards"\|"bordered") |
| CardGrid | `card-grid.astro` | heading, headingAccent, body, cards[] (featured support), columns |
| StatsGrid | `stats-grid.astro` | heading, headingAccent, body, stats[], cards[] |
| CommunityReach | `community-reach.astro` | heading (supports `*accent*`), body, imageSrc, stats[], ctaText, ctaHref |
| ArticleCarousel | `article-carousel.astro` + `react/article-carousel.tsx` | heading, body, articles[] (with organizations[] array, each org has name + optional logoSrc) |
| ResourceCards | `resource-cards.astro` | heading (supports `*accent*`), body, cards[] (icon, title, description, ctaText, ctaHref) |
| CTABanner | `cta-banner.astro` | heading, body, ctaText, ctaHref, note |
| CTACard | `cta-card.astro` | heading, body, ctaText, ctaHref, imageSrc, imageAlt |
| Footer | `footer.astro` | logoSrc, description, sections[] with links/socialLinks |

### Heading Accent Pattern

Many components support inline accent text in headings using `*asterisks*` syntax (e.g. `heading="You're not the *first* to face these challenges"`). The asterisk-wrapped word renders in `font-bold text-primary`. This replaced the older `heading`+`headingAccent` two-prop pattern.

### Homepage Composition

The homepage (`homepage.astro`) composes ~260 lines of component composition (no inline HTML). Structure: Navbar → Hero (with scroll indicator) → LogoMarquee → Testimonial → TextBlock (heading) → 5× TabbedSection (problem-solution pairs, all compact) → CTACard → CommunityReach (5 stats + world map) → FeatureGrid (bordered variant, 2×2) → ResourceCards (3 cards) → ArticleCarousel (4 articles with multi-org logos) → CTABanner → Footer. The navbar uses `topBar="none"` with the full GSF logo (`gsf-logo-full.svg`, 52px height).

### Data Fetching

All site data (members, logos, team, stats, press mentions) is fetched from Notion via `scripts/fetch-notion-data.cjs`. Requires `NOTION_API_KEY` env var (in `.env` locally, configured in Netlify dashboard for deploys).

- `npm run fetch-notion` — fetch fresh data from Notion into `src/data/` and `public/assets/`
- `npm run build` — build with cached data (no Notion fetch)
- `npm run build:full` — fetch Notion data then build (used by Netlify)

The fetch script exits gracefully if `NOTION_API_KEY` is missing, creating empty fallback JSON files so the build still succeeds.

**Data files produced:** `members.json` (all tiers), `people.json` (all volunteers/staff), `stats.json`, `projects.json`, `press-mentions.json`. Note: `logos.json` no longer exists — `LogoMarquee` and all logo consumers read directly from `members.json`, filtering by `active && logo && !hideLogo` at runtime.

**Notion roll-up limitation:** Roll-up properties of type `files` do **not** return signed download URLs in the Notion API — the `files` array is always empty. Photos for subscription-based people (steering committee, chairs/leads, org leads) are resolved via a `volunteerPhotoByName` map built from the Volunteers DB records fetched in `main()`, not from roll-ups.

**Subscription roll-ups:** Person data for subscription-based people is read directly from Subscription DB roll-up fields (`First Name`, `Surname`, `Title`, `LinkedIn`, `Member`, `Volunteer Status`) via `extractPersonFromSub()`. No per-subscription volunteer lookup needed. Volunteer Status is checked as a warning only — people with active subscriptions are included regardless of volunteer status.

### Press Page (`/press/`)

The press page at `src/pages/press/index.astro` pulls data dynamically from multiple sources:

- **Member counts** — computed from `steering-members.json`, `general-members.json`, `academic-government-members.json` (filtered by `active: true`)
- **Governed-by list** — active steering member company names
- **Leadership** — hardcoded config at top of file (chair, vice-chair, executive director names) matched against `team.json` for photos
- **Stories** — from the stories content collection
- **Press mentions** — from `src/data/press-mentions.json` (fetched from Notion "GSF Mentions in the News" database)
- **Timeline** — hardcoded 22-item timeline with links to articles and external sites

### Policy & Research Page (`/policy/`)

The policy page at `src/pages/policy/index.astro` covers the Policy Working Group and research programme:

- **Leadership** — Chris Adams, Aya Saed (co-chairs), Joseph Cook (Head of Research) — photos from `team.json`
- **Policy Radar** — TextWithImage linking to `policy-radar.greensoftware.foundation`
- **Policy Engagement** (`#engagement` anchor) — 6 hardcoded cards with article links (GHG Protocol, AI Environmental Impacts Act, NY CCAA, EGDC, UK GDSA, EU AI Act)
- **Engagement Principles** — 5 principles from PWG mission statement (FeatureGrid, no icons)
- **Partnerships** — W3C, IASA, SustainableIT.org, UK GDSA, BCS (FeatureGrid with article links)
- **Research** — 4 hardcoded publication cards (AI Environmental Assessments, Green AI Position Paper, Texas State study, UBS/Microsoft whitepaper)
- **Article carousel** — dynamically filtered by `tags` field containing "policy" or "research"

### Article Tags

Articles support an optional `tags` field (string array) in frontmatter. Tags are used to surface articles on topic pages:

- `"policy"` — appears in the Policy & Research carousel
- `"research"` — appears in the Policy & Research carousel
- `"community"` — appears in the Community page carousel
- Tags are managed via the Sveltia CMS Tags widget or directly in frontmatter

### Standards Page (`/standards/`)

The standards page at `src/pages/standards/index.astro` showcases GSF's standards process:

- **Dynamic project cards** — imports `projects.json` and uses a `standardDefs` array with optional `urlSlug` overrides (e.g. `real-time-cloud` → `rtc` for the URL)
- **Lifecycle badges** — each card shows its lifecycle stage; "Learn more" links are hidden for Proposal/Pre-proposal stages
- **Sections**: Hero → VerticalPipeline (7-stage lifecycle) → Project cards grid → AI-facilitated consensus → Assemblies → Spec quality FeatureGrid → SCI Certification CTACard → CTABanner

### Navigation (`src/lib/nav-items.ts`)

The nav config supports these features:

- **`headerLink`** — per-section CTA button rendered at the top of a mega-menu section (e.g. "About our education programme →"). Defined on `NavSection`, rendered in both desktop `MegaMenuPanel` and mobile `MobileNavSection`.
- **`footerLink`** — panel-level CTA at the bottom of the entire dropdown (e.g. "About our standards process →"). Defined on `NavItemDropdown`.
- **Icons** — currently all commented out across all menus. Both `iconSrc` (project image URL) and `icon` (Lucide icon name) are supported but disabled pending design review.

### Site Search (PageFind)

The site uses [PageFind](https://pagefind.app/) for static site search. PageFind indexes the built HTML at build time and serves a chunked index client-side.

- **Build integration:** `pagefind --site dist` runs automatically after `astro build` (configured in `package.json` build scripts)
- **Search UI:** Custom React component at `src/components/react/search-dialog.tsx` — uses PageFind's JS API (not its default UI) for full styling control
- **Trigger:** Click the search icon in the navbar, or press `Cmd+K` / `Ctrl+K`
- **Lazy-loaded:** The search dialog is imported via `React.lazy()` in `navbar.tsx` so PageFind JS is only loaded when search is opened

**Indexing rules (opt-in model):**

- Pages with `data-pagefind-body` are indexed; all others are excluded
- Currently indexed: individual article pages (English only), individual story pages
- Chrome elements (navbar, footer, CTA banner, newsletter signup) have `data-pagefind-ignore`
- Listing/index pages are deliberately excluded (no `data-pagefind-body`)

**Search behaviour:**

- Multi-word queries default to phrase search (wrapped in quotes); falls back to OR if no phrase results
- Single-word queries use standard search
- Results show title, content type badge, and highlighted excerpt

**Dev workflow:** PageFind needs a built index to work. Run `npm run build` once, then copy `dist/pagefind/` to `public/pagefind/` for dev testing. The `public/pagefind/` directory is gitignored.

**Vite compatibility:** The PageFind import uses `new Function("return import('/pagefind/pagefind.js')")` to bypass Vite's import analysis, which would otherwise try to bundle it at build time.

### Component Playground (Astrobook)

The site includes an [Astrobook](https://github.com/ocavue/astrobook) component playground at `/playground/` for visually browsing and testing all parameterised components.

- **24 components** with **51 story variants** in `src/components/*.stories.ts`
- **CSF v3 format** — default export with `component`, named exports with `args`
- **Configured** in `astro.config.mjs` with `global.css` for correct Tailwind tokens and fonts
- **Story args must match component interfaces exactly** — props are passed directly, so mismatches cause runtime crashes

### Dev Server

```bash
npm run dev    # Dev server on localhost:4322
```

The homepage is at `/` and the component catalogue is at `/catalogue`.

### Deployment (Netlify)

- Deployed on Netlify, site: `green-software-foundation`
- Build command: `npm run build:full` (via `netlify.toml`)
- Node version: 22 (set in both `.nvmrc` and `netlify.toml`)
- **Use the `netlify` CLI** to inspect deploy logs, site config, and environment variables when debugging build failures (e.g. `netlify deploy --build`, `netlify env:list`, `netlify logs`)

## Legacy Gatsby Site

The legacy Gatsby site has been moved to `_legacy/`. It was previously deployed on Netlify and may still be needed for reference.
