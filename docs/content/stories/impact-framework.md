## Story: Measurement is too hard for non-specialists

**Who came together:**
- Asim Hussain, Executive Director, Green Software Foundation -- championed the Impact Framework as the tool to "decentralize impact measurement and democratize data"
- Navveen Balani, Managing Director and Chief Technologist, Accenture -- co-chair of the Impact Framework project, Carbon Hack 24 sponsor representative
- Srinivasan Rakhunathan, Technical Product Manager, Microsoft -- GSF contributor since 2021, co-authored the LLM-based emissions estimation approach
- Ioannis Kolaxis, Director of Technology Sustainability Innovation, Accenture -- Carbon Hack 24 judge and industry panellist
- Eleonore Gueit, Sustainable Engineering Advocate, Amadeus -- gave voice to the measurement gap: "Everyone is craving measurement"
- Daniel Lazaro, Senior Technical Program Manager, AVEVA -- Carbon Hack 24 sponsor, advocated for AI integration with IF
- Raghu Krovvidi, Associate Director, BCG X -- Carbon Hack 24 sponsor, emphasised practical client adoption
- Clifton Phua, Director of Labs, BizTech Group, IMDA -- first Singapore government agency to join GSF, ran green software trials
- Gadhu Sundaram, VP of Application Services, NTT DATA -- advocated mandatory KPI measurement as part of non-functional requirements
- Bertrand Martin, CEO, Sentry Software -- championed standards for making carbon observable and traceable
- Sanjay Podder, Managing Director for Sustainable Technology, Accenture and GSF Chair -- framed the urgency around generative AI proliferation
- Toru Shimogaki, NTT DATA -- highlighted that "software usually feels cleaner than it is"

**Organisations:** Accenture, Microsoft, Amadeus, AVEVA, BCG X, Sentry Software, IMDA, NTT DATA, Nedbank South Africa, Thoughtworks, Hightech ICT, Opencast Software Europe, Munich University of Applied Sciences

### The Problem

By 2023, the SCI specification had given the world a standard way to express software carbon intensity. But having a formula and being able to use it were two different things. Calculating an SCI score required gathering CPU utilisation data, mapping it to energy curves, finding the right carbon intensity factors for the location, estimating embodied emissions from hardware specifications, and choosing an appropriate functional unit. Each step involved specialist knowledge -- energy engineering, hardware lifecycle analysis, regional grid data -- that most software teams simply didn't have.

Clients were coming to companies like Accenture, NTT DATA, and BCG X asking for help measuring their software emissions, but even those consulting firms found that "the challenges come when assessing what tools they should use and the methodologies and data used by these tools." As Eleonore Gueit of Amadeus put it at Carbon Hack 24: "The one question we get all the time is, 'How do we measure?' Everyone is craving measurement."

The result was a growing gap between ambition and execution. Organisations wanted to measure. Regulations like the CSRD and EU AI Act were beginning to require it. But the expertise barrier meant that only a handful of well-resourced companies could actually calculate their software's carbon footprint. The measurement revolution promised by the SCI standard was stuck behind a wall of complexity.

### The Journey

**2022 -- CarbonHack22 proves the appetite.** The Foundation's first hackathon, CarbonHack22, ran from 13 October to 10 November 2022 with 395 participants and 51 eligible project submissions. While focused on the Carbon Aware SDK rather than measurement directly, it demonstrated a massive appetite in the developer community for practical green software tools. The first-place winner, Lowcarb, showed carbon emissions reductions of 13% for federated learning. The second-place winner, Zeus, achieved 24% carbon emission reductions for DNN training. Sponsors included Accenture, Avanade, Intel, Thoughtworks, Globant, Goldman Sachs, UBS, BCG, and VMware, with a total prize pool of USD 100,000.

**2023 -- Impact Framework development.** Recognising that measurement needed to be democratised, the GSF developed the Impact Framework (IF) -- an open-source tool designed to calculate the environmental impacts of software by converting observable data from running systems (CPU utilisation, page views, number of installs) into environmental impacts (carbon, water, energy, air quality) in an auditable, replicable, verifiable, and transparent manner. The framework's architecture was built around plugins -- modular components that could be contributed by anyone, handling everything from specific cloud provider metrics to embodied carbon calculations. The vision was that IF would do for software measurement what open source had done for the software ecosystem itself.

