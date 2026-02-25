# CLAUDE.md

**IMPORTANT: Never commit directly to `main`. All work must go into the `claude` branch. Create feature branches off `claude` and merge back into `claude`. Only the project owner merges `claude` into `main` for production deploys.**

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Green Software Foundation website — currently a Gatsby 4 site (legacy) being rebuilt using Astro 5 with a parameterised component library. The new site lives in `.microsites/component-showcase/` and will replace the Gatsby site.

## Site Rebuild (Active Work)

The main website is being rebuilt using a **parameterised component library** approach. See `docs/features/site-rebuild-componentisation.md` for the full feature spec.

### Key Principle

**Content is separate from components** — all content is passed as props or data files, never hardcoded in component files. Pages are composed by importing components and passing content as props.

### Architecture

- **Framework:** Astro 5 with React 19 islands, Tailwind CSS 4, Radix UI
- **Component styling:** CVA (Class Variance Authority) for variants, Tailwind utility classes
- **Design tokens:** CSS custom properties (`--primary: #006d69`, `--accent: #aecc53`, etc.)
- **Font:** Nunito Sans (weights 400, 600, 800, 900)

### Three-Tier Component Library

1. **UI Primitives** (Tier 1) — Radix UI components in `src/components/ui/` (button, navigation-menu, sheet, etc.). Already exist, shared across microsites.
2. **Layout Components** (Tier 2) — Navbar, Footer, Hero. Parameterised with props for content.
3. **Content Section Components** (Tier 3) — TextWithImage, FeatureGrid, CardGrid, StatsGrid, CTABanner, TextBlock, LogoMarquee, Testimonial. All content via props.

### Key Directories (New Site)

- `.microsites/component-showcase/src/pages/` — Pages (homepage.astro is the main homepage demo)
- `.microsites/component-showcase/src/components/` — Parameterised Astro components
- `.microsites/component-showcase/src/components/react/` — React islands (navbar.tsx uses Radix NavigationMenu)
- `.microsites/component-showcase/src/components/ui/` — UI primitives (button, navigation-menu, sheet)
- `.microsites/component-showcase/src/data/` — Data files (logos.json with 60+ member logos)
- `.microsites/component-showcase/src/assets/` — SVG assets imported as components
- `.microsites/component-showcase/public/assets/` — Static assets (images, SVGs)

### Parameterised Components

| Component | File | Key Props |
|-----------|------|-----------|
| Navbar | `navbar.astro` + `react/navbar.tsx` | navItems, logoSrc, topBar ("project-by"\|"utility"\|"none"), ctaText |
| Hero | `hero.astro` | heading, headingAccent, body, ctas[], imageSrc, bgClass |
| LogoMarquee | `logo-marquee.astro` | heading, greyscale, bgClass (auto-loads logos.json) |
| Testimonial | `testimonial.astro` | quote, author, title, company |
| TextBlock | `text-block.astro` | heading, headingAccent, body, imageSrc, card |
| TextWithImage | `text-with-image.astro` | badge, heading, headingAccent, stats[], body, ctaText, reversed |
| FeatureGrid | `feature-grid.astro` | heading, headingAccent, features[], columns (2\|3\|4) |
| CardGrid | `card-grid.astro` | heading, headingAccent, body, cards[] (featured support), columns |
| StatsGrid | `stats-grid.astro` | heading, headingAccent, body, stats[], cards[] |
| CTABanner | `cta-banner.astro` | heading, body, ctaText, ctaHref, note |
| Footer | `footer.astro` | logoSrc, description, sections[] with links/socialLinks |

### Homepage Composition

The homepage (`homepage.astro`) composes all the above components with content passed as props. It's ~170 lines of component composition (no inline HTML). The navbar uses `topBar="none"` with the full GSF logo (`gsf-logo-full.svg`, 52px height).

### Dev Server (Component Showcase)

```bash
cd .microsites/component-showcase
npm run dev    # Dev server on localhost:4322
```

The catalogue page (`/`) shows components with default content. The homepage demo (`/homepage`) shows the new main site design.

### Microsites

Other microsites exist in `.microsites/` (sci, wdpc, soft). They share the same UI primitives and design tokens. The component showcase sources patterns from across all microsites — lean on the catalogue as the reference for component patterns.

## Legacy Gatsby Site

The legacy Gatsby site still exists at the root level (`src/`, `gatsby-config.js`, etc.) and is deployed on Netlify. It will be replaced once the new Astro site is ready.

### Legacy Prerequisites

- **Node 18.5.0** (`.nvmrc` provided — run `nvm use`)
- **Yarn 1.x**

### Legacy Commands

```bash
yarn develop    # Local dev server (localhost:8000)
yarn build      # Production build
yarn serve      # Serve production build locally
yarn clean      # Clear Gatsby cache and public/
```

### Legacy Environment Variables

Copy `.env.example` and populate with Algolia keys:
- `GATSBY_ALGOLIA_APP_ID`
- `GATSBY_ALGOLIA_SEARCH_KEY`
- `ALGOLIA_ADMIN_KEY`
