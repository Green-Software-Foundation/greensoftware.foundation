---
title: "SCI for Web Assembly Report"
subtitle: "Consensus Design Document for Measuring Web Application Carbon Intensity"
date: 2026-02-01
published: true
status: published
type: report
version: "1.0"
summary: >
  The full consensus design document for SCI for Web, created by 14 GSF members through an AI-assisted assembly process. Covers scope definition, target personas, and implementation practices.
workingGroup: software-wg
tags: ["sci-web"]
authors:
  - name: SCI for Web Assembly
    org: Green Software Foundation
---

This document was created in Autumn 2025 using an AI-orchestrated assembly process. Participants answered an initial set of questions by email, all of which were synthesised and used by an LLM to generate candidate content for each of the numbered sections in this document. The candidate content was then reviewed by the participants. After each round of review, a new candidate entry was generated, leading to a final round of review where participants ENDORSED, CONSENTED or OBJECTED to merging the proposed content into the draft. When there were no objections, the content was merged by the project chair.

There were 14 participants in total, but the maximum number of active participants per round was 7. This document details the requirements for the SCI for Web specification. The actual specification will be created in Q1 2026 according to this design document.

| | |
| ----------- | ----------- |
| Chris Adams (Chair) | Green Web Foundation |
| Alekh Gupta | Google |
| Alexander Dawson | ClimateAction.tech |
| Camille Fassett | WattTime |
| Daniel Schien | University of Bristol |
| Facundo Armas | Globant |
| Florent Morel | Amadeus |
| Francesco Fullone | GrUSP |
| Mathias Uhlitzsch | Evosoft |
| Nisha Ramachandra | Accenture |
| Raghava Rao Battina | HSBC |
| Riccardo Pomato | Microsoft |
| Ryan Sholin | Electricity Maps |
| Thiago Falcao Silva | NTT DATA |

---

## 1. Scope Definition

The SCI for Web specification applies to software applications that deliver functional value to human users primarily through browser-based interfaces accessed via HTTP/HTTPS protocols. A web application is characterised by three essential criteria:

1. Content and functionality delivered over HTTP/HTTPS protocols
2. Rendering and execution occurring primarily within web browser environments or equivalent web rendering engines
3. Interfaces designed for direct human interaction and consumption rather than exclusively machine-to-machine communication

The scope encompasses the full spectrum of browser-based applications regardless of architectural sophistication, including static content websites, dynamic platforms, single-page applications (SPAs), server-side rendered applications, e-commerce systems, media streaming services, and real-time collaborative tools.

The distinguishing principle is browser-mediated human interaction: if users primarily access functionality through web browsers to accomplish tasks or consume content, the application falls within scope. This definition is intentionally platform-independent and technology-agnostic, focusing on delivery mechanism and user interaction patterns rather than specific implementation technologies.

### API Classification

API-driven services require additional classification based on their primary access pattern. Pure machine-to-machine APIs serving only programmatic clients are out of scope and should use the base SCI methodology. However, APIs accessed primarily through browser-based interfaces — such as those with interactive documentation as the primary usage method or those coupled with browser-based management dashboards — fall within scope when the browser interface represents the primary human interaction mode.

The determining factor is whether human users consume the service's value through browser rendering, not whether HTTP protocols are involved.

---

## 2. Target Personas

The SCI for Web specification is designed for technical practitioners who create and optimise browser-mediated web applications, spanning both server-side infrastructure and client-side implementation. Because the agreed scope defines web applications through "browser-mediated human interaction via HTTP/HTTPS," the specification must serve personas who control energy consumption across the entire delivery chain — from servers generating responses to browsers rendering content for human users.

### Frontend Developers and Design Practitioners

These practitioners control the code, assets, and experiences delivered to browsers, directly affecting energy consumed on end-user devices during browser-mediated interactions. This includes:

- **Frontend developers**: JavaScript bundle size and optimisation, CSS efficiency, framework selection for client-side execution, third-party script integration, rendering performance, asset optimisation (images, fonts, videos), progressive enhancement strategies, and client-side caching
- **UX/UI designers**: Interface design decisions affecting resource consumption (infinite scroll vs. pagination, video backgrounds vs. static images, auto-playing media), interaction patterns determining data transfer frequency, content structure and information architecture
- **Content designers**: Content strategy affecting page weight, media selection and optimisation requirements, structured content delivery

**What they control**: Client-side code efficiency, browser rendering performance, third-party client-side dependencies, asset delivery and optimisation, user interaction patterns, content weight and structure, design decisions with 10x+ energy impact potential.

**What they don't control**: Server-side infrastructure location, database architecture, hosting provider selection, network infrastructure between datacenter and user, end-user device hardware specifications.

