---
title: "Measuring the Energy Consumption of an on premise ecommerce application"
date: "2023-05-17"
summary: "While there is a desire by all enterprises to migrate to the cloud, there will be a considerable portfolio of on-premise solutions that we need to live with for the next few years. The carbon footprint of these applications must be measured and optimized, especially as they continue to scale."
teaserText: "Several large scale multi-tier, on-premise software systems being developed and maintained by NTT DATA run enterprise applications like e-commerce. While there is a desire by all enterprises to migrate to the cloud, there will be a considerable portfolio of on-premise solutions that we need to live with for the next few years. The carbon footprint of these applications must be measured and optimized, especially as they continue to scale."
mainImage: "../images/measuring-the-energy-consumption-of-an-on-promise-ecommerce-application/main.png"
---

# **Executive Summary**

This article describes how NTT DATA used the SCI score to help measure the carbon footprint of a large-scale three-tier on premise-software system.

## **Description of problem**

Several large scale multi-tier, on-premise software systems being developed and maintained by NTT DATA run enterprise applications like e-commerce. While there is a desire by all enterprises to migrate to the cloud, there will be a considerable portfolio of on-premise solutions that we need to live with for the next few years. The carbon footprint of these applications must be measured and optimized, especially as they continue to scale.

## **How the use case solves the problem**

NTT DATA has a mature set of tools and techniques to optimize the performance of such software systems. We use industry-standard benchmarks such as TPC-W, which provide a performance benchmark for Web Interactions per second for a given load. We have implemented tooling across the entire stack, including networking, hardware, and software, to measure the rate of emissions using SCI. We have measured it in terms of co2 equivalent per web interaction.

## **Main benefits of the solution**

The SCI has helped gather carbon emissions-related metrics, utilizing some of the mature processes we regularly perform, such as performance optimization. Consequently, we can understand the impact of scaling the systems on the total carbon footprint and take appropriate actions to help bring down the carbon footprint

## **What was the outcome, and how were carbon emissions reduced?**

We now have a baseline for the carbon impact per unit of work, based on a blueprint infrastructure, that provides a baseline performance. We will now use this to implement patterns that decrease the carbon footprint with no negative impact on performance and also to be aware of the carbon impact on any performance improvement andscaling decision that we make on the software system.

**Link to detailed case study:**

[<u>sci-guide/nttdatta-On-Premise-Web-system.md at dev · Green-Software-Foundation/sci-guide (github.com)</u>](https://github.com/Green-Software-Foundation/sci-guide/blob/dev/use-case-submissions/nttdatta-On-Premise-Web-system.md)
