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

## Navigation box

One untitled box sits directly below the hero: a quiet contents grid, **Jump to** (links to each section: `#g7`, `#gov`, `#igo`, `#wri`, `#standards`, `#independent`, `#industry`, `#research`, `#academic`, `#policy`, `#roadmap`), then **Filter by topic** (with a Show everything button) and **Future roadmap** topic chips. Jump links are plain text rows, filters are chips, so the two read as different things. Each section is wrapped in a `div` with the matching `id`. To add a section, add an entry to `sections` with an `id` and `navLabel`.

## Topic filter

The "Filter by topic" and "Future roadmap" rows (Show everything, SCI, SCI for AI, SCI for Web, Real Time Cloud, Water (SWI), Principles & practices, Training, Policy; SILO, SCI for OpenTelemetry, SCI for Security, SCI for MCP) show only matching cards and hide empty sections. To get back to the full list: click the active topic again, choose "Show everything", click any "Jump to" link, or use the floating "Show everything" pill that appears at the bottom of the screen whenever a filter is active (this works on phones too).

It is a small inline script at the bottom of the page. Each card carries a `data-tags` attribute, set from the optional `tags` field on `CardGrid` cards; each section wrapper has `data-section`. Cards with no topic only appear under "Show everything". To add a topic, add a button to `filters` and tag the relevant cards.

## Member case studies

The "Member case studies" section is organised by member: each card is titled with the member's name (Microsoft, Google Cloud, UBS, Accenture, Thoughtworks and others), with the sector as the small label and a short account of what they did with GSF's standards. To add a member, add a card to the `industry` section in the generator with the member name as the title and a public source link.

## Academic members and Future roadmap

- **Academic members** is its own section (one card per member institution), with its own "Jump to" button.
- **Future roadmap** (SILO, SCI for OpenTelemetry, SCI for Security, SCI for MCP, other items) is a section plus a third row of topic buttons in the sticky filter bar. SCI for Security, SCI for MCP and "Other roadmap discussions" are **PLACEHOLDER** cards (orange) with no source yet: add scope, status and public references, or remove them before launch.
- Hero: below the intro, "Government and academic institutions can join the Foundation for free." with a "Discuss membership" button to `/membership/enquire/`.
- Hero image: `public/assets/partnerships-hero.svg` (a globe linked to a government building, university, policy document and certification rosette).

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
- Future roadmap placeholders: SCI for Security, SCI for MCP, and other roadmap discussions
- Dodge et al. FAccT 2022 authorship and GSF reference (the ACM link is the one GSF's own SCI page uses)

Also confirm before launch: Norwegian Environment Agency wording (source was an internal Steering email, 24 Nov 2026) and the credit for Taiwan's green software label (MODA-led; TIER is a member and research partner).
