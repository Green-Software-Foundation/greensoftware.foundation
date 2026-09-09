---
title: 'What an AI Data Center Takes: Eight Questions to Ask Before We Build'
teaserText: Notes from the Executive Director, Green Software Foundation
date: 2026-09-08
published: true
summary: Sustainability decisions around AI data centers need to happen before infrastructure is built. In the latest ED Notes, Navveen Balani proposes a framework for evaluating water, energy, land, and accountability while connecting software demand to physical infrastructure.
mainImage: ../../what-an-ai-data-center-takes-eight-questions-to-ask-before-we-build/What-AI-Data-Center-Takes.png
mainImageAlt: Stylised illustration of a person in round glasses looking over a dark grid landscape containing a data centre, water tank and pipe, cooling units, solar panels, a wind turbine, trees and factory chimneys, with icons for soil, energy and water above. Green Software Foundation logo, bottom left.
featured: false
tags:
  - standards
authors: []
translators: []
originBlogName: ''
publishedOriginUrl: ''
lang: en
---

By the time a data center reports its environmental impact, many of the decisions responsible for that impact have already been made.

AI is creating a new class of infrastructure demand, and as those workloads scale, software decisions increasingly translate into physical infrastructure: more compute, more electricity, more cooling, and more capacity.

AI workloads also behave differently. A traditional application performs a defined computation in response to a request. An agentic workflow can turn one request into a chain of activity: reasoning across steps, retrieving information, calling tools, invoking other models, delegating to other agents, and retrying. That makes demand harder to predict based on the request itself, which is exactly why we need to estimate demand before capacity is committed rather than measured after.

Today, we mostly measure the environmental impact of data centers once they are operating. We report their energy use, carbon emissions, water consumption, and other impacts. But by then, the location has been chosen, the cooling system designed, grid capacity committed, and much of the investment locked in.

Sustainability reporting tells us what the infrastructure consumed. Infrastructure planning needs to tell us what it is expected to consume. For the next generation of AI data centers, measurement needs to move upstream, informing key decisions before they are finalized. 

One way to do that could be an AI Siting Ledger.

## **The AI Siting Ledger**

The AI Siting Ledger is a proposed framework for making the resource demands and commitments of major AI projects visible before they are built. 

It starts with eight questions. The answers will vary because infrastructure depends on the local conditions: water scarcity, grid capacity, carbon intensity, land constraints, and community priorities differ from place to place. The questions, however, can be shared.

### **1. How Much Water, and From Where?**

Total water consumption provides only part of the picture. The source of the water, cooling architecture, local water availability, seasonality, and consumption during periods of water stress all affect the meaning of the number.

A siting assessment should therefore consider not just how much water a facility is expected to use, but its source, when it will be needed, and how demand will be managed during drought or other constraints. This allows us to understand water use in the context of the local water system, not as an isolated annual figure.

### **2. How Much Electricity, and Who Pays to Deliver It?**

A large data center can require significant electricity infrastructure, as well as new transmission capacity, substations, generation, storage, or other grid investments to support additional demand. Its footprint therefore needs to cover the infrastructure required to make that electricity available and the associated cost, carbon, and capacity implications.

A siting assessment should consequently measure both the electricity required by the facility and the additional infrastructure required to supply it.

### **3. Can the Workload Turn Down When the Grid is Constrained?**

AI workloads vary in how sensitive they are to time. Some inference workloads need to run immediately, while others, such as training, evaluation, batch processing, indexing, and background agents, can often be delayed, shifted, or reduced when the grid is under pressure. This creates an opportunity to connect software architecture with grid conditions where workload flexibility becomes part of the infrastructure equation. 

The relevant measure is therefore not only peak electricity demand but also how much of that demand can be flexible. As workloads scale, this flexibility supports more efficient infrastructure planning. 

### **4. Whose Land is Being Used, and Who is Affected?**

AI infrastructure has a physical footprint beyond compute and cooling, affecting land use, construction, transportation, local infrastructure, and surrounding communities.

The siting process should make these impacts visible before construction. Factors such as land requirements, affected communities, and associated infrastructure changes form part of the broader system boundary of large-scale infrastructure development.

### **5. What's Next Door?**

