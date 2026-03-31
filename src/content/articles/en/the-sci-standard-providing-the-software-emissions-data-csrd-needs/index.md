---
title: 'The SCI Standard: Providing the Software Emissions Data CSRD Needs'
teaserText: A new white paper maps SCI to the reporting requirements European organizations face under new regulations.
date: 2026-03-31
published: true
summary: A new white paper from GSF's Software Standards Working Group maps the SCI standard to CSRD's reporting requirements. Learn how to go from software energy data to a CSRD-compliant disclosure, and how SCI complements GHG accounting by adding the granularity needed to measure software impacts.
mainImage: 02-SCI Standard for CSRD Compliance-01.webp
mainImageAlt: White paper cover illustration for the Green Software Foundation's SCI white paper. Dark green background with illustrated icons including stacked document folders, an EU flag, a compass, a judge's gavel, and a large central medallion with the text "SCI". Top left reads "WHITEPAPER" with the SCI logo. Bottom left shows the Green Software Foundation logo and greensoftware.foundation URL.
featured: false
tags:
  - '"policy", "standards","research"'
authors: []
translators: []
originBlogName: ''
publishedOriginUrl: ''
lang: en
---

When talking to our members across financial services, telecommunications, and technology, we keep hearing the same thing: they know software is a growing part of their footprint, but existing carbon accounting approaches can’t give them the data they need—a specific, defensible number for their software emissions.

In 2026, thousands of organizations across Europe are preparing for their first Corporate Sustainability Reporting Directive (CSRD) disclosures. For many, that means going beyond accounting for emissions from buildings, travel, and supply chains. Software emissions are part of that disclosure, too. That includes the applications that their teams build, the cloud infrastructure they run on, and the energy consumed every time a customer uses a product.

And that's where the problem starts.

Not because these emissions aren't visible. Because there's no established method to calculate them at the level of detail that a regulator and an auditor will expect.

## Why Software Emissions Are So Hard to Report Accurately

The CSRD requires nearly 10,000 European companies to disclose greenhouse gas emissions across their value chain, including the software they develop, deploy, and procure. Under ESRS E1, the climate reporting standard within CSRD, organizations need to report gross emissions and present a credible transition plan with reduction targets.

Existing frameworks like the GHG Protocol were built to capture an organization's total emissions—scopes, categories, and annual totals. Measuring individual software systems requires a different level of detail.

Three things make reporting software emissions hard:

- **Cloud abstraction**: When workloads run on AWS, Azure, or Google Cloud, the underlying physical infrastructure and the energy it consumes, needed for precise calculations, aren't visible to the organization using it.
- **Shared resources**: Virtualization means multiple workloads share a single physical server. Attributing a fair share of that server's emissions to a specific workload is complex.
- **Embodied emissions**: The carbon from manufacturing the hardware your software runs on is rarely counted, because cloud providers don't expose the data needed to calculate it.

That creates a gap between what the regulation requires and what most organizations can provide. It gets even more complicated across value chains: When a SaaS company runs on AWS, the same server emissions can appear in three different reports: the cloud provider's, the SaaS company's, and their customer's, without a shared approach to connect them.

## How the SCI Standard Can Help

The Software Carbon Intensity (SCI) specification, published as ISO/IEC 21031:2024, provides a methodology for calculating a carbon intensity score for any software system. In a worked example from the paper, a payment API processing 50 million transactions annually can produce an SCI score of under 1 gCO₂e per transaction—a granular, traceable figure that can directly support a CSRD report when used alongside conventional GHG accounting.

Two things make the standard a useful complement to CSRD reporting.

First, SCI measures emissions as a rate, not a total. It calculates carbon per functional unit — a transaction, an API call, a user session. This means efficiency improvements are visible in the data regardless of business growth. Total emissions may rise as the user base scales; the SCI score shows whether the software itself is getting more or less efficient and where to focus to improve it. This is the kind of detail that corporate-level GHG accounting doesn't provide.

Second, an SCI score can only be reduced through genuine emissions reductions. Offsets don't improve the score, which aligns with CSRD's requirement that reduction targets must be reported gross, without credits or removals.

Notably, SCI complements rather than replaces existing approaches. The GHG Protocol and ESRS E1 define the compliance baseline, including Scope 2 reporting under both location-based and market-based methods. SCI covers the former but not the latter.

What SCI adds is the granularity that those frameworks lack: the ability to measure, compare, and reduce emissions at the level of individual software systems. The three frameworks work together: the GHG Protocol defines where emissions sit across Scopes 1, 2, and 3; ESRS E1 defines what needs to be disclosed; and SCI provides the calculation methodology at the software level.

Besides regulatory compliance, there is a strong practical upside: the same optimizations that lower an SCI score tend to lower your cloud bill.

> _"Working with the Software Standards WG, we set out to show that when you combine SCI with standard GHG accounting, you can go from software energy data to a figure that works in a CSRD report, and tells your engineering team where to improve. The paper walks through exactly how, step by step”. —Joseph Cook, Head of R&D at GSF_

## What's in the White Paper

The white paper maps SCI to CSRD's reporting requirements and uses calculation examples to show you how and when to apply the standard.

It provides a four-phase implementation framework that fits into an existing CSRD roadmap:

- **Foundation**: Define which software systems are in scope and engage auditors early on.
- **Baseline**: Calculate your first SCI scores, and identify where measured data ends, and estimates begin.
- **Strategy**: Set reduction targets and build the business case.
- **Assurance**: Build the documentation trail that auditors will need to verify the numbers.

Beyond the framework, the paper covers cross-functional responsibilities—from sustainability and engineering to finance, procurement, and legal—and addresses the key barriers across these roles, such as limited cloud provider data, embodied emissions complexity, engineering team engagement, and auditor readiness for a relatively new ISO standard.

This is the first paper in the _Software Carbon Intensity Standard in Policy_ series, published by GSF's Software Standards Working Group, mapping the SCI standard to regulatory frameworks worldwide.

Paper two maps SCI to the EU AI Act, showing how the standard applies to organizations deploying or procuring AI systems under the Act's requirements.

As reporting deadlines approach, the series gives organizations a practical path from GSF's measurement standards to the data they need.

## Get Involved

If your organization is starting to work through software emissions reporting, the challenges in this paper are likely familiar: data gaps, attribution complexity, and getting engineering and sustainability teams to work together. These aren’t problems that any one organization can solve alone.

**Read** [**the full white paper**](https://greensoftware.foundation/policy/research/sci-csrd-compliance/) to understand how SCI helps with your reporting.

**Explore the SCI specification**: Review the methodology and access the guidance documents [here](https://sci.greensoftware.foundation/).

**Join the conversation**: Connect with other sustainability experts and practitioners facing similar challenges on [the Green Software Movement Platform. ](https://green-foundation-software.mn.co/)

**Contribute to our work**: GSF projects are developed under the guidance of our Steering Members, including Accenture, Cisco, Google, Microsoft, NTT DATA Corporation, Siemens, and UBS. [Become a GSF Member](https://greensoftware.foundation/membership/) to build the standards and tools to help organizations measure, reduce, and report software emissions.

_Note: The SCI standard is a complementary tool that can support CSRD compliance; it is not required by ESRS E1. Organizations should consult their auditors, legal advisors, and sustainability professionals to determine the most appropriate methodologies for their specific reporting context._
