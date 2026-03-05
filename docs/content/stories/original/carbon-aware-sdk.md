## Story: "We can't shift workloads to clean energy"

**Who came together:**
- Vaughan Knight, Principal Engineering Manager, Microsoft -- launched and led the Carbon Aware SDK project from inception through graduation
- Kin Chiu, Executive Director and Sustainable Technology Lead, UBS -- drove UBS's strategic cloud initiative and led the Sustainable Technology Guild that connected UBS to GSF
- Paul McEwen, Global Head of Technology Services, UBS -- championed the first enterprise-scale carbon-aware computing deployment on a production banking platform
- Chris Lloyd-Jones, Head of Open Technologies, Avanade -- contributed to SDK development and CarbonHack22 sponsorship
- Mani Hagh Sefat, CTO and Board Member, Energy Web -- delivered the world's first decentralised carbon-aware computation nomination system
- Elisabeth Brinton, Corporate Vice President, Sustainability, Microsoft -- executive sponsor connecting Microsoft's sustainability commitments to GSF collaboration
- Takuya Iwatsuka, NTT DATA -- led the .NET 8 upgrade for Carbon Aware SDK v1.4
- Damien Roux, NTT DATA -- contributed to the .NET 8 upgrade and Carbon Aware SDK maintenance
- Yasumasa Suenaga, NTT -- contributed to the .NET 8 upgrade engineering work

**Organisations:** Microsoft, UBS, Avanade, NTT DATA, NTT, WattTime, Electricity Maps, Energy Web

### The Problem

In 2021, organisations across the Green Software Foundation knew something frustrating: the electricity grid was cleaner at certain times and in certain places, but their software had no way to respond to that signal. Workloads ran on dirty power even when clean power was available hours later or in a neighbouring region. The grid's carbon intensity fluctuated constantly -- sometimes powered largely by renewables, sometimes by coal and gas -- but applications were oblivious.

The problem was not a lack of ambition. UBS had formed a Sustainable Technology Guild to deliver on the firm's "Net Zero by 2050" commitment. Microsoft was publicly committed to being carbon negative. But the tools did not exist. As Kin Chiu described it, "Little awareness and slow adoption of greener software practices are the key obstacles that I see." Even where developers were willing, they had no standardised way to access grid emissions data, no common API to query, and no framework for making scheduling decisions based on carbon intensity.

Every organisation faced the same fragmented landscape. Carbon data came from different providers (WattTime, Electricity Maps) in different formats, with different access methods. Building a carbon-aware application meant each company reinventing the same integration work. The need was clear: a shared, open-source toolkit that could centralise the logic, provide a common interface to multiple carbon data sources, and make it easy for any developer to build software that does more when the electricity is clean and less when it is dirty.

### The Journey

**2021 -- The concept emerges.** Members of the GSF Open Source Working Group identified carbon-aware computing as a "quick win" to empower practitioners at all levels. A common need emerged to standardise the acquisition of grid emissions data. Vaughan Knight at Microsoft launched the Carbon Aware SDK project, starting with command-line tooling and a .NET library.

**2021-2022 -- From library to enterprise API.** Early conversations with member companies revealed that what they really needed was not just a library but a centralised web API. Companies wanted a fast-acting tool that could help them measure and adjust their behaviour to keep software emissions low. The shift towards enterprise enablement set the SDK up for broader adoption. By mid-2022, the SDK had a hosted API and a client library available in 40 different programming languages.

**October-November 2022 -- CarbonHack22 accelerates adoption.** The GSF ran its first-ever hackathon, CarbonHack22, coinciding with COP27. It drew 395 participants who submitted 51 eligible projects, all built on the Carbon Aware SDK. The results proved the concept worked. The first-place project, Lowcarb, achieved 13% carbon emissions reductions in federated machine learning without any negative impact on accuracy. The second-place project, Zeus, showed 24% carbon emission reductions in deep neural network training while decreasing learning time by only 3%. Prize money totalled USD 100,000, sponsored by Accenture, Avanade, Intel, Thoughtworks, Globant, Goldman Sachs, UBS, BCG, and VMware.

**January 2023 -- UBS deploys on production banking systems.** UBS and Microsoft partnered under the GSF umbrella to build the first enterprise-scale implementation of carbon-aware computing. They integrated the Carbon Aware SDK into UBS's Advanced Compute Quantum Analytics (ACQA) risk platform, using WattTime data to time-shift workloads during 24-hour windows. The 4-step process -- measure baseline carbon intensity, determine optimal forecasted window, measure actual intensity in that window, and calculate savings -- demonstrated that a production banking system could be made carbon-aware. The architecture used Azure Batch, Application Insights telemetry, the Carbon Aware SDK via REST API, Databricks, and Power BI for reporting.

**2023-2024 -- Broader adoption and maturation.** Vesta used the SDK to shift compute power for wind turbine simulations to cleaner windows. The SDK community grew. NTT DATA and NTT contributed engineering work including the .NET 8 upgrade (v1.4), which brought carbon metrics exporters, Prometheus and Grafana integration, and Kubernetes-level carbon monitoring dashboards. The upgrade involved updating 30 C# projects, migrating Azure Functions to the isolated worker model, and fixing cross-platform container builds.

