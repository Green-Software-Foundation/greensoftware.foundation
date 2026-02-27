---
title: "Sustainable Tech Choices for Cloud "
date: "2022-01-20"
summary: "The big three hypercloud providers need clever flexibility and targeted efficiency to achieve CZero. And the changes must come from them as well as from their users."
teaserText: "Running highly available products and services on top of variably available power calls for flexibility and targeted efficiency from cloud providers and users."
mainImage: "/assets/articles/sustainable-tech-choices-for-cloud/main.png"
authors:
  - fullName: "Anne Currie"
    role: "Technologist and Author"
    company: "Container Solutions"
    companyWebsite: "https://www.container-solutions.com/"
    photo: "/assets/articles/authors/anne-currie.jpg"
    socialMedia:
      - platform: "Twitter"
        link: "https://twitter.com/anne_e_currie"
      - platform: "Personal Website"
        link: "https://www.annecurrie.com/"
---

## Introduction

This is the first of a five-part series covering Sustainable Tech Choices for Cloud. 

At the end of 2021, AWS added [<u>sustainability</u>](https://aws.amazon.com/blogs/aws/sustainability-pillar-well-architected-framework/) to the [<u>well-architected pillars</u>](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sustainability-pillar.html) that define their* “key concepts, design principles, and architectural best practices for designing and running workloads in the cloud.” *A year earlier, Azure had posted their [<u>sustainable architecture guide</u>](https://docs.microsoft.com/en-gb/learn/modules/sustainable-software-engineering-overview/1-introduction), written by our own Asim Hussain. The good news is, the stories are similar—on climate-friendly software, we all know what to do. 

So, why have both of the biggest public cloud providers now come out with guides to writing green software? In effect, they’re saying that sustainability is a fundamental part of how we need to think about cloud engineering from now on. They’re right, and Amazon, Microsoft, and (eventually, we predict) Google saying it was inevitable. As soon as they made their 2020 promises to be carbon zero in their own data centers by 2030, a change to the way the rest of us architect for the cloud was locked in.

## Cloud providers cannot achieve CZero on their own

The first hint that the big three hypercloud providers couldn’t achieve CZero without change from their users came in June 2021 in a [<u>paper about achieving carbon zero</u>](https://arxiv.org/pdf/2106.11750.pdf) on the Google Cloud. To my reading, Google implied they weren’t currently attempting to achieve their goals in their public cloud because it was too tricky—customer workloads were too opaque to them. 

However, whilst Google Cloud Platform (GCP) can clearly focus on their own private workloads first, AWS and Azure don’t have that luxury. Customer workloads are their business, particularly for AWS. They need to find a way to steer their users towards the green services and practices that will enable Amazon and Microsoft to run their data centers on, primarily, renewable power. 

However, running highly available products and services on top of variably available (i.e. wind and solar) power requires new, clever flexibility and targeted efficiency. Not just from them. From their users too. 

The approaches we believe they are (or will be) promoting are covered in a [<u>new whitepaper on sustainable architecture for the cloud</u>](https://docs.google.com/document/d/1Lym55mXRVO8pldUfrcpRqFKvE9biX93jhz-HLi_c99Y/edit?usp=sharing) from the Coed:Ethics community in London, which the GSF is closely connected to. The whitepaper came out in January 2022.

Discussion of these new approaches is desperately needed because enterprises must update their systems to handle a world of variably available power. It won’t be easy, but it will help save the planet, as well as reducing their hosting costs and safeguarding them from a future in which burning fossil fuels to power data centers is no longer an option.

In the next articles in this series, we will discuss the four areas covered by the paper:

- Operational efficiency (i.e. improving how software is run). 
- Architecting for minimal carbon (improving how software is designed). 
- Hardware efficiency (in particular, improving how end user devices are managed). 
- Energy efficiency (minimization of CPU/GPU and network use).

## Steps for enterprises that operate in the cloud

In summary, the paper recommends the following steps for enterprises that operate in the cloud:

- **Select or transition to hosting providers with a **[<u>**solid commitment**</u>](https://docs.google.com/document/d/1eCCb3rgqtQxcRwLdTr0P_hCK_drIZrm1Dpb4dlPeG6M/edit?usp=sharing)** to sustainable hosting.** This means those that have a committed date for 100% sustainable power and are making clear progress towards it. And push them to move faster. Often the easiest way to do this is to state a strong interest in sustainability to whichever host you choose.
- **Host in regions that provide excellent options for sustainable electricity provision. **Cloud providers should indicate which are their preferred regions for sustainable expansion.
- **Assess the hosting efficiency of cloud providers. **You can do so by asking whether the current strategy for machine utilisation is good enough. Use high density managed services where possible.
- **Turn off unnecessary, unused workloads, introduce autoscaling, and rightsize machines.**
- **Review architecture for expensive tasks** that are on demand or always on but do not need to be.  These are tasks that are expensive in terms of processing, but this often corresponds to $$$. Separate them out and use spot (AWS/Azure) or preemptible (GCP) instances to run them or flexible (e.g. burstable) instance types wherever possible.
- **Reduce the carbon impact of costly tasks that must be executed on demand. **For example this can be achieved by using more lightweight languages, frameworks or services or by moving more work to the client or edge.  
- **Have a ten year policy on user device longevity.** And don’t let apps that the enterprise has created be a nail in the coffin of working hardware for end users.

Most importantly, enterprises need to measure carbon emissions—or their cost proxy where appropriate—and pick their battles. There is considerable work to do and it’s vital not to waste precious time and resources optimizing software that has little impact. 

The Green Software Foundation’s [<u>Software Carbon Intensity specification</u>](https://greensoftware.foundation/projects/software-carbon-intensity-sci-specification) is there to advocate for this. But tools already exist, for example, Google’s[<u> Carbon Footprint</u>](https://cloud.google.com/carbon-footprint), [<u>Microsoft Emissions Impact Dashboard</u>](https://www.microsoft.com/en-us/sustainability/emissions-impact-dashboard) or the open source [<u>Cloud Carbon Footprint tool</u>](https://www.cloudcarbonfootprint.org/). An [<u>AWS one</u>](https://www.aboutamazon.com/news/aws/aws-re-invent-2021-what-you-need-to-know?p=aws-announces-customer-carbon-footprint-reporting) is coming in 2022. Cost can also be a rough guide to emissions, and [<u>AWS Cost Explorer</u>](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/) or [<u>Azure’s cost analysis</u>](https://docs.microsoft.com/en-us/azure/cost-management-billing/costs/quick-acm-cost-analysis) can help with this. 

## What Next?

The next  article of this series focuses on operational efficiency in more detail - what it means, and what services exist to help improve it. 

Read: [Sustainable Systems: Operational Choices in Sustainable Architecture](https://greensoftware.foundation/articles/sustainable-systems-operational-choices-in-sustainable-architecture)
