# Member Stories Index

**Status:** Complete (Phase 4)
**Created:** 2026-02-27
**Last Updated:** 2026-02-27

## Overview

13 problem-first member stories mined from GSF's 188 legacy articles and online directory. Every story follows the same arc: organisations came together with a specific problem → they built a solution collaboratively through the GSF → the solution was adopted and created measurable impact.

Stories are structured for use on:
- **Homepage** (problem-solution sections) — TabbedSection components showing problem/journey pairs
- **Membership page** (proof section) — TextWithImage components showing member stories
- **Impact page** (success stories) — full narratives with quotes and metrics

## Story Summary Table

| # | Story | File | Problem | Theme | Key Orgs | Named People | Quotes | Source Articles | Evidence Strength |
|---|-------|------|---------|-------|----------|-------------|--------|----------------|-------------------|
| 1 | SCI Measurement | [sci-measurement.md](sci-measurement.md) | "We can't measure software carbon" | Standards | 11 orgs | 11 | 13 | 13 | **Strong** |
| 2 | Carbon Aware SDK | [carbon-aware-sdk.md](carbon-aware-sdk.md) | "We can't shift workloads to clean energy" | Tools | 8 orgs | 9 | 6 | 8 | **Strong** |
| 3 | Impact Framework | [impact-framework.md](impact-framework.md) | "Measurement is too hard for non-specialists" | Tools | 13 orgs | 12 | 12 | 5 | **Strong** |
| 4 | Amadeus & Carmen | [amadeus-carmen.md](amadeus-carmen.md) | "We need to measure carbon at travel industry scale" | Adoption | 3 orgs | 5 | 5 | 3 | **Medium** |
| 5 | SCI for AI | [sci-for-ai.md](sci-for-ai.md) | "We can't measure AI carbon" | Standards | 20 orgs | 13 | 7 | 7 | **Strong** |
| 6 | SOFT Framework | [soft-framework.md](soft-framework.md) | "Our pilots work but nothing scales" | Org Change | 8 orgs | 5 | 4 | 4 | **Medium** |
| 7 | SCI for Web | [sci-for-web.md](sci-for-web.md) | "No standard exists for measuring a website's carbon" | Standards | 16 orgs | 16 | 4 | 4 | **Medium** |
| 8 | Green Software Practitioner | [green-software-practitioner.md](green-software-practitioner.md) | "Our engineers don't know how to build green software" | Education | 9 orgs | 7 | 6+ | 7 | **Strong** |
| 9 | Green Software Patterns | [green-software-patterns.md](green-software-patterns.md) | "Engineers know the theory but not what to change in code" | Education | 11 orgs | 8 | 3 | 5 | **Medium** |
| 10 | Policy Radar | [policy-radar.md](policy-radar.md) | "We don't know what legislation is coming" | Policy | 10 orgs | 3 | 4 | 5 | **Medium** |
| 11 | AI-Accelerated Consensus | [ai-accelerated-consensus.md](ai-accelerated-consensus.md) | "Standards move too slowly for our regulatory timeline" | Process | 14 orgs | 8+ | 3 | 4 | **Medium** |
| 12 | GSF Origin Story | [gsf-origin.md](gsf-origin.md) | "The biggest companies were independently solving the same problem" | Origin | 5 founding + 6 steering | 5 | 13 | 6 | **Strong** |
| 13 | Real-Time Cloud | [real-time-cloud.md](real-time-cloud.md) | "Cloud providers have only released carbon data on a monthly basis, with delays of a few months" | Standards | 9 orgs (incl. AWS, Azure, GCP) | 3 | 9 | 7 | **Strong** |

## Recommended Usage by Page

### Homepage (strongest stories for problem-solution sections)

These stories have the strongest evidence, clearest problem framing, and best quotes for the TabbedSection components:

1. **Story 1: SCI Measurement** — The flagship. 11 organisations, ISO certification, named implementations with real metrics (Autostrade 15.1% CO2 savings across 60 apps, CAST 400 kg CO2/yr reduction, NTT DATA 305 kg CO2/1M requests). Includes the deeply personal Abhishek Gupta memorial.

2. **Story 8: Green Software Practitioner** — The most relatable. 130,000+ completions, adoption cascade across Goldman Sachs → Avanade → HCLTech → Manchester Met University. Sarah Hsu's quote connecting sustainability to reliability is gold.

3. **Story 3: Impact Framework** — The community proof. CarbonHack hackathons (395 → 500+ participants), 47 submissions, 30 plugins, USD 140,000 total prizes. Shows the ecosystem working.

4. **Story 5: SCI for AI** — The timely one. AI carbon measurement, 20 organisations collaborating, GPT-3's 500 tonnes CO2 context-setter. Regulatory urgency (EU AI Act).

5. **Story 12: GSF Origin Story** — The founding narrative. Jeff Sandquist, Sanjay Podder, Erica Brescia discovering they were all solving the same problem independently. 13 direct quotes.

### Membership Page (proof section)

Best for TextWithImage components showing why organisations join:

1. **Story 4: Amadeus & Carmen** — Single company's journey from joining GSF to donating an open-source tool. Travel industry scale (3 billion daily flight searches).

2. **Story 6: SOFT Framework** — Pindy Bhullar's journey from sailing boat insight to cross-org framework. HSBC, Microsoft, UBS collaboration. Shows how members shape solutions.

