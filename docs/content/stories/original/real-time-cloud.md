## Story: "Cloud providers have only released carbon data to customers on a monthly basis, with delays of a few months"

**Who came together:**
- Adrian Cockcroft, Independent (ex-AWS VP Cloud Architecture Strategy) -- original proposer, co-chair, and primary technical driver who conceived the standard at QCon London and led biweekly working group meetings for 21 months
- Pindy Bhullar, Technology Sustainability Consultant, UBS -- co-chair who brought the enterprise consumer perspective and connected RTC to the broader organisational transformation work (also co-leads SOFT framework)
- Sean McIlroy, Linux Foundation / GSF -- convener who facilitated the working group process

**Organisations (spec definition):** Microsoft Azure, Google Cloud Platform, UBS, Avanade, BCG X, Cisco, NTT DATA, Siemens
**Organisations (data disclosure):** AWS (responded to disclosure requests with data in the standard format)

### The Problem

Every organisation trying to measure the carbon footprint of its software faced the same foundational problem: the data from cloud providers was bad. Not bad in the sense of being fabricated -- bad in the sense of being late, incomplete, and incomparable. Cloud providers -- the world's largest purchasers of renewable energy -- released carbon data to their customers on a monthly basis, with delays of several months. If you ran workloads across AWS, Azure, and GCP, you received three different reports using three different methodologies on three different timescales. There was no common format, no common definitions, no way to compare.

The consequences rippled through the entire green software ecosystem. Customers who needed to report their Scope 3 emissions were forced to produce real-time estimates using incomplete public information that excluded the cloud providers' own renewable energy purchases. The result was systematically inflated emissions estimates -- organisations that had invested heavily in clean cloud infrastructure were being penalised by the data gap. As the RTC ratification article stated: "This gap leaves users relying on public data that overlooks these clean energy investments, resulting in inflated emissions estimates."

This was not an academic concern. The Corporate Sustainability Reporting Directive (CSRD) in Europe and California's emerging requirements now mandate supply-chain-level carbon disclosure. Organisations needed real-time, region-level data -- Power Usage Effectiveness, Water Usage Effectiveness, carbon-free energy percentages, renewable energy breakdowns, grid carbon intensity -- and they needed it in a format that worked across providers. The GSF's own Software Carbon Intensity specification needed accurate grid carbon intensity as an input. The Impact Framework needed cloud region metadata. Every measurement tool in the ecosystem was only as good as the data the cloud providers chose to share.

### The Journey

**March 2023:** Adrian Cockcroft proposed the concept at QCon London. Having spent years as AWS's VP of Cloud Architecture Strategy, he understood both sides of the problem: cloud providers had the data but lacked a standard format for sharing it, and customers needed that data to comply with emerging regulations and make informed decisions about where to run their workloads. His framing drew on the statistician George Box's maxim -- "All models are wrong, some models are useful" -- arguing that the goal was not perfect data but standardised, comparable data that would make the carbon emissions model for cloud workloads "less wrong and more useful."

**June 2023:** Adrian submitted a formal PRFAQ (Press Release / Frequently Asked Questions) document to the GSF Standards Working Group, making the case for a Real Time Energy and Carbon Standard for Cloud Providers.

**July 2023:** The project was officially launched and the GitHub repository created. As the "What's Shaking at GSF" article announced: "Adrian Cockcroft is leading this project at the GSF and is gathering names of GSF members interested in joining the core team to help develop the standard." The working group began meeting every two weeks -- a cadence it would maintain for over two years.

What made this project remarkable was who sat at the table. Microsoft Azure and Google Cloud Platform -- fierce competitors -- agreed to participate directly in the biweekly working group, actively shaping the standard's definition alongside enterprise consumers like UBS. The group brought together cloud emissions producers and consumers, creating a space where the providers could hear directly from the enterprises that needed the data and the enterprises could understand the constraints the providers faced. AWS took a different but equally significant path: rather than joining the working group directly, they responded to the standard's disclosure requests, providing their data in the format the working group defined. That a provider of AWS's scale would respond to a disclosure framework created by a cross-industry working group validated the standard's authority and demonstrated that the approach could work even without requiring every provider to be in the room.

