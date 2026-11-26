# Partnerships & Adoption Page

**URL:** `/partnerships/`
**File:** `src/pages/partnerships/index.astro`
**Breadcrumb:** Home / About / Partnerships & Adoption
**Featured on:** the homepage (after the logo marquee), the About page (after Mission & Vision) and the Membership page (after the logo marquee) via a dark FeatureGrid panel, "How governments and institutions use GSF standards" (homepage and About; reworded from "Recognised by…" to match the factual tone). Update the panel's figures and cards if the evidence here changes.
**Navigation:** About menu (after Governance & Leadership) and a second green button, "Partnerships & Adoption →", at the bottom of the Standards dropdown beside "About our standards process →" (`src/lib/nav-items.ts`, `extraFooterLinks`; rendered in `src/components/react/navbar.tsx`)

## What the Page Shows

How governments, intergovernmental bodies, institutions and organisations are working with and adopting GSF standards: G7 recognition, national governments, intergovernmental organisations, WRI, standards credibility, independent validation, industry adoption, research, and skills/policy reach. Aimed at governments, intergovernmental bodies and universities.

## Dynamic vs Static

Everything is **static**. Content lives in the `sections` array in the page frontmatter and renders through `CardGrid`, `TextBlock` and `CTABanner`. Nothing comes from Notion or content collections.

## Page title

The page was renamed from "Partnerships & Recognition" to **"Partnerships & Adoption"** (November 2026): "Recognition" read as trying too hard for a government audience. The URL stays `/partnerships/`. The name also appears in `src/lib/nav-items.ts` (About menu and the Standards dropdown button) and in the feature panels on the homepage, About and Membership pages (eyebrow and "Explore partnerships & adoption →" button). Keep them in sync.

The hero call to action reads "Interested in partnering with the GSF?" with a "Partnership enquiries" button to the membership enquiry form (`/membership/enquire/`).

## Section navigation

Two parts, sharing the same links and filters:

1. **Full menu ("On this page")**, directly below the hero and not sticky. Section links are in four groups (Government and international; Standards; Evidence and adoption; Research, academia and policy; grouping lives in `navGroups` in the page frontmatter, plus "In the press" via `extraNavLabels`). Below them is one "Show only:" row: the highlighted **Legislation & reporting** button, the topic chips, and a "Show everything" link that appears only while a filter is on.
2. **Sticky section bar**, hidden until the full menu scrolls out of view, then fixed to the top of the screen on all screen sizes. It shows "You are in: <current section>" (each section wrapper carries `data-nav-label`) and a **Show all sections** button that opens the same menu as a dropdown (capped at 75% of the screen height, scrolls inside). The dropdown closes after a choice, on Escape, or when clicking elsewhere, and the button reads "Close" while it is open.

Each section wrapper has the matching `id` and `scroll-mt-24`, so headings clear the sticky bar.

## Legislation & reporting button

The **Legislation & reporting** button is the first, highlighted item in the "Show only:" row (in both the full menu and the sticky dropdown), with a one-line explanation under it in the full menu. It is a normal filter button (`data-filter="legislation"`), so it uses the same filter and "Show everything" behaviour as the topic chips. It shows every card tagged `legislation`: government policy and procurement (UK, Taiwan, Germany, US GovAI handbook), the French asset managers' guidance, G7 ministers, and the EU AI Act, CSRD, GHG Protocol Scope 2 and Ofgem papers. When adding a card that shows GSF standards supporting a law, regulation, reporting rule or procurement requirement, add `"legislation"` to its `tags`.

## Topic filter

The topic chips in the "Show only:" row (SCI, SCI for AI, SCI for Web, Real Time Cloud, Water (SWI), Principles & practices, Training, Policy; the in-development standards are reached through their own section link rather than chips) shows only matching cards and hides empty sections. To get back to the full list: click the active topic again, choose "Show everything", click any jump link, or use the floating "Show everything" pill at the bottom of the screen whenever a filter is active. 
A small inline script at the bottom of the page does this. Each card carries a `data-tags` attribute (the optional `tags` field on `CardGrid` cards); each section wrapper has `data-section`. Cards with no topic only appear under "Show everything".

## Calls to action at the top of every section

Each section opens with a slim dark call-to-action strip (heading, one-line invitation, button), so anyone arriving via a jump link is met with a way to engage: membership enquiry (`/membership/enquire/`) for G7, Government, Standards and Academic members (buttons "Make an enquiry", "Enquire about government membership", "Membership enquiries", "Enquire about academic membership"); Contact (`/contact/`) for In development ("Find out how we can help you with your goals"), Case studies, International organisations, External references, Research and Policy; the SCI programme page (`/standards/certification/`) for SCI self-certification ("Submit your calculated SCI score for self-certification"); SCI for AI (`/standards/sci-ai/`) for WRI; Assemblies (`/assemblies/`) for Assemblies. The copy lives in the `cta` field of each section in the generator. The strip is inline markup using the existing `Button`, not a new component.

