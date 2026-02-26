# Sitemap & Navigation Spec

**Status:** In Progress
**Created:** 2026-02-26
**Last Updated:** 2026-02-26

## Overview

Navigation structure and full sitemap for the GSF website rebuild. Uses a mega-menu pattern with 4 top-level hoverable items, a standalone Assemblies link, search, and a persistent CTA button.

## Navigation Bar

```
[Logo]   What We Do ▾   Resources ▾   Assemblies   About ▾   [🔍]   [Discuss your challenges]
```

- **What We Do** — mega-menu (5 columns)
- **Resources** — mega-menu (3 columns)
- **Assemblies** — single page, no dropdown
- **About** — mega-menu (2-3 columns)
- **Search** — icon, opens search overlay
- **CTA** — styled as button, links to /membership/

## Mega-Menu Panels

### What We Do

```
Standards           Policy          Education             Research
──────────          ──────          ──────────            ──────────
Overview            Overview        Overview              Overview
SCI                 Policy Radar    Practitioner Course   State of Green
SOFT                                SOFT Essentials         Software
WDPC                                SCI for AI Course
SCI for AI                          IF Course
Certification                       Patterns
                                    Awesome Green Software
```

**Notes:**
- Policy Radar is a dedicated sub-page under Policy
- Education courses mostly redirect to external platforms
- Patterns redirects to external
- Awesome Green Software redirects to external
- Research Overview page includes white papers inline; State of Green Software is a separate linked item
- Standards Overview covers how we develop standards and our process

### Resources

```
Tools                   Articles            Community
──────                  ──────────          ──────────
Carbon Aware SDK        All Articles        Environment Variables (podcast)
Carmen                  (filtered by:       CXO Bytes (podcast)
Impact Framework          member Q&As,      Community Platform
                          research,         Badges Platform
                          updates,          Events
                          news,               Summit
                          etc.)               Carbon Hack

**Notes:**
- Tools lives under Resources only (not duplicated in What We Do)
```

**Notes:**
- Articles is a single listing page with a filter/tag system, not separate pages per type
- Community sub-pages may be a mix of internal pages and external redirects
- Badges Platform links to badges.greensoftware.foundation

### Assemblies (no dropdown)

Single page. AI-facilitated consensus process. What it is, how it works, past assemblies, upcoming events.

### About

```
Organisation            Impact              For Members
──────────              ──────              ────────────
Overview                Success Stories     Member Directory → external
Governance &            Press & Media       Member Playbook → external
  Leadership
History
Partnerships
Brand & Assets
```

**Notes:**
- Impact is a single page featuring success stories and press/media
- Member Directory and Playbook are external links (footer also)
- Brand & Assets includes press kit, style guide, illustration library, logo downloads

## Full Sitemap

> **Note:** WHAT WE DO, RESOURCES, ABOUT etc. are mega-menu grouping labels only — not URL segments. All routes are top-level (e.g. `/standards/`, not `/what-we-do/standards/`).

```
greensoftware.foundation
│
├── / (Homepage)
│
├── # WHAT WE DO (menu group — not a URL)
│   ├── /standards/
│   │   ├── Overview (how we develop standards, our process)
│   │   ├── /standards/sci/
│   │   ├── /standards/soft/
│   │   ├── /standards/wdpc/
│   │   ├── /standards/sci-ai/
│   │   └── /standards/certification/
│   ├── /policy/
│   │   ├── Overview
│   │   └── /policy/radar/
│   ├── /education/
│   │   ├── Overview (links to all courses)
│   │   ├── Practitioner Course → external
│   │   ├── SOFT Essentials → external
│   │   ├── SCI for AI Course → external
│   │   ├── IF Course → external
│   │   ├── /patterns/ → external
│   │   └── Awesome Green Software → external
│   └── /research/
│       ├── Overview (includes white papers)
│       └── State of Green Software
│
├── # RESOURCES (menu group — not a URL)
│   ├── /tools/
│   │   ├── Carbon Aware SDK
│   │   ├── Carmen
│   │   └── Impact Framework
│   ├── /articles/ (single page with filter system)
│   │   ├── Filter: Member Q&As
│   │   ├── Filter: Research Reports
│   │   ├── Filter: Blog Posts / Updates
│   │   └── Filter: News
│   └── /community/
│       ├── Environment Variables (podcast)
│       ├── CXO Bytes (podcast)
│       ├── Community Platform
│       ├── Badges Platform → badges.greensoftware.foundation
│       └── /events/
│           ├── Summit
│           └── Carbon Hack
│
├── /assemblies/ (single page — top-level nav item, no dropdown)
│
├── # ABOUT (menu group — not a URL)
│   ├── /about/ (overview)
│   ├── /governance/ (leadership, committees, working groups, projects directory)
│   ├── /history/
│   ├── /partnerships/
│   ├── /brand/ (guidelines, assets, press kit)
│   └── /impact/ (success stories, press & media)
│
├── /membership/ (CTA destination — steering-led narrative)
│
└── Footer-only links
    ├── /members/ → external directory
    └── /playbook/ → external
```

## Mega-Menu Component Notes

The current microsite component library does not include a mega-menu. This will need to be built using Radix UI `NavigationMenu` primitives, which handle:
- Hover behaviour and delays
- Keyboard navigation
- Screen reader accessibility
- Focus management

On mobile, the mega-menu collapses into the existing `Sheet` (hamburger menu) component with accordion sections for each top-level group.

## Open Questions

- Assemblies naming — keeping "Assemblies" for now but may evolve
- Whether Tools appears in both What We Do and Resources or just one
- "Awesome Green Software" naming
- How articles filter categories map to existing CMS tags/categories
- Whether community sub-pages are internal or all external redirects
