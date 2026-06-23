---
title: 'Watersheds and Workloads: Bringing Water into the Sustainability Conversation'
teaserText: For years, the environmental conversation around AI focused on carbon. That is beginning to change. Water is rapidly moving from a hidden operational concern to a board-level disclosure question.
date: 2026-06-23
published: true
summary: Navveen Balani, GSF Executive Director, explores the unique challenges of water measurement and what they mean for decision-makers ahead of emerging disclosure requirements.
mainImage: Watersheds-and-Workloads.png
mainImageAlt: ''
featured: false
tags:
  - standards
  - policy
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

In April 2026, more than a dozen institutional investors filed coordinated requests for site-specific water and power consumption to be disclosed alongside carbon, ahead of annual investor meetings. (1) Investors are starting to look at water as a primary disclosure dimension rather than a secondary indicator, and are asking for water on the same footing as carbon.   

For most decision-makers, water is still a footnote. Energy and carbon dominate the dashboards. Water, if it shows up at all, appears as a corporate-level total on the front page of the annual report—with limited visibility into where it is consumed, how much returns to the local watershed, and how much evaporates for good. That gap is now drawing serious attention, and it is doing so from three directions at once: investors looking for disclosure parity with carbon, communities and local authorities weighing what new infrastructure means for their watersheds, and the reality of scaling AI capacity in regions where water is already constrained.

The challenge starts with the measurement, but it also touches issues that boards and executive teams will recognize immediately: disclosure, siting, and risk.

## **The Scale of the Problem** 

Recent analysis suggests AI systems globally could consume several hundred billion litres of water in 2025 alone, with the upper end of credible estimates approaching the global annual consumption of bottled water. (2) In Texas, the Houston Advanced Research Center's January 2026 white paper estimates state data center water use at around 25 billion gallons in 2025, with projections rising to between 29 and 161 billion gallons annually by 2030—potentially up to 2.7 per cent of the state's total water use. (3) A medium-sized data center consumes roughly 110 million gallons per year—about the use of a thousand households. A large one can use five million gallons in a single day. (4)

These figures are estimates, and while the wide ranges reflect genuine uncertainty, the scale is clear. About 80 per cent of the water withdrawn by data centers for cooling evaporates rather than returning to its source. A further portion is consumed indirectly, through the water needed to generate the electricity those facilities draw from the grid. And a third portion sits even further upstream, in the water-intensive process of fabricating the chips that make AI possible. Three sources of consumption mean three different reporting approaches, often by three different organizations—and no consensus on how to bring them together into a metric that supports fair comparison.

Over the past decade, the carbon conversation has built shared methodology, scope boundaries, and verification practices. In many ways, the water conversation today resembles where carbon accounting was a decade ago: important, increasingly urgent, but still lacking convergence on boundaries and comparability.

## **Why Water is Harder to Measure Than Carbon**

It is tempting to assume that water is just another sustainability metric, apply the same playbook, and the answer will follow. It is not, and several characteristics make it genuinely harder.

First, water is local in a way carbon is not. A tonne of CO2 emitted in Texas, Ireland, or Singapore has the same warming effect on the climate. A million gallons consumed in a water-stressed region is not equivalent to a million gallons consumed in a water-rich one. Meaningful disclosure has to be site-specific, not corporate-aggregated.

Second, the boundary question is unsettled. Is the relevant figure direct on-site withdrawal? On-site consumption—withdrawal minus what is returned? On-site plus the embedded water in upstream electricity generation? Plus the embedded water in chip manufacture? Reasonable people draw the line in different places, and until there is convergence, headline numbers are difficult to compare consistently across operators.

Third, the obvious efficiency moves involve tradeoffs that do not exist in the carbon case. Closed-loop cooling reduces freshwater withdrawal substantially but increases electricity demand. Air cooling cuts water consumption nearly to zero but raises energy use and, depending on the local grid, carbon emissions. Immersion cooling improves both numbers but is expensive to retrofit and not yet at production scale across the industry. Siting decisions are where many of these tradeoffs play out—and communities affected by them are more frequently part of the conversation.

Fourth, the data is rarely disclosed publicly. Data center water use has historically been treated as commercially sensitive in many jurisdictions, with consistent public reporting remaining the exception. Several US states have recently moved to introduce data center water disclosure legislation, though most jurisdictions still do not require it. The investor letters cited earlier are part of the broader shift toward parity with carbon reporting. (1)

## **Where the Conversation is Heading**

The direction is clearer than it was even a year ago.

Disclosure parity is beginning to emerge. Whether it arrives through securities regulation, jurisdictional requirements, or investor expectation, the broader trend is toward site-level reporting of water alongside carbon.

