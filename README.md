# Green Software Foundation Website

The official website for the [Green Software Foundation](https://greensoftware.foundation), built with Astro 5, React 19, and Tailwind CSS 4.

## Quick start

```bash
npm install
npm run dev          # Dev server on localhost:4322
```

The homepage is at `/`. The component playground is at `/playground/`.

## Build & deploy

```bash
npm run build        # Build with cached data
npm run build:full   # Fetch Notion data, then build (used by Netlify)
npm run fetch-notion # Fetch fresh data from Notion (requires NOTION_API_KEY in .env)
```

Deployed on Netlify. Node 22 (set in `.nvmrc` and `netlify.toml`).

## Branching & deployment

All work happens on feature branches and merges into `main` via pull request. Every PR gets a Netlify deploy preview. Use **merge commits** (not squash) when merging.

Content that isn't ready to go live uses `published: false` in frontmatter — the page renders at its URL for preview, but is hidden from all listings, search, and sitemap.

## Documentation

### For content editors

- [Content Management (CMS)](docs/cms.md) — logging in, publishing workflow, draft mode, translations
- [Articles & Tagging](docs/how-to-featured-articles.md) — writing articles, frontmatter, tags, featured flag, carousels
- [Site Operations FAQ](docs/site-operations.md) — how to add logos, members, people, standards, press mentions, assemblies, and more

### For developers

- [CLAUDE.md](CLAUDE.md) — full project context: architecture, component library, design tokens, data pipeline
- [Governance & Leadership](docs/how-to-governance-leadership.md) — Notion data sources, how the governance page works
- [Google Analytics](docs/google-analytics.md) — GA4 setup and implementation
- [Site Rollout Plan](docs/features/site-rollout.md) — deploying to greensoftware.foundation

### Article tags reference

Add tags to an article's frontmatter to make it appear on page carousels:

| Tag | Page |
| --- | --- |
| `standards` | /standards/ |
| `sci` | /standards/sci/ |
| `sci-web` | /standards/sci-web/ |
| `sci-ai` | /standards/sci-ai/ |
| `rtc` | /standards/rtc/ |
| `see` | /standards/see/ |
| `soft` | /standards/soft/ |
| `wdpc` | /standards/wdpc/ |
| `policy` | /policy/ |
| `research` | /policy/ |
| `community` | /community/ |
| `education` | /education/ |

The homepage carousel uses the `featured: true` flag instead of tags. Carousels only appear when 3+ articles match.

## Key directories

| Directory | Contents |
| --------- | -------- |
| `src/pages/` | Astro page files |
| `src/components/` | Parameterised Astro components |
| `src/components/react/` | React islands (interactive components) |
| `src/components/ui/` | UI primitives (shadcn/ui + Radix) |
| `src/content/` | Articles, stories, and research (Markdown) |
| `src/data/` | JSON data files (fetched from Notion) |
| `public/assets/` | Static assets (images, logos, team photos) |
| `scripts/` | Build and data-fetch scripts |
| `docs/` | Documentation and how-to guides |
