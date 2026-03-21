---
title: "Cloud providers have only released carbon data to customers on a monthly basis, with delays of a few months"
summary: >
  How Adrian Cockcroft, Pindy Bhullar of UBS, and a working group including Microsoft Azure,
  Google Cloud, and AWS built the Real Time Cloud standard — the first specification requiring
  cloud providers to share real-time energy and carbon data in a common format, ratified
  April 2025 after 21 months of biweekly collaboration.

mainImage: /assets/stories/real-time-cloud.png
problemHeading: Cloud providers had the data — but customers received it months late, in incompatible formats, excluding renewable energy purchases
journeyHeading: From a conference proposal to a ratified standard with all three major cloud providers aligned

orgs:
  - name: UBS
  - name: Microsoft
  - name: Google
  - name: Avanade
  - name: Cisco
  - name: NTT DATA
  - name: Siemens
  - name: WattTime
  - name: Electricity Maps

stats:
  - value: April 2025
    label: RTC ratified — 21 months from launch to standard
  - value: "3"
    label: Major cloud providers aligned — Azure and GCP co-authored the standard; AWS responded to disclosure requests
  - value: Minute-by-minute
    label: The shift from monthly reporting with months of delay to real-time metrics for all cloud providers

timeline:
  - date: March 2023
    heading: Adrian Cockcroft proposes the standard at QCon London
    body: >
      Having spent years as AWS's VP of Cloud Architecture Strategy, Adrian Cockcroft
      understood both sides of the problem. Cloud providers had the data but lacked a
      standard format for sharing it. Customers needed that data to comply with emerging
      regulations and make informed decisions about where to run workloads. His framing:
      the goal was not perfect data but standardised, comparable data that would make the
      carbon emissions model for cloud workloads "less wrong and more useful."
    source:
      text: Read Adrian's original proposal on Medium
      href: https://adrianco.medium.com/proposal-for-a-realtime-carbon-footprint-standard-60b71c269948

  - date: July 2023
    heading: Project launched — working group begins biweekly meetings
    body: >
      The project was officially launched with a GitHub repository. What made it remarkable
      was who sat at the table: Microsoft Azure and Google Cloud Platform — fierce competitors
      — agreed to participate directly in the biweekly working group alongside enterprise
      consumers like UBS. This created a space where providers could hear directly from
      enterprises, and enterprises could understand the constraints providers faced.
      The group maintained this biweekly cadence for over two years.
    source:
      text: About the Real Time Cloud project
      href: https://directory.greensoftware.foundation/projects/real-time-cloud/

  - date: November 2023
    heading: Featured at Decarbonize Software 2023
    body: >
      RTC was highlighted in the GSF's Book of News as having "a clear mission: establishing
      a benchmark for measuring carbon emissions. This initiative marks a significant shift
      from the traditional practice of monthly reporting to the adoption of minute-by-minute
      metrics for all cloud providers."
    source:
      text: Read about Decarbonize Software 2023
      href: /articles/decarbonize-software-2023-redefining-the-future-of-software/

  - date: 2023–2024
    heading: Data gathering and first cross-provider dataset
    body: >
      The working group compiled regional metadata covering 2022 datasets from all three
      major cloud providers into a single comparable table — the first time this data had
      been assembled in a common format. In August 2024, the dataset was officially released
      as open data. In December 2024, AWS provided PUE data for 2022 and 2023 for the first
      time, responding to the working group's disclosure request and validating the standard's
      role as the industry mechanism for cloud carbon transparency.
    source:
      text: Real Time Cloud v1.0 release
      href: https://github.com/Green-Software-Foundation/real-time-cloud/releases/tag/v1.0

  - date: April 2025
    heading: Real Time Cloud standard ratified
    body: >
      RTC was ratified — 21 months from launch. The standard defines a Cloud Region Metadata
      Table covering how efficiently data centres use power (PUE — Power Usage Effectiveness)
      and water (WUE — Water Usage Effectiveness), the percentage of energy from carbon-free
      sources (CFE), renewable energy breakdowns including Power Purchase Agreements (PPAs)
      and Guarantees of Origin, and carbon intensity measured three ways: location-based
      (reflecting the local grid mix), market-based (reflecting contractual instruments like
      PPAs), and marginal (reflecting the emissions impact of additional demand). The table
      also includes grid zone IDs, geolocation, and total ICT energy consumption. The standard
      feeds directly into the GSF ecosystem: Impact Framework, SCI-o, and the CNCF Kepler
      project for Kubernetes pod and container energy allocation.
    source:
      text: Read about the Real Time Cloud standard ratification
      href: /articles/real-time-cloud-ratified-a-major-step-toward-transparent-sustainable-cloud-comput/

  - date: January–February 2026
    heading: V1.1 and ISO trajectory
    body: >
      The specification was reformatted to ISO formatting requirements in January 2026,
      signalling its trajectory towards formal international recognition. V1.1 was approved
      by the working group in February 2026, incorporating feedback from the FinOps Foundation
      — expanding the standard's reach beyond sustainability teams into financial operations.
      Adrian published the first-ever cross-provider PUE comparison in The New Stack using
      RTC's standardised dataset.
    source:
      text: Real Time Cloud on GitHub
      href: https://github.com/Green-Software-Foundation/real-time-cloud

