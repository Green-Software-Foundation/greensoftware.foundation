---
title: "Sustainable Systems: Mastering the Tradeoff Between High Server Utilization and Energy Efficiency in Designing Green Software"
date: "2022-02-15"
summary: "Reducing hardware resources and aiming for high server utilization does not always bring down carbon intensity of software. Read the first article in Sustainable Systems series by Srinivasan Rakhunathan to understand why"
teaserText: "What should you monitor as you try to increase the hardware efficiency of software? To find out, read this first article by Srinivasan Rakhunathan in the Sustainable Systems column."
mainImage: "/assets/articles/sustainable-systems-mastering-the-tradeoff-between-high-server-utilization-and-ha/main.png"
authors:
  - fullName: "Srinivasan Rakhunathan"
    role: "Senior Program Manager, Cloud Supply Chain Sustainability"
    company: "Microsoft"
    companyWebsite: "https://www.microsoft.com/"
    photo: "/assets/articles/authors/srinivasan-rakhunathan.jpeg"
    socialMedia:
      - platform: "Twitter"
        link: "https://twitter.com/sriniMSU"
      - platform: "Linkedin"
        link: "https://www.linkedin.com/in/srinivasan-rakhunathan-15a77536/"
---

## **A new article series on architecting green software**

Building green software needs to start right from the architecture phase itself. Multiple techniques can be leveraged by software architects and we will focus on some of them in this multi-part series on architecting green software.

In this first post, we will focus on techniques to choose the optimal infrastructure needs of a solution. In future posts, we will focus on other approaches, namely:

- Choosing practical Service Level Agreements (SLAs) for your applications
- Calculating and monitoring the energy cost of performance engineering
- Architecting modules with differential SLAs
- Performance tuning techniques to reduce energy efficiency
- Improving energy efficiency through microservices architectures
- Auto scaling or hardware efficiency: which is better?

---

## What is hardware efficiency?

Hardware efficiency is defined as actions taken to make software use less physical resources to perform the same function.

## **Understanding non-functional requirements **

Enterprise applications and ecommerce applications that run in the cloud have varying levels of usage. By usage, we mean the average number of users. Ecommerce applications are especially prone to varying traffic patterns, with peaks during periods of offers and sales.

 Although enterprise applications may not have the same peak and low usage patterns as the ecommerce sites, they too experience variances in traffic. Hence, architects typically capture two types of non-functional requirements for these applications: peak concurrent users and total number of users. These help to model loads for performance tests which are used to stress test the application and determine the maximum possible traffic capacity.

## **Techniques for managing hardware efficiency through performance tests**

One of the key objectives of performance tests—apart from verifying the response times and throughput of the application—is to determine the infrastructure requirements for the workload. This is an area where green software principles can help reduce the carbon intensity. 

Here's how the carbon intensity of software is defined by the Green Software Foundation:

<figure>
<img src="../images/sustainable-systems-mastering-the-tradeoff-between-high-server-utilization-and-ha/the-definition-of-software-carbon-intensity-sci-by-the-green-software-foundation.png" alt="The Definition of Software Carbon Intensity (SCI) by the Green Software Foundation" />
<figcaption><em>The Definition of Software Carbon Intensity (SCI) by the Green Software Foundation</em></figcaption>
</figure>

