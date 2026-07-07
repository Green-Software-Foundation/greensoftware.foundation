---
title: "Capital, Compute, and Carbon: Banking's Three Disciplines for Agentic AI"
teaserText: What banking's existing governance disciplines tell us about managing agentic AI.
date: 2026-07-07
published: true
summary: In our article, Navveen Balani, GSF Executive Director, examines how banking's existing governance disciplines extend to agentic AI and how they could benefit from shared measurement standards.
mainImage: 01-Capital,-Compute,-and-Carbon.png
mainImageAlt: "Illustration of a bank building with three figures standing in front, each connected to different data visuals — a document and text list, a candlestick stock chart with clocks, and a pie chart with a dollar sign — representing the three governance disciplines of model risk, disclosure, and cost.  Shorter version (if there's a character limit): Illustration of a bank with three figures linked to data visuals representing model risk, disclosure, and cost — the three governance disciplines discussed in the article.  Let me know if the CMS has a specific character cap and I'll tighten further."
featured: false
tags:
  - standards
  - measurement
authors:
  - fullName: Notes from the Executive Director, GSF
    role: ''
    company: ''
    companyWebsite: ''
    photo: ''
    socialMedia: []
translators: []
originBlogName: ''
publishedOriginUrl: ''
lang: en
---

Banking already runs on three disciplines that matter for agentic AI: model risk management, climate disclosure, and cost control. Each has its own committee, language, and regulator, and is mature and broadly aligned across major financial centers. By the standards of any industry adopting AI at scale, that is a strong starting point. 

But agentic AI demands more than the models these disciplines were designed to govern. A single agent run can issue many model calls, retry decisions, plan over multiple steps, and use tools across systems. The model inventories that the validation function depends on were not built for systems that compose themselves in real time.

Every call is a model decision under existing frameworks, and every step is an inference that falls under regulatory scope.

The stakes are rising on several fronts at once: the capital at risk when an agent makes a consequential decision, the pace at which compute consumption is outrunning the system built to track it, and the carbon, energy, and water behind that compute, which is becoming a reportable line item just as the workloads accelerate.

At the same time, the regulatory landscape is intensifying: model risk regimes, climate disclosure standards, and a new generation of AI-specific guidelines that bring AI agents explicitly into scope are all reaching financial institutions at once.

This is a problem of scale and coordination rather than effort. No single institution can build the measurement methodologies and patterns needed to turn agentic AI into an operating discipline—for this to work, banks need to share a common standard and a way to compare progress. 

## **Inside a Bank's Agentic Workload**

The financial services agent doesn't usually look like the consumer chatbot. It looks more like a research workflow that pulls filings and drafts a memo, a surveillance pipeline that flags anomalies for a compliance officer, a KYC reviewer that checks watchlists and waits on sign-off, or a reconciliation agent resolving breaks across counterparties.

These workloads share many characteristics: many model calls, several rounds of reflection, and, because markets work 24/7, operation across time zones. A surveillance agent handling roughly a million alerts a year, with fifty model calls and a few rounds of reflection per investigation, can produce a compute footprint orders of magnitude above the rules engine it complements. Across a global institution's full operations, the cumulative footprint multiplies again. 

These shared characteristics are what make the existing disciplines relevant.

### **The First Discipline: Model Risk**

Banking is one of the few industries with a long history of formal model risk management. SR 11-7 in the United States, on the books since 2011, set the early expectations. The Bank of England's SS 1/23 brought a more recent framework into force in the United Kingdom. The EU AI Act classifies common financial services applications—creditworthiness assessment, risk pricing in life and health insurance —as high-risk, with phased obligations applying from 2025 onwards. Singapore's FEAT Principles, the Veritas methodology, Project MindForge for generative AI, and the recent MAS Consultation Paper on Guidelines for AI Risk Management, which explicitly bring AI agents into scope, represent one of the most structured industry-co-created frameworks in any jurisdiction.

While the vocabulary differs across these regimes, the behavior it describes is the same. Models must be validated and monitored, with documented inputs, outputs, and assumptions, clear ownership, and defined limits.

With agentic AI, there are more points that need governing. Every tool call is a decision and every planning step is an inference. A retry is another model invocation with outputs that may or may not be within scope of the model inventory. The principles that make an agentic system auditable also make it more efficient: right-sizing the model for the task, bounding the planning depth, logging tool calls, and maintaining a centralized view of AI in use. 

The implications of these decisions are significant. A bounded planner is easier to govern and cheaper to run, and a right-sized model is easier to validate and uses less energy per call. 

## **The Second Discipline: Disclosure**

Climate disclosure has moved from voluntary commitments to standardized reporting in a short window. The ISSB's IFRS S2 standard is being adopted across multiple jurisdictions, including the United Kingdom and Singapore. The EU's CSRD brings climate and broader sustainability disclosures into mandatory reporting cycles for large companies operating in Europe. Singapore's MAS Environmental Risk Management Guidelines (2020) set supervisory expectations on governance, risk management, and disclosure of environmental risk, with the addendum on Transition Planning, issued in March 2026, taking effect in September 2027. Banks separately have well-developed methodologies for financed emissions through PCAF.

What is changing is that the compute footprint of AI workloads—the energy used to run them, and the embodied carbon and water associated with the infrastructure behind them—is no longer a rounding error. As agentic workloads scale, they become a reportable line item rather than a footnote.

