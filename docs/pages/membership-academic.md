# Academic Membership Page

**URL:** `/membership/academic/`
**File:** `src/pages/membership/academic/index.astro`

## What it shows

A dedicated landing page for academic institutions explaining the GSF academic membership programme. Academic (and non-profit/government) membership is free. The page covers what GSF is working on, what membership enables, maps research disciplines to active projects, lists current academic member universities, and provides an enquiry pathway.

## Dynamic elements

| Element | Source | Notes |
|---|---|---|
| Steering member logos | `src/data/members.json` via `LogoMarquee` | Fetched from Notion via `npm run fetch-notion` |

## Static elements

All other content on this page is hardcoded static copy — this is intentional:

- **Hero** — pitch text, CTA to `/membership/enquire/`
- **What the Foundation is working on** — 5 domain feature cards
- **What academic membership enables** — 8 benefit feature cards
- **Discipline mapping table** — 9 research disciplines mapped to GSF projects
- **Universities currently participating** — list of 17 academic member institutions (verified March 2026)
- **Relevance to institutional sustainability objectives** — body copy
- **Complementary academic programmes** — 4 resource cards (SE4GD, GREENER, ARCHER2, Texas State)
- **How to enquire** — 4-step bordered feature grid
- **FAQ** — 5 Q&As using native `<details>/<summary>` accordion
- **Final CTA** — links to `/membership/enquire/`

## How to update

### Adding a new university
Find the universities array in the "Universities currently participating" section (appears twice — once for desktop table, once for mobile cards). Add the institution to both arrays in alphabetical or logical order. Update the heading count and the "Verified against..." footnote date.

### Updating discipline mappings
Find the rows array in the "Discipline mapping table" section (appears twice — desktop and mobile). Edit the relevant `discipline` and `work` fields.

### Updating the enquiry contact
Search for `jamie.cowan@greensoftware.foundation` and update the name and email in the "How to enquire" FeatureGrid.

### Adding/editing FAQ items
Find the FAQ `<details>` section and edit the `q` and `a` fields in the items array.

### Changing the CTA destination
The primary CTA links to `/membership/enquire/`. This appears in three places: the Hero `ctas` prop, the "How to enquire" section, and the final `CTABanner`.

## Navigation

This page is linked from the site nav under **About → For Members → Academic Membership** (`src/lib/nav-items.ts`).
