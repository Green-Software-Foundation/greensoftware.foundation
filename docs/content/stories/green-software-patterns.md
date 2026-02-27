## Story: "Engineers know the theory but not what to change in code"

**Who came together:**
- Franziska Warncke, Project Co-Lead, NTT DATA -- drove the Patterns catalogue and led the serverless SCI measurement work
- Liya Mathew, Project Co-Lead, Goldman Sachs -- co-leading the vision and execution of Green Software Patterns v2
- Daniel Lazaro, AVEVA -- contributed to the design thinking workshop and the catalogue's evolution
- Denis Angeletta, NTT DATA -- co-developed the serverless carbon footprint methodology and SCI calculator
- Thomas Lewis, Microsoft -- workshop participant shaping the catalogue roadmap
- Sean O'Keefe, Microsoft -- workshop participant
- Gadhu Sundaram, VP of Application Service, NTT DATA UK -- demonstrated how NTT DATA Germany built a patterns accelerator
- Peter Wadsworth, Innovation Consultant -- designed and facilitated the design thinking workshops

**Organisations:** NTT DATA, AVEVA, Mastercard, Goldman Sachs, Microsoft, Shell, Accenture, Siemens, Globant, CAST, re:cinq

### The Problem

By 2022, the Green Software Foundation had trained tens of thousands of engineers through the Green Software Practitioner course. These engineers understood the principles: energy efficiency, carbon awareness, hardware efficiency, measurement. But a consistent question emerged from the newly trained practitioners: "OK, I understand the principles -- but what do I actually change in my code?"

The gap was real and specific. Early members like AVEVA and Mastercard recognised that "if we are to succeed in significantly reducing software's carbon emissions, we need a knowledge base of trusted guidelines." But when they audited what was available, "one of the biggest challenges was finding resources, which were scattered across various publications, articles, and videos." There was no single, trusted, peer-reviewed source of actionable patterns that developers could apply to their codebases.

Measurement and theory were necessary but not sufficient. An engineer could calculate an SCI score but had no catalogue of proven interventions to improve it. The knowledge existed in fragments -- individual blog posts, conference talks, internal wikis -- but had never been consolidated, validated, and organised for practical use.

### The Journey

In 2022, the Green Software Foundation launched the Green Software Patterns catalogue. The first release offered 50 patterns covering AI, Cloud, and Web -- each one a concrete, actionable technique for reducing software emissions. Every pattern went through a review and consensus process, "ensuring relevance and applicability across diverse industries and use cases."

But the catalogue was a starting point, not an endpoint. NTT DATA became one of the most active implementers. In Germany, NTT DATA "worked with the Green Software Patterns project to build an accelerator that allows testing of each pattern before and after implementation to calculate the SCI value of the application." This was a crucial step: turning patterns from recommendations into measurable interventions.

Franziska Warncke and Denis Angeletta at NTT DATA took this further by developing a comprehensive methodology for quantifying the carbon footprint of serverless applications on AWS. As part of their project measuring the impact of various Green Software Patterns on reducing carbon emissions, they built a Campaign Management System as a test bed. Using Lambda, DynamoDB, S3, and API Gateway, they developed an SCI calculator that could approximate the carbon footprint of different hardware components based on resource usage.

Their methodology was rigorous: they used the k6 load testing framework to generate comparable emission values, running hour-long tests and capturing SCI values in real time. For network emissions -- which serverless architectures make particularly difficult to measure -- they developed a novel approach using VPC Flow Logs stored in S3 and queried with Athena to calculate network carbon emissions.

The results were illuminating. A one-hour test processing 3,603 requests yielded 1,099.81 grams of CO2 -- approximately 0.305 grams per request. "While this may seem small, it adds up significantly to high traffic. For instance, with 1 million requests, this amounts to 305 kilograms of CO2." This made the case for patterns viscerally concrete.

They then tested the "Reduce transmitted data" pattern specifically, comparing measurements with varying picture sizes, and demonstrated "approximately a 4% reduction in carbon emissions." This was the proof point: patterns weren't theoretical advice, they were measurable interventions with quantifiable impact.

Early in 2024, the project took a significant leap forward. Representatives from 11 companies came together for a Design Thinking workshop focused on evolving the Patterns catalogue. The participants included Daniel Lazaro (AVEVA), Denis Angeletta (NTT DATA), Evan Price (Mastercard), Felipe Almeida (Microsoft), Filippo Galeazzi (Shell), Franziska Warncke (NTT DATA), Greg Rivera (CAST), Ioannis Kolaxis (Accenture), Joseph Rossetto (AVEVA), Karthikeyan Kumar (Shell), Klaus Graefensteiner (AVEVA), Michael Mueller (re:cinq), Paula De Matos (AVEVA), Philipp Quaet-Faslem (Siemens), Simon Thurman (Microsoft), Carolin Rubner (Siemens), Sean O'Keefe (Microsoft), Santiago Fontanarrosa (Globant), and Thomas Lewis (Microsoft).

The workshop was facilitated by Peter Wadsworth (Innovation Consultant) and Russ Trow (GSF), drawing on practitioners and subject matter experts in software engineering, data engineering, cloud technology, R&D, solution architecture, UX, and product management. Rather than simply reviewing existing patterns, participants "prioritized establishing a strong foundation for developing a roadmap and enabling the project's scaling up."

The workshop produced user-specific "jobs to be done" that revealed how different roles needed the catalogue differently. A CTO wanting to understand "how to make my existing software applications greener" needs "clear guidance to my teams on which applications to decarbonize and the priority patterns to implement" but is blocked by "lack of knowledge about green patterns and how they apply to my applications" -- meaning "we end up making poor choices based on lack of information or we do nothing." An architect modernising an app needs "a way to simply and easily get the SCI score" but "the time it takes" gets in the way.

