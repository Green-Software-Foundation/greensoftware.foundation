---
title: 'One Ledger: When Sustainability and Business Value Become the Same Conversation'
teaserText: Notes from the Executive Director, Green Software Foundation
date: 2026-08-04
published: true
summary: Drawing on his CleanEnviro Summit Catalyst 2026 keynote, Navveen Balani argues that, increasingly, reducing AI costs can also mean reducing its environmental impact.
mainImage: One Ledger.png
mainImageAlt: An illustrative workload-level dashboard bringing carbon, water, energy, cost, and hardware utilization into a single operational view.
featured: false
tags: []
authors: []
translators: []
originBlogName: ''
publishedOriginUrl: ''
lang: en
---

Over the last decade, sustainability and business value have often been treated as two separate conversations. Revenue, margins, and unit economics are part of the language executives use with boards and investors. Sustainability has largely belonged to compliance, ESG reporting, and corporate responsibility—important and increasingly mandatory, but still treated as separate from the main business story.

That separation was understandable when environmental cost was mostly invisible in the operating model. It makes far less sense once AI is running at scale.

[Training and operating today’s largest AI models can require energy at industrial scale](https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai), while the data centers supporting them also [consume significant water for cooling](https://arxiv.org/abs/2304.03271). As a result, the environmental footprint of software is no longer adjacent to the business. It is becoming a measurable part of the operating model. The interesting question is no longer whether sustainability and business value can be aligned. It is whether keeping them on separate ledgers still reflects how decisions actually get made.

## **The False Trade-off**

The trade-off framing has had a long run. It tells decision-makers that they can have either growth or environmental responsibility, and that the best they can do is balance the two. It treats sustainability as something to be reconciled with ambition rather than as an outcome of efficient, well-designed systems.

In the AI context, that framing increasingly breaks down on contact with the numbers. The decisions that reduce environmental impact—choosing a smaller model when it’s sufficient, scheduling workloads when and where the grid is cleaner, eliminating wasted inference, right-sizing infrastructure—also tend to reduce operating cost. In many cases, the leaner choice is also the greener one. Measuring at workload level, across individual AI applications and tasks, rather than relying on company-wide totals, is what makes that relationship visible.

That principle underpins the standards the green software community has been developing. The [Software Carbon Intensity (SCI) specification](https://greensoftware.foundation/standards/sci/)—now an ISO standard—and the newly ratified [SCI for AI](https://greensoftware.foundation/standards/sci-ai/) help organizations measure environmental impact at the workload level. Complementary work on [software energy efficiency](https://greensoftware.foundation/standards/sei/) and [water-use effectiveness](https://greensoftware.foundation/standards/swi/) is advancing alongside it. 

> Together, these efforts make a single idea measurable: efficiency is not a sustainability metric or a business metric. It is one metric, observed through different lenses. 

## **When Sustainability Becomes an Operating Discipline**

When organizations measure efficiency at the workload level, three things tend to happen.

First, conversations between engineering and finance get easier. Once teams can see how much useful work each application produces for every kilowatt-hour, liter of water, and dollar spent, the people optimizing for cost and the people optimizing for emissions discover they have been working on the same problem from different sides. 

Second, procurement and architecture decisions become more disciplined. The question shifts from “Can we afford to do this?” to “Are we matching the system to the work it actually needs to perform?” Smaller, more specialized models and more narrowly designed AI systems often become more attractive on cost grounds before sustainability is even considered. Sustainability arrives as a confirmation, not a constraint.

Third, and perhaps most underappreciated, organizations establish an honest baseline. In conversations across the green software community, a recurring pattern is that teams discover a meaningful share of their AI workload is doing work nobody asked for: speculative inference, abandoned sessions, redundant pipeline runs, and capacity reserved for demand that never arrived. None of it serves users. All of it shows up on both ledgers.

## **Across the Hardware Lifecycle**

The single-ledger view extends naturally upstream to the hardware AI workloads depend on. Accelerators, servers, networking equipment, and the broader data-center fabric all carry embodied carbon—emissions produced during manufacturing before any workload runs. As refresh cycles shorten in pursuit of performance gains from each new hardware generation, that embodied footprint is spread across fewer years of useful work, while the volume of decommissioned hardware grows. 

Over-provisioned capacity carries both embodied carbon and capital cost, whether or not it is ever fully utilized. Shorter refresh cycles concentrate capital expenditure into shorter periods. Hardware replaced before the end of its useful life leaves financial value unrealized while increasing its environmental cost per year of service. It represents value left on the table on both ledgers at once.

Treating hardware as a long-lived asset rather than a short-cycle commodity improves capital efficiency and environmental performance at the same time. Organizations can extend useful life through workload-appropriate placement, refurbishment, secondary deployment, and responsible end-of-life recovery. Circular hardware practices are sound engineering economics before they are anything else.

## **Resilience as the Compounding Dividend**

The case for collapsing the two ledgers does not end at unit economics. Longer-term pressures are also making efficiency a question of operational resilience.

Energy and water cannot be treated as uniform inputs. Regional grid capacity, water variability, and the pace at which new generation comes online mean that where and when AI workloads run is beginning to determine whether sufficient capacity is available. Organizations that can shift flexible work toward cleaner energy and locations with lower water stress are better positioned to manage capacity volatility. The same applies to cost exposure: workloads engineered for efficiency carry less risk from energy-price movements than workloads engineered only for throughput.

Disclosure expectations are moving in the same direction. A growing number of jurisdictions are advancing reporting requirements that will, in time, ask organizations to account for the environmental footprint of their digital operations with the same rigor currently applied to other categories. Teams that have already established workload-level measurement will be better prepared to meet these requirements. 

There is also a quieter dimension: trust. Customers, employees, partners, and increasingly capital markets are reading sustainability performance as a signal of engineering quality. Systems designed to minimize waste tend to reflect stronger measurement, governance, and operational discipline across the organization. 

## **What This Looks Like in Practice**

The shift to a single ledger is less a strategic pivot than a measurement upgrade. Three practical steps can accelerate the shift.

1. Bringing efficiency metrics into a single operational view rather than scattering them across compliance, finance, and engineering systems. At the workload level, teams should be able to compare useful output with energy, water, cost, embodied carbon, and hardware utilization. Standards such as SCI provide a shared vocabulary for doing this consistently.

![Screenshot of the 'One Ledger' Unified AI Workload Dashboard, showing sustainability and cost metrics — total carbon emissions, cost, energy, water use, and hardware utilization — across 12 AI applications, broken down by application and by model type (LLM vs. SLM).](unnamed%20(4).jpg "An illustrative workload-level dashboard bringing carbon, water, energy, cost, and hardware utilization into a single operational view.")_An illustrative workload-level dashboard bringing carbon, water, energy, cost, and hardware utilization into a single operational view._

2. Bringing efficiency into design reviews and architecture decisions from the start. Right-sizing models, evaluating whether a task requires generative reasoning or whether retrieval is sufficient, designing for graceful degradation, and monitoring idle or abandoned workloads can produce compounding benefits. These choices are easier to make at design time than to retrofit later. 
3. Treating sustainability data as a first-class operational signal, not merely as input to an annual report. Environmental metrics should be managed with the same operational rigor as latency, availability, and cost.

None of this is exotic. It is what disciplined engineering has always looked like: clear measurement, honest baselines, and the systematic reduction of waste. AI is making the case more visible because the costs are higher and the externalities harder to hide.

## **The Reframe**

The reason to collapse the two ledgers is not that sustainability has won a moral argument over business value. It is that, at AI scale, sustainability is a business signal—one of the clearest available indicators of whether software is being engineered well: whether it is doing useful work efficiently, whether it is sized to its purpose, and whether the people building it understand the resources it consumes.

Decision-makers who internalize this stop asking how much sustainability they can afford and start asking what their efficiency numbers say about the quality of their operations. That is a different question, and a more useful one. Every organization running AI at scale will eventually need to answer it to its engineers, finance teams, customers, and regulators—and to the grid and water systems it shares with everyone else. 

The organizations that recognize this early will discover that sustainability was never a separate agenda. It was always a measure of how well their systems were engineered.

## **Joining the Conversation**

If these themes resonate with how your organization is thinking about AI efficiency, I'd welcome the conversation. Please reach out to me directly at [navveen@greensoftware.foundation](mailto:navveen@greensoftware.foundation), or visit our membership page at[ greensoftware.foundation/membership](https://greensoftware.foundation/membership/) to learn more about how to get involved.

_This piece expands on part of a keynote I gave at the CleanEnviro Summit Catalyst 2026 on the business value of sustainability. You can read more on the keynote in_ [_my post_](https://www.linkedin.com/feed/update/urn:li:activity:7474680098139394048/)_._ 

_The views expressed here reflect ongoing conversations across the green software community and are intended to surface ideas for discussion rather than to convey formal Foundation positions._
