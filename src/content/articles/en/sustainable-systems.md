---
title: "Sustainable Systems : Choose Practical Response Times for Your Applications"
date: "2022-05-19"
summary: "Sustainable Systems : Choose Practical Response Times for Your Applications"
teaserText: "This second post, we cover another trade off to consider around NOT aiming for “aggressive” performance response times and throughput for the applications we build."
mainImage: "/assets/articles/sustainable-systems/main.png"
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

In the [<u>first post</u>](https://greensoftware.foundation/articles/sustainable-systems-mastering-the-tradeoff-between-high-server-utilization-and-ha) of the Sustainable Systems series, we covered how to lower your SCI score by managing tradeoffs between high server utilization and energy consumption.

In this second post, we cover another trade off to consider around NOT aiming for “aggressive” performance response times and throughput for the applications we build. In an attempt to meet stiff response time targets, we have seen that considerable development cycles are spent towards tuning the code for performance.  This increases the overall carbon emissions of the software. The intent of this post is to provide readers with considerations that can help business and technical teams to attempt to reach a middle ground and negotiate on acceptable response time numbers. 

<u>**Key measures of software performance**</u>

One of the key non-functional *requirements *we focus on, is performance measured either through response times or throughput i.e the number of requests served by an application in a unit of time. Response time targets need to be defined for applications thereby ensuring that users have the best possible experience (least latency) as they try to perform business operations.

Users always desire faster response times and an approach to achieve this goal could be to keep adding hardware . However we should also take into account the environmental implications of doing so without a threshold. Also there are diminishing returns as hardware increases, as we will see from some of the lab results shared below.

As part of the Green Software movement, *energy* costs involved are now an additional factor to consider. Therefore, it's important to inform people how to architect, design, build, test and run software with high performance requirements while minimizing the environmental impact.

<u>**SCI Impact**</u>

We can consider the energy cost by using the [<u>SCI score</u>](https://github.com/Green-Software-Foundation/software_carbon_intensity/blob/main/Software_Carbon_Intensity/Software_Carbon_Intensity_Specification.md#methodology-summary). To achieve low response times, the number and scale of physical resources are increased - either through scale up or scale out techniques. While scale up techniques increase the size of the processing units – memory, CPU of a server, scaling out is used to add more physical servers to run the workload.  Both these techniques increase the SCI score proportionately.

![](/assets/articles/sustainable-systems/image.png)

E value, as the energy is now a multiplying factor of the number of cores, GPUs, RAM needed.

1. M value or embodied emissions value, which is the carbon footprint for the manufacturing of the required hardware.

Please note : from an SCI standpoint, today we document the numbers in terms of the production infrastructure only. This is because the Functional unit value of R is attached to the software boundary and in the [<u>released version</u>](https://github.com/Green-Software-Foundation/software_carbon_intensity/blob/main/Software_Carbon_Intensity/Software_Carbon_Intensity_Specification.md) of SCI specification, the Foundation decided to restrict the [<u>software boundary</u>](https://github.com/Green-Software-Foundation/software_carbon_intensity/blob/main/Software_Carbon_Intensity/Software_Carbon_Intensity_Specification.md#software-boundary) only to the components that scale with the same functional unit of R.

The key thing to consider is whether the desired user experience ("wow" factor) is achieved, even with infinitely scaled hardware. Let's find out!

<u>**Law of Diminishing returns**</u>

We I ran multiple load tests using web workloads and measured response times versus increasing infrastructure. I chose Azure App service as the application server and ran the[ <u>eShop Web</u>](https://github.com/dotnet-architecture/eShopOnWeb) application with different [<u>App service plan configurations</u>](https://azure.microsoft.com/en-in/pricing/details/app-service/windows/#overview). I started with Standard service plans (S1, S2, S3) and then scaled up to Premium service plans  that have better memory to core ratios. For a good shopping experience on the ecommerce site, I considered response times around [<u>1 second as acceptable</u>](https://www.nngroup.com/articles/response-times-3-important-limits/).

<u>**App Service Plans in Azure**</u>

![](/assets/articles/sustainable-systems/image.png)

As you see in the graph below where I have plotted the response times vs. different App Service plans, we see that response times reduce drastically as we move from S1 to S2 configuration – from 3.2 to 1.05 seconds. But as I start adding more physical resources, the improvements in latency are only marginal. From S2 to S3 to Premium configurations, the improvements in latency are in the range of milliseconds only. 

Correspondingly,  we can see that there was an initial decrease in energy consumed as we added additional cores and memory (from S1 to S3) . However the next increase to the P1 Premium plan led to a massive increase in energy consumption (3.35 KwH for P1 versus 0.12 KwH for S3). The higher memory to core Premium processors  consumed more energy than the standard processors while offering only marginal improvement in response times. Hence the optimal infrastructure here would be to choose either a S2 or S3 configuration that provides a low energy footprint and at the same time maintains an acceptable response time hovering around 1 second. 

![](/assets/articles/sustainable-systems/image.png)

<u>**Be realistic**</u>

It is important for software decision makers to come up with practical acceptable numbers for measures like response times. Some considerations would be:

1. Identify the key business scenarios that are sensitive to response times and distinguish them from the rest of the application which may not have such stringent requirements.
2. Identify if some workloads within the application can be run on-demand rather than “always-on”. These application areas could be good candidates for green computing techniques like [<u>carbon awareness</u>](https://principles.green/principles/carbon-intensity/All%20areas%20of%20the%20application%20may%20not%20be%20equally%20important%20and).
3. For workloads that have demanding performance requirements, identify if they need to be at peak performance all of the time. Green techniques like “[<u>demand-shifting</u>](https://principles.green/principles/carbon-intensity/#heading-demand-shifting)” can be leveraged for such scenarios.


While it is a great user experience to have near zero response times, architects and business stakeholders should factor in questions like:

1. What is the threshold response time above which my users would stop using the application?
2. What is the energy cost of building software that has 5 millisecond response time versus 50 millisecond response time? Can we model and come up with energy and cost calculations for multiple permutations of these variables?
