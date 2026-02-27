# Sitemap & Navigation Spec

**Status:** In Progress
**Created:** 2026-02-26
**Last Updated:** 2026-02-26

## Overview

Navigation structure and full sitemap for the GSF website rebuild. Uses a mega-menu pattern with 4 top-level hoverable items, search, and a persistent CTA button.

## Navigation Bar

```text
[Logo]   Standards ▾   Adoption ▾   Community ▾   About ▾   [🔍]   [Discuss your challenges]
```

- **Standards** — mega-menu (3 columns: Software, Hardware, Process)
- **Adoption** — mega-menu (3 columns: Education, Policy & Research, Tools)
- **Community** — mega-menu (3 columns + sub-section: Listen & Learn, Connect, Get Recognised, Events)
- **About** — mega-menu (3 columns: Organisation, Impact, For Members)
- **Search** — icon, opens search overlay
- **CTA** — styled as button, links to /membership/

## Mega-Menu Panels

### Standards

```text
Software                     Hardware                Process
──────────                   ──────────              ──────────
SCI                          WDPC                    Certification
  ISO-certified metric         Data centre             Get certified in
  for software carbon           power and               green software
  intensity                     cooling                 specifications
                                efficiency
SOFT                                                 Assemblies
  Framework for              SEE                       AI-facilitated
  organisational               Software Energy          consensus at
  transformation               Efficiency               scale

SCI for AI
  Carbon measurement
  for AI systems

SWE
  Software Water
  Efficiency

All standards →
```

**Notes:**

- Each standard has a short description line underneath
- Software and Hardware tracks separated to highlight that GSF covers both
- "All standards →" links to `/standards/` which lists all standards including those in flight
- Certification description: get certified on the specifications
- Assemblies description: AI-facilitated consensus at scale

### Adoption

```text
Education               Policy & Research       Tools
──────────              ─────────────────       ──────
Courses →               Manifesto               Carbon Aware SDK
Patterns →              Policy Radar              SDK for building
Awesome Green             Track emerging            carbon-aware
  Software →              legislation and           applications
                          regulatory trends
                        Policy Engagement       Carmen
                        State of Green            Automated carbon
                          Software                  reporting for
                        All research →              cloud workloads

                                                Impact Framework
                                                  Measure the carbon
                                                  footprint of your
                                                  software
```

**Notes:**

- Education items all link externally (courses to learning platform, patterns and awesome green software to their own sites)
- Policy Radar is a dedicated sub-page under `/policy/`
- Tools each have a description line
- "All research →" links to `/research/`

### Community

```text
Listen & Learn          Connect                 Events
──────────              ──────────              ──────
Environment Variables   Community Platform      Summit
  Practitioner-focused  Newsletter              Carbon Hack
  podcast →               (sign up + archive)
CXO Bytes
  C-suite focused       Get Recognised
  podcast →             ──────────────
Articles                Badges
                        Champions Programme

About our community →
```

**Notes:**

- Podcasts link externally
- Community Platform links externally
- Newsletter is a sign-up page that also shows the archive
- Articles links to `/articles/` (single page with filter system)
- "About our community →" links to `/community/` landing page

### About

```text
Organisation            Impact                  For Members
──────────              ──────                  ────────────
About                   Success Stories         Member Playbook →
Governance &            Articles                Member Onboarding
  Leadership            Press & Media           Employee Registration
History                                           If you're an employee
Brand & Assets                                    of an existing member
Member Directory →                                organisation, register
Partner Directory →                               here to join working
Working Groups →                                  groups and initiatives
Committees →
Projects →
```

**Notes:**

- "About" is the mission/how we work page
- Governance covers leadership, steering committee, other committees
- Member Directory, Partner Directory, Working Groups, Committees, and Projects all link to the external directory site
- Impact is a single page featuring success stories, articles (cross-linked), and press & media
- Member Playbook links externally
- Employee Registration includes explanatory text for employees of existing member organisations

## Full Sitemap

> **Note:** STANDARDS, ADOPTION, COMMUNITY, ABOUT are mega-menu grouping labels only — not URL segments. All routes are top-level (e.g. `/standards/`, not `/standards-menu/standards/`).