**September 2023:** The project was formally announced in the GSF's "What's Shaking" article, which framed the ambition clearly: cloud providers "need to supply real-time carbon metrics that can be aggregated by workload, allocated and apportioned through the supply chain to satisfy regulations that are in place in Europe and California, and emerging elsewhere."

**November 2023:** RTC was featured at Decarbonize Software 2023 and highlighted in the GSF's Book of News, which described it as having "a clear mission: establishing a benchmark for measuring carbon emissions. This initiative marks a significant shift from the traditional practice of monthly reporting to the adoption of minute-by-minute metrics for all cloud providers."

**2023-2024:** The working group spent months on painstaking data gathering and harmonisation. As part of the initial work, they documented multiple sources, interfaces, and products that collect and report energy and carbon data in a large Miro flow diagram. They then compiled regional metadata covering 2022 datasets from all three major cloud providers into a single comparable table -- the first time this data had been assembled in a common format.

**August 2024:** The collected data was officially released as an open dataset.

**December 2024:** AWS provided PUE data for 2022 and 2023 for the first time -- responding to the working group's disclosure request and further validating the standard's role as the industry mechanism for cloud carbon transparency.

**January 2025:** Adrian published an analysis in The New Stack titled "Cloud PUE: Comparing AWS, Azure and GCP Global Regions," using the RTC dataset to compare Power Usage Effectiveness across all three providers' global regions. This was the first time such a comparison had been possible using standardised data.

**April 8, 2025:** The Real Time Cloud standard was ratified -- 21 months from launch. The ratification article noted: "Our goal is to ensure that real-time carbon metrics are available and can be aggregated, allocated, and apportioned throughout the information technology supply chain."

**May 2025:** V1.0 was released for public feedback.

**January 2026:** The specification was reformatted to ISO formatting requirements, signalling the standard's trajectory towards formal international recognition.

**February 2026:** V1.1 was approved by the working group and submitted for final ratification, incorporating feedback from the FinOps Foundation among others.

### The Impact

- **Ratified standard** -- RTC ratified April 2025, the first standard for real-time cloud energy and carbon disclosure
- **3 major cloud providers aligned** -- Azure and GCP actively participated in defining the standard; AWS responded to the disclosure framework by providing data in the standard format -- all three contributing to a common dataset for the first time
- **Cloud Region Metadata Table** covering PUE, WUE, Carbon-Free Energy %, renewable energy breakdown (Guarantees of Origin, PPAs, on-site generation), carbon intensity (location-based, market-based, marginal, average), grid zone IDs, geolocation, and total ICT energy consumption
- **2022, 2023, and 2024 data published** for AWS and GCP; 2022 and 2023 for Azure (Azure has not published region-level 2024 data as of February 2026)
- **First-ever cross-provider PUE comparison** published in The New Stack, January 2025
- **Integrated into the GSF ecosystem** -- RTC feeds cloud region carbon data into Impact Framework, provides the grid-carbon-intensity input for SCI-o, and connects with CNCF's Kepler project for Kubernetes pod/container energy allocation
- **External data partnerships** with Electricity Maps (real-time grid carbon intensity) and WattTime (marginal grid carbon intensity)
- **V1.1 in progress** with FinOps Foundation engagement, expanding the standard's reach beyond sustainability teams into financial operations
- **8 steering members supporting** -- Avanade, BCG X, Cisco, Google, Microsoft, NTT DATA, Siemens, UBS

### Key Quotes

> "Despite being the world's largest purchaser of renewable energy, cloud providers have only released carbon data to customers on a monthly basis, with delays of a few months. This gap leaves users relying on public data that overlooks these clean energy investments, resulting in inflated emissions estimates."
> -- RTC Ratification Article, Green Software Foundation

