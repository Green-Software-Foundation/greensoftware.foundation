---
title: "How to Accurately Measure the Energy Consumption of Application Software"
date: "2023-06-05"
summary: "According to the World Economic Forum, 70% of the new value created in the economy over the next decade is expected to be based on digitally enabled business platforms. This trend will continue to drive an exponential increase in data creation and consumption along with the technology sector’s global carbon footprint. "
teaserText: "One of the most profound challenges in green software is measuring energy consumption. AVEVA has started calculating the energy consumption of its products and missions to understand how efficiently they currently operate. From there, they will define and implement the maturity and drive improvements in overall green design for all their solutions."
mainImage: "/assets/articles/how-to-accurately-measure-the-energy-consumption-of-application-software/main.png"
---

This use case shows how AVEVA has lowered the sustainability impacts of its digital products. Separation of the carbon emissions the software is responsible for from the hardware embodied emissions was vital. A significant reduction in actual emissions was achieved by measuring and adjusting energy consumption of the applications. 

According to the World Economic Forum, 70% of the new value created in the economy over the next decade is expected to be based on digitally enabled business platforms. This trend will continue to drive an exponential increase in data creation and consumption along with the technology sector’s global carbon footprint. 

AVEVA recognizes that software design can impact overall emissions for companies using their solutions. Committed to developing software following “green” software engineering principles and incorporating patterns and practices that limit the overall carbon emissions from the use of digital products, AVEVA continues to explore new ways to limit the climate impact of software. They recently joined the Green Software Foundation with the goal of pioneering a set of standards and best practices to build sustainability into the DNA of digital infrastructure. Aligned with the company's ESG goals and its commitment to sustainability, AVEVA has been working on a groundbreaking use case.

## Measuring software power consumption is a profound challenge

One of the most profound challenges in green software is measuring energy consumption. AVEVA has started calculating the energy consumption of its products and missions to understand how efficiently they currently operate. From there, they will define and implement the maturity and drive improvements in overall green design for all their solutions.

AVEVA aims to complete power consumption benchmark testing of its top energy-consuming products and improve policies and practices for product development in the current financial year.  Working with low-carbon cloud service providers will leverage learnings as a member of the Green Software Foundation to lower the sustainability impacts of AVEVA’s digital products.

![Four-phase process diagram: Groundwork, Initial Calculations, Automation, and Expand Coverage](/assets/articles/how-to-accurately-measure-the-energy-consumption-of-application-software/image.png)

The purpose of measuring software power consumption is twofold: enable emissions reporting for compliance and provide a mechanism for improving and tracking progress when applying green software design principles to make software more sustainable.

# How the use case solves the problem

Measuring power consumption for various heterogeneous software products is a complex task, particularly for on-premises software run by customers where AVEVA does not have visibility into the used hardware. The goal of the case study was to isolate the power consumption of the software product from the hardware it runs on.

For that purpose, AVEVA developed a generic system and methodology that can accurately measure the energy consumption of application software. Instead of relying on energy measurement circuits that are integrated into the computer’s motherboard, the whole computer is treated as a black box, and the electrical energy provided to the device is accurately measured using a high-precision benchtop power supply. The precision of the energy measurements is 0.01 Watts.

The system architecture:

![Four-phase process diagram: Groundwork, Initial Calculations, Automation, and Expand Coverage](/assets/articles/how-to-accurately-measure-the-energy-consumption-of-application-software/image.png)

<figure>
<img src="/assets/articles/how-to-accurately-measure-the-energy-consumption-of-application-software/hardware-configuration-as-deployed-in-the-aveva-demo-lab-in-lake-forest.png" alt="Two Rigol benchtop power supplies mounted in a server rack displaying voltage, current, and power readings" />
<figcaption>*Hardware configuration as deployed in the AVEVA demo lab in Lake Forest*</figcaption>
</figure>

