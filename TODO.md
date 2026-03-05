# TODO

## Quick Fixes (href changes, swaps, deletions — no new pages)

- [x] **Homepage testimonial** — replaced with Gadhu Sundaram (GSF Chair) quote
- [x] **Homepage story links** — wired TabbedSection CTAs to story pages (practitioner, sci-measurement, soft-framework, sci-for-ai, ai-accelerated-consensus)
- [ ] **Homepage map image** — replace current image with the map from Genya
- [x] **Remove logos from featured content** — set `showOrganizations={false}` on ArticleCarousel
- [x] **"Explore membership" CTA** → `/membership/`
- [x] **"Implementing in your engineering team" CTA** → `/education/` (placeholder — page needs building)
- [x] **"Want to contribute?" CTA** → `/community/` (placeholder — page needs building)
- [x] **"Discuss your challenge with us"** → `/membership/` (Hero, CTACard, CTABanner)
- [x] **Membership page story links** — updated with real story data/links from content collection
- [x] **Nav menu link updates** — most links already correct; updated: Policy Radar → `policy-radar.greensoftware.foundation`, Assemblies → `assemblies.greensoftware.foundation`, State of Green Software → `state-of.greensoftware.foundation`. Removed Partners directory. Membership page now uses shared `navItems` from `nav-items.ts`.
- [x] **Remove Partners directory** from nav
- [x] **Footer update** — updated homepage and membership page footers with real URLs
- [ ] **Nav project icons** — fetch official icons from directory project, update navbar data
- [ ] **Standards nav label** — rename to something like "Our standards process" and restructure dropdown
- [ ] **Google Analytics** — add tracking script to the site layout
- [x] **404 page** — created `src/pages/404.astro`

## Find from Notion (batch session — just need to locate the right Notion pages/URLs)

- [ ] **Members Playbook** — find the Notion page URL
- [ ] **Members Onboarding** — find the Notion page URL
- [ ] **Employee Registration** — find the Notion page URL
- [ ] **Contact form** — find the existing form (there should be one already)
- [ ] **Press & Media content** — find in Notion, will need importing
- [ ] **Brand & Assets** — find the Notion page URL
- [ ] **Newsletter page/form** — verify if a signup page exists, or find the form URL to create one

## Medium Effort (a few hours each)

- [x] **Member stories as content collection** — stories wired as Astro content collection with dynamic `[slug].astro` template
- [ ] **Manifesto page** — migrate existing content from legacy site into a new Astro page
- [ ] **Newsletter page** — simple "join our newsletter" page with signup form (once Notion form URL is found)
- [ ] **Search page** — integrate PageFind for static site search
- [x] **Governance & Leadership team fix** — fixed Person/Role property type swap (title vs rich_text) and added direct photo download from GSF Team DB
- [x] **Footer update** — updated homepage and membership footers with real URLs
- [ ] **Roll out to greensoftware.org** — DNS + Netlify config for production domain

## Bigger Pieces (new pages, need content decisions + creative session)

- [ ] **Standards page** — new page explaining GSF's standards process and portfolio (SCI, SCI for AI, SCI for Web, RTC, etc.)
- [ ] **Policy page** — new page covering Policy Working Group, Policy Radar, policy engagement
- [ ] **Research page** — new page (needs thinking through — what goes here?)
- [ ] **About page** — new page with GSF overview, mission, history summary
- [ ] **Education page** — landing page for courses, patterns, certification, learning journey
- [ ] **Community landing page** — generic community page tying together Movement platform, events, newsletters, badges, champions
- [ ] **History page** — GSF timeline/history (needs figuring out and building)
- [ ] **Assemblies page** — own page eventually; link out to existing assemblies page for now
- [ ] **Press & Media section** — import content from Notion sources into a new page/section
- [ ] **Adoption page** — maybe not needed, TBD
- [ ] **Certification page** — potentially needed under Standards, TBD

## Done

- [x] Notion fetch script: flat logos directory (merged steering/general into single `public/assets/logos/`)
- [x] Notion fetch script: historical members (fetch all statuses, `active` flag on each record)
- [x] Notion fetch script: skip-if-exists for image downloads (`--force` flag to override)
- [x] Notion fetch script: performance optimisation (pre-fetch volunteers, caches, parallel PWCI lookups — 5.5min → 2.5min)
- [x] Member stories: 13 problem-first stories mined from 188 legacy articles (`docs/content/stories/original/`)
- [x] RTC story: Real-Time Cloud standard story researched and written
