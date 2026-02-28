---
title: "Why Should Sustainability be a First-class Consideration for AI Systems?"
date: "2021-10-28"
summary: "Should sustainability be a first-class consideration for AI systems? Yes, because AI systems have environmental and societal implications. What can you do to make green AI a reality?"
teaserText: "Should sustainability be a first-class consideration for AI systems? Yes, because AI systems have environmental and societal implications. What can you do to make green AI a reality?"
mainImage: "../images/why-should-sustainability-be-a-first-class-consideration-for-ai-systems/main.png"
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

Data scientists, machine learning engineers, and other technical stakeholders involved in the AI lifecycle are very familiar with business and functional considerations to guide the design, development, and deployment of AI systems. But, should sustainability be made an equal first-class citizen in that list of considerations? 

Yes! Particularly because it has implications towards both the environment and societal implications of AI systems. 

Incorporating sustainability in AI can allow us to (1) achieve social justice when we utilize this approach, and (2) especially so when these systems operate in an inherently socio-technical context. Indeed, a [<u>harmonized approach accounting for both societal and environmental considerations</u>](https://arxiv.org/abs/2006.06217) in the design, development, and deployment of AI systems can lead us to gains that support the triple bottom line: profits, people, and planet.

### Challenges with the current paradigm 

The current paradigm of AI systems that are heavily skewed towards having larger model sizes in the pursuit of state-of-the-art (SOTA) performance necessitate exploitative data practices, centralization of power and homogeneity, and intertwined societal and environmental impacts. 

#### Exploitative data practices

As we build larger AI models, they tend to have higher “capacity”. That is, they need larger datasets to prevent overfitting and adequately capture the distribution of the input data to have good generalization capabilities. When trained on publicly available data—with caveats of consent in terms of how that data was obtained—this approach might work well; but in building such systems on top of private data, it means that we need to engage in deeply exploitative data practices, trying to gather as much data as possible from the users of the system. This can also take the form of nudging them to do so through dark design patterns making the technology addictive: endless newsfeeds, autoplay videos, intrusive recommendations, automatic scraping of contactbooks, etc. 

#### Hinders democratization of AI

Such large systems also hinder democratization of AI; they require huge computational infrastructure to run effectively which costs a lot of money—not to mention has significant environmental impacts!—that only the most affluent corporations, research labs, and universities are able to afford. This leads to centralization of power and homogeneity in the crop of solutions and ways of conducting research and creating products and services that might serve the needs of the few while ignoring those of the many. 

#### Centered on business and functional requirements ignoring environmental costs

Finally, such a paradigm that is strongly centered on business and functional requirements over any other considerations encourages an ecosystem of manufacturers who can blindly pursue performance gains in luring consumers towards their hardware and software solutions in AI without paying any heed to the environmental costs of such systems. In a recently released performance benchmark from [<u>MLCommons</u>](https://mlcommons.org/en/), it was discovered that the number of submissions reporting energy consumption had dwindled by about 50% compared to the previous iteration of the benchmark while performance was emphasized even more by the manufacturers participating in the benchmark.  

## What is sustainable AI?

In a nutshell, sustainable AI refers to cognizance and efforts invested in making sustainability an equal first-class citizen with business and functional requirements in the design, development, and deployment of AI systems. 

It should take a lifecycle approach to [<u>accounting for the carbon impacts</u>](https://devblogs.microsoft.com/sustainable-software/the-current-state-of-affairs-and-a-roadmap-for-effective-carbon-accounting-tooling-in-ai/?WT.mc_id=green-30456-cxa) of such systems from the hardware running the systems to the software and back up to the hardware that consumes the applications on the users’ side. 

This includes:

- elevating smaller models as a viable pathway towards achieving product goals,
- utilizing appropriate hardware and software distribution models that can be greener such as federated learning, and 
- building the AI systems to be carbon aware and carbon efficient. A carbon-aware application adjusts its behaviour based on the carbon intensity of the grid from which it consumes energy. A carbon-efficient application is designed to consume less energy while delivering the same or almost the same functionality. 

## What can you do next?

There are some immediate next steps that you can take to make sustainable AI systems a reality:

- Learn about carbon-awareness and carbon-efficiency and explore how you can incorporate that into the design of your AI-infused application.
- Explore the efficiency of various hardware configurations and separate out utilization based on training or inference phases of the AI lifecycle.
- Explore distilled networks and compressed architectures as a way of reducing the size of the AI models.

If you find other ways to reduce the impact of AI systems on the environment, please don’t hesitate to reach out to us at the [<u>Green Software Foundation</u>](https://greensoftware.foundation/). Consider getting involved in our work on constructing a [<u>Software Carbon Intensity Standard</u>](https://github.com/green-software-foundation/software_carbon_intensity/) (SCI). It will create a standardized and interoperable way to measure the impact of software systems empowering both developers and consumers to make informed greener choices. 

*This article is based on a research article published by *[<u>*Abhishek Gupta*</u>](https://twitter.com/atg_abhishek)* for *[<u>*The Gradient*</u>](https://thegradient.pub/)* titled “*[<u>*The Imperative for Sustainable AI Systems*</u>](https://thegradient.pub/sustainable-ai/)*”. Follow the link to read a more extended version of this article. *
