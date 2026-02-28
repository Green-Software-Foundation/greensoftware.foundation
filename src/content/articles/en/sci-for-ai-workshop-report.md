---
title: "SCI for AI Workshop Report "
date: "2025-07-03"
summary: "In early 2025, AI experts from GSF member organizations participated in a workshop designed to define our approach to AI measurement and evaluate existing metrics. Today, we share the outcomes of these sessions. "
teaserText: "Helping developers understanding and reducing the carbon footprint of AI systems."
mainImage: "/assets/articles/sci-for-ai-workshop-report/main.png"
featured: true
organizations:
  - "Accenture"
  - "Google"
  - "Siemens"
  - "UBS"
  - "Microsoft"
additionalOrgCount: 10
---

The Software Carbon Intensity (SCI) specification provides a standardized method for measuring the carbon emissions associated with software systems. As Artificial Intelligence (AI) becomes an increasingly resource-intensive component of modern software, it is crucial to extend SCI methodology to account for the unique characteristics of AI. 

> "The purpose of this proposed specification is to assist AI practitioners—developers, data scientists, engineers, and decision-makers—in understanding and reducing the carbon footprint of AI systems. By making informed choices about model design, computational efficiency, and deployment strategies, practitioners can minimize emissions while maintaining performance." (Navveen Balani, Software Standards Working Group Chair)

SCI for AI builds on the core principles of the SCI specification. However, it also expands and refines these principles in order to address the distinct architecture, deployment patterns, and operational complexity of AI systems.

In early 2025, AI experts from GSF member organizations participated in a series of workshops hosted by the Software Standards Working Group. These sessions were designed to define the GSF approach to AI measurement as well as evaluate existing metrics. The outcomes laid the groundwork for creating the SCI for AI specification, which extends the Software Carbon Intensity (SCI) specification with AI-specific considerations—a major step toward addressing the complexities of measuring AI-related carbon emissions. The material presented in this document reflects a consensus among participating members: 

Angel Cataron (Siemens), Brian O'Kelley (Scope3), Charlene Wong (IMDA Singapore), Daniel Lazaro (Aveva), Daniel Schien (University of Bristol), Facundo Armas (Globant), Henry Richardson (WattTime), Hongliu CAO (Amadeus), Jacques Kluska (Schneider Electric), James Dietrich (Electricity Maps), Jose Alejandro Sanchez (ACIS), Lena Hoffmann (German Informatics Society), Navveen Balani (Accenture), Noah Broestl (BCG), Samuel Rincé (Boavitza), Shiv Asthana (Trustwise), Stuart Sweeney Smith (Google), Tamar Eilam (IBM), Tammy McClellan (Microsoft), Vinjosh Varghese (UBS). 

Here, we share the key insights and findings, and what’s coming next.

## Scope 

First, participants needed to establish the scope of the SCI for AI while recognizing the diversity and rapid evolution of AI technologies. To provide clarity and coverage across the ecosystem, the SCI for AI is designed to apply to both foundational AI paradigms and practical application areas. It also incorporates emerging categories of AI innovation to ensure adaptability over time.
The SCI series of standards is designed to incentivize direct engineering optimizations that reduce the real-world carbon footprint of software systems. This focus on actionable and measurable efficiency improvements is central to its purpose.

### Foundational AI Paradigms 

These paradigms represent the fundamental approaches to AI model development and learning. During the workshop, they were classified as follows:

