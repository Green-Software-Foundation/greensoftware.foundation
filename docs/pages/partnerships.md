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

## Section navigation

A full-width block sits directly below the hero. It is **not sticky**: everything is visible at once. It has the heading "Navigate to the section of interest", a "Show everything" button, the twelve section links grouped into four columns (Government and institutional recognition; Standards; Evidence and adoption; Research, academia and policy; grouping lives in `navGroups` in the page frontmatter), and the topic-filter chips shown in the open ("Show only a standard or topic" and "In development"). Each section is wrapped in a `div` with the matching `id` and `scroll-mt-24`.

## Topic filter

The topic chips in the navigation block (Standards & topics: SCI, SCI for AI, SCI for Web, Real Time Cloud, Water (SWI), Principles & practices, Training, Policy; In development: Data center specification (SILO), SCI for OpenTelemetry, SCI for Security, SCI for MCP) shows only matching cards and hides empty sections. To get back to the full list: click the active topic again, choose "Show everything", click any jump link, or use the floating "Show everything" pill at the bottom of the screen whenever a filter is active. 
A small inline script at the bottom of the page does this. Each card carries a `data-tags` attribute (the optional `tags` field on `CardGrid` cards); each section wrapper has `data-section`. Cards with no topic only appear under "Show everything".

## Calls to action at the top of every section

Each section opens with a slim dark call-to-action strip (heading, one-line invitation, button), so anyone arriving via a jump link is met with a way to engage: membership enquiry (`/membership/enquire/`) for G7, Government, Standards, In development and Academic members; Contact (`/contact/`) for Case studies, International organisations, Validation, Research and Policy; SCI for AI (`/standards/sci-ai/`) for WRI; Assemblies (`/assemblies/`) for Assemblies. The copy lives in the `cta` field of each section in the generator. The strip is inline markup using the existing `Button`, not a new component.

## Sections of note

- **Standards in development** (`#roadmap`) sits straight after Standards. Its cards use the dark "featured" card style with an "In development" label, and the button reads "Learn more and get involved" (SILO, SWI, SCI for OpenTelemetry link to their GSF pages). SCI for Security, SCI for MCP and "Other roadmap discussions" are **PLACEHOLDER** cards with no source yet.
- **Assemblies, powered by Harmony** (`#assemblies`) leads with the problem, not the product name: the heading is "Standards traditionally take far too long. How do you speed up their creation?" and the lead paragraph explains that Assemblies, powered by Harmony, is GSF's tool for speeding up the specification process. It is a dark FeatureGrid panel explaining why Assemblies exist (consensus at scale breaks down), what Harmony does and the result, with links to `/assemblies/` and the Assemblies story. Wording follows the site's own Assemblies page and "Consensus at speed" story.
- **Case studies** opens with "Using SCI? Share your case study" and a "Get in touch" button to `/contact/` (not a membership enquiry); the section is organised by member: each card is titled with the member's name, sector as the label. To add a member, add a card to the `industry` section in the generator.
- **World Resources Institute and Green AI Committee** (`#wri`) has three cards: the WRI programme, Sustainable AI Group, and the GSF Green AI Committee (mission, co-chairs, member organisations from `src/content/research/en/green-ai-position-paper.md`, with links to the position paper and the EU AI Act article).
- **Academic members** opens with a call to action inviting institutions to discuss membership (`/membership/enquire/`), then one card per member institution.
- **Policy, research and skills** has one card for each document in `src/content/research/` (9 today) plus a card for the full publications hub. When a new research document is added there, add its card here.
- Hero: "Government and academic institutions can join the Foundation for free." with a "Discuss membership" button to `/membership/enquire/`; hero image `public/assets/partnerships-hero.svg`.

## Calls to action

Each card has up to two buttons: **View source** (external evidence, new tab) and **Learn more about …** (an internal GSF page chosen from the card's topic: SCI → `/standards/sci/`, SCI for AI → `/standards/sci-ai/`, SCI for Web, Real Time Cloud, SWI, SCI for OpenTelemetry, Carmen, `/education/`, `/policy/`, `/membership/`, `/press/`, `/about/`). The mapping lives in the generator (`LEARN`) and feeds the optional `secondaryCtaText` / `secondaryCtaHref` fields on `CardGrid` cards.

## Plain-English writing

The page is written for first-time visitors (governments, international bodies, universities). An "About the Foundation and key terms" panel (a short description plus a definition list, data in `intro` in the frontmatter) explains SCI, SCI for AI and Real Time Cloud. Each card has a plain-English headline and one or two sentences, and a small label above the title naming the country or organisation (the `label` field on `CardGrid` cards). Keep new cards in that style and avoid unexplained jargon.

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
