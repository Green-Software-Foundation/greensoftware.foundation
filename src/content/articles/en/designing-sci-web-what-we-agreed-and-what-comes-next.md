---
title: "Designing SCI for Web: What We Agreed and What Comes Next"
date: "2026-02-03"
summary: "In autumn 2025, a group of GSF members reached consensus on the design foundation for SCI for Web.  Here is what they agreed on, how the AI-assisted process worked, and what's next."
teaserText: "A consensus-built methodology for measuring the carbon intensity of web applications"
mainImage: "/assets/articles/designing-sci-web-what-we-agreed-and-what-comes-next/main.png"
---

> 
> "Almost all of us use the web daily, and like everything else, we need to make using it more sustainable. By defining a standard for measuring website emissions, we make it easier for people to request greener digital services, for responsible technologists to build them, and to reach the fossil-free internet we all need".

As the Software Carbon Intensity (SCI) specification matured into an [ISO standard](https://www.iso.org/standard/86612.html), our members recognized that we needed a domain-specific, SCI-aligned approach to make it easier for developers, engineers, and product teams to measure and compare web emissions.

In Autumn 2025, fourteen GSF members with web-specific expertise piloted an AI-assisted assembly process to build a design document for SCI for Web. In ten weeks, the assembly moved from a blank page to a consensus document that will inform the specification’s development. 

The assembly members included Alekh Gupta (Google), Alexander Dawson (Climate Action Tech), Asim Hussain (Green Software Foundation), Camille Fassett (WattTime), Chris Adams (Green Web Foundation), Daniel Schien (University of Bristol), Facundo Armas (Globant), Florent Morel (Amadeus), Francesco Fullone (GrUSP), Mathias Uhlitzsch (Evosoft), Nisha Ramachandra (Accenture), Raghava Rao Battina (HSBC), Riccardo Pomato (Microsoft), Ryan Sholin (Electricity Maps), and Thiago Falcao Silva (NTT DATA).

In this article, we share what the participants agreed on (scope, personas, evaluation criteria), how the consensus process worked, and what comes next.

## The Assembly Process: How We Built Consensus in Ten Weeks 

Participants started by answering questions about what level of measurement accuracy would drive behavior change and what level of complexity would prevent adoption. Their responses were synthesized by an LLM to generate draft content, which the group then reviewed and refined through multiple rounds. In contentious areas, participants revised content until all objections were resolved. 

This deliberate "human-in-the-loop" experiment that started with questions ended with a clear decision gate that made objections visible and resolvable, reaching consensus in weeks rather than months.

## Why the Web Needs an SCI-aligned Methodology

Web sustainability measurement has evolved rapidly. Tools and frameworks like the Sustainable Web Design Model (SWDM), CO2.js, and the W3C Web Sustainability Guidelines have made web emissions visible and established foundational methodologies that thousands of practitioners use.

As organizations move from awareness to accountability, the industry needs approaches that support optimization decisions across the full delivery chain, including servers, browsers, and third-party services.

**SCI provides a strong foundation to measure and reduce web emissions** because it is clear about:

- **Boundaries**: Define what is in scope and what is not.
- **Rates**: Measure carbon per functional unit, not just totals.
- **Reporting**: Disclose methodology so results are comparable and defensible.

The assembly evaluated existing measurement frameworks against what practitioners need to make confident decisions: comprehensive boundaries that prevent shifting emissions elsewhere, functional units that reward efficiency, and implementation that fits existing workflows.

Based on this evaluation (detailed in Section 9 of [the design document) ](https://drive.google.com/file/d/1A8awPycDBAvF0GWaZlKwBPA_NE1OckRx/view?usp=sharing)SCI for Web aims to complement existing tools by extending the parent SCI specification to web-specific contexts.

## Three Outcomes That Define SCI for Web 

### Scope

SCI for Web applies to software applications that deliver value to users primarily through browser interfaces accessed via HTTP/HTTPS, where most rendering happens in the browser, and the interface is built for human interaction rather than machine-to-machine use.

This scope is platform-independent and technology-agnostic. Static sites, SPAs, server-rendered apps, e-commerce, streaming services, and real-time collaboration tools fall within scope if the primary value is delivered via browser interfaces.

### Target Personas 

The specification is designed for technical practitioners who build and optimize web applications across the full delivery chain.

Primary target personas include: 

- Frontend developers and design practitioners 
- Backend and infrastructure engineers 
- Product owners and technical managers 

These roles control different aspects of web application delivery, from client-side code and assets to server infrastructure and product decisions, all of which affect carbon emissions.

Modern web applications depend extensively on third-party services like analytics, advertising, CDNs, and authentication, which consume energy on both servers and client devices. To incentivize transparency, these services must be included within the SCI for Web boundary, using supplier-provided data where available or industry defaults with explicit disclosure otherwise.

### Evaluation Criteria

The core tension is clear: a specification that is technically accurate but unused won't serve its purpose, and a widely used metric that lacks credibility also won’t serve the purpose. 

To support adoption, the participants agreed on these key principles:

- **Accuracy proportionate to control**: Directly measured components require higher accuracy than modeled estimates. 
- **Mandatory disclosure:** Boundaries, assumptions, data sources, and methods must be clearly stated.
- **Integration over complexity**: Implementation should fit existing workflows, not require new toolchains.

These principles ensure that optimizing SCI for Web scores aligns with genuine carbon reduction: accurate measurement enables confident decision-making, workflow integration removes adoption barriers, and mandatory disclosure prevents gaming through selective boundary choices. For example, measurement approaches that automatically credit "green hosting" based on provider claims allow organizations to improve scores by switching hosts without reducing actual energy use. 

## What’s Next: Turning Design into Specification

The design document provides the foundation. The specification work ahead will translate these principles into practical guidance.

In Q1 2026, the SCI for Web specification will establish clear web-appropriate boundaries across servers, networks, third parties, and end-user devices; functional units that reflect delivered functionality; and disclosure requirements so results are comparable and defensible. 

We will know SCI for Web is working when: 

- Developers can integrate SCI for Web into existing workflows without specialized training.
- Organizations use measurements to prioritize which optimizations deliver the most carbon reduction.
- Third-party service providers start publishing energy data because customers need it for calculations.
- Multiple open-source tools emerge to make measurement progressively easier.

[**Read the full design document**](https://drive.google.com/file/d/1A8awPycDBAvF0GWaZlKwBPA_NE1OckRx/view?usp=sharing) to see the detailed evaluation criteria, comparative analysis of existing frameworks, gaming prevention mechanisms, and detailed consensus positions on scope and target users. 

## Get Involved 

We’re excited for SCI for Web to become a credible and usable standard across the industry, supported by active community participation. We’re inviting web specialists from across the membership to help develop the specification in Q1 of 2026: 

**If you’re a GSF member:  **

- **Become a project co-chair** to support Chris Adams (Green Web Foundation) in leading the SCI for Web project. Co-chairs help facilitate working sessions and review draft content. **Get in touch with the project team: sci-for-web@greensoftware.foundation** 
- **Join** [**the Software Standards Working Group**](https://directory.greensoftware.foundation/working-groups/software-standards-working-group/) and help shape the specification through draft review, implementation testing, and technical feedback.

**Not a member yet?**

[Join the Green Software Foundation](https://greensoftware.foundation/join-us/) to participate in this work and support open, industry-driven sustainability standards. GSF is led by Accenture, Cisco, Google, NTT DATA, Siemens, and UBS.