### Backend and Infrastructure Engineers

These practitioners control server-side systems that generate and deliver content to browsers, affecting operational emissions from datacenters and infrastructure. This includes:

- **Backend developers**: Server-side code efficiency, API design and optimisation, database query performance, caching strategies, session management
- **Infrastructure and systems engineers**: Cloud provider and geographic hosting location selection, server capacity planning and right-sizing, resource utilisation policies, infrastructure architecture (static vs. dynamic provisioning), build and deployment pipeline efficiency (CI/CD, testing, artifact storage)
- **Platform and DevOps engineers**: CDN configuration and edge caching, architectural patterns affecting server/client computation distribution (server-side rendering, static site generation, hybrid approaches), monitoring and observability systems, performance optimisation tooling

**What they control**: Server-side compute and storage resources, database efficiency and architecture, geographic hosting location and carbon intensity exposure, infrastructure capacity relative to actual traffic, deployment and build processes, caching at server and CDN levels, API efficiency.

**What they don't control**: End-user device choices, browser vendor implementations, client-side third-party script behaviour (though can control whether to include them), market-based carbon offsets (excluded from SCI methodology).

### Product Owners and Technical Managers

These practitioners translate organisational goals into technical requirements and manage trade-offs between features, performance, and sustainability. This includes:

- **Product owners and managers**: Feature prioritisation and lifecycle management ("gardening" — pruning unnecessary features), performance budget setting, sustainability target definition, trade-off decisions between functionality and efficiency
- **Technical leads and architects**: Architectural decision-making authority, technology selection across the stack, team capacity allocation for optimisation work, supplier and third-party service selection criteria, non-functional requirements including performance and sustainability

**What they control**: Which features get built and maintained, performance and sustainability budgets, team time allocation for optimisation, supplier selection based on sustainability criteria, architectural standards and patterns.

**What they don't control**: Day-to-day implementation details, supplier internal implementations (though can switch suppliers), end-user behaviour and device choices, industry-wide standards (though can advocate).

### Critical Inclusion: Third-Party Dependencies and Transparency

Modern web applications depend extensively on third-party services for functionality (analytics, advertising, authentication, payments, CDNs, hosting). These dependencies consume energy on both servers and client devices. Third-party services must be included within the SCI for Web boundary to incentivise measurement, monitoring, and improvement of their performance and energy efficiency, encouraging them to reduce their own carbon emissions. Measurement and monitoring also provides the necessary data to make informed decisions about when and whether to select third-party services over first-party implementations.

When precise energy data from third-party suppliers is unavailable, practitioners shall use industry default values with explicit disclosure that estimates were used. This approach balances comprehensiveness with implementation feasibility while creating market pressure for suppliers to provide transparency.

**Supplier influence mechanism**: While practitioners cannot directly control third-party implementations, they exercise influence through vendor selection, contractual requirements for emissions transparency, and the collective market signal that sustainability performance affects purchasing decisions.

### Acknowledged but Not Primary Targets

**Suppliers and third-party service providers**: While their implementations significantly impact web application carbon footprint, they are users of this specification rather than its primary audience. The specification enables practitioners to pressure suppliers for transparency and better performance through informed vendor selection.

**Standards bodies and regulatory authorities**: These entities set the broader context but are not the specification's implementation audience. The specification should align with existing standards (parent SCI methodology, accessibility guidelines) and support regulatory compliance without targeting these bodies as primary users.

**End users and consumers**: These individuals have limited agency based on choices made by practitioners. User-facing interventions (sustainable mode toggles, carbon-aware delivery options) depend on practitioner implementation and are better addressed through choice architecture design than direct user targeting.

---

## 3. Implementation Practices and Incentives

This section defines the specific practices that SCI for Web should encourage or discourage in teams who measure and optimise web applications. These implementation practices guide design decisions throughout the specification, ensuring that measurement drives genuine carbon reduction rather than metric optimisation.

**Implementation Note**: While this section describes comprehensive practices across all system components, teams may adopt SCI for Web incrementally. Starting with measurable components (client-side and server-side infrastructure under direct control) and progressively expanding scope to include network transfer and third-party services is an acceptable path to comprehensive measurement. However, disclosed methodology must clearly identify which components are measured versus estimated versus excluded to maintain transparency and prevent gaming.

**Note on Principles vs. Prescription**: The practices described below represent principles and patterns that reduce energy consumption. They are not prescriptive engineering requirements. Teams should evaluate these principles within their specific context and implement them using approaches appropriate to their architecture, constraints, and objectives.

### Encouraged Practices

#### For Frontend Developers and Design Practitioners

