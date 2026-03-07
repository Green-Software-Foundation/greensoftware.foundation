# Feature Spec: About Page

**Status:** Planned
**Created:** 2026-03-06
**Last Updated:** 2026-03-06

## Overview

The About page (`/about/`) is the foundation's primary "who we are" page — telling the story of what GSF is, why it exists, what it believes, what it does, and how to get involved. It sits within the existing "About" mega-menu alongside Governance, History, and Brand pages.

## Problem Statement

The navigation and footer already link to `/about/` but the page doesn't exist. Visitors who want to understand GSF's identity — mission, vision, values, structure, and what makes it different — have no single page that tells that story. The governance page covers structure and team but not the "why" or values. The homepage is sales-focused ("discuss your challenges") rather than identity-focused.

## Content Sources

All content below is drawn from verified sources:

- **Mission & Vision** — from the legacy manifesto (`_legacy/content/manifesto/en/manifesto.md`)
- **Core Values (5)** — from the same manifesto, each with title, description, and operationalisation
- **Official press boilerplate** — from the press page (`src/pages/press/index.astro`)
- **Stats** — from `src/data/stats.json` (72 organisations, 726 individuals)
- **Team data** — from `src/data/team.json`
- **Member logos** — from `src/data/logos.json` (60+ logos)
- **Homepage messaging** — "trusted ecosystem of people, standards, tooling and best practices"
- **Legal identity** — Joint Development Foundation nonprofit, under the Linux Foundation
- **Founding history** — May 2021, founded by Accenture, GitHub, Microsoft, and ThoughtWorks under the Linux Foundation
- **About GSF catalogue component** — concise description in `src/components/_catalogue/about-gsf.astro`

### Official Press Boilerplate

> "The Green Software Foundation is a non-profit with the mission to create a trusted ecosystem of people, standards, tooling, and best practices for building green software. The Green Software Foundation was born out of a mutual desire and need to collaborate across the software industry. Organisations with a shared commitment to sustainability and an interest in green software development principles are encouraged to join the Foundation to help grow the field of green software engineering, contribute to standards for the industry, and work together to reduce the carbon emissions of software."

### Six Key Messages (from press page)

1. Green Software should be understood, easy to apply, auditable, and prioritised.
2. Measuring software and building measuring as a habit is the most important step to reduce environmental impacts.
3. Standards establish norms, compare data, and normalise adoption of green software principles.
4. Technology sustainability is a shared responsibility — the right tools are crucial for industry-wide adoption.
5. Data transparency builds knowledge and strengthens ability to make software more energy-efficient.
6. Building and measuring in the open source is necessary to achieve a future where software has zero harmful effects on the environment.

## Proposed Page Structure

The page should flow from identity → values → what we do → credibility → next steps.

### Section 1: Hero
**Component:** `Hero`
- **Heading:** "About the Green Software Foundation"
- **Body:** Brief elevator pitch — who GSF is and why it exists. Something like: "We're a nonprofit building the standards, tools, and community the tech industry needs to make software part of the climate solution — not the problem."
- Standard hero layout with illustration, cream background

### Section 2: Mission & Vision
**Component:** `TextWithImage` (or two `TextBlock` components)
- **Mission:** "Build a trusted ecosystem of people, standards, tooling and best practices for creating and building green software."
- **Vision:** "Change the culture of building software across the tech industry, so sustainability becomes a core priority to software teams, just as important as performance, security, cost and accessibility."
- Could use badge labels "OUR MISSION" and "OUR VISION"
- Consider pairing with an illustration or the GSF icon

### Section 3: What is Green Software?
**Component:** `TextBlock` or `TextWithImage`
- Brief explanation: "Green software is software that is responsible for emitting fewer greenhouse gases. Our focus is reduction, not neutralisation."
- This is a core message from the legacy site and the "What is Green Software?" article
- Link to the full article as a CTA

### Section 4: Our Values
**Component:** `FeatureGrid` (variant: "bordered" or "cards", columns: 1 or 2)
- The 5 manifesto values, each with title + description:
  1. **Minimise Carbon** — "Reduce the total change in global carbon emissions associated with software. We choose abatement over neutralisation."
  2. **Maximise Trust** — "Without trust in our output, we can't have the influence needed to achieve our mission."
  3. **Engage with Empathy** — "All members and contributors should feel they can actively contribute in an environment that promotes belonging."
  4. **Be Inclusive and Open to All** — "Achieving our mission requires fairness to all members and inclusion of diverse perspectives."
  5. **Hold Ourselves Accountable** — "Accountability builds trust and ensures our community upholds its values."
- Could use the existing manifesto SVG illustrations if migrated to the new site

### Section 5: What We Do (overview)
**Component:** `FeatureGrid` (variant: "bordered", columns: 2)
- Same 4-pillar grid as the homepage but with slightly different copy for the about context:
  1. **Standards** — SCI, SOFT, SCI for AI, etc.
  2. **Policy** — Regulatory engagement, position papers
  3. **Education** — GSP course (130,000+ completions), certification
  4. **Research** — White papers, State of Green Software
- Each links to respective section pages

### Section 6: By the Numbers
**Component:** `StatsGrid` or `CommunityReach`
- Key stats pulled from data files:
  - 72 member organisations
  - 726 individuals
  - 130,000+ GSP course completions
  - ISO 21031:2024 (SCI standard)
  - 450,000 podcast downloads
  - 12,000 LinkedIn followers

### Section 7: Our Structure
**Component:** `TextBlock`
- Brief explanation of GSF's structure: nonprofit under the Joint Development Foundation, part of the Linux Foundation family
- Mention governance model: transparent, member-driven, consensus-based
- CTA linking to `/governance/` for full details

### Section 8: Logo Marquee
**Component:** `LogoMarquee`
- "Trusted by 60+ organisations" — same as homepage

### Section 9: CTA
**Component:** `CTABanner`
- Drive to membership or governance page
- "Want to shape the future of green software?" → "Explore membership"

### Section 10: Footer
Standard footer with About section links

## Design Notes

- Follow the same component composition pattern as homepage and governance pages
- Use `bg-accent-lightest-2` as default section background
- Alternate white/cream backgrounds between sections for visual rhythm
- The page should feel authoritative and institutional, not salesy (contrast with the homepage which is conversion-focused)

## What's NOT on this page

- **Detailed team/leadership info** → that's on `/governance/`
- **Detailed history/timeline** → that's planned for `/history/`
- **Brand assets** → that's planned for `/brand/`
- **Membership sales pitch** → that's on `/membership/`
- **Detailed standards info** → each has its own page

## Implementation Plan

1. Create `src/pages/about/index.astro`
2. Compose page using existing parameterised components (no new components needed)
3. Pull stats dynamically from `stats.json` and other data files
4. Copy the manifesto values from legacy content
5. Ensure the page has `data-pagefind-body` for search indexing
6. Verify navigation links resolve correctly

## Open Questions

- Should the manifesto SVG illustrations be migrated to the new site for the values section?
- Is the mission/vision statement still current, or does the team want to update it?
- Should there be a "Founded in 2021" or similar founding story section? (Could be brief here and link to `/history/`)
- Should this page include a brief leadership section (just chair + ED with photos) or leave all people to governance?
