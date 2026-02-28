# Story Gap Analysis & New Story Discovery

**Phase 2.5 of the Member Stories Mining Plan**
**Date:** 2026-02-27
**Status:** Awaiting review before Phase 3

---

## Executive Summary

From 188 catalogued articles, 119 were flagged as potential story material. After clustering, cross-referencing with the directory (6 steering members, 64 general members, 17 projects, 30+ key people), and validating against the original 15 targets, I recommend **18 stories** grouped into 5 clusters. The evidence base is strong: 15 case studies, 73 member Q&As, 12 workshop reports, and 7 whitepapers provide rich source material. Key gaps are identified below.

---

## 1. Cluster Analysis

### 1.1 SCI Specification Cluster (53 potential-story articles)

The largest cluster by far. The SCI story spans the entire GSF timeline:

- **Origin articles:** `software-carbon-intensity-crafting-a-standard.md`, `software-carbon-intensity-sci-specification-project.md`, `the-green-software-foundation-releases-alpha-version-of-soft.md`
- **ISO milestone:** `sci-specification-achieves-iso-standard-status.md`
- **Implementation case studies:** Accenture (0.025 gCO2/API), UBS (banking apps), CAST (400kg CO2/yr reduction), NTT DATA (serverless on AWS), AVEVA (top 10 products), Intesa Sanpaolo, Texas State University
- **Disclosure/certification:** `establishing-software-carbon-transparency-why-we-re-exploring-sci-disclosure-cert.md`
- **Human story:** `honoring-abhishek-gupta.md` -- founding co-chair who led SCI from inception through ISO, deeply personal tributes from 10+ community members

**Assessment:** TOO MUCH material for one story. Should be SPLIT into: (a) SCI Standards Journey, (b) SCI in Practice (adoption case studies).

### 1.2 Carbon Aware SDK Cluster (22 potential-story articles)

Clear progression narrative:

- **Origin:** `carbon-aware-kubernetes.md` (concept, 2021)
- **Development:** Multiple contributors (Microsoft, Avanade, UBS, NTT DATA)
- **Hackathons:** CarbonHack22 (395 participants, 13-24% carbon reductions), CarbonHack24 (500+ participants, 47 submissions)
- **Graduation:** `celebrating-the-graduation-of-the-carbon-aware-sdk.md` (first GSF project to graduate)
- **Enterprise adoption:** UBS carbon-aware computing whitepaper (flagship), Energy Web (world-first decentralised computation)
- **Lead:** Vaughan Knight (Microsoft) -- 2 articles with quotes

**Assessment:** STRONG. Merge with UBS story or keep separate. The SDK has its own lifecycle story distinct from UBS's adoption story.

### 1.3 UBS Adoption Cluster (24 potential-story articles mentioning UBS)

UBS has the deepest adoption story of any member:

- **Joining:** `ubs-joins-green-software-foundation-as-a-steering-member.md`
- **Carbon-aware whitepaper:** `carbon-aware-computing-whitepaper-how-ubs-succeeded-in-measuring-and-reducing-car.md` (flagship, with Paul McEwen quote)
- **SCI baselining:** `baselining-software-carbon-emissions-ubs-use-case.md`
- **Personal stories:** Kin Chiu (Sustainable Technology Guild, parent motivation), Pindy Bhullar (Exxpedition sailing trip to SOFT lead)
- **RTC co-lead:** Pindy Bhullar co-led Real Time Cloud standard
- **Key people:** Kin Chiu, Pindy Bhullar, Ben Logan (Steering), Richa Richa (DevRel), Vinjosh Varghese (Green AI + Steering)

**Assessment:** STRONG. Best single-company adoption story. Should remain as its own story.

### 1.4 Impact Framework + Carbon Hack Cluster (17 + 5 articles)

- **IF articles:** Launch, ratification, LLM emissions integration, hackathon
- **Carbon Hack 22:** 395 participants, 51 projects, $80K prizes, 8 sponsors
- **Carbon Hack 24:** 500+ participants, 47 submissions, 30 new IF plugins, $40K prizes
- **Key people:** Joseph Cook (GSF, Product Owner), Navveen Balani (Accenture), Srinivasan Rakhunathan (Microsoft)

**Assessment:** STRONG. The hackathon series is the community engagement mechanism for IF adoption. Should be combined: "Impact Framework & Carbon Hack" story.

### 1.5 SOFT Framework Cluster (3 articles)

Thin article coverage but important:

- **Ratification:** `celebrating-the-ratification-of-sustainable-organizational-framework-for-technolo.md` -- led by Pindy Bhullar (HSBC) and Sean O'Keefe (Microsoft), 4 pilot orgs
- **Referenced in:** building-green-software-through-standards-and-collaboration, 2025 annual report
- **Key people:** Pindy Bhullar (now listed as ClimateAction.tech in directory, but articles show HSBC/UBS affiliation)

**Assessment:** MEDIUM. Only 3 articles but the ratification article is rich. The Pindy Bhullar personal journey adds depth. Viable as a shorter story.

### 1.6 Green Software Practitioner Cluster (10 potential-story articles)

- **Scale metric:** 50,000+ completions by late 2023, later referenced as 130,000+
- **HCLTech:** 100K employees in sustainability training, 100+ engineer CoE, Green Software Engineering Lab in Redmond
- **Avanade:** 3,200 trained, ~1,000 certified, 104 GSF contributors
- **Manchester Met:** First undergraduate Green Software Engineering course
- **Goldman Sachs:** Sarah Hsu chairs Principles revision, SRE-sustainability parallel
- **No single "Sarah Tosu wrote a book" article found** -- the plan references "Sarah Tosu" but the index shows "Sarah Hsu" from Goldman Sachs

**Assessment:** STRONG. Massive adoption metrics. Should combine practitioner course + Avanade grassroots + education stories.

### 1.7 SCI for AI Cluster (7 articles)

Clear progression:

- **Workshop:** `sci-for-ai-workshop-report.md` (20 organisations)
- **Position paper:** `green-ai-position-paper.md` (13 organisations)
- **Ratification:** `sci-ai-specification-ratified-standard-for-measuring-ai-emissions-across-the.md`
- **EU AI Act:** `the-eu-ai-act-insights-from-the-green-ai-committee.md`
- **Key people:** Navveen Balani (Accenture, lead), Henry Richardson (WattTime, lead), Sanjay Podder (Accenture, GAIC co-chair), Federica Sarro (UCL)