## Tone

**This page does not sell.** The audience is governments, ministries and institutions, and the evidence is strong enough to speak for itself. Write plainly and factually: state what happened, who did it and where the source is. Avoid promotional or "join us" language ("recognised by", "help shape", "join the Foundation", "shape what comes next", "we would love to", "sits alongside"). Calls to action are low-key, enquiry-style statements ("Government and public sector enquiries", "Membership enquiries", "Get in touch"), and say "become members" rather than "join". Example headings: "G7 recognition of SCI and SCI for AI", "GSF and national governments", "GSF and intergovernmental organisations (IGOs)", "GSF standards", "External references to GSF standards", "Academic and policy references to GSF". The media scroller says only "Scroll sideways" and deliberately does not show a story count.

## Sections of note

- **How GSF's work is organised** (`#working-groups`) is the first section, straight after the key terms. One card each for the Software Standards, Hardware Standards and Policy Working Groups: what each does (descriptions follow the working groups' own entries in the Notion projects database) and current work (from the wiki's "Member Engagement Opportunities" page). Its call to action explains that working groups are member-led and links to the membership enquiry form. The Hardware Standards Working Group repository, and the SEI and SWI repositories, are **private**, so their cards link to the public site pages instead of GitHub.
- **Additions from "Member Engagement Opportunities" (November 2026):** SOFT (ratified) and Open19 (published) cards in Standards; SEI (pre-draft) and WDPC (approved) cards in Standards in development; an "Join the Assembly waitlist" action on SCI for OpenTelemetry; and Policy Radar, EU data centre performance standards consultation, and US data centre transparency white paper cards in Policy, research and skills. Lifecycle stages come from the Notion projects database ("[DB] PWCIs").
- **Time-sensitive:** the EU data centre performance standards card invites evidence until **14 December 2026**. Update or remove it after that date, and refresh the working group "current work" lines when the wiki page changes.

- **Standards in development** (`#roadmap`) sits straight after Standards. Its cards use the dark "featured" card style with an "In development" label, and the button reads "Learn more and get involved" (SILO, SWI, SCI for OpenTelemetry link to their GSF pages). SCI for Security, SCI for MCP and "Other roadmap discussions" are **PLACEHOLDER** cards with no source yet.
- **Assemblies, powered by Harmony** (`#assemblies`) is titled "GSF Assemblies, powered by Harmony", and the lead paragraph explains the problem (achieving consensus on standards traditionally takes far too long) and that GSF developed Assemblies, powered by Harmony, to speed it up. It is a dark FeatureGrid panel explaining why Assemblies exist (consensus at scale breaks down), what Harmony does and the result, with links to `/assemblies/` and the Assemblies story. Wording follows the site's own Assemblies page and "Consensus at speed" story.
- **SCI self-certification** (`#selfcert`, after Assemblies) explains the free programme in three steps (submit the questionnaire, GSF review and certificate, public record and badge). Facts come from `src/pages/standards/certification/index.astro` and the self-certification article: free and open to any organisation, review checks completeness not the calculation, about four weeks, valid one year, disclosures published on GitHub. Its call to action links to `/standards/certification/`.
- **Case studies** opens with "Using SCI? Share your case study" and a "Get in touch" button to `/contact/` (not a membership enquiry); the section is organised by member: each card is titled with the member's name, sector as the label. To add a member, add a card to the `industry` section in the generator.
- **World Resources Institute and Green AI Committee** (`#wri`) has a "A total and a rate: measurement needs both" explainer below the cards (optional `explainer` field on a section: heading, intro, three items, closing line, button). It explains the GHG Protocol total and the SCI rate working together, drawing on `src/content/research/en/sci-csrd-compliance.md`; it is GSF's own view and must not imply WRI endorses it. The section has three cards: the WRI programme, Sustainable AI Group, and the GSF Green AI Committee (mission, co-chairs, member organisations from `src/content/research/en/green-ai-position-paper.md`, with links to the position paper and the EU AI Act article).
- **Academic members** opens with a call to action inviting institutions to discuss membership (`/membership/enquire/`), then one card per member institution.
- **Policy, research and skills** has one card for each document in `src/content/research/` (9 today) plus a card for the full publications hub. When a new research document is added there, add its card here.
- Hero: "Government and academic institutions can join the Foundation for free." with a "Membership enquiries" button to `/membership/enquire/`; hero image `public/assets/partnerships-hero.svg`.

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
- ARCHER2 course GSF attribution
- Second international research organisation card in the IGO section: placeholder wording, replace once the history of the discussions is available
- In-development placeholders: SCI for Security, SCI for MCP, and other roadmap discussions
- Dodge et al. FAccT 2022 authorship and GSF reference (the ACM link is the one GSF's own SCI page uses)

Also confirm before launch: Norwegian Environment Agency wording (source was an internal Steering email, 24 Nov 2026) and the credit for Taiwan's green software label (MODA-led; TIER is a member and research partner).
