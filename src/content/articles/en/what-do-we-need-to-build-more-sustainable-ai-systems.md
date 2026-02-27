---
title: "What Do We Need to Build More Sustainable AI Systems?"
date: "2021-09-21"
summary: "AI systems can have significant environmental impact. We are risking severe environmental and social harm if we fail to make greener AI systems. "
teaserText: "AI systems can have significant environmental impact. We are risking severe environmental and social harm if we fail to make greener AI systems. "
mainImage: "/assets/articles/what-do-we-need-to-build-more-sustainable-ai-systems/main.png"
authors:
  - fullName: "Abhishek Gupta"
    role: "Founder and Principal Researcher at the Montreal AI Ethics Institute; Chair, Standards Working Group of the  Green Software Foundation; Machine Learning @ Microsoft"
    company: "Montreal AI Ethics Institute"
    companyWebsite: "https://montrealethics.ai/"
    photo: "/assets/articles/authors/abhishek-gupta.jpg"
    socialMedia:
      - platform: "Twitter"
        link: "https://twitter.com/atg_abhishek"
      - platform: "Personal Website"
        link: "https://t.co/p30IqVc0dp?amp=1"
originBlogName: "Green Software Foundation blog"
publishedOriginUrl: "https://greensoftware.foundation/"
---

You’ve probably heard about the intersection of artificial intelligence (AI) and the environment. Yes, we can build AI solutions to address climate change and other environmental issues. But, AI systems themselves have an environmental impact. In this article, we’ll talk about the latter, especially as the [<u>scale of AI systems grows tremendously</u>](https://openai.com/blog/ai-and-compute/) and [<u>we risk severe environmental and social harm</u>](https://thegradient.pub/sustainable-ai/) if we don’t figure out a way to make these systems greener. Not all hope is lost in the relentless pursuit of building more state-of-the-art (SOTA) systems; we can make changes to help mitigate environmental impacts. Specifically, [<u>carbon accounting</u>](https://devblogs.microsoft.com/sustainable-software/the-current-state-of-affairs-and-a-roadmap-for-effective-carbon-accounting-tooling-in-ai/?WT.mc_id=green-30456-cxa) can help guide our actions. In fact, there are things that we can start doing this week that can help! 

## Carbon Accounting - A potential solution

First and foremost, we need to have intelligence about the environmental impacts of our systems before we can go about making changes. Carbon accounting is an essential diagnostic tool that can help guide our actions. It is by no means the complete solution but it provides us with a very solid foundation to get going. This includes things like when to run training of our AI systems, where to run them, and gather those insights to assess the costs and benefits of building and deploying such a system. 

So, why isn’t carbon accounting for AI systems a widespread practice today? It is a nascent field with issues in two categories: data and practice. 

## Issues we face today 

### Data issues

There is a significant lack of richness in the input data sources today. Only a few regions in the world have well-stocked datasets with real-time updates provided by suppliers like [<u>WattTime</u>](https://www.watttime.org/) and [<u>ElectricityMap</u>](https://app.electricitymap.org/). For others, we’re left with static, coarse data in often non-interoperable and non-machine-readable formats from government data sources. This gets in the way of actionable insights to those who want to alter their energy consumption patterns, such as scheduling AI training jobs at greener periods of the day and regions of the world.

Such a lack of richness and real-time updates also has implications for places where grids have renewable energy sources plugged in, which is increasingly so the case for many parts of the world, a great thing!. But, given their high variability—how brightly is the sun shining and how strongly is the wind blowing—the actual composition of the energy from the grid can change in unpredictable ways. This impacts the ability to pick greener regions and periods to run computational workloads. 

Finally, data published by cloud computing providers, as of yet, doesn’t have enough granularity—at least in the publicly published data—to allow practitioners to make independent decisions. They have to rely on the insights provided by the cloud providers themselves to choose appropriate periods and regions for running workloads. This might not be a bad thing, especially since the cloud providers have the deepest insights on the actual composition of the energy that they are pulling in and subsequently the carbon impact of running a workload on a particular system in the cloud. 

And all of this is exacerbated by the fact that different measurement methodologies propose different metrics and ways of measuring the carbon impact, along with different proxies when direct data is not available to assess the carbon impact of compute loads. Such discrepancies make comparisons difficult, befuddling the consumer on which solutions are actually greener.  

Most of all, we need to consider how all of the data that is gathered and utilized will meaningfully shift practitioners’ behaviours. We can gather the most detailed datasets in the world and provide complex analyses, but if that doesn’t cause practitioners to change how they design, develop, and deploy AI systems, all of that is for nothing!

### Practice issues

If you’re a practitioner, then surely you’ve loathed having to write documentation and filling out reports. The first generation of tools to report carbon impacts of AI systems were plagued by a disconnect between how practitioners work and what was offered to them as potential solutions. In particular, these tools typically involved having to visit a website, enter information about the kind of VM they used, the configuration that it had, the region that it was run in, and how long the job was run for. If the practitioner didn’t save all that information, they’d have to piece it all together from memory. Or even if they were diligent enough to go and do it right after, they found themselves abandoning the effort after a few runs. The reason: this approach asked them to exit their natural workflows! 

 The use of such tools and even the practice of carbon accounting for AI systems is still seen as an esoteric practice, exercised only by the most “bold and forward thinking” practitioners. Although it is talked about extensively in academic circles, but practical, everyday use is still quite limited. 

## So, how can we fix these issues?

Now that we know what the barriers are, what changes do we need to make to build more sustainable AI systems? There are four key areas that require changes: data and research, standardization, tooling, and practice. 

### Data and research

We need to have better data aggregation and collection that supports the goals of having more granularity and more emphasis on real-time updates. One way of driving this is to increase demand for such data and spurring market forces to make investments in providing this data and subsequently consuming it through incorporation in tools and analysis by practitioners and cloud providers. 

Methods like [<u>federated learning</u>](http://ai.googleblog.com/2017/04/federated-learning-collaborative.html) and [<u>TinyML</u>](https://www.tinyml.org/) also have the potential to reduce the carbon impact of AI systems, and require further research to see [<u>how such methods can integrate more holistically</u>](https://arxiv.org/abs/2006.06217) with the consistent demand for higher performing AI systems, while still respecting the environmental considerations and meeting the needs of consumers for greater privacy and data sovereignty. 

### Standardization 

[<u>Efforts to standardize</u>](https://github.com/Green-Software-Foundation/software_carbon_intensity/) the measurement and assessment of the carbon footprint of AI systems will help compare solutions offered by different providers, enabling consumers to make more informed decisions. But, such efforts need to be guided by empirical evidence on the efficacy of each approach, in particular paying attention to the pros and cons of each approach, and whether they meaningfully help to drive down the carbon footprint of AI systems. A consensus on the practices will be essential for widespread adoption. 

Certification that allows practitioners to independently verify the claims on the carbon impacts of AI systems will also help build trust and increase adoption. Independent agencies who are able to implement methodologies to utilize standards and provide easy-to-understand results and recommendations for consumers will be critical for the success of greening AI systems. 

### Tooling 

There is a significant gap today in mapping the needs of practitioners: we need to better understand how the tools are utilized in the wild and what needs to change to increase their adoption. One gap, as identified above, was how the current tools are not native to the workflow of practitioners. [<u>Code-based tools</u>](https://codecarbon.io) have started to address some of these gaps and are now entering the phase that other hyperparameter and experiment-tracking tools and frameworks have done for the AI community over time: making them a normalized practice by being deeply native to the everyday workflows of practitioners. 

Designing tools that provide actionable insights to practitioners and help them alter their design, development, and deployment practices is essential if we want to boost adoption. Investments in UX research that bridges the gap between the research and practitioner community will lead us to tools that are more in line with the needs of practitioners and something that we are all more attuned to using on a day-to-day basis. 

### Practice 

All the tools and data in the world won’t mean much if we don’t know that they exist. A strong degree of evangelism is required to normalize this practice of carbon accounting to build more sustainable AI systems. We can do so by incorporating this into AI curricula in universities and talking about it in popular media articles to raise awareness. We already have the latter taking place. But, making that more widespread and accessible will aid the non-technical stakeholders in the AI lifecycle understand the importance of this and consequently garner support and resources to implement more sustainable AI systems in their organisations. 

AI conferences like [<u>NeurIPS</u>](https://nips.cc/), [<u>ICML</u>](https://icml.cc/), [<u>ICLR</u>](https://iclr.cc/), [<u>ICCV</u>](https://iccv2021.thecvf.com/home), [<u>ACL</u>](https://www.aclweb.org/portal/category/topics/machine-learning), [<u>AAAI</u>](https://www.aaai.org/), and others are also great venues where top-tier research is published, often involving extensive experimentation and research in the pursuit of achieving SOTA which can have significant environmental impacts. Mandating an environmental statement, perhaps included in the [<u>broader impact statements</u>](https://medium.com/@GovAI/a-guide-to-writing-the-neurips-impact-statement-4293b723f832), can be a way of raising awareness and promoting more environmentally-conscious AI practices. 

## Here are some steps that you can take this week

While some of the actions above will take time to realize, here are three things you can do immediately to embark on the journey to more sustainable AI systems:

- Share this idea with your colleagues. Encourage them to make environmental considerations just as important as business and functional considerations. 
- Put in place some basic instrumentation and telemetry to gather data that can aid you in making decisions.
- Start designing and developing your AI systems so that they are more carbon-aware and carbon-efficient. 

If you’d like to learn more about why sustainable AI systems are important, we encourage you to check out “[<u>The Imperative for Sustainable AI systems</u>](https://thegradient.pub/sustainable-ai/)” and stay in touch with the Green Software Foundation as we release standards and tooling to help you build more sustainable software systems. 