<figure>
<img src="/assets/articles/how-to-accurately-measure-the-energy-consumption-of-application-software/raspberry-pi-located-at-the-back-of-the-hardware-cluster.jpg" alt="Raspberry Pi board with Ethernet cable connected, mounted at the back of a server rack" />
<figcaption>*Raspberry PI, located at the back of the hardware cluster*</figcaption>
</figure>

Two measurements are required to calculate the power consumption:

1. Baseline Measurement: Power consumption of a system with just the operating system as it is provided by the hardware manufacturer or delivered by the IT team as a brand-new operating system deployment.
2. Loaded System Measurement: Power consumption of the Baseline system plus:
3. Product Pre-Requisites (e.g., SQL Server)
4. Product installation (e.g., System Platform – All-In-One) 
5. Application Deployment (e.g., Soak Test Application)
6. Data simulation if applicable.

The resulting energy consumption is the difference between both measurements. It is calculated as the average of the power measurements times their duration. The duration of the measurements is application specific and related to the typical application lifecycle.

The baseline and loaded system measurements can be performed in parallel by running the baseline on the first PC and the loaded system on the identical second PC. The advantage of the second configuration is that the power consumption can be calculated continuously and in real-time.

A critical part of the system is its ability to archive data in Data Hub. The following graphic shows the power measurements of the baseline and loaded system (parallel configuration) over time.

<figure>
<img src="/assets/articles/how-to-accurately-measure-the-energy-consumption-of-application-software/power-trends-of-baseline-and-loaded-system-side-by-side.png" alt="AVEVA Data Hub trend view showing power consumption traces for baseline and loaded systems over time" />
<figcaption>*Power trends of Baseline and Loaded system side by side*</figcaption>
</figure>

The Raspberry PI (Voltage, Current, Power, and Energy) collects the measurements and stores them in AVEVA Datahub for data archival and further consumption and analysis. The following diagram illustrates the data flow in detail:

![Four-phase process diagram: Groundwork, Initial Calculations, Automation, and Expand Coverage](/assets/articles/how-to-accurately-measure-the-energy-consumption-of-application-software/image.png)

The power usage of an application can be predicted using supervised machine learning. Performance metrics like CPU, Memory, and I/O transactions must be recorded in addition to the power usage data. A supervised machine learning algorithm, e.g., a neural network or regression, can be trained using this data. Finally, the trained machine learning model can predict power consumption based on given performance metrics.

## Main benefits of the use case

The solution presented is generic and allows for separating the carbon emissions the software is responsible for from the hardware embodied emissions. This methodology allows for a consistent way of measuring heterogeneous types of software as well as preserving historical measurement data for analytics, comparison, and progress tracking.

## What was the outcome, and how were carbon emissions reduced?

“We have measured the emissions of our top ten products, and early results indicate a significant reduction in actual emissions compared to previous estimates across all measured products. Ultimately, this measurement will allow us to further refine our GHG emissions data with the goal to cover the entire AVEVA portfolio of products and services. This is important because it allows for a more accurate assessment of the environmental impact of software and can help identify opportunities for reducing emissions.”, says Daniel Lazaro of AVEVA.

They are currently working on their green product guidelines and definitions based on internal learnings and findings from the GSF. Considerations include promoting more energy-efficient coding, encouraging apps to work more when cleaner electricity is available, reducing the amount of data and distance traveled across networks, and avoiding unnecessary database lookups or avoidable data movement.

Lazaro adds: “We are in the process of defining and implementing a green software principles maturity scoring for our product portfolio based on the patterns and practices illustrated by GSF in alignment with our vision to spark industrial ingenuity by connecting businesses with trusted information and insights to drive responsible use of the world’s resources.”

Link to detailed case study:

- [https://sci-guide.greensoftware.foundation/CaseStudies/#aveva-case-study](https://sci-guide.greensoftware.foundation/CaseStudies/#aveva-case-study)
- [https://github.com/Green-Software-Foundation/sci-guide/blob/dev/use-case-submissions/AVEVA_case_study.md](https://github.com/Green-Software-Foundation/sci-guide/blob/dev/use-case-submissions/AVEVA_case_study.md)
