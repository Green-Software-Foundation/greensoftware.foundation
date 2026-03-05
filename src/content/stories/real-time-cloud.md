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
    logo: /assets/logos/ubs.png
  - name: Microsoft
    logo: /assets/logos/microsoft.svg
  - name: Google
    logo: /assets/logos/google.png
  - name: Avanade
    logo: /assets/logos/avanade.webp
  - name: Cisco
    logo: /assets/logos/cisco.svg
  - name: NTT DATA
    logo: /assets/logos/ntt-data.png
  - name: Siemens
    logo: /assets/logos/siemens.png
  - name: WattTime
    logo: /assets/logos/watttime.png
  - name: Electricity Maps
    logo: /assets/logos/electricity-maps.svg

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

  - date: July 2023
    heading: Project launched — working group begins biweekly meetings
    body: >
      The project was officially launched with a GitHub repository. What made it remarkable
      was who sat at the table: Microsoft Azure and Google Cloud Platform — fierce competitors
      — agreed to participate directly in the biweekly working group alongside enterprise
      consumers like UBS. This created a space where providers could hear directly from
      enterprises, and enterprises could understand the constraints providers faced.
      The group maintained this biweekly cadence for over two years.

  - date: November 2023
    heading: Featured at Decarbonize Software 2023
    body: >
      RTC was highlighted in the GSF's Book of News as having "a clear mission: establishing
      a benchmark for measuring carbon emissions. This initiative marks a significant shift
      from the traditional practice of monthly reporting to the adoption of minute-by-minute
      metrics for all cloud providers."
    source:
      text: Read about Decarbonize Software 2023
      href: /articles/en/decarbonize-software-2023-redefining-the-future-of-software/

  - date: 2023–2024
    heading: Data gathering and first cross-provider dataset
    body: >
      The working group compiled regional metadata covering 2022 datasets from all three
      major cloud providers into a single comparable table — the first time this data had
      been assembled in a common format. In August 2024, the dataset was officially released
      as open data. In December 2024, AWS provided PUE data for 2022 and 2023 for the first
      time, responding to the working group's disclosure request and validating the standard's
      role as the industry mechanism for cloud carbon transparency.

  - date: April 2025
    heading: Real Time Cloud standard ratified
    body: >
      RTC was ratified — 21 months from launch. The standard defines a Cloud Region Metadata
      Table covering PUE, WUE, carbon-free energy percentages, renewable energy breakdown,
      carbon intensity (location-based, market-based, marginal, average), grid zone IDs,
      geolocation, and total ICT energy consumption. The standard feeds directly into the
      GSF ecosystem: Impact Framework, SCI-o, and the CNCF Kepler project for Kubernetes
      pod and container energy allocation.
    source:
      text: Read about the Real Time Cloud standard ratification
      href: /articles/en/real-time-cloud-ratified-a-major-step-toward-transparent-sustainable-cloud-comput/

  - date: January–February 2026
    heading: V1.1 and ISO trajectory
    body: >
      The specification was reformatted to ISO formatting requirements in January 2026,
      signalling its trajectory towards formal international recognition. V1.1 was approved
      by the working group in February 2026, incorporating feedback from the FinOps Foundation
      — expanding the standard's reach beyond sustainability teams into financial operations.
      Adrian published the first-ever cross-provider PUE comparison in The New Stack using
      RTC's standardised dataset.

featuredQuote:
  text: >
    Despite being the world's largest purchaser of renewable energy, cloud providers have
    only released carbon data to customers on a monthly basis, with delays of a few months.
    This gap leaves users relying on public data that overlooks these clean energy
    investments, resulting in inflated emissions estimates.
  author: RTC Ratification Article, Green Software Foundation

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
      Our goal is to ensure that real-time carbon metrics are available and can be aggregated,
      allocated, and apportioned throughout the information technology supply chain.
    author: RTC Ratification Article
    role: Green Software Foundation
  - text: >
      The project aims to make the carbon emissions model for cloud-based workloads less
      wrong and more useful by providing a standard mechanism for cloud providers to share
      detailed information.
    author: RTC Ratification Article
    role: Green Software Foundation
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
  note: The working group is actively seeking contributions to produce best-estimate region metadata for the current year
---

Every organisation trying to measure the carbon footprint of its software faced the same foundational problem: the data from cloud providers was bad. Not bad in the sense of being fabricated — bad in the sense of being late, incomplete, and incomparable. Cloud providers released carbon data to their customers on a monthly basis, with delays of several months. If you ran workloads across AWS, Azure, and GCP, you received three different reports using three different methodologies on three different timescales. There was no common format, no common definitions, no way to compare.

The consequences rippled through the entire green software ecosystem. Customers reporting Scope 3 emissions were forced to produce estimates using incomplete public information that excluded the cloud providers' own renewable energy purchases — systematically inflating emissions estimates. Organisations that had invested heavily in clean cloud infrastructure were being penalised by the data gap.

This was not an academic concern. The Corporate Sustainability Reporting Directive in Europe and California's emerging requirements now mandate supply-chain-level carbon disclosure. The GSF's own SCI specification needed accurate grid carbon intensity as an input. Every measurement tool in the ecosystem was only as good as the data the cloud providers chose to share.
