---
title: "GSF’s Response to GHG Protocol: Advocating for Hourly Carbon Accounting"
date: "2026-03-10"
published: true
summary: "In January, we submitted a consensus-based response to the GHG Protocol's Scope 2 consultation, advocating for hourly carbon accounting that closes reporting loopholes and recognizes the daily engineering decisions that reduce emissions."
teaserText: " A member-led response to the Scope 2 consultation, championing hourly carbon accounting that closes reporting loopholes and makes practitioners' work more visible."
mainImage: "./main.png"
---

Earlier this year, the GSF submitted a formal response to the GHG Protocol's [public consultation on ](https://ghgprotocol.org/ghg-protocol-public-consultations)the Scope 2 Guidance, the first revision to the standard proposed in ten years. Our submission argues that carbon accounting should reflect when and where electricity is consumed, not just how much. This change would give practitioners and companies clearer incentives to reduce emissions through carbon-aware operations.

The response was led by Chris Adams (Green Web Foundation, Chair of GSF's Policy Working Group), Henry Richardson (WattTime, Co-Chair of GSF's Standards Working Group), and Ryan Sholin (Electricity Maps), and developed through a consensus-based process with GSF members from across sectors, including data providers, cloud providers, and enterprises. 

## Why This Matters

Currently, the guidance relies on annual averages and broad geographic boundaries. 

Under the Scope 2 rules, an organization can claim clean energy credits from a solar farm hundreds of miles away to cover electricity consumed from a gas-dependent grid at night. A data center in California gets the same annual grid carbon intensity number whether it runs computations during peak solar generation or when the grid depends on natural gas. 

For practitioners, this means daily decisions that reduce emissions often go unrecognized in formal reporting.

> “Under the current annual GHG carbon accounting rules, you can say that you're running on a hundred percent renewable energy even when your servers are powered by a massive on-site gas-fired power plant built just for your datacenter and no-one else. Switching to an hourly approach closes loopholes like this and brings us much closer to reality-based accounting practices.” 

In [our December article](https://greensoftware.foundation/articles/why-the-gsf-is-participating-in-the-ghg-protocol-scope-2-consultation), we outlined why we engage with the consultation and what this update means for green software. Now, with our formal submission complete, we share what's in it and what comes next.

## What We Advocate For 

At its core, our submission prioritises location-based measurement, which represents the physical reality of the grid at the time of consumption, over a market-based approach that reflects what’s been purchased on paper. 

It presents three positions. All support a central principle: carbon accounting should enable practitioners to take action that reduces emissions. 

- **Hourly granularity as the quality standard:** Location-based measurement should default to hourly or sub-hourly precision. This level of detail allows teams to shift computing workloads to times when their regional grid runs cleaner and see that reflected in their reporting.
- **Physical deliverability requirements: **Carbon numbers should reflect only the grid mix an organization is connected to, not generation happening in a different region. Tighter geographic boundaries ensure the numbers that get reported reflect what's physically happening on the grid an organization is using. 
- **Accessible, transparent data:** Access to publicly available, free-to-use emission factors from credible sources is necessary for carbon-aware operations globally. Without accessible data, only enterprises with the resources to purchase proprietary datasets can make informed decisions. High-quality data requirements would help smaller organizations participate on more equal terms. 

[**Read the full submission. **](https://drive.google.com/file/d/11uFUZWMmvZDIHgjv6LV_qrRX2VfhVj0j/view)

## A Collaborative Response Process

This is our first policy engagement built through asynchronous member consensus to deliver a unified response. 

The GHG Protocol consultation contained 183 questions covering measurement methodologies, market-based accounting, exemption thresholds, and implementation timelines. Over recent months, the Policy Working Group distilled these into 20 priorities reflecting GSF's mission and technical expertise.

Reaching an agreement meant balancing technical feasibility with how organizations operate day to day.

As we pilot this approach, we’re developing it as a model for how GSF engages with standards and policy work going forward. 

## Building on Technical Foundation

This policy position reflects a growing ecosystem of tools and standards where hourly grid data is more and more available from system operators and providers like WattTime and Electricity Maps.

Several GSF projects directly support the shift to hourly carbon accounting:

- [The Software Carbon Intensity (SCI) specification](https://sci.greensoftware.foundation/) is designed to work with changes in grid carbon intensity across time and locations, allowing practitioners to use hourly carbon intensity factors when calculating software emissions. 
- [The Carbon Aware SDK](https://carbon-aware-sdk.greensoftware.foundation/) enables applications to consume real-time carbon data and shift operations accordingly. 
- [The Real Time Energy & Carbon Standard](https://directory.greensoftware.foundation/projects/real-time-energy-and-carbon-standard-for-cloud-providers-(rtc)/) provides requirements for cloud providers to publish minute-by-minute metrics, creating the data infrastructure that carbon-aware operations depend on. 

Practitioners and companies are already using these tools. Hourly granularity as a Scope 2 quality standard would ensure that the reductions they achieve are accurately reflected in carbon reporting.

## What’s next 

The consultation closed on January 31, 2026. Over the coming year, the GHG secretariat will analyse submissions. The second public consultation on Scope 2 will follow in 2026, with final publication of the new standard expected in 2027.

The last revision to the Scope 2 guidance was ten years ago. We don't know when the next one will come, which makes the standard finalized through this process all the more consequential—it will shape corporate carbon accounting and the investment decisions tied to it for years to come. 

**What Changes If the Update Becomes Standard**

- Time-differentiated renewable energy procurement gains a strong market signal, where value gets assigned to clean energy at specific hours rather than annual totals. 
- Grid flexibility technologies like storage, demand response, and load management become measurable contributors to emissions reduction, accelerating investment in the technologies needed for fully decarbonized grids.
- Carbon-aware software architectures, where applications shift workloads based on grid conditions, serve as a competitive advantage. 
- Real-time carbon intensity data becomes essential infrastructure, making it more widely available. 

We also advocate for the development of an impact metric outside the Scope 2 inventory that captures the emissions reduction from carbon-aware actions, such as shifting workloads to match real-time clean energy availability. A metric like this would recognise the emissions reductions that come from running software differently. 

Thank you to all the members who contributed their time and technical expertise throughout this process. 

We’ll continue engaging with the GHG Protocol in the second consultation and collaborating with industry partners to strengthen Scope 2 guidance.

## Get Involved

### If you’re a GSF member 

[Join the Policy Working Group](https://directory.greensoftware.foundation/working-groups/policy-working-group/): Contribute technical expertise to standards affecting software measurement. 

### Not a member yet 

If you work for a company affected by Scope 2 reporting, the proposed update creates opportunities to implement carbon-aware practices that help with compliance and deliver operational benefits. 

[Join the GSF](https://greensoftware.foundation/join-us) to help develop standards that drive emissions reductions and impact how technology is built and used.
