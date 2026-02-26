---
title: "Sustainable Systems: Architectural Choices and Sustainability "
date: "2022-02-25"
summary: "Architecting for minimal carbon is about improving how software is designed, says Anne Currie, in our Sustainable Systems series. The most efficient code is no code at all, and the best time to spot unnecessary work is as early as possible in the design process."
teaserText: "In continuing the Sustainable Systems series, Anne Currie focuses on architectural choices and sustainability and offers points for those who want to be carbon aware and follow principles of green software engineering in practice."
mainImage: "../images/sustainable-systems-architectural-choices-and-sustainability/main.png"
authors:
  - fullName: "Anne Currie"
    role: "Technologist and Author"
    company: "Container Solutions"
    companyWebsite: "https://www.container-solutions.com/"
    photo: "../images/authors/anne-currie.jpg"
    socialMedia:
      - platform: "Twitter"
        link: "https://twitter.com/anne_e_currie"
      - platform: "Personal Website"
        link: "https://www.annecurrie.com/"
---

As we discussed in the [<u>first part of this series</u>](https://greensoftware.foundation/articles/sustainable-tech-choices-for-cloud), at the end of 2021, AWS added [<u>sustainability</u>](https://aws.amazon.com/blogs/aws/sustainability-pillar-well-architected-framework/) to the [<u>well-architected pillars</u>](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sustainability-pillar.html) that define their* “key concepts, design principles, and architectural best practices for designing and running workloads in the cloud.” *A year earlier, Azure had posted their [<u>sustainable architecture guide</u>](https://docs.microsoft.com/en-gb/learn/modules/sustainable-software-engineering-overview/1-introduction), written by our own GSF chair, Asim Hussain. Their cloud recommendations are covered in a [<u>new whitepaper on sustainable architecture for the cloud</u>](https://docs.google.com/document/d/1Lym55mXRVO8pldUfrcpRqFKvE9biX93jhz-HLi_c99Y/edit?usp=sharing) from the Coed:Ethics community in London, which the GSF is closely connected to.

## What it Means for Us

In the first article, we outlined the four main approaches to tech sustainability:

- Operational efficiency, that is, [<u>improving how software is run</u>](https://greensoftware.foundation/articles/sustainable-systems-operational-choices-in-sustainable-architecture) was covered in the last post. 
- Architecting for minimal carbon is about improving how software is designed.
- Hardware efficiency, in particular, improving how end user devices are managed.
- Energy efficiency, in terms of minimising CPU/GPU and network use. 

In this post we will focus on the second, how to improve the way your software is designed.

## What is Green Software?

Sustainable or green software is designed and coded to require less power and fewer machines to perform the same tasks. This is also known as **carbon efficiency. **It also aims to draw power at times and in places where the available electricity is from low carbon sources like wind, solar, geothermal, hydro, or nuclear. This is called **carbon awareness **and is a fundamental concept of sustainable computing**.**   

## Architecting for Minimum Carbon

Software applications can be designed in ways that are more **carbon aware** and **energy efficient**, and some architectures are easier to run at low or zero carbon than others. 

### Carbon Awareness

This is all about running on carbon free electricity (CFE), which unless you operate in France (nuclear) or Iceland (geothermal) is likely to be highly variable in its availability. The tech industry, therefore, needs to be flexible in its electricity demand. 

#### Markers of sustainability

Markers of a good architecture from a sustainable perspective are:

- **Little or nothing is “always on”**, because that means it will almost inevitably have to draw power when the only electricity available was generated using fossil fuels.
- **Jobs that are not time critical**—for example, machine learning or batch jobs—are split out and computed asynchronously so they can run at times when there is low carbon electricity available. For example at times when the sun is shining and there isn’t a heavy demand on the grid. 

The techniques involved are often referred to as demand shifting or demand shaping. Tools like Microsoft’s[<u> Azure Machine Learning resource metrics</u>](https://techcommunity.microsoft.com/t5/green-tech-blog/charting-the-path-towards-sustainable-ai-with-azure-machine/ba-p/2866923) can help understand the energetic costs of AI workloads across their lifecycle or AWS’ CloudWatch provides similar data. Demand shaping can also mean changing the offering of a service based on the carbon intensity of the electricity currently available on the local grid. In times of 100% carbon-free electricity (CFE), full functionality can be offered. In times of CFE scarcity, service can be gracefully degraded. 

- **Genuinely time critical, on demand, tasks** that will draw on high carbon electricity are designed efficiently so as to use as little of it as possible.
- **Jobs are not run at higher urgency than they need**, so that if they can wait for cleaner electricity they will.
- **Where possible, calculations are pushed to the client and the edge or data is cached in Content Delivery Networks (CDNs) **to minimise network traffic, reduce the need to run on demand processes in data centres, and take full advantage of the energy stored in client batteries (which as time goes on is increasingly likely to be renewably sourced). Patrick Ferris of OCamlLabs says, “p2p, offline-first applications have a role to play in this space. Both aspects work together to remove the need for a centralised service with a high percentage uptime.”
- **Data storage policies are frugal.** Databases are optimised; that is data stored is minimised and queries are tuned. Data is compressed before storage, especially when it is for long term storage, and data isn’t stored unless absolutely necessary. 

The above often relies on a microservice or a distributed systems architecture.

[<u>Johnston states</u>](https://docs.google.com/document/d/1Lym55mXRVO8pldUfrcpRqFKvE9biX93jhz-HLi_c99Y/edit?usp=sharing), “In many systems, the only thing that needs to be always on is the interface e.g. the API Gateway or the pub/sub system. Everything else could be rewritten as an event driven system.”

### Use Managed Services

There is a real efficiency advantage in high compute density via managed cloud services. Such services, which can share resources between thousands or millions of users, achieve extremely high utilisation. 

Serverless services like Lambda functions or Azure functions are particularly helpful in minimising the hardware footprint needed upfront and helping directly in capabilities like autoscaling, rightsizing, and pay as you go.

Enterprises may sometimes fear data security in these shared environments. However, since these are likely to play a major role in the future of sustainable software, cloud providers need to address these fears. 

### Doing Less

The most efficient code is no code at all, and the best time to spot unnecessary work is as early as possible in the design process.

[<u>According to Adrian Cockcroft</u>](https://blog.container-solutions.com/sustainable-architecture-aws-the-enterprise), VP of Sustainable Architecture at AWS, “The biggest win is often changing requirements or SLAs. Reduce retention time for log files. Relax overspecified goals.” 

Sometimes overspecified goals are unavoidable, out of date regulations for example. But, often they are internally driven, rather than in response to external pressures or genuine user needs. If that is the case, drop them until you know you require them.

## Conclusion

When it comes to sustainability, architecture matters. An interesting thought experiment is: could you run 90% of your system’s CPU load on a spot instance? How about in a managed service? 

What service brownout options are available to you to operate with a lower electricity draw? Could you reduce response time targets or encoding quality? What else? Google is working on how to run fewer machines at times of high carbon electricity. How could you do the same? 
