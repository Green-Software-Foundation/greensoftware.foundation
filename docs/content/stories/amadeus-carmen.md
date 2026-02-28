## Story: We need to measure carbon at travel industry scale

**Who came together:**
- Virginie Corraze, Head of Engineering Centers of Excellence (formerly Associate Director, Engineering Quality & Sustainability), Amadeus -- defined Amadeus's sustainability strategy and led GSF engagement
- Florent Morel, Amadeus -- engineering lead who built Carmen, now project lead under GSF governance
- Robin Castellon, Amadeus -- Carmen co-lead, continues as project lead under GSF governance
- Eleonore Gueit, Sustainable Engineering Advocate, Amadeus -- advocated for measurement at Carbon Hack 24
- Asim Hussain, Executive Director, Green Software Foundation -- welcomed Carmen into the GSF project portfolio

**Organisations:** Amadeus, IATA (International Air Transport Association), Green Software Foundation

### The Problem

Amadeus powers travel. Their IT solutions connect travellers to journeys through travel agents, search engines, tour operators, airlines, airports, hotels, car rentals, and railways. In 2019, they helped connect over 1.9 billion people to local travel providers in over 190 countries. Their systems process approximately three billion flight search requests every single day.

When Amadeus joined the GSF in 2022, they came with a clear ambition: apply the SCI specification to their largest cloud application -- the one handling the bulk of those billions of daily transactions. But the sheer scale of their operations presented a problem that no existing tool could solve. Measuring carbon at the level of individual applications across hundreds of services, running on cloud infrastructure serving the entire global travel industry, was beyond what any organisation had attempted.

As Virginie Corraze explained: "Our main aim is for every engineer within Amadeus to understand that sustainability is at the core of everything we do. That flows into their training right from the start, the toolchain they use, and the guidelines on how to design and deliver our software. The key is to give them the tools for measuring the impact of any of the decisions they make, specifically with regard to sustainability." But without granular, application-level measurement, engineers couldn't see the impact of their decisions, and sustainability leaders couldn't identify which of the hundreds of applications should be optimised first.

The travel industry itself was under pressure. Travellers were becoming more conscious and demanding about sustainability. Customers were looking for low-carbon solutions and employees were asking in job interviews what the company was doing for the environment. The industry's goal of Net Zero by 2050 required action at the technology layer, not just at the airline or hotel level. But no measurement infrastructure existed at this scale.

### The Journey

**August 2022 -- Amadeus joins the GSF.** Virginie Corraze outlined Amadeus's plans in her introductory interview: the company would use GSF standards and guidelines, specifically the SCI score computation, applied to "the most extensive Amadeus application in terms of volumes of transactions migrating to the cloud." Engineers would join GSF workshops immediately. Amadeus also committed to collaborating on open-source sustainability projects and contributing to the Standards Working Group.

Amadeus additionally revealed they were already working with IATA on a travel search efficiency and sustainability initiative, using artificial intelligence to process fewer travel search queries with a low probability of converting -- proposing more relevant offers instead of high-volume suggestions. This signalled that sustainability was not a side project but was being embedded into core product strategy.

**2022-2023 -- Building Carmen.** Faced with the challenge of measuring emissions across hundreds of applications at massive scale, Florent Morel's engineering team at Amadeus built Carmen (Carbon Measurement Engine). The tool was designed from the ground up to implement the Impact Framework at scale, delivering visibility into cloud infrastructure and application-level emissions. Carmen operated at two critical levels:

- **Infrastructure Level:** tracking energy consumption and carbon emissions from virtual machines, storage, and cloud services
- **Application Level:** monitoring individual applications and workloads running in Kubernetes clusters

The tool integrated with infrastructure already running in most production environments -- Kubernetes for container orchestration, Prometheus for metrics collection, Kube State Metrics for cluster-level data -- so teams didn't need to deploy new monitoring systems. Carmen prioritised data consistency over absolute accuracy, ensuring all measurements were transparent, auditable, and reproducible. An engineer could examine the manifest files Carmen generated to see exactly which models were used and verify the calculations independently.

**2024 -- Carbon Hack 24 advocacy.** Amadeus sponsored Carbon Hack 24 and Eleonore Gueit served as an industry panellist, articulating the measurement gap that Carmen was designed to fill: "The one question we get all the time is, 'How do we measure?' Everyone is craving measurement." Amadeus's sponsorship of the hackathon alongside Accenture, AVEVA, BCG X, Sentry Software, IMDA, Nedbank, and NTT DATA demonstrated the company's commitment to building the broader measurement ecosystem, not just solving their own problem.

**January 2026 -- Carmen donated to GSF.** On 31 January 2026, Amadeus completed the transfer of Carmen to the Green Software Foundation. The repository was hosted under GSF's GitHub organisation, with Florent Morel and Robin Castellon continuing as project leads under GSF governance. Virginie Corraze explained: "Open-sourcing Carmen is our way of contributing back to the community and accelerating the development of practical, standardized tools for green software. As more organizations adopt and contribute to it, the engine is expected to become more accurate, more robust, and more useful."

Asim Hussain welcomed the donation: "Carmen represents exactly what we need more of in the green software ecosystem -- practical tools built on solid measurement foundations that help teams act. By building on the Impact Framework, Amadeus showed how our open standards and frameworks enable interoperability and verification across the industry. We're excited to support its growth as a GSF project."

