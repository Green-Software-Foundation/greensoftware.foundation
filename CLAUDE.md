# CLAUDE.md

**IMPORTANT: Never commit directly to `main`. All work must go into the `claude` branch. Create feature branches off `claude` and merge back into `claude`. Only the project owner merges `claude` into `main` for production deploys.**

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

### Dev Server

```bash
npm run dev    # Dev server on localhost:4322
```

The catalogue page (`/`) shows components with default content. The homepage demo (`/homepage`) shows the main site design.

## Legacy Gatsby Site

The legacy Gatsby site has been moved to `_legacy/`. It was previously deployed on Netlify and may still be needed for reference.