Environmental impact largely depends on location. Two facilities with identical technical designs can have different water and energy impacts when deployed in different environments.

Proximity to rivers, aquifers, forests, agricultural land, or residential communities changes the context in which energy and water consumption should be evaluated.

This creates an important relationship between standardized measurement and local context. Standardized metrics make infrastructure comparable, while local context determines the significance of those metrics. Both are required to understand impact.

### **6. What Are the Public Incentives Worth Relative to the Benefits Created?**

AI infrastructure represents significant capital investment, and governments increasingly compete to attract it. Public support can include tax concessions, land, grid infrastructure, and other forms of investment.

These inputs can be considered alongside measurable economic outcomes such as employment, local procurement, skills development, tax revenue, and infrastructure investment.

The relevant assessment is therefore the relationship between public resources committed and measurable public value created, rather than the headline investment figure alone.

### **7. Who Checks the Commitments, and How Often?**

If a project makes commitments relating to water consumption, energy use, renewables, grid flexibility, or other environmental outcomes, those commitments need measurable boundaries.

This requires a defined metric, methodology, data source, reporting frequency, responsible party, and, where appropriate, a verification mechanism. A commitment only becomes meaningful when it is clear what is being measured, how often it is reported, who is responsible, and how the result will be verified. 

### **8. What Happens When the Facility Closes?**

AI infrastructure has a lifecycle. Accelerators are replaced, servers reach end of life, cooling and electrical equipment age, and facilities can eventually be repurposed or decommissioned.

Infrastructure planning therefore needs to include end-of-life responsibilities covering hardware reuse, electronic waste, embodied carbon, facility remediation, and ownership of dedicated power and cooling infrastructure.

The lifecycle boundary should extend beyond the operational life of the workload. Planning what gets built should also include planning for what happens at end-of-life. 

## **Shared Questions, Local Thresholds**

Water availability, energy systems, climate, land constraints, and infrastructure capacity vary by location, so a single global threshold would have limited value.

Green software already gives us a useful model for this. The [Software Carbon Intensity specification](https://greensoftware.foundation/standards/sci/) standardizes how carbon intensity is calculated without prescribing one acceptable carbon intensity score for every application or location.

The same principle can apply to AI infrastructure: standardize the questions, boundaries, and measurement methods, while letting thresholds reflect local conditions. That gives us comparability without assuming every location is the same.

## **Turning Adjectives into Numbers**

Infrastructure sustainability is frequently described in terms such as "water efficient," "energy efficient," "low carbon," "advanced cooling," "renewable powered," and "sustainable AI infrastructure." While those claims can represent meaningful engineering improvements, on their own they don’t provide enough information to enable comparison. 

Each claim needs a specific measurement behind it: “Water efficient” needs water consumption against a functional unit; “Energy efficient” needs energy relative to useful output; “Grid flexible” needs a measure of how much demand can be shifted or reduced, and under what conditions; and “Hardware efficient” needs both operational performance and embodied impact.

These numbers are what make commitments measurable, while measurement makes systems comparable, and comparability creates the basis for improvement. 

## **From Software Demand to Infrastructure Impact**

Software decisions are increasingly becoming infrastructure decisions.

The application shapes the workload, which then determines compute demand. At scale, that demand determines how much energy, water, hardware, and physical infrastructure is needed to support it.

That means strategies such as model right-sizing, efficient inference, workload scheduling, and higher utilization are useful beyond reducing the footprint of individual workloads. At sufficient scale, they can reduce the impact of the infrastructure required to run them. Efficiency at one layer changes what the layers beneath it have to supply.

The opportunity is to create a common measurement language connecting people who shape AI infrastructure across operations, energy, water, planning, and software demand. 

That shared language can link software demand to measurable infrastructure impact. As a result, it would provide greater visibility to communities and governments before commitments are made, give operators more consistent expectations, and make the infrastructure consequences of software decisions clearer.

The next step is not only to measure what a data center consumes after it was built, but to understand what it is expected to consume before the decision to build it is made.

**Eight shared questions provide a practical place to start.** 

— 

_The views expressed here reflect ongoing conversations across the green software community and are intended to surface ideas for discussion rather than to convey formal Foundation positions._
