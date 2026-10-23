---
title: Introducing Sustainability Interoperability Layer for Operations (SILO)
teaserText: Connecting cooling, power, and compute data across vendors for energy-efficient operations.
date: 2026-10-22
published: true
summary: We've launched SILO, an initiative to connect cooling, power, and compute data across vendors for more energy-efficient operations, building on GSF’s existing standards work.
mainImage: SILO-Announcement.png
mainImageAlt: Isometric illustration of a data center platform where icons for power, cooling, water, servers, cloud, and a software dashboard are connected by lines to a central glowing sphere, representing a shared layer linking infrastructure data. Green Software Foundation logo in the corner.
featured: true
tags:
  - standards
  - hardware
authors: []
translators: []
originBlogName: ''
publishedOriginUrl: ''
lang: en
---

In a typical data center, servers, cooling, and power systems often come from different vendors, and each reports data in a different format. This fragmentation makes it difficult for operators to optimize system-wide energy use. 

Although we’ve seen significant progress in hardware innovation, connecting infrastructure components and making that data usable across platforms still requires considerable effort for every new deployment. 

Regulatory requirements are also increasing, making consistent infrastructure data even more crucial. Under the EU Energy Efficiency Directive, data centers of 500 kW or more report sustainability data annually. The European Commission is now consulting on minimum performance standards, and its [assessment of the first reporting period](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:52026DC0500) found that nearly a third of the reported data wasn’t reliable.

Today we’re excited to launch the [Sustainability Interoperability Layer for Operations](https://greensoftware.foundation/standards/silo/) (SILO), led by Lilach Butchmits (ZutaCore) under the Hardware Standards Working Group (HSWG). The project aims to reduce integration complexity while enabling smarter, more energy-efficient operation of AI and high-performance computing infrastructure.

> _“GSF is uniquely positioned to bring together stakeholders from across the ecosystem to address this challenge. By making infrastructure data more interoperable and accessible, SILO can help unlock smarter energy optimization at scale and, with it, faster innovation and a more sustainable path for digital infrastructure overall.”—Lilach Butchmits, Product Director at ZutaCore and SILO Project Lead_ 

## Solution & Scope

SILO defines a common data model that unlocks coordinated optimization of compute, cooling, and power. This lets workload schedulers make infrastructure-aware decisions and automated system controls anticipate demand and reduce energy use.

By adding an interoperability layer, SILO complements our [Workload Dynamic Power and Cooling](https://greensoftware.foundation/standards/wdpc/) (WDPC) specification. While existing systems continue using their current protocols, software can consume information regardless of the underlying vendor or interface.

SILO supports the entire data center ecosystem: 

- **Operators**: simpler multi-vendor deployment, new ways to optimize energy efficiency and operational costs, comparable metrics across sites, and improved reliability.
- **Equipment vendors**: a common way to expose operational data without requiring proprietary integrations. 
- **Software developers**: a consistent interface to infrastructure telemetry that works across vendors. 
- **Sustainability teams:** consistent, auditable metrics to support credible reporting.

## Roadmap & Milestones

Over the past months, the project team published a [technical note](https://greensoftware.foundation/policy/research/silo-companion-technical-note/) outlining SILO’s role in the architecture. We’re also working towards finalizing a [white paper](https://github.com/Green-Software-Foundation/sci-policy-and-legislation-alignment-white-paper-series/blob/main/whitepapers/Interoperability%20Layer%20for%20Real-Time%20Data%20Centre%20Sustainability%20Optimisation.md) proposing a standard way for data centers to respond to real-time grid signals, which relies on the consistent internal data SILO provides.

From November 2026, stakeholders from across the GSF community, industry, and academia will come together in an [Assembly](https://greensoftware.foundation/assemblies/sustainability-interoperability-layer-for-operations-silo/), a structured process to bring a group of experts to consensus on SILO’s scope and requirements. The report created through the Assembly will shape the draft specification.

After working group approval, the specification will open for public review to gather broader community feedback. As the specification matures, we plan to submit it for ISO standardization, following the path of other GSF standards, such as [Software Carbon Intensity](https://greensoftware.foundation/standards/sci/), now ISO/IEC 21031:2024. 

## How to Contribute 

We invite hardware and software practitioners to help shape SILO's initial specification. 

The Assembly will especially benefit from facility engineers running mixed-vendor sites, firmware and telemetry teams at equipment manufacturers, teams building data center infrastructure management (DCIM) or building management system (BMS) platforms, and sustainability leads. 

Participants will map the interoperability challenges and open questions behind three use cases: adaptive cooling, dynamic workload placement, and automated efficiency reporting (PUE, WUE, and CUE).

The Assembly runs asynchronously over email and, on average, requires an hour per week of participants' time over eight weeks. It starts November 16. Applications are open to anyone until **November 6.**  

::button{href="/assemblies/sustainability-interoperability-layer-for-operations-silo/" label="Apply to join the Assembly"}

### Project Lead 

Lilach Butchmits is Product Director at ZutaCore, where she leads industry standards and research partnerships. Her work centers on projects that improve the sustainability and efficiency of AI data centers. She also actively participates in several industry initiatives focused on liquid cooling and sustainable digital infrastructure.
