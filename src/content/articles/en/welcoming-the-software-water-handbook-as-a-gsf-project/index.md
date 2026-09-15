---
title: Welcoming the Software Water Handbook as a GSF Project
teaserText: A shared resource helping practitioners and organizations measure and report software’s water impact.
date: 2026-09-15
published: true
summary: Developed at Amadeus, the Handbook brings together scattered data needed to measure software’s water footprint, supporting the Software Water Intensity (SWI) specification.
mainImage: Software-Water-Handbook-Intro.png
mainImageAlt: Amadeus and Green Software Foundation logos flanking an open-book icon with a water droplet, set on an illustrated dark blue landscape of isometric blocks with waterfalls, a lily pad and rippling water.
featured: false
tags:
  - standards
  - water
authors: []
translators: []
originBlogName: ''
publishedOriginUrl: ''
lang: en
---

As we’ve developed the [Software Water Intensity (SWI)](https://greensoftware.foundation/standards/swi/) specification, it has become clear that defining what to measure is only part of the work. Practitioners also need the data, sources, and context to apply it. This is especially important for water measurement, where the same volume can have very different impacts depending on where and how it is used.

Cloud Carbon Footprint provides data and methods for carbon. Until now, nothing equivalent existed for water. Developed by Hongliu Cao at Amadeus, the [Software Water Handbook](https://github.com/Green-Software-Foundation/software-water-handbook) addresses this gap by bringing fragmented data sources, worked examples, and practical guidance into one resource.

We’re excited to announce that Amadeus has transferred the Software Water Handbook to the Green Software Foundation. Led by Hongliu under the Software Standards Working Group, the Handbook will support the development and adoption of SWI, helping practitioners and organizations make informed decisions about their software’s water impact.

## A closer look at the Software Water Handbook 

The specification defines what to measure and how to calculate it. The Handbook complements it by connecting each component with relevant data sources and documenting the context, limitations, and methodological choices involved. 

Built around SWI, it mirrors the specification’s four components: direct operational water, indirect electricity-generation water, embodied water, and scarcity-weighted impact.

Established frameworks often consider different aspects of water risk, and as a result can produce very different assessments under similar conditions. Take [two data centers, one in Cairo and one in Dubai](https://caohongliu.medium.com/why-ais-water-footprint-is-harder-to-measure-than-carbon-096fc76536ad), each consuming 100 liters of water. [AWARE](https://doi.org/10.5281/zenodo.15133241) indicates around 12% higher impact in Cairo, while [Aqueduct](https://www.wri.org/aqueduct) flags greater risks in Dubai, including depletion and groundwater decline. 

Neither is wrong. The frameworks were built to answer different questions, and understanding that distinction is crucial to choosing where to run workloads and what to report. 

The Handbook supports SWI in several ways: 

- **Helps apply SWI with real-world data:** By bringing together structured data extractions and worked examples based on sustainability reports from major cloud providers and technology companies, the Handbook gives practitioners a practical starting point for measuring water impact. It also highlights where missing data, especially workload-level energy and allocation data, can prevent a defensible calculation.
- **Informs reporting and method requirements:** It compares provider reporting against SWI’s definitions and clarifies which impact methods apply to different types of water use. For example, a cooling system can withdraw a large amount of water while consuming only a fraction—a consumption-only metric can miss local pressure, and a withdrawal-only metric can miss permanent depletion.
- **Tracks evolving provider disclosure:** It analyzes sustainability reports over time, helping the specification respond to new data as it becomes available.
- **Balances precision and usability:** By working through real examples, the Handbook helps the Working Group identify which details need to be preserved and where the methodology can be simplified without losing its ability to guide action.

> “Working on Software Carbon Intensity (SCI) for AI showed me how much a shared standard can matter. Measuring water is harder—the location changes the meaning of the liter, and a single metric can answer one question while ignoring another. Navigating that takes practical guidance, not just raw numbers. That’s what inspired me to build the Handbook.”   

> Hongliu Cao, Senior Researcher, Amadeus, and Vice Chair of the Software Water Intensity project, GSF 

## Building a Shared Resource 

The Software Water Handbook draws on provider reporting, hydrology, life-cycle assessment, impact frameworks, and software engineering. Developing it further requires expertise from across these areas to expand coverage, strengthen the data, and improve how water impact is interpreted.

With relevant work already underway across the industry, the next step is to connect existing efforts and turn them into a coordinated community resource. Through our membership, the Working Group, and the wider community, we can help ensure the specification evolves alongside the data, methods, and practical experience. 

## Get Involved 

We invite researchers, practitioners, and providers to contribute across four areas: 

- **Expand direct operational water coverage**: Providers can publish more granular site-level water and energy data, while contributors can add new provider reports and expand regional coverage using the documented extraction workflow.
- **Develop indirect electricity water data**: Energy and grid researchers can help build the grid-level water-intensity dataset that is currently missing.
- **Build out embodied water data**: Life Cycle Assessment (LCA) and supply-chain researchers can contribute lifecycle data to populate this layer.
- **Strengthen impact methods**: Hydrology and water-scarcity experts can help compare frameworks, determine which metrics best reflect different aspects of water risk, and address open questions around withdrawal.

A documented workflow, automated schema checks, and a defined review and sign-off process make contributions structured, transparent, and consistent. 

Explore the project’s repository and contribution guidance: [https://github.com/Green-Software-Foundation/software-water-handbook](https://github.com/Green-Software-Foundation/software-water-handbook) 

Learn more about the SWI specification: [https://greensoftware.foundation/standards/swi/](https://greensoftware.foundation/standards/swi/) 

Reach out to the Software Standards Working Group to learn more about getting involved: [standards-wg@greensoftware.foundation](mailto:standards-wg@greensoftware.foundation) 

[Join the GSF](https://greensoftware.foundation/join-us/) as a member to help advance software water measurement, working alongside industry leaders to develop practical tools, resources, and standards.

_A big thank you to Hongliu Cao for creating the Software Water Handbook, and to Amadeus for transferring it to the Green Software Foundation._