**April 2024 -- First GSF project to graduate.** The Carbon Aware SDK became the first software project in the Green Software Foundation's history to achieve "Graduated" status, meeting all acceptance criteria including a public release, clear documentation, and evidence of usefulness through the UBS case study.

**October 2024 -- Decentralised carbon-aware computing.** Energy Web joined the GSF and announced they had delivered "the world's first decentralised computation nomination system based on sustainability factors using the Carbon Aware SDK." This extended carbon-aware computing beyond traditional cloud infrastructure into blockchain and Web3, proving the approach was architecture-agnostic.

### The Impact

- **13-24% carbon reductions** demonstrated at CarbonHack22 across different application types (federated learning, DNN training)
- **Multiple metric tons of CO2eq avoided per year** at UBS through time-shifting of financial workloads on a production banking platform
- **First GSF project to graduate** -- the SDK reached maturity and stability, supported by an active community
- **40 programming languages** supported via client library
- **395 participants** at CarbonHack22, with 51 eligible projects and USD 100,000 in prizes
- **Enterprise-scale deployment** at UBS, integrated into production risk modelling infrastructure
- **World-first decentralised carbon-aware computation** at Energy Web
- **Kubernetes carbon monitoring** enabled through v1.4's Prometheus metrics exporter and Grafana dashboards
- **Ongoing maintenance** by a cross-company community (Microsoft, Avanade, UBS, NTT DATA)

### Key Quotes

"The way we design and build our applications has a direct relationship to how much carbon they emit. With a better understanding of the impact our application designs have on the environment, we can make choices which have a more positive impact on the planet."
-- Paul McEwen, Global Head of Technology Services, UBS

"At Microsoft, we are committed to helping organizations reach their sustainability goals. Carbon-aware computing advances the measurement and reduction of carbon emissions associated with software technology at a global scale."
-- Elisabeth Brinton, Corporate Vice President, Sustainability, Microsoft

"Carbon Awareness is one of the hottest topics in the green software space, and now with the Carbon Aware SDK, it's easier than ever to build a carbon aware application."
-- Asim Hussain, Chairperson, Green Software Foundation

"Carbon aware software does more when energy is clean and less when it's dirty."
-- Green Software Foundation

"EWF has recently delivered the world's first decentralised computation nomination system based on sustainability factors using the Carbon Aware SDK."
-- Mani Hagh Sefat, CTO and Board Member, Energy Web

"Little awareness and slow adoption of greener software practices are the key obstacles that I see. It's human nature to take the path of least resistance, especially when it's hard to see and feel the immediate impact of your contributions."
-- Kin Chiu, Executive Director and Sustainable Technology Lead, UBS

### Related Articles
- `_legacy/content/articles/en/celebrating-the-graduation-of-the-carbon-aware-sdk.md`
- `_legacy/content/articles/en/carbonhack22-a-big-leap-in-carbon-aware-computing.md`
- `_legacy/content/articles/en/carbonhack22.md`
- `_legacy/content/articles/en/carbon-aware-computing-whitepaper-how-ubs-succeeded-in-measuring-and-reducing-car.md`
- `_legacy/content/articles/en/making-decentralized-systems-more-sustainable-meet-mani-hagh-sefat-of-energy-web.md`
- `_legacy/content/articles/en/upgrading-to-net-8-inside-the-carbon-aware-sdk-v1-4.md`
- `_legacy/content/articles/en/meet-steering-committee-member-of-green-software-foundation-kin-chiu-of-ubs.md`

### Call to Action
If you are already using the Carbon Aware SDK, submit a use case for review at the project's GitHub repository. If you are not yet using it, start with the quickstart guide at carbon-aware-sdk.greensoftware.foundation and select a data source (WattTime or Electricity Maps). For organisations eager to make a substantial impact, join the Green Software Foundation community to collaborate with Accenture, Avanade, Microsoft, NTT DATA, UBS, and other members shaping the future of carbon-aware computing.

### Open Questions
- **Exact CO2 savings at UBS:** The whitepaper states the system "is capable of avoiding multiple metric tons of CO2eq from entering the atmosphere -- every year" but does not give a precise figure. Need to confirm actual measured savings post-pilot.
- **Current number of SDK adopters:** No aggregate adoption numbers beyond the named case studies (UBS, Vesta, Energy Web). Need data on total downloads, deployments, or active users.
- **Location-shifting results:** The UBS deployment focused on time-shifting. Have any organisations deployed location-shifting in production, and what were the measured savings?
- **Energy Web outcomes:** The article announces the "world's first" decentralised carbon-aware computation but does not provide measured carbon savings. Need to follow up on results.
- **CarbonHack22 long-term impact:** Did any of the 51 hackathon projects (Lowcarb, Zeus, Circa, etc.) continue beyond the event into production use?
