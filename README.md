# Green Software Foundation Website

The official website for the [Green Software Foundation](https://greensoftware.foundation), built with Astro 5, React 19, and Tailwind CSS 4.

## Quick start

```bash
npm install
npm run dev          # Dev server on localhost:4322
```

The homepage is at `/` and the component catalogue is at `/catalogue`.

## Data from Notion

Member logos, team data, and stats are fetched from Notion at build time. To fetch fresh data locally:

```bash
# Requires NOTION_API_KEY in .env
npm run fetch-notion
```

On Netlify, the build command (`npm run build:full`) fetches Notion data automatically before building.

If `NOTION_API_KEY` is not set, the build still succeeds using cached or empty fallback data.

## Build & deploy

```bash
npm run build        # Build with cached data (no Notion fetch)
npm run build:full   # Fetch Notion data, then build (used by Netlify)
```

Deployed on Netlify. Node 22 (set in `.nvmrc` and `netlify.toml`).

## How-to guides

- [Articles & Featured Content](docs/how-to-featured-articles.md) — How to write articles, manage frontmatter, and feature content on the homepage carousel
- [Governance & Leadership Page](docs/how-to-governance-leadership.md) — Where governance page data comes from, Notion data sources, and how to keep it updated

## Project documentation

- [CLAUDE.md](CLAUDE.md) — Full project context: architecture, component library, design tokens, data pipeline
- [Component Catalogue](docs/component-catalogue/README.md) — Guide to the parameterised component library
- [Site Rebuild Spec](docs/features/site-rebuild-componentisation.md) — Original feature spec for the Astro rebuild

## Key directories

| Directory | Contents |
| --------- | -------- |
| `src/pages/` | Astro page files |
| `src/components/` | Parameterised Astro components |
| `src/components/react/` | React islands (interactive components) |
| `src/components/ui/` | UI primitives (shadcn/ui + Radix) |
| `src/content/articles/` | Article Markdown files |
| `src/data/` | JSON data files (fetched from Notion) |
| `public/assets/` | Static assets (images, logos, team photos) |
| `scripts/` | Build and data-fetch scripts |
| `docs/` | Project documentation and how-to guides |