**Assessment:** STRONG. Timely (AI regulation), clear progression, multi-company. Should remain as its own story.

### 1.8 SCI for Web Cluster (3 articles)

- **W3C collaboration:** `the-green-software-foundation-and-world-wide-web-consortium-w3c-collaborate-to-ad.md`
- **Design workshop:** `designing-sci-web-what-we-agreed-and-what-comes-next.md` (14 members, AI-assisted consensus)
- **University of Edinburgh:** 13 tonnes CO2 saved from image optimisation

**Assessment:** MEDIUM. Only 3 articles but the W3C collaboration and AI-assisted workshop are novel. Could be combined with SCI Standards Journey or kept as a shorter story.

### 1.9 Amadeus / Carmen Cluster (5 + 1 articles)

- **Member Q&A:** Virginie Corraze on applying SCI to largest cloud app, IATA collaboration
- **Carmen donation:** `welcoming-carmen-carbon-measurement-engine-as-a-gsf-project.md`
- **Carbon Hack 24:** Amadeus participated, Eleonore Gueit quoted ("Everyone is craving measurement")
- **SCI for Web workshop:** Florent Morel participated
- **Directory:** Florent Morel and Robin Castellon lead Carmen project

**Assessment:** MEDIUM. Carmen is brand new (Jan 2026, Draft status). The Amadeus journey is real but thin on dedicated articles. Combine with "SCI in Practice" or keep as shorter story.

### 1.10 Policy Cluster (4 Policy Radar articles + 6 policy-themed articles)

- **Policy Radar ratification:** Led by Chris Adams (Green Web Foundation)
- **Aya Saed:** US Congressional Counsel to Scope3 to GSF Policy WG co-chair
- **Mission statement update:** NY Corporate Climate Accountability Act, EU Green Digital Coalition
- **GHG Protocol consultation:** `why-the-gsf-is-participating-in-the-ghg-protocol-scope-2-con.md`
- **AI Environmental Impacts Act endorsement**

**Assessment:** MEDIUM-STRONG. The policy story is about GSF becoming a policy voice. Chris Adams + Aya Saed provide personal narratives.

### 1.11 Grassroots Community Cluster (multiple articles)

- **Meetup Network:** 10,000 members, 36 groups, 19 countries
- **Avanade grassroots:** 3,200 trained from initial 20-30 person group
- **Individual champions:** Mohammad Haque (Indeed Green Engineering Guild), Alexander Kroll (NTT DATA, 400+ developers), Timo Muller (LFCA, 1,500 companies), Aydin Mir Mohammadi (Karlsruhe, 670+ members)
- **GSF Global Summits:** 2022 (14 countries), 2024 (8 countries, 11 host companies)

**Assessment:** STRONG. Compelling "movement" story with scale metrics and individual narratives.

### 1.12 WDPC / Hardware Standards Cluster (0 articles)

- **Directory:** WDPC launched May 2025, Draft status, led by My Truong (ZutaCore CTO), chaired by Christopher Liljenstolpe (Cisco)
- **Articles:** ZERO dedicated articles found in the index
- **Hardware Standards WG:** Formed 2025, Cisco chairs it

**Assessment:** WEAK. No article evidence. Would require interviews or supplementary research.

### 1.13 RTC (Real Time Cloud) Cluster (6 articles)

- **Ratification:** `real-time-cloud-ratified-a-major-step-toward-transparent-sustainable-cloud-comput.md`
- **Led by:** Adrian Cockcroft (3 article appearances), Pindy Bhullar (UBS)
- **Impact:** Standardises energy/carbon data from AWS, Azure, GCP into comparable format
- **CSRD compliance angle**

**Assessment:** MEDIUM. Clear progression story, but may work better folded into the broader tools narrative or the UBS story (Pindy co-led).

---

## 2. Cross-Reference with Directory

### 2.1 Projects: Article Coverage vs Directory Presence

| Project | Status | Articles | Stories | Lead(s) in Articles? | Gap? |
|---------|--------|----------|---------|---------------------|------|
| SCI | Published | 76 | 53 | Yes (Navveen, Henry, Abhishek) | No |
| Carbon Aware SDK | Published | 31 | 22 | Yes (Vaughan Knight) | No |
| Impact Framework | Ratified | 21 | 17 | Yes (Navveen, Srinivasan, Joseph Cook) | No |
| Green Software Patterns | Published | 16 | 13 | Yes (Franziska Warncke, Liya Mathew) | No |
| Green Software Practitioner | Published | 14 | 10 | No named lead in articles | Minor |
| SCI for AI | Ratified | 7 | 7 | Yes (Navveen, Henry) | No |
| RTC | Published | 7 | 6 | Yes (Adrian Cockcroft, Pindy) | No |
| SCI Guide | Published | 6 | 6 | No named lead | Minor |
| Policy Radar | Published | 4 | 4 | Yes (Chris Adams) | No |
| SOFT | Ratified | 3 | 3 | Yes (Pindy Bhullar) | Minor |
| SCI for Web | Draft | 3 | 3 | No named lead | Minor |
| Carmen | Draft | 1 | 1 | Yes (Florent Morel) | Yes -- new project, thin coverage |
| Awesome Green Software | Published | 3 | 0 | No | Yes -- no stories |
| SCI Self Certification | Pre-draft | 1 | 1 | No | Yes -- too early |
| Green AI Practitioner | Pre-proposal | 1 | 1 | No | Yes -- too early |
| SEE | Proposal | 0 | 0 | No | Yes -- no articles |
| WDPC | Draft | 0 | 0 | No (My Truong in directory only) | **Yes -- major gap** |

### 2.2 Key People: Directory vs Article Coverage