```text
greensoftware.foundation
│
├── / (Homepage)
│
├── # STANDARDS (menu group — not a URL)
│   └── /standards/
│       ├── /standards/sci/
│       ├── /standards/soft/
│       ├── /standards/wdpc/
│       ├── /standards/sci-ai/
│       ├── /standards/swe/
│       ├── /standards/see/
│       ├── /standards/certification/
│       └── /assemblies/ (single page, includes upcoming events)
│
├── # ADOPTION (menu group — not a URL)
│   ├── Courses → external (learning platform)
│   ├── Patterns → external
│   ├── Awesome Green Software → external
│   ├── /policy/
│   │   └── /policy/radar/
│   ├── /research/ (includes white papers, State of Green Software)
│   └── /tools/
│       ├── Carbon Aware SDK → external (GitHub/microsite)
│       ├── Carmen → external
│       └── Impact Framework → external
│
├── # COMMUNITY (menu group — not a URL)
│   ├── Environment Variables (podcast) → external
│   ├── CXO Bytes (podcast) → external
│   ├── /articles/ (single page with filter system)
│   │   ├── Filter: Member Q&As
│   │   ├── Filter: Research Reports
│   │   ├── Filter: Blog Posts / Updates
│   │   └── Filter: News
│   ├── Community Platform → external
│   ├── /newsletter/ (sign up + archive)
│   ├── Badges → badges.greensoftware.foundation
│   ├── Champions Programme → external
│   ├── /events/
│   │   ├── Summit
│   │   └── Carbon Hack
│   └── /community/ (landing page describing community)
│
├── # ABOUT (menu group — not a URL)
│   ├── /about/ (mission, how we work)
│   ├── /governance/ (leadership, committees)
│   ├── /history/ (timeline, origin story)
│   ├── /brand/ (guidelines, assets, press kit, illustrations)
│   ├── Member Directory → external directory
│   ├── Partner Directory → external directory
│   ├── Working Groups → external directory
│   ├── Committees → external directory
│   ├── Projects → external directory
│   ├── /impact/ (success stories, press & media)
│   ├── Member Playbook → external
│   ├── Member Onboarding → TBD
│   └── Employee Registration → external
│
├── /membership/ (CTA destination — steering-led narrative)
│
└── Footer links
    ├── /articles/
    ├── /membership/
    ├── Member Directory → external
    └── Partner Directory → external
```

## Internal Pages to Build

| Page | Route | Notes |
| ---- | ----- | ----- |
| Homepage | `/` | Hero's journey narrative |
| Membership | `/membership/` | CTA destination, steering-led |
| Standards listing | `/standards/` | All standards + how we develop them |
| SCI | `/standards/sci/` | From microsite |
| SOFT | `/standards/soft/` | From microsite |
| WDPC | `/standards/wdpc/` | From microsite |
| SCI for AI | `/standards/sci-ai/` | From microsite |
| SWE | `/standards/swe/` | TBD |
| SEE | `/standards/see/` | TBD |
| Certification | `/standards/certification/` | |
| Assemblies | `/assemblies/` | Single page, includes upcoming events |
| Policy | `/policy/` | Manifesto, engagement |
| Policy Radar | `/policy/radar/` | Track legislation and regulatory trends |
| Research | `/research/` | Papers + State of Green Software |
| Articles | `/articles/` | Filtered listing |
| Newsletter | `/newsletter/` | Sign up + archive |
| Events | `/events/` | Summit, Carbon Hack |
| Community | `/community/` | Landing page |
| About | `/about/` | Mission, how we work |
| Governance | `/governance/` | Leadership, committees |
| History | `/history/` | Timeline |
| Brand & Assets | `/brand/` | Guidelines, press kit, illustrations |
| Impact | `/impact/` | Success stories, press & media |

**~23 internal pages** + 4 microsite ports (SCI, SOFT, WDPC, SCI for AI).

External redirects: courses, patterns, awesome green software, tools, community platform, badges, champions, member directory, partner directory, working groups, committees, projects, playbook, employee registration.

## Mega-Menu Component Notes

The current microsite component library does not include a mega-menu. This will need to be built using Radix UI `NavigationMenu` primitives, which handle:

- Hover behaviour and delays
- Keyboard navigation
- Screen reader accessibility
- Focus management

On mobile, the mega-menu collapses into the existing `Sheet` (hamburger menu) component with accordion sections for each top-level group.

## Open Questions

- SWE and SEE descriptions (standards still in development)
- Whether events page is one page or separate pages per event
- Member onboarding — internal page or external?
- Which directory links point where (all may go to same external directory site with different filters)
- Footer link selection — what else belongs in the footer?
