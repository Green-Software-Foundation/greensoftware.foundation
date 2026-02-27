---
title: "Carbon-Aware Computing Whitepaper - How UBS succeeded in measuring and reducing carbon emissions of their core risk platform"
date: "2023-01-10"
summary: "The first enterprise-scale implementation of carbon-aware computing using the software carbon intensity (SCI) specification and carbon-aware-sdk is capable of avoiding multiple metric tons of CO2eq from entering the atmosphere -- every year."
teaserText: "The first enterprise-scale implementation of carbon-aware computing using the software carbon intensity (SCI) specification and carbon-aware-sdk is capable of avoiding multiple metric tons of CO2eq from entering the atmosphere -- every year."
mainImage: "/assets/articles/carbon-aware-computing-whitepaper-how-ubs-succeeded-in-measuring-and-reducing-car/main.png"
---

The first enterprise-scale implementation of carbon-aware computing using the software carbon intensity (SCI) specification and carbon-aware-sdk is capable of avoiding multiple metric tons of CO2eq from entering the atmosphere -- every year.

Had we heard this statement 20 years ago, most of us would have chuckled. Insignificant, we would have said, pointing to the role that software played in producing carbon emissions. But boy, has the world changed! More than ever, we are relying on computer technology in our daily lives and for our business operations, especially in the service industry, especially for a global bank like UBS.

## “The way we design and build our applications has a direct relationship to how much carbon they emit. With a better understanding of the impact our application designs have on the environment, we can make choices which have a more positive impact on the planet.”

— Paul McEwen, Global Head of Technology Services for UBS

This trend is not slowing down in the slightest. More complex systems mean more software operations, which generally results in higher energy consumption. And with a grid that is nowhere near to being clean, this inevitably translates into rising carbon emissions. Problematic indeed, but herein also lies the opportunity: reducing emissions by shaping the electricity demand of our applications.

# Green computing sparked by collaboration

The whitepaper explains the functionality of the GSF [<u>Software Carbon Intensity (SCI)</u>](https://github.com/Green-Software-Foundation/software_carbon_intensity) specification and [<u>carbon-aware-sdk</u>](https://github.com/Green-Software-Foundation/carbon-aware-sdk) tooling. It shows the cooperation between the two global organizations, UBS and Microsoft, in using GSF’s new standard of measurement in a UBS risk modeling application. The findings provide architectural guidance that can help other organizations reduce their carbon footprint.

## “At Microsoft, we are committed to helping organizations reach their sustainability goals. Carbon-aware computing advances the measurement and reduction of carbon emissions associated with software technology at a global scale.”

 — Elisabeth Brinton, Microsoft Corporate Vice President, Sustainability

# Applying Cutting Edge Technology

Microsoft, UBS and WattTime all partnered under the GSF umbrella in developing the SDK and implementing the first minimum viable product (MVP) that makes a production banking system carbon-aware. The MVP was used to provide carbon-aware functionalities to a UBS risk platform called Advanced Compute Quantum Analytics (or ACQA). The focus was on time-shifting workloads during a 24h window with the goal of processing them at times of lower carbon intensity in the grid.

But how do we know when the grid at a specific location is less carbon intensive? In general, when energy demand is high, the supply of clean energy sources is exceeded and higher carbon sources are added to the mix. That’s where the WattTime technology comes in. It is capable of telling us the “marginal carbon intensity”, or how much additional carbon emissions would be created by running our workload at a specific point in time on a particular grid.

# The 4 steps of a time-shifting MVP

UBS and Microsoft used the carbon-aware-sdk to validate the impact of time-shifting on the execution of their Azure Batch workloads from ACQA. Here’s an example of their 4 step process:

1. Measure carbon intensity of a sample workload processed in the past - this returned a value of 710g of CO2 equivalent per kWh.
2. Determine optimal forecasted carbon intensity - the SDK is queried for the optimal 15-min window over the course of the day and returned the value of 659g for the period of 7:05-7:20am.
3. Measure carbon intensity of the optimized workload - the actual can be different from the forecast; the query is placed for the above time window and it returns a measured 642g.
4. Use step 1-3 to identify potential savings over time - this shows savings achieved when running the workload within the ideal time window, e.g. over the course of a week.

![](/assets/articles/carbon-aware-computing-whitepaper-how-ubs-succeeded-in-measuring-and-reducing-car/image.png)

# Implementation/Architecture

The[ carbon-aware-<u>sdk</u>](https://github.com/Green-Software-Foundation/carbon-aware-sdk) has been integrated into the UBS ACQA risk platform. Each joib reads Application Insights’ custom telemetry record, and then queries the carbon-aware-sdk via REST to calculate carbon intensity. This is ingested into the ACQA databricks data lake, and made available alongside other production data. This allows for generation of reports in Power BI.
Currently, the integration is under pilot to ensure everything is production-ready; the next phase will be to begin delaying the jobs themselves, and reporting the carbon savings. Here’s the architecture they used:

![](/assets/articles/carbon-aware-computing-whitepaper-how-ubs-succeeded-in-measuring-and-reducing-car/image.png)

# Taking it to the next level

The logical next step would be to add location selection abilities to choose regions with the cleanest grids. Workloads can be executed in regions with lower carbon intensity. Enhancements are required to take into account additional carbon emission factors, e.g. caused by data-transfer.

To capture the absolute impact, energy consumption and embodied carbon as per the SCI would have to be included as well. Accurate energy telemetry is needed from cloud and hardware providers. A full SCI score will provide a higher degree of accuracy in determining the carbon output of running software.


**Read the full white paper on the Microsoft website: **[<u>https://news.microsoft.com/de-ch/carbon-aware-computing-whitepaper/</u>](https://news.microsoft.com/de-ch/carbon-aware-computing-whitepaper/)

# How to get involved

Improving the measurement of the carbon intensity of software with the SCI is a foundational GSF initiative. Organizations and software engineers are invited to contribute directly to the[ <u>SCI repository</u>](https://github.com/Green-Software-Foundation/software_carbon_intensity). 

Consider carbon-aware computing when building new software solutions or when modernizing existing ones. The GSF organizes an annual hackathon for carbon-aware computing. Read about the great ideas that emerged from[ <u>CarbonHack22</u>](https://greensoftware.foundation/articles/carbonhack22-a-big-leap-in-carbon-aware-computing) and dig deeper into the[<u> carbon-aware-sdk</u>](https://github.com/Green-Software-Foundation/carbon-aware-sdk) to leverage or extend the MVP.


