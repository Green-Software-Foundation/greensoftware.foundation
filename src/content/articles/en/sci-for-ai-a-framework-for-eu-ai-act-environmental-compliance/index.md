---
title: 'SCI for AI: A Framework for EU AI Act Environmental Compliance'
teaserText: How SCI for AI supports the EU AI Act’s energy requirements and helps measure and reduce AI’s emissions.
date: 2026-07-08
published: true
summary: In a recent whitepaper published by GSF's Software Standards Working Group, we map the ratified SCI for AI specification to the EU AI Act, showing how it helps fulfill the regulation's energy measurement requirements and goes further by converting energy into carbon emissions and accounting for embodied hardware emissions.
mainImage: SCI-for-AI-EU-AI-Act.png
mainImageAlt: illustration in Green Software Foundation brand colors (dark teal grid background) featuring power transmission towers, stacked servers, an EU flag icon with stars, lightning bolt energy icons, a target/measurement icon, and a compass-like icon, symbolizing energy grids, data centers, and EU regulation tied to SCI (Software Carbon Intensity) measurement. The Green Software Foundation logo appears in the bottom left.
featured: false
tags:
  - policy
  - standards
authors: []
translators: []
originBlogName: ''
publishedOriginUrl: ''
lang: en
---

Over the last few years, the environmental impact of software and AI has entered the regulatory spotlight. As new frameworks and reporting requirements emerge, our member organizations regularly report growing pressure to quantify and manage the footprint of their digital systems.

At the same time, reporting AI carbon emissions remains a challenge. While most physical products have standardized methodologies and the tools needed to produce reliable, actionable data, software has been left behind. As a result, the gap between regulatory expectations and organizations' ability to meet them is widening. 