**December 2023 -- Carbon Hack 24 announced.** The Foundation announced a second hackathon, this time centred squarely on the Impact Framework. The framing was explicit: "solving the biggest pain point facing the industry -- measuring software for sustainability." Software's ecological impact was inching toward a sizeable 14% of global emissions, and "a scalable tool is in the works, answering businesses' calls to measure software."

**March--April 2024 -- Carbon Hack 24 scales the ecosystem.** From 18 March to 8 April 2024, Carbon Hack 24 brought together over 500 sustainability software developers and practitioners worldwide. Sponsored by Accenture, Amadeus, AVEVA, BCG X, Sentry Software, IMDA, Nedbank South Africa, and NTT DATA, with a USD 40,000 prize pool across six categories, the hackathon produced 47 submissions and generated 30 new community-built plugins for the Impact Framework.

The winners demonstrated the framework's versatility across wildly different domains:

- **Best Content:** Team C-- (Thoughtworks) -- evaluating LLM carbon footprints
- **Best Contribution:** Green HighTech Innovators (Hightech ICT) -- streamlining Impact Framework accessibility
- **Beyond Carbon:** Opencast Carbon 24 (Opencast Software Europe) -- Environmental Impact Risk Scorecard extending beyond carbon to water, waste, and air quality
- **Best Under 18:** GreenerMeet -- assessing energy and carbon in Zoom conferences
- **Best Undergraduate:** Code Green (Munich University of Applied Sciences) -- a Manifest Generator
- **Best Plugin:** Code Green (Nedbank) -- K8s importer and visualisation

The event also served as an industry forum where sponsors articulated the business case for measurement. Ioannis Kolaxis of Accenture explained: "More and more clients want to measure their carbon emissions and reduce them. The challenges come when assessing what tools they should use and the methodologies and data used by these tools. The Impact Framework is one tool that can scale measurement across the software industry." Daniel Lazaro of AVEVA argued: "Two things need to happen for greater adoption of IF. The first is that regulators need to demand that companies report using tools like Impact Framework. The second is to apply AI to the framework so it's baked into the tooling."

**September 2024 -- LLM-powered measurement.** Srinivasan Rakhunathan (Microsoft) and Navveen Balani (Accenture) published a methodology for estimating software emissions during the system design phase using Large Language Models -- training AI on architecture blueprints, green design patterns, and emission data to provide guidance before a single line of code is written. This represented the next frontier: shifting measurement left into the design phase, where architectural decisions that lock in 67-93% of an application's emissions are made.

**2026 -- Carmen builds on IF.** The ultimate validation of the Impact Framework came when Amadeus donated Carmen, their carbon measurement engine, to the GSF. Carmen was explicitly "built on Impact Framework" and delivered "transparent, reproducible carbon calculations" at scale across hundreds of applications. Asim Hussain noted: "By building on the Impact Framework, Amadeus showed how our open standards and frameworks enable interoperability and verification across the industry."

### The Impact

- **500+ participants** at Carbon Hack 24, up from 395 at CarbonHack22
- **47 submissions** across six categories in Carbon Hack 24
- **30 new community-built plugins** extending the Impact Framework ecosystem
- **USD 40,000 in prizes** distributed at Carbon Hack 24 (USD 100,000 at CarbonHack22)
- **Impact Framework ratified** as a GSF project with an established plugin ecosystem
- **Cross-generation engagement:** categories for Under 18 and Undergraduate participants, bringing green software measurement to the next generation of developers
- **8 major sponsors** (Accenture, Amadeus, AVEVA, BCG X, Sentry Software, IMDA, Nedbank South Africa, NTT DATA) investing in the measurement ecosystem
- **Carmen adopted IF** as its calculation backbone, proving the framework works at production scale across hundreds of applications serving 1.9 billion travellers
- **LLM integration pathway** established, pointing toward AI-assisted measurement during the design phase

### Key Quotes

"The one question we get all the time is, 'How do we measure?' Everyone is craving measurement." -- Eleonore Gueit, Sustainable Engineering Advocate, Amadeus (April 2024)

"More and more clients want to measure their carbon emissions and reduce them. The challenges come when assessing what tools they should use and the methodologies and data used by these tools. The Impact Framework is one tool that can scale measurement across the software industry." -- Ioannis Kolaxis, Director of Technology Sustainability Innovation, Accenture (April 2024)

