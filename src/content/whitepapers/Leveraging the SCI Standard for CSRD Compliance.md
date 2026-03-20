# Leveraging the Software Carbon Intensity (SCI) Standard for CSRD Compliance

## A Strategic Framework for European Organizations

**White Paper** **January 2026**  
**Author: Software Standards Working Group (GSF)**

---

## Executive Summary

The Corporate Sustainability Reporting Directive (CSRD) represents the most comprehensive sustainability reporting mandate in European history, requiring approximately 10,000 companies to disclose detailed environmental, social, and governance (ESG) information. At the heart of CSRD lies the European Sustainability Reporting Standards (ESRS), with ESRS E1—Climate Change—emerging as one of the most technically demanding requirements.

For organizations that develop, deploy, or procure software, a critical challenge exists: traditional carbon accounting methodologies often lack the granularity needed to measure and reduce software-specific emissions effectively. This white paper demonstrates how the Software Carbon Intensity (SCI) standard—developed by the Green Software Foundation and formalized as ISO/IEC 21031:2024—provides a complementary framework that can help organizations:

- **Accurately quantify** software carbon emissions at a granular level  
- **Support CSRD compliance** efforts, particularly for ESRS E1-6 (GHG emissions reporting)  
- **Drive measurable reductions** in software-related emissions  
- **Demonstrate double materiality** by linking software impacts to business value  
- **Support science-based target** development and tracking

**Key Recommendation**: Organizations subject to CSRD should consider adopting the SCI standard as a practical methodology for calculating, tracking, and reducing software carbon emissions within their broader GHG inventory and sustainability reporting framework.

**Disclaimer**: The SCI standard is a *complementary tool* that can support CSRD compliance, not a requirement of ESRS E1. Organizations should consult with their auditors, legal advisors, and sustainability professionals to determine the most appropriate methodologies for their specific reporting context. While SCI provides valuable technical granularity, ESRS E1 does not explicitly mandate its use, and alternative approaches may also be valid.

---

## Table of Contents

