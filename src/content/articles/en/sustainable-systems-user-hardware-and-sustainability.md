---
title: "Sustainable Systems: User Hardware and Sustainability"
date: "2022-03-16"
summary: "Anne Currie continues the Sustainable Systems series, talking about how user hardware impacts sustainability of systems and the responsibility that falls on developers creating new software.  "
teaserText: "When you write an application, you take on responsibility for the devices that app runs on. Do you have a strategy for making them last as long as possible? If not, why not? asks Anne Currie, continuing the Sustainable Systems series. "
mainImage: "/assets/articles/sustainable-systems-user-hardware-and-sustainability/main.png"
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

As we have raised in every part of this series (because it’s important!), at the end of 2021, AWS added [sustainability](https://aws.amazon.com/blogs/aws/sustainability-pillar-well-architected-framework/) to the [well-architected pillars](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sustainability-pillar.html) that define their* “key concepts, design principles, and architectural best practices for designing and running workloads in the cloud.” *A year earlier, Azure had posted their [sustainable architecture guide](https://docs.microsoft.com/en-gb/learn/modules/sustainable-software-engineering-overview/1-introduction), written by our own GSF chair, Asim Hussain. Their cloud recommendations are covered in a [new whitepaper on sustainable architecture for the cloud](https://docs.google.com/document/d/1Lym55mXRVO8pldUfrcpRqFKvE9biX93jhz-HLi_c99Y/edit?usp=sharing).

## Demand Destruction

The hyperclouds haven’t started shouting about this because they are a bunch of social justice warriors. They’re doing it because sustainable power is going to revolutionise the pricing of electricity. We are going to have to work hard to accommodate those changes, and we need to start now.

In the [first article in this series](https://greensoftware.foundation/articles/sustainable-tech-choices-for-cloud), we outlined the four main approaches to tech sustainability that we have to take on board:

1. Operational efficiency: improving how software is run.
2. Architecting for minimal carbon: improving how software is designed.
3. Hardware efficiency, in particular, improving how end user devices are managed.
4. Energy efficiency, the minimisation of CPU/GPU and network use. 

In this post we will focus on the third of these. How do we make sure our software doesn’t waste the carbon that went into the production of the hardware it is running on..

## Hardware Efficiency

For software running on user devices rather than servers, the CO2 emitted during the production of those user devices massively outstrips what’s emitted by their use, that is, by the generation of the electricity that powers them. 

The table below is based on data from the University of Zurich. 

![Bar-chart-showing-Emissions-per-ICT-end-User-device-Hardware-Sustainability-Anne-Currie-Green-Software-Foundation](/assets/articles/sustainable-systems-user-hardware-and-sustainability/bar-chart-showing-emissions-per-ict-end-user-device-hardware-sustainability-anne-currie-green-software-foundation.png)

Observe how small the proportion of emissions during use compared to the emissions during production of devices.

Inevitably, the future for physical user devices in a carbon zero world is that they will need to last a lot longer. This will be driven in part by physical design and manufacture, but also by avoiding software-induced obsolescence by operating systems and applications that stop providing security patches or depend on new hardware or new features. 

> *The future for physical user devices in a carbon zero world is that they will need to last a lot longer. *

As time goes on, Moore’s law and other forms of progress mean that devices get new features, which developers want to exploit in their new app releases. Mobile phones, for example, have got faster, evolved to have dedicated GPU and machine learning chips, and acquired more memory. 

Apps take advantage of this progress, and that is fine and unavoidable. However, It is vital that those apps also continue to work on older phones without the features, so they do not contribute to avoidable obsolescence by causing people to throw those old phones away.

When developers create new software, it is imperative that it is backwards compatible with existing devices as far as possible. None of us want users to bin working kit. Phone OSes do provide some [information](https://developer.android.com/training/search/backward-compat) and tooling to help applications be backwards compatible, but it usually requires action from application developers. 

> *When developers create new software, it is imperative that it is backwards compatible with existing devices as far as possible. *

At the moment, the best company for prolonging device lifespans is probably Apple. The new iOS 15 [supports](https://www.computerworld.com/article/3621780/wwdc-12-small-but-important-improvements-you-may-have-missed.html) phones that are up to six years old. However, all providers need to improve, even Apple. Life expectancies must be much longer than six years. 

All current phones are beaten on longevity by games consoles. The XBox One was designed to last ten years, and even after the release of the newest series that appears to be [holding up](https://phenixxgaming.com/2020/07/22/how-long-will-the-xbox-one-last-into-next-gen/). Unlike phones, the business model of games consoles means they are not planned to be so disposable. This demonstrates that devices can last longer if manufacturers choose it, and at least ten years should be our expectation for all new devices from now on.

## Conclusion

When you write an application, you take on responsibility for the devices that app runs on. Do you have a strategy for making them last as long as possible? If not, why not?

## Read previous articles by Anne Currie in the Sustainable Systems Series

[Sustainable Tech Choices for Cloud](https://greensoftware.foundation/articles/sustainable-tech-choices-for-cloud)

[Sustainable Systems: Operational Choices in Sustainable Architecture](https://greensoftware.foundation/articles/sustainable-systems-operational-choices-in-sustainable-architecture)

[Sustainable Systems: Architectural Choices and Sustainability](https://greensoftware.foundation/articles/sustainable-systems-architectural-choices-and-sustainability)