Four key insights emerged from the workshop:

1. **"The developer experience needs to be green by default."** Green software patterns should be embedded directly into IDEs, DevOps tools, repos, and management tools -- enabling sustainability improvements at the design phase, not as an afterthought.
2. **Patterns must enable sustainability-led informed decision-making** -- providing use-case-specific guidance on which patterns to implement and when.
3. **Measurement matters** -- organisations need to automatically assess the green impact of their software and continuously apply patterns, using tools like Impact Framework to measure before and after.
4. **AI is a key enabler** -- AI can advance sustainable development, but its own environmental impact must be measurable and ideally carbon-neutral.

The workshop participants defined a "Green Software Nirvana" vision for 2030: "Green Software Patterns integrate into all major tool environments, ensuring automated, default application, and real-time impact measurement. With AI-driven analysis, forecasting, and optimization, Green Software Patterns allow for improved decision-making throughout the software lifecycle -- design, implementation, and use -- to minimize emissions."

The project is now led by Franziska Warncke (NTT DATA) and Liya Mathew (Goldman Sachs), who are driving Green Software Patterns v2 to include persona-based and behavioural patterns.

### The Impact

- **50 patterns** published in the initial catalogue covering AI, Cloud, and Web
- **~4% carbon reduction** demonstrated from the "Reduce transmitted data" pattern in a controlled serverless application test
- **305 kg CO2 per million requests** baseline established for serverless applications, making the business case for patterns concrete
- **11 companies** participated in the Design Thinking workshop to shape the catalogue's evolution
- **19 named contributors** from across industry brought expertise in software engineering, cloud, architecture, UX, and product management
- **NTT DATA Germany** built a patterns accelerator enabling before/after SCI measurement for each pattern
- **NTT DATA serverless methodology** -- comprehensive SCI measurement approach for AWS Lambda, DynamoDB, S3, API Gateway, including novel network emissions calculation via VPC Flow Logs
- **Green Software Patterns v2** in development with persona-based and behavioural patterns
- **Roadmap to 2030** defined with a vision for IDE integration, automated application, and AI-driven optimisation

### Key Quotes

> "The developer experience needs to be green by default."
> -- Design Thinking Workshop Participants (synthesised insight), Green Software Patterns Catalogue: The Next Chapter

> "If we are to succeed in significantly reducing software's carbon emissions, we need a knowledge base of trusted guidelines."
> -- Green Software Patterns Catalogue: The Next Chapter

> "One of the biggest challenges was finding resources, which were scattered across various publications, articles, and videos."
> -- Green Software Patterns Catalogue: The Next Chapter

> "While this may seem small, it adds up significantly to high traffic. For instance, with 1 million requests, this amounts to 305 kilograms of CO2."
> -- Denis Angeletta & Franziska Warncke, NTT DATA, on serverless carbon measurement

> "As a CTO, every time I want to understand how to make my existing software applications greener, I need to provide clear guidance to my teams on which applications to decarbonize and the priority patterns to implement, but lack of knowledge about green patterns and how they apply to my applications gets in the way, and that means we end up making poor choices based on lack of information or we do nothing."
> -- User persona from Design Thinking workshop

### Related Articles
- `_legacy/content/articles/en/green-software-patterns-catalog-the-next-chapter.md`
- `_legacy/content/articles/en/calculating-your-carbon-footprint-a-guide-to-measuring-serverless-app-emissions-o.md`
- `_legacy/content/articles/en/building-green-software-through-standards-and-collaboration.md`
- `_legacy/content/articles/en/embedding-software-sustainability-into-digital-energy-solutions-meet-herve-guirad.md`

### Call to Action

Browse the Green Software Patterns catalogue at patterns.greensoftware.foundation and identify which patterns apply to your technology stack. If you are using serverless on AWS, follow NTT DATA's methodology to baseline your SCI score and then test specific patterns for measurable reduction. If you are a CTO or architect, use the catalogue's upcoming persona-based guidance to prioritise which applications to decarbonise first. Join the GSF to contribute patterns from your own experience and help shape v2.

### Open Questions

- **Total number of patterns today** -- the catalogue launched with 50 but the current count is not specified in the articles. The catalogue is a living resource and likely has more
- **Adoption metrics** -- how many organisations or developers are actively using the patterns catalogue? No download or usage figures are published
- **Results from other pattern tests** -- the 4% reduction is from one specific pattern ("Reduce transmitted data") in one context (serverless on AWS). Results from testing other patterns are described as "currently in progress" in the January 2025 article
- **Liya Mathew's specific contributions** -- she is named as co-lead of v2 but no article details her individual role or Goldman Sachs's specific use of patterns
- **AVEVA's specific implementation** -- Daniel Lazaro and multiple AVEVA representatives participated in the workshop, but no article details AVEVA's internal use of patterns beyond the "top 10 products" reference in the gap analysis
- **Mastercard's role** -- Evan Price (Mastercard) participated in the workshop, but no article details Mastercard's specific use of patterns
- **Shell's role** -- Filippo Galeazzi and Karthikeyan Kumar (Shell) participated but no specific Shell implementation is documented
- **IDE integration progress** -- the 2030 vision calls for patterns integrated into IDEs and DevOps tools, but no article describes progress toward this goal
- **Connection to Schneider Electric** -- the Schneider Electric article mentions "scaling education on GreenOps and Green Software Patterns" as a priority, but they are a new member and their specific adoption is not yet documented
