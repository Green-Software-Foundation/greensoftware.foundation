# Feature Spec: Standards Process Page

**Status:** In Progress
**Created:** 2026-03-06
**Last Updated:** 2026-03-06

## Overview

A public-facing page at `/standards/` that showcases how the Green Software Foundation develops standards, with AI-facilitated consensus building as the headline feature. Includes a vertical lifecycle pipeline, current projects with their stages, links to assemblies, and the SCI certification programme.

## Problem Statement

GSF has a well-defined standards development process (documented internally in a Notion playbook) but no public-facing page explaining it. The novel AI-facilitated assembly process is a key differentiator that deserves prominent placement. Visitors need to understand the process, see current work, and find ways to get involved.

## Content Sources

- **Notion playbook:** `https://www.notion.so/grnsft/Draft-Standards-Specifications-Playbook-8906686110124d5a9f7d056a7ecb657b`
- **Project database:** `[DB] PWCIs` — Lifecycle Stage select with 10 options
- **Assemblies database:** `[DB] Assemblies` — workshop data with purposes, stages, participants
- **Existing site content:**
  - Story: `/stories/ai-accelerated-consensus/` (14 experts, 10 weeks, SCI for Web)
  - Article: "Designing SCI for Web: What We Agreed and What Comes Next"
  - Article: GSF + W3C collaboration announcement
  - Nav link: `assemblies.greensoftware.foundation`
- **SCI Certification:** `SCI Self Certification Program` (pre-draft, active in Notion)

## Page Structure

### 1. Hero
- **Heading:** "Building Standards Through *AI-Facilitated Consensus*"
- **Body:** GSF develops open standards for green software — using a novel AI-assisted process that compresses years of consensus-building into weeks.
- **CTAs:** "See How It Works" (scroll anchor) + "Join an Assembly" (external → assemblies.greensoftware.foundation)

### 2. TextWithImage — AI-Facilitated Consensus (headline feature)
- Lead with the story: 14 experts from 15 organisations reached full consensus in 10 weeks
- Process summary: structured questions → LLM synthesis → human-in-the-loop review → iterative refinement → explicit decision gates
- Contrast with traditional 3+ year timelines
- Links to the full story (`/stories/ai-accelerated-consensus/`) and the SCI for Web article
- Badge: "Our Approach"

### 3. TextBlock + CTA — Assemblies
- "Most GSF standards begin with an Assembly"
- Dedicated workshops (public or member-only) where experts collaborate on a specific challenge
- Purposes: exploration, knowledge sharing, new standard development, feedback, strategy
- CTA → `assemblies.greensoftware.foundation`

### 4. New Component: VerticalPipeline — Specification Lifecycle
A vertical stepped timeline showing the 7 lifecycle stages. Each step has:
- Stage number/indicator (with active/completed/upcoming visual states)
- Stage name
- Short description (from the playbook)

**Stages:**
1. **Proposal** — Requirements gathering from diverse stakeholders, defining scope and objectives, validating requirements
2. **Pre-Draft** — Research and analysis, composing a preliminary technical specification draft
3. **Draft** — Full specification with structured sections: introduction, scope, objectives, requirements, design, metrics, compliance
4. **Consistency Review** — Peer reviews, stakeholder feedback, iterative refinement of the document
5. **WG Approval** — Working group review, broader feedback incorporation, sign-off
6. **SC Ratification** — Steering Committee officially approves the specification for public release
7. **Published** — Public release, ongoing feedback, and maintenance

**Design notes:**
- Vertical layout works better on mobile than horizontal
- Each stage is a card/step connected by a vertical line
- Could show which stage current projects are at (optional enhancement)

### 5. CardGrid — Current Standards & Projects (dynamic from Notion data)
- Each card shows: project name, lifecycle stage badge, short description, project type
- Featured card for SCI (the flagship published standard)
- Other projects: SCI for AI (ratified), SCI for Web (draft), RTC (published), WDPC (draft), etc.
- Could be fetched from Notion via the existing fetch script, or hardcoded initially

### 6. FeatureGrid — Characteristics of Good Specifications
- Bordered variant, 2-column or 4-column grid
- 8 characteristics from the playbook: Clarity, Completeness, Consistency, Testability, Traceability, Maintainability, Feasibility, Prioritisation
- Each with a one-line description

### 7. CTACard — SCI Certification Programme
- Brief mention that GSF is developing a self-certification programme for SCI conformance
- Currently in pre-draft stage
- CTA to get involved or learn more

### 8. CTABanner
- "Want to propose a new standard or join an existing project?"
- CTA → contact/get involved link

## New Component: VerticalPipeline

A new Astro component at `src/components/vertical-pipeline.astro` (with optional React interactivity).

**Props:**
```typescript
interface Props {
  heading?: string;        // supports *accent* syntax
  body?: string;
  badge?: string;
  steps: Array<{
    name: string;
    description: string;
    status?: 'completed' | 'active' | 'upcoming';  // for optional visual states
  }>;
  bgClass?: string;
}
```

**Visual design:**
- Vertical line connecting steps (using border or pseudo-element)
- Each step: numbered circle/badge on the line + card to the right with name and description
- Teal accent for active/completed steps, grey for upcoming
- Responsive: single column on all screen sizes (vertical is mobile-friendly by nature)

## Implementation Plan

1. Write feature spec (this document)
2. Create the `vertical-pipeline.astro` component
3. Build the `/standards/` page composing existing + new components
4. Add to site navigation
5. Test on dev server
6. (Future) Add dynamic project data from Notion via fetch script

## Navigation

Add "Standards" to the main nav under an appropriate section, or as a top-level item alongside existing pages.
