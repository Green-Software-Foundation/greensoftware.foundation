---
title: 'Revisiting Green Software: From Silicon to Screen'
teaserText: The Foundation expands its vision to cover the full environmental footprint of modern software.
date: 2026-06-04
published: true
summary: The Green Software Foundation expands its vision to cover the full environmental footprint of modern software, across carbon, energy, water, and waste. Learn what this evolution means for the practitioners, organizations, and decision-makers shaping green software.
mainImage: GS-Vision-cover.png
mainImageAlt: Isometric illustration showing two people building a layered technology stack, with a magnifying glass, cloud infrastructure, power lines, trees, and a server rack in the background, rendered in green tones. Green Software Foundation logo in the bottom left corner.
featured: false
tags:
  - standards
  - policy
  - strategy
authors: []
translators: []
originBlogName: ''
publishedOriginUrl: ''
lang: en
---

When we talk about green software today, the conversation has matured since the Foundation was first formed in 2021. We need to account for every resource our software consumes to exist, to run, and to deliver value, across every layer of the technology stack it interacts with. 

The pace of change makes this unavoidable. Generative AI has put unprecedented pressure on compute, energy, and water. Hardware refresh cycles are tightening as AI accelerator generations move faster than ever. Data centers are being sited around the availability of power and cooling, not just connectivity. Regulators across the EU, the UK, Asia, and North America are converging on disclosure regimes that directly affect software. The decisions developers, architects, and executives make today about how software is designed, built, deployed, and operated have material consequences for cost, carbon, energy, water, and waste, all at once.

The Foundation exists to make that footprint measurable and to provide the industry with the standards and practices to reduce it.

## A Working Definition

Reflecting this evolution, the Foundation's working definition of green software in 2026 is:

**Software, and the hardware it runs on, designed, built, and operated to minimize its carbon emissions, energy consumption, water usage, and waste across every layer of the technology stack, from silicon to screen.**

Three elements of that sentence are worth looking at. 

**"Software, and the hardware it runs on."** Software does not exist in isolation. Every line of code eventually consumes electrons on physical hardware that was mined, manufactured, shipped, powered, cooled, and one day disposed of. A green software practice has to take responsibility for that full picture, moving beyond the application boundary.

**"Carbon emissions, energy consumption, water usage, and waste."** These four elements are not interchangeable. Energy is what software directly consumes when it runs. Carbon is the climate consequence of that energy, weighted by where and when it was generated. Water is consumed in cooling the data centers our software runs in, and increasingly in semiconductor manufacturing. Waste covers the hardware lifecycle: what we buy, how long we run it, and what happens to it when we are done. While each needs to be measured and designed for, none of them represents the whole story on its own.

**"Across every layer of the technology stack, from silicon to screen."** Every layer has decisions to make, and every layer has an impact. From the chip a workload runs on, through the infrastructure that hosts it, the platforms and runtimes that implement it, the data and AI systems that increasingly drive it, the applications and experiences users interact with, to the governance and observability that holds all of it accountable.

## Beyond Carbon: Why One Metric Is Not Enough

