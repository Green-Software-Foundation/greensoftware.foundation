---
title: "Celebrating the Graduation of the Carbon Aware SDK"
date: "2024-04-16"
summary: "We’re thrilled to announce the Graduation of the Carbon Aware SDK. Learn more about the SDK, what this stage of maturity signals, how we got here, and what lies ahead."
teaserText: "We recognize and appreciate the contributions from Avanade, Microsoft, UBS and NTT DATA in helping us achieve this milestone. "
mainImage: "../images/celebrating-the-graduation-of-the-carbon-aware-sdk/main.png"
---

In 2021, a shared goal of our members was to identify where we could achieve quick wins to empower practitioners at all levels to decarbonize software. 



A common need emerged to standardize the acquisition of grid emissions data. Knowing that software could reduce its carbon footprint by running processes at different times and locations and that guidance and a resource to access emissions data from all sources were needed, the Open‌‌ Source Working Group began developing the Carbon Aware SDK to enable practitioners to gather carbon emissions data to build software that could respond to climate activity and energy demand. The project was launched by Vaughan Knight, Principal Engineering Manager at Microsoft.



We’re thrilled to announce the Graduation of the Carbon Aware SDK, the first of our software projects to reach this milestone, under the leadership of Vaughan Knight. Here, we share more about the SDK, what this stage of maturity signals, how we got here, and what lies ahead.

# Present Day



Today, the Carbon Aware SDK is a WebApi and Command Line Interface (CLI) tool that provides carbon emissions data from multiple carbon data sources, like WattTime and ElectricityMaps, to prioritize running during periods of green energy availability. The tool helps organizations centralize the logic, manage the platform, and ensure it is observable and auditable.



The SDK is mature and stable, supported by an active community. It has successfully met the [<u>necessary acceptance criteria</u>](https://oc.greensoftware.foundation/project-lifecycle.html#graduated) for graduation, including having a public release (latest v1.3), clear documentation and evidence of usefulness, like the use case from [<u>UBS</u>](https://greensoftware.foundation/articles/carbon-aware-computing-whitepaper-how-ubs-succeeded-in-measuring-and-reducing-car). We recognize and appreciate the contributions from Avanade, Microsoft, UBS and NTT DATA in helping us achieve this milestone. 



# A Collective Start



> *"Carbon aware software does more when energy is clean and less when it's dirty." *

At first, the focus was creating command line tooling and a .NET library. Supporting companies in meeting their sustainability goals, the need for a centralized web API surfaced. We learned that companies wanted a fast-acting tool that could help them measure and adjust their behaviour to keep their software emissions low. This shift towards enterprise enablement set the SDK up for much broader adoption. 



Continued collaboration and knowledge-sharing offered significant insight into real-world scenarios and needs, contributing to a v1.0 release, a hosted API and client library available in 40 different programming languages.



[<u>Carbon Hack 22</u>](https://greensoftware.foundation/articles/carbonhack22-a-big-leap-in-carbon-aware-computing) helped accelerate our understanding of the needs of practitioners globally, which positioned the project team to resolve bugs and enhance the quality of life decisions for configuration management and deployment.



# Charting Progress



Through emission reporting and hypothetical scenario analysis, adopters of the SDK were now assessing the potential impact of relocating large compute workloads to greener data centers or adjusting scheduling during times of cleaner energy. For example, the SDK enabled location shifting and time shifting of [<u>Vesta’s</u>](https://www.youtube.com/watch?v=4zKSSK8BdN8) compute power for their wind turbine simulation.



We started seeing evidence of how easy it is for any company to take steps towards greener software, without changing a single line of code. As AI strengthens its grip on tech, this will only become more critical.



It also became clear that industry-wide adoption of carbon-aware computing requires making all orchestrators–software that schedules and deploys large workloads–carbon aware. Once orchestrators are carbon aware, software can effectively minimize energy waste, optimize the use of green energy sources, and reduce curtailment. From batch schedulers to Kubernetes and cron jobs, the impact is substantial. It also facilitates the greening of legacy workloads, as the orchestrator deploying and running those workloads is analyzing and predicting the carbon intensity (how green or dirty the electricity is) of its application at any given time and in any given place and adjusting based on where and when green electricity is available and generating.



# Shaping Tomorrow



Location carbon shifting, while aiming to reduce emissions, can have unintended mid-term consequences. Transferring large processes to greener locations may strain local energy supplies, leading to increased reliance on fossil fuels to meet additional demand.



However, the longer-term consequences of geographical or temporal shifts towards clean energy will result in greening of the energy mix. As renewable energy becomes increasingly profitable, it drives the expansion of greener grids, diminishing the appeal of less sustainable alternatives. The journey toward widespread adoption of carbon-aware computing is nuanced; while this transformation unfolds gradually, it carries a lot of potential. 



As a project, we’re looking to add geolocation support to the SDK, in a responsible and sustainable manner. We’re exploring tools such as calculators, throttling, and guidance to help developers achieve net reductions to the emissions associated with local and global electricity grids. Additionally, we're expanding our resources, including samples, templates, and tools, to simplify the adoption of the Carbon Aware SDK.



If you are using the Carbon Aware SDK, you can** **[<u>**submit a use case for review**</u>](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/new?assignees=vaughanknight&labels=Case-study+submissions&projects=&template=case-study-template.md&title=Case-study+submissions). 



If you’re not yet using the Carbon Aware SDK, read about [<u>**Setting up and using the Carbon Aware SDK **</u>](https://carbon-aware-sdk.greensoftware.foundation/docs/quickstart)and [<u>**Selecting a Data Source**</u>](https://carbon-aware-sdk.greensoftware.foundation/docs/tutorial-extras/selecting-a-data-source). 



For organizations eager to make a substantial impact, aligning with industry leaders such as Accenture, Avanade, BCG X, GitHub, Intel Corp, Microsoft, NTT DATA Corporation, Siemens, UBS, and other influential collaborators, we invite you to [<u>**join our community**</u>](https://greensoftware.foundation/join-us/). 