- Machine Learning (ML)
- Supervised Learning
- Unsupervised Learning
- Reinforcement Learning
- Deep Learning
- Symbolic AI (Classical AI)
- Probabilistic & Bayesian AI
- Evolutionary Algorithms
- Fuzzy Logic
- Hybrid AI ((multi-paradigm systems)

Each paradigm has different carbon implications, depending on factors like hardware use, retraining frequency, and data dependency. The SCI for AI supports tracking emissions throughout each stage, from model design to retraining and deployment.

### Emerging AI Technologies

- Generative AI
- Text Generation (e.g., GPT)
- Image Generation (e.g., DALL·E)
- Music, Video, and Speech Generation
- Code Generation 
- Agentic AI (Autonomous Decision-Making)

As agentic AI systems grow in autonomy, we must be mindful of their design and environmental impact. Carbon accounting becomes especially complex when these systems trigger multiple downstream, often non-AI, services. Accountability in such chains is still in the early stages of exploration. 

We should also aim for efficient integration. For example, a restaurant booking should ideally utilize APIs between the user app and the table management system, rather than relying on two AI voice agents communicating with each other. 

### Application-Specific AI Solutions

Application-specific AI solutions include, but are not limited to: 

- Predictive Analytics
- Prescriptive Analytics  
- Scientific ML 
- Computer Vision
- Natural Language Processing (NLP)
- Speech Recognition/Processing

## Existing AI Measurement Metrics 

An important early step in developing the SCI for AI involves analyzing the current landscape of AI measurement metrics. The list is not exhaustive, but the metrics reviewed here reflect the main frameworks and indicators discussed across industry, academia, and standards bodies.

This section summarizes selected existing metrics and evaluates them using the rubric developed during the SCI for AI workshops. The purpose of this evaluation is to build an interoperable, well-informed foundation, aligning with existing work and highlighting areas for improvement. 

The characteristics of each metric may vary regarding specific user needs. Because each metric serves different purposes and audiences, it’s important to clarify why a metric is useful and who benefits most from it. This helps users select the right tools to meet their specific sustainability goals.

### [Green AI Index](https://www.uasdf.org/whitepaper-ai/blog-post-title-one-4g6n3?srsltid=AfmBOorSqyciv1U-ytB1sUfYR7aewFfduTI5-oQzApweeXyk35gbmnBq)

#### Description

Released by the [Green AI Institute](https://www.greenai.institute/) in 2024, the tool aims to “promote transparency, encourage more sustainable practices, incentivize carbon-efficient innovations, and guide policymakers, organizations, and developers in reducing their environmental footprint.”

The metric comes in two variants: the Data Center Index, which maps GHG Protocol scopes 1–3 to data center operations, and the AI Model Index, which is more relevant to SCI for AI. Unlike traditional function-based breakdowns (e.g., training vs. inference), the model index categorizes emissions into operational and embodied components and includes hardware such as GPUs, CPUs, SSDs, and renewable infrastructure.

Functional Unit

• Emissions per Training Cycle: 

The total carbon emissions (in CO2e) associated with the entire training process of the AI Model, from initial data processing to the final model.

• Emissions per Inference: 

The carbon emissions (in CO2e) produced by a single inference made by the AI Model. This includes the energy consumed during the prediction process and any cooling requirements.

Impacts 

The tool focuses on Carbon emissions (CO2e) and includes a water footprint component (m3/L). 

#### Strengths & Trade-Offs 

As an environmental impact assessment and optimization tool across energy, carbon, and water footprints, its core strength lies in strong regulatory alignment across major jurisdictions, including the EU, USA, and China. By providing a software and hardware perspective, it supports alignment between infrastructure design and software orchestration. 

The requirement for highly granular, direct measurements and the current lack of real-world case studies may limit its ease of adoption in the short term.

#### Who should care 

- Policymakers setting environmental regulations
- AI leaders and sustainability teams aiming to minimize carbon and water footprints
- Hardware architects and silicon vendors developing energy-efficient AI infrastructure
- Software developers and AI/ML engineers optimizing model design, training, and inference for sustainability

#### Data Sources 

Requires highly detailed measurement data. Currently, it doesn’t provide an actual case study in the whitepaper. 

**⚠️ NOTE Carbon offsets are mentioned as a valid inventory item for the Data Center index** but not mentioned for the Green AI model index–the suggestion is to make decisions based on the jurisdiction you are operating in.

### [EcoLogits](https://ecologits.ai/latest/methodology/llm_inference/) 

#### Description

EcoLogits provides an API that allows users to estimate the energy consumption and GHG emissions of specific AI models by combining real-time usage data with lifecycle-based environmental modeling. This method focuses on various lifecycle phases, including raw material extraction, manufacturing, and transportation, collectively referred to as embodied impacts.

It is not designed as a calculator but rather as a lookup service for standardized emissions data.

Functional Unit

• CO2e / request

Impacts

• Carbon emissions (CO2e)

#### Strengths & Trade-offs

The metric **excludes** training impacts, focusing solely on inference-related energy use. Its key strength is the ease of access and integration—developers can retrieve emissions data programmatically without needing to run measurements themselves, especially when working with black-box proprietary models. It can serve as a data source for conducting granular assessments of AI operations. The metrics prove useful for reporting environmental impact when direct emissions data is unavailable, but approximate values are still valuable for transparency or stakeholder communication.

However, this simplicity comes with limitations in scope and transparency, as the methodology behind the values is not user-adjustable, and broader life cycle phases are omitted. It estimates emissions for Generative AI and LLM models only through APIs. 

#### Who should care 

- AI product developers needing quick emissions data
- Sustainability teams reporting impact for stakeholder transparency
- Infrastructure teams managing operational efficiency 

#### Data Sources

Energy consumption and environmental impacts are tracked using Gen AI models through APIs. It supports major LLM providers such as OpenAI, Anthropic, Mistral AI, and others. 

### [EnergyScore](https://huggingface.github.io/AIEnergyScore/)

#### Description 

Energy Score was released by Hugging Face, Salesforce, Cohere, Meta, and Carnegie Mellon University. The metric focuses exclusively on GPU energy consumption during the inference phase. It uses CodeCarbon to measure energy use during model execution on standardized Hugging Face (HF) instances, with results automatically published to a public leaderboard.

Functional Unit

• CO2e/1000 requests

Impacts

• Carbon emissions (CO2e)

#### Strengths & Trade-offs

Its core strength lies in its use of direct, consistent measurements, which allows for highly reproducible and fair benchmarking across models. EnergyScore can be used specifically to compare the efficiency of models during inference and selecting models for real-time applications where inference costs dominate (chatbots, APIs). 

However, this comparability comes at the cost of a narrow application boundary—by isolating only inference on specific hardware configurations, the metric does not account for broader life-cycle impacts such as training, data handling, or infrastructure-related emissions.

#### Who should care 

- ML developers and engineers benchmarking models for efficiency 
- Product teams optimizing AI-powered APIs for lower energy use

#### Data Sources

Direct measurements made for models run on HF instances using CodeCarbon.

## Rubric 

An essential step in developing the SCI for AI involves establishing a common evaluation framework to guide both the assessment of external AI measurement metrics and the shaping of our own specifications. The goal is not to produce a specification that "ticks every box" but to clarify trade-offs, define priorities, and align incentives with what truly matters for sustainable AI.

This rubric is built to help navigate an evolving field while ensuring the standard supports actionable, trustworthy, and policy-aligned outcomes. It reflects technical concerns but also highlights choices about what carbon measurement is trying to incentivize. Without clarity on that, even the best metrics risk steering innovation in an unintended direction.

Below are the key dimensions of the rubric, grouped by focus area: 

### Adoption 

- **Flexibility:** Can the metric adapt to emerging AI architectures, including agentic AI, multi-modal systems, or AI that interacts with third-party APIs during inference?
- **Granularity:** Does the framework break down emissions by component, system stage, or time? Can it provide actionable insight on where emissions come from and where reductions can be made?
- **Run-Time & Design-Time Applicability:** Is it possible to estimate the environmental impact of an AI system before deployment, during design, planning, or procurement?
- **Explainability (1–5):** How understandable is the method to non-technical audiences? Can the results be clearly communicated to stakeholders, end-users, or policymakers?
- **Broad Scope:** Can the framework be applied to the full spectrum of AI paradigms and applications, including symbolic AI, generative AI, and predictive models, as defined in the scope?
- **Open Source & Proprietary Applicability:** Is it usable for both open models (e.g., LLaMA running locally) and closed models (e.g., ChatGPT or Claude), either through direct measurement or disclosure-based methodologies?

### Pathway to Policy & Certification

- **Consensus-Based Development:** Was the framework developed through collaboration across sectors, including organizations with competing interests? Standards developed through consensus are far more likely to be eventually adopted as policy, as broad participation ensures trust and adoption.
- **IPR Considerations:** Has the metric been developed and released with a Patent Policy, for example, W3C or RAND? 

### Existing Standards Alignment:

Is the methodology aligned with established practices such as Life Cycle Assessment (LCA) or the Greenhouse Gas Protocol (GHG)? 

Does it aim to complement or extend these standards, or is it designed as a new standard for a different audience, purpose, or goal?

| Criteria | GreenAI Index | EcoLogits | Energy Score | Berthelot et al (2024) | 
|----------|---------------|-----------|--------------|------------------------|
| **Flexibility** | ✅ | ❌ | ❌ | ✅ |
| **Granular** | | | | | 
| • Component | ✅ | ❌ | ❌ | ✅ | 
| • Time | ❌ | ❌ | ❌ | ❌ | 
| **RunTime & DesignTime** | ✅ | ✅ | ❌ | ✅ | 
| **Explainability (1-5)** | 3 | 3 | 4 | 3 | 
| **Broad Scope** | ✅ | ✅ | ✅ | ✅ | 
| **Open Source & Proprietary** | ✅ | ✅ | ✅ | ✅ | 
| **Pathway to certification & policy** | | | | | 
| • Consensus | ❌ | ❌ | ❌ | ❌ | 
| • IPR | ❌ | ❌ | ❌ | ❌ | 
| • Alignment to Existing Measurement Standards (ISO, LCA, GHG) | ✅ | ✅ | ❌ | ✅ | 

## Measurement as a Tool for Incentivization 

A key distinction between the SCI philosophy and other metrics is that it is, first and foremost, designed to incentivize behaviors, and only the behaviors we want. We believe that if you focus on developing a metric without paying attention to what that metric incentivizes, you will end up promoting the wrong behaviors, or your incentivization of the right behaviors will be accidental rather than intentional.

Every measurement standard implicitly shapes behavior. By defining what is measured and how a standard establishes the boundaries of what is optimized. For example, some existing frameworks *incentivise* the purchase of carbon offsets, inadvertently shifting focus away from direct reductions within the value chain. Others may *disincentivize* potentially beneficial practices, such as time- or location-shifting of compute workloads, to align with low-carbon energy availability.

As outlined in the scope section, the SCI specification focuses on incentivizing measurable engineering improvements that directly reduce the carbon footprint of software.

For SCI for AI to achieve its intended impact, it must *incentivize* a clear and agreed-upon set of positive actions. These include, but are not limited to:

- Efficiency improvements to the hosting infrastructure.
- Efficiency improvements in silicon chips.
- Efficiency improvements in the model architecture.
- Reducing the carbon footprint of training.
- Reducing the carbon footprint of data collection and processing.
- Running the AI system at times or in regions with cleaner electricity.
- Running the AI system on edge devices when it’s more efficient. 
- Leverage pre-trained models and transfer learning.
- Optimizing the size of models.
- Use efficient file formats.
- Evaluate tradeoffs between accuracy and efficiency.
- Realizing cost savings through improved efficiency (e.g., reduced cloud time)

Other Green AI patterns as detailed here: [https://patterns.greensoftware.foundation/catalog/ai](https://patterns.greensoftware.foundation/catalog/ai)

| | **GreenAI Index** | **EcoLogits** | **Energy Score** | **Berthelot et al (2024) LCA** |
|---|---|---|---|---|
| Efficiency improvements to the hosting infrastructure | ✅ | ❌ | ❌ | ✅ |
| Efficiency improvements in silicon | ✅ | ❌ | ❌ | ✅ |
| Efficiency improvements in the model architecture | ✅ | ✅ | ✅ | ✅ |
| Reducing the carbon footprint of training | ✅ | ❌ | ❌ | ✅ |
| Reducing the carbon footprint of data collection and processing | ❌ | ❌ | ❌ | ❌ |
| Running the AI system at times or in regions with cleaner electricity | ✅ | ☑️* | ❌ | ✅ |
| Running the system on edge devices | ✅ | ❌ | ❌ | ✅ |
| Leverage pre-trained models and transfer learning | ✅ | ❌ | ❌ | ✅ |
| Optimising the size of models | ✅ | ✅ | ✅ | ❌ |
| Use efficient file formats | ✅ | ❌ | ❌ | ❌ |
| Evaluate tradeoffs between accuracy and efficiency | ❌ | ❌ | ❌ | ❌ |

*[The Energy Score intentionally normalizes regional grid intensity data to promote cross-model comparability, which may limit its granularity for localized optimization efforts.](https://huggingface.github.io/AIEnergyScore/)

## Green AI 

### Lifecycle stages 

The Green AI Committee (GAIC) at the GSF [has defined Green AI ](https://greensoftware.foundation/articles/green-ai-position-paper)as: 

*Green AI focuses on reducing the environmental impact of AI systems throughout their lifecycle. It emphasizes the standardization of measurement and metrics to ensure transparency, strengthen confidence in AI technologies, and drive continual improvement.*

The Committee identified these lifecycle stages that apply to Green AI: 

| Phase | Activities |
|---|---|
| **Prepare** | **Research and Problem Definition:**<br>• Define the problem and identify solution requirements (engaging with end-users)<br>• Identify the problem + outcome<br>• Stakeholder engagement & expectations |
| **Data Engineering (Build)** | **Data Identification and Collection:**<br>• Data Collection<br>• Collect data sources and prepare them (cleaning, normalizing)<br><br>**Data Preparation:**<br>• Data Pre-Processing<br>• Synthetic data generation |
| **System Integration** | **Model Development:**<br>• Identify appropriate models and prepare them<br>• Feature Engineering<br><br>**Model Training:**<br>• Identify appropriate evaluation measures<br>• Model Selection<br>• Benchmarking<br>• Set up distributed training pipelines<br>• Define scheduling and resource allocation<br><br>**Model Testing**<br><br>**Model Evaluation:**<br>• Cost/Resource Analysis<br>• Optimize compute and resource cost spend<br><br>**System Integration:**<br>• System Integration Design<br>• System Integration Development<br>• System Integration Testing |
| **Runtime Operations** | **Model Deployment:**<br>• Deployment, roll-out, and people training<br><br>**Model Operation (including inferencing):**<br>• Inferencing<br><br>**Monitoring:**<br>• Monitoring, iteration & reporting<br>• Model Performance Monitoring<br>• FinOps<br>• Consumer (Edge) Device / Datacenter / Cloud Usage<br><br>**Maintenance (for example, model degradation)** |
| **End-of-Life/Disposal** | **Decommissioning an AI system** |

The SCI measurement framework shall be designed to incentivize optimizations across all stages of the AI lifecycle, considering both software and hardware impacts and encompassing all supporting infrastructure and services throughout the lifecycle.

| | **GreenAI Index** | **EcoLogits** | **Energy Score** | **Berthelot et al (2024) LCA** |
|---|---|---|---|---|
| Prepare | ❌ | ❌ | ❌ | ❌ |
| Data Engineering | ❌ | ❌ | ❌ | ❌ |
| Model training | ✅ | ❌ | ❌ | ✅ |
| System integration | ❌ | ❌ | ❌ | ❌ |
| Runtime operations | ✅ | ☑️** | ☑️*** | ✅ |
| End of life | ❌ | ❌ | ❌ | ❌ |

** [Refers to the computation of the GPU-equipped servers. ](https://ecologits.ai/latest/methodology/)

***[ The score excludes CPU, RAM, networking, and storage energy, which can contribute to an additional consumption of 30% or more.](https://huggingface.github.io/AIEnergyScore/#methodology)

## Clarity and Consistency

Clarity enables consistency. A standard grounded in a clearly defined boundary and methodology ensures that results are both reproducible and trustworthy. With clarity, when different teams interpret the specifications, the scores they produce are consistent, which builds confidence in the utility and fairness of the measurement. The benchmark for such a metric is simple: two independent teams should be able to apply the SCI for AI to the same system and arrive at comparable figures without coordination, relying solely on the published standard.

### Boundary Definition

A well-defined boundary is necessary. The standard must clearly specify what is included in the scope of measurement and what is excluded. Ambiguity, such as whether software dependencies or shared services fall within the boundary, undermines comparability. The more precisely this is articulated, the less room is left for subjective interpretation.

### Methodology 

Defining the boundary is not sufficient on its own. To achieve clarity and consistency, the standard must also provide a robust methodology for attributing emissions to the relevant functional unit. In the LCA world, this is described as the “allocation” methodology. This includes addressing common challenges (e.g., shared resources) and more complex issues (e.g., historical emissions): 

- Shared Resources: When resources (e.g., compute clusters, storage systems) are shared across multiple AI workloads, how should emissions be proportionally allocated?
- Historical Emissions: How should past emissions, such as those incurred during training or the manufacture of hardware, be attributed to current operations?

The SCI specification includes “embodied emissions” in the boundary; it also introduces a methodology (equation) for allocating the emissions of certain hardware to a functional unit. 

Therefore, the SCI for AI will not only provide a statement outlining what to include but also the exact equation that illustrates how to allocate the emissions to a functional unit, e.g.: 

[**M = TE * (TiR/EL) * (RR/ToR)**](https://sci.greensoftware.foundation/)

TiR = Time Reserved: the length of time the hardware is reserved for use by the software.

EL = Expected Lifespan: the anticipated time that the equipment will be installed.

RR = Resources Reserved: the number of resources reserved for use by the software.

ToR = Total Resources: the total number of resources available.

Given the significant emissions associated with model development (training, testing, and evaluation), these stages should be included in the calculation of embodied emissions. A clear apportionment method is needed, as attribution is more complex than for hardware. 

This level of specificity ensures that even complex or shared components can be measured fairly and consistently, enabling adoption at scale while maintaining accuracy and comparability.

| | **GreenAI Index** | **EcoLogits** | **Energy Score** | **Berthelot et al (2024) LCA** |
|---|---|---|---|---|
| Boundary | ✅ | ✅ | ✅ | ✅ |
| Methodology | ✅ | ✅ | ✅ | ✅ |

## SCI for AI: Next Steps 

We recognize that no single framework will excel in all categories. With that in mind, the SCI for AI was designed with a clear set of priorities:

- Consensus-built, multi-stakeholder development
- Pathway to certification and regulatory policy
- ISO-compatible structure
- Royalty-free IPR commitments

To incentivize responsible behavior, we have focused on creating a tool that rewards long-term thinking, supports policy integration, and reflects the complex nature of AI systems throughout their life cycle. 

With the foundational landscape now mapped, the next phase of developing the SCI for AI specification will be a focused, collaborative effort. The team will hold weekly sessions to refine the framework. During these sessions, we will focus on the development of clear personas to ensure the specification meets real-world needs. Central to this process will be the definition of functional units that reflect valuable use cases across AI systems and the incorporation of training-related emissions into the measurement boundaries. 

These steps will guide the SCI for AI specification toward clarity, usability, and impact, shaped by diverse perspectives and technical expertise and aligned with the core SCI characteristics. 

For any queries, reach out to sci-for-ai@greensoftware.foundation. 

To help shape standards, tools, and best practices in green software, consider [becoming a member.](https://greensoftware.foundation/join-us)

## Further reading: 

[https://arxiv.org/pdf/2407.10237](https://arxiv.org/pdf/2407.10237) 

[https://cloud.google.com/blog/topics/sustainability/tpus-improved-carbon-efficiency-of-ai-workloads-by-3x](https://cloud.google.com/blog/topics/sustainability/tpus-improved-carbon-efficiency-of-ai-workloads-by-3x) 

[https://www.sciencedirect.com/science/article/pii/S2212827124001173](https://www.sciencedirect.com/science/article/pii/S2212827124001173) 

[https://wiki.greensoftware.foundation/governance-consensus](https://wiki.greensoftware.foundation/governance-consensus) 

[https://www.uasdf.org/whitepaper-fullaccess](https://www.uasdf.org/whitepaper-fullaccess) 
