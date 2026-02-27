---
title: "Role of Performance Engineering in Designing Carbon Efficient Applications"
date: "2021-11-24"
summary: "How can you use performance engineering and performance testing to make carbon efficient applications?  "
teaserText: "Learn, with examples, how to use performance testing to optimize your infrastructure use in designing carbon efficient applications. "
mainImage: "/assets/articles/role-of-performance-engineering-in-designing-carbon-efficient-applications/main.png"
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
originBlogName: "Microsoft Dev Ops Blogs"
publishedOriginUrl: "https://devblogs.microsoft.com/sustainable-software/role-of-performance-engineering-techniques-in-designing-carbon-efficient-applications/"
---

## What is performance testing?

Performance engineering is a software engineering discipline that deals with the techniques, processes, and metrics to make our applications more performant. It is a technique by which we tune the code that we write by measuring against the nonfunctional requirements, such as performance under a certain amount of concurrent users or sessions. Usually performance testing involves simulating production-level workloads in a testing environment to understand how the application performs.

## Why do we need to do performance testing?

We live in the cloud era where we are enabled by platforms like Azure that have helped move the infrastructure costs of our workloads from Capital expenditure (to procure servers and network devices upfront) to an Operating expenditure model of provisioning servers on demand. We now can provision additional servers just-in-time, and we can scale out and scale down easily based on runtime metrics like CPU utilization and storage queue length. In addition, we also know that carbon emissions are directly proportional to the servers we set up. From Sara Bergman’s articles—[<u>How can I calculate carbon emissions for my Azure VM</u>](https://devblogs.microsoft.com/sustainable-software/how-can-i-calculate-co2eq-emissions-for-my-azure-vm/) and [<u>How to Measure the Energy Consumption of Your Backend Service</u>](https://greensoftware.foundation/articles/how-to-measure-the-energy-consumption-of-your-backend-service)—it is clear that the more infrastructure we setup the higher the carbon footprint.

## How does it help in carbon savings?

Performance testing helps optimize the infrastructure needed for running a workload. Consider a web application that connects to the database and is used concurrently by more than 1,000 users within a geo-region. A typical infrastructure setup is as per this architecture [<u>Basic web application – Azure Reference Architectures | Microsoft Docs</u>](https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/app-service-web-app/basic-web-app?tabs=cli) .

<figure>
<img src="../images/role-of-performance-engineering-in-designing-carbon-efficient-applications/diagram-of-infrastructure-setup-for-a-basic-web-application.png" alt="diagram-of-infrastructure-setup-for-a-basic-web-application" />
<figcaption><em>Typical infrastructure set up for a basic web application</em></figcaption>
</figure>

It has an Azure SQL database behind an App service. There are multiple pricing tiers you can consider to provision for this application, but we can use performance engineering techniques to derive the right tier. A high-level set of activities covering these techniques are:

- Identify the user load, latency acceptable and throughput required for the application (Non-functional requirements – NFR)
- Choose the lowest pricing tier for the Azure services that has specifications matching the NFRs.
- Run a simulated load test on key application scenarios and identify the headroom available in the infrastructure to take on additional load.

## An example of tuning

In the example graph below, the utilization of the database was calculated after the initial load tests. As you can see, the average utilization is hovering around 80% with a peak close to 97%. This does not allow any excess capacity to add additional workloads on the database. 

Running [<u>Azure Database tuning advisor</u>](https://docs.microsoft.com/en-us/azure/azure-sql/database/database-advisor-implement-performance-recommendations) helped identify many recommendations, including need to add indexes and to fix some long running queries. 

### Before Tuning

<figure>
<img src="../images/role-of-performance-engineering-in-designing-carbon-efficient-applications/a-graph-of-resource-utilization-before-tuning.png" alt="A-graph-of-resource-utilization-before-tuning" />
<figcaption><em>Resource utilization before tuning</em></figcaption>
</figure>

### After Tuning

Incorporating the recommendations helped bring down the database utilization as you can see in the “After Tuning” graph. Now the same database at the same pricing tier can handle additional application querying.

<figure>
<img src="../images/role-of-performance-engineering-in-designing-carbon-efficient-applications/a-graph-of-resource-utilization-after-tuning.png" alt="A-graph-of-resource-utilization-after-tuning" />
<figcaption><em>Resource utilization after tuning</em></figcaption>
</figure>

##  Another Example of Tuning

In another example, you can see that during the initial performance runs, an application is showing high CPU utilization and is also showing memory leaks, since memory graph is not reducing at the end of the load run. 

This is another scenario where we could have iteratively tried provisioning more infrastructure—higher RAM, premium pricing tier—and the memory leak and CPU utilization problems could have been contained. This, however, means a higher carbon footprint and infinitely increasing costs for the customer. Code written poorly is never identified and the infrastructure used is not optimal for the workload. 

### Before tuning

<figure>
<img src="../images/role-of-performance-engineering-in-designing-carbon-efficient-applications/a-graph-of-resource-utilization-after-tuning.png" alt="A-graph-of-resource-utilization-after-tuning" />
<figcaption><em>Resource utilization before tuning</em></figcaption>
</figure>

Tuning techniques like asynchronous callback, caching and explicit garbage collection calls were implemented  to fix the code issues. This helped bring down the CPU utilization and, as the after tuning graph shows, now it  has enough excess capacity to handle more workloads. 

### After Tuning

 

![](/assets/articles/role-of-performance-engineering-in-designing-carbon-efficient-applications/image.png)

This is an example of a Carbon efficient application.

## In Summary

The art and science of performance engineering will help us:

- Build applications that are carbon efficient, thus minimizing the amount of carbon emitted per unit of work.
- Build applications that are energy efficient.
- Run servers and machines at a high rate of utilization. 
- Take full advantage of what you have already and minimize wasted cycles and resources.
- Enable success of microservices architectures that will help increase the compute density of already provisioned hardware. 

Also, this should never be a one-time activity. We should deepen the performance strategy within development sprints to be able to make changes much earlier in the software development lifecycle.
