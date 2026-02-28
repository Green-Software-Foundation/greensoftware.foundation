---
title: "Building Green Software through Standards and Collaboration"
date: "2024-07-25"
summary: "CAST, NTT DATA, and UBS share how they are reducing their software emissions and laying a solid foundation for a greener digital future."
teaserText: "A spotlight on how our members are decarbonizing software with the GSF. "
mainImage: "/assets/articles/building-green-software-through-standards-and-collaboration/main.png"
featured: true
organizations:
  - "UBS"
  - "NTT DATA"
  - "CAST"
---

This year, we hit a big milestone in green software. The Software Carbon Intensity (SCI) Specification became an [**ISO Standard**](https://www.iso.org/standard/86612.html), and many organizations, both big and small, around the world have started using the [**Carbon Aware SDK**](https://github.com/Green-Software-Foundation/carbon-aware-sdk). This toolkit helps software run more when electricity is clean and less when it's dirty. 

Earlier this month, representatives from CAST, NTT DATA, and UBS shared real-world examples and practical tools that any organization can use to reduce its software emissions and lay a solid foundation for a greener digital future.

Let's dive into key insights shared during the event.

## Emissions Reduction Starts With Measurement 

Figuring out where emissions come from and measuring a company's environmental impact, both inside and out, is a big challenge for all sectors. This is why the topic of software measurement has taken center stage.

Pindy Bhullar, ESG Technology and Sustainable Technology Lead at UBS, started the discussion by sharing a step-by-step process on how UBS applied [the SCI Specification](https://sci.greensoftware.foundation/),  outlining three key stages of obtaining an SCI score: 

1. Understanding the boundaries of software. 
2. Defining what is the functional unit (R) to describe how the application scales up. 
3. Breaking down operational (O) and embodied emissions (M). 

Pindy stressed the need to consider the embodied emissions from making and disposing of hardware to get the complete picture of carbon emissions. Specifically, when software runs on a device, a fraction of the total embodied emissions must be allocated to the software, which consists of time and resource share. 

Massimo Crubellati, Sales SVP and Country Manager for CAST contributed to the argument, pointing out that calculating embodied emissions in the hardware and software supply chain is the first step in developing an ITC digital portfolio for reporting purposes.  

## Transparency Prepares You to Meet Regulatory Requirements

With regulations like the Corporate Sustainability Reporting Directive (CSRD), Corporate Sustainability Due Diligence Directive (CSDDD), and now the EU AI Act, companies will need to get comfortable being more transparent and detailed in their sustainability reporting. Having reliable metrics and accurate data is crucial for meeting these requirements. 

Knowing that companies are concerned about how these regulations will impact their business, Massimo and Riccardo Marchiani, Head of Agile, Digital Innovation, and IT Group Excellence at Autostrade per l'Italia, talked about how using GSF standards and tools has helped them prepare and improve their reporting process.

Starting next year, the CSRD will require sustainability reports to undergo an external audit, just like financial reports do now. And, organizations will need to share the metrics and methods they used to obtain their results. ICT companies must declare their carbon footprint and develop a strategy to reduce emissions. The transition plan should encapsulate policies, targets, and detailed data on scope 1, 2, and 3 emissions. 

Depending on the organization's efficiency level, Massimo shared that between 67% and 93% of emissions stem from applications only, making computation a crucial part of reporting. 

The introduction of the SCI Specification allowed CAST to understand the critical GHG subset that needs to be addressed in the reporting. As the next step, CAST and Autostrade used the [Automated Source Code Resource Sustainability Measure](https://www.omg.org/spec/ASCRSM/1.0/Beta1/About-ASCRSM) (ASCRSM) standard from OMG to measure the sustainability level of each application by identifying common weak points that affect the use of energy and other resources.

Using both standards was crucial for setting emission targets for each asset. It helped CAST develop a transition plan based on a clear understanding of the resources and actions required to reduce its greenhouse gasses. In 2024, using the calculation, Autostrade targeted 60 applications and obtained, on average, 15.1% of CO2 saved per application. 

Riccardo also shared how Autostrade plans to include 250 applications in the reduction process, which would result in an estimated saving of 86.8kg CO2eg/year (14%). Autostrade’s forward-looking approach envisions the inclusion of sustainability by design in the SW Supply Chain. 

## Collaboration Drives Green Software Innovation

To bring it all together, Gadhu Sundaram, VP of Application Service at NTT Data UK, highlighted the importance of collaboration and partnering for progress.

Gadhu shared several of NTT DATA’s use cases describing how collaborative efforts from various stakeholder groups contributed to building and adopting the SCI Specification, the Green Software Patterns, and the Carbon Aware SDK  internally, and then scaling up their utilization to support clients globally. 

For instance, NTT DATA Italy teamed up with their client, Intesa San Paolo (ISP), to tackle the challenge of tracking and measuring carbon emissions from software and hardware usage. NTT DATA created a monitoring tool that shows real-time insights on an internal dashboard for decision-makers.

With this dashboard, users can easily access emissions data for different periods and filter the data by services, offices, application, and environments. It shows real-time values for the current SCI score, for CO2e emissions in kilograms and a percentage breakdown of emissions by resource usage. Plus, it highlights areas where resources consume and produce the most emissions, allowing for targeted optimization efforts.

Measuring an SCI score has been key in identifying and prioritizing actions to reduce carbon footprint and optimize software and hardware usage. A detailed description of how NTT DATA and ISP worked together to understand, measure, and reduce energy consumption and emissions of the bank’s complex IT system can be found [here.](https://greensoftware.foundation/articles/how-intesa-and-ntt-data-measure-energy-consumption-of-software) 

Gadhu also shared stories of how teams in Japan and Germany contributed to developing green software projects. 

Leveraging the Carbon Aware SDK and working closely with CNCF’s Kepler project for monitoring capabilities, NTT DATA Japan built the Carbon Aware Kubernetes scheduler. This tool allows users to run workloads in the greenest available locations with the lowest carbon footprint. 

Further west, NTT DATA Germany worked with the [**Green Software Patterns**](https://patterns.greensoftware.foundation/) project, a repository of patterns proven to reduce your software emissions, to build an accelerator that allows testing of each pattern before and after implementation to calculate the SCI value of the application. 

At UBS, the Sustainable Technology Guild, an internal group at UBS formed once UBS became a member of the GSF, has been helping the firm cut emissions by sharing best practices and developing practical tools. Pindy also raised the [**Transforming Organizations for Sustainable Software**](https://github.com/Green-Software-Foundation/toss) (TOSS) project within Standards WG. The project focuses on how to implement patterns and principles within the organizations. The project provides support in reaching net-zero targets by developing a framework that outlines the approach and methodology for organizations to embed, transform, and utilize software emissions data. 

## Shaping the Future of Green Software

We need to start by figuring out which areas and issues need attention. To begin reducing emissions, we first have to measure them. Once we have that info, we can focus our resources, make changes, and move forward with green software. Reliable metrics, detailed data, and a clear understanding of problem areas give us a path forward. 

It’s equally important to strive for transparency over perfection. Teams should start to measure based on the data available. This approach will invite others to join and build a cooperative ecosystem. Lastly, testing standards is the best way to understand how an application works and identify gaps and data needs. As interest in green software grows, leaders must educate and prepare their teams to implement best practices and standards.

By joining GSF, organizations can collaborate with companies like CAST, NTT DATA, and UBS and build standards and tools to improve how we measure software for sustainability and scale decarbonization in software. 

Through a Working Group, we ensure all our projects represent the needs of the industry and provide resources to make software more sustainable. [**Learn more about GSF projects**](https://grnsft.org/gsf-projects).