In our recent whitepaper, published by GSF’s Software Standards Working Group, we map the ratified [Software Carbon Intensity for Artificial Intelligence (SCI for AI) specification](https://greensoftware.foundation/standards/sci-ai/) to the EU AI Act, outlining how the specification helps fulfill regulation’s energy measurement requirements.  

SCI for AI goes a step further in two specific ways: it converts energy consumption into carbon emissions using location-specific grid data, and it accounts for the emissions produced during manufacturing, transporting, and disposing of the hardware that AI systems run on; neither of which the Act currently addresses. 

## The EU AI Act and AI’s Environmental Impact 

The EU AI Act is the first binding regulation on AI that aims to address its negative impacts. Its objective is to regulate how AI is used in Europe, with the main focus on making AI systems safer and more trustworthy.

From a climate change perspective, the law highlights the need to develop more sustainable and environmentally friendly solutions, encouraging companies to voluntarily adopt green AI practices. As a main obligation, the Act requires general-purpose AI providers to document and report their energy consumption. 

As the European Commission plans to develop more detailed technical standards in the future, this makes the Act more of a developing framework than a final set of requirements.

## The Three Gaps in EU AI Act Environmental Reporting

When we look closely, three key challenges currently make it difficult to understand or compare the environmental impact of AI systems.

### Energy vs. Carbon 

The EU AI Act requires companies to report the amount of electricity (kWh) their AI applications consume. However, it doesn’t take into consideration grid carbon intensity, which recognizes that not all electricity is produced in the same way. 

For example, running the same AI model in Sweden produces much fewer emissions than in Poland, simply because the energy mix is cleaner in Sweden. Roughly, the difference can be up to 35 times more carbon emissions for the same amount of energy used.

![Map of Europe highlighting Sweden and Poland, illustrating a 35x difference in carbon emissions for the same electricity use between the two countries due to their different energy grid mixes. Sweden is marked with a single hexagon icon, Poland with the label 'x35' and a hexagon icon, both connected to their respective countries by a line. Map uses Green Software Foundation's teal-and-green color palette.](SCI-for-AI-EU-AI-Act-01.png)

For a company only reporting energy use, it’s hard to understand how much carbon they emit from energy usage. 

### Embodied Emissions 

Another blind spot is hardware. The Act doesn’t account for the emissions, often called embodied emissions, created during manufacturing, transporting, and disposing of hardware needed to run AI systems. 

Since AI systems rely on powerful GPUs and specialized chips that are replaced more frequently than typical data center equipment, these impacts are a significant source of carbon emissions, which occur before the system is even switched on. Estimates vary, but embodied emissions can make up anywhere from about 10% to over 60% of a data center's total lifecycle emissions, depending on hardware type, usage patterns, and equipment lifespan. As electricity grids decarbonize, that share is expected to grow. 

This data is hard to track precisely. Many manufacturers don’t publish full lifecycle data, so practitioners and organizations who want to understand their impacts need to work with estimates most of the time. 

### Standardized methodology

Companies reporting environmental data in line with the EU AI Act are allowed to use their own methods. While flexible, this approach makes the results difficult to compare. 

For instance, one company might report that training a model used 1,000 kWh, but another company’s 1,000 kWh figure might be calculated differently or under different assumptions. Without a shared methodology, these numbers can’t be compared or verified. 

Although the Act requires providers of general-purpose AI models to collect information about their AI systems, much of that information is shared only with the regulator. Open-source models have also reduced reporting obligations. As a result, researchers, policymakers, and the public may struggle to compare the environmental impact of different AI systems, even where reporting exists.

## How SCI for AI Measures AI Carbon Emissions

The EU AI Act reinforces an important principle: environmental impact should be part of AI governance. What it does not yet provide is a comprehensive methodology for measuring that impact consistently across organizations. That’s when SCI for AI becomes relevant, offering a practical path to AI carbon emissions reporting that goes beyond energy data.

SCI for AI converts AI energy into carbon emissions using location-specific grid intensity factors to produce a single carbon intensity rate per unit of output.

The specification also extends beyond operational energy to include embodied carbon, allocating a proportionate share of hardware manufacturing emissions according to utilization and lifespan. And while the availability of manufacturer data can be a constraint, the methodology itself already exists.

What's worth noting, SCI introduces standardized functional units. Whether the system is a large language model, an image generator, a speech recognition service, or an agentic workflow, practitioners can assess its emissions using a shared structure and report them against a defined unit of output.

This creates the conditions for comparability for organizations that are measuring the same type of system. 

Because SCI for AI builds on [ISO/IEC 21031:2024](https://sci.greensoftware.foundation/) methodology, it aligns with the broader direction of international standardization. As the European Commission works toward future harmonized standards, existing frameworks such as SCI provide a foundation for future work. 

The Act confirms that environmental measurement belongs in AI governance. What we need to ask next is whether the industry can measure its impact consistently to support meaningful and comparable accountability.

## Why Early Adoption Matters

The EU AI Act's environmental requirements are not final. Under Article 40, the European Commission’s task is to develop harmonized standards, and it may introduce more prescriptive measures if voluntary approaches prove insufficient.

The Commission has already signaled interest in exploring a potential AI energy and emissions label. For such a label to be useful, it should support measurement that allows comparison across systems, providers, and use cases. An approach, such as SCI for AI, based on standardized functional units provides one way to make those comparisons possible.

Demonstrated methodology adoption carries real weight in standards development, and that creates a rare opportunity for organizations adopting SCI for AI today to help shape emerging standards. 

The benefits for those early adopters extend beyond meeting regulatory requirements. Many of the actions that reduce the environmental impact of AI, such as cutting unnecessary computing, using infrastructure more efficiently, and optimizing workloads, also help lower costs, supporting sustainability and business objectives. 

## Standards and Regulation

The SCI for AI to EU AI Act whitepaper is the second in a series exploring how our standards align with global regulatory frameworks.

In the first paper, we examine how the Software Carbon Intensity (SCI) specification can support organisations responding to Corporate Sustainability Reporting Directive (CSRD) requirements. 

Together, they highlight a broader theme: the growing connection between sustainability standards and regulatory compliance. As governments move from high-level environmental ambitions toward more specific reporting and accountability requirements, practitioners and organizations will increasingly need practical methodologies that translate policy goals into measurable outcomes.

While the frameworks are still being defined, organizations building, deploying, or governing AI systems have an opportunity to engage with existing measurement approaches and shape how AI's environmental impact will be measured, reduced, and communicated. 

## Get Involved 

- Read the [full white paper](https://greensoftware.foundation/policy/research/sci-ai-eu-ai-act/). 
- Explore the [SCI for AI specification](https://greensoftware.foundation/standards/sci-ai/). 

The Green Software Foundation's standards and specifications are developed through a collaborative process involving contributors across industry, academia, and the public sector, with guidance from Steering Members including Accenture, Google, NTT DATA, Siemens, and UBS. To align with these efforts, consider [becoming a member](https://greensoftware.foundation/membership/). 

_Note: The EU AI Act's provisions and timelines continue to be revised, including recent simplification measures; organizations should verify current requirements against official EU sources._