Energy reduction outcomes targeted: Reduce data transfer, reduce page weight, reduce client-side energy consumption, extend end-user device lifespan, reduce CPU/GPU utilisation during rendering.

Energy reduction practices to encourage:

- **Optimise asset delivery**: Reduce bundle sizes, compress assets appropriately (images, videos, PDFs, audio files, and other media), eliminate unused CSS and JavaScript, implement code splitting, lazy-load non-critical resources
- **Choose efficient rendering approaches**: Use progressive enhancement, implement server-side rendering or static generation where appropriate, minimise client-side computation for tasks that could run more efficiently on servers
- **Design for efficiency**: Favour text over video or decorative image backgrounds, implement pagination over infinite scroll where appropriate, avoid auto-playing media, optimise animation performance, design effective user workflows that minimise unnecessary interactions
- **Reduce third-party dependencies**: Minimise analytics scripts, advertising trackers, and external fonts; evaluate whether each third-party service provides sufficient value for its energy cost
- **Optimise for diverse devices**: Test on low-end devices, implement responsive images, ensure experiences work efficiently across device capabilities
- **Inform users**: Provide transparency about the environmental impact of using or overusing certain features, such as reverse logistics in e-commerce or continuous rendering of intensive visual assets

#### For Backend and Infrastructure Engineers

Energy reduction outcomes targeted: Minimise server-side resource usage, reduce datacenter electricity consumption, reduce CPU/memory/storage utilisation, reduce network transmission distance and carbon intensity exposure.

Energy reduction practices to encourage:

- **Right-size infrastructure**: Match server capacity to actual load, avoid over-provisioning, implement auto-scaling that responds to real demand, decommission unused services, optimise underlying infrastructure choices such as VM instance types and image sizes
- **Optimise database and API efficiency**: Design efficient database schemas, write efficient queries, implement appropriate indexing, reduce unnecessary data fetching, cache effectively, eliminate N+1 query patterns
- **Choose efficient hosting**: Select hosting providers and regions based on carbon intensity and renewable energy availability, use edge computing to serve users from geographically closer locations
- **Architectural efficiency**: Implement effective caching strategies (CDN, server-side, database), use content delivery networks appropriately, select efficient technology stacks
- **Measure and monitor resource utilisation**: Track actual CPU, memory, and storage usage; identify and eliminate wasteful operations; implement benchmarking during development and production phases

#### For Product Owners and Technical Managers

Energy reduction outcomes targeted: Prevent feature bloat that increases page weight and server load, establish performance constraints that limit energy consumption, incentivise vendor efficiency improvements through market pressure.

Energy reduction practices to encourage:

- **Practice "feature gardening"**: Regularly audit and remove low-value features that consume resources, resist feature bloat, prioritise quality over quantity
- **Set performance and environmental budgets**: Establish and enforce limits on page weight, JavaScript execution time, and API response times that implicitly constrain energy consumption; define environmental budgets that track sustainability KPIs such as energy use, waste, and CO2 emissions thresholds in alignment with frameworks like GRI
- **Make informed vendor decisions**: Select third-party services based on their efficiency and carbon transparency, require emissions data from vendors, switch to more efficient alternatives when available
- **Allocate optimisation time**: Provide team capacity for performance and efficiency work, treat optimisation as ongoing maintenance rather than one-time effort
- **Balance functionality with efficiency**: Make conscious trade-offs between feature richness and resource consumption, question whether new features justify their carbon cost
- **Make carbon efficiency a quality attribute**: Implement non-functional requirements for carbon emissions, measure them, and use them as quality gates in development processes
- **Prefer "always-available" over "always-on"**: Design resource systems so that resource-intensive features (like intensive rendering, data export, or batch processing) can be scheduled during low-carbon periods or rate-limited rather than running continuously at any time

#### For Third-Party Service Providers and Hosting Suppliers

Energy reduction outcomes targeted: Reduce energy consumption per operation across all customer implementations, enable informed vendor selection through transparency, reduce grid carbon intensity through renewable energy procurement.

Energy reduction practices to encourage:

- **Provide transparency**: Publish energy consumption and carbon emissions data for services, offer APIs for customers to access real-time or historical emissions data
- **Optimise per-operation efficiency**: Reduce the energy cost of each API call, script execution, or service interaction across all customer deployments
- **Support carbon-aware computing**: Enable customers to schedule non-urgent operations during periods of lower grid carbon intensity
- **Minimise client-side footprint**: Reduce the size and processing requirements of client-side scripts (analytics, advertising, widgets)

---

*This design document was produced through the AI-assisted assembly process. The actual SCI for Web specification will be developed in Q1 2026 based on these consensus positions.*
