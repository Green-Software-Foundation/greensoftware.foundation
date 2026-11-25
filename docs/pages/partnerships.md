# Partnerships & Recognition Page

**URL:** `/partnerships/`
**File:** `src/pages/partnerships/index.astro`
**Breadcrumb:** Home / About / Partnerships & Recognition
**Navigation:** About menu, after Governance & Leadership (`src/lib/nav-items.ts`)

## What the Page Shows

External recognition and validation of GSF: G7 recognition, national governments, intergovernmental organisations, WRI, standards credibility, independent validation, industry adoption, research, and skills/policy reach. Aimed at governments, intergovernmental bodies and universities.

## Dynamic vs Static

Everything is **static**. Content lives in the `sections` array in the page frontmatter and renders through `CardGrid`, `StatsGrid`, `TextBlock` and `CTABanner`. Nothing comes from Notion or content collections.

## In-page navigation

A sticky pill bar below the stats links to each section (`#g7`, `#gov`, `#igo`, `#wri`, `#standards`, `#independent`, `#industry`, `#research`, `#policy`). Labels come from the `NAV` map in the generator that produced the `sections` array; each section is wrapped in a `div` with the matching `id` and `scroll-mt-16` so headings clear the sticky bar. To add a section, add an entry to `sections` with an `id` and `navLabel`.

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
