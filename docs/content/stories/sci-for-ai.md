## Story: "We can't measure AI carbon"

**Who came together:**
- Navveen Balani, Managing Director and Chief Technologist, Technology Sustainability Innovation, Accenture -- led the SCI for AI specification as Software Standards Working Group Chair and project co-lead
- Henry Richardson, Senior Analyst, WattTime -- co-led the SCI for AI specification development alongside Balani
- Sanjay Podder, Managing Director, Accenture -- co-chaired the Green AI Committee that defined Green AI and set the strategic direction
- Thomas Lewis, Principal Developer Advocate, Microsoft -- co-chaired the Green AI Committee and led the Green AI for Practitioners course
- Federica Sarro, Professor of Software Engineering, UCL -- contributed academic research perspective on engineering responsible AI-powered software systems
- Tamar Eilam, IBM -- participated in the SCI for AI workshop bringing cloud infrastructure expertise
- Jonathan Turnbull, Environment & AI Lead, Google -- Green AI Committee member who advocated for lifecycle-wide measurement
- Vinjosh Varghese, Data Engineer, UBS -- participated in both the Green AI Committee and SCI for AI workshop
- Stuart Sweeney Smith, Google -- participated in the SCI for AI workshop
- Tammy McClellan, Microsoft -- participated in the SCI for AI workshop
- Dawn Nafus, Anthropologist and Senior Research Scientist, Intel Labs -- moderated the "Can AI Truly Be Green?" panel that helped frame the problem
- Chris McClean, Global Lead for Digital Ethics, Avanade -- panellist who challenged assumptions about AI sustainability
- Dr. Elif Kiesow Cortez, Director of Quantum & AI, Stanford University -- panellist who flagged incoming EU regulatory requirements

**Organisations:** Accenture, WattTime, Microsoft, Google, IBM, UCL, UBS, Siemens, Intel, Avanade, Stanford University, Amadeus, Schneider Electric, Globant, Electricity Maps, BCG, Boavizta, NTT DATA, IMDA Singapore, Scope3

### The Problem

AI workloads were exploding across the software industry, but nobody had a standardised way to measure their carbon footprint. Training GPT-3 alone produced approximately 500 tonnes of CO2 emissions -- equivalent to a petrol car driving roughly 2 million kilometres -- and close to 1,300 megawatt hours of electricity. And that was just one model from 2020. By 2023, data centre emissions were predicted to rise from 180 Mt to 300 Mt by 2035, making them one of the fastest-growing sources of emissions.

The problem was not that organisations were unaware. Accenture, Microsoft, Google, IBM, and UBS all had sustainability commitments. But multi-million pound infrastructure decisions were being made without understanding relative carbon efficiency. As Navveen Balani put it, the environmental impact of AI "extends beyond algorithms. Infrastructure supporting AI, including data centres, racks, and cooling systems, contributes to adverse environmental effects." Existing measurement approaches each captured only a slice of the picture: some covered only inference, others only training, and none addressed the full AI lifecycle from data preparation through model development to deployment and decommissioning.

The fragmentation was paralysing. Multiple metrics existed -- the Green AI Index, EcoLogits, EnergyScore -- but none were consensus-built, none had a pathway to policy or certification, and none incentivised the full range of engineering optimisations that could actually reduce emissions. As Chris McClean of Avanade put it bluntly at a GSF panel: while efforts can make AI "more environmentally responsible, they will still leave a footprint behind." The question was whether the industry could agree on a consistent, trustworthy way to measure that footprint so they could systematically reduce it.

### The Journey

**October 2023 -- Framing the problem publicly.** The GSF organised a panel, "Can AI Truly Be Green?", featuring experts from Accenture, Avanade, Intel Labs, and Stanford University. The debate oscillated between optimism and scepticism. Balani outlined three angles for addressing AI's environmental impact: optimising the AI lifecycle, empowering hardware efficiency, and harnessing renewable resources with carbon awareness. Kiesow Cortez warned that EU regulations addressing AI's environmental footprint were coming, and organisations needed to prepare. Dawn Nafus noted the practical limitation: "it is possible to decarbonise a very short workload by up to 80%. But this only gets us so far." The panel crystallised that the industry needed measurement before it could optimise.

