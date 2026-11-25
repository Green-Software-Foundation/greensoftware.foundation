# Partnerships & Recognition Page

**URL:** `/partnerships/`
**File:** `src/pages/partnerships/index.astro`
**Breadcrumb:** Home / About / Partnerships & Recognition
**Featured on:** the homepage (after the logo marquee), the About page (after Mission & Vision) and the Membership page (after the logo marquee) via a dark FeatureGrid panel, "Recognised by governments and global institutions". Update the panel's figures and cards if the evidence here changes.
**Navigation:** About menu (after Governance & Leadership) and a second green button, "Partnerships & Recognition →", at the bottom of the Standards dropdown beside "About our standards process →" (`src/lib/nav-items.ts`, `extraFooterLinks`; rendered in `src/components/react/navbar.tsx`)

## What the Page Shows

External recognition and validation of GSF: G7 recognition, national governments, intergovernmental organisations, WRI, standards credibility, independent validation, industry adoption, research, and skills/policy reach. Aimed at governments, intergovernmental bodies and universities.

## Dynamic vs Static

Everything is **static**. Content lives in the `sections` array in the page frontmatter and renders through `CardGrid`, `TextBlock` and `CTABanner`. Nothing comes from Notion or content collections.

## Navigation bar

A full-width bar sits directly below the hero and **sticks to the top of the screen** on larger screens. It holds plain-text jump links to every section (`#g7`, `#gov`, `#igo`, `#wri`, `#standards`, `#roadmap`, `#assemblies`, `#independent`, `#industry`, `#research`, `#academic`, `#policy`), a "Show everything" button and a "Filter by topic" button that opens a panel of topic chips. On phones the bar is not sticky; the floating pill handles getting back. Each section is wrapped in a `div` with the matching `id` and `scroll-mt-24` so headings clear the sticky bar.

## Topic filter

The "Filter by topic" panel (Standards & topics: SCI, SCI for AI, SCI for Web, Real Time Cloud, Water (SWI), Principles & practices, Training, Policy; In development: Data center specification (SILO), SCI for OpenTelemetry, SCI for Security, SCI for MCP) shows only matching cards and hides empty sections. To get back to the full list: click the active topic again, choose "Show everything", click any jump link, or use the floating "Show everything" pill at the bottom of the screen whenever a filter is active. The panel closes after a choice, on Escape, or when clicking elsewhere.

A small inline script at the bottom of the page does this. Each card carries a `data-tags` attribute (the optional `tags` field on `CardGrid` cards); each section wrapper has `data-section`. Cards with no topic only appear under "Show everything".

## Sections of note

- **Standards in development** (`#roadmap`) sits straight after Standards. Its cards use the dark "featured" card style with an "In development" label, and the button reads "Learn more and get involved" (SILO, SWI, SCI for OpenTelemetry link to their GSF pages). SCI for Security, SCI for MCP and "Other roadmap discussions" are **PLACEHOLDER** cards with no source yet.
- **Assemblies, powered by Harmony** (`#assemblies`) is a dark FeatureGrid panel explaining why Assemblies exist (consensus at scale breaks down), what Harmony does and the result, with links to `/assemblies/` and the Assemblies story. Wording follows the site's own Assemblies page and "Consensus at speed" story.
- **Case studies** is organised by member: each card is titled with the member's name, sector as the label. To add a member, add a card to the `industry` section in the generator.
- **Academic members** opens with a call to action inviting institutions to discuss membership (`/membership/enquire/`), then one card per member institution.
- **Policy, research and skills** has one card for each document in `src/content/research/` (9 today) plus a card for the full publications hub. When a new research document is added there, add its card here.
- Hero: "Government and academic institutions can join the Foundation for free." with a "Discuss membership" button to `/membership/enquire/`; hero image `public/assets/partnerships-hero.svg`.

## Calls to action

Each card has up to two buttons: **View source** (external evidence, new tab) and **Learn more about …** (an internal GSF page chosen from the card's topic: SCI → `/standards/sci/`, SCI for AI → `/standards/sci-ai/`, SCI for Web, Real Time Cloud, SWI, SCI for OpenTelemetry, Carmen, `/education/`, `/policy/`, `/membership/`, `/press/`, `/about/`). The mapping lives in the generator (`LEARN`) and feeds the optional `secondaryCtaText` / `secondaryCtaHref` fields on `CardGrid` cards.

## Plain-English writing

The page is written for first-time visitors (governments, international bodies, universities). A short "Three terms to know" block explains SCI, SCI for AI and Real Time Cloud. Each card has a plain-English headline and one or two sentences, and a small label above the title naming the country or organisation (the `label` field on `CardGrid` cards). Keep new cards in that style and avoid unexplained jargon.

## Editorial rules

- Say "recognised in" the G7 overview, never "G7-endorsed".
- The intergovernmental organisation is deliberately unnamed in all external text.
- Do not imply WRI's endorsement of GSF or its standards.
- Never name the second intergovernmental organisation (or its affiliates' authorship) anywhere on the page.
- Do not publish internal-only items or items held as "forthcoming" until they are published.

## Unverified items (launch blockers)

Cards titled "⚠ UNVERIFIED" and the "Draft review key" block are temporary review aids. Before launch, verify each item against a public source or delete it, then remove the orange markup and the review key:

- GDSA membership count (90+)
- IMDA "adopted" SCI (AI Magazine wording)
- NatWest case study citing SCI
- IFS keynote, London Climate Action Week June 2026
- ARCHER2 course GSF attribution
- Second international research organisation card in the IGO section: placeholder wording, replace once the history of the discussions is available
- In-development placeholders: SCI for Security, SCI for MCP, and other roadmap discussions
- Dodge et al. FAccT 2022 authorship and GSF reference (the ACM link is the one GSF's own SCI page uses)

Also confirm before launch: Norwegian Environment Agency wording (source was an internal Steering email, 24 Nov 2026) and the credit for Taiwan's green software label (MODA-led; TIER is a member and research partner).
