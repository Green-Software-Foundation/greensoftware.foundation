# CLAUDE.md

**IMPORTANT: Never commit directly to `main`. All work must go into the `claude` branch. Create feature branches off `claude` and merge back into `claude`. Only the project owner merges `claude` into `main` for production deploys.**

**IMPORTANT: Never commit without explicit permission from the user. Always ask before committing, even if the work appears complete.**

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

All site data (members, logos, team, stats) is fetched from Notion via `scripts/fetch-notion-data.cjs`. Requires `NOTION_API_KEY` env var (in `.env` locally, configured in Netlify dashboard for deploys).

- `npm run fetch-notion` — fetch fresh data from Notion into `src/data/` and `public/assets/`
- `npm run build` — build with cached data (no Notion fetch)
- `npm run build:full` — fetch Notion data then build (used by Netlify)

The fetch script exits gracefully if `NOTION_API_KEY` is missing, creating empty fallback JSON files so the build still succeeds.

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