> "Our goal is to ensure that real-time carbon metrics are available and can be aggregated, allocated, and apportioned throughout the information technology supply chain."
> -- RTC Ratification Article, Green Software Foundation

> "The project aims to make the carbon emissions model for cloud-based workloads less wrong and more useful by providing a standard mechanism for cloud providers to share detailed information."
> -- RTC Ratification Article, Green Software Foundation

> "With growing regulatory requirements like the Corporate Sustainability Reporting Directive (CSRD) in Europe, many organizations are now required to disclose greenhouse gas emissions from their cloud computing services as part of their Scope 3 emissions."
> -- RTC Ratification Article, Green Software Foundation

> "[The project has] a clear mission: establishing a benchmark for measuring carbon emissions. This initiative marks a significant shift from the traditional practice of monthly reporting to the adoption of minute-by-minute metrics for all cloud providers."
> -- Book of News 2023, Green Software Foundation

> "Adrian Cockcroft is leading this project at the GSF and is gathering names of GSF members interested in joining the core team to help develop the standard."
> -- "What's Shaking at the GSF," September 2023

> "Cloud providers need to supply real-time carbon metrics that can be aggregated by workload, allocated and apportioned through the supply chain to satisfy regulations that are in place in Europe and California, and emerging elsewhere."
> -- "What's Shaking at the GSF," September 2023

> "I believe it's grassroots initiatives driven by passionate individuals who dig deep, question, and strive to enhance sustainability through more efficient technology use."
> -- Pindy Bhullar, GSF Advocate Series Interview

> "Collaboration is essential at every level: within teams, across organizations, and even between institutions. Time is of the essence; we can't afford to wait for years to change the tech culture. The change needs to begin now."
> -- Pindy Bhullar, GSF Advocate Series Interview

### Related Articles
- `_legacy/content/articles/en/real-time-cloud-ratified-a-major-step-toward-transparent-sustainable-cloud-comput.md`
- `_legacy/content/articles/en/what-s-shaking-at-the-gsf-a-summer-of-milestones.md`
- `_legacy/content/articles/en/green-software-foundation-book-of-news-2023.md`
- `_legacy/content/articles/en/green-software-advocate-series-an-interview-with-pindy-bhullar.md`
- `_legacy/content/articles/en/introducing-the-2024-gsf-annual-report.md`
- `_legacy/content/articles/en/introducing-the-gsf-2025-annual-report.md`
- `_legacy/content/articles/en/decarbonize-software-2023-redefining-the-future-of-software.md`

### Call to Action

All RTC data is openly available on the project's GitHub repository. If your organisation runs workloads across multiple cloud providers and struggles with inconsistent carbon reporting, the Cloud Region Metadata Table gives you comparable, standardised data today. The working group is actively seeking contributions to produce best-estimate region metadata for the current year. Join the GSF to participate in the biweekly working group, contribute data, and help shape V1.1 and beyond.

### Open Questions

- **Adrian Cockcroft's exact current affiliation** -- described as "independent" but his specific consulting or advisory roles are not detailed in source articles
- **Individual company contributions to the working group** -- beyond the three cloud providers, the specific contributions of each steering member organisation are not documented in published articles
- **Azure 2024 data gap** -- Microsoft Azure has not published region-level 2024 data as of February 2026; no public explanation has been given for the delay
- **Quantitative adoption metrics** -- no published figures on how many organisations are using the RTC dataset for their Scope 3 reporting
- **The New Stack article details** -- the January 2025 PUE comparison article is referenced in research but the full findings and methodology are not captured in the GSF article archive
- **CNCF Kepler integration status** -- the integration is noted in project documentation but no published article details the technical implementation or adoption
- **FinOps Foundation feedback on V1.1** -- engagement is noted but specific feedback or changes resulting from it are not published
- **ISO formalisation timeline** -- the spec was reformatted to ISO requirements in January 2026, but no timeline for formal ISO submission has been published
