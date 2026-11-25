# Partnerships & Recognition Page

**URL:** `/partnerships/`
**File:** `src/pages/partnerships/index.astro`
**Breadcrumb:** Home / About / Partnerships & Recognition
**Navigation:** About menu, after Governance & Leadership (`src/lib/nav-items.ts`)

## What the Page Shows

External recognition and validation of GSF: G7 recognition, national governments, intergovernmental organisations, WRI, standards credibility, independent validation, industry adoption, research, and skills/policy reach. Aimed at governments, intergovernmental bodies and universities.

## Dynamic vs Static

Everything is **static**. Content lives in the `sections` array in the page frontmatter and renders through `CardGrid`, `TextBlock` and `CTABanner`. Nothing comes from Notion or content collections.

## In-page navigation

A wrapping row of pill links ("Jump to") sits directly below the hero, with no horizontal scrolling. It links to `#g7`, `#gov`, `#igo`, `#wri`, `#standards`, `#independent`, `#industry`, `#research` and `#policy`. Each section is wrapped in a `div` with the matching `id`. To add a section, add an entry to `sections` with an `id` and `navLabel`.

## Topic filter

A "Filter by topic" bar (All topics, SCI, SCI for AI, SCI for Web, Real Time Cloud, Water (SWI), Principles & practices, Training, Policy) sits under the "Jump to" links. It stays pinned to the top of the screen on larger screens, so it is always reachable. Choosing a topic shows only matching cards and hides empty sections. To get back to the full list: click the active topic again, choose "All topics", or use the floating "Show everything" pill that appears at the bottom of the screen whenever a filter is active (this works on phones too).

It is a small inline script at the bottom of the page. Each card carries a `data-tags` attribute, set from the optional `tags` field on `CardGrid` cards; each section wrapper has `data-section`. Cards with no topic only appear under "All topics". To add a topic, add a button to `filters` and tag the relevant cards.

## Member case studies

The "Member case studies" section is organised by member: each card is titled with the member's name (Microsoft, Google Cloud, UBS, Accenture, Thoughtworks and others), with the sector as the small label and a short account of what they did with GSF's standards. To add a member, add a card to the `industry` section in the generator with the member name as the title and a public source link.

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
- Dodge et al. FAccT 2022 authorship and GSF reference (the ACM link is the one GSF's own SCI page uses)

Also confirm before launch: Norwegian Environment Agency wording (source was an internal Steering email, 24 Nov 2026) and the credit for Taiwan's green software label (MODA-led; TIER is a member and research partner).
