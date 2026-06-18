---
title: Introducing the Software Water Intensity (SWI) Project
teaserText: Led by the Software Standards Working Group, the Software Water Intensity (SWI) project aims to develop a consistent way to measure and reduce software's water footprint.
date: 2026-06-10
published: true
summary: Led by the Software Standards Working Group, the Software Water Intensity (SWI) project aims to develop a consistent way to measure and reduce software's water footprint.
mainImage: SWE-Announcement-cover.png
mainImageAlt: Isometric illustration showing a data center stack at the center, with water flowing from its base into a dark blue pool below. Small figures interact with the infrastructure — one examining a document, another observing the environment. Trees and natural elements surround the scene, rendered in green tones. Green Software Foundation logo in the bottom left corner.
featured: false
tags:
  - standards
  - water
  - specification
authors: []
translators: []
originBlogName: ''
publishedOriginUrl: ''
lang: en
---

:::card

### Get involved

The SWI project is open to contributions from member organizations.

::button{href="https://wiki.greensoftware.foundation/subscribe-swi" label="Subscribe to the SWI project" variant="primary"}

::button{href="https://greensoftware.foundation/join-us/" label="Join the Green Software Foundation" variant="outline"}

:::

Software's environmental impact has long been understood through a single lens: carbon. The [tools, standards, and practices the industry](https://www.entreprises.gouv.fr/files/files/Actualites/2026/g7/overview-measurement-monitoring-energy-resource-ai-models.pdf) has built over the past few years reflect that focus. As data centers expand and AI workloads grow, the gap between the resources software consumes and what the industry can measure is widening, and water usage is a significant part of it. 

Measuring water impacts requires accounting for both direct and indirect sources. Data centers [contribute to water consumption in three main ways](https://www.eesi.org/articles/view/data-centers-and-water-consumption): cooling, electricity generation, and semiconductor manufacturing. Many facilities use evaporative cooling systems that remove heat from servers through water evaporation, and beyond the facility, power generation itself is water-intensive. Earlier in the supply chain, the production process of semiconductors used for compute hardware also requires water. 

As a result, large data centers can have a substantial water footprint, in some cases reaching [millions of liters per day](https://arxiv.org/abs/2506.22773), depending on cooling design, location, and workload mix.

Yet the industry has no shared, reliable way to measure software's contribution to water consumption.

> _"The scale at which AI and data centers are consuming water is unprecedented — and the industry has no consistent way to measure it. Developing the Software Water Intensity specification is a direct response to that gap. I am honored to lead this project and to work alongside exceptional researchers and industry practitioners who share the conviction that water-aware software is not only necessary, but achievable."—Yi Ding, Assistant Professor, Purdue University and SWI Project Lead_ 

## **Why This Matters**

When we began working on the[ Software Carbon Intensity (SCI) specification](https://sci.greensoftware.foundation/), software's carbon footprint was inconsistently measured and rarely discussed in engineering teams. Today,[ SCI is ratified as ISO/IEC 21031:2024](https://greensoftware.foundation/articles/sci-specification-achieves-iso-standard-status/) and used across the industry to make carbon measurable and reportable, helping organizations identify opportunities for reduction.

While awareness around water footprint is increasing, water measurement is at the same early stage. 

Just by choosing a region where we run our software, organizations can[ change a workload's water footprint dramatically](https://arxiv.org/abs/2506.22773), though today we don’t have a shared way to see that difference. A standard gives organizations and practitioners a consistent approach to measure their footprint, compare options, and make informed choices about where and how their workloads run. 

As regulations including CSRD and disclosure requirements around water and sustainability [are tightening across regions](https://perspectives.se.com/blog-stream/changing-tides-the-future-of-water-risk-disclosure-requirements), and more data center operators begin publishing water data, the industry needs to better understand and respond to the implications of software's water footprint.

## **Solution and Scope** 

We’re launching the SWI project within the Software Standards Working Group, building on the same rate-based measurement approach that has helped make SCI a practical framework for reducing software carbon emissions.

Our aim is to develop the SWI specification following the same pattern as the SCI family of standards: a high-level specification that applies to all software, with domain-specific extensions to follow for areas where water consumption presents unique challenges, such as AI and hardware.

> _"A standard earns its credibility through process: open development, genuine expertise, and formal ratification that carries weight well beyond the working group that built it. That discipline defined the SCI specification, and it defines our approach to water. Regulatory oversight of software water consumption is inevitable. When it arrives, the industry will need a standard it can stand behind — and the evidence to show how it was built." — Sean McIlroy, Program Director, Green Software Foundation_

The SWI project is designed for cloud and infrastructure providers, hardware and semiconductor manufacturers, AI platform companies, and organizations facing water disclosure requirements that need a consistent and credible way to measure software's water footprint.

## **How to Contribute** 

The Software Water Intensity project is under the guidance of the Standards Working Group and currently in incubation, open to contributions from member organizations.

:::card

### Already a member?

Subscribe to the Software Water Intensity (SWI) project to get added to the mailing list, receive SWI meeting invites, and get updates on the project progress.

::button{href="https://wiki.greensoftware.foundation/subscribe-swi" label="Subscribe to the SWI project" variant="primary"}

:::

:::card

### Not a member yet?

The SWI specification is one of several standards in development, including future work on software security and circularity. Join the Green Software Foundation to help build the next generation of software sustainability standards.

::button{href="https://greensoftware.foundation/join-us/" label="Join the Green Software Foundation" variant="outline"}

:::

#### **Project lead**

[**Yi Ding**](https://www.linkedin.com/in/yi-ding-43571462/) is an Assistant Professor at Purdue University's Elmore Family School of Electrical and Computer Engineering, where she leads the STYLE Lab (Sustainable and Trustworthy computing sYstems and LEarning). Her research focuses on AI/ML systems and sustainability, examining the environmental impacts of computing, including carbon, water, and biodiversity. She has published on benchmarking LLM environmental impacts, water consumption in AI data centers, and carbon-aware computing, and previously held a visiting position at Meta's infrastructure data center. 

_The SWI specification is part of the Foundation's_ [_broader initiative_](https://greensoftware.foundation/articles/revisiting-green-software-from-silicon-to-screen/) _to make water a first-class environmental dimension of software, alongside carbon and energy. The initiative will expand along several tracks, and we'll share updates as the program develops._
