---
title: 'Built to Measure: SCI, Impact Framework, and Carmen'
teaserText: How open-source tools are helping organizations measure and reduce their software carbon emissions.
date: 2026-04-21
published: true
summary: Three GSF tools, SCI, Impact Framework, and Carmen, work together to make software carbon measurable, auditable, and actionable for organizations worldwide.
mainImage: ../../built-to-measure-sci-impact-framework-and-carmen/579359366-3b09820b-6570-4485-9ad2-4ae11cde321f.png
mainImageAlt: "Illustrated graphic showing three connected circular icons representing the Green Software Foundation's measurement tools: the SCI specification (shown with the formula ((E x I) + M) per R), the Impact Framework (represented by a manifest file icon below), and Carmen (represented by dashboard and grid icons below). The three tools are visually linked, suggesting they work together as a system. Teal and green color palette on a teal background. Green Software Foundation logo and website URL in the bottom left corner."
featured: false
tags: []
authors:
  - fullName: GSF Team on behalf of the Software Standards Working Group
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

In 2021, when GSF was founded, our goal was to make software emissions visible at the industry level. Five years on, the problem has shifted. Software is now recognized as a significant carbon source, but knowing that software has an environmental impact isn't the same as being able to measure it. What we heard consistently from organizations was the need for a systematic way to quantify, track, and mitigate the carbon intensity of their software.

While existing metrics work well for annual reporting, they are not accurate enough for real-time tracking and exposing information that helps organizations and practitioners make better optimization decisions, set reduction targets, and prepare for regulatory requirements. 

The Software Carbon Intensity (SCI) specification, the Impact Framework (IF), and Carmen (Carbon Measurement Engine) are three complementary tools from the Green Software Foundation designed to address these gaps. 

## SCI: a Universal Yardstick for Software Carbon

