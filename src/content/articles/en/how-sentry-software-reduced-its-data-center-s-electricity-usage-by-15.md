---
title: "How Sentry Software Reduced Its Data Center’s Electricity Usage by 15%"
date: "2023-07-06"
summary: "This article highlights how GSF member Sentry Software successfully raised the temperature of its data center from 18°C to 27°C, resulting in significant energy savings and carbon emissions reductions. A full recording of this Green IT success story can be found here."
teaserText: "Increasing the data center temperature from 18°C to 27°C resulted in a decrease of 15% in energy required for air conditioning and 7% in carbon emissions. "
mainImage: "/assets/articles/how-sentry-software-reduced-its-data-center-s-electricity-usage-by-15/main.png"
---

*This article highlights how GSF member *[*Sentry Software*](https://www.sentrysoftware.com/)* successfully raised the temperature of its data center from 18°C to 27°C, resulting in significant energy savings and carbon emissions reductions. A full recording of this Green IT success story can be found *[*here*](https://grafana.com/about/events/grafanacon/2023/session/grafana-opentelemetry-to-reduce-electricity-usage-at-sentry-software/)*.*

## A commitment was the trigger to take action 

The story of the use case begins with Sentry Software joining [SBTi](https://sciencebasedtargets.org/) and committing itself to **reducing scope 1 and 2 GHG emissions by 46% by 2030**. The pursuit of this ambitious goal implied:

1.     Estimating carbon emissions,

2.    Setting up an action plan to reduce GHG emissions,

3.    Executing the plan.

## Estimating carbon emissions 

Since the COVID-19 pandemic, Sentry Software is a fully remote company that generates no carbon emissions from employees commuting. Most of its carbon emissions come from **IT resources** and, more specifically, from its **on-prem data center**, which consists of over 100 systems from different types and vendors. Carbon emissions in IT are either associated with the manufacturing and shipping of physical devices (*embodied emissions*) or resulting from the electricity required to run physical services (*operations emissions*). For data centers, **operations emissions can account for up to 90% of their overall carbon footprint**, with **cooling systems responsible for a large share of the electricity use**. Simply increasing the temperature at data centers can result in significant carbon emissions reductions. Sentry Software chose to follow this path to reduce its GHG emissions.

## Setting up an action plan to reduce GHG emissions 

Once Sentry Software had identified its primary source of carbon emissions and the action to be taken, it set up the following execution plan:  

1.     Assess the energy usage of its data center

2.    Estimate the proper temperature of the data center

3.    Gradually increase the temperature of the data center

4.    Assess the results.

## Executing the plan 

### Assessing the energy usage of the data center 

Sentry Software first referred to its **monthly electricity bill** to understand energy usage and carbon emissions. Although valuable, this document provided little information about how the energy was consumed and by what. DCIM tools could have provided a more granular view, but these solutions were too expensive and complex to implement for an SME like Sentry Software. Sentry Software needed a cost-effective and easy-to-implement solution. It opted for its own monitoring tool,** Hardware Sentry**, to obtain the** power consumed by each system** and calculate the** energy consumed by the overall IT infrastructure**.

![Hardware Sentry monitoring diagram showing connections to Cisco, Dell, Fujitsu, HP, IBM, and Pure Storage servers](/assets/articles/how-sentry-software-reduced-its-data-center-s-electricity-usage-by-15/image.png)

To make the information available to the stakeholders, the Sentry Team created specific [Grafana dashboards](https://grafana.com/grafana/dashboards/17223-hardware-sentry-main/) displaying in [real-time](https://hws-demo.sentrysoftware.com/d/-GV2ChOnz/hardware-sentry-main?orgId=1) the **overall power consumption** of the data center, the energy consumed** daily**,** monthly**, and** yearly** and the resulting** CO₂ emissions**.

![Hardware Sentry monitoring diagram showing connections to Cisco, Dell, Fujitsu, HP, IBM, and Pure Storage servers](/assets/articles/how-sentry-software-reduced-its-data-center-s-electricity-usage-by-15/image.png)

### Estimating the proper temperature 

Sentry Software had maintained its data center at 18 degrees Celsius to prevent unplanned outages due to overheating. This temperature was low compared to the acceptable operating temperature range recommended by the [American Society of Heating, Refrigerating, and Air-Conditioning Engineers](https://www.ashrae.org/) (18-27°C for server rooms). To estimate the most appropriate temperature for its data center, the Sentry team checked the maximum temperature recommended by [Hardware Sentry](https://www.sentrysoftware.com/products/hardware-sentry.html). On Day 1, the data center was operating at 17.7°C, but Hardware Sentry indicated that there was no heating margin. The solution even recommended lowering the ambient temperature to 17°C to ensure the safety of the server room.

![Hardware Sentry monitoring diagram showing connections to Cisco, Dell, Fujitsu, HP, IBM, and Pure Storage servers](/assets/articles/how-sentry-software-reduced-its-data-center-s-electricity-usage-by-15/image.png)

Because Hardware Sentry monitors the temperature sensors of each system, the Sentry team could identify which systems were at risk of overheating and move them closer to the source of airflow. The heating margin immediately went up, giving the green light to the Sentry team to gradually increase the data center's temperature. 

![Hardware Sentry monitoring diagram showing connections to Cisco, Dell, Fujitsu, HP, IBM, and Pure Storage servers](/assets/articles/how-sentry-software-reduced-its-data-center-s-electricity-usage-by-15/image.png)

### Gradually increasing the temperature 

Every morning, the system administrators configured the air conditioning system to a new target temperature and observed the changes in their dashboards. If Hardware Sentry triggered no warnings or alerts, they continued rising the cooling setpoint. The temperature of the data center could go up to 27 degrees Celsius before Hardware Sentry issued a warning.

![Hardware Sentry monitoring diagram showing connections to Cisco, Dell, Fujitsu, HP, IBM, and Pure Storage servers](/assets/articles/how-sentry-software-reduced-its-data-center-s-electricity-usage-by-15/image.png)

### Assessing the results 

Increasing the data center temperature from 18°C to 27°C resulted in **a decrease of 15% in energy required for air conditioning** and** 7% in carbon emissions**. These impressive results have been obtained by optimizing the server room's temperature – no additional actions have been performed. Even though the energy reduction of 15% was lower than anticipated, Sentry Software believes that other data centers could achieve similar energy reductions. 

Sentry Software hopes that other companies will follow their path and encourages anyone interested in reducing the environmental impact of their IT infrastructure to download the free-to-use solution [Hardware Sentry](https://www.sentrysoftware.com/products/hardware-sentry.html) and the associated [Grafana dashboards](https://grafana.com/about/events/grafanacon/2023/session/grafana-opentelemetry-to-reduce-electricity-usage-at-sentry-software/).