**2024 -- Green AI Committee formed.** The GSF established the Green AI Committee (GAIC), co-chaired by Sanjay Podder (Accenture) and Thomas Lewis (Microsoft), with twelve members from Accenture, Microsoft, BCG, Futurewei, UCL, NTT DATA, Globant, HSBC, Siemens, Google, IBM/Red Hat, and UBS. The committee set out to define Green AI itself: "Green AI focuses on reducing the environmental impact of AI systems throughout their lifecycle. It emphasises the standardisation of measurement and metrics to ensure transparency, strengthen confidence in AI technologies, and drive continual improvement."

**Late 2024 -- Green AI Position Paper.** Through a series of workshops, the GAIC defined the AI lifecycle stages (Prepare, Data Engineering, Model Training, System Integration, Runtime Operations, End-of-Life) and established that measurement must cover all of them. The paper was ratified by the GSF Steering Committee in September 2024. It identified two priority projects: an SCI for AI standard and a Green AI for Practitioners course.

**October 2024 -- EU AI Act response.** Eight people from seven companies (Accenture, Microsoft, Avanade, NTT DATA, Siemens, Globant, IBM/Red Hat, UCL) provided coordinated insights on the EU AI Act's environmental provisions. Sanjay Podder noted that Article 40 "establishes a framework for developing harmonised standards aimed at improving AI systems resource performance, with a particular focus on energy efficiency" but that the Act "missed an opportunity to fully tackle AI's environmental impacts." Andre Racz of Avanade pointed out that "environmental impacts are often known trade-offs, not risks" and that the Act's risk-management framework was insufficient. The committee's response demonstrated the GSF's emerging role as a bridge between industry practice and policy.

**Early 2025 -- SCI for AI workshops.** AI experts from over 20 GSF member organisations participated in a series of workshops hosted by the Software Standards Working Group. Twenty named participants from Siemens, Scope3, IMDA Singapore, AVEVA, University of Bristol, Globant, WattTime, Amadeus, Schneider Electric, Accenture, BCG, Boavizta, Trustwise, Google, IBM, Microsoft, and UBS evaluated existing AI measurement metrics against a rubric the group developed together. The rubric assessed flexibility, granularity, explainability, broad scope, pathway to certification and policy, and alignment with existing standards. A critical finding: none of the existing metrics (Green AI Index, EcoLogits, EnergyScore) were consensus-built or had a pathway to certification.

**May 2025 -- Green AI Position Paper published.** The formal publication made the committee's work available to the broader community, including the Green AI definition, lifecycle stages, and priority actions.

**July 2025 -- SCI for AI Workshop Report published.** The detailed outcomes from the workshops were shared publicly, including the evaluation rubric, the analysis of existing metrics, the agreed scope covering foundational AI paradigms (machine learning, deep learning, symbolic AI, and more) and emerging technologies (generative AI, agentic AI), and the design principle that measurement must incentivise behaviours -- not just track numbers. The report established that SCI for AI would be designed with consensus-built, multi-stakeholder development; a pathway to certification and regulatory policy; ISO-compatible structure; and royalty-free IPR commitments.

**December 2025 -- SCI for AI specification ratified.** The specification was ratified, becoming the first consensus-based standard for measuring the carbon footprint of AI systems across their entire lifecycle. Under the leadership of Navveen Balani and Henry Richardson, it defined two measurement boundaries: a Provider score (covering model development, training, and deployment efficiency) and a Consumer score (enabling users to understand and reduce operational impacts from inference and monitoring). Built on the ISO-standard SCI methodology (ISO/IEC 21031:2024), it covered classical machine learning, computer vision, NLP, generative AI, and agentic systems, with diverse functional units including tokens, inferences, and FLOPs.

### The Impact

- **Ratified specification** -- the first consensus-based standard for measuring AI carbon emissions across the full lifecycle
- **20+ organisations** participated in the workshops that shaped the specification
- **12-member Green AI Committee** from major technology companies established Green AI as a defined discipline
- **Full lifecycle coverage** -- from data preparation and training through inference, monitoring, and end-of-life, unlike any prior metric
- **Dual-boundary approach** (Provider and Consumer scores) giving both builders and operators control over the emissions they can influence
- **ISO-compatible structure** built on ISO/IEC 21031:2024, providing a pathway to international standardisation
- **EU AI Act engagement** -- coordinated policy input from 8 people across 7 companies, positioning the GSF as a bridge between industry practice and regulation
- **Covers all AI paradigms** -- machine learning, deep learning, generative AI, agentic AI, computer vision, NLP, and more
- **Royalty-free IPR** -- ensuring open access and broad adoption