In 2021, our earliest conversations in green software focused, rightly, on carbon. Carbon is the impact most directly tied to the climate crisis, and it is the metric regulators have built reporting frameworks around. The [Software Carbon Intensity specification](https://sci.greensoftware.foundation/), SCI, became the world's first ISO-aligned standard for measuring the carbon impact of software, and it remains the foundation for everything we have built since. 

Carbon is no longer enough to capture the full environmental impact of modern software. 

A workload that is optimized for carbon may still consume considerable water for cooling. A workload that is energy-efficient may still drive premature hardware turnover that creates significant embodied emissions. An AI inference pipeline may have a small per-request carbon cost but trigger water consumption upstream at the data center scale that no application-level metric captures. As these dimensions interact, each of them, on its own, represents an incomplete picture of a system's environmental impact.

This is why all four dimensions matter. Carbon, energy, water, and waste are closely interconnected. Optimizing for one without seeing the others can displace the problem rather than solve it. What the industry needs is a consistent approach to measuring and designing across all four, with clear standards supporting each dimension.

There is another reason why we need to consider all of these dimensions: cost. Energy is the largest variable operating expense in a modern technology infrastructure. Water restrictions are reshaping where data centers can be built. Hardware costs are rising as accelerator demand outpaces supply. The same engineering decisions that reduce environmental impact also reduce the cost of running modern software. 

> _“Green software, from silicon to screen, marks the Foundation's next chapter—a commitment to measuring and advancing the reduction of the digital value chain's end-to-end resource footprint. This work spans software, infrastructure, networks and data centres and addresses all material impact categories including energy, carbon, water and waste. The standards and community supporting this effort are open, vendor-neutral, and designed to serve the whole industry.”—Gadhu Sundaram, Chair, Green Software Foundation; Vice President, NTT DATA UK_

## The Technology Stack: Six Layers, From Silicon to Screen

Taking green software seriously end-to-end requires looking at the stack as a single architecture, not as isolated concerns. There are six layers where decisions are made, each with its own levers, measurement challenges, and opportunities.

![Isometric diagram showing the Green Software Foundation's technology stack in six layers from bottom to top: Hardware & Devices, Infrastructure & Cloud, Platforms & Runtimes, Foundations – Data, AI & ML, Applications & Experience, and Governance & Observability. Three pillars — Standards, Best Practices, and Patterns — run vertically through all layers. Green Software Foundation logo in the bottom right corner.](GS-Vision-stack2.png)

### 1. Hardware and Devices

The foundation. Servers, accelerators, network gear, storage, end-user devices. This is where embodied carbon lives, where water is consumed in manufacturing, and where the hardware waste that accumulates across the lifecycle is created. Decisions made here are about hardware lifecycle, sustainable manufacturing, how often hardware is upgraded, and end-of-life recovery. The Foundation's [Hardware Standards Working Group](https://directory.greensoftware.foundation/working-groups/hardware-standards-working-group/) and the work going into hardware-aware standards is the space for this conversation.

### 2. Infrastructure and Cloud

Where workloads physically run. Data center design, regional carbon and water intensity, cooling efficiency, and power sourcing. For developers, this is the layer of choices around region selection, instance sizing, and capacity planning. For executives, this is procurement, vendor selection, and increasingly disclosure. The Software Water Intensity (SWI) standard, now underway at the Foundation, sits at this layer alongside the established carbon standards. 

### 3. Platforms and Runtimes

Operating systems, container runtimes, virtualization, orchestration, and language runtimes. Often overlooked, this layer determines how efficiently the hardware below gets used. Idle waste, over-provisioning, inefficient scheduling, and runtime choice all add up to a significant environmental impact at scale.

### 4. Foundations, Data, AI, and ML

The data platforms, training pipelines, inference systems, and AI infrastructure that increasingly define modern applications. This layer has shifted from peripheral to central in the last two years. [SCI for AI, ratified at the end of 2025](https://greensoftware.foundation/articles/sci-ai-specification-ratified-standard-for-measuring-ai-emissions-across-the/), gives the industry the first consensus-based standard for measuring the carbon footprint of AI systems, built on the ISO-certified SCI methodology. The work here is only beginning, and it is one of the fastest-moving areas for the next decade of green software.

> _"To understand AI's carbon footprint, we first need a consistent way to measure it. SCI for AI gives the industry that foundation — built on the ISO-certified SCI methodology, designed for the full lifecycle of AI systems from training to inference, and open for any organization to adopt."_—Jonathan Turnbull, Vice Chair, Green Software Foundation, Environment & AI lead, Google

### 5. Applications and Experience

Where software meets the user. Application architecture, frontend efficiency, mobile and edge delivery, network traffic, and the design patterns that govern how features are built and how they perform. The [Green Software Patterns](https://directory.greensoftware.foundation/projects/green-software-patterns/) project, alongside initiatives like the [Web Sustainability Guidelines (WSG)](https://www.w3.org/TR/web-sustainability-guidelines/) from W3C, supports decisions developers make daily in this layer. 

### **6. Governance and Observability**

The connective tissue. Measurement, telemetry, reporting, disclosure, and procurement standards. SCI as a measurement framework, SCI for AI as its AI-specific counterpart, and the disclosure standards that connect engineering practice to corporate sustainability reporting and regulatory frameworks like the [Corporate Sustainability Reporting Directive (CSRD)](https://greensoftware.foundation/articles/the-sci-standard-providing-the-software-emissions-data-csrd-needs/), the [EU AI Act](https://greensoftware.foundation/policy/research/sci-ai-eu-ai-act/), and emerging legislation in California and beyond. Without this layer, the other five are unverified claims.

These layers do not exist in silos. A choice at layer one (hardware) shapes the potential to make improvements at layer five (applications). A pattern decision at layer five can multiply or divide the load on layers two and four. Treating the stack as a whole helps make these trade-offs visible, and that is where better design decisions start. 

## What This Means for Practitioners 

If you are an engineer building, deploying, or operating modern software, the practical implications are concrete.

The decisions you already make about architecture, region, instance type, model selection, caching, query patterns, payload size, and refresh strategy are sustainability decisions. They have always been. The difference is that now the industry has, or is building, the standards to measure them more accurately, and the patterns to make better choices the default.

For AI work specifically, the levers are clearer than they have ever been: model selection, prompt design, inference architecture, accelerator choice, the trade-off between cost, carbon, and response time, training decisions, and how systems retrieve relevant information. Each of these has a measurable impact, and each is a skill that the next generation of practitioners will be expected to bring to the work.

Across these decisions, the same patterns emerge: measure before you optimize, choose patterns that compose well across all layers, and design for the full lifecycle of the systems you build. 

## What This Means for Decision-Makers 

The implications are equally direct for those setting strategy.

Sustainability is no longer a separate workstream from cost discipline, capacity planning, or AI strategy. It is the same workstream, viewed through a different lens. The technology infrastructure that minimizes carbon, energy, water, and waste is almost always the same one that minimizes the total cost of ownership. Procurement decisions, vendor commitments, regional strategy, and AI investment all sit inside this frame.

The disclosure environment is moving fast. CSRD in Europe is now in force for large organizations and is progressively expanding. The EU AI Act includes sustainability clauses that will land on operational practice. Public procurement frameworks across multiple jurisdictions are beginning to [reference standards like SCI directly](https://digital.defra.gov.uk/sustainability/metrics), and governments worldwide, including G7 member states, are recognizing [SCI for AI as part of the broader push to measure and report AI's impacts](https://www.entreprises.gouv.fr/files/files/Actualites/2026/g7/overview-measurement-monitoring-energy-resource-ai-models.pdf). As a result, organizations that already measure against open, ISO-aligned standards will face less friction as these requirements expand.

Working with global organizations, we see expectations shifting, too. Practitioners want to work on systems that account for their impact. Customers, particularly enterprise customers and governments, increasingly ask for evidence of this impact. The engineering capability to build green software at scale is becoming a differentiator, not a cost.

## Where the Foundation is Heading

The Foundation's role is to be the venue where the standards, the patterns, and the practitioner skills behind this vision get defined, ratified, and put into practice, in the open, under Linux Foundation governance, with the global community of members and contributors that has shaped where we are today. Governments, regulators, and standards bodies, such as the [Department for Environment, Food and Rural Affairs (Defra)](https://greensoftware.foundation/articles/the-green-software-foundation-joins-the-uk-government-digital-sustainability-alli/) and [GovTech Singapore](https://greensoftware.foundation/articles/creating-a-digital-sustainability-ecosystem-meet-henry-chang-of-govtech-singapore/), increasingly engage with the Foundation to ground their own frameworks—disclosure regimes, procurement standards, sustainability clauses—in open, ISO-aligned standards and practices.

Where our work is heading:

- Accelerating the energy and water standards pipeline alongside the established carbon work to fully cover the four-dimensional picture.
- Operationalizing Green AI—moving SCI for AI from ratified specification into practice through the SCI for AI Bootcamp, the ISO submission pathway, Green AI best practices and patterns, and reference architectures for Green Agentic AI systems.
- SCI specifications for new domains, including Data, Mobile, Gaming, and Security, extending measurement into areas where it has not yet existed.
- Green Software Patterns across every layer of the stack, so the practitioner community has concrete, vendor-neutral guidance to draw on.
- Industry Points of View co-authored with members, translating the standards into sector-specific practice.
- Deeper integration with other Linux Foundation projects, including Cloud Native Computing Foundation (CNCF), the FinOps Foundation, and LF Energy, so the cross-cutting concerns of green software meet the communities that share them.
- Open source software, [Reference Implementations](https://greensoftware.foundation/articles/introducing-gsf-reference-implementations/), tooling, and agent-ready Green Software Skills that turn the standards and patterns into working code, so practitioners and agents can measure, reduce, and contribute directly across the stack.
- Continued policy engagement with governments and standards bodies, making sure the standards developed here connect cleanly to the disclosure and procurement frameworks emerging worldwide.

This is a vision shaped by an evolving ecosystem—open, collaborative, and one that can only be realized through the participation of technology leaders and practitioners working together.

## How to Get Involved

If your organization is ready to reduce the environmental impacts of its technology footprint, there are two paths: 

[**Join the Foundation as a member**](https://greensoftware.foundation/membership/)**.** GSF members shape the standards, contribute to the working groups, and sit at the table where the next generation of green software practice is being defined. Membership is open to organizations across the technology ecosystem: hyperscalers, enterprises, consultancies, hardware vendors, software vendors, public sector bodies, and academic institutions. The Steering Members of the Foundation today represent some of the largest technology, consulting, and industrial organizations in the world, and the membership is growing.

[**Engage with the standards and working groups**](https://wiki.greensoftware.foundation/register)**.** Whether you are a developer, an architect, a researcher, a policy professional, or an executive, there is a place to contribute. The Software Standards Working Group, the Hardware Standards Working Group, the Green AI Committee, and the Policy Working Group are all open venues for participation. The [Self-Certification Program](https://greensoftware.foundation/articles/sci-self-certification-a-standardized-way-to-disclose-software-s-carbon-emissions-data/) is open for organizations that have already calculated an SCI score and want to put it on the record.

Visit[ greensoftware.foundation](https://greensoftware.foundation) to learn more. 

***

## A Note from the Executive Director

Green software, from silicon to screen, is where the industry is heading. The standards, the patterns, and the practitioner community to support that shift are being built in the open at the Foundation, and the door is open for any organization serious about this work to participate in shaping it.

If you would like to discuss what engagement with the Foundation could look like for your organization, we would welcome the conversation directly. Please reach out to Jamie Cowan, Head of Global Partnerships, at [jamie@greensoftware.foundation](jamie@greensoftware.foundation), or me, Navveen Balani, Executive Director, Green Software Foundation, at [navveen@greensoftware.foundation](navveen@greensoftware.foundation).