featuredQuote:
  text: >
    This would open up opportunities to leverage existing performance monitoring tools
    and dashboards, extend optimization tools like autoscalers and schedulers, and to
    build new kinds of carbon analysis and optimization tools and services.
  author: Adrian Cockcroft, co-chair, Real Time Cloud

contributors:
  - name: Adrian Cockcroft
    role: Independent (formerly VP Cloud Architecture Strategy, AWS)
    org: Independent
    contribution: >
      Original proposer, co-chair, and primary technical driver who conceived the standard
      at QCon London and led biweekly working group meetings for 21 months. Published the
      first cross-provider PUE comparison using RTC data.
  - name: Pindy Bhullar
    role: Technology Sustainability Consultant
    org: UBS
    contribution: >
      Co-chair who brought the enterprise consumer perspective, connecting RTC to the
      broader organisational sustainability transformation. Also co-leads the SOFT framework.

quotes:
  - text: >
      This proposal seeks to define a standard for real-time carbon and energy data as
      time-series data that would be accessed alongside and synchronized with the existing
      throughput, utilization and latency metrics that are provided for the components and
      applications in computing environments.
    author: Adrian Cockcroft
    role: Proposal for a Realtime Carbon Footprint Standard
  - text: >
      Collaboration is essential at every level: within teams, across organisations, and
      even between institutions. Time is of the essence; we can't afford to wait for years
      to change the tech culture. The change needs to begin now.
    author: Pindy Bhullar
    role: GSF Advocate Series

relatedSlugs:
  - en/real-time-cloud-ratified-a-major-step-toward-transparent-sustainable-cloud-comput
  - en/what-s-shaking-at-the-gsf-a-summer-of-milestones
  - en/green-software-advocate-series-an-interview-with-pindy-bhullar
  - en/decarbonize-software-2023-redefining-the-future-of-software
  - en/green-software-foundation-book-of-news-2023

cta:
  heading: Use the RTC cloud region dataset today
  body: >
    All RTC data is openly available on the project's GitHub repository. If your
    organisation runs workloads across multiple cloud providers and struggles with
    inconsistent carbon reporting, the Cloud Region Metadata Table gives you comparable,
    standardised data now.
  ctaText: "View the RTC Dataset"
  ctaHref: "https://github.com/Green-Software-Foundation/real-time-cloud"
---

Organisations measuring the carbon footprint of their cloud workloads have faced the same foundational problem: data from cloud providers is late, incomplete, and incomparable across platforms. Cloud providers release carbon data on a monthly basis, with delays of several months. If you run workloads across AWS, Azure, and GCP, you receive three different reports using three different methodologies on three different timescales. There is no common format, no common definitions, no way to compare. RTC eliminates this fragmentation by establishing the first cross-provider standard for energy and carbon disclosure.

The consequences ripple through the entire green software ecosystem. Customers reporting Scope 3 emissions are forced to produce estimates using incomplete public information that excludes the cloud providers' own renewable energy purchases — systematically inflating emissions estimates. Organisations that have invested heavily in clean cloud infrastructure are penalised by the data gap.

This is not an academic concern. The Corporate Sustainability Reporting Directive in Europe and California's emerging requirements now mandate supply-chain-level carbon disclosure. The GSF's own SCI specification needs accurate grid carbon intensity as an input. Every measurement tool in the ecosystem is only as good as the data the cloud providers choose to share.
