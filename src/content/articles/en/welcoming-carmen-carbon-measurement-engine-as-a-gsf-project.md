---
title: "Welcoming Carmen (Carbon Measurement Engine) as a GSF Project"
date: "2026-02-05"
summary: "Carmen, an open-source measurement engine from Amadeus joins GFS's ecosystem. Learn how Carmen builds on Impact Framework to deliver transparent carbon measurements, giving teams the application-level visibility needed to optimize emissions without building custom implementations."
teaserText: "Amadeus transfers Carmen, an open-source measurement engine, to GSF, enabling organizations to measure emissions across cloud infrastructure and Kubernetes clusters "
mainImage: "/assets/articles/welcoming-carmen-carbon-measurement-engine-as-a-gsf-project/main.png"
---

Early in our journey, our members identified a measurement challenge: organizations could estimate their overall carbon emissions, but lacked visibility into which applications and which workloads had the biggest impact. Without granular data at the team level, sustainability leaders struggled to engage engineers and identify optimization priorities. While [<u>Impact Framework</u>](https://if.greensoftware.foundation/) provided the calculation methodology, implementing it consistently at scale across hundreds of applications remained a significant barrier.

When Amadeus faced this challenge in 2022, they needed to measure emissions across hundreds of applications. [<u>To give an idea of the scale of Amadeus’ operations, the company processes approximately three billion flight search requests every day</u>](https://amadeus.com/en/blog/articles/the-3-billion-flight-search-puzzle--how-amadeus-is-tackling-boom). Led by Florent Morel, the engineering team built Carmen, a measurement engine that implements Impact Framework at scale, delivering visibility into cloud infrastructure and application-level emissions.

We’re thrilled to announce that the Green Software Foundation is taking ownership of Carmen. Developed and proven by Amadeus, Carmen now becomes available to organizations worldwide, helping teams measure emissions without building custom implementations.

Carmen's repository is hosted under GSF's GitHub organization, with the official transfer completed on January 31, 2026. [Join our upcoming webinar](https://grnsft.org/carmen-webinar-registration) to learn more.

# **A Closer Look at Carmen **

Built on Impact Framework, Carmen delivers transparent, reproducible carbon calculations that make measurement actionable to engineering teams at two critical levels:

- **Infrastructure Level**: It tracks energy consumption and carbon emissions from virtual machines, storage, and cloud services. 
- **Application Level**: It monitors individual applications and workloads running in Kubernetes clusters. 

This integration approach works with tools already running in most production environments: it employs Kubernetes for container orchestration, Prometheus for metrics collection, and Kube State Metrics for cluster-level data. The tool fits into existing workflows, providing carbon visibility without requiring teams to deploy new monitoring systems.

Carmen's approach prioritizes data consistency over absolute accuracy. This ensures that all measurements are transparent, auditable, and reproducible. In practice, an engineer can examine the manifest files Carmen generates to see exactly which models were used and verify the calculations independently. 

Carbon emissions and cloud costs stem from the same source: resource consumption. Carmen surfaces common consumption patterns, like CPU, memory, and network, that equally drive environmental impact and cloud spend. When organizations can see where their applications consume resources, they can also make decisions that improve performance, reduce costs, and minimize emissions.

> "Carmen represents exactly what we need more of in the green software ecosystem—practical tools built on solid measurement foundations that help teams act," said Asim Hussain, Executive Director of the Green Software Foundation. "By building on the Impact Framework, Amadeus showed how our open standards and frameworks enable interoperability and verification across the industry. We're excited to support its growth as a GSF project."

> "Open-sourcing Carmen is our way of contributing back to the community and accelerating the development of practical, standardized tools for green software," shared Virginie Corraze, Head of Engineering Centers of Excellence at Amadeus. "As more organizations adopt and contribute to it, the engine is expected to become more accurate, more robust, and more useful."

# **Building on Our Values**

The future of sustainable software isn't built through isolated efforts but through accessible, shared solutions. Delivering transparent, auditable calculations, Carmen represents our commitment to open and verifiable measurement. Initially created to track emissions across hundreds of applications, it now enables measurement at scale across the industry.

As organizations reinforce their sustainability commitments, Carmen provides the production-proven measurement foundation that teams can adopt, verify, and build upon.

# **The Path Forward **

The transfer of ownership ensures Carmen remains freely available and community-driven as adoption scales. Florent Morel and Robin Castellon will continue as the project leads under GSF's governance. The repository transition has established the project infrastructure needed for community engagement, including issue tracking, contribution guidelines, and documentation resources.

While we’re establishing Carmen as a fully operational GSF project, our immediate roadmap includes expanding infrastructure monitoring beyond VMs to storage and additional cloud services, guided by early adopter feedback. Organizations beyond Amadeus can now use Carmen to measure, understand, and act on their software emissions.

Learn more about [<u>Carmen's journey at Amadeus</u>](https://amadeus.com/en/blog/articles/open-source-carbon-measurement-engine).  

# **Get Involved**

We invite practitioners and organizations to implement the tool and contribute improvements. 

- [**Register for the introductory webinar in April,**](https://grnsft.org/carmen-webinar-registration)** where you can learn hands-on how to integrate Carmen with your infrastructure. **
- Deploy Carmen in your environment: Visit the [<u>Carmen repository</u>](https://github.com/Green-Software-Foundation/if-carmen) to get started.

[<u>Join the GSF</u>](https://greensoftware.foundation/join-us/) as a member to shape the future of sustainable software. Work alongside industry leaders, including Accenture, Cisco, Google, NTT DATA, Siemens, and UBS, to develop practical measurement tools and standards.
