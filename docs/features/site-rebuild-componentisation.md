# Feature Spec: GSF Website Rebuild with Component Library

**Status:** Planned
**Created:** 2026-02-24
**Last Updated:** 2026-02-25

## Overview

Rebuild greensoftware.foundation as a new Astro 5 site, using the visual design system from the existing microsites (SCI, WDPC, SOFT) as the foundation. Rather than migrating the current Gatsby 4 site, we build fresh — extracting and componentising the microsite patterns into a proper reusable library, then composing the new main site from those components.

## Problem Statement

The current GSF website runs on Gatsby 4 (React 18, JavaScript, SCSS, DatoCMS). Three newer microsites — [web-sci](https://github.com/Green-Software-Foundation/web-sci), [web-wdpc](https://github.com/Green-Software-Foundation/web-wdpc), and [web-soft](https://github.com/Green-Software-Foundation/web-soft) — have been built on a modern stack (Astro 5, TypeScript, Tailwind CSS 4, Radix UI) with a cohesive, polished visual identity. The microsites are currently deployed as separate sites (`web-sci.greensoftware.foundation`, etc.) but share an almost identical tech stack and design language.

**Key issues:**
- The main GSF site's Gatsby 4 stack is outdated and increasingly difficult to maintain
- The microsites have a superior design system but their components are **not reusable** — every section has hardcoded content
- Running 4 separate websites creates maintenance overhead, inconsistent branding, and fragmented SEO
- There is no shared component library — the microsites were copy-pasted from a template

## Solution

A phased approach to unification:

### Phase 1: Build the New Main Site

Build `greensoftware.foundation` as a new Astro 5 site, extracting the microsite visual patterns into **parameterised, reusable components**. The new main site will have different content but use the same design language.

**Component extraction means:**
- Each visual pattern (TextBlock, TextWithImage, FeatureGrid, etc.) becomes a component that accepts props for content (headings, body text, images, CTAs)
- Layout variants (centred text, two-column with image, grid) are configurable via props
- Data-driven components (FeatureGrid, StatsGrid) accept arrays of arbitrary length
- The component catalogue (see below) serves as the reference for available patterns

### Phase 2: Port Microsites into the Main Site

Once the main site is live with the componentised library, migrate each microsite into the main site as sub-sections or sub-routes (e.g., `greensoftware.foundation/sci/`, `/wdpc/`, `/soft/`). This migration is straightforward because:
- The microsites' content simply plugs into the now-parameterised components
- Each microsite becomes a set of pages using the shared component library
- The hardcoded microsite components are replaced by the reusable versions

### Phase 3: Future Sites Made Easy

With a fully componentised library, creating new project pages (for future GSF initiatives) becomes a matter of:
1. Specifying which components to use (by referencing the catalogue)
2. Providing content (text, images, data)
3. Composing a page layout

No new component development needed unless genuinely new patterns emerge.

## Architecture

### Tech Stack (inherited from microsites)

| Layer | Technology |
|-------|-----------|
| Framework | Astro 5 with React 19 islands |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 4 + CSS custom properties |
| UI Primitives | Radix UI (Button, Card, Accordion, Tabs, Sheet) |
| Utility | CVA (Class Variance Authority) + `cn()` (clsx + tailwind-merge) |
| Animation | Framer Motion (for interactive React components) |
| Carousel | Embla Carousel |
| Build | Vite |
| Hosting | Netlify (existing) or GitHub Pages |

### Component Library Design

Components fall into three tiers:

**Tier 1 — UI Primitives** (already exist in microsites at `src/components/ui/`)
- `Button` — with variants via CVA (default, outline, ghost, link, sizes)
- `Card` — container with rounded corners and shadow
- `Accordion` — expandable content sections (Radix)
- `Tabs` — tabbed content panels (Radix)
- `Sheet` — slide-out drawer for mobile nav (Radix)

**Tier 2 — Layout Components** (need extracting and parameterising)
- `Navbar` — top navigation with mobile hamburger menu
- `Footer` — 4-column footer with links and social icons
- `Hero` — full-width hero with heading, body, CTAs, illustration
- `LogoMarquee` — scrolling logo strip (data-driven from Notion)

**Tier 3 — Content Section Components** (need extracting from hardcoded sections)

| Component | Current Source | Variants | Props Needed |
|-----------|---------------|----------|-------------|
| `TextBlock` | what-sci/wdpc/soft.astro | Centred, Centred + Ticker, Centred + FeatureGrid, Two-column with Image | heading, body, variant, features[], image |
| `TextWithImage` | why-sci/wdpc/soft.astro | Text-left/Image-right, Image-left/Text-right | heading, body, imageSrc, imageAlt, reversed |
| `BenefitsList` | why-sci.astro (embedded) | Icon list, Numbered list | items[{icon, title, description}] |
| `FeatureGrid` | features.astro | 2-col, 3-col, 4-col | heading, subtitle, features[{icon, title, description}], columns |
| `StatsGrid` | research.astro | 2x2, 1x4 | stats[{value, label}], cards[{title, description, link}] |
| `SuccessStoriesCarousel` | success-stories.astro | — | stories[{org, title, summary, link}] |
| `TestimonialQuote` | testimonial.astro | — | quote, author, title, company |
| `AudienceTabs` | audience-benefits.astro | — | audiences[{name, description, image}] |
| `AudienceCards` | blog.astro (WDPC/SOFT) | — | audiences[{image, icon, heading, body}] |
| `ResourceCards` | resources.astro | — | heading, resources[{icon, title, body, ctaText, ctaLink}] |
| `MissionCard` | mission-card.astro | — | title, body |
| `GetStartedCTA` | ready-to-implement.astro | — | heading, body, ctaText, ctaLink, image |
| `GetInvolved` | get-involved.astro | — | heading, actions[{icon, title, description, ctaText, ctaLink, featured}] |
| `Timeline` | timeline.astro | — | milestones[{date, description, status}] |
| `TeamSection` | team.astro | — | heading, subtitle, members[{photo, name, role, company, linkedIn}] |
| `AboutGSF` | about-gsf.astro | — | (mostly static, minor prop customisation) |
| `CTABanner` | cta.astro | — | heading, body |

### Component Catalogue

A live browsable showcase of all components has been built at `.microsites/component-showcase/`. This serves as the visual reference for specifying page layouts. Each component is labelled with its name, file path, description, and which microsites use it.

**Source microsites for reference:**
- SCI: `https://github.com/Green-Software-Foundation/web-sci`
- WDPC: `https://github.com/Green-Software-Foundation/web-wdpc`
- SOFT: `https://github.com/Green-Software-Foundation/web-soft`

Local clones at `.microsites/web-sci/`, `.microsites/web-wdpc/`, `.microsites/web-soft/` (git-ignored).

## Site Map & Content Strategy

The site is organised around three strategic pillars that form a reinforcing loop — **Standards → Education → Policy → Standards** — plus supporting pages for impact, membership, operations, and brand.

### Strategic Pillars

#### Standards (`/standards/`)

Two tracks: software and hardware.

**Software Standards** — SCI, SOFT, and others developed through the GSF standards process.
**Hardware Standards** — WDPC, plus the hardware standards working group formed through the SSIA merger.

Cross-cutting content:
- Why we work on standards, how the process works
- AI-facilitated consensus building (Harmony) — how we use it, how others can leverage it
- Standards adoption — white papers, case studies showing uptake
- "Interested in developing a standard with us? Reach out"
- Sub-page: Consensus process / Harmony-facilitated standards generation

#### Education (`/education/`)

The learning journey for practitioners, from awareness to certification:

1. **Newsletter** — awareness, staying current
2. **Free self-paced courses** — foundational knowledge
3. **Green Software Patterns** — practical reference catalogue
4. **Cohort-based programmes** — deeper engagement with peers
5. **Advanced courses** — SCI-specific, technical depth
6. **Certification** (`/certification/`) — own landing page with sign-up

Also includes:
- Movement platform
- Podcast
- Links to community (education leads to adoption leads to community)

#### Policy (`/policy/`)

- Policy working group
- Policy radar
- Policy white papers (Sean's team)
- Relevant research papers

### Impact & Proof

#### Impact (`/impact/`)

The "proof we matter" page — probably one of the longest on the site:

- **Success stories** — member achievements, adoption stories
- **Press clippings** — external media coverage
- **Reach metrics** — newsletter subscribers, platform stats, podcast numbers, assembly attendance, member count
- **State of Green Software** — the report we published, highlighted prominently
- **Member impact** — what the foundation has done for members, and what members have achieved through the foundation

### Membership & Community

#### Membership (`/membership/`)

Serves two key personas:
1. **The decision-maker** — "Should my org join?" Business case, benefits (networking, education access, influence on standards), how to argue for it internally
2. **The contributor** — "I just want to help" — ways to contribute, community entry points

Content:
- Benefits of joining
- New member journey — what happens after you sign, onboarding, how to get value quickly
- Membership tiers and sign-up
- Link to Directory for full member listing

#### Member Playbook (`/playbook/`)

Operational hub for existing members:
- Content calendar
- Events calendar
- Working groups — what they are, how to participate, meeting cadence
- How our meetings work
- How to ask for help (Harmony, email)
- Rules for working / ways of working

### Organisation

#### Governance & Leadership (`/governance/`)

- Steering committee
- Working group chairs
- Other committees and how they function
- Primary organisational contacts / staff directory
- Annual reports (listed/downloadable)
- State of Green Software report
- How we're structured, how decisions get made

#### History (`/history/`)

- Origin story of the GSF
- Key milestones, timeline
- Where we came from, where we're going
- Good candidate for the Timeline component

#### Assemblies (`/assemblies/`)

- What assemblies are
- Past assembly workshop reports and conclusions
- Upcoming assemblies

#### Partnerships (`/partnerships/`)

- MOUs and memoranda of understanding
- Partner organisations listed
- What partnership means vs membership

### Tools & Resources

#### Open Source Tooling (`/tools/`)

- Carbon Aware SDK
- Carmen
- Impact Framework
- Framing: "Measurement and tooling — here's what we've built, it's open source, go use it"

#### AI Focus (`/ai/`)

- Dedicated page on GSF's AI and sustainability angle
- How AI intersects with green software
- Relevant standards, tools, and research

#### Brand & Assets (`/brand/`)

- Brand guidelines (currently a PDF — rendered as a proper web page)
- Searchable, browsable illustration library (Jenya's work, all checked into the repo)
- Logo downloads, colour palette, typography specs
- Usage guidelines

### Content Types

Four distinct content types, each with listing pages:

| Type | Route | Description |
|------|-------|-------------|
| **Articles** | `/articles/` | Blog posts, opinion pieces, updates |
| **Success Stories** | `/stories/` | Member achievements, adoption case studies |
| **White Papers & Research** | `/papers/` | Policy papers, academic papers, technical papers |
| **Press Clippings** | `/press/` | External media coverage |

Articles and success stories get their own listing pages. White papers surface under both Standards and Policy. Press clippings feed into the Impact page. Success stories also featured on Impact.

#### Directory (existing)

Link through to the existing member directory rather than rebuilding.

### Three User Personas

Every page should consider which persona(s) it serves:

1. **The decision-maker** — "Should my org join?" → Membership, Impact (proof), Standards (credibility), Governance (legitimacy)
2. **The practitioner** — "How do I adopt this at work?" → Education journey, Certification, Standards docs, Tools, Patterns
3. **The contributor** — "How do I help?" → Member Playbook, Working Groups, Assemblies, Community

### Sitemap Summary

| # | Page | Route | Key Content |
|---|------|-------|-------------|
| 1 | Home | `/` | Hero, core loop visual (Standards→Education→Policy), key stats, CTAs |
| 2 | Standards | `/standards/` | Software + Hardware tracks, Harmony/consensus, adoption |
| 3 | Education | `/education/` | Learning journey, cohort programmes, Patterns, movement platform |
| 4 | Certification | `/certification/` | Landing page for cert programme, sign-up |
| 5 | Policy | `/policy/` | Radar, working group, white papers |
| 6 | Impact | `/impact/` | Success stories, press, reach metrics, State of Green Software |
| 7 | Membership | `/membership/` | Benefits, new member journey, tiers, join CTA |
| 8 | Member Playbook | `/playbook/` | Calendars, working groups, how we work, Harmony |
| 9 | AI | `/ai/` | Focus page on AI and sustainability |
| 10 | Open Source Tooling | `/tools/` | Carbon Aware SDK, Carmen, Impact Framework |
| 11 | Governance & Leadership | `/governance/` | Leadership, annual reports, structure, contacts |
| 12 | History | `/history/` | Origin story, timeline, milestones |
| 13 | Assemblies | `/assemblies/` | Reports, upcoming events |
| 14 | Partnerships | `/partnerships/` | MOUs, partner organisations |
| 15 | Brand & Assets | `/brand/` | Style guide, searchable illustration library, downloads |
| 16 | Directory | `/directory/` | Existing member directory (link through) |
| — | Articles | `/articles/` | Blog posts, updates |
| — | Success Stories | `/stories/` | Member achievements |
| — | White Papers | `/papers/` | Research, policy papers |
| — | Press | `/press/` | External media coverage |

## Implementation Plan

### Phase 1: New Main Site

1. **Set up Astro 5 project** — initialise new project at repo root (or as a migration of the existing `src/`) with the microsite stack (Tailwind 4, Radix, TypeScript)
2. **Extract Tier 2 components** — parameterise Navbar, Footer, Hero, LogoMarquee (these are closest to reusable already)
3. **Extract Tier 3 components** — work through the table above, creating prop-driven versions of each content section
4. **Content creation** — define the main site's page structure and content, referencing the component catalogue for layout
5. **Build pages** — compose pages from the component library with new GSF main site content
6. **Notion/CMS integration** — connect logo fetching, team data, and any dynamic content sources
7. **Deploy** — deploy to Netlify, replacing the current Gatsby site

### Phase 2: Microsite Migration

8. **Create sub-routes** — add `/sci/`, `/wdpc/`, `/soft/` routes to the main site
9. **Port microsite content** — plug each microsite's content into the shared components
10. **Redirect old domains** — point `web-sci.greensoftware.foundation` etc. to the new sub-routes
11. **Retire microsite repos** — archive the standalone repos

### Phase 3: Ongoing

12. **Document the component library** — maintain the showcase as a living reference
13. **Extend as needed** — add new components only when genuinely new patterns emerge

## Key Decisions

- **New build, not migration** — the Gatsby site's architecture (SCSS, DatoCMS GraphQL, JS) is too different to incrementally migrate. Starting fresh with the microsite stack is faster and cleaner.
- **Componentise during build, not before** — extract components as we build the main site pages, not as a separate upfront effort. This ensures we only build what we actually need.
- **Keep the visual design** — the microsite design system (colours, typography, spacing, component patterns) is the target aesthetic. We're not redesigning, we're systemising.
- **Content is separate from components** — all content should be passed as props or data files, never hardcoded in component files.

## Open Questions

- Content strategy for the main site homepage and sub-pages (to be defined by the team)
- CMS choice for the new site — continue DatoCMS, switch to Notion, or use Markdown/MDX files?
- Domain structure — sub-routes (`/sci/`) vs sub-domains (`sci.greensoftware.foundation`)
- Whether to keep the existing Gatsby site running in parallel during transition
