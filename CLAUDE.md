# CLAUDE.md

## Critical Rules

**Never commit without explicit permission from the user. Always ask before committing, even if the work appears complete.**

**Never push to any remote branch unless the user explicitly says "push". Every push triggers a Netlify build that costs money. Commit locally and tell the user what to push.**

**Article links must use `/articles/<slug>/`, NOT `/articles/en/<slug>/`. English is the default language — including `/en/` would break when the site is translated.**

## Before Making Any Changes

**Read the documentation first.** Before changing any page or component, you MUST:

1. Read the relevant page doc in `docs/pages/` — it tells you what's dynamic vs static and where data comes from
2. Read the relevant component docs in `docs/components/` if the change involves logos, article carousels, or people/teams
3. Read `docs/notion.md` if the change involves data that comes from Notion
4. Check `docs/features/` for any historical feature spec related to the work
5. Search the `DEVLOG` for previous decisions about the area you're changing

**Many things that look like code changes are actually Notion changes.** If someone asks to update lifecycle stages, team members, member logos, project descriptions, or assembly statuses — these are managed in Notion, not in code. Point the user to the right Notion database (documented in `docs/notion.md` and the relevant page doc) rather than hardcoding values.

## Pushback Policy

**Present a plan before implementing.** Many people requesting changes don't know how the site is built. Always explain what you plan to do and get confirmation before making changes.

**Push back on these requests — explain why and suggest alternatives:**

- **Significant UI changes** — modifying the visual design, layout, or styling of existing components. The design system is intentional. Suggest raising it as a design review item.
- **Creating new UI components** — the existing component library covers most needs. Before creating a new component, check if an existing one can be parameterised differently.
- **Changing the navigation system** — the nav structure in `src/lib/nav-items.ts` is carefully designed. Changes need design review.
- **Hardcoding data that should come from Notion** — members, people, projects, press mentions, and assemblies are all Notion-managed. Don't hardcode these.
- **Hardcoding data that should come from content collections** — articles, stories, and research papers are managed via Sveltia CMS / Markdown files. Don't duplicate this data in page files.

**These are fine to do without pushback:**

- Creating new pages that follow existing patterns (mirroring the structure of similar pages)
- Adding/editing content in Markdown files (articles, stories, research)
- Updating hardcoded content that is genuinely static (press timeline entries, policy engagement cards, mission/vision text)
- Fixing bugs
- Updating documentation

## Project Overview

Green Software Foundation website — Astro 5, React 19, Tailwind CSS 4, Radix UI.

Full documentation is in the README and `docs/`:

- [README.md](README.md) — quick start, build commands, documentation index
- [docs/notion.md](docs/notion.md) — Notion data pipeline (databases, output files, refresh process)
- [docs/cms.md](docs/cms.md) — content management (publishing, draft mode, i18n)
- [docs/pages/](docs/pages/) — per-page docs explaining what's dynamic vs static
- [docs/components/](docs/components/) — logo marquee, article carousels, people/teams
- [docs/search.md](docs/search.md) — PageFind site search
- [docs/features/](docs/features/) — historical feature specs

## Architecture Summary

- **Content is separate from components** — all content via props or data files, never hardcoded in components
- **Three-tier components:** UI primitives (`src/components/ui/`), layout components (Navbar, Footer, Hero), content sections (TextWithImage, FeatureGrid, CardGrid, etc.)
- **Design tokens** in `src/styles/global.css` — ~20 CSS variables control the entire theme
- **Heading accent pattern:** `*asterisks*` in heading props renders as `font-bold text-primary`

### Key Brand Rules

- Default section bg: `bg-accent-lightest-2` (cream)
- Member logos must be shown in **colour** (not greyscale) — contractual requirement
- Font: **Nunito Sans** — `font-extrabold` (800) for headings, regular (400) for body
- CTA buttons: `bg-primary` with white text

### Key Directories

- `src/pages/` — page files
- `src/components/` — parameterised Astro components
- `src/components/react/` — React islands
- `src/components/ui/` — UI primitives (shadcn/ui + Radix)
- `src/content/` — articles, stories, research (Markdown)
- `src/data/` — JSON data files (fetched from Notion)
- `public/assets/` — static assets
- `src/lib/nav-items.ts` — navigation config

### Data Sources

| Source | What | Managed in |
|--------|------|-----------|
| `src/data/members.json` | Member logos, names, tiers | Notion |
| `src/data/people.json` | Team photos, roles, groups | Notion |
| `src/data/projects.json` | Standards, lifecycle stages | Notion |
| `src/data/press-mentions.json` | Press coverage | Notion |
| `src/data/assemblies.json` | Assembly listings | Notion |
| `src/content/articles/` | Articles | Sveltia CMS / Markdown |
| `src/content/stories/` | Member stories | Sveltia CMS / Markdown |
| `src/content/research/` | White papers | Sveltia CMS / Markdown |

### Dev Server

```bash
npm run dev          # localhost:4322
npm run build        # build with cached data
npm run build:full   # fetch Notion data, then build
npm run fetch-notion # fetch fresh Notion data only
```

### Deployment

Deployed on Netlify. Build command: `npm run build:full`. Node 22.
