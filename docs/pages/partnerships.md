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

Below the "Jump to" links, "Or filter by topic" buttons (Show all, SCI, SCI for AI, SCI for Web, Real Time Cloud, Water (SWI), Principles & practices, Training, Policy) show only the cards on that topic and hide empty sections. It is a small inline script at the bottom of the page. Each card carries a `data-tags` attribute, set from the optional `tags` field on `CardGrid` cards; each section wrapper has `data-section`. Cards with no topic only appear under "Show all". To add a topic, add a button to `filters` and tag the relevant cards.

## Plain-English writing

The page is written for first-time visitors (governments, international bodies, universities). A short "Three terms to know" block explains SCI, SCI for AI and Real Time Cloud. Each card has a plain-English headline and one or two sentences, and a small label above the title naming the country or organisation (the `label` field on `CardGrid` cards). Keep new cards in that style and avoid unexplained jargon.

## Editorial rules

- Say "recognised in" the G7 overview, never "G7-endorsed".
- The intergovernmental organisation is deliberately unnamed in all external text.
- Do not imply WRI's endorsement of GSF or its standards.
- Do not publish internal-only items or items held as "forthcoming" until they are published.

## Unverified items (launch blockers)

Cards titled "⚠ UNVERIFIED" and the "Draft review key" block are temporary review aids. Before launch, verify each item against a public source or delete it, then remove the orange markup and the review key:

- GDSA membership count (90+)
- IMDA "adopted" SCI (AI Magazine wording)
- NatWest case study citing SCI
- IFS keynote, London Climate Action Week June 2026
- ARCHER2 course GSF attribution
- Dodge et al. FAccT 2022 authorship and GSF reference (replace link with ACM DOI)

Also confirm before launch: Norwegian Environment Agency wording (source was an internal Steering email, 24 Nov 2026) and the credit for Taiwan's green software label (MODA-led; TIER is a member and research partner).