### Key Quotes

"The purpose of this proposed specification is to assist AI practitioners -- developers, data scientists, engineers, and decision-makers -- in understanding and reducing the carbon footprint of AI systems. By making informed choices about model design, computational efficiency, and deployment strategies, practitioners can minimise emissions while maintaining performance."
-- Navveen Balani, Software Standards Working Group Chair, Accenture

"To understand AI's carbon footprint, we first need a consistent way to measure it. The SCI for AI is an important step to give the industry a shared standard to track emissions across the entire lifecycle, not just parts of it. This clarity allows us to move from rough estimates to real, actionable data."
-- Jonathan Turnbull, Environment & AI Lead, Google

"Green AI focuses on reducing the environmental impact of AI systems throughout their lifecycle. It emphasises the standardisation of measurement and metrics to ensure transparency, strengthen confidence in AI technologies, and drive continual improvement."
-- Green AI Committee consensus definition, ratified by GSF Steering Committee, September 2024

"Training a LLM results in approximately 500 tons of CO2 emissions, equivalent to the environmental cost of a gas-powered car traversing approximately 2 million kilometres."
-- cited in "Can AI Truly Be Green?" panel, sourced from Stanford HAI AI Index Report 2023

"The EU AI Act missed an opportunity to fully tackle AI's environmental impacts. The focus on standards rather than mandatory requirements and the absence of clear enforcement mechanisms raises concerns about the effectiveness of this approach."
-- Sanjay Podder, Managing Director, Accenture; Chairperson, GSF; Co-Chair, Green AI Committee

"Environmental impacts are often known trade-offs, not risks. Addressing these challenges will require efforts beyond risk management, such as improving energy efficiency and optimising AI models -- topics that the Act does not tackle."
-- Andre Racz, Chief Technology Officer, Avanade Brazil; Co-Chair, Green AI Committee

"Software engineers will have a pivotal role in shaping future AI-powered software systems by embedding compliance, ethical and sustainability considerations into every stage of their development process."
-- Federica Sarro, Professor of Software Engineering, UCL

### Related Articles
- `_legacy/content/articles/en/sci-for-ai-workshop-report.md`
- `_legacy/content/articles/en/green-ai-position-paper.md`
- `_legacy/content/articles/en/sci-ai-specification-ratified-standard-for-measuring-ai-emissions-across-the.md`
- `_legacy/content/articles/en/the-eu-ai-act-insights-from-the-green-ai-committee.md`
- `_legacy/content/articles/en/can-ai-truly-be-green.md`

### Call to Action
The SCI for AI specification is open for public review. AI practitioners, sustainability professionals, and organisations are invited to review the methodology at sci-for-ai.greensoftware.foundation, apply it to their systems, and share their implementation experience. For organisations that want to shape the next phase -- practical guidance, case studies, and training resources -- consider becoming a GSF member to join the Software Standards Working Group.

### Open Questions
- **Real-world implementation case studies:** The specification was ratified in December 2025. Are any organisations already applying SCI for AI to production AI systems, and what scores are they reporting?
- **Provider adoption:** Have any major AI providers (OpenAI, Anthropic, Google, Microsoft) committed to publishing Provider scores?
- **Training emissions data:** The specification covers training emissions, but access to actual training energy data from model providers remains limited. How is this being addressed?
- **Agentic AI measurement complexity:** The workshop report notes that "carbon accounting becomes especially complex when these systems trigger multiple downstream, often non-AI, services. Accountability in such chains is still in the early stages of exploration." Has further guidance been developed?
- **EU AI Act Article 40 standards development:** The committee identified this as a key opportunity. Have EU standardisation bodies engaged with SCI for AI?
- **Comparison with competing metrics:** How does the ratified SCI for AI compare in practice to the Green AI Index, EcoLogits, and EnergyScore? Are any of these converging or being superseded?
