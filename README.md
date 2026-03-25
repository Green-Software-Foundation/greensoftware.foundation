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

The site has three layers of documentation: **system docs** (how the data pipeline and infrastructure work), **component docs** (reusable elements that appear across pages), and **page docs** (what each page shows and where its data comes from).

### Getting started

- [Content Management (CMS)](docs/cms.md) — logging in, publishing workflow, draft mode, translations
- [CLAUDE.md](CLAUDE.md) — full project context: architecture, component library, design tokens

### System

- [Notion data pipeline](docs/notion.md) — databases, output files, assets, refresh process, known limitations
- [Search (PageFind)](docs/search.md) — static indexing, which pages are indexed, testing locally
- [Google Analytics](docs/google-analytics.md) — GA4 setup, custom events, testing
- [Forms](docs/forms.md) — Netlify Forms, Notion integration, troubleshooting, spam protection

### Components

- [Logo marquee](docs/components/logo-marquee.md) — data source, sort order, how to add/hide logos
- [Article carousels](docs/components/article-carousels.md) — tags reference, featured flag, 3-article minimum
- [People & teams](docs/components/people.md) — people.json structure, TeamGrid, photo resolution

### Pages

- [Articles](docs/pages/articles.md) — article listing, detail pages, frontmatter, translations, draft mode
- [Research & White Papers](docs/pages/research.md) — whitepapers, consultation responses, working groups
- [Standards](docs/pages/standards.md) — individual standard pages (SCI, RTC, etc.)
- [Press & Media](docs/pages/press.md) — member counts, leadership, timeline, press mentions
- [Governance](docs/pages/governance.md) — steering committee, staff, chairs/leads, org leads
- [Policy & Research](docs/pages/policy.md) — engagement, partnerships, research papers
- [Community](docs/pages/community.md) — podcasts, meetups, events
- [Education](docs/pages/education.md) — courses, learning resources
- [Membership](docs/pages/membership.md) — logo marquee, fee tables, member stories
- [Stories](docs/pages/stories.md) — frontmatter schema, contributor photos, related articles
- [Assemblies](docs/pages/assemblies.md) — status values, application form, completed assemblies
- [Static pages](docs/pages/static-pages.md) — About, Brand, Contact, Certification, Newsletter

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
