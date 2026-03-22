# TODO

## Backlog

- [ ] [Asset deduplication](docs/features/asset-deduplication.md) — scan for duplicate images, consolidate, add asset registry to CLAUDE.md

## Done

- [x] **Google Analytics (GA4)** — replaced GTM with direct GA4 (`G-593HJXNS18`), added `newsletter_submission`, `membership_enquiry`, `assembly_application` events, documented in `docs/google-analytics.md`
- [x] **Legacy redirects** — 29 redirect rules in `netlify.toml` covering renamed pages, translated manifestos, translated articles, and DatoCMS-era slugs
- [x] **Restored missing English articles** — recovered 3 articles from DatoCMS (what-is-green-software, 10-recommendations, gsf-global-summit-2022-tokyo) that were mislabelled during migration
- [x] **Article language switcher** — pill-style language badges on articles with translations
- [x] **Normalised translated article frontmatter** — fixed author data, broken DatoCMS LinkedIn URLs, added missing `authors` to JA translations
- [x] **Site URL fix** — updated `astro.config.mjs` site to `greensoftware.foundation`

- [x] **Published flags for stories & articles** — added `published` boolean to frontmatter to exclude unpublished content
- [x] **Domain: .org → .foundation** — updated site URL, links, and references
- [x] **Update rollout plan** — revised rollout plan with current status
- [x] **Roll out to greensoftware.foundation** — code pushed, Netlify site created, env vars set, live
- [x] **Assemblies page** — built and linked
- [x] **Claude Desktop content updates** — MCP workflow implemented
- [x] **Homepage testimonial** — replaced with Gadhu Sundaram (GSF Chair) quote
- [x] **Homepage story links** — wired TabbedSection CTAs to story pages
- [x] **Homepage map image** — replaced with map from Genya
- [x] **Remove logos from featured content** — set `showOrganizations={false}` on ArticleCarousel
- [x] **"Explore membership" CTA** → `/membership/`
- [x] **"Implementing in your engineering team" CTA** → `/education/`
- [x] **"Want to contribute?" CTA** → `/community/`
- [x] **"Discuss your challenge with us"** → `/membership/`
- [x] **Membership page story links** — updated with real story data/links
- [x] **Nav menu link updates** — all links updated
- [x] **Remove Partners directory** from nav
- [x] **Footer update** — updated with real URLs
- [x] **Nav project icons** — fetched from directory project
- [x] **Standards nav label** — restructured dropdown
- [x] **Component playground** — Astrobook at `/playground/`
- [x] **404 page** — created `src/pages/404.astro`
- [x] **Members Playbook** → `wiki.greensoftware.foundation/getting-started`
- [x] **Members Onboarding** → `wiki.greensoftware.foundation/orientation`
- [x] **Employee Registration** → `wiki.greensoftware.foundation/register`
- [x] **Contact form** — found existing form
- [x] **Press & Media content** — imported from Notion
- [x] **Brand & Assets** — built `/brand/` page
- [x] **Newsletter page/form** — signup page created
- [x] **Member stories as content collection** — Astro content collection with dynamic template
- [x] **Manifesto page** — migrated from legacy site
- [x] **Newsletter page** — signup form page
- [x] **Search (PageFind)** — static search with custom React dialog
- [x] **Governance & Leadership team fix** — fixed property types, added photo download
- [x] [Centralised data layer](docs/features/data-layer.md) — Notion UUIDs, typed queries, ID-based lookups
- [x] **Standards page** — `/standards/` with lifecycle pipeline, project cards
- [x] **Policy & Research page** — `/policy/` with PWG leadership, engagement, research
- [x] **About page** — `/about/` with mission, vision, values, founding story
- [x] **Education page** — `/education/` landing page
- [x] **Community landing page** — `/community/` with podcasts, meetups, Champions
- [x] **Press & Media section** — imported from Notion
- [x] **Certification page** — `/standards/certification/`
- [x] **SEE page** — `/standards/see/`
- [x] **SCI for Web page** — `/standards/sci-web/`
- [x] Notion fetch script: flat logos directory
- [x] Notion fetch script: historical members
- [x] Notion fetch script: skip-if-exists for image downloads
- [x] Notion fetch script: performance optimisation (5.5min → 2.5min)
- [x] Member stories: 13 problem-first stories
- [x] RTC story: Real-Time Cloud standard story