| Person | Company | Directory Role(s) | Article Appearances | Quotes? |
|--------|---------|-------------------|-------------------|---------|
| Navveen Balani | Accenture | SCI Lead, SCI for AI Lead, IF Lead, Standards WG Co-Chair, Steering, Green AI | 12 | Yes (12) |
| Henry Richardson | WattTime | SCI Lead, SCI for AI Lead, Standards WG Co-Chair | 6 | Yes (6) |
| Gadhu Sundaram | NTT DATA | Steering Committee Chair, Green AI | 3 | Yes (3) |
| Chris Adams | Green Web Fdn | Policy WG Chair | 9 | Yes (9) |
| Pindy Bhullar | ClimateAction.tech | SOFT Lead | 5 | Yes (5) |
| Vaughan Knight | Microsoft | Carbon Aware SDK Lead | 2 | Yes (2) |
| Joseph Cook | GSF | IF Lead | 0 (only in directory) | **No** |
| My Truong | ZutaCore | WDPC Lead | 0 | **No** |
| Christopher Liljenstolpe | Cisco | Hardware WG Chair, Steering | 0 | **No** |
| Jonathan Turnbull | Google | Steering Vice-Chair, Green AI | 0 | **No** |
| Ben Logan | UBS | Steering, UBS Org Lead | 0 | **No** |
| Carolin Rubner | Siemens | Steering, Siemens Org Lead | 1 | Yes (1) |
| Sanjay Podder | Accenture | Steering (former Chair) | 15 | Yes (15) |
| Sarah Hsu | Goldman Sachs | DevRel Committee | 5 | Yes (4) |
| Florent Morel | Amadeus | Carmen Lead | 0 (mentioned in workshop attendee lists) | **No** |
| Robin Castellon | Amadeus | Carmen Lead | 0 | **No** |
| Holly Cummins | IBM | DevRel Committee | 0 | **No** |
| Federica Sarro | UCL | Green AI Committee | 1 (listed as member in position paper) | No direct quote |

### 2.3 Steering Member Article Coverage

| Steering Member | Joined | Dedicated Articles | Potential Stories | Key Quote Available? | Assessment |
|-----------------|--------|-------------------|-------------------|---------------------|------------|
| Accenture | 2021-01 | 36 | 25 | Yes (Sanjay, Navveen) | **Excellent** |
| UBS | 2022-04 | 27 | 24 | Yes (Kin Chiu, Pindy, Paul McEwen) | **Excellent** |
| NTT DATA | 2021-09 | 27 | 20 | Yes (Toru, Alexander, Gadhu, Franziska) | **Excellent** |
| Siemens | 2023-09 | 21 | 18 | Yes (Carolin Rubner) | **Good** |
| Google | 2023-06 | 18 | 13 | Yes (Savannah Goodman) | **Good** |
| Cisco | 2025-02 | 9 | 8 | No dedicated article or direct quote | **Weak -- newest member, no Q&A** |

---

## 3. Validate Target Stories

### 3.1 Evidence Assessment of Original 15 Targets