Making attempts to reduce the number of physical resources used helps to reduce the "E" and "M" values from the SCI formula. As per the [<u>Energy proportionality</u>](https://principles.green/principles/energy-proportionality/) principle—measure of the relationship between power consumed by a server and the utilization—the most efficient and green approach is to run your work on as few servers as possible with the highest rate of utilization. 

However, it is recommended that we take a middle ground and choose the optimal infrastructure and not necessarily the minimal infrastructure. We need to take a balanced approach between reducing the number of servers and at the same time, ensuring that the servers are not running at maximum utilization for long periods of time. As we can see from the test results below, having servers running at high utilization continuously will increase the energy usage and also decrease the lifetime of the server components.

From a technique perspective, it is recommended to start performance tests by running them on the least possible set of CPU, Memory and GPUs. Most of the stock-keeping units (SKUs) and instances available with public cloud providers come with information around the type of workloads they typically support. This information can be leveraged to choose the most optimal infrastructure. 

For example, in Azure we choose [<u>Standard SKUs</u>](https://azure.microsoft.com/en-us/pricing/details/app-service/windows/) when deploying production workloads like ecommerce sites and/or enterprise applications. The choice of SKU here within these managed service plans (S1 or S2 or S3 or even P1) should be based upon server performance during the performance tests. 

## Techniques to improve your SCI score

Here are some techniques that can be leveraged to improve [your SCI score](https://github.com/Green-Software-Foundation/software_carbon_intensity): 

### **Ensuring server utilization has sufficient headroom ** for spikes

During tests, ensure that the server utilization has enough headroom to be able to handle fluctuations in traffic. If the servers run at a high rate of utilization throughout the tests—for example, CPU utilization of  70%+—it means that there is no server headroom to handle spikes in traffic; so applications may crash or stop during these circumstances.

### **Striking a balance between hardware efficiency and high utilization** 

A high utilization means more electricity is drawn to sustain the processor continuing to serve those requests. This invariably impacts the "E" value in the SCI formula. The hardware efficiency gains from choosing a dual core machine over a quad core machine are negated due to this consistent high utilization.

The following graphs show the utilization levels when running a sample ecommerce application on a single core machine (left) and a dual core machine (right). For a single core machine, the CPU utilization spikes up to 100% and does not reduce for about 4 to 5 minutes.  Due to this, higher power is drawn during this timeframe to ensure the CPU server is able to serve all the requests. This increases the SCI value. 

<figure>
<img src="../images/sustainable-systems-mastering-the-tradeoff-between-high-server-utilization-and-ha/graphs-comparing-server-utilization-with-single-core-and-dual-core-machines.png" alt="Graphs comparing Server Utilization with Single Core and Dual Core Machines" />
<figcaption><em>Comparison of Server Utilization with Single Core and Dual Core Machines</em></figcaption>
</figure>

###  **Avoiding long periods of high server utilization **

In case of a single core machine, the HTTP requests to the server get queued. This is due to the single core server having long periods of high utilization and hence not having enough capacity to free up threads to handle HTTP requests. 

See the results below, where the dual core machine has almost double the throughput of the single core while maintaining the response times below 1 second. 

<figure>
<img src="../images/sustainable-systems-mastering-the-tradeoff-between-high-server-utilization-and-ha/comparison-of-single-core-and-dual-core-machines-with-response-times-and-throughput.png" alt="Comparison of single core and dual core machines with response times and throughput" />
<figcaption><em>Comparison of single core and dual core machines with response times and throughput</em></figcaption>
</figure>

Running the SCI calculations for both these server configurations using a sample application[ using <u>eShoponWeb</u>](https://github.com/dotnet-architecture/eShopOnWeb), we find that the operational emissions of the dual core machine are almost half that of the single core machine. 

<figure>
<img src="../images/sustainable-systems-mastering-the-tradeoff-between-high-server-utilization-and-ha/server-response-time-vs-number-of-cores.png" alt="server-response-time-vs-number-of-cores" />
<figcaption><em>Response Times vs Number of Cores</em></figcaption>
</figure>

## Take home points for green software architects

Considering this tradeoff can help you optimize infrastructure and minimize the SCI score of your application. While a balance needs to be maintained by having higher server utilization, choosing the right hardware is important to ensure the power drawn to run the software is optimal. Otherwise, excess power is drawn to ensure that the application responds to the users within the SLA.

---

## Other articles by the author

[Role of Performance Engineering in Designing Carbon Efficient Applications](https://greensoftware.foundation/articles/role-of-performance-engineering-in-designing-carbon-efficient-applications)