Measurement practice is converging. The Green Software Foundation's four-dimensional sustainability scope—energy, carbon, water, and waste—reflects the same conclusion: a single workload shouldn't be evaluated based only on the impact that’s easiest to measure. The Software Carbon Intensity specification, an ISO standard (5), established the pattern for carbon, and SCI for AI extended it across the AI lifecycle. (6) The Software Water Intensity (SWI) project is now developing a shared methodology, following the same rate-based pattern as SCI. (7) The community building SWI understands that fragmented metrics cannot support credible disclosure.

Siting will become a strategic decision. The local water, energy, and waste profile of the infrastructure will shape whether workloads can run sustainably. The conversations now happening around data center development in the American Southwest are early signals of a discussion that will reach more regions—and require collaboration between operators, communities, and local authorities.

## **What Decision-Makers Should Be Asking Now**

For executive teams who do not yet have visibility into their water impact, the practical questions are simpler than the standards debate suggests.

Where is our compute physically located, and what is the water profile of each site? Who is the operator, and what do their public disclosures say about on-site consumption? When workloads are placed, particularly the heaviest AI training and inference workloads, is water part of the decision alongside cost, latency, and carbon? And if an investor asked us the same site-level question now being asked across the industry, what would our reporting show?

None of these questions need to wait for the standard to be finalized. Building the internal visibility to answer them—site locations, operator data, workload-level consumption—is itself preparation for the measurement framework in development at the Green Software Foundation. Organizations that build site-level visibility will be better positioned to respond when regulatory requirements arrive.

As zero water is neither achievable nor coherent for facilities that need to manage heat, the goal is _informed_ water: understanding what is consumed, where, what the trade-offs are, and what the cost is to the local watershed. The frame is not abstinence; it is accountability.

## **A Shared Space for Water Measurement**

Through creating the ISO SCI standard and SCI for AI specification, I have seen the power of collective intelligence and diverse perspectives—the strongest standards are the ones built by the widest set of contributors.

The SWI specification is at the stage where the scope and boundary decisions that will determine how useful the standard is in practice are being made. Whether your organization has years of site-level water data or is only starting to ask the question, there is a place in the conversation, and real value in joining it now.

Carbon taught the industry to measure environmental impact at scale; water may determine how responsibly that scale can continue.

For any details, please reach out directly at navveen@greensoftware.foundation, or visit [greensoftware.foundation/membership](https://greensoftware.foundation/membership/)

_The views reflect ongoing community conversations rather than formal Foundation positions._

## **References**

1. **Institutional investor action on data centre water and power disclosure (April 2026).** Reuters (6 April 2026).[ https://www.reuters.com/sustainability/boards-policy-regulation/investors-press-amazon-microsoft-google-water-power-use-us-data-centers-2026-04-06/](https://www.reuters.com/sustainability/boards-policy-regulation/investors-press-amazon-microsoft-google-water-power-use-us-data-centers-2026-04-06/)
2. **Global AI water footprint estimates (range of several hundred billion litres in 2025).** Alex de Vries-Gao, _The carbon and water footprints of data centers and what this could mean for artificial intelligence_, Patterns (Cell Press), Volume 7, Issue 1, 9 January 2026.[ https://www.sciencedirect.com/science/article/pii/S2666389925002788](https://www.sciencedirect.com/science/article/pii/S2666389925002788)
3. **Texas data centre water projections.** Houston Advanced Research Center (HARC), _Thirsty Data and the Lone Star State: The Impact of Data Center Growth on Texas' Water Supply_, white paper, 21 January 2026.[ https://harcresearch.org/wp-content/uploads/2026/01/Thirsty-Data-Water-Use-and-The-Projected-Data-Center-Boom-in-Texas.pdf](https://harcresearch.org/wp-content/uploads/2026/01/Thirsty-Data-Water-Use-and-The-Projected-Data-Center-Boom-in-Texas.pdf)
4. **Data centre water consumption figures (medium-sized: \~110 million gallons/year; large: up to 5 million gallons/day; \~80 per cent of withdrawn water evaporates).** Environmental and Energy Study Institute (EESI), _Data Centers and Water Consumption_.[ https://www.eesi.org/articles/view/data-centers-and-water-consumption](https://www.eesi.org/articles/view/data-centers-and-water-consumption)
5. **Software Carbon Intensity (SCI) specification.** International Organization for Standardization, _ISO/IEC 21031:2024 — Information technology — Software Carbon Intensity (SCI) specification_ (published March 2024).[ https://www.iso.org/standard/86612.html](https://www.iso.org/standard/86612.html)
6. **SCI for AI specification.** Green Software Foundation, _SCI for AI Specification Ratified_ (December 2025).[https://greensoftware.foundation/articles/sci-ai-specification-ratified-standard-for-measuring-ai-emissions-across-the/](https://greensoftware.foundation/articles/sci-ai-specification-ratified-standard-for-measuring-ai-emissions-across-the/)
7. **_Introducing the Software Water Intensity Specification._**[https://greensoftware.foundation/articles/introducing-the-software-water-intensity-swi-project/](https://greensoftware.foundation/articles/introducing-the-software-water-intensity-swi-project/)
