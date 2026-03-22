---
title: "Software Carbon Intensity for AI and EU AI Act Environmental Compliance"
subtitle: "A Framework for Measuring and Reducing AI's Climate Impact"
date: 2026-02-15
published: true
status: published
type: whitepaper
summary: >
  How SCI for AI provides a comprehensive methodology for measuring and reducing AI's climate impact, exceeding current EU AI Act environmental documentation requirements.
jurisdiction: EU
framework: EU AI Act
version: "1.0"
workingGroup: software-wg
authors:
  - name: Software Standards Working Group
    org: Green Software Foundation
sourceUrl: "https://github.com/Green-Software-Foundation/sci-policy-and-legislation-alignment-white-paper-series/blob/main/whitepapers/SCI%20and%20the%20EU%20AI%20Act.md"
tags:
  - sci
  - sci-ai
  - policy
---

## Table of Contents

1. [The EU AI Act: Environmental Provisions](#1-the-eu-ai-act-environmental-provisions)
2. [Software Carbon Intensity for AI (SCI for AI)](#2-software-carbon-intensity-for-ai-sci-for-ai)
3. [Mapping SCI for AI to EU AI Act Compliance](#3-mapping-sci-for-ai-to-eu-ai-act-compliance)
4. [Implementation Recommendations](#4-implementation-recommendations)
5. [Conclusion](#5-conclusion)

---

## Executive Summary

The European Union's Artificial Intelligence Act (Regulation 2024/1689), which entered into force on August 1, 2024, establishes the world's first comprehensive regulatory framework for artificial intelligence. Among its provisions are requirements for environmental documentation, particularly for General-Purpose AI (GPAI) models, but these requirements fall short of what's needed to address AI's rapidly growing environmental footprint.

The EU AI Act requires GPAI providers to document energy consumption but does not mandate measurement of actual carbon emissions, ignores embodied emissions from hardware manufacturing, restricts disclosure to regulatory authorities rather than the public, and provides no standardized methodology for measurement or comparison. Most environmental provisions rely on voluntary codes of conduct and future harmonised standards that may not materialize until 2028 or later.

**Software Carbon Intensity for AI (SCI for AI)** offers a more comprehensive solution. Built on the ISO/IEC 21031:2024 standard, SCI for AI provides a methodology that converts energy to carbon emissions using location-specific grid intensity factors, includes hardware lifecycle (embodied) emissions, defines standardized functional units enabling meaningful comparison across AI systems, and excludes carbon offsets. Only genuine emission reductions improve scores.

Organizations that adopt SCI for AI today will not only exceed current EU AI Act requirements but will be prepared for the more stringent standards the Commission is mandated to develop. For AI providers subject to Annex XI documentation requirements, SCI for AI provides the measurement methodology the regulation lacks. For deployers developing voluntary codes of conduct under Article 95, SCI for AI offers the "clear objectives and key performance indicators" the Act demands.

**The recommendation**: organizations seeking to demonstrate sustainability leadership should consider adopting SCI for AI, while recognizing that implementation requires meaningful investment and that future EU harmonised standards may take different approaches.

---

## 1\. The EU AI Act: Environmental Provisions

### 1.1 Overview and Timeline

The EU AI Act (Regulation 2024/1689) represents the first attempt by any major jurisdiction to regulate AI systems comprehensively. The regulation entered into force on August 1, 2024, with a phased implementation schedule:

| Date | Milestone |
| :---- | :---- |
| August 1, 2024 | Regulation enters into force |
| August 2, 2025 | GPAI model obligations begin |
| August 2, 2027 | Compliance deadline for models pre-dating August 2025 |
| August 2, 2028 | Commission progress report on harmonised standards due |

This phased approach creates an important window: organizations can establish robust environmental measurement practices now, positioning themselves ahead of evolving requirements.

### 1.2 Core Environmental Requirements

#### Recital 27 — Foundational Principle

The Act's preamble establishes environmental sustainability as a guiding principle:

"AI systems should be developed and used in a sustainable and environmentally friendly manner."

While this language sets the tone, recitals are interpretive guidance rather than binding requirements. The operational provisions that follow are considerably weaker.

**Source**: [Recital 27](https://artificialintelligenceact.eu/recital/27/)

#### Annex XI Section 1(e) — GPAI Energy Documentation

This provision creates the most concrete environmental obligation in the Act. GPAI model providers must document:

"Known or estimated energy consumption of the model."

Key characteristics of this requirement:

- **Estimation permitted**: Providers may estimate consumption based on computational resources if actual data is unavailable  
- **On-demand disclosure**: The AI Office can demand documentation without prior notice  
- **Significant penalties**: Non-compliance risks fines up to €15 million or 3% of global annual turnover  
- **Grace period**: Models launched before August 2, 2025 have until August 2, 2027 to comply

**Source**: [Annex XI](https://artificialintelligenceact.eu/annex/11/)

#### Article 40 — Harmonised Standards

Article 40 mandates the Commission to request development of harmonised standards addressing:

"Improving resource performance, including energy efficiency, and reducing the consumption of energy and of other resources of AI systems throughout their entire lifecycle."

Critical observations:

- Standards must cover the **full lifecycle** of AI systems and GPAI models  
- The Commission must publish a **progress report by August 2, 2028**  
- The report may include **legally binding corrective measures** if standards are insufficient  
- Until standards exist, there is **no specified measurement methodology**

**Source**: [Article 40](https://artificialintelligenceact.eu/article/40/)

#### Article 95 — Voluntary Codes of Conduct

The Act encourages (but does not mandate) development of codes addressing:

"Assessing and minimizing the impact of AI systems on environmental sustainability, including as regards energy-efficient programming and techniques for the efficient design, training and use of AI."

Codes should include:

- Clear objectives and key performance indicators  
- Mechanisms for measuring achievement of objectives  
- Provisions for stakeholder involvement

The voluntary nature of these codes significantly limits their effectiveness.

**Source**: [Article 95](https://artificialintelligenceact.eu/article/95/)

#### Systemic Risk Classification

GPAI models may be classified as presenting "systemic risk" based primarily on **cumulative compute used for training** (measured in floating point operations, or FLOPs), with a threshold of 10^25 FLOPs. While high compute correlates with high energy consumption, the classification criterion is compute, not energy directly. Such classification triggers:

- Additional evaluation requirements  
- Enhanced documentation obligations  
- Mandatory security assessments  
- More rigorous oversight

The Commission may also designate models as systemic risk based on other factors including "high impact capabilities," but energy consumption per se is not a standalone criterion.

### 1.3 GPAI Code of Practice

The GPAI Code of Practice implements Annex XI requirements through a Model Documentation Form requiring:

- Energy consumption during training  
- Energy consumption during inference (where applicable)

However, the Code includes a significant exemption: providers may claim exemption from energy disclosure if they lack "critical information from compute or hardware provider." This loophole potentially undermines the disclosure regime's effectiveness.

**Source**: [GPAI Code of Practice Overview](https://artificialintelligenceact.eu/code-of-practice-overview/)

### 1.4 Limitations and Gaps

Analysis reveals significant shortcomings in the EU AI Act's environmental provisions:

| Gap | Implication |
| :---- | :---- |
| **Energy focus, not carbon** | kWh consumed in e.g. France (clean grid) treated equivalently to kWh in e.g. Poland (coal-heavy) |
| **No embodied emissions** | Hardware manufacturing, transport, and disposal emissions entirely omitted |
| **Restricted disclosure** | Documentation available only to authorities (Articles 21(3), 53(7), 78(1))—no public transparency |
| **No continuous monitoring** | One-time documentation; no requirement to track operational emissions over time |
| **No standardized methodology** | Providers can estimate using any reasonable approach—no comparability |
| **Open-source exemption** | Open-source GPAI models have reduced (but not eliminated) obligations under Article 53(2) unless presenting systemic risk |
| **Voluntary standards** | Article 40 standards and Article 95 codes are not binding requirements |

**Sources**:

- [White & Case Analysis](https://www.whitecase.com/insight-alert/energy-efficiency-requirements-under-eu-ai-act)

---

## 2\. Software Carbon Intensity for AI (SCI for AI)

### 2.1 Foundation: ISO/IEC 21031:2024

The Software Carbon Intensity (SCI) specification originated with the Green Software Foundation and achieved international recognition through ISO standardization in March 2024\.

**ISO/IEC 21031:2024** — *Information technology — Software Carbon Intensity (SCI) specification*

This standard provides:

"A methodology for calculating the rate of carbon emissions for a software system; that is, its SCI score."

The ISO ratification provides regulatory credibility, aligning SCI with the EU's preference for international standards in harmonisation processes.

**Source**: [ISO/IEC 21031:2024](https://www.iso.org/standard/86612.html)

### 2.2 The SCI Formula

The core SCI equation expresses carbon emissions as a rate:

$$SCI = \frac{(E \times I) + M}{R} = \frac{O + M}{R}$$

Where $O = E \times I$ represents operational emissions.

#### Component Breakdown

| Component | Description | Unit | Definition |
| :---- | :---- | :---- | :---- |
| **E** | Energy consumed | kWh | Energy consumed by the software system for a functional unit of work, including all reserved/provisioned hardware |
| **I** | Carbon intensity | gCO2eq/kWh | Region-specific carbon emissions per kWh of grid electricity   |
| **M** | Embodied emissions | gCO2eq | Emissions from hardware manufacturing, transport, and end-of-life |
| **O** | Operational emissions | gCO2eq | Calculated as E × I |
| **R** | Functional unit | varies | The denominator expressing emissions as a rate |

Embodied Emissions Calculation  
Embodied emissions (M) are calculated as:

$$M = TE \times \frac{TiR}{EL} \times \frac{RR}{ToR}$$

Where:

| Variable | Description |
| :---- | :---- |
| **TE** | Total embodied emissions of hardware |
| **TiR** | Time reserved (duration of use) |
| **EL** | Expected lifespan of hardware |
| **RR** | Resources reserved |
| **ToR** | Total resources available |

This formula allocates a proportional share of hardware lifecycle emissions based on actual usage.

**Source**: [SCI Specification](https://sci.greensoftware.foundation/)

### 2.3 SCI for AI Extension

SCI for AI extends the base specification to address AI-specific measurement challenges through two persona-based boundaries.

#### Consumer Boundary

The **Consumer boundary** encompasses the Operation and Monitoring lifecycle stage—what deployers and end-users experience:

- API and inference infrastructure  
- Orchestration and scaling systems  
- Observability and monitoring tools  
- Data and feature management  
- Storage and artifacts  
- UX and client-side components  
- Model tool and service connectors

#### Provider Boundary

The **Provider boundary** covers Inception, Design, Development, Deployment, and Retirement stages:

- Project scoping and planning systems  
- Data collection, preprocessing, and cleaning  
- Synthetic data generation  
- Model development and training infrastructure  
- Feature engineering and distributed training  
- Model evaluation and benchmarking  
- Optimization and efficiency analysis  
- System integration and testing

**Source**: [SCI for AI Specification](https://github.com/Green-Software-Foundation/sci-ai/blob/main/SPEC.md)

### 2.4 AI-Specific Functional Units

SCI for AI defines standardized functional units enabling meaningful comparison across different AI system types.

#### Consumer Functional Units

| AI System Type | Functional Unit | Example |
| :---- | :---- | :---- |
| Large Language Models | per token | gCO2eq/token processed |
| Image Generation | per image | gCO2eq/image generated |
| Video Generation | per second | gCO2eq/second of video |
| Agentic AI | per workflow execution | gCO2eq/workflow |
| OCR/Document Analysis | per page processed | gCO2eq/page |
| Classical ML Classification | per inference | gCO2eq/inference |
| Machine Translation | per character translated | gCO2eq/character |
| Speech Recognition | per second of audio | gCO2eq/audio-second |

#### Provider Functional Units

Providers select from three metrics emphasizing different efficiency dimensions:

| Functional Unit | Optimization Focus |
| :---- | :---- |
| **per FLOP** | Algorithmic and hardware efficiency |
| **per training token** | Data quality and curation efficiency |
| **per parameter** | Model architecture compactness |

Providers should distinguish between:

- **Gross values**: Total quantities (e.g., total parameters)  
- **Effective values**: Accounting for actual usage (e.g., active parameters in sparse models)

### 2.5 Key Differentiators from EU AI Act Requirements

| Dimension | EU AI Act | SCI for AI |
| :---- | :---- | :---- |
| **Metric** | Energy (kWh) | Carbon intensity (gCO2eq/R) |
| **Embodied emissions** | Not addressed | Included via M component |
| **Grid carbon intensity** | Not considered | Location-specific I factor |
| **Functional units** | Not specified | Standardized per AI type |
| **Offsets/credits** | Not addressed | Explicitly excluded |
| **Lifecycle coverage** | Primarily training; inference mentioned in Code of Practice | Full lifecycle (inception to retirement) |
| **Transparency** | Authorities only | Encourages public disclosure |
| **Methodology** | Provider's choice | ISO-standardized |

The key distinction: SCI for AI measures carbon intensity directly, while the EU AI Act uses energy as a proxy. Whether carbon or energy is the "right" metric depends on one's goals—carbon captures climate impact more precisely, while energy is simpler to measure and compare across jurisdictions.

---

## 3\. Mapping SCI for AI to EU AI Act Compliance

### 3.1 Direct Compliance Support

SCI for AI provides methodological support for EU AI Act environmental requirements, though the alignment is not perfect:

| EU AI Act Requirement | SCI for AI Capability | Fit Assessment |
| :---- | :---- | :---- |
| **Annex XI energy documentation** | E component captures energy; provides a structured approach to measurement | Strong |
| **Article 40 resource performance standards** | SCI methodology could inform harmonised standards; ISO foundation provides credibility | Speculative |
| **Article 95 voluntary codes KPIs** | Functional units enable normalized metrics that could serve as KPIs | Partial |
| **Systemic risk assessment** | Enables comparative benchmarking across models | Indirect—systemic risk is based on compute (FLOPs), not SCI scores |

### 3.2 Beyond Compliance: Added Value

Organizations adopting SCI for AI gain capabilities beyond current requirements:

#### 1\. Energy-to-Carbon Conversion

The EU AI Act requires energy reporting but doesn't address one important reason energy matters: climate impact. The same training run produces vastly different emissions depending on grid carbon intensity:

| Location | Grid Intensity (gCO2eq/kWh) | 1000 MWh Training Impact |
| :---- | :---- | :---- |
| Sweden | \~20 | 20 tonnes CO2eq |
| Germany | \~350 | 350 tonnes CO2eq |
| Poland | \~700 | 700 tonnes CO2eq |

SCI for AI's I component captures this crucial distinction.

#### 2\. Embodied Emissions

Hardware lifecycle emissions can be substantial. Estimates of embodied emissions as a share of total data center lifecycle emissions vary widely — from around 10% to over 60% depending on hardware type, utilisation patterns, operational lifespan, and accounting methodology — and are projected to grow as grids decarbonise (Aslan et al., 2025; Meta, 2024).

For AI-specific hardware like GPUs with shorter replacement cycles, the proportion may be higher. The EU AI Act does not address these emissions; SCI for AI's M component captures them.

**Caveat**: Obtaining accurate embodied emissions data remains very challenging. Many hardware manufacturers do not publish lifecycle assessment (LCA) data, and estimates vary widely.

#### 3\. Public Transparency

EU AI Act documentation is restricted to regulatory authorities. SCI for AI encourages public disclosure, enabling:

- Customer-informed procurement decisions  
- Competitive pressure toward efficiency  
- Stakeholder accountability  
- Research community access

#### 4\. Continuous Monitoring

The EU AI Act implies one-time documentation. SCI for AI methodology supports ongoing operational measurement, enabling:

- Tracking efficiency improvements over time  
- Identifying regression events  
- Operational optimization  
- Real-time carbon-aware computing

#### 5\. Standardized Comparison

Without standardized functional units, comparing "1000 kWh for model training" across different models is meaningless. SCI for AI enables:

- Cross-model efficiency benchmarking  
- Architecture comparison (per-parameter efficiency)  
- Algorithm comparison (per-FLOP efficiency)  
- Data efficiency comparison (per-training-token)

### 3.3 Limitations and Counter-Arguments

While this paper advocates for SCI for AI adoption, intellectual honesty requires acknowledging legitimate counter-arguments and limitations.

#### Why the EU AI Act's Energy-Only Approach May Be Reasonable

1. **Simplicity and verifiability**: Energy consumption (kWh) is straightforward to measure and verify. Carbon intensity calculations introduce methodological complexity and potential for dispute.  

2. **Jurisdictional neutrality**: Energy metrics are comparable across jurisdictions regardless of local grid composition. Carbon intensity varies by location, time of day, and methodology (marginal vs. average), complicating cross-border comparisons.  

3. **Energy efficiency as an independent goal**: Reducing energy consumption is valuable regardless of carbon intensity—it reduces costs, infrastructure requirements, and grid strain.  

4. **Regulatory pragmatism**: Requiring carbon calculations would necessitate specifying approved carbon intensity databases, update frequencies, and methodologies—adding significant regulatory complexity.

#### Limitations of SCI for AI

1. **Data availability**: Embodied emissions data (the M component) is often unavailable. Hardware manufacturers rarely publish lifecycle assessment data, and estimates vary widely. This limits practical applicability.  

2. **Methodological debates**: The choice between marginal and average carbon intensity factors significantly affects results.  

3. **No verification framework**: Unlike regulated standards with audit mechanisms, SCI scores are self-reported with no independent verification requirement. This creates potential for inconsistent or misleading claims.  

4. **Still evolving**: SCI for AI is a relatively new extension to the base SCI specification. Functional unit definitions and boundary guidance may change, creating uncertainty for early adopters.  

5. **Dual burden**: Organizations adopting SCI for AI alongside EU AI Act compliance face dual reporting obligations. Some may reasonably prefer waiting for official Article 40 harmonised standards rather than investing in a methodology that might differ from eventual requirements.

#### No Guarantee of Regulatory Alignment

This paper suggests SCI for AI positions organizations for future standards, but this is **speculative**. The Commission's Article 40 harmonised standards may adopt different approaches, metrics, or functional units.

### 3.4 Future-Proofing

Article 40 mandates the Commission to develop harmonised standards and report on progress by August 2, 2028\. That report may include "legally binding corrective measures" if voluntary approaches prove insufficient.

Organizations using SCI for AI position themselves to:

- **Influence standards development**: Demonstrated methodology adoption carries weight in standards discussions  
- **Minimize transition costs**: Already measuring what future standards will likely require  
- **Demonstrate good faith**: Proactive adoption signals commitment to sustainability  
- **Avoid compliance scrambles**: When standards become binding, SCI adopters are ready

The Commission has indicated interest in "a potential AI energy and emissions label"—a concept that could potentially align with SCI for AI's functional unit approach, though no specific methodology preference has been signaled.

---

## 4\. Implementation Recommendations

### 4.1 For GPAI Providers

Organizations providing general-purpose AI models subject to Annex XI could:

1. **Adopt SCI for AI methodology** for technical documentation  

   - Measure energy (E) using actual consumption data where available  
   - Apply location-specific carbon intensity (I) to calculate operational emissions  
   - Track embodied emissions (M) for hardware infrastructure

2. **Select appropriate provider functional units**  

   - per FLOP for algorithm/hardware optimization focus  
   - per training token for data efficiency focus  
   - per parameter for architecture efficiency focus

3. **Report comprehensively**  

   - Include both energy (E) and calculated carbon (O \= E × I)  
   - Document assumptions and data sources  
   - Distinguish gross from effective values

4. **Establish continuous measurement**  

   - Monitor inference emissions in production  
   - Track efficiency trends over model versions  
   - Prepare for future continuous monitoring requirements

### 4.2 For AI Deployers

Organizations deploying AI systems should:

1. **Use consumer-boundary metrics** for operational reporting  

   - Select functional units matching use case (per token, per image, etc.)  
   - Include monitoring and orchestration infrastructure

2. **Request SCI scores from upstream providers**  

   - Make carbon efficiency a procurement criterion  
   - Push market toward transparency

3. **Prepare for Article 95 voluntary codes**  

   - Establish SCI-based KPIs now  
   - Document efficiency improvement initiatives  
   - Build measurement infrastructure

4. **Consider location-based optimization**  

   - Evaluate grid carbon intensity when selecting cloud regions  
   - Implement carbon-aware scheduling where feasible

### 4.3 For Standards Bodies and Policymakers

Organizations developing Article 40 harmonised standards may consider:

1. **Consider SCI for AI as a candidate methodology**  

   - ISO/IEC 21031:2024 foundation provides credibility  
   - Existing adoption demonstrates feasibility  
   - Functional units enable comparison

2. **Extend to address EU AI Act gaps**  

   - Water usage (cooling for data centers)  
   - Electronic waste (hardware disposal)  
   - Supply chain emissions

3. **Establish mandatory disclosure requirements**  

   - Public reporting, not just regulatory access  
   - Standardized formats for comparison  
   - Verification mechanisms

---

## 5\. Conclusion

The EU AI Act establishes minimum environmental disclosure requirements for general-purpose AI models, but these requirements are insufficient to address AI's growing climate impact. The Act:

- Focuses on energy rather than carbon emissions  
- Ignores embodied emissions from hardware  
- Restricts disclosure to regulatory authorities  
- Provides no standardized measurement methodology  
- Relies heavily on future standards and voluntary codes

**Software Carbon Intensity for AI (SCI for AI)** provides a more comprehensive, ISO-standardized framework that:

- Measures actual carbon intensity, not just energy  
- Includes hardware lifecycle emissions  
- Defines standardized functional units for comparison  
- Excludes offsets—only genuine reductions count  
- Supports public transparency and continuous monitoring

Organizations that adopt SCI for AI today will:

1. **Exceed current compliance requirements** by measuring carbon intensity rather than energy alone  
2. **Prepare for future regulatory evolution** as Article 40 standards develop  
3. **Enable meaningful comparison** across AI systems and providers  
4. **Demonstrate sustainability leadership** to customers, investors, and regulators

Implementation requires meaningful investment in data collection, methodology expertise, and reporting infrastructure—but this investment positions organizations ahead of likely regulatory trends.

The question is not whether more stringent AI environmental requirements will come—Article 40 mandates their development—but whether organizations will be prepared when they arrive.

**The call to action**: for organizations with the resources and commitment to lead on AI sustainability, SCI for AI offers a rigorous, ISO-aligned methodology that exceeds current requirements. Implementation is not trivial—it requires investment in data collection, methodology expertise, and ongoing measurement infrastructure. But for those who believe environmental accountability will become increasingly important to customers, investors, and regulators, early adoption represents a strategic opportunity.

Organizations should weigh this against legitimate alternatives: waiting for official Article 40 harmonised standards, or focusing on energy efficiency (which the EU AI Act does require) as a simpler near-term goal. There is no single right answer—but informed decision-making requires understanding both the opportunities SCI for AI presents and the limitations it carries.

---

## Appendix: Technical Details

### A.1 Complete SCI Formula Breakdown

#### Full Mathematical Formulation

The Software Carbon Intensity is expressed as:

$$SCI = \frac{(E \times I) + M}{R} = \frac{O + M}{R}$$

Where:

- $O$ (Operational emissions) = $E \times I$
- $E$ (Energy) = Total energy consumed in kWh
- $I$ (Carbon intensity) = Average or marginal grid carbon intensity in gCO₂eq/kWh
- $M$ (Embodied emissions) = Hardware lifecycle emissions in gCO₂eq
- $R$ (Functional unit) = Scaling denominator

#### Embodied Emissions Calculation

$$M = TE \times \frac{TiR}{EL} \times \frac{RR}{ToR}$$

| Variable | Description | Example |
| :---- | :---- | :---- |
| **TE** | Total embodied emissions | 1,000 kgCO2eq for server |
| **TiR** | Time reserved | 720 hours (1 month) |
| **EL** | Expected lifespan | 35,040 hours (4 years) |
| **RR** | Resources reserved | 8 GPUs |
| **ToR** | Total resources | 8 GPUs (dedicated server) |

$$M = 1{,}000 \times \frac{720}{35{,}040} \times \frac{8}{8} = 1{,}000 \times 0.0205 \times 1 = 20.5 \text{ kgCO}_2\text{eq}$$

#### Worked Example: LLM Training Run

**Scenario**: Training a large language model over 30 days using 8 servers, each with 8 A100 GPUs (64 GPUs total), in a European data center.

| Component | Value | Source |
| :---- | :---- | :---- |
| Energy (E) | 150,000 kWh | Metered consumption |
| Carbon intensity (I) | 400 gCO2eq/kWh | Grid average for region |
| Server embodied emissions | 2,500 kgCO2eq per server | Manufacturer LCA data (estimated) |
| Number of servers | 8 | Training infrastructure |
| Training duration | 720 hours | 30 days |
| Server lifespan | 35,040 hours | 4-year expected life |
| Training tokens processed | 2 trillion | Training data size |

**Operational emissions (O)**:

$$O = E \times I = 150{,}000 \times 400 = 60{,}000{,}000 \text{ gCO}_2\text{eq} = 60{,}000 \text{ kgCO}_2\text{eq}$$

**Embodied emissions (M)**:

$$M_{\text{per server}} = 2{,}500 \times \frac{720}{35{,}040} \times 1 = 51.4 \text{ kgCO}_2\text{eq}$$

$$M_{\text{total}} = 51.4 \times 8 = 411 \text{ kgCO}_2\text{eq}$$

**Total emissions**:

$$\text{Total} = O + M = 60{,}000 + 411 = 60{,}411 \text{ kgCO}_2\text{eq}$$

**SCI per training token**:

$$SCI = \frac{60{,}411}{2 \times 10^{12}} = 0.0000302 \text{ gCO}_2\text{eq/token} = 30.2 \text{ µgCO}_2\text{eq/token}$$

> [!NOTE]
> The embodied emissions figure of 2,500 kgCO₂eq per server is illustrative. Actual values vary significantly by manufacturer and configuration, and such data is often unavailable.

#### Worked Example: Inference Workload

**Scenario**: Operating an LLM inference service processing 10 million requests per day.

| Component | Value | Source |
| :---- | :---- | :---- |
| Daily energy (E) | 2,400 kWh | Metered consumption |
| Carbon intensity (I) | 250 gCO2eq/kWh | Data center region |
| Server embodied emissions | 1,500 kgCO2eq | Manufacturer data |
| Daily operation | 24 hours | Continuous service |
| Server lifespan | 35,040 hours | 4-year expected life |
| Daily tokens processed | 500 million | Service metrics |

**Daily operational emissions**:

$$O = 2{,}400 \times 250 = 600{,}000 \text{ gCO}_2\text{eq} = 600 \text{ kgCO}_2\text{eq}$$

**Daily embodied emissions**:

$$M_{\text{per server}} = 1{,}500 \times \frac{24}{35{,}040} \times 1 = 1.03 \text{ kgCO}_2\text{eq}$$

$$M_{\text{total (4 servers)}} = 4.1 \text{ kgCO}_2\text{eq}$$

**Daily SCI per token**:

$$SCI = \frac{600 + 4.1}{500{,}000{,}000} = 1.21 \text{ mgCO}_2\text{eq/token}$$

### A.2 Mapping EU AI Act Articles to SCI Components

#### Crosswalk Table

| EU AI Act Provision | Requirement | SCI Component | Coverage |
| :---- | :---- | :---- | :---- |
| Recital 27 | Sustainable development principle | All | Full alignment |
| Annex XI 1(e) | Energy consumption documentation | E | Direct match |
| Article 40 | Resource performance standards | E, I, M, R | Exceeds requirement |
| Article 95 | Voluntary code KPIs | R (functional units) | Direct match |
| Systemic risk factors | High energy consumption | E, O | Enables assessment |

#### Gap Analysis: SCI Coverage Beyond EU AI Act

| SCI Capability | EU AI Act Requirement | Gap Filled | Practical Limitation |
| :---- | :---- | :---- | :---- |
| **Carbon intensity (I)** | Not required | Converts energy to climate impact | Requires carbon intensity data sources and disclosure of methodology used.  |
| **Embodied emissions (M)** | Not required | Captures hardware lifecycle | Hardware LCA data often unavailable from manufacturers |
| **Location-specific factors** | Not required | Enables carbon-aware decisions | Adds complexity; data quality varies by region |
| **Standardized functional units** | Not specified | Enables meaningful comparison | Different architectures may not be directly comparable |
| **Offset exclusion** | Not addressed | Ensures focus on direct reductions | Some argue verified offsets are legitimate; this is a values-based choice |
| **Continuous measurement** | Not required | Supports operational optimization | Requires ongoing infrastructure investment |
| **Public transparency** | Prohibited (authorities only) | Enables market accountability | SCI itself has no verification or audit requirement |

### A.3 Sample Reporting Template

The following template combines EU AI Act Annex XI requirements with SCI for AI metrics.

---

#### AI Model Environmental Documentation

**Model Identification**

- Model name: \[Name\]  
- Version: \[Version\]  
- Provider: \[Organization\]  
- Documentation date: \[Date\]  
- Reporting period: \[Start\] to \[End\]

**EU AI Act Annex XI 1(e) Compliance**

| Metric | Value | Data Source |
| :---- | :---- | :---- |
| Training energy consumption | \[X\] kWh | \[Metered/Estimated\] |
| Inference energy consumption (if applicable) | \[X\] kWh/day | \[Metered/Estimated\] |
| Estimation methodology (if applicable) | \[Description\] | — |

**SCI for AI Extended Metrics**

*Training Phase (Provider Boundary)*

| Component | Value | Unit | Source |
| :---- | :---- | :---- | :---- |
| Energy (E) | \[X\] | kWh | \[Source\] |
| Carbon intensity (I) | \[X\] | gCO2eq/kWh | \[Grid data source\] |
| Operational emissions (O) | \[X\] | kgCO2eq | Calculated (E × I) |
| Embodied emissions (M) | \[X\] | kgCO2eq | \[LCA source\] |
| **Total emissions** | \[X\] | kgCO2eq | O \+ M |

*Training Functional Units*

| Metric | Value | Unit |
| :---- | :---- | :---- |
| SCI per FLOP | \[X\] | gCO2eq/FLOP |
| SCI per training token | \[X\] | gCO2eq/token |
| SCI per parameter | \[X\] | gCO2eq/parameter |

*Inference Phase (Consumer Boundary, if applicable)*

| Component | Value | Unit | Measurement Period |
| :---- | :---- | :---- | :---- |
| Energy (E) | \[X\] | kWh/day | \[Period\] |
| Carbon intensity (I) | \[X\] | gCO2eq/kWh | \[Region\] |
| Operational emissions (O) | \[X\] | kgCO2eq/day | Calculated |
| Embodied emissions (M) | \[X\] | kgCO2eq/day | Allocated |

*Inference Functional Unit*

| AI Type | Functional Unit | SCI Value |
| :---- | :---- | :---- |
| \[LLM/Image/etc.\] | per \[token/image/etc.\] | \[X\] gCO2eq/unit |

**Methodology Notes**

- Gross vs. effective values: \[Specify\]  
- Key assumptions: \[List\]  
- Data limitations: \[List\]  
- Verification: \[Self-assessed/Third-party verified\]

**Attestation**

This documentation is prepared in accordance with EU AI Act Annex XI requirements and extended using the SCI for AI methodology (based on ISO/IEC 21031:2024).

Prepared by: \[Name, Title\] Date: \[Date\]

---

## References

### EU AI Act Sources

1. **EU AI Act Full Text** Regulation (EU) 2024/1689 [https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689)  

2. **Recital 27** — Environmental sustainability principle [https://artificialintelligenceact.eu/recital/27/](https://artificialintelligenceact.eu/recital/27/)  

3. **Article 40** — Harmonised standards and standardisation deliverables [https://artificialintelligenceact.eu/article/40/](https://artificialintelligenceact.eu/article/40/)  

4. **Article 95** — Codes of conduct for voluntary application [https://artificialintelligenceact.eu/article/95/](https://artificialintelligenceact.eu/article/95/)  

5. **Annex XI** — Technical documentation for GPAI model providers [https://artificialintelligenceact.eu/annex/11/](https://artificialintelligenceact.eu/annex/11/)  

6. **GPAI Code of Practice Overview** [https://artificialintelligenceact.eu/code-of-practice-overview/](https://artificialintelligenceact.eu/code-of-practice-overview/)

### SCI and Green Software Foundation Sources

1. **ISO/IEC 21031:2024** — Software Carbon Intensity specification [https://www.iso.org/standard/86612.html](https://www.iso.org/standard/86612.html)  

2. **SCI Specification** — Green Software Foundation [https://sci.greensoftware.foundation/](https://sci.greensoftware.foundation/)  

3. **SCI for AI Specification** [https://github.com/Green-Software-Foundation/sci-ai/blob/main/SPEC.md](https://github.com/Green-Software-Foundation/sci-ai/blob/main/SPEC.md)

### Analysis and Commentary

1. **White & Case** — Energy Efficiency Requirements Under the EU AI Act [https://www.whitecase.com/insight-alert/energy-efficiency-requirements-under-eu-ai-act](https://www.whitecase.com/insight-alert/energy-efficiency-requirements-under-eu-ai-act)  

2. **Heinrich Böll Foundation** — EU AI Act: A Missed Opportunity for Environmental Sustainability [https://eu.boell.org/en/2024/04/08/eu-ai-act-missed-opportunity](https://eu.boell.org/en/2024/04/08/eu-ai-act-missed-opportunity)