| # | Target Story | Evidence | Articles | Quotes | Metrics | Verdict |
|---|-------------|----------|----------|--------|---------|---------|
| 1 | SCI Specification | **STRONG** | 53 | Yes (10+) | ISO status, implementations | **SPLIT into 2** |
| 2 | Carbon Aware SDK | **STRONG** | 22 | Yes (Vaughan, Asim) | Graduated, hackathon numbers | Keep |
| 3 | UBS Carbon-Aware Computing | **STRONG** | 24 | Yes (Paul McEwen, Kin Chiu, Pindy) | Enterprise-scale CO2 savings | Keep |
| 4 | SOFT Framework | **MEDIUM** | 3 | Yes (Pindy, Sean O'Keefe) | 4 pilot orgs | Keep (shorter) |
| 5 | Green Software Practitioner | **STRONG** | 10 | Yes (multiple) | 130K+ completions | Keep |
| 6 | Green Software Patterns | **MEDIUM** | 13 | Yes (Franziska, Daniel Lazaro) | Catalog evolution | **Merge with Education** |
| 7 | WDPC | **WEAK** | 0 | No | No | **DROP or defer** |
| 8 | SCI for AI | **STRONG** | 7 | Yes (Navveen, Henry) | Ratified, 20 org workshop | Keep |
| 9 | SCI for Web | **MEDIUM** | 3 | Yes (14 workshop members) | AI-assisted consensus, W3C collab | Keep (shorter) |
| 10 | Impact Framework | **STRONG** | 17 | Yes (multiple) | Ratified, 30 plugins, 500+ hackathon participants | **Merge with Carbon Hack** |
| 11 | Carmen | **WEAK** | 1 | No direct quotes | Draft status | **Merge with Amadeus** |
| 12 | Amadeus SCI Adoption | **MEDIUM** | 5 | Yes (Virginie, Eleonore) | SCI on largest app, IATA collab | **Merge with Carmen** |
| 13 | Policy Radar | **MEDIUM** | 4 | Yes (Chris Adams, Aya Saed) | Ratified, NY/EU engagement | Keep |
| 14 | Thoughtworks Engagement | **MEDIUM** | 13 (company mentions) | Yes (Dan, Lisa, Jesse) | Cloud Carbon Footprint tool, UN playbook | **Reframe as broader community** |
| 15 | Carbon Hack | **STRONG** | 5 | Yes (multiple) | 395 + 500+ participants, 13-24% reductions | **Merge with Impact Framework** |

### 3.2 Recommended Changes

- **SPLIT:** Story 1 (SCI) into "SCI Standards Journey" and "SCI in Practice"
- **MERGE:** Stories 10 + 15 (Impact Framework + Carbon Hack)
- **MERGE:** Stories 11 + 12 (Carmen + Amadeus)
- **MERGE:** Story 6 into broader Education cluster
- **DROP:** Story 7 (WDPC) -- zero article evidence
- **REFRAME:** Story 14 (Thoughtworks) into "Grassroots Movement" covering multiple companies
- **ADD:** New stories discovered (see Section 4)

---

## 4. New Stories Surfaced

### 4.1 The Avanade Grassroots Story

**Evidence:** `scaling-green-software-culture-a-grassroots-approach-blossoms-for-avanade.md` (dedicated case study) + `green-software-advocate-series-an-interview-with-chris-lloyd-jones.md` + 23 total potential stories mentioning Avanade

**Narrative hook:** From 20-30 interested people to 3,200 trained and ~1,000 certified across a 60,000-person organisation -- the story of how one person (Chris Lloyd-Jones) built a green software movement inside a major consultancy.

**Strength:** STRONG. This is the best adoption-at-scale story with clear before/after metrics. Better than the Thoughtworks story from the original targets.

### 4.2 NTT DATA: From Japan to Global Leadership

**Evidence:** 20+ potential stories. Dedicated articles: Alexander Kroll (400+ developers, German translations), Toru Shimogaki (founding steering), Yusuke Kobayashi, Gadhu Sundaram (new GSF Chair), Franziska Warncke (Green Software Patterns lead), serverless SCI calculator, Intesa Sanpaolo collaboration, Global Summit Tokyo

**Narrative hook:** NTT DATA's journey from founding steering member to chairing the entire foundation -- including leading Green Software Patterns, chairing the Steering Committee, and building SCI measurement tools for banking clients across Europe and Japan.

**Strength:** STRONG. Multi-geography (Japan, Germany, UK, Italy), leadership progression, concrete tools.

### 4.3 The Abhishek Gupta Memorial / Human Story of Standards

**Evidence:** `honoring-abhishek-gupta.md` (10+ community tributes), `software-carbon-intensity-crafting-a-standard.md`, `beyond-single-dimensional-metrics-for-digital-sustainability.md`

**Narrative hook:** The SCI specification was shaped by one person's tireless consensus-building over 3+ years. When Abhishek Gupta passed away in September 2024, the community's response revealed how human connections underpin technical standards work.

**Strength:** STRONG for emotional impact. Could be woven into the SCI Standards Journey or stand alone as a shorter profile piece.

### 4.4 GovTech Singapore + IMDA: Government Adoption at National Scale

**Evidence:** `creating-a-digital-sustainability-ecosystem-meet-henry-chang-of-govtech-singapore.md`, `energizing-the-ict-sector-meet-dr-ong-chen-hui-of-singapore-s-imda.md`, `looking-back-at-the-gsf-global-summit-2024.md` (Dr. Ong quote)

**Narrative hook:** Singapore became the first government to systematically adopt green software standards -- moving 70% of workloads to cloud, developing a green software code of practice for all public agencies, and building tropical-climate data centre standards.

**Strength:** MEDIUM-STRONG. Two articles with excellent quotes. Government adoption angle is unique and compelling for the membership page.

### 4.5 Real Time Cloud (RTC): Making Cloud Providers Transparent

**Evidence:** 6 articles, ratification story, Adrian Cockcroft leading, UBS/AWS/Microsoft/Google involvement, CSRD compliance angle

**Narrative hook:** Despite being the world's largest purchasers of renewable energy, cloud providers only shared carbon data monthly with months of delay. The RTC standard forces AWS, Azure, and GCP to provide real-time, comparable emissions data for the first time.

**Strength:** MEDIUM. Clear progression, but may work better folded into the tools cluster than as a standalone.

---

## 5. Proposed Final Story List (12 Stories)

**Structural principle:** Every story starts with a specific problem that organisations brought to GSF. The entire arc — building the solution, driving adoption, measuring impact — is ONE story, not split apart. Company journeys (UBS, NTT DATA, Accenture) are not standalone stories; they appear as evidence within the problem-based stories they contributed to.

---

### Story 1: "We can't measure software carbon"

**Problem:** Organisations reported carbon totals annually but had no metric their engineering teams could act on. GHG reporting gave compliance but not insight — CTOs couldn't set actionable targets.

- **Solution built:** The SCI specification — an ISO-certified rate metric (not an aggregate total) that engineers can own and reduce
- **Key companies:** Microsoft, Accenture, WattTime, UBS, CAST, NTT DATA, AVEVA, Intesa Sanpaolo, Texas State University
- **Key people:** Abhishek Gupta (founding co-chair, in memoriam), Navveen Balani (Accenture), Henry Richardson (WattTime), Kin Chiu (UBS), Virginie Corraze (Amadeus)
- **Journey:** Crafting the standard → alpha release → 7+ organisations independently implementing → ISO 21031:2024 certification in under 3 years → Amadeus CTO setting "reduce by 30%" targets across every product
- **Impact/adoption proof:** 0.025 gCO2/API at Accenture, 400kg CO2/yr reduction at CAST, 15.1% CO2 savings at Autostrade, 305kg CO2/1M requests at NTT DATA serverless, enterprise banking deployment at UBS, Texas State academic validation
- **Source articles:** `software-carbon-intensity-crafting-a-standard.md`, `sci-specification-achieves-iso-standard-status.md`, `honoring-abhishek-gupta.md`, `how-accenture-implemented-the-sci-specification-score-to-track-software-emissions.md`, `baselining-software-carbon-emissions-ubs-use-case.md`, `decarbonizing-software-how-cast-applied-the-sci-metric.md`, `calculating-your-carbon-footprint-a-guide-to-measuring-serverless-app-emissions-o.md`, `how-intesa-and-ntt-data-measure-energy-consumption-of-software.md`, `texas-state-university-deems-gsf-sci-an-effective-metric-to-evaluate-the-carbon-i.md`, `building-green-software-through-standards-and-collaboration.md`, `meet-virginie-corraze-associate-director-engineering-quality-amp-sustainability-a.md`
- **Evidence strength:** Strong
- **Key quotes:** Yes (10+)
- **Metrics:** Yes (ISO status, 7+ implementation case studies with numbers)

---

### Story 2: "We can't shift workloads to clean energy"

**Problem:** Organisations knew the grid was cleaner at certain times and places, but had no way to make their software respond to that signal. Workloads ran on dirty power when clean power was available hours later.

- **Solution built:** The Carbon Aware SDK — the first GSF project to graduate
- **Key companies:** Microsoft, Avanade, UBS, NTT DATA, WattTime, Electricity Maps, Energy Web
- **Key people:** Vaughan Knight (Microsoft), Chris Lloyd-Jones (Avanade), Kin Chiu (UBS), Paul McEwen (UBS), Mani Hagh Sefat (Energy Web)
- **Journey:** Concept → SDK development → CarbonHack22 (adoption accelerator, 395 participants) → UBS enterprise deployment on production banking platform → Energy Web's world-first decentralised green computing → graduation as first completed GSF software project → .NET 8 upgrade
- **Impact/adoption proof:** 13-24% carbon reductions measured at CarbonHack22, enterprise-scale deployment at UBS time-shifting financial workloads, first decentralised carbon-aware computation nomination at Energy Web
- **Source articles:** `celebrating-the-graduation-of-the-carbon-aware-sdk.md`, `carbonhack22-a-big-leap-in-carbon-aware-computing.md`, `carbonhack22.md`, `carbon-aware-computing-whitepaper-how-ubs-succeeded-in-measuring-and-reducing-car.md`, `making-decentralized-systems-more-sustainable-meet-mani-hagh-sefat-of-energy-web.md`, `upgrading-to-net-8-inside-the-carbon-aware-sdk-v1-4.md`, `meet-steering-committee-member-of-green-software-foundation-kin-chiu-of-ubs.md`
- **Evidence strength:** Strong
- **Key quotes:** Yes ("The way we design and build our applications has a direct relationship to how much carbon they emit" — Paul McEwen, UBS)
- **Metrics:** Yes (13-24% reductions, graduated status, enterprise deployment)

---

### Story 3: "Measurement is too hard for non-specialists"

**Problem:** Even with the SCI standard, calculating software emissions required deep expertise. Most organisations couldn't do it without hiring specialists. "Everyone is craving measurement" but the tools were too complex.

- **Solution built:** The Impact Framework — a tool that lets anyone calculate software emissions without deep expertise — plus Carbon Hack hackathons to drive adoption and build an ecosystem
- **Key companies:** Accenture, Microsoft, Amadeus, AVEVA, BCG X, Sentry Software, IMDA, NTT DATA
- **Key people:** Joseph Cook (GSF), Navveen Balani (Accenture), Srinivasan Rakhunathan (Microsoft), Eleonore Gueit (Amadeus), Ioannis Kolaxis (Accenture)
- **Journey:** Organisations struggling with measurement complexity → Impact Framework developed → CarbonHack22 proved the concept (395 participants, 13-24% reductions) → framework ratified → CarbonHack24 scaled the ecosystem (500+ participants, 47 submissions, 30 new community-built plugins, $40K prizes)
- **Impact/adoption proof:** 500+ participants at CarbonHack24, 30 plugins extending the framework, ratified status, community-driven ecosystem
- **Source articles:** `carbon-hack-24-expanding-the-ecosystem-of-software-measurement.md`, `carbon-hack-24-redefining-software-measurement-for-sustainability.md`, `carbon-hack-24-where-measurement-meets-innovation-and-impact-knows-no-bounds.md`, `emission-calculations-through-large-language-model.md`
- **Evidence strength:** Strong
- **Key quotes:** Yes ("Everyone is craving measurement" — Eleonore Gueit, Amadeus)
- **Metrics:** Yes (500+ participants, 47 submissions, 30 plugins, $40K prizes)

---

### Story 4: "We need to measure carbon at travel industry scale"

**Problem:** Amadeus connects 1.9 billion travellers annually. They needed SCI measurement across their largest cloud application — but existing tools couldn't handle the scale of 3 billion daily flight searches.

- **Solution built:** Carmen — a carbon measurement engine that implements SCI at massive scale, then donated to GSF as open source
- **Key companies:** Amadeus, IATA
- **Key people:** Virginie Corraze (Amadeus), Florent Morel (Amadeus, Carmen lead), Robin Castellon (Amadeus, Carmen lead), Eleonore Gueit (Amadeus)
- **Journey:** Applied SCI to largest cloud app → discovered measurement was only the beginning → built Carmen internally → CTO set 30% reduction targets per product → donated Carmen to GSF as open source project → IATA collaboration
- **Impact/adoption proof:** SCI applied to largest app serving 1.9B travellers, open source donation, IATA collaboration
- **Source articles:** `meet-virginie-corraze-associate-director-engineering-quality-amp-sustainability-a.md`, `welcoming-carmen-carbon-measurement-engine-as-a-gsf-project.md`, `carbon-hack-24-expanding-the-ecosystem-of-software-measurement.md`
- **Evidence strength:** Medium
- **Key quotes:** Yes (Virginie: "Every engineer within Amadeus to understand sustainability is at the core of everything we do")
- **Metrics:** Limited (1.9B travellers, SCI on largest app, 30% reduction target)

---

### Story 5: "We can't measure AI carbon"

**Problem:** AI workloads were exploding across member organisations, but nobody had a standardised way to measure their carbon footprint. Multi-million dollar infrastructure decisions were being made without understanding relative carbon efficiency.

- **Solution built:** SCI for AI — extending the proven SCI methodology specifically for AI systems
- **Key companies:** Accenture, WattTime, Google, UCL, Siemens, Microsoft, IBM
- **Key people:** Navveen Balani (Accenture), Henry Richardson (WattTime), Sanjay Podder (Accenture), Federica Sarro (UCL)
- **Journey:** Problem identified → workshop with 20 organisations → Green AI Position Paper (13 orgs reaching consensus on Green AI definition) → SCI for AI specification developed → ratified → EU AI Act response (8 people from 7 companies providing coordinated policy input)
- **Impact/adoption proof:** Ratified standard, 20-org workshop, policy input to EU AI Act, framework covering training and inference across architectures
- **Source articles:** `sci-for-ai-workshop-report.md`, `green-ai-position-paper.md`, `sci-ai-specification-ratified-standard-for-measuring-ai-emissions-across-the.md`, `the-eu-ai-act-insights-from-the-green-ai-committee.md`, `can-ai-truly-be-green.md`
- **Evidence strength:** Strong
- **Key quotes:** Yes
- **Metrics:** Yes (training GPT-3 = 502 tonnes CO2, ratification, 20-org workshop)

---

### Story 6: "Our pilots work but nothing scales across the org"

**Problem:** Multiple member organisations — HSBC, UBS, Avanade — had sustainability pilots running in IT, but couldn't scale them across procurement, operations, and business units. They had the SCI to measure, the SDK to optimise, but no framework for organisational transformation.

- **Solution built:** The SOFT Framework (Sustainable Organisational Framework for Technology) — a playbook for embedding green software across every function
- **Key companies:** HSBC, Microsoft, Avanade, BCG X, Cisco, NTT DATA, Siemens, UBS
- **Key people:** Pindy Bhullar (started at HSBC, now ClimateAction.tech), Sean O'Keefe (Microsoft)
- **Journey:** Pindy Bhullar's career pivot from ocean plastics expedition → identified the scaling problem at HSBC → co-chaired SOFT development with Microsoft → 8 companies contributed → ratified → 4 pilot organisations implementing → training material created
- **Impact/adoption proof:** Ratified standard, 4 pilot orgs, training created
- **Source articles:** `celebrating-the-ratification-of-sustainable-organizational-framework-for-technolo.md`, `building-green-software-through-standards-and-collaboration.md`, `green-software-advocate-series-an-interview-with-pindy-bhullar.md`, `cultivating-sustainability-by-design-meet-natalie-pullin-tim-smolcic-of-hsbc.md`
- **Evidence strength:** Medium
- **Key quotes:** Yes
- **Metrics:** Limited (4 pilot orgs — names and outcomes unknown, flagged as gap)

---

### Story 7: "No standard exists for measuring a website's carbon"

**Problem:** Almost everyone uses the web daily, yet no standard existed for measuring a website's carbon intensity. The University of Edinburgh saved 13 tonnes CO2/year just from image optimisation — but had no framework to measure the rest.

- **Solution built:** SCI for Web — extending SCI to web applications, developed with AI-accelerated consensus and W3C collaboration
- **Key companies:** Google, Green Web Foundation, W3C, ClimateAction.tech, Amadeus, HSBC, Microsoft, NTT DATA
- **Key people:** Chris Adams (Green Web Fdn), Asim Hussain (GSF), Daniel Schien (University of Bristol), Florent Morel (Amadeus)
- **Journey:** W3C invited GSF to collaborate → 14 members in AI-assisted consensus workshop → specification design → active development
- **Impact/adoption proof:** W3C collaboration (bridging world's web standards body with green software body), AI-assisted consensus process proven, 13 tonnes CO2/year saved at Edinburgh from images alone
- **Source articles:** `designing-sci-web-what-we-agreed-and-what-comes-next.md`, `the-green-software-foundation-and-world-wide-web-consortium-w3c-collaborate-to-ad.md`, `pioneering-digital-sustainability-in-higher-education-meet-emma-horrell-of-the-un.md`
- **Evidence strength:** Medium
- **Key quotes:** Yes
- **Metrics:** Limited (13 tonnes CO2 at Edinburgh, 14-member workshop)

---

### Story 8: "Our engineers don't know how to build green software"

**Problem:** Organisations had sustainability mandates but their engineering teams had no specialised training. Engineers couldn't distinguish genuine emissions reduction from well-intentioned guesswork.

- **Solution built:** The Green Software Practitioner Course — and the adoption cascade that followed (HCLTech 100K trained, Avanade grassroots movement, first undergraduate course)
- **Key companies:** Goldman Sachs, Microsoft, Accenture, HCLTech, Avanade, Manchester Metropolitan University
- **Key people:** Sarah Hsu (Goldman Sachs), Asim Hussain (GSF), Dr. Michael Bane (Manchester Met), Sunil Aggarwal (HCLTech), Chris Lloyd-Jones (Avanade)
- **Journey:** No curriculum existed → course built with Microsoft, Accenture, Thoughtworks, GitHub → Goldman Sachs's Sarah Hsu championed it → 130K+ completions → HCLTech built 100-engineer CoE and Green Software Engineering Lab → Avanade's Chris Lloyd-Jones grew from 20 curious people to 3,200 trained / ~1,000 certified / 104 GSF contributors at a 60K org → Manchester Met launched first undergraduate course
- **Impact/adoption proof:** 130K+ completions, HCLTech 100K in sustainability training, Avanade 3,200 trained / ~1,000 certified, first undergraduate course, 900 Avanade survey participants
- **Source articles:** `meet-gsf-org-leads-sarah-hsu-of-goldman-sachs.md`, `meet-sunil-aggarwal-hcltech.md`, `scaling-green-software-culture-a-grassroots-approach-blossoms-for-avanade.md`, `green-software-advocate-series-an-interview-with-chris-lloyd-jones.md`, `embedding-green-software-in-the-current-curriculum-meet-dr-michael-bane-and-dr-er.md`, `decarbonize-software-2023-redefining-the-future-of-software.md`
- **Evidence strength:** Strong
- **Key quotes:** Yes ("We stumbled upon sustainability while seeking efficiency" — Chris Lloyd-Jones; green software should be "an integral part of the educational curriculum" — Sarah Hsu)
- **Metrics:** Yes (130K+, 100K, 3,200, ~1,000 certified, first undergrad course)

---

### Story 9: "Engineers know the theory but not what to change in code"

**Problem:** After training, developers asked: "OK, I understand the principles — but what do I actually change in my code?" Measurement and theory were necessary but not sufficient.

- **Solution built:** The Green Software Patterns Catalogue — actionable code-level patterns that make sustainable coding the default
- **Key companies:** NTT DATA, AVEVA, Mastercard, Goldman Sachs, Microsoft, Shell, Accenture, Siemens, Globant
- **Key people:** Franziska Warncke (NTT DATA, co-lead), Liya Mathew (Goldman Sachs, co-lead), Daniel Lazaro (AVEVA), Thomas Lewis (Microsoft)
- **Journey:** Developers completing GSP needed next steps → Patterns catalogue created → 11-company design thinking workshop to evolve it from reference list to integrated tool → "green by default" developer experience goal
- **Impact/adoption proof:** 4% reduction from "Reduce transmitted data" pattern, 11-company workshop, catalogue evolution from list to tool
- **Source articles:** `green-software-patterns-catalog-the-next-chapter.md`, `calculating-your-carbon-footprint-a-guide-to-measuring-serverless-app-emissions-o.md`, `embedding-software-sustainability-into-digital-energy-solutions-meet-herve-guirad.md`
- **Evidence strength:** Medium
- **Key quotes:** Yes ("The developer experience needs to be green by default")
- **Metrics:** Limited (4% reduction from one pattern, 11-company workshop)

---

### Story 10: "We don't know what legislation is coming"

**Problem:** Member organisations were being blindsided by green software regulation. By the time they heard about legislation, consultation periods were over and they had no voice. They needed to know what was coming and when to engage.

- **Solution built:** The Policy Radar — a tool tracking emerging legislation and regulatory trends — plus proactive policy engagement
- **Key companies:** Green Web Foundation, Scope3
- **Key people:** Chris Adams (Green Web Fdn, Policy WG Chair), Aya Saed (Scope3, Policy WG Co-Chair — former US Congressional Counsel)
- **Journey:** Orgs blindsided by regulation → Policy WG formed → Chris Adams (web foundations director) + Aya Saed (former Congressional Counsel) co-chair → Policy Radar built and ratified → proactive engagement with NY Senate (Corporate Climate Accountability Act), EU Green Digital Coalition, GHG Protocol Scope 2 consultation → endorsed AI Environmental Impacts Act
- **Impact/adoption proof:** Policy Radar ratified, specific policy engagements (NY, EU, GHG Protocol), AI Environmental Impacts Act endorsement
- **Source articles:** `celebrating-the-ratification-of-the-policy-radar.md`, `leadership-update-aya-saed-elected-co-chair-of-the-policy-working-group.md`, `mission-statement-update-gsf-s-policy-working-group-defines-its-path-forward.md`, `why-the-gsf-is-participating-in-the-ghg-protocol-scope-2-con.md`, `the-gsf-endorses-the-ai-environmental-impacts-act.md`
- **Evidence strength:** Medium-Strong
- **Key quotes:** Yes ("Knowing which laws are coming and when to engage in the policy making process is half of the battle")
- **Metrics:** Limited (ratified, specific engagements listed)

---

### Story 11: "Standards move too slowly for our regulatory timeline"

**Problem:** Traditional standards development takes years. By the time specifications reach certification, regulations have evolved and technology has shifted. The bottleneck isn't technical complexity — it's coordinating dozens of stakeholders with competing priorities.

- **Solution built:** AI-accelerated consensus — using AI to synthesise perspectives from hundreds of participants in days, not months
- **Key companies:** Multiple (proven at SCI for Web workshop, Green IO Paris)
- **Key people:** Asim Hussain (GSF), Chris Adams (Green Web Fdn), workshop participants
- **Journey:** SCI took 3 years to reach ISO (unprecedented speed, but still slow) → GSF experimented with AI-facilitated workshops → SCI for Web workshop: 14 members, AI-assisted consensus → proven at Green IO Paris 2025 with 800+ practitioners → now applying to all new standards work
- **Impact/adoption proof:** ISO certification in under 3 years for SCI, AI-facilitated consensus proven at scale
- **Source articles:** `designing-sci-web-what-we-agreed-and-what-comes-next.md`, `sci-specification-achieves-iso-standard-status.md`
- **Evidence strength:** Medium
- **Key quotes:** Limited
- **Metrics:** Yes (under 3 years to ISO, 800+ practitioners at Green IO)

---

### Story 12: "The biggest companies in the world were independently solving the same problem"

**Problem:** In 2020, multiple organisations — Microsoft, Accenture, Thoughtworks, GitHub, Goldman Sachs — were independently trying to figure out how to reduce software's environmental impact. They were duplicating effort, building incompatible approaches, and making no progress on industry-wide standards.

- **Solution built:** The Green Software Foundation — a neutral ground where competitors collaborate
- **Key companies:** Microsoft, Accenture, Thoughtworks, GitHub, Goldman Sachs (founders) → now 70+ members including Cisco, Google, NTT DATA, Siemens, UBS (steering)
- **Key people:** Asim Hussain (GSF), Sanjay Podder (Accenture, first Chair), Erica Brescia (GitHub), Gadhu Sundaram (NTT DATA, current Chair)
- **Journey:** Sanjay Podder wrote "How Green is Your Software?" for HBR → discovered Jeff Sandquist at Microsoft working on same problem → 5 companies founded GSF in 2021 → grew to 70+ members → NTT DATA's Gadhu Sundaram elected Chair in 2025, signalling shift from creation to global adoption
- **Impact/adoption proof:** 8 founding → 70+ members, 6 steering members, 17 projects, ISO standard, 130K+ trained practitioners, 10K community members across 19 countries
- **Source articles:** `the-green-software-foundation-how-it-all-began.md`, `meet-a-steering-committee-member-sanjay-podder-of-accenture.md`, `meet-our-steering-committee-github.md`, `meet-a-steering-committee-member-erica-brescia.md`, `new-leadership-appointment-gadhu-sundaram-elected-as-the-gsf-chairperson.md`
- **Evidence strength:** Strong
- **Key quotes:** Yes (Erica Brescia: "Every line of code impacts our planet"; Sanjay: HBR article origin; Gadhu: biodiversity hotspot background)
- **Metrics:** Yes (founding → 70+ members, all cumulative impact stats)

---

## 6. Gaps Report

### 6.1 Stories with No Quotes

| Story | Gap | Action Needed |
|-------|-----|---------------|
| WDPC (dropped) | No articles at all | Interview My Truong (ZutaCore) and Christopher Liljenstolpe (Cisco) if reinstated |

All 18 recommended stories have at least some quotes available.

### 6.2 Stories with Weak Metrics

| Story | Current Metrics | What's Missing |
|-------|----------------|----------------|
| SOFT Framework | "4 pilot orgs" | Names of pilot orgs, specific outcomes from pilots |
| SCI for Web | "13 tonnes CO2 at Edinburgh" | Broader adoption numbers, W3C timeline |
| Policy Radar | Ratified, specific policy engagements | Impact metrics (bills influenced, consultations responded to) |
| Amadeus & Carmen | "1.9B travellers" | SCI scores from their largest app, Carmen measurement results |

### 6.3 Projects with Directory Presence but No/Thin Articles

| Project | Status | Gap |
|---------|--------|-----|
| **WDPC** | Draft | Zero articles. Major gap for hardware standards story |
| **SEE (Software Energy Efficiency)** | Proposal | Zero articles |
| **SCI Self Certification** | Pre-draft | One mention, no dedicated article |
| **Green AI Practitioner Course** | Pre-proposal | One mention in position paper |
| **Awesome Green Software** | Published | 3 articles but 0 flagged as potential stories |

### 6.4 Steering Members with Weak Story Coverage

| Member | Gap |
|--------|-----|
| **Cisco** | Newest steering member (Feb 2025). No dedicated member Q&A article. Christopher Liljenstolpe (Hardware WG Chair, Steering) has zero article appearances. Need interview or Q&A. |
| **Google** | Savannah Goodman Q&A is good but only 1 dedicated article. Jonathan Turnbull (Steering Vice-Chair, Google Org Lead) has zero article appearances. |

### 6.5 Key Directory People with No Article Coverage

| Person | Role | Company | Gap |
|--------|------|---------|-----|
| Christopher Liljenstolpe | Hardware WG Chair + Steering | Cisco | No articles |
| Jonathan Turnbull | Steering Vice-Chair | Google | No articles |
| Ben Logan | Steering + UBS Org Lead | UBS | No articles |
| Joseph Cook | Impact Framework Product Owner | GSF | No articles (only in directory) |
| My Truong | WDPC Lead | ZutaCore | No articles |
| Florent Morel | Carmen Lead | Amadeus | Mentioned in workshop lists only, no quotes |
| Robin Castellon | Carmen Lead | Amadeus | No articles |
| Holly Cummins | DevRel Committee | IBM | No articles |
| Vincent Caldeira | Green AI Committee CTO APJ | IBM | Listed in position paper only |

### 6.6 Areas Requiring Interviews

To complete the recommended 18 stories without significant gaps, the following interviews would strengthen the weakest stories:

1. **Cisco / Christopher Liljenstolpe** -- Hardware Standards WG, WDPC context, data centre expertise
2. **Google / Jonathan Turnbull** -- Steering Vice-Chair perspective, Google's internal green software initiatives
3. **Amadeus / Florent Morel & Robin Castellon** -- Carmen development story, SCI implementation results at scale
4. **UBS / Ben Logan** -- Steering member perspective to complement Kin Chiu and Pindy Bhullar articles
5. **SOFT pilot organisations** -- Names and outcomes from the 4 organisations piloting the framework

### 6.7 Thematic Gaps

- **Financial services cluster:** UBS, Goldman Sachs, HSBC, Mastercard, Intesa Sanpaolo all appear. Could warrant a dedicated "Banking on Green Software" cross-company story -- but this is covered across Stories 2, 13, and 17.
- **Academic cluster:** Texas State, Manchester Met, UCL, Chalmers, IIIT Hyderabad, Mondragon, UPM, Edinburgh all appear. Education is well covered in Story 9, but the academic research angle (measuring AI workloads, developing new metrics) could be its own story in a future expansion.
- **Automotive/industrial:** Mercedes-Benz, Siemens, Schneider Electric all have articles but no dedicated story. Siemens is covered through its steering member role; Mercedes-Benz and Schneider Electric are one-article members.

---

## Summary Decision Table

| # | Problem | Strength | Key Proof |
| - | ------- | -------- | --------- |
| 1 | "We can't measure software carbon" | Strong | ISO standard, 7+ implementations with metrics |
| 2 | "We can't shift workloads to clean energy" | Strong | 13-24% reductions, UBS enterprise deployment |
| 3 | "Measurement is too hard for non-specialists" | Strong | 500+ participants, 30 plugins |
| 4 | "We need to measure at travel industry scale" | Medium | 1.9B travellers, Carmen donated |
| 5 | "We can't measure AI carbon" | Strong | Ratified, 20-org workshop, EU AI Act input |
| 6 | "Our pilots work but nothing scales" | Medium | Ratified, 4 pilot orgs (names unknown) |
| 7 | "No standard for measuring web carbon" | Medium | W3C collaboration, AI-assisted consensus |
| 8 | "Our engineers don't know green software" | Strong | 130K+ completions, 3,200 trained at Avanade |
| 9 | "Engineers know theory but not what to change" | Medium | 11-company workshop, 4% pattern reduction |
| 10 | "We don't know what legislation is coming" | Medium-Strong | Ratified radar, NY/EU/GHG engagements |
| 11 | "Standards move too slowly" | Medium | ISO in under 3 years, 800+ at Green IO |
| 12 | "Companies were independently solving the same problem" | Strong | 8 founding → 70+ members, all impact stats |

**7 of 12 stories rated Strong.** All 12 have sufficient article evidence to proceed to Phase 3 assembly.

### Where company journeys now live

Company-specific evidence is woven into the problem stories, not standalone:

| Company | Appears in Story # | Role |
| ------- | ------------------ | ---- |
| UBS | 1 (SCI implementation), 2 (SDK enterprise deployment), 6 (SOFT pilot) | Adoption proof |
| Accenture | 1 (SCI 0.025 gCO2/API), 5 (SCI for AI lead), 12 (founding) | Builder + adopter |
| NTT DATA | 1 (serverless SCI), 9 (Patterns co-lead), 12 (current Chair) | Multi-geography proof |
| Avanade | 2 (SDK contributor), 8 (grassroots adoption, 3,200 trained) | Adoption at scale |
| Singapore | Evidence in 1 (adoption) or noted as gap for future expansion | Government adoption |

---

## Recommended Phase 3 Agent Groupings

1. **Measurement agent:** Stories 1, 3, 4 ("Can't measure software carbon", "Measurement too hard", "Measure at travel scale")
2. **Infrastructure agent:** Stories 2, 5, 7 ("Can't shift workloads", "Can't measure AI", "No web carbon standard")
3. **Scaling agent:** Stories 6, 8, 9 ("Pilots don't scale", "Engineers don't know", "Theory not practice")
4. **Ecosystem agent:** Stories 10, 11, 12 ("Legislation blindspot", "Standards too slow", "Origin story")

---

*This analysis is ready for review. Please confirm which stories to proceed with, any to add/remove, and whether the proposed Phase 3 groupings work before assembly begins.*