The institutions that built rigorous financed-emissions and environmental risk methodologies are well positioned for this. Attributing impact to a portfolio is structurally similar to attributing impact to a compute workload: define the unit of work, choose a defensible factor, draw a clear boundary. The [Software Carbon Intensity specification](https://sci.greensoftware.foundation/), an ISO standard, provides a starting point for the operational view. The [SCI for AI specification](https://greensoftware.foundation/standards/sci-ai/), ratified in late 2025, extends that thinking to AI workloads specifically. Work on software energy efficiency and water-usage effectiveness is progressing in parallel.

Disclosure doesn't need to develop a new language, but to extend the existing one to compute as a new asset class.

## **The Third Discipline: Cost**

Banking is the industry that taught the world to care about basis points. Agentic AI introduces a new line item with the same character—small unit cost, large volume, compounding across the workflow. A retry that costs fractions of a cent can translate into millions of dollars when executed across a global customer base. A planning step that consumes a few extra thousand tokens consumes much more when an agent reflects three times instead of once.

The patterns that bring this under control are familiar to anyone who has run a technology cost practice. Tier the workloads—let small models do classification and routing, and reserve larger general-purpose models for the steps that genuinely need them. Bound the reflection and retry budget. Cache stable questions to avoid recomputing them. Treat token consumption as a metered resource with budgets and alerts.

None of this is new to a treasury function or a technology cost-management office. The novelty is that the meter measures takens and model calls rather than instance-hours.

## **Bringing the Three Together**

In most large banks today, three teams are looking at agentic AI from three different angles. The model risk function wants to know whether it can be validated. The disclosure team is asking how it gets reported. The cost function needs to understand what it consumes.

The same agentic system answers all three. A right-sized, well-instrumented agent is easier to validate, lower in operational emissions, and cheaper to run. A poorly governed one fails all three tests.

A simple structural change goes a long way: add carbon, energy, and water columns to the existing model inventory. Bring sustainability leads into model risk reviews. Treat the compute footprint as a vendor risk question that already has a governance home. SCI for AI is designed to serve as the shared measurement layer across the three conversations.

The reason this matters now is timing. The agentic workloads being designed and deployed this year will set the operating baseline for several years. Architecture decisions about model selection, planning bounds, and execution patterns harden quickly. Getting them right early is straightforward. Retrofitting them is not.

## **A Practitioner's Note**

For developers and operators building agentic systems, the design principles are concrete: from picking the smallest model that meets the accuracy requirement for each step, through defining explicit stop conditions and budgets, and logging tool calls, to making latency, energy, embodied carbon, and water visible on the same dashboard. Just as banks optimize portfolios across return, risk, and liquidity, agentic AI portfolios are optimized across accuracy, cost, latency, carbon, and resource consumption—and the trade-offs are decided one workload at a time. 

Risk and compliance teams will find the existing frameworks largely fit for purpose. The carbon and resource view extends the model inventory rather than replacing it. 

Sustainability leads will see the financed-emissions and environmental risk methodologies translate more directly than they might appear to. 

The open question for executive sponsors is whether the three conversations are sharing the same data. In many institutions today, they aren't yet.

## **How Standards, Levers, and Patterns Work Together** 

To make agentic AI's environmental footprint measurable, reducible, and operable within a bank's existing systems, standards, reduction levers, and patterns need to work together. 

**Standards**. Software Carbon Intensity provides the foundation. SCI for AI extends it to AI workloads. The work in progress on software energy efficiency and water-usage effectiveness will fill in further. These are jurisdiction-neutral by design—the same measurement layer maps to ISSB-aligned disclosures, to the EU's CSRD, to Singapore's ENRM Guidelines, and to the financial sector frameworks emerging in other markets. Standards give institutions a defensible unit and methodology, and a common reference that disclosure regimes can rest on.

**Reduction levers**. Measurement is necessary but not sufficient: a defensible metric for carbon, energy, or token consumption only matters if there are validated ways to bring the numbers down. The reduction levers for agentic AI are becoming increasingly well understood: model right-sizing, tiered routing, bounded reflection and retry budgets, caching, carbon-aware scheduling, region-aware deployment, and serving-stack optimization. Standards tell a bank where it stands. Reduction levers tell it what to do next.

**Patterns**: the reference architectures, audit-ready logging conventions, model inventory schemas, and integration approaches that translate a metric and a lever into a system that can be operated and validated. How agentic tool calls are logged so the validation team and the disclosure team can read the same artifact. How tiered routing is implemented in a KYC workflow without compromising accuracy on the cases that matter. How carbon-aware scheduling is reconciled with settlement deadlines and market hours. How a model inventory carries carbon, energy, and water columns alongside the usual fields.

A Green AI patterns catalog for financial services—a curated, openly accessible set of architectural patterns, anti-patterns, and reference implementations that map onto the workflows banks already run- would mean organizations could rely on existing, proven implementations instead of building them from scratch. 

Standards anchor the measurement, levers move the numbers, and patterns make both repeatable. The Green Software Foundation brings standards, tooling, and a cross-sector community together at scale. For financial services specifically, that means more banks bringing their own patterns and practice into the shared space.

## **Summary**

As agentic AI introduces a new class of assets whose costs are measured not only in capital, but also in compute, carbon, and water, the discipline that financial services already practices extends naturally to these new dimensions. 

Institutions that integrate them into existing governance frameworks early, and that contribute to the shared standards, levers, and patterns being developed across the industry, will build more efficient, more trustworthy, and more resilient agentic AI systems.

If your institution is working through these questions, the Green Software Foundation community is a natural place to bring them—including the kind of financial services patterns catalog the industry would benefit from. 

Read more on getting involved at[ greensoftware.foundation/membership](https://greensoftware.foundation/membership), and I am always glad to make time for a direct conversation; you can reach me at navveen@greensoftware.foundation.

_These notes reflect themes from conversations across the Green Software Foundation community and are intended to spark discussion. They do not represent a formal GSF position._
