# CLAUDE.md

**IMPORTANT: Never commit directly to `main`. All work must go into the `claude` branch. Create feature branches off `claude` and merge back into `claude`. Only the project owner merges `claude` into `main` for production deploys.**

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Green Software Foundation website — a Gatsby 4 static site (React 18, JavaScript, SCSS) with content sourced from DatoCMS. Deployed on Netlify.

## Prerequisites

- **Node 18.5.0** (`.nvmrc` provided — run `nvm use`)
- **Yarn 1.x**

## Commands

```bash
yarn develop    # Local dev server (localhost:8000)
yarn build      # Production build
yarn serve      # Serve production build locally
yarn clean      # Clear Gatsby cache and public/
```

No test suite or linter is configured.

## Environment Variables

Copy `.env.example` and populate with Algolia keys:
- `GATSBY_ALGOLIA_APP_ID`
- `GATSBY_ALGOLIA_SEARCH_KEY`
- `ALGOLIA_ADMIN_KEY`

The DatoCMS API token is hardcoded in `gatsby-config.js`.

## Architecture

### Content Flow

DatoCMS → Gatsby GraphQL layer → React page/template components → Static HTML

### Key Directories

- `src/pages/` — Static pages (file-system routing)
- `src/templates/` — Dynamic pages created by `gatsby-node.js` (articles, manifestos, flat pages)
- `src/components/` — Reusable React components (layout, navbar, footer, search, SEO)
- `src/styles/` — SCSS organised by component, page, and template
- `src/assets/icons/` — SVG icons (`.inline.svg` suffix for inline imports)
- `src/assets/lottie/` — Lottie animation JSON files with responsive variants (mobile, tablet, desktop, large-screen)
- `src/utils/` — Algolia query definitions, country list, locale helpers

### Dynamic Page Generation (gatsby-node.js)

`gatsby-node.js` queries DatoCMS and creates pages for:
- **Articles** — paginated list (10/page) at `/articles/` + individual pages at `/{slug}`
- **Manifestos** — multi-language pages at `/manifesto/{slug}`
- **Flat pages** — generic content at `/{slug}`

Translated articles are linked via `isATranslatedArticle` and `originalArticle` fields.

### Integrations

| Service | Purpose | Plugin/Config |
|---------|---------|---------------|
| DatoCMS | Headless CMS | `gatsby-source-datocms` |
| Algolia | Site search | `gatsby-plugin-algolia` — queries defined in `src/utils/algolia-queries.js` |
| Mailchimp | Newsletter | `gatsby-plugin-mailchimp` |
| Google Tag Manager | Analytics | `gatsby-plugin-google-gtag` (GTM-WTDZZJF) |
| Netlify | Hosting/deploys | `netlify.toml` for redirects |

### Layout Pattern

All pages wrap content in `<Layout>`, which provides the navbar, footer, search modal, and optional banner. Pages pass `pageName`, `seo`, and `className` props to Layout.

### SEO Pattern

DatoCMS provides `seoMetaTags` via GraphQL. Templates destructure these and pass them to `<Seo>` (which uses React Helmet) inside `<Layout>`.

### Styling

SCSS modules scoped per component/page/template. Global styles and typography in `src/styles/common.css`. Font: Nunito Sans (weights 400, 600, 800, 900 via @fontsource).