1. [Understanding CSRD and ESRS E1](#1-understanding-csrd-and-esrs-e1)  
2. [The Challenge of Software Emissions](#2-the-challenge-of-software-emissions)  
3. [Introducing the Software Carbon Intensity (SCI) Standard](#3-introducing-the-software-carbon-intensity-sci-standard)  
4. [Strategic Alignment: SCI and CSRD](#4-strategic-alignment-sci-and-csrd)  
5. [Practical Implementation Framework](#5-practical-implementation-framework)  
6. [Benefits and Business Case](#6-benefits-and-business-case)  
7. [Conclusion and Recommendations](#7-conclusion-and-recommendations)  
8. [Resources and References](#8-resources-and-references)

---

## 1\. Understanding CSRD and ESRS E1

### 1.1 The CSRD Imperative

The CSRD, adopted in November 2022 and entering force in stages from 2024-2028, fundamentally transforms corporate sustainability disclosure in the European Union. Building on the Non-Financial Reporting Directive (NFRD), CSRD introduces:

| Feature | Original Detail (2022 Basis) | 2026 Validated Reality (Post-Omnibus) |
| :---- | :---- | :---- |
| **Number of Companies** | \~50,000 | **\~10,000** (Reduced by approx. 80%) |
| **In-Scope Thresholds** | \>250 Employees / €50m Turnover | **\>1,000 Employees / \>€450m Turnover** |
| **Wave 2 Start Date** | FY 2025 (Report 2026\) | **FY 2027 (Report 2028\)** |
| **ESRS E1 Data Points** | \~1,100 Total Data Points | **Reduced by 61%** (Simplified metrics) |
| **Assurance Level** | Mandatory Step-up to Reasonable | **Limited Assurance** (No mandatory step-up) |
| **Digital Format** | iXBRL / XHTML | **Mandatory iXBRL** via ESEF |
| **Listed SMEs** | Mandatory (Wave 3\) | **Removed from mandatory scope** (Voluntary) |
| **Value Chain Reporting** | Exhaustive Audit | **"Value Chain Cap"** (Estimates encouraged) |

### 1.2 ESRS E1: Climate Change Reporting Requirements

#### Significant Reduction in Disclosure Requirements

The proposed "revised ESRS" for Climate Change (E1) have been drastically streamlined:

* **Datapoint Reduction:** Mandatory datapoints for ESRS E1 have been reduced by **61%**.  
* **Word Count Reduction:** The overall text for E1 has been cut by **60%**.  
* **Simplified Metrics:** Several metrics have been removed, including **energy intensity**, **GHG intensity per net revenue**, and **total GHG emissions**.

#### Major Change to Reporting Boundaries (The "Financial Control" Shift)

One of the most critical updates for your SCI framework is the shift in how greenhouse gas emissions are calculated:

* **Removal of the "Additive Approach":** The previous requirement to report emissions under both consolidated financial scope AND operational control (the additive approach) has been **removed**.  
* **Financial Control Focus:** ESRS E1 now focuses primarily on a **financial control approach**, aligning the reporting boundary with the consolidated financial statements.  
* **Operational Control Exception:** Reporting under an operational control approach is now only required as an **addition** if the financial control approach is insufficient to portray the emissions resulting from operated assets.

#### New Flexibility and Reliefs

The updated standards introduce several mechanisms to reduce the effort required for climate reporting:

* **"Undue Cost or Effort" Relief:** Companies can use a proportionality mechanism to provide information that is available without "undue cost or effort".  
* **Scenario Analysis:** Disclosure on scenario analysis is now **only required if the company has actually conducted it**; it is no longer a mandatory step in identifying climate risks.  
* **Phase-in for Financial Effects:** Quantitative disclosures on anticipated financial effects for climate change are largely **phased-in until FY2030** for most companies, though "Wave 1" companies must still disclose carrying amounts of assets at risk starting in FY2026.

#### Reaffirmation of Core Pillars

Despite the simplifications, EFRAG has reaffirmed that certain elements remain mandatory cornerstones:

* **Transition Plans:** These remain a mandatory cornerstone of ESRS E1, including GHG reduction targets, decarbonization levers, and funding needed for implementation.  
* **Gross Targets:** GHG reduction targets must still be reported as **gross targets** (before carbon credits or removals).  
* **Absolute Emissions:** Companies using intensity targets are still required to disclose the associated **absolute values** (with a small exception for financial institutions).

#### Implementation Timeline for your White Paper:

* **Adoption:** The European Commission is expected to formally adopt these amended standards by **mid/late 2026**.  
* **Application:** They will be applicable from **Financial Year 2027**, with an option for companies to apply them early starting in **Financial Year 2026**.

| ESRS E1 Requirement | Focus Area | Data Challenge for IT/Software |
| :---- | :---- | :---- |
| **E1-1** | Transition Plan | Demonstrating technical levers for emission reduction in code/architecture |
| **E1-4** | Targets | Setting meaningful goals for software efficiency rather than just absolute totals |
| **E1-5** | Energy Consumption | Disaggregating software-driven energy use from general building facilities |
| **E1-6** | GHG Emissions | Accounting for the complex, shared nature of cloud and value-chain emissions |
| **E1-9** | Financial Effects | Quantifying how future carbon pricing affects the operational cost of software |

### *Note: While these core requirements (E1-1 through E1-9) remain in effect, the 2025 Omnibus I updates have simplified the specific metrics required under each, prioritizing 'gross' reporting and financial control boundaries over previous, more complex additive approaches.*

### 1.3 The Software Dimension

While ESRS E1 provides comprehensive guidance for traditional emission sources, it offers limited specific guidance for software-related emissions. Yet for many organizations—particularly those in technology, financial services, telecommunications, and digital-native sectors—software represents a significant and growing contributor to their carbon footprint.

Software emissions manifest across multiple Scope 3 categories:

- **Category 1**: Purchased goods and services (cloud services, SaaS platforms)  
- **Category 2**: Capital goods (hardware infrastructure)  
- **Category 8**: Upstream leased assets (data center operations)  
- **Category 11**: Use of sold products (customer usage of software products)

---

## 2\. The Challenge of Software Emissions

### 2.1 The Hidden Carbon Cost of Software

Software emissions remain largely invisible in traditional carbon accounting for several reasons:

1. **Abstraction layers**: Cloud computing obscures the underlying physical infrastructure  
2. **Shared resources**: Virtualization makes attribution complex  
3. **Dynamic workloads**: Software resource consumption varies significantly over time  
4. **Embodied emissions**: Hardware manufacturing emissions are often overlooked  
5. **Scope 3 complexity**: Software emissions span multiple categories and value chain partners

Research indicates that Scope 3 emissions typically represent **65-95% of most companies' total carbon footprint**, with technology companies' supply chains often accounting for a significant portion. However, these software-related emissions often remain poorly quantified and managed due to measurement challenges.

### 2.2 The Granularity Gap

The challenge for modern enterprises lies in what we call the **"granularity gap"**. Traditional GHG accounting aggregates emissions into broad scopes, but software practitioners need to understand how specific design decisions—such as the architecture of a machine learning model—directly influence carbon outputs.

Traditional carbon accounting approaches face specific challenges with software:

**Challenge 1: Granularity**

- GHG Protocol provides corporate-level guidance  
- Software systems require component-level measurement  
- Functional unit selection is unclear for digital products

**Challenge 2: Comparability**

- No standardized approach for software intensity metrics  
- Difficult to compare efficiency across different architectures  
- Open-source and proprietary software use different models

**Challenge 3: Actionability**

- High-level totals don't identify optimization opportunities  
- Engineers lack specific guidance on reducing software emissions  
- Investment decisions lack clear carbon impact data

**Challenge 4: Verification**

- Many auditors lack software-specific expertise  
- Data lineage from software operations to emissions is often unclear  
- Models and estimates typically dominate over direct measurements

Without a specialized framework, the digital components of a sustainability report remain nebulous, increasing the risk of material misstatement during the mandatory limited assurance audits required by the CSRD.

### 2.3 The Need for a Software-Specific Standard

Organizations subject to CSRD require a methodology that:

- Provides **granular, component-level** measurement  
- Enables **rate-based metrics** (intensity per functional unit)  
- Drives **elimination-focused** reduction strategies  
- Integrates with **GHG Protocol** corporate inventories  
- Can support **science-based target** setting  
- Facilitates documentation for audit purposes

This is where the Software Carbon Intensity standard can provide value.

---

## 3\. Introducing the Software Carbon Intensity (SCI) Standard

### 3.1 Overview and Governance

The **Software Carbon Intensity (SCI) Specification** was developed by the Standards Working Group of the Green Software Foundation, an independent, vendor-neutral organization focused on advancing green software practices. In March 2024, the specification was formalized as **ISO/IEC 21031:2024**, becoming the first international standard specifically for software carbon intensity measurement.

**Key Characteristics:**

- **Open and freely accessible**: No licensing fees or proprietary requirements  
- **Vendor-neutral**: Applicable across all platforms, clouds, and architectures  
- **Methodology-based**: Provides calculation framework, not prescriptive tooling  
- **Complementary to GHG Protocol**: Designed to work alongside, not replace, existing standards  
- **ISO standardized**: Published as ISO/IEC 21031:2024 in March 2024

**Technical Compliance Note:** While the SCI standard provides high-resolution data on software efficiency using location-based intensity, **ESRS E1 (DR E1-6)** requires the reporting of Scope 2 emissions using both the location-based and **market-based** methods. Organizations using the SCI to support CSRD reporting must ensure they also account for contractual instruments (such as RECs or GOs) to meet the dual-reporting requirements of the Directive.

### 3.2 The SCI Formula

The SCI calculates software carbon emissions as a **rate** rather than a total:

```
SCI = (O + M) per R

Where:
O = Operational emissions (energy × carbon intensity)
M = Embodied emissions (hardware manufacturing, time-share, resource-share)
R = Functional unit (e.g., per API call, per user, per transaction)
```

**Operational Emissions (O):**

```
O = E × I

E = Energy consumed (kWh)
I = Location-based carbon intensity (gCO2eq/kWh)
```

**Important Note on Scope 2**: SCI uses location-based carbon intensity for its calculations, which aligns with its elimination-focused philosophy. However, ESRS E1-6 (paragraph 44d) requires organizations to report Scope 2 emissions using **both** location-based and market-based methods. Organizations using SCI for Scope 2 calculations will need to maintain separate tracking of market-based accounting (which includes RECs and PPAs) to fully comply with ESRS E1 requirements.

**Embodied Emissions (M):**

```
M = TE × TS × RS

TE = Total Embodied Emissions (from hardware lifecycle assessment)
TS = Time-share (portion of hardware lifespan used)
RS = Resource-share (portion of hardware capacity used)
```

**Practical Considerations**: Determining embodied emissions in practice can be challenging, particularly in cloud and virtualized environments where:

- Dynamic resource allocation makes time-share calculations complex  
- Shared infrastructure with varying utilization complicates resource-share attribution  
- Cloud providers often don't expose the necessary granularity  
- Embodied emissions data for hardware may be unavailable or use different LCA assumptions

Organizations should document their assumptions and methodologies carefully, using industry-standard LCA data where primary data is unavailable.

### 3.3 Core Principles

The SCI is founded on three fundamental principles:

**1\. Elimination Focus**

- Only actions that **eliminate emissions** reduce the SCI score  
- Carbon offsets, credits, or RECs **cannot** reduce SCI  
- Aligns with CSRD's gross reporting requirement

**2\. Sensitivity to Action**

- SCI responds to three categories of software sustainability actions:  
  - **Energy Efficiency**: Using less electricity for the same function  
  - **Hardware Efficiency**: Using fewer physical resources  
  - **Carbon Awareness**: Time/region-shifting to cleaner energy

**3\. Systems Thinking**

- Encourages system-wide optimization over local improvements  
- Considers downstream impacts of architectural decisions  
- Reflects true environmental impact, not just component metrics

### 3.4 Calculation Methodology

Organizations follow a five-step process:

**Step 1: Define Boundary**

- Identify software components to include  
- Document supporting infrastructure (compute, storage, networking, monitoring, CI/CD pipelines)  
- Include end-user devices where relevant

**Step 2: Select Functional Unit (R)**

- Choose how the application scales (users, API calls, transactions, ML training runs)  
- Ensure consistency across all components

**Step 3: Determine Quantification Method**

- **Measurement**: Real-world telemetry and monitoring data  
- **Calculation**: Lab-based models and benchmarks  
- Document data sources and assumptions

**Step 4: Quantify Components**

- Calculate SCI for each component  
- Aggregate using consistent functional unit  
- Ensure completeness across the boundary

**Step 5: Report and Disclose**

- Document methodology, assumptions, and data sources  
- Provide transparency for verification  
- Track changes over time against baseline

### 3.5 SCI for Artificial Intelligence Systems

In December 2025, the Green Software Foundation ratified the **SCI for AI** specification, which extends the SCI methodology to address the unique characteristics of artificial intelligence systems. While not yet an ISO standard extension, this specification provides a framework for measuring AI-specific emissions across the full lifecycle—from data preparation and model training to deployment and inference.

Key features of SCI for AI:

- **Provider vs. Consumer scores**: Allows separation of training costs (provider) from inference costs (consumer)  
- **Lifecycle coverage**: Addresses data preparation, training, fine-tuning, inference, and model storage  
- **AI-specific considerations**: Accounts for distinctive resource patterns in ML workloads  
- **Broad applicability**: Covers classical ML, computer vision, NLP, generative AI, and agentic systems

For organizations with significant AI workloads, SCI for AI provides much-needed methodology for a rapidly growing source of emissions.

---

## 4\. Strategic Alignment: SCI and CSRD

### 4.1 Complementary Frameworks

SCI and CSRD/ESRS E1 operate at different levels but can be highly complementary:

| Aspect | GHG Protocol / ESRS E1 | Software Carbon Intensity |
| :---- | :---- | :---- |
| **Level** | Corporate-wide | Software component |
| **Metric Type** | Absolute total (tCO2e) | Intensity rate (gCO2e/R) |
| **Primary Use** | External reporting & compliance | Internal optimization & tracking |
| **Granularity** | Scope 1, 2, 3 categories | Individual software components |
| **Offset Treatment** | Disclosed separately | Excluded from score |
| **Target Audience** | Investors, regulators, auditors | Developers, architects, product teams |
| **Regulatory Status** | Required by CSRD | Complementary, not mandated |

**Integration Model:**

- **SCI provides the "how"**: Detailed methodology for calculating software emissions  
- **GHG Protocol provides the "where"**: Classification into Scopes 1, 2, 3  
- **ESRS E1 provides the "what"**: Disclosure requirements for external reporting

**Important**: SCI can support CSRD compliance but is not explicitly required by ESRS E1. Organizations should engage their auditors early to confirm that SCI-based approaches will be accepted as part of their GHG inventory methodology.

### 4.2 Potential Support for ESRS E1 Requirements

#### E1-6: Gross Scope 1, 2, 3 and Total GHG Emissions

**How SCI Can Help:**

- Provides **granular calculation** methodology for software-related emissions within Scope 2 (data center energy) and Scope 3 (cloud services, use of sold products)  
- Enables **category-level breakdown** that may support ESRS E1 requirements (paragraph 44\)  
- Facilitates documentation through defined boundary, methodology, and data sources  
- Supports **embodied emissions** quantification for hardware (Category 1 and 2\)

**Example Application:** A SaaS company uses SCI to calculate emissions for each microservice. These component-level calculations aggregate to:

- **Scope 2**: Energy consumed in company-owned data centers  
- **Scope 3 Category 1**: Cloud service provider emissions (AWS, Azure, GCP)  
- **Scope 3 Category 11**: Customer usage of the software platform

The company reports the **totals** under ESRS E1-6 while maintaining **component-level SCI scores** for internal optimization.

**Caveat**: Organizations must ensure that Scope 2 reporting includes both location-based (which SCI provides) and market-based methods as required by ESRS E1-6.

#### E1-5: Energy Consumption and Mix

**How SCI Can Help:**

- **Energy consumption (E)** is a required SCI input  
- Provides disaggregation by operational component  
- Enables tracking of energy efficiency improvements over time  
- Links energy data directly to carbon intensity calculations

#### E1-4: Targets Related to Climate Change Mitigation and Adaptation

**How SCI Can Help:**

- **Baseline establishment**: SCI scores provide measurable starting points  
- **Progress tracking**: Rate-based metrics show efficiency improvements independent of business growth  
- **Target setting**: SCI enables software-specific reduction targets (e.g., "Reduce SCI by 50% by 2027")  
- **Supporting science-based approaches**: SCI methodology can support development of science-aligned sectoral pathways for digital services

**Note on SBTi**: While SCI intensity metrics can support science-based target development, the Science Based Targets initiative (SBTi) has specific methodologies and requirements. SBTi typically requires absolute contraction targets for most companies, and intensity targets alone are generally insufficient. Organizations should consult SBTi guidance and work with their sustainability advisors to ensure targets meet SBTi criteria. SCI has not been explicitly endorsed by SBTi as of this writing.

#### E1-1: Transition Plan for Climate Change Mitigation

**How SCI Can Help:**

- **Action identification**: SCI pinpoints specific optimization opportunities  
- **Investment prioritization**: Quantifies carbon impact of architectural decisions  
- **Roadmap development**: Tracks progress across software portfolio  
- **Resource allocation**: Links emissions reduction to engineering roadmaps

### 4.3 Double Materiality Assessment

CSRD requires organizations to assess sustainability matters through a **double materiality** lens:

**Impact Materiality (Inside-Out):**

- How does the organization's software **affect** climate change?  
- SCI provides quantitative evidence of software carbon footprint  
- Demonstrates actual and potential emissions across the software lifecycle  
- Supports stakeholder engagement on environmental impact

**Financial Materiality (Outside-In):**

- How do climate-related risks and opportunities **affect** the organization's business?  
- SCI reveals optimization opportunities that reduce operational costs  
- Identifies carbon-intensive components vulnerable to carbon pricing  
- Demonstrates competitive advantage through efficient software  
- Supports customer sustainability requirements (increasingly material for B2B)

Organizations can use SCI scores to demonstrate that software-related climate impacts are material from both perspectives, justifying detailed disclosure under ESRS E1.

### 4.4 Alignment with Key Principles

#### Principle 1: Gross Emissions Reporting

**ESRS E1 Requirement (paragraph 44):** "The undertaking shall disclose absolute gross greenhouse gas emissions for the reporting period... The GHG emission reduction targets shall be gross targets, meaning that the undertaking shall not include GHG removals, carbon credits or avoided emissions as a means of achieving the GHG emission reduction targets."

**SCI Alignment:** The SCI specification explicitly states: "Only actions that eliminate emissions reduce an SCI score. As such, an SCI score cannot be reduced through carbon offsets, such as market-based measures."

This foundational alignment ensures that SCI-based calculations maintain integrity within CSRD reporting, with no risk of greenwashing through offset netting.

#### Principle 2: GHG Protocol Methodology

**ESRS E1 Requirement (paragraph 45):** "The undertaking shall calculate its Scope 1, Scope 2 and Scope 3 emissions in accordance with the Greenhouse Gas Protocol."

**SCI Alignment:** SCI is designed to complement, not replace, the GHG Protocol. The SCI specification can provide granular methodology for software while maintaining compatibility with GHG Protocol corporate inventory requirements.

**Integration Workflow:**

1. Calculate component-level SCI scores  
2. Aggregate SCI calculations to determine software-related emissions  
3. Classify these emissions into GHG Protocol Scopes 1, 2, 3  
4. Incorporate into corporate GHG inventory  
5. Report totals under ESRS E1-6

### 4.5 Addressing Scope 3 Complexity

ESRS E1 paragraph 45 requires organizations to disclose Scope 3 emissions "as a total and broken down by each significant Scope 3 category."

For software companies, Scope 3 presents unique challenges:

#### Challenge 1: Category 1 (Purchased Goods and Services)

- Cloud computing services (AWS, Azure, GCP)  
- SaaS platforms and third-party APIs  
- Hardware procurement for on-premise infrastructure

**How SCI Can Help:** SCI provides a framework for engaging cloud providers and software vendors on emissions data. Organizations can request SCI scores from suppliers or calculate estimates based on documented SCI methodology, creating consistency and comparability.

#### Challenge 2: Category 11 (Use of Sold Products)

- Customer usage of software products  
- Highly variable based on customer behavior  
- Often lacks direct measurement  
- Especially challenging for B2C software where end-user behavior is outside organizational control

**How SCI Can Help:** By defining appropriate functional units (e.g., per user session, per transaction), organizations can model typical usage patterns and calculate representative SCI scores.

**Important Limitations**: Category 11 reporting remains challenging even with SCI:

- Representative scenarios may not capture full variability of actual usage  
- For B2C applications, measuring actual customer energy consumption is often impractical  
- Modeled estimates introduce significant uncertainty  
- CSRD requires actual value chain emissions where possible, with clear documentation of estimation methodologies  
- Organizations should provide ranges or scenarios in disclosures to reflect uncertainty

#### Challenge 3: Data Availability and Quality

- Limited transparency from infrastructure providers  
- Dependency on models and estimates  
- Difficulty obtaining primary data from value chain partners

**How SCI Can Help:** The SCI specification explicitly accommodates data limitations: "In situations where there is a lack of access, capability, or rights to the necessary real-world data, the SCI allows for data generated through modeling, using best estimates instead." This pragmatic approach aligns with ESRS guidance on data quality improvement over time.

**Reality Check**: Despite this accommodation, data availability remains a significant practical barrier:

- Most cloud providers don't provide real-time, granular energy data at the workload level  
- Hardware embodied emissions databases are incomplete  
- Many organizations lack necessary monitoring infrastructure  
- Implementing required telemetry can be costly and time-consuming  
- Organizations should plan for a multi-year journey to mature SCI implementation

### 4.6 Avoiding Double Counting in Value Chains

**Important Consideration**: When multiple organizations in a value chain each report on shared infrastructure, there is a risk of double counting:

- Cloud provider reports emissions as Scope 1 & 2  
- Cloud customer reports same infrastructure as Scope 3 Category 1  
- If the customer's customer also reports it, emissions appear multiple times across value chain reporting

**Best Practices**:

- Clearly document boundary definitions and attribution methodologies  
- Understand whether suppliers are including emissions in their Scope 1/2 reporting  
- Work with cloud providers to understand their reporting boundaries  
- For Scope 3 Category 11, focus on emissions that occur beyond your organizational boundary  
- Consult GHG Protocol Scope 3 guidance on attribution principles  
- Engage auditors on appropriate value chain attribution methodologies

---

## 5\. Practical Implementation Framework

### 5.1 Integration with CSRD Readiness

Organizations can consider integrating SCI into their CSRD implementation roadmap:

#### Phase 1: Foundation (Months 1-3)

**Double Materiality Assessment**

- Include software emissions in climate impact assessment  
- Evaluate financial materiality of software efficiency  
- Document materiality conclusions with SCI-based evidence

**Auditor Engagement**

- **Critical**: Engage assurance providers early to discuss SCI methodology  
- Confirm that SCI-based approaches will be acceptable for audit purposes  
- Discuss documentation and evidence requirements  
- Understand auditor's familiarity with software carbon accounting  
- Plan for potential additional verification steps

**Boundary Definition**

- Identify in-scope software applications and infrastructure  
- Map software components to GHG Protocol scopes  
- Define organizational boundaries (operational control, equity share)

**Data Infrastructure**

- Assess existing monitoring and telemetry capabilities  
- Identify data gaps for energy consumption and embodied emissions  
- Establish data governance and quality control processes  
- **Realistically assess** the cost and time needed to implement necessary monitoring

#### Phase 2: Baseline Measurement (Months 4-6)

**SCI Calculation**

- Select representative functional units for key applications  
- Calculate baseline SCI scores using available data  
- Document methodology, assumptions, and data sources  
- Create calculation models for Scope 3 estimation  
- **Clearly document** where modeled data is used vs. measured data

**GHG Inventory Integration**

- Aggregate SCI-based emissions into corporate totals  
- Classify emissions into appropriate Scope 3 categories  
- Ensure consistency with GHG Protocol guidance  
- Prepare audit trail for verification  
- **Add market-based Scope 2 calculations** separately for ESRS E1-6 compliance

**Gap Analysis**

- Identify high-impact, high-uncertainty emission sources  
- Prioritize data quality improvements  
- Engage suppliers on emissions data sharing

#### Phase 3: Target Setting and Strategy (Months 7-9)

**Science-Based Targets**

- Develop software-specific reduction targets that can support broader SBTi-aligned goals  
- Set component-level SCI improvement goals  
- Integrate into broader corporate climate strategy  
- Define governance and accountability structures  
- **Consult SBTi guidance** to ensure targets meet required criteria

**Transition Plan Development**

- Identify energy efficiency opportunities  
- Evaluate hardware efficiency improvements  
- Assess carbon-aware computing potential  
- Create investment business cases with carbon ROI

**Stakeholder Engagement**

- Communicate software sustainability strategy to investors  
- Engage suppliers on emissions reduction  
- Collaborate with customers on usage optimization  
- Brief engineering teams on carbon impact

#### Phase 4: Reporting and Assurance (Months 10-12+)

**ESRS Disclosure Preparation**

- Draft ESRS E1 disclosures with software emissions data  
- Document methodologies, assumptions, and data quality  
- Prepare supporting evidence for limited assurance  
- Review narrative consistency across ESRS standards

**Assurance Readiness**

- Create documentation packages for audit  
- Establish evidence trails from raw data to disclosure  
- Train internal teams on assurance requirements  
- Conduct pre-assurance reviews  
- **Be prepared for** auditor questions about SCI methodology, especially if it's new to them

**Continuous Improvement**

- Implement measurement automation and monitoring  
- Track SCI scores against targets over time  
- Refine calculation methodologies based on learnings  
- Enhance data quality year-over-year

### 5.2 Roles and Responsibilities

Successful SCI implementation requires cross-functional collaboration. Consider establishing a **"GreenOps"** task force and leveraging existing FinOps teams:

| Role | SCI Responsibilities | CSRD Alignment |
| :---- | :---- | :---- |
| **Sustainability Team** | Overall methodology ownership; GHG inventory integration; external reporting | Primary CSRD disclosure owners |
| **Engineering/DevOps** | Component-level SCI calculation; monitoring and telemetry; optimization implementation | Technical data providers |
| **Product Management** | Functional unit selection; feature impact assessment; roadmap prioritization | Business context for materiality |
| **Finance** | Cost-benefit analysis; carbon ROI modeling; investment allocation | Financial materiality assessment |
| **Procurement** | Supplier engagement; cloud contract negotiations; embodied emissions data | Scope 3 data gathering |
| **Internal Audit** | Control design; documentation review; assurance preparation | Assurance coordination |
| **Legal/Compliance** | Regulatory interpretation; disclosure review; risk assessment | CSRD compliance oversight |

### 5.3 Tool and Technology Considerations

Organizations can leverage various tools to support SCI implementation:

**Category 1: Carbon Accounting Platforms**

- General-purpose ESG and carbon management software  
- Integration with GHG Protocol and CSRD/ESRS frameworks  
- Workflow, evidence management, and reporting capabilities

**Category 2: Software Observability and Monitoring**

- Cloud cost management platforms (enhanced with carbon data)  
- Application performance monitoring (APM) tools  
- Infrastructure monitoring and telemetry systems

**Category 3: SCI-Specific Tools**

- Cloud carbon footprint calculators  
- Green Software Foundation tools and resources  
- Open-source SCI calculation frameworks

**Category 4: Supplier Data Platforms**

- Cloud provider carbon emissions APIs (AWS Customer Carbon Footprint Tool, Azure Carbon Optimization, Google Carbon Footprint)  
- SaaS vendor sustainability data  
- Hardware lifecycle assessment databases

**Selection Criteria:**

- GHG Protocol and ESRS E1 alignment  
- SCI calculation methodology support  
- Data integration and automation capabilities  
- Audit trail and evidence management  
- Scalability and total cost of ownership

### 5.4 Overcoming Common Challenges

#### Challenge 1: Limited Cloud Provider Data

**Issue:** Cloud providers offer varying levels of emissions data granularity and transparency. Many don't provide the workload-level detail needed for precise SCI calculations.

**Solution:**

- Utilize available carbon reporting APIs (AWS, Azure, Google Cloud)  
- Apply SCI methodology to estimate emissions where data unavailable  
- Engage providers on data roadmap and request SCI-aligned reporting  
- Document assumptions and limitations for assurance purposes  
- Plan for data quality improvements in future reporting cycles  
- **Use power models** based on CPU/GPU utilization to estimate energy consumption where direct measurements are unavailable

#### Challenge 2: Embodied Emissions Complexity

**Issue:** Hardware lifecycle emissions are difficult to attribute to specific software components, especially in virtualized and cloud environments where:

- Hardware is shared across multiple tenants  
- Resource allocation is dynamic  
- Utilization varies significantly over time  
- Vendors may not provide detailed embodied emissions data

**Solution:**

- Use industry-standard LCA data for common hardware types (e.g., from literature, manufacturer EPDs)  
- Calculate time-share based on actual usage duration or provisioning period  
- Estimate resource-share using CPU, memory, or storage allocation percentages  
- Apply conservative assumptions and **document rationale thoroughly**  
- Seek primary data from hardware vendors where available  
- **Acknowledge uncertainty** in calculations and provide ranges where appropriate

#### Challenge 3: Scope 3 Category 11 (Use of Sold Products)

**Issue:** Customer usage patterns are highly variable and difficult to measure directly. For B2C software especially, organizations have limited visibility into actual end-user energy consumption.

**Solution:**

- Define representative usage scenarios and functional units  
- Use product analytics to estimate typical usage intensities  
- Calculate SCI scores for standard usage patterns  
- Extrapolate to total customer base with documented assumptions  
- **Provide ranges or scenarios** in disclosures to reflect uncertainty  
- **Clearly state limitations** of estimation methodology  
- Plan for sensitivity analysis to understand impact of assumption changes

**Reality Check**: Even with SCI, Category 11 remains challenging and estimates will contain significant uncertainty. This should be transparently communicated.

#### Challenge 4: Engineering Team Engagement

**Issue:** Developers may lack carbon literacy and see sustainability as secondary to feature delivery and performance objectives.

**Solution:**

- Integrate carbon metrics into existing performance dashboards  
- Frame carbon efficiency as software quality and cost optimization (strong correlation in cloud computing)  
- Provide training on green software practices  
- Recognize and reward carbon reduction achievements  
- Embed SCI considerations into architecture reviews and design processes  
- Start with pilot projects to demonstrate value before scaling

#### Challenge 5: Auditor Acceptance

**Issue:** SCI is relatively new as an ISO standard (March 2024), and not all CSRD auditors will be familiar with the methodology or comfortable with software-specific carbon accounting.

**Solution:**

- **Engage auditors early** in the implementation process  
- Provide educational materials on SCI and ISO/IEC 21031:2024  
- Prepare comprehensive documentation of methodologies and assumptions  
- Be prepared to provide additional verification steps beyond standard SCI documentation  
- Consider engaging sustainability consultants with both CSRD and software carbon expertise  
- Plan additional time and budget for auditor education and review

---

## 6\. Benefits and Business Case

### 6.1 CSRD Compliance Benefits

**1\. Risk Reduction**

- **Regulatory confidence**: Demonstrates proactive approach to emerging requirements  
- **Methodology rigor**: Creates structured documentation and calculation approach  
- **Future-proofing**: Anticipates likely evolution of software-specific guidance  
- **Completeness**: Addresses Scope 3 complexity with documented methodology

**2\. Quality Enhancement**

- **Granular visibility**: Component-level insights can exceed minimum disclosure requirements  
- **Data lineage**: Clearer traceability from operations to reported emissions  
- **Transparency**: Builds stakeholder trust through methodological rigor  
- **Credibility**: Adoption of recognized ISO standard demonstrates commitment to best practice

**3\. Efficiency Gains**

- **Automation potential**: SCI enables systematic, repeatable measurement  
- **Scalability**: Applicable across entire software portfolio  
- **Integration**: Complements rather than duplicates GHG Protocol processes  
- **Resource optimization**: Focuses effort on material emission sources

### 6.2 Operational and Strategic Benefits

**1\. Cost Optimization**

- **Energy costs**: Software efficiency directly reduces electricity expenses  
- **Infrastructure spend**: Hardware efficiency lowers capacity requirements  
- **Cloud costs**: Optimized resource utilization decreases cloud bills (strong correlation between carbon and cost in cloud computing)  
- **Long-term savings**: Carbon-efficient architectures compound savings over time

**Illustrative ROI Example:** The following is a hypothetical example to demonstrate potential value:

*A financial services company implementing SCI-driven optimizations across a microservices platform:*

- **Baseline**: 10,000 tCO2e annually from application workloads  
- **Intervention**: Optimization sprint focusing on top 5 carbon-intensive services  
- **Results**: 25% reduction in SCI scores across targeted services  
- **Impact**:  
  - Carbon reduction: 2,500 tCO2e  
  - Cloud cost savings: €125,000 annually (at €0.05/kWh)  
  - Investment: €50,000 in engineering time  
  - **Payback**: 5 months  
  - **3-year NPV**: €325,000

*Note: This is an illustrative example. Actual results will vary significantly based on organizational context, existing efficiency, workload characteristics, and implementation approach.*

**2\. Competitive Advantage**

- **Customer requirements**: Increasing number of enterprise customers require supplier emissions data  
- **Procurement criteria**: ESG performance becoming a selection factor in RFPs  
- **Differentiation**: Green software credentials can distinguish offerings in competitive markets  
- **Talent attraction**: Sustainability commitments resonate with values-driven employees

**3\. Innovation Catalyst**

- **Architectural evolution**: Carbon constraints drive innovation in system design  
- **Performance gains**: Energy efficiency often correlates with improved performance  
- **Product features**: Carbon-aware capabilities create potential new product opportunities  
- **Learning organization**: Cross-functional carbon literacy enhances broader capabilities

**4\. Stakeholder Value**

- **Investor confidence**: Demonstrates sophisticated ESG management and risk oversight  
- **Customer trust**: Transparent carbon reporting builds B2B and B2C credibility  
- **Employee engagement**: Meaningful sustainability action aligns with workforce values  
- **Social license**: Contributes to broader climate action and corporate citizenship

### 6.3 Quantified Business Case

Organizations can develop a business case across multiple value dimensions. The following are indicative ranges that will vary significantly by organization:

#### Direct Cost Savings (Indicative)

| Source | Annual Value (indicative) | Notes |
| :---- | :---- | :---- |
| Cloud cost reduction | €100k \- €1M+ | Scale dependent; assumes 10-30% efficiency gains achievable |
| On-premise energy costs | €50k \- €500k | Data center PUE and efficiency improvements |
| Hardware lifecycle extension | €25k \- €250k | Reduced replacement frequency through better utilization |
| **Total Direct Savings** | **€175k \- €1.75M+** | Varies significantly by organization scale and starting efficiency |

#### Risk Mitigation Value (Indicative)

| Risk | Annual Value (indicative) | Notes |
| :---- | :---- | :---- |
| CSRD compliance confidence | €50k \- €250k | Avoided consultant fees, potentially reduced assurance costs |
| Carbon pricing hedge | €10k \- €100k+ | Anticipating potential EU carbon border adjustments or carbon taxes |
| Customer requirement fulfillment | €100k \- €1M+ | Revenue preservation through supplier qualification; highly variable |
| **Total Risk Value** | **€160k \- €1.35M+** | Primarily option value and downside protection |

#### Strategic Option Value

- **Market positioning**: Difficult to quantify but potentially significant for brand differentiation  
- **Talent acquisition**: Estimated 5-10% improvement in candidate conversion for sustainability-focused roles  
- **Innovation pipeline**: Carbon-aware computing features create potential new product opportunities  
- **Investor relations**: ESG performance increasingly material for valuation multiples in some sectors

**Total Potential Value**: €335k \- €3.1M+ annually for a mid-sized organization, with payback periods potentially under 12 months for implementation investments, though actual results will vary widely.

**Important**: These figures are indicative and based on industry estimates. Actual benefits will depend on numerous factors including current efficiency baseline, organizational size, workload characteristics, cloud vs. on-premise mix, and implementation quality. Organizations should conduct their own analysis based on their specific context.

## 7\. Example SCI integration in CSRD

**Company**: FinTech SaaS provider "PaymentCo" (fictional)   
**CSRD Requirement**: ESRS E1-6 \- Report Scope 3, Category 11 (Use of Sold Products) emissions **Challenge**: How to calculate emissions from customers using their payment processing API

---

### 7.1 Step 1: Define the Software Boundary and Functional Unit

**Software System**: Payment Processing API (runs on AWS)

**Components in Boundary**:

- API Gateway (authentication, routing)  
- Payment Processing Service (core business logic)  
- Database (transaction records)  
- Message Queue (async processing)

**Functional Unit (R)**: Per 1,000 payment transactions processed

---

### 7.2 Step 2: Calculate SCI Score

#### 7.2.1 Operational Emissions (O)

**Measurement approach**: Use AWS CloudWatch metrics \+ carbon intensity data

```
Component              | Energy (kWh) | Carbon Intensity | Emissions (gCO2e)
                      | per 1k txn   | (gCO2e/kWh)     | per 1k txn
--------------------- |------------- |----------------- |------------------
API Gateway           | 0.15         | 380 (eu-west-1) | 57
Processing Service    | 0.85         | 380             | 323
Database              | 0.45         | 380             | 171
Message Queue         | 0.25         | 380             | 95
--------------------- |------------- |----------------- |------------------
TOTAL                 | 1.70 kWh     |                 | 646 gCO2e

O = 646 gCO2e per 1,000 transactions
```

**Data sources**:

- Energy: AWS CloudWatch metrics \+ [Cloud Carbon Footprint](https://www.cloudcarbonfootprint.org/) models  
- Carbon intensity: [Electricity Maps](https://www.electricitymaps.com/) for eu-west-1 region (Ireland)


#### 7.2.2 Embodied Emissions (M)

**Measurement approach**: Allocate hardware manufacturing emissions to software usage

```
Server Type: AWS m5.large instances (4 instances avg)

TE (Total Embodied) = 1,200 kg CO2e per server (industry avg, Dell PowerEdge)
Expected Lifespan   = 4 years = 35,040 hours
Usage per 1k txn    = 2.5 hours (measured avg)

For 4 instances:
TE_total = 4 × 1,200 kg = 4,800 kg CO2e = 4,800,000 g CO2e

TS (Time-share) = 2.5 hours / 35,040 hours = 0.0000713

RS (Resource-share) = 100% (dedicated instances for this service)

M = TE × TS × RS
M = 4,800,000 × 0.0000713 × 1.0
M = 342 gCO2e per 1,000 transactions
```

**Data sources**:

- TE: [Dell Product Carbon Footprints](https://www.dell.com/learn/us/en/uscorp1/corp-comm-product-carbon-footprints) (representative server)  
- TS: AWS billing data \+ usage telemetry  
- RS: Architectural documentation (dedicated vs. shared resources)

#### 7.2.3 Total SCI Score

```
SCI = (O + M) / R
SCI = (646 + 342) / 1,000 transactions
SCI = 988 gCO2e per 1,000 transactions
SCI = 0.988 gCO2e per transaction
```

---

### 7.3 Step 3: Aggregate to Corporate GHG Inventory

**Annual transaction volume**: 50 million transactions

**Total annual emissions from this service**:

```
50,000,000 transactions × 0.988 gCO2e/transaction = 49,400,000 gCO2e
= 49.4 tonnes CO2e
```

**Classification**: Scope 3, Category 11 (Use of Sold Products)

- Emissions occur in AWS infrastructure (not owned/controlled by PaymentCo)  
- Result from customers using PaymentCo's sold service

---

### 7.4 Step 4: CSRD Disclosure (ESRS E1-6)

#### In the CSRD Report:

**Scope 3 Emissions by Category (excerpt)**:

```
Category 11: Use of Sold Products
Total emissions: 49.4 tCO2e

Calculation methodology:
We calculated emissions from customer usage of our payment processing API
using the Software Carbon Intensity (SCI) methodology (ISO/IEC 21031:2024).
The SCI score of 0.988 gCO2e per transaction includes:

- Operational emissions: Based on energy consumption measured via AWS CloudWatch
  metrics and modeled using Cloud Carbon Footprint methodology, with carbon
  intensity data from Electricity Maps for the eu-west-1 region (380 gCO2e/kWh).

- Embodied emissions: Allocated hardware manufacturing emissions based on
  industry-standard lifecycle assessment data for comparable server hardware,
  with time-share and resource-share allocation reflecting actual usage patterns.

The functional unit (per transaction) was selected to align with our revenue
model and enable year-over-year intensity tracking independent of business growth.

Data quality: 65% based on measured data (energy consumption), 35% based on
industry-standard models (embodied emissions). We are working with AWS to
obtain more granular workload-level emissions data.

This represents X% of our total Scope 3 emissions.
```

---

### 7.5 Step 5: Value Beyond Compliance

#### For Internal Optimization:

Now PaymentCo can see that:

**Database is the efficiency opportunity**:

```
Database: 171 gCO2e per 1k txn (17% of operational)
BUT: Represents 26% of total energy (0.45 / 1.70 kWh)
```

**Action**: Implement query optimization and caching **Target**: Reduce database energy by 40% **Expected result**:

- New Database emissions: 103 gCO2e per 1k txn  
- **New SCI score: 0.920 gCO2e per transaction** (7% improvement)  
- Annual savings: 3.4 tCO2e \+ \~€8,500 in AWS costs

#### For Target Setting (ESRS E1-4):

```
Baseline (2024): SCI = 0.988 gCO2e/transaction
Target (2027):   SCI = 0.690 gCO2e/transaction (30% reduction)

Action plan:
- Database optimization (2024): -7%
- Upgrade to ARM-based Graviton instances (2025): -15%
- Implement carbon-aware scheduling (2026): -8%

This intensity target demonstrates efficiency improvement even as
transaction volume grows.
```

---

### 7.6 What This Example Shows

#### ✅ SCI Provides:

1. **Granular calculation method** for a specific software service  
2. **Defensible methodology** with documented data sources  
3. **Component-level insight** (can see database is optimization opportunity)  
4. **Functional unit** that enables intensity-based targets  
5. **Audit trail** from measurements → calculation → disclosure

#### ✅ Maps to CSRD Requirements:

1. **ESRS E1-6**: Provides Scope 3 Category 11 emissions total (49.4 tCO2e)  
2. **ESRS E1-6 (para 44\)**: Documents calculation methodology as required  
3. **ESRS E1-4**: Enables intensity-based target setting (0.988 → 0.690)  
4. **ESRS E1-1**: Identifies specific decarbonization levers (database optimization, hardware upgrade)

#### ⚠️ Realistic Limitations:

1. **Data quality**: 35% based on models/estimates (embodied emissions)  
2. **Uncertainty**: AWS doesn't provide exact workload-level energy data  
3. **Assumptions**: Server hardware proxy, average utilization patterns  
4. **Documentation burden**: Requires detailed methodology disclosure

#### 🔍 Auditor Would Verify:

- Source of energy consumption data (AWS CloudWatch exports)  
- Carbon intensity data source (Electricity Maps API logs)  
- Embodied emissions LCA source (Dell documentation)  
- Transaction volume (billing system records)  
- Calculation logic (spreadsheet or tool outputs)  
- Year-over-year consistency (same methodology applied)

---

## 8\. Conclusion and Recommendations

### 8.1 Key Takeaways

1. **CSRD creates a reporting imperative**: Organizations subject to CSRD require robust methodologies for calculating and disclosing software-related emissions within their GHG inventories.  
     
2. **Software emissions are material**: For technology-oriented organizations, software represents a significant portion of Scope 2 and Scope 3 emissions, yet often remains poorly quantified.  
     
3. **A granularity gap exists**: GHG Protocol provides corporate-level guidance but lacks granularity for software-specific measurement and optimization.  
     
4. **SCI can help fill the gap**: The Software Carbon Intensity standard (ISO/IEC 21031:2024) provides a complementary, component-level methodology that can integrate with GHG Protocol and support ESRS E1 requirements.  
     
5. **Alignment is strong but not perfect**: SCI's core principles—elimination focus, gross reporting, systems thinking—align well with CSRD and ESRS E1 requirements, though gaps exist (e.g., market-based Scope 2).  
     
6. **Benefits extend beyond compliance**: SCI adoption can drive cost optimization, competitive advantage, and strategic value while supporting CSRD reporting obligations.  
     
7. **Implementation requires commitment**: Achieving mature SCI implementation requires investment in monitoring infrastructure, cross-functional collaboration, and sustained organizational commitment.  
     
8. **Auditor engagement is critical**: Early consultation with assurance providers is essential to ensure methodology acceptance.

### 8.2 Recommendations

#### For Organizations Subject to CSRD:

**Immediate Actions (0-3 months):**

1. **Assess software materiality**: Conduct preliminary evaluation of software emissions within double materiality assessment  
2. **Establish awareness**: Brief sustainability, engineering, and finance teams on SCI methodology  
3. **Identify pilot applications**: Select 2-3 representative applications for initial SCI calculation  
4. **Review data availability**: Audit existing monitoring, telemetry, and supplier data sources  
5. **Engage auditors early**: Discuss SCI approach with assurance providers before significant implementation

**Near-term Actions (3-9 months):**

6. **Calculate baseline SCI scores**: Measure current software carbon intensity for pilot applications  
7. **Integrate with GHG inventory**: Incorporate SCI-based calculations into broader Scope 2 and Scope 3 reporting  
8. **Develop reduction roadmap**: Identify optimization opportunities and set software-specific targets  
9. **Engage suppliers**: Request emissions data and SCI scores from cloud providers and software vendors  
10. **Build internal capability**: Train engineering teams on green software practices and SCI methodology

**Medium-term Actions (9-18 months):**

11. **Scale implementation**: Extend SCI measurement across full software portfolio  
12. **Automate measurement**: Integrate carbon tracking into monitoring and observability platforms  
13. **Report progress**: Include software emissions data and SCI metrics in ESRS E1 disclosures  
14. **Pursue assurance**: Prepare documentation and evidence for limited assurance of software emissions  
15. **Drive optimization**: Implement energy efficiency, hardware efficiency, and carbon-aware improvements

#### For Software Vendors and Cloud Providers:

1. **Consider SCI transparency**: Evaluate calculating and disclosing SCI scores for products and services  
2. **Enable customer compliance**: Provide granular emissions data to support customer CSRD reporting  
3. **Consider contract alignment**: Evaluate including emissions data sharing provisions in customer agreements  
4. **Collaborate on standards**: Engage with Green Software Foundation and industry groups on methodology refinement

#### For Industry Associations and Standards Bodies:

1. **Promote awareness**: Educate members on SCI methodology and CSRD alignment  
2. **Develop sector guidance**: Create industry-specific implementation guidelines and case studies  
3. **Engage with regulators**: Discuss software-specific measurement challenges with EFRAG and EU regulators  
4. **Support interoperability**: Encourage SCI integration with broader sustainability reporting frameworks

### 8.3 Looking Ahead

The intersection of software sustainability and regulatory reporting is rapidly evolving. Several trends will likely shape the landscape:

**1\. Regulatory Convergence**

- Global alignment of sustainability reporting (ISSB, SEC, CSRD)  
- Potential increasing specificity for digital sectors and software emissions  
- Mandatory Scope 3 reporting potentially extending beyond Europe

**2\. Technical Maturity**

- Improved cloud provider transparency and granular emissions APIs  
- Development of automated SCI calculation tools  
- Integration of carbon metrics into DevOps and CI/CD pipelines

**3\. Market Dynamics**

- Carbon-efficient software as a potential competitive differentiator  
- Supplier emissions performance as procurement criterion  
- Green software emerging as a distinct category

**4\. Policy Evolution**

- Potential carbon border adjustments affecting digital services  
- Possible sector-specific ESRS standards (including technology/software)  
- Integration of software emissions into science-based targets guidance

Organizations that proactively explore the SCI standard may be better positioned to navigate these trends, supporting both compliance and competitive positioning in an increasingly carbon-conscious digital economy.

### 8.4 Call to Action

**For CSRD-Affected Organizations:** Software emissions represent both a disclosure challenge and a potential opportunity for value creation. We recommend:

1. **Evaluate SCI for your CSRD implementation plan**  
2. **Consider piloting SCI calculations** for key applications  
3. **Engage Green Software Foundation resources and community**  
4. **Consult with auditors and advisors** on integration approach  
5. **Share learnings** to advance industry best practice

The adoption of the Software Carbon Intensity standard is not merely a compliance exercise—it represents a commitment to transparency, efficiency, and leadership in the transition to sustainable digital business models.

**Important Final Note**: This white paper provides general information and analysis about how SCI can potentially support CSRD compliance. It does not constitute legal, accounting, or professional advice. The SCI standard is complementary to, not required by, ESRS E1. Organizations should:

- Consult qualified legal, accounting, and sustainability advisors regarding specific CSRD compliance obligations  
- Engage assurance providers early to validate chosen methodologies  
- Recognize that alternative approaches may be equally valid  
- Understand that regulatory guidance continues to evolve  
- Exercise appropriate professional judgment in applying these methodologies

---

## 9\. Resources and References

### 9.1 Primary Standards and Frameworks

**Software Carbon Intensity (SCI)**

- ISO/IEC 21031:2024: [https://www.iso.org/standard/86612.html](https://www.iso.org/standard/86612.html)  
- SCI Specification (Green Software Foundation): [https://sci.greensoftware.foundation/](https://sci.greensoftware.foundation/)  
- Green Software Foundation: [https://greensoftware.foundation/](https://greensoftware.foundation/)  
- SCI GitHub Repository: [https://github.com/Green-Software-Foundation/sci](https://github.com/Green-Software-Foundation/sci)  
- SCI for AI Specification: [https://sci-for-ai.greensoftware.foundation/](https://sci-for-ai.greensoftware.foundation/)  
- SCI for Web Specification: [https://web-sci.greensoftware.foundation/](https://web-sci.greensoftware.foundation/) 

**Corporate Sustainability Reporting Directive** 

- CSRD Directive (EU) 2022/2464: [https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022L2464](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022L2464)  
- European Sustainability Reporting Standards (ESRS): [https://eur-lex.europa.eu/legal-content/en/TXT/?uri=CELEX:32023R2772](https://eur-lex.europa.eu/legal-content/en/TXT/?uri=CELEX:32023R2772)  
- European Commission Finance Page: [https://finance.ec.europa.eu/capital-markets-union-and-financial-markets/company-reporting-and-auditing/company-reporting/corporate-sustainability-reporting\_en](https://finance.ec.europa.eu/capital-markets-union-and-financial-markets/company-reporting-and-auditing/company-reporting/corporate-sustainability-reporting_en)

**GHG Protocol**

- Corporate Accounting and Reporting Standard: [https://ghgprotocol.org/corporate-standard](https://ghgprotocol.org/corporate-standard)  
- Corporate Value Chain (Scope 3\) Standard: [https://ghgprotocol.org/corporate-value-chain-scope-3-standard](https://ghgprotocol.org/corporate-value-chain-scope-3-standard)  
- Scope 3 Calculation Guidance: [https://ghgprotocol.org/scope-3-calculation-guidance-2](https://ghgprotocol.org/scope-3-calculation-guidance-2)

### 9.2 Regulatory Guidance

**EFRAG (European Financial Reporting Advisory Group)**

- EFRAG Main Site: [https://www.efrag.org/](https://www.efrag.org/)  
- ESRS Implementation Guidance: [https://www.efrag.org/Activities/2010051123028442/European-Sustainability-Reporting-Standards-ESRS](https://www.efrag.org/Activities/2010051123028442/European-Sustainability-Reporting-Standards-ESRS)

**European Commission Resources**

- Implementing and Delegated Acts (CSRD): [https://finance.ec.europa.eu/regulation-and-supervision/financial-services-legislation/implementing-and-delegated-acts/corporate-sustainability-reporting-directive\_en](https://finance.ec.europa.eu/regulation-and-supervision/financial-services-legislation/implementing-and-delegated-acts/corporate-sustainability-reporting-directive_en)  
- EU Taxonomy Regulation: [https://finance.ec.europa.eu/sustainable-finance/tools-and-standards/eu-taxonomy-sustainable-activities\_en](https://finance.ec.europa.eu/sustainable-finance/tools-and-standards/eu-taxonomy-sustainable-activities_en)

### 9.3 Implementation Resources

**Green Software Foundation Resources**

- Green Software Practitioner Course: [https://learn.greensoftware.foundation/](https://learn.greensoftware.foundation/)  
- Carbon Aware SDK: [https://github.com/Green-Software-Foundation/carbon-aware-sdk](https://github.com/Green-Software-Foundation/carbon-aware-sdk)  
- SCI Open Data Project: [https://github.com/Green-Software-Foundation/sci-data](https://github.com/Green-Software-Foundation/sci-data)

**Cloud Provider Carbon Tools**

- AWS Customer Carbon Footprint Tool: [https://aws.amazon.com/aws-cost-management/aws-customer-carbon-footprint-tool/](https://aws.amazon.com/aws-cost-management/aws-customer-carbon-footprint-tool/)  
- Microsoft Azure Carbon Optimization: [https://azure.microsoft.com/en-us/blog/microsoft-azure-delivers-new-emissions-insights-and-reporting-capabilities/](https://azure.microsoft.com/en-us/blog/microsoft-azure-delivers-new-emissions-insights-and-reporting-capabilities/)  
- Google Cloud Carbon Footprint: [https://cloud.google.com/carbon-footprint](https://cloud.google.com/carbon-footprint)

**Industry Guidance**

- Initiative Climat International (iCI) Software Scope 3 Guidance: [https://www.unpri.org/news-and-press/initiative-climat-international-publishes-new-guidance-on-ghg-accounting-for-tech-and-software-companies/11633.article](https://www.unpri.org/news-and-press/initiative-climat-international-publishes-new-guidance-on-ghg-accounting-for-tech-and-software-companies/11633.article)  
- Science Based Targets Initiative (SBTi): [https://sciencebasedtargets.org/](https://sciencebasedtargets.org/)  
- Partnership for Carbon Accounting Financials (PCAF): [https://carbonaccountingfinancials.com/](https://carbonaccountingfinancials.com/)  
- W3C Web Sustainability Guidelines: https://w3c.github.io/sustyweb/

### 9.4 Research and Analysis

**Academic and Industry Research**

- "Beyond Boundaries: GHG Accounting for Tech and Software Companies" (iCI, 2025\)  
- CSRD: FAQs" (Deloitte, 2024\)  
- "Principles of Green Software Engineering" (Green Software Foundation)  
- "State of Green Software" (Green Software Foundation, Annual Report)

**Case Studies and Best Practices**

- Green Software Foundation Case Studies: [https://greensoftware.foundation/articles](https://greensoftware.foundation/articles)  
- Carbon-Aware Computing Examples: [https://github.com/Green-Software-Foundation/carbon-aware-sdk/tree/dev/docs](https://github.com/Green-Software-Foundation/carbon-aware-sdk/tree/dev/docs)  
- CSRD Implementation Case Studies: Available from major consultancies (Deloitte, PwC, EY, KPMG)

### 9.5 Training and Professional Development

**Green Software Foundation**

- Linux Foundation Green Software for Practitioners (LFC131): [https://training.linuxfoundation.org/training/green-software-for-practitioners-lfc131/](https://training.linuxfoundation.org/training/green-software-for-practitioners-lfc131/)  
- Green Software Foundation Slack Community: [https://greensoftware.foundation/community](https://greensoftware.foundation/community)

**CSRD and ESRS Training**

- EFRAG Webinars and Training Materials: [https://www.efrag.org/News](https://www.efrag.org/News)  
- Professional services firm CSRD readiness programs  
- ESRS E1 Technical Deep-Dives (various providers)

### 9.6 Software and Tools

**Open-Source Tools**

- Cloud Carbon Footprint: [https://www.cloudcarbonfootprint.org/](https://www.cloudcarbonfootprint.org/)  
- Carbon CI: [https://github.com/green-coding-solutions/carbon-ci](https://github.com/green-coding-solutions/carbon-ci)  
- Climatiq API: [https://www.climatiq.io/](https://www.climatiq.io/) (emissions factors)  
- Electricity Maps API: [https://www.electricitymaps.com/](https://www.electricitymaps.com/) (real-time grid intensity)

**Commercial Platforms** (Note: Inclusion does not constitute endorsement)

- Normative: [https://normative.io](https://normative.io/)  
- Persefoni: [https://www.persefoni.com](https://www.persefoni.com/)   
- Greenly: [https://greenly.earth](https://greenly.earth)   
- Plan A: [https://plana.earth](https://plana.earth/)  
- Watershed: [https://watershed.com](https://watershed.com/)  
- Sweep: [https://www.sweep.net](https://www.sweep.net/)  
- IBM Envizi: [https://www.ibm.com/products/envizi](https://www.ibm.com/products/envizi)

### 9.7 Contact Information

**Green Software Foundation** Website: [https://greensoftware.foundation/](https://greensoftware.foundation/) Email: [info@greensoftware.foundation](mailto:info@greensoftware.foundation)

**European Commission DG FISMA** (Financial Stability, Financial Services and Capital Markets Union) Website: [https://finance.ec.europa.eu/](https://finance.ec.europa.eu/) Email: [FISMA-SUSTAINABLE-FINANCE@ec.europa.eu](mailto:FISMA-SUSTAINABLE-FINANCE@ec.europa.eu)

**EFRAG (European Financial Reporting Advisory Group)** Website: [https://www.efrag.org/](https://www.efrag.org/) Email: [info@efrag.org](mailto:info@efrag.org)

### 9.8 Key Sources Cited

This white paper draws on the following verified sources:

- ISO/IEC 21031:2024 (published March 2024): [https://www.iso.org/standard/86612.html](https://www.iso.org/standard/86612.html)  
- SCI for AI Specification (ratified December 2024): [https://greensoftware.foundation/articles/sci-ai-specification-ratified-standard-for-measuring-ai-emissions-across-the/](https://greensoftware.foundation/articles/sci-ai-specification-ratified-standard-for-measuring-ai-emissions-across-the/)  
- Scope 3 emissions research showing 65-95% of total footprint: [https://www.lseg.com/content/dam/ftse-russell/en\_us/documents/research/solving-scope-3-conundrum.pdf](https://www.lseg.com/content/dam/ftse-russell/en_us/documents/research/solving-scope-3-conundrum.pdf)

---

## Document Information

**Version**: 2.0 (Revised) **Publication Date**: January 2026 **Authors**: \[Your Organization Name\] **Contact**: \[Contact Information\]

**License**: This white paper is published under a Creative Commons Attribution 4.0 International License (CC BY 4.0). You are free to share and adapt this material with appropriate attribution.

**Disclaimer**: This white paper provides general information and analysis. It does not constitute legal, accounting, or professional advice. The Software Carbon Intensity (SCI) standard is a complementary tool that may support CSRD compliance but is not explicitly required by ESRS E1. Organizations should consult qualified advisors regarding their specific CSRD compliance obligations and sustainability reporting requirements. Regulatory guidance continues to evolve, and organizations should stay informed of the latest developments from EFRAG and the European Commission. 

**Acknowledgments**: This white paper draws on publicly available resources from the Green Software Foundation, European Commission, EFRAG, GHG Protocol, and various industry sources. We acknowledge the pioneering work of these organizations in advancing sustainable software practices and corporate sustainability reporting. Special thanks to the Green Software Foundation for developing and maintaining the SCI specification and achieving its ISO standardization.

---

**For inquiries regarding this white paper or to discuss SCI implementation support, please contact:**

\[Your Organization Contact Information\]

---

*Building a sustainable digital future, one line of code at a time.*  
