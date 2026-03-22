---
title: "Data Centres as Flexible Grid Participants"
subtitle: "Software, Storage, and System Design for Great Britain's Demand Connections Reform"
date: 2026-03-10
published: true
status: published
type: consultation-response
summary: >
  GSF response to Ofgem's Demand Connections Reform call for input, examining how software-controlled flexibility in data centres can help address Great Britain's connections crisis.
jurisdiction: GB
framework: Ofgem Demand Connections Reform
version: "1.0"
workingGroup: policy-wg
authors:
  - name: Policy Working Group
    org: Green Software Foundation
sourceUrl: "https://github.com/Green-Software-Foundation/sci-policy-and-legislation-alignment-white-paper-series/blob/main/whitepapers/Data%20Centers%20as%20Flexible%20Grid%20Participants%20-%20Response%20to%20OFGEM%20Call%20for%20Input.md"
tags:
  - policy
---

---

## Abstract

Data centers consumed approximately 415 TWh of electricity globally in 2024, around 1.5% of world electricity consumption, and the International Energy Agency projects this will more than double to 945 TWh by 2030, driven primarily by artificial intelligence workloads ([IEA, 2025](https://www.iea.org/reports/energy-and-ai/executive-summary)). In Great Britain, total contracted offers in the demand connections queue rose from **41 GW** in November 2024 to **125 GW** by June 2025 — nearly three times GB's peak electricity demand of 45 GW. NESO's Call for Information identified approximately **140 data centres (50 GW)** in the queue, making data centre demand the single largest driver of the connections crisis ([Ofgem, 2026, para 2.5–2.7](https://www.ofgem.gov.uk/sites/default/files/2026-02/2026-02-12-Demand-Connections-Call-for-Input.pdf)).

Data centers possess latent flexibility assets — software-controlled workloads, battery storage, thermal inertia, and hardware power management — that can transform them from passive consumers into active grid participants. Software is the key that unlocks these assets. The evidence base is promising: pilot programmes report 10–40% load modulation capability ([Tilton, 2025](https://spectrum.ieee.org/dcflex-data-center-flexibility)), GPU-intensive AI facilities may offer twice the flexibility at half the cost ([Zhou et al., 2024](https://arxiv.org/abs/2410.17435)), and integrated optimisation models suggest 10% operational cost reductions ([Takci, Day & Qadrdan, 2025](https://arxiv.org/abs/2511.07159)). A UK-first demonstration at Nebius's London AI Factory in March 2026, conducted by Emerald AI with National Grid, EPRI, and NVIDIA, showed that high-performance AI infrastructure can operate as a grid-responsive asset without disrupting mission-critical workloads ([NGP/Emerald AI, 2026](https://www.ngpartners.com/stories/emerald-ai-whitepaper)).

However, flexibility is not a silver bullet. Knittel, Senga, and Wang ([2025](https://www.nber.org/papers/w34065)) demonstrate that in regions with carbon-intensive baseload generation, shifting loads to off-peak hours can *increase* emissions even as it reduces costs. Operator willingness remains the fundamental barrier: flexibility revenue is trivial compared to compute revenue, and any service disruption threatens customer relationships worth orders of magnitude more.

We frame our analysis around the sources of flexibility available from the grid's perspective and examine how software systems (workload orchestrators, carbon-aware schedulers, optimisation engines, and grid-signal integrators) enable data centers to deliver these services. We argue that Ofgem's February 2026 **Demand Connections Reform** programme, with its **Curate, Plan, Connect** framework, represents a significant opportunity to move data center flexibility from pilot to practice — but only if the incentive framework is carefully designed.

---

## Table of Contents

1. [Introduction: The Electrification Context](#1-introduction-the-electrification-context)
2. [Data Centers and the GB Grid](#2-data-centers-and-the-gb-grid)
3. [Sources of Flexibility: A Grid-Perspective Framework](#3-sources-of-flexibility-a-grid-perspective-framework)
4. [Software as the Enabling Layer](#4-software-as-the-enabling-layer)
5. [Evidence from Pilots and Deployments](#5-evidence-from-pilots-and-deployments)
6. [The Cost-Emissions Tradeoff](#6-the-cost-emissions-tradeoff)
7. [Climate as Binding Constraint: Path Dependency and Structural Risk](#7-climate-as-binding-constraint-path-dependency-and-structural-risk)
8. [SCI as Competitive Differentiator](#8-sci-as-competitive-differentiator)
9. [Barriers and Challenges](#9-barriers-and-challenges)
10. [Implications for GB Demand Connections Reform](#10-implications-for-gb-demand-connections-reform)
11. [Conclusions](#11-conclusions)
12. [Sources](#12-sources)

---

## 1. Introduction: The Electrification Context

The relationship between data centers and electricity grids is at an inflection point within a broader energy transformation. Ember's analysis argues persuasively that we are entering the "age of electricity," in which the dominant frame should shift from fuel supply to useful energy demand ([Ember, 2025a](https://ember-energy.org/latest-insights/reframing-energy-for-the-age-of-electricity/)). Roughly two-thirds of primary energy inputs in combustion-based systems are wasted as heat. Electric motors achieve over 90% efficiency; heat pumps deliver 300–400%. This physics advantage is reshaping energy systems at scale.

The convergence of renewable generation, electrification of end-uses, and grid flexibility technologies constitutes a single systemic transformation ([Ember, 2025b](https://ember-energy.org/latest-insights/the-electrotech-revolution/)). Solar capacity has doubled every three years. Battery storage has nearly doubled annually since 2020. Clean technology costs fall by around 20% every time deployment doubles — a structural advantage over commodity-based fossil fuels. Renewable electrons accounted for 96% of the change in global electricity generation in early 2025.

This context reframes the data center question. The issue is not simply *whether* data centers can be accommodated but *how much, how fast, and on what terms*. Compute capacity is economically important, but a tenfold increase in national data center capacity within five years — the trajectory implied by current UK connection applications — is not self-evidently compatible with climate targets, grid security, or affordable energy for other consumers. The question of scale deserves scrutiny, not just the question of connection design. A data center fleet connected through flexible, grid-responsive, renewables-aligned infrastructure can be a participant in the electrification transformation. One that grows without constraint, locked into firm, inflexible, fossil-backed connections, risks overwhelming it.

Three forces are driving the specific crisis in GB. First, **scale**: global data center consumption is projected to reach 945 TWh by 2030, equivalent to Japan's total electricity consumption ([IEA, 2025](https://www.iea.org/reports/energy-and-ai/executive-summary)). Second, **grid interconnection is a binding constraint**: new grid assets take 5–10 years to build versus 18–24 months for a data center ([Sidewalk Infrastructure Partners, 2025](https://www.datacenterflexibility.com)). Third, **AI workloads are changing load profiles**: training clusters exhibit bursty, high-intensity demand that creates both challenges and opportunities.

---

## 2. Data Centers and the GB Grid

### 2.1 Scale and the Queue

In GB, total contracted offers in the demand queue rose from **41 GW** to **125 GW** between November 2024 and June 2025, against peak demand of just **45 GW** ([Ofgem, 2026, para 2.5](https://www.ofgem.gov.uk/sites/default/files/2026-02/2026-02-12-Demand-Connections-Call-for-Input.pdf)). NESO identified approximately **140 data centres (50 GW)** in the queue, of which only **71 (~20 GW)** reported achieving Final Investment Decision ([Ofgem, 2026, para 2.7](https://www.ofgem.gov.uk/sites/default/files/2026-02/2026-02-12-Demand-Connections-Call-for-Input.pdf)). A significant number are expected to be non-viable, potentially blocking strategically important projects — including those required for [AI Growth Zones](https://www.gov.uk/government/publications/ai-opportunities-action-plan/ai-opportunities-action-plan).

The UK currently has approximately **2 GW** of operational data center capacity. Even if only the FID projects proceed, the queue implies a roughly **tenfold increase** within five years — a rate of growth that merits careful consideration alongside the UK's climate commitments and grid capacity constraints.

A queue of 125 GW against 45 GW peak demand is not merely congested — it represents contracted interest at nearly three times peak national demand. Even if 70–80% fell away, the residual pipeline would represent an unprecedented step-change. Speculative projects at this scale generate false demand signals, drive premature reinforcement planning, and create pressure to permit fossil-backed generation. Ofgem should resist resolving congestion primarily through speed — particularly where that means gas-backed capacity. A framework that clears the queue fast but locks in 20 years of high-carbon infrastructure is not a good outcome.

### 2.2 The Flexibility Gap

Despite these pressures, most data centers operate as passive, inflexible loads. Crozier and Liska ([2025](https://link.springer.com/article/10.1007/s40518-025-00258-9)) frame this as the central challenge: the potential is theorised but "poorly understood" in practice, and "operators are unwilling" to participate without clear incentives. Yet compared to industrial loads, data centers are already more flexible: their workloads are information processing, which can be rescheduled through software without physical damage.

Ofgem is exploring whether flexible, non-firm, and ramped connection arrangements should be conditions of connection, and NESO's CFI responses show clear developer appetite for phased connections in return for expedited dates ([Ofgem, 2026, para 5.6](https://www.ofgem.gov.uk/sites/default/files/2026-02/2026-02-12-Demand-Connections-Call-for-Input.pdf)). Software-enabled flexibility is the mechanism that makes these arrangements operationally viable.

---

## 3. Sources of Flexibility: A Grid-Perspective Framework

From the grid's perspective, data center flexibility falls into three categories: **Demand Response** (adjusting, reducing, or shifting consumption), **Electrons** (battery storage), and **Molecules** (fuel-based generation).

### 3.1 Demand Response

Rather than building new generation to meet data centre loads, demand response uses computational workload flexibility to balance supply and demand. A 2025 Duke University study estimates that curtailment of only 0.25–1% of annual consumption during critical hours could enable the grid to absorb up to 100 GW of new load without major upgrades.

#### 3.1.1 Temporal Workload Shifting

Not all workloads require immediate execution. By deferring non-urgent work (batch processing, model training, analytics) to periods of low grid stress or high renewable generation, data centers modulate demand profiles. Google's carbon-intelligent computing system has used Virtual Capacity Curves in production since ~2020 ([Radovanovic et al., 2023](https://ieeexplore.ieee.org/document/9770383)). Flexibility windows of 30 minutes to 3 hours are typical ([Takci, Day & Qadrdan, 2025b](https://arxiv.org/abs/2511.07159)).

The deferrable fraction varies enormously and may be shrinking as latency-sensitive AI inference grows:

| Workload Type | Duration | Deferability | Latency Sensitivity | Flexibility Potential |
| :--- | :--- | :--- | :--- | :--- |
| **Model training** | Hours to weeks | High | Low | High: can be paused, checkpointed, resumed |
| **Fine-tuning / RLHF** | Hours to days | Moderate | Low to moderate | Moderate: pipeline dependencies |
| **Batch inference** | Minutes to hours | High | Low | High: results not needed immediately |
| **Real-time inference** | Milliseconds | None | Very high | Very low: latency-critical |
| **Data preprocessing** | Minutes to hours | High | Low | High: fully deferrable |
| **Agentic AI workflows** | Seconds to minutes | Low | Moderate to high | Low: user-interactive |

Flexible and ramped connection arrangements are most viable for facilities with a high proportion of deferrable workloads. Regulators should consider workload mix when assessing applications.

#### 3.1.2 Spatial Workload Migration

Many computations can be performed anywhere with suitable infrastructure. Wan, Fang, and Li ([2025](https://arxiv.org/abs/2511.08759)) find that strategically relocating loads to solar-rich regions can reduce curtailment by up to 61%, though benefits plateau at 20–30% transferability. "Compute peering" arrangements — where operators accept spillover compute from partners during grid stress — could create shared flexible capacity without overbuilding. For GB, spatial flexibility complements NESO's strategic spatial planning and the AI Growth Zones programme ([Ofgem, 2026, para 5.33–5.34](https://www.ofgem.gov.uk/sites/default/files/2026-02/2026-02-12-Demand-Connections-Call-for-Input.pdf)).

#### 3.1.3 Thermal Energy Storage and Hardware Power Management

Thermal storage (ice banks, chilled water tanks) shifts 20–40% of cooling load for 4–8 hours in response to grid signals. Dynamic Voltage and Frequency Scaling (DVFS) enables GPU and CPU power modulation. Zhou et al. ([2024](https://arxiv.org/abs/2410.17435)), using data from 14 HPC data centers, demonstrate that **AI-focused GPU data centers offer greater flexibility at 50% lower cost** compared to general-purpose CPU facilities, and that providing grid flexibility services is financially profitable for them.

#### 3.1.4 Off-Site Demand Response

Off-site approaches extend flexibility beyond the data centre. The Rewiring America "Homegrown Energy" analysis proposes that hyperscalers fund household energy upgrades to create grid capacity faster than building power plants — heat pumps alone could create 30 GW of capacity. This creates *structural* grid capacity through efficiency gains, complementing *dispatchable* on-site demand response.

#### 3.1.5 Integrated Multi-Asset Optimisation

Takci, Day, and Qadrdan ([2025b](https://arxiv.org/abs/2511.07159)) develop an integrated model coordinating workload scheduling, UPS operation, and cooling dynamics, yielding ~10% cost reductions. Their framework reveals an important asymmetry: upward flexibility (load reduction) is dominated by workload deferral, while downward flexibility (load increase) relies on cooling and UPS charging. Data centers are better suited to load-shedding than load-addition services.

### 3.2 Electrons (Battery Storage)

Every enterprise and hyperscale data center contains UPS battery storage that could provide grid services. Key demonstrations include the **Microsoft/Eaton pilot in Dublin** (Fast Frequency Response through EirGrid's DS3 programme, requiring no workload changes) and the **NREL/Verrus Vulcan project** (70 MW grid-interactive data centre with 35 MW BESS dispatch in under 5 seconds, maintaining all customer SLAs).

Lithium-ion BESS costs fell 40% in 2024, reaching ~$125/kWh at utility scale. Emerging iron-air technology promises 100-hour duration below $20/kWh. BESS supports carbon-aware operation by charging during high renewable availability and dispatching during peak demand. Zhang et al. ([2025](https://www.sciencedirect.com/science/article/pii/S0360544225001537)) find economic benefits of $1.6 million (1.29× total investment) from co-optimised battery and cold storage systems.

Counter-arguments — battery degradation, UPS warranty exclusions, operational resistance — are real but eroding. The Vulcan project demonstrated BESS as primary backup, not just UPS bridge.

### 3.3 Molecules (Fuel-Based Generation)

Where backup or peaking capacity is required beyond demand response and batteries, the critical distinction is between **fossil molecules** (diesel at 790–1,270 kg CO₂e/MWh; natural gas 40–57% lower but with lifecycle uncertainty) and **non-fossil molecules**:

- **Renewable diesel/HVO**: drop-in replacement, 50–90% lifecycle CO₂ reductions. Microsoft committed to eliminating petroleum diesel by 2030.
- **Biogas/RNG**: can achieve carbon-negative profiles from landfill methane capture.
- **Green hydrogen fuel cells**: zero operational emissions.

A climate-aligned hierarchy should incentivise these in order: demand response, electrons, non-fossil molecules, with fossil generation as a last resort carrying mandatory transition timelines.

---

## 4. Software as the Enabling Layer

### 4.1 Carbon-Aware Scheduling

Carbon-aware scheduling shifts computation to times and locations with lower grid carbon intensity. Google's system uses Virtual Capacity Curves with day-ahead forecasts ([Radovanovic et al., 2023](https://ieeexplore.ieee.org/document/9770383)). A critical design choice is average versus marginal emission factors. In GB, where the generation mix varies significantly, average-based scheduling could increase consumption when renewables are the average source but gas is the marginal source. **Carbon-aware scheduling is more valuable than price-aware scheduling** — the signal must be carbon intensity, not merely price.

### 4.2 Workload Orchestration Platforms

**Emerald AI Conductor** connects grid signals to workload management, classifying jobs into flexibility tiers (Flex 0–3) allowing 0–50% throughput reduction over 3–6 hours, with 15-minute graceful ramps. In the EPRI DCFlex pilot at Oracle's Arizona facility, it achieved 25% reduction in AI cluster power during peak demand while maintaining performance ([Emerald AI](https://emeraldai.co); [ACEEE, 2025](https://www.aceee.org/blog-post/2025/10/data-center-efficiency-and-load-flexibility-can-reduce-power-grid-strain-and)).

**EPRI DCFlex**, launched October 2024, has expanded from 14 to 45 participants including Google, Meta, Microsoft, NVIDIA, and Oracle ([Tilton, 2025](https://spectrum.ieee.org/dcflex-data-center-flexibility)). Major cloud providers already operate sophisticated schedulers (Google's [Borg](https://research.google/pubs/large-scale-cluster-management-at-google-with-borg/), Kubernetes), but extending these to incorporate grid signals is organisationally challenging: compute teams are measured on utilisation, not carbon.

### 4.3 Grid Signal Integration and Measurement

In GB, relevant signals include the Balancing Mechanism, frequency response products, the Capacity Market, and Demand Flexibility Service. NESO's Demand Expert Group is developing technical code requirements ([Ofgem, 2026, para 5.52–5.53](https://www.ofgem.gov.uk/sites/default/files/2026-02/2026-02-12-Demand-Connections-Call-for-Input.pdf)).

Flexibility that cannot be measured has no market value. The Green Software Foundation's SCI specification ([ISO/IEC 21031:2024](https://www.iso.org/standard/86612.html)) decomposes software emissions as `SCI = ((E × I) + M) / R` — energy consumption, grid carbon intensity, embodied emissions, and a functional unit of work. It mandates location-based accounting and excludes market-based instruments, measuring what a workload *actually causes* on the grid. The SCI for AI specification (ratified December 2025) provides dual Provider/Consumer scoring mapping directly to flexibility potential ([SCI for AI](https://sci-for-ai.greensoftware.foundation/)).

A critical distinction: **software-based demand response does not degrade over time**. Residential thermostat programmes lose ~25% effectiveness per hour, delivering roughly 36% of expected reduction by hour four. Data centre software continuously readjusts to maintain the target throughout, making it a substantially more reliable system resource.

---

## 5. Evidence from Pilots and Deployments

### 5.1 EPRI DCFlex (2024 to Present)

DCFlex conducts field tests at three hubs ([Tilton, 2025](https://spectrum.ieee.org/dcflex-data-center-flexibility)): **Google/Duke Energy** in North Carolina (workload scheduling); **Oracle/NVIDIA** in Arizona (25% AI cluster power reduction sustained for 3 hours via Emerald AI's Conductor, no hardware retrofits required); and **Data4** in Paris (power quality response). Reports cite **10–40% load modulation** across sites, though peer-reviewed documentation remains limited.

### 5.2 The London AI Factory Demonstration (March 2026)

In a UK-first, Emerald AI, National Grid, EPRI, Nebius, and NVIDIA demonstrated at Nebius's London AI Factory that high-performance AI infrastructure can operate as a power-flexible, grid-responsive asset without disrupting mission-critical workloads ([NGP/Emerald AI, 2026](https://www.ngpartners.com/stories/emerald-ai-whitepaper)). Conducted on GB's grid with GB's system operator, this is the most directly relevant demonstration for UK policy.

### 5.3 Critical Assessment

The evidence has significant limitations. Most results come from pilots less than two years old, not sustained commercial operation. Publication bias likely inflates reported capability. Pilot programmes test the most deferrable workloads, so 10–40% modulation likely reflects best-case scenarios. Most demonstrations cover hours or days, not the sustained periods grid operators need ([Crozier & Liska, 2025](https://link.springer.com/article/10.1007/s40518-025-00258-9)). If flexibility commitments are to be conditions of connection, the evidence base must be strengthened.

---

## 6. The Cost-Emissions Tradeoff

The dominant narrative frames flexibility as a win-win: lower costs *and* lower emissions. Several studies support this in high-renewable regions — spatial flexibility reducing curtailment by 61% ([Wan et al., 2025](https://arxiv.org/abs/2511.08759)), flexibility proving profitable for AI data centers ([Zhou et al., 2024](https://arxiv.org/abs/2410.17435)).

Knittel, Senga, and Wang ([2025](https://www.nber.org/papers/w34065)) present the most rigorous challenge: **flexibility consistently reduces costs but the emissions impact depends critically on regional grid composition**. When loads shift to cheap off-peak hours dominated by fossil baseload, emissions may increase. This is directly relevant to GB, where gas remains the dominant flexible fuel. Flexibility strategies must use explicit carbon signals, not just price signals.

Three principles follow:

1. **Flexibility is necessary but not sufficient.** Without grid decarbonisation, flexibility is just cost arbitrage that may increase emissions.
2. **Carbon-aware scheduling is more valuable than price-aware scheduling.**
3. **Time-of-use and location-of-use carbon accounting is essential** for real environmental benefit.

Ofgem is considering "participation in sustainability initiatives" as a readiness criterion ([Ofgem, 2026, para 5.2 table](https://www.ofgem.gov.uk/sites/default/files/2026-02/2026-02-12-Demand-Connections-Call-for-Input.pdf)). Carbon-aware scheduling capability — not mere sustainability pledges — should be the standard.

---

## 7. Climate as Binding Constraint: Path Dependency and Structural Risk

### 7.1 The Path Dependency Problem

Gas-fired generation and backup infrastructure have asset lives of 20–30 years. A data centre connecting today on gas-backed power commits to that infrastructure for at least a decade, during which UK carbon budgets will tighten materially. Assets compliant today may require expensive retrofit or stranding. At the system level, if 20–30 GW of data centre load were gas-supplied, this would create new demand for gas infrastructure with its own lock-in logic — each unit harder to retire when decarbonisation requires it.

### 7.2 Gas Supply: Volatility and Lifecycle Uncertainty

European gas spot prices rose ~50% from recent geopolitical disruption, following the 2021–2023 shocks. Lifecycle emissions vary substantially by source: Norwegian pipeline gas carries low upstream emissions; US shale-derived LNG carries substantially more due to liquefaction, shipping, and methane leakage (methane's 20-year warming potential is ~80× CO₂). A data centre cannot reliably predict the lifecycle emissions of gas it will consume over its operational lifetime.

By contrast, demand flexibility, batteries, and renewables are predominantly capital-cost technologies with minimal, predictable marginal costs — making climate-aligned investment also more economically resilient.

### 7.3 Rate and Composition

We are not arguing against expansion. But a tenfold increase in national data center capacity in five years is not a neutral fact — it has consequences for grid planning, generation mix, and carbon budgets that deserve explicit assessment, not simply accommodation. The concern is with the *rate and composition*. Capacity growth connected via grid-supplied renewables with meaningful flexibility commitments is manageable and desirable. The same growth through gas-backed generation without flexibility represents a serious risk to climate targets and long-run costs.

---

## 8. SCI as Competitive Differentiator

The Software Carbon Intensity specification (ISO/IEC 21031), developed by the Green Software Foundation, defines a rate-based carbon score per unit of useful work. It rewards time-shifting, geographic shifting, and efficiency improvements, and is being incorporated into enterprise procurement, supply chain reporting, and regulatory disclosure internationally. Microsoft, Google, Accenture, and others already require SCI-aligned reporting from their supply chains.

The UK has structural advantages for low-SCI compute: a relatively clean grid, ambitious renewables targets, mature financial and legal systems. A data centre demonstrating grid-connected renewable trajectory, real-time carbon-aware flexibility, and non-fossil backup is positioned to offer genuinely low-SCI compute — an increasingly valuable proposition as enterprise buyers factor carbon intensity into procurement. A fossil-gas-dependent data centre, by contrast, cannot offer this certainty, creating incentives for customers to locate workloads elsewhere.

Connection arrangements should be assessed not only for queue clearance and system security, but for their effect on the UK's ability to compete for high-value, low-carbon digital investment. The UK has an opportunity to be the first major jurisdiction integrating internationally recognised software carbon standards into connections policy.

---

## 9. Barriers and Challenges

### 9.1 Operator Willingness

**Operators are largely unwilling to provide grid flexibility** ([Crozier & Liska, 2025](https://link.springer.com/article/10.1007/s40518-025-00258-9)). Flexibility revenue is trivial compared to compute revenue. Individual decision-makers face asymmetric risk: successful flexibility generates modest outcomes; a service disruption is career-threatening. Voluntary approaches may be insufficient — but regulatory requirements alone will not create a functioning market without allowing operators to capture value from their flexibility.

### 9.2 Regulatory and Market Barriers

Key GB barriers include: uncertainty on whether demand projects can connect at high voltages under the Electricity Act 1989 ([Ofgem, 2026, para 5.42–5.44](https://www.ofgem.gov.uk/sites/default/files/2026-02/2026-02-12-Demand-Connections-Call-for-Input.pdf)); technical codes (SQSS, Grid Code) designed for centralised generation and passive demand, with new requirements still in development ([Ofgem, 2026, para 5.52–5.53](https://www.ofgem.gov.uk/sites/default/files/2026-02/2026-02-12-Demand-Connections-Call-for-Input.pdf)); and firm connection terms with non-firm and ramped frameworks not yet developed. The deferrable workload fraction may be shrinking as real-time inference grows, UPS dual-use remains largely unvalidated, and there is no standardised flexibility metric comparable to PUE.

### 9.3 Social Licence

Data centres share grid infrastructure with residential and commercial consumers. A flexibility programme capturing financial benefit from high-price load reduction without corresponding benefit to local users during genuine constraint does not have a sound social licence. A programme responding to genuine system stress — including local distribution constraints — with equitably shared financial benefits represents a genuine social good and is more likely to sustain planning consent. The Connect pillar should include local constraint management as an eligible flexibility service, with revenue sharing designed for community benefit.

---

## 10. Implications for GB Demand Connections Reform

Ofgem's **Curate, Plan, Connect** framework ([Ofgem, 2026, para 4.1](https://www.ofgem.gov.uk/sites/default/files/2026-02/2026-02-12-Demand-Connections-Call-for-Input.pdf)) provides natural integration points for data center flexibility.

### 10.1 Curate: Flexibility as Evidence of Viability

**Demonstrated software flexibility capability** should be a readiness indicator ([Ofgem, 2026, para 5.26–5.29](https://www.ofgem.gov.uk/sites/default/files/2026-02/2026-02-12-Demand-Connections-Call-for-Input.pdf)). Speculative applications are unlikely to have invested in orchestration, grid signal integration, or M&V systems. Specific criteria should include:

- **A quantified demand flexibility commitment**: 15% load reduction within 15 minutes, sustained for at least 2 hours, as a reasonable initial threshold.
- **An SCI roadmap**: baseline and improvement trajectory for carbon intensity per unit of compute.
- **A backup power fuel declaration**: fossil-reliant projects disclosing transition plans — HVO/RNG within five years, zero-fossil-backup within ten.

Projects demonstrating flexibility and accepting non-firm or ramped connections could qualify for differentiated financial terms, reflecting lower reinforcement costs ([Ofgem, 2026, para 5.15–5.22](https://www.ofgem.gov.uk/sites/default/files/2026-02/2026-02-12-Demand-Connections-Call-for-Input.pdf)).

### 10.2 Plan: Flexibility and Strategic Planning

Software flexibility supports the Plan pillar ([Ofgem, 2026, para 5.30–5.32](https://www.ofgem.gov.uk/sites/default/files/2026-02/2026-02-12-Demand-Connections-Call-for-Input.pdf)) in three ways: **spatial planning** (workload migration complementing grid capacity); **sequencing** (software managing workloads within ramped power envelopes); and **AI Growth Zones** (flexibility as a condition of designation). Strategic prioritisation should include climate performance and SCI capability alongside economic contribution, stress-tested against the Sixth Carbon Budget pathway.

### 10.3 Connect: Flexibility Enabling New Arrangements

**Non-firm connections**: software orchestration defers or migrates workloads within curtailed envelopes, enabling earlier connection dates. **Ramped connections**: software manages scheduling within time-varying power budgets. **Consumer-led flexibility**: Ofgem is considering whether flexibility should be a condition of connection ([Ofgem, 2026, para 5.59](https://www.ofgem.gov.uk/sites/default/files/2026-02/2026-02-12-Demand-Connections-Call-for-Input.pdf)).

**Graduated incentives**: greater demonstrated flexibility should receive materially better terms. **Revenue sharing**: if data centres commit to flexibility at scale, NESO's reinforcement requirements could be materially lower — a public benefit ultimately reducing costs for all consumers. Ofgem should explore mechanisms (Balancing Mechanism access, capacity market rights, constraint management payments) allowing data centres to capture a share of savings. **Compute peering and geographic load shifting** should be recognised as eligible flexibility mechanisms.

### 10.4 A Climate-Aligned Hierarchy

1. **First: Software-based demand response** — fastest, lowest-cost, lowest-emission, most reliable over multi-hour events.
2. **Second: Electrons (battery storage)** — zero operational emissions, rapidly improving economics.
3. **Third: Non-fossil molecules** — HVO, RNG, green hydrogen as transitional backup.
4. **Last resort: Fossil molecules** — with binding Sixth Carbon Budget milestones, lifecycle emissions reporting, and non-fossil substitution pathways.

### 10.5 Measurement and Verification

We recommend: **standardised flexibility metrics** (magnitude, duration, reliability, response time); **M&V protocols** for flexible connections using the SCI framework; **transparency requirements** for flexibility disclosure in readiness assessments; and **SCI adoption** ([ISO/IEC 21031:2024](https://www.iso.org/standard/86612.html)) to ensure flexibility delivers genuine emissions reductions.

---

## 11. Conclusions

Software is the key enabler of data center grid flexibility, but it is not a silver bullet.

**The capability is real.** Workload shifting, geographic migration, UPS management, cooling adjustment, and hardware power scaling — coordinated by software platforms into measurable grid services — can transform data centers from passive loads into active grid participants. Evidence from pilots is encouraging: 10–40% load modulation, 25% peak demand reduction sustained for hours, 10% cost savings from integrated optimisation, 2× greater flexibility from GPU facilities, and now a UK-first demonstration at the London AI Factory showing high-performance AI infrastructure operating as a grid-responsive asset.

**But the limitations are equally real.** The evidence base is early-stage. The cost-emissions tradeoff demands carbon-aware, not merely price-aware, scheduling. Operator incentives remain the largest barrier. The deferrable workload fraction may be smaller than optimistic estimates and is shrinking as real-time inference grows. Flexibility cannot compensate for unconstrained growth: a tenfold expansion of capacity, even if individually flexible, changes the system-level equation. And flexibility without grid decarbonisation is just cost arbitrage that may increase emissions.

**The structural context matters as much as the technology.** A demand queue of 125 GW against 45 GW peak demand, if resolved through fast gas-backed connections, would create decades of fossil-dependent infrastructure incompatible with the UK's climate obligations and increasingly uncompetitive in a market moving toward SCI-based procurement. The choice is not between expansion and no expansion, but between expansion that is strategically sequenced, climate-consistent, and designed for long-run competitive advantage, and expansion driven by queue pressure and resolved through the path of least resistance.

**Ofgem's Demand Connections Reform represents a significant opportunity.** The Curate, Plan, Connect framework provides the right integration points:

- **Curate**: Flexibility capability as evidence of project viability, with quantified demand flexibility commitments, SCI roadmaps, and backup fuel declarations separating genuine projects from speculative queue-blocking applications.
- **Plan**: Spatial workload migration and ramped profiles integrated into strategic planning for AI Growth Zones, with climate performance alongside economic contribution in prioritisation criteria.
- **Connect**: Non-firm, ramped, and flexible arrangements with graduated incentives linked to demonstrated capability, revenue sharing for verified flexibility, and a climate-aligned hierarchy from demand response through electrons to molecules.

The Planning and Infrastructure Act 2025 gives Ofgem powers to implement these reforms at pace ([Ofgem, 2026, para 4.16–4.17](https://www.ofgem.gov.uk/sites/default/files/2026-02/2026-02-12-Demand-Connections-Call-for-Input.pdf)). The question is whether flexibility requirements will be designed with sufficient technical sophistication — rewarding genuine, carbon-aware, verifiable capability — or default to blunt instruments that ignore the heterogeneity of data centre workloads, the realities of the grid, and the UK's opportunity to lead in low-carbon digital infrastructure.

The 125 GW queue against 45 GW peak demand makes this urgent. Software-enabled flexibility is not the complete answer, but it is a necessary part of any solution that connects data centres at scale while maintaining a secure, reliable, affordable, and decarbonising electricity system for all consumers. The software exists. The evidence is building. The UK needs the regulatory framework to match.

---

## 12. Sources

### Peer-Reviewed Papers

- Cioara, T., Anghel, I., Salomie, I., Antal, M., Pop, C., Bertoncini, M., Arnone, D. & Pop, F. (2019). "Exploiting data centres energy flexibility in smart cities: Business scenarios." *Information Sciences*, 476, 392–412. [Link](https://www.sciencedirect.com/science/article/abs/pii/S0020025518305243)

- Crozier, C. & Liska, R. (2025). "The Potential of Data Center Energy Demand To Provide Grid Flexibility." *Current Sustainable/Renewable Energy Reports*, 12, 12. [Link](https://link.springer.com/article/10.1007/s40518-025-00258-9)

- Radovanovic, A. et al. (2023). "Carbon-Aware Computing for Datacenters." *IEEE Transactions on Power Systems*, 38(2), 1270–1280. [Link](https://ieeexplore.ieee.org/document/9770383)

- Takci, M.T., Qadrdan, M., Summers, J. & Gustafsson, J. (2025a). "Data centres as a source of flexibility for power systems." *Energy Reports*, 13, 3661–3671. [Link](https://www.sciencedirect.com/science/article/pii/S2352484725001623)

- Zhang, Y., Tang, H. & Li, H. (2025). "Unlocking the flexibilities of data centers for smart grid services." *Energy*, 316, 134511. [Link](https://www.sciencedirect.com/science/article/pii/S0360544225001537)

### Preprints and Working Papers

- Knittel, C.R., Senga, J.R.L. & Wang, S. (2025). "Flexible Data Centers and the Grid: Lower Costs, Higher Emissions?" NBER Working Paper 34065. [Link](https://www.nber.org/papers/w34065)

- Ren, P., Sun, W., Wang, Y. & Harrison, G. (2025). "Grid Frequency Stability Support Potential of Data Center." arXiv:2510.01050. [Link](https://arxiv.org/abs/2510.01050)

- Takci, M.T., Day, J. & Qadrdan, M. (2025b). "Characterisation and Quantification of Data Centre Flexibility for Power System Support." arXiv:2511.07159. [Link](https://arxiv.org/abs/2511.07159)

- Wan, H., Fang, L. & Li, X. (2025). "Grid Operational Benefit Analysis of Data Center Spatial Flexibility." arXiv:2511.08759. [Link](https://arxiv.org/abs/2511.08759)

- Zhou, Y., Paredes, A., Essayeh, C. & Morstyn, T. (2024). "AI-focused HPC Data Centers Can Provide More Power Grid Flexibility and at Lower Cost." arXiv:2410.17435. [Link](https://arxiv.org/abs/2410.17435)

### Institutional and Industry Reports

- ACEEE (2025). "Opportunities to Use Energy Efficiency and Demand Flexibility to Reduce Data Center Energy Use and Peak Demand." [Link](https://www.aceee.org/white-paper/2025/10/opportunities-use-energy-efficiency-and-demand-flexibility-reduce-data-center)

- Eaton (2021). "Grid-interactive data centers: enabling decarbonization and system stability." White paper with Microsoft. [Link](https://www.eaton.com/gb/en-gb/markets/data-centers/transform-your-power/energy-aware/eaton-microsoft-grid-interactive-data-center-whitepaper.html)

- Ember (2025a). "Reframing Energy for the Age of Electricity." [Link](https://ember-energy.org/latest-insights/reframing-energy-for-the-age-of-electricity/)

- Ember (2025b). "The Electrotech Revolution." [Link](https://ember-energy.org/latest-insights/the-electrotech-revolution/)

- EPRI (2024). "DCFlex: Data Center Flexible Load Initiative." [Link](https://msites.epri.com/dcflex)

- IEA (2025). "Energy and AI." [Link](https://www.iea.org/reports/energy-and-ai/executive-summary)

- NGP/Emerald AI (2026). "Power Flexible AI Factories." White paper. [Link](https://www.ngpartners.com/stories/emerald-ai-whitepaper)

- Norris et al. (2025). "Rethinking load growth: Assessing the potential for integration of large flexible loads in US power systems." Duke University.

- Sidewalk Infrastructure Partners (2025). "Data Center Flexibility." [Link](https://www.datacenterflexibility.com)

- Vaidhynathan et al. (2025). "Vulcan Test Platform: Demonstrating the Data Center as a Flexible Grid Asset." NREL/TP-2C00-94844.

- Wyent, Verma & Kanj (2025). "Homegrown Energy: How household upgrades can meet 100 percent of data center demand growth." Rewiring America.

### Industry Sources

- Emerald AI. "Conductor: Flexibility Management Platform." [Link](https://emeraldai.co)

- Tilton, J. (2025). "Big Tech Tests Data Center Flexibility for Local Power Grids." *IEEE Spectrum*, 12 June 2025. [Link](https://spectrum.ieee.org/dcflex-data-center-flexibility)

### Standards

- ISO/IEC 21031:2024. "Information technology: Software carbon intensity (SCI) specification." [Link](https://www.iso.org/standard/86612.html)

- Green Software Foundation. SCI Specification v1.1.0. [Link](https://sci.greensoftware.foundation/)

- Green Software Foundation. SCI for AI Specification (ratified December 2025). [Link](https://sci-for-ai.greensoftware.foundation/)

### GB Regulatory Sources

- Ofgem (2026). "Demand Connections Reform: Call for Input." 13 February 2026. [Link](https://www.ofgem.gov.uk/sites/default/files/2026-02/2026-02-12-Demand-Connections-Call-for-Input.pdf)

- Ofgem (2025). "Guidance on Demand Connection Applications." 6 November 2025.

- [Planning and Infrastructure Act 2025](https://www.legislation.gov.uk/ukpga/2025/38/contents).

- [Electricity Act 1989](https://www.legislation.gov.uk/ukpga/1989/29/contents).

---

**Document Version**: 1.0 **Last Updated**: 2026-03