"Two things need to happen for greater adoption of IF. The first is that regulators need to demand that companies report using tools like Impact Framework. The second is to apply AI to the framework so it's baked into the tooling." -- Daniel Lazaro, Senior Technical Program Manager, AVEVA (April 2024)

"Sustainability is not a top metric for most companies. It is our job to emphasize its benefits and influence our clients to apply similar initiatives and best practices that we have across our internal accelerators and initiatives." -- Raghu Krovvidi, Associate Director, BCG X (April 2024)

"It's not easy for us to measure the carbon footprint of LLMs given their training, inference, and use of different providers. Hence, we are running green software trials in Singapore to measure carbon emissions and are also learning to use the SCI Specification for Generative AI." -- Clifton Phua, Director of Labs, BizTech Group, IMDA (April 2024)

"Once you make measurement of KPIs mandatory, as part of your non-functional requirements, and provide an ecosystem of tools and standards, it will lead to greater adoption and improved practice in measuring software for sustainability." -- Gadhu Sundaram, VP of Application Services, NTT DATA (April 2024)

"We need standards. Measuring carbon emissions in software makes the energy in carbon observable, in other words, traceable." -- Bertrand Martin, CEO, Sentry Software (April 2024)

"While we all know the importance of lowering our carbon footprint, software usually feels cleaner than it is, furthermore one cannot improve without measuring." -- Toru Shimogaki, NTT DATA (March 2024)

"As generative AI and advanced software systems proliferate, understanding their environmental impact is paramount. Our sponsorship of Carbon Hack 24 reflects our commitment to fostering a greener future through collective action." -- Sanjay Podder, Managing Director for Sustainable Technology, Accenture and GSF Chair (March 2024)

"Hackathons are purposeful, which is why we love them! Every participant in Carbon Hack 24 is helping build a measurement tool that decentralizes impact measurement and democratizes data to compute and report the environmental impacts of software applications accurately." -- Asim Hussain, Executive Director, GSF (March 2024)

"Through IF, the sustainability world will have watchers. This is how we are going to change the world." -- GSF, Carbon Hack 24 wrap-up (April 2024)

"We envision that SCI measurement will become a standard part of every developer's toolbox and the norm in the future." -- Navveen Balani, Accenture and Co-Chair, Standards Working Group (April 2024)

### Related Articles

- `_legacy/content/articles/en/carbon-hack-24-expanding-the-ecosystem-of-software-measurement.md`
- `_legacy/content/articles/en/carbon-hack-24-redefining-software-measurement-for-sustainability.md`
- `_legacy/content/articles/en/carbon-hack-24-where-measurement-meets-innovation-and-impact-knows-no-bounds.md`
- `_legacy/content/articles/en/emission-calculations-through-large-language-model.md`
- `_legacy/content/articles/en/carbonhack22-a-big-leap-in-carbon-aware-computing.md`

### Call to Action

Explore the Impact Framework at if.greensoftware.foundation and try measuring the environmental impact of one of your own applications. If you find a gap in the plugin ecosystem, build a plugin and contribute it back. For organisations looking to embed measurement into their development workflow, consider sponsoring or participating in the next Carbon Hack. And if you want to learn the fundamentals first, start with the free Green Software Practitioner training course.

### Open Questions

- **Impact Framework ratification date:** The exact date the IF was formally ratified as a GSF project is not stated in the source articles. Need to verify.
- **CarbonHack22 vs Carbon Hack 24 relationship to IF:** CarbonHack22 was focused on the Carbon Aware SDK, not the Impact Framework. The narrative links them as demonstrating community appetite for tools, but they are technically different projects. Should the CarbonHack22 material be kept in this story or moved to the Carbon Aware SDK story?
- **Plugin count verification:** The "30 new plugins" figure comes from the Carbon Hack 24 wrap-up article. Need to verify how many of these were merged into the official IF plugin database vs. remaining as hackathon submissions.
- **Joseph Cook's role:** The gap analysis lists Joseph Cook (GSF) as a key person for this story, but no source article was found with direct quotes or detailed involvement from him. Need to clarify his specific contribution to the Impact Framework.
- **Quantified impact of IF adoption:** The story has strong participation numbers but lacks before/after metrics showing how IF made measurement faster or more accessible compared to manual SCI calculation. Testimonials about ease-of-use would strengthen the story significantly.
- **Carbon Hack 24 winner outcomes:** What happened to the winning projects after the hackathon? Were any of the 47 submissions adopted by organisations or integrated into production systems?
