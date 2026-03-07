# TODO

## Quick Fixes (href changes, swaps, deletions — no new pages)

- [x] **Homepage testimonial** — replaced with Gadhu Sundaram (GSF Chair) quote
- [x] **Homepage story links** — wired TabbedSection CTAs to story pages (practitioner, sci-measurement, soft-framework, sci-for-ai, ai-accelerated-consensus)
- [x] **Homepage map image** — replace current image with the map from Genya
- [x] **Remove logos from featured content** — set `showOrganizations={false}` on ArticleCarousel
- [x] **"Explore membership" CTA** → `/membership/`
- [x] **"Implementing in your engineering team" CTA** → `/education/` (placeholder — page needs building)
- [x] **"Want to contribute?" CTA** → `/community/` (placeholder — page needs building)
- [x] **"Discuss your challenge with us"** → `/membership/` (Hero, CTACard, CTABanner)
- [x] **Membership page story links** — updated with real story data/links from content collection
- [x] **Nav menu link updates** — most links already correct; updated: Policy Radar → `policy-radar.greensoftware.foundation`, Assemblies → `assemblies.greensoftware.foundation`, State of Green Software → `stateof.greensoftware.foundation`, CXO Bytes → `wiki.greensoftware.foundation/cxo-bytes-podcast`, Community Platform → Movement Platform (`movement.greensoftware.foundation`), Carbon Hack → `hack.greensoftware.foundation/`, Success Stories → Member Stories (`/stories/`), Press & Media → `/press/`. Footer dropdown links renamed to "About our standards/policy/community programme →". Removed Partners directory. Membership page now uses shared `navItems` from `nav-items.ts`.
- [x] **Remove Partners directory** from nav
- [x] **Footer update** — updated homepage and membership page footers with real URLs
- [x] **Nav project icons** — fetch official icons from directory project, update navbar data
- [x] **Standards nav label** — rename to something like "Our standards process" and restructure dropdown
- [ ] **Google Analytics** — add tracking script to the site layout
- [x] **Component playground** — Astrobook at `/playground/` with 24 components, 51 story variants
- [ ] [Asset deduplication](docs/features/asset-deduplication.md) — scan for duplicate images, consolidate, add asset registry to CLAUDE.md
- [x] **404 page** — created `src/pages/404.astro`

## Find from Notion (batch session — just need to locate the right Notion pages/URLs)

- [x] **Members Playbook** → `wiki.greensoftware.foundation/getting-started` (labelled "Getting Started")
- [x] **Members Onboarding** → `wiki.greensoftware.foundation/orientation`
- [x] **Employee Registration** → `wiki.greensoftware.foundation/register`
- [ ] **Contact form** — find the existing form (there should be one already)
- [x] **Press & Media content** — find in Notion, will need importing
- [x] **Brand & Assets** — built `/brand/` page with colour palette, logos, asset downloads, Canva templates, official description
- [ ] **Newsletter page/form** — verify if a signup page exists, or find the form URL to create one

## Medium Effort (a few hours each)

- [x] **Member stories as content collection** — stories wired as Astro content collection with dynamic `[slug].astro` template
- [/] **Manifesto page** — migrate existing content from legacy site into a new Astro page
- [ ] **Newsletter page** — simple "join our newsletter" page with signup form (once Notion form URL is found)
- [x] **Search (PageFind)** — integrated PageFind for static site search with custom React dialog, phrase search, English-only indexing, keyboard shortcut (Cmd+K)
- [x] **Governance & Leadership team fix** — fixed Person/Role property type swap (title vs rich_text) and added direct photo download from GSF Team DB
- [x] **Footer update** — updated homepage and membership footers with real URLs
- [ ] **Roll out to greensoftware.org** — DNS + Netlify config for production domain

## Bigger Pieces (new pages, need content decisions + creative session)

- [x] **Standards page** — built `/standards/` with lifecycle pipeline, dynamic project cards from projects.json, AI consensus section, assemblies, spec quality grid
- [x] **Policy & Research page** — built `/policy/` with PWG leadership, Policy Radar, engagement cards, principles, partnerships, research publications, tagged article carousel
- [x] **About page** — built `/about/` with mission, vision, values, founding story, structure, what we do, stats
- [x] **Education page** — built `/education/` landing page
- [x] **Community landing page** — built `/community/` with podcasts, meetups, events, Champions, Movement Platform
- [-] **History page** — GSF timeline/history (needs figuring out and building)
- [/] **Assemblies page** — own page eventually; link out to existing assemblies page for now
- [x] **Press & Media section** — import content from Notion sources into a new page/section
- [/] **Certification page** — potentially needed under Standards, TBD

## Done

- [x] Notion fetch script: flat logos directory (merged steering/general into single `public/assets/logos/`)
- [x] Notion fetch script: historical members (fetch all statuses, `active` flag on each record)
- [x] Notion fetch script: skip-if-exists for image downloads (`--force` flag to override)
- [x] Notion fetch script: performance optimisation (pre-fetch volunteers, caches, parallel PWCI lookups — 5.5min → 2.5min)
- [x] Member stories: 13 problem-first stories mined from 188 legacy articles (`docs/content/stories/original/`)
- [x] RTC story: Real-Time Cloud standard story researched and written