3. **Story 2: Carbon Aware SDK** — UBS deploying carbon-aware computing on a production banking platform. Enterprise credibility.

### Impact Page (all stories, plus these for headlines)

1. **Story 1: SCI Measurement** — ISO 21031:2024 is the headline achievement
2. **Story 8: Green Software Practitioner** — 130,000+ trained is the headline metric
3. **Story 10: Policy Radar** — Shows influence beyond tech (NY Senate, EU Green Digital Coalition, GHG Protocol)

## Cluster Groupings

### Measurement & Standards (Stories 1, 5, 7)
The core standards journey — from "no way to measure" to ISO-certified specifications. SCI → SCI for AI → SCI for Web shows the methodology expanding to new domains.

### Tools & Automation (Stories 2, 3, 4)
From SDK to framework to industry-scale engine. Carbon Aware SDK (shift workloads) → Impact Framework (measure easily) → Carmen (measure at scale). Each builds on the last.

### Scaling & Education (Stories 6, 8, 9)
The human infrastructure. Train engineers (GSP) → give them patterns to follow (Patterns) → help their organisations scale (SOFT). The adoption pipeline.

### Ecosystem & Process (Stories 10, 11, 12)
How the foundation itself works. Origin story → policy engagement → AI-accelerated standards process. Shows GSF's own evolution.

## Cross-Story Open Questions

### High Priority (would significantly strengthen stories if resolved)

| Question | Affects | Action Needed |
|----------|---------|---------------|
| Exact current GSP completion count (130,000+ needs verification) | Stories 8, 12 | Check GSF reporting/website for latest figure |
| SOFT pilot organisation names and outcomes | Story 6 | Ask GSF team — 4 global member orgs piloted but names not published |
| Amadeus "30% reduction target" — not explicitly stated in source articles | Stories 1, 4 | Verify with Amadeus/GSF whether this target was publicly announced |
| UBS exact SCI scores — shown in images, not extractable as text | Stories 1, 2 | Request from UBS or GSF for the actual computed values |
| Carmen adoption beyond Amadeus — any early adopters? | Story 4 | Check with GSF project team for post-donation adoption |
| Globant and BCG departure from steering committee — when and why? | Story 12 | Verify with GSF governance records |
| Thoughtworks current membership status | Story 12 | Verify — founding steering member but not in current steering list |

### Medium Priority (would add depth)

| Question | Affects | Action Needed |
|----------|---------|---------------|
| CarbonHack project outcomes — did Lowcarb, Zeus etc. continue post-event? | Stories 2, 3 | Follow up with hackathon winners |
| AI-assisted assembly process — applied to other standards beyond SCI for Web? | Story 11 | Confirm with GSF operations |
| Impact Framework ratification date | Story 3 | Check GSF project records |
| SCI for Web specification completion timeline | Story 7 | Check with Chris Adams / GSF |
| Policy Radar — number of policies currently tracked | Story 10 | Check policy-radar.greensoftware.foundation |
| Joseph Cook's specific role in Impact Framework | Story 3 | Ask GSF team |
| Asim Hussain's founding perspective and course creation role | Stories 8, 12 | Source interview or internal quotes |

### Low Priority (nice to have)

| Question | Affects | Action Needed |
|----------|---------|---------------|
| Jeff Sandquist's current role at Microsoft | Story 12 | LinkedIn check |
| Sarah Hsu's current title at Goldman Sachs | Story 8 | LinkedIn check |
| Avanade's current training numbers (3,200 figure is from Jan 2024) | Story 8 | Check with Avanade |
| Green Software Patterns total count today | Story 9 | Check patterns.greensoftware.foundation |
| Energy Web carbon-aware computation outcomes | Story 2 | Follow up with Energy Web |
| Manchester Met — other universities adopting GSP curriculum? | Story 8 | Research |

## Coverage Gaps

### Organisations with no story coverage
- **Cisco** — steering member, zero articles in the archive. Appears in WDPC directory data but WDPC was dropped (no articles).
- **Google** — steering member, appears as participant in multiple stories but no Google-led narrative.
- **Siemens** — steering member, appears in SOFT and SCI for AI but no Siemens-specific journey.

### Dropped from original target list
- **WDPC** — zero articles found. Cannot write a story without source material.

### Stories that could be written with additional sourcing
- **Sentry Software** — Bertrand Martin has strong quotes about making carbon "observable and traceable"; 15% carbon reduction achieved. Could be a short adoption vignette.
- **NTT DATA cross-story** — Gadhu Sundaram, Franziska Warncke, Denis Angeletta appear across 5+ stories. A "most connected member" narrative could work.
- **Singapore/IMDA** — First government agency to join GSF. Clifton Phua ran green software trials. Short but notable.

## Source Data

- **Article Index:** `docs/content/article-index.json` — 188 articles catalogued with structured metadata
- **Directory Data:** `docs/content/directory-data.json` — 70 members, 17 projects, 35 named individuals
- **Gap Analysis:** `docs/content/story-gap-analysis.md` — full analysis with cluster mapping and evidence assessment

## Statistics

- **Total articles mined:** 188
- **Articles flagged as potential stories:** 119 (63%)
- **Stories produced:** 13
- **Named individuals across all stories:** 90+
- **Organisations referenced:** 40+
- **Direct quotes extracted:** 70+
- **Source articles cited:** 60+ (some cited in multiple stories)
