---
title: "Software Carbon Intensity (SCI): Crafting a Standard"
date: "2021-10-05"
summary: "The Software Carbon Intensity (SCI) standard provides an actionable approach to designers, developers and deployers of software systems to measure the carbon impacts of their systems."
teaserText: "The Software Carbon Intensity (SCI) standard gives an actionable approach to software designers, developers and deployers to measure the carbon impacts of their systems."
mainImage: "../images/software-carbon-intensity-crafting-a-standard/main.png"
authors:
  - fullName: "Abhishek Gupta"
    role: "Founder and Principal Researcher at the Montreal AI Ethics Institute; Chair, Standards Working Group of the  Green Software Foundation; Machine Learning @ Microsoft"
    company: "Montreal AI Ethics Institute"
    companyWebsite: "https://montrealethics.ai/"
    photo: "../images/authors/abhishek-gupta.jpg"
    socialMedia:
      - platform: "Twitter"
        link: "https://twitter.com/atg_abhishek"
      - platform: "Personal Website"
        link: "https://t.co/p30IqVc0dp?amp=1"
---

What can be measured can be managed. In this post I explain how the Green Software Foundation is crafting the Software Carbon Intensity (SCI) standard to help measure the carbon impacts of software systems. 

## What are we trying to do? 

At the Green Software Foundation, a team of multidisciplinary experts—energy grids, cloud computing, standards, etc.—from across the industry—technology, consulting, telecommunications, banking, etc.—have come together to craft a standardized and interoperable way to measure the carbon impacts of software. The goal of this standard, dubbed the [<u>Software Carbon Intensity (SCI)</u>](https://github.com/green-software-foundation/software_carbon_intensity/), is to provide an actionable approach to designers, developers, and deployers of software systems to measure the carbon impacts of their systems. The SCI uses a lifecycle and consequentialist approach with the goal of empowering the consumers of software systems to make informed choices about the carbon impacts of those software systems.     

## How carbon impacts are measured today and the limits of current practice

The world of carbon impacts measurement today is splintered in its methodologies and tooling with very few widely accepted standards, especially for computing systems. In particular, the current approaches don’t embody a consequentialist and lifecycle view which we believe is essential for the success of such a standard. 

For example, current carbon emissions measurement approaches make it difficult to assess the impact of one’s activities when using services provided by others, when they don’t provide granular information about the carbon footprint. So, you might have a software system that pieces together different services and products, running on hardware in the cloud. Under the current approach, the designer, developer, and deployer has to take into account the entire lifecycle of each of those components to calculate their carbon impact. This makes calculations extremely difficult without any clear indication that such an approach would succeed. This complexity severely limits the uptake of such measurement. The result is the inconsistent, if any, reporting of the carbon footprint of various applications, leaving consumers in the dark. 

## What is new in our approach with Software Carbon Intensity?

Here’s what is new and why we think it will be successful:

Our approach with the SCI seeks to address the above limitations through the following:

- The SCI is sensitive to carbon awareness, energy efficiency, or hardware efficiency
- The SCI takes a systems-footprint view
- The SCI is easy to implement
- The SCI encourages the use of granular data
- The SCI requires the use of a standardized and transparent reporting mechanism of what goes into the calculations. 

#### Current approaches fail to reward genuine actions by software creators

In particular, we realized that the current approaches sometimes don’t reward genuine actions on the part of designers, developers, and deployers in achieving greener outcomes from their software systems. This creates a negative feedback loop discouraging green actions that reduce the carbon impact of software systems. Keeping that in mind, we have included carbon awareness, energy efficiency, and hardware efficiency as core tenets of the SCI with a specific view to reward actions that move the needle on making a software system greener. 

#### Towards optimizing the carbon impact of software systems

In developing the SCI, we have made an effort to nudge towards global optimization in terms of the carbon impact of the software system rather than a hyperfocus on local optimizations that can cause negative downstream consequences. The SCI has also been designed to ease the burden of calculation for users, in order to boost adoption. It encourages the use of data that leads to more actionable insights rather than just measuring and reporting for the sake of doing it.  

#### Firm guidance on standardization and transparency in reporting

Finally, and perhaps most importantly, with firm guidance on standardization and transparency in reporting, we want stakeholders to “show their work”. Then, those who are consuming the SCI values to make decisions can better understand how they got the values and what went into making that calculation. This also encourages the entire ecosystem towards increasingly higher standards of transparency, ultimately boosting the amount of public information available on the carbon impacts of software systems. This will have the knock-on effect of permitting us to not only glean patterns and best practices but also make better decisions in terms of what and how to report SCI values.  

#### We adopt a consequentialist approach

We eschew the use of market-based measures and infrastructure measures when determining the carbon footprint of software systems because we adopt a consequentialist approach. Future posts will expand on this thinking on why we made this decision and how it actually places greater agency in the hands of stakeholders who are directly involved in making and deployment of software systems. 

## Who cares? If we are successful with Software Carbon Intensity, what difference will it make?

We should all care! 

> **Software Carbon Intensity standard will empower consumers of software systems to make informed decisions.**

It is estimated that the impact of cloud computing rivals that of the entire airline industry. Software is only now becoming more pervasive across every industry. The key difference that we seek to make through the SCI is to empower consumers of software systems to make informed decisions. Once established, SCI will equip consumers with sufficient standardized and comparable information across various types of software systems, no matter their industry. Consumers would then be able to choose the greenest possible solution from among those that satisfy their other functional and business needs. 

We hope that through better information, we can nudge the entire ecosystem towards normalizing environmental considerations as a core facet in the design, development, and deployment of software systems. 

## What are the risks?

Any attempt at creating new standards is rife with risks, especially those of excluding things that might be relevant and including things that might not be relevant. Yet, we take on this responsibility with the acknowledgment that we must take the first steps towards a standardized, actionable, and interoperable approach to measuring the carbon footprint of software systems.

Specific risks that we are aware of include:

- Gaining a deeper understanding on how to amortize embodied carbon calculations over the lifecycle of the software system. This is especially so when they are highly variable.
- Impacts of site-reliability engineering efforts on the design, development, and deployment processes 
- The tradeoffs (and how to balance them) between functional and business requirements with the environmental considerations. 


But, this list is not exhaustive! We encourage you to [<u>reaching out to us</u>](mailto:abhishek@greensoftware.foundation) and engage with us on the list of [<u>issues</u>](https://github.com/Green-Software-Foundation/software_carbon_intensity/issues) and [<u>discussions</u>](https://github.com/Green-Software-Foundation/software_carbon_intensity/discussions) that we have on the SCI as we continue to learn and grow. 

## Conclusion

We are in an exciting time where [<u>tooling</u>](https://devblogs.microsoft.com/sustainable-software/the-current-state-of-affairs-and-a-roadmap-for-effective-carbon-accounting-tooling-in-ai/?WT.mc_id=green-30456-cxa) and [<u>methodologies</u>](https://branch.climateaction.tech/issues/issue-2/secure-framework/) are grabbing the attention of the software development community who are thinking deeply about the carbon footprint of the systems that they build. We must support that momentum and direct it by shaping it into a democratizing force that enables the entire ecosystem to harness the power of sustainable software systems. And we must do so in a manner that is standardized, actionable, and interoperable. [<u>Join us</u>](https://greensoftware.foundation/join-us) as we embark on this journey!