The SCI specification ([ISO/IEC 21031:2024](https://www.iso.org/standard/86612.html)) provides a standardized way to make the carbon cost of running software visible, helping users and developers make informed choices regarding tools, architectures, and services.  

The formula is deliberately simple:

**SCI = ((E x I) + M) per R**

![Diagram illustrating the Software Carbon Intensity formula: SCI equals ((E multiplied by I) plus M) per R. Four color-coded callout bubbles define each variable: E (orange) is the energy consumed by software in kWh; I (green) is the carbon emitted per kWh of energy in gCO2/kWh; M (teal) is the carbon emitted through the hardware the software is running on; and R (grey) is the functional unit, described as how software scales, for example per user or per device. Green Software Foundation logo and website URL in the bottom left corner.](02-Measuring-Serverless-App-Emissions-on-AWS%20(1).png)

**E** is the energy your software consumes. **I** is the carbon intensity of the electricity grid from which that energy is drawn. **M** captures the “embodied emissions,”—the carbon baked into manufacturing, transporting, and eventually disposing of the hardware your code runs on. **R** is the functional unit you choose (e.g., per user, per transaction, per API call, per inference request), which translates a raw emissions number into a rate that can be compared over time and across systems.

The SCI score is an intensity metric, not an absolute total. That means the SCI score improves only when your software genuinely becomes more efficient. Scaling up your system does not automatically inflate your score, and scaling it down does not artificially improve it. Only reductions in energy use, smarter hardware choices, or shifting workloads to cleaner grids will reduce the score, not financial instruments like offsets.

> "What truly sets SCI apart and drives innovation is its focus on reduction rather than offsets. The specification emphasizes direct actions that teams can take to lower emissions, like optimizing compute usage, improving code efficiency, or adopting carbon aware scheduling."—Navveen Balani, Software Standards Working Group Chair and Managing Director at Accenture

Our member organizations across the globe have used SCI to assess their software for emissions reduction opportunities. One example is CAST Software. They applied the SCI specification to translate performance improvement into a carbon figure—a potential reduction of over 400kg of CO2 annually from a single application. [Read more on our blog.](https://greensoftware.foundation/articles/decarbonizing-software-how-cast-applied-the-sci-metric/) 

## The Impact Framework: Transparent, Auditable Calculation

The IF is the open-source engine built to make SCI calculations practical, repeatable, and shareable.

At its core, IF works with “manifest files”. These are simple YAML documents that describe your software system, the data sources you are drawing from, and the chain of calculations you want to run to turn those observations into SCI scores. 

A basic manifest might say: "take my CPU utilization data, look up the thermal design power of my cloud instance type, convert utilization to energy, multiply by the local grid carbon intensity, add the amortised embodied emissions of the hardware, and divide by the number of users served." Each step in that chain is handled by a plugin—a small, composable piece of logic. IF ships with a library of built-in plugins for common operations (interpolation, arithmetic, CSV lookups, time synchronisation), and anyone can write and share their own. IF is more than a carbon calculator; it’s a framework that allows you to share not only your SCI score, but the methodology you chose to get there.

When you share an IF manifest, you are not just sharing a number. You are sharing the entire calculation pipeline, with every assumption, every data source, every conversion factor. A colleague, an auditor, or a regulator could inspect the manifest, re-run it, challenge the inputs, and verify the output. It’s more of a credibility engine than a carbon calculator.

"I like to refer to these files as executable audits because they mean that you don't just report emissions numbers anymore, you actually show your working too."—Joseph Cook, Head of R&D at GSF 

IF also comes with practical tooling for the day-to-day work of carbon measurement. if-diff lets you compare two manifests side by side, which is useful for answering questions like "Did last month's optimization have a real impact on reducing our SCI score?" if-csv exports results for integration with existing reporting dashboards. if-merge combines manifests from different teams or services into a unified view. These are small features, but they turn a one-off calculation into an ongoing practice. 

## Carmen: IF at Enterprise Scale

The IF was designed to be flexible and general-purpose, but it doesn’t provide enterprise-scale visibility into which applications and which workloads have the biggest impact. 

When Amadeus, a company that processes approximately three billion flight search requests every day, faced this challenge in 2022, measuring emissions across hundreds of applications wasn’t possible with existing solutions. To solve the problem, their engineering team built Carmen, a measurement engine that implements IF across cloud infrastructure and Kubernetes clusters. 

> "Carmen is the enterprise version of the IF." —Florent Morel, Carmen Project Lead and Head of Green IT at Amadeus 

In January 2026, [Amadeus transferred ownership of Carmen to the GSF](https://greensoftware.foundation/articles/welcoming-carmen-carbon-measurement-engine-as-a-gsf-project/), making it available for organizations and practitioners to use and build on. Carmen integrates with the infrastructure tools that enterprise platform teams already use, such as Kubernetes and Prometheus, to collect real-time resource utilization data from virtual machines and container workloads. It feeds that data into IF manifests and runs the calculation pipeline automatically, producing per-application and per-infrastructure carbon measurements without requiring each application team to manually instrument their systems. Since carbon emissions and cloud costs stem from resource consumption, these insights help practitioners make decisions that reduce both.

For sustainability professionals in large organizations, Carmen solves a critical bottleneck. You no longer need to go team by team, spreadsheet by spreadsheet, asking engineers to estimate their resource consumption. Carmen pulls the data from the infrastructure layer, applies a consistent methodology via IF, and delivers results that can be aggregated, compared, and tracked over time. 

## The Opportunity: Beyond Compliance 

The regulatory landscape is shifting. The EU's Corporate Sustainability Reporting Directive (CSRD) requires qualifying companies to report gross Scope 1, 2, and 3 greenhouse gas emissions under the European Sustainability Reporting Standards (ESRS E1). Software-related emissions, whether from your own data centres (Scope 2) or cloud services you consume (Scope 3), fall within that scope. 

The EU AI Act goes further, requiring providers of general-purpose AI models to document energy consumption during training. And revisions to the GHG Protocol's Scope 2 guidance are pushing toward hourly, location-specific carbon accounting, which is the kind of granularity SCI is designed to provide. 

The GSF’s Software Standards Working Group has explored how [SCI aligns with several of these frameworks](https://greensoftware.foundation/policy/research/#paper), showing how organizations using SCI-based measurement today could be better-positioned for the compliance requirements of tomorrow.

But compliance is the floor, not the ceiling. These tools bring the biggest value for organizations that look beyond compliance and apply them internally. 

**Target setting and performance tracking:** As an intensity metric with a defined functional unit, SCI gives sustainability teams a concrete, trackable KPI. You can set a target like "reduce our SCI score by 20% over the next two years" and measure progress against it with confidence that improvements reflect genuine efficiency gains.

**Introspection and optimization:** IF manifests break down overall SCI into its component parts. You can see precisely how much of the total comes from each component in your stack, how much from embodied hardware emissions, and how the grid carbon intensity of your chosen cloud region affects it. That granularity tells you where to focus: is it worth migrating to a region with cleaner electricity? Would extending your hardware refresh cycle reduce embodied emissions more than optimizing your code? 

**Cross-team accountability:** Carmen's ability to produce per-application scores means sustainability is no longer a single number owned by a central team. Each product team can see its own SCI score and take ownership of improving it, in the same way they already own their latency and availability metrics.

**Procurement and supplier engagement:** As SCI adoption grows, choosing a product with a lower SCI score backed by a transparent IF manifest is becoming a verifiable, defensible basis for sustainability action in procurement.

## Getting Started

None of these tools requires you to be a software engineer. Sustainability professionals can read an IF manifest and understand what it calculates. The SCI formula is simple, and Carmen's outputs are designed to feed into the dashboards and reports that engineers already use.

The bigger challenge is organizational: establishing SCI as a metric that matters to your team, building it into your reporting processes, and giving your developers context to make optimizations. SCI provides the standard. IF eases the application. Carmen gives you scale. 

The GSF maintains all three as open-source projects. If you want to understand and reduce the environmental impact of your software, these tools are where to start.

**Learn more:** To learn how to integrate Carmen with your infrastructure, join us for [the introductory webinar on April 22](https://zoom.us/webinar/register/WN_E2YV9ntmT7WdYQY70frx_Q).  

**Get Involved:** Read more about using and contributing to these tools: 

[The Software Carbon Intensity Specification](https://github.com/Green-Software-Foundation/sci/tree/dev) 

[Impact Framework ](https://github.com/Green-Software-Foundation/if)

[Carmen (Carbon Measurement Engine)](https://github.com/Green-Software-Foundation/if-carmen) 

**Join us:** [Become a GSF Member](https://greensoftware.foundation/membership/) to collaborate with organizations like Amadeus and CAST, building the standards and tools for sustainable software measurement.