A key insight that emerged from Carmen's development was the link between carbon measurement and cost optimisation. Carbon emissions and cloud costs stem from the same source: resource consumption. Carmen surfaces common consumption patterns -- CPU, memory, network -- that equally drive environmental impact and cloud spend. When organisations see where their applications consume resources, they can make decisions that improve performance, reduce costs, and minimise emissions simultaneously.

### The Impact

- **1.9 billion travellers** connected annually through Amadeus's systems, now with carbon measurement capability
- **3 billion daily flight search requests** -- the scale at which Carmen must operate
- **Hundreds of applications** measurable at both infrastructure and application level
- **Open-source donation** to GSF -- Carmen is now freely available to any organisation worldwide
- **Built on Impact Framework** -- validating the IF as a production-ready calculation backbone at massive scale
- **Kubernetes-native integration** -- works with existing monitoring infrastructure (Prometheus, Kube State Metrics), requiring no new tooling
- **Transparent, auditable calculations** -- every measurement can be independently verified through manifest files
- **IATA collaboration** -- sustainability integrated into travel industry search efficiency standards
- **Immediate roadmap** includes expanding infrastructure monitoring beyond VMs to storage and additional cloud services

### Key Quotes

"Our main aim is for every engineer within Amadeus to understand that sustainability is at the core of everything we do. That flows into their training right from the start, the toolchain they use, and the guidelines on how to design and deliver our software. The key is to give them the tools for measuring the impact of any of the decisions they make, specifically with regard to sustainability." -- Virginie Corraze, Amadeus (August 2022)

"We will apply SCI as an internal measure for the most extensive Amadeus application in terms of volumes of transactions migrating to the cloud. This will allow us to compute and monitor the application's carbon emissions rate and help us implement optimizations. We are excited to start using this methodology." -- Virginie Corraze, Amadeus (August 2022)

"The one question we get all the time is, 'How do we measure?' Everyone is craving measurement." -- Eleonore Gueit, Sustainable Engineering Advocate, Amadeus (April 2024)

"Open-sourcing Carmen is our way of contributing back to the community and accelerating the development of practical, standardized tools for green software. As more organizations adopt and contribute to it, the engine is expected to become more accurate, more robust, and more useful." -- Virginie Corraze, Head of Engineering Centers of Excellence, Amadeus (February 2026)

"Carmen represents exactly what we need more of in the green software ecosystem -- practical tools built on solid measurement foundations that help teams act. By building on the Impact Framework, Amadeus showed how our open standards and frameworks enable interoperability and verification across the industry. We're excited to support its growth as a GSF project." -- Asim Hussain, Executive Director, Green Software Foundation (February 2026)

### Related Articles

- `_legacy/content/articles/en/meet-virginie-corraze-associate-director-engineering-quality-amp-sustainability-a.md`
- `_legacy/content/articles/en/welcoming-carmen-carbon-measurement-engine-as-a-gsf-project.md`
- `_legacy/content/articles/en/carbon-hack-24-expanding-the-ecosystem-of-software-measurement.md`

### Call to Action

Deploy Carmen in your environment by visiting the Carmen repository at github.com/Green-Software-Foundation/if-carmen. Register for the introductory webinar at grnsft.org/carmen-webinar-registration to learn hands-on how to integrate Carmen with your Kubernetes infrastructure. If your organisation operates at scale and needs application-level carbon visibility, Carmen provides a production-proven starting point without requiring you to build custom measurement tooling.

### Open Questions

- **Specific SCI scores from Amadeus:** The articles describe Amadeus applying SCI to their largest cloud application but do not publish the resulting SCI score. What was the measured carbon intensity of their flight search system?
- **"30% reduction target" verification:** The gap analysis states that the Amadeus CTO set "reduce by 30%" targets across every product. This is not explicitly stated in the source articles. Virginie Corraze's interview discusses making sustainability core to engineering but does not name a specific percentage target. Need to verify the source of this claim.
- **Carmen adoption beyond Amadeus:** The February 2026 article states organisations beyond Amadeus "can now use Carmen" but does not name any early adopters outside Amadeus. Are there any organisations currently piloting Carmen?
- **IATA collaboration details:** The Virginie Corraze interview mentions working with IATA on travel search efficiency in the scope of the New Distribution Capability model. What were the outcomes of this collaboration? Did it produce measurable carbon reductions?
- **Florent Morel and Robin Castellon profiles:** These are listed as the Carmen project leads but neither has a dedicated article or interview in the source material. Their roles, backgrounds, and personal motivations would strengthen the story considerably.
- **Carmen development timeline:** The article says Amadeus "faced this challenge in 2022" and the donation was January 2026. When was Carmen first deployed internally? When did it reach production maturity? What were the key milestones during those approximately 3 years of internal development?
- **Scale metrics:** The story would benefit from concrete numbers about Carmen's internal use at Amadeus -- how many applications were measured, how many engineering teams used it, what percentage of Amadeus's cloud infrastructure was covered.
- **Cost savings:** The Carmen article notes that carbon measurement and cost optimisation are linked. Did Amadeus quantify cloud cost savings that resulted from the same visibility Carmen provided?
