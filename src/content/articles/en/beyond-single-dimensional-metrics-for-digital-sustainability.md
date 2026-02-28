---
title: "Beyond Single-Dimensional Metrics for Digital Sustainability"
date: "2022-01-05"
summary: "Using multi-dimensional, rich metadata-supplemented metrics for measurement of energy consumption include higher transparency, less scope to game the metrics and more channels to implement actions that make systems greener. "
teaserText: "In measuring energy consumption of software a move towards muti-dimensional, rich metadata-supplemented metrics offer better opportunities to implement actions that actually make software greener. "
mainImage: "/assets/articles/beyond-single-dimensional-metrics-for-digital-sustainability/main.png"
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
originBlogName: "Branch Online Magazine"
publishedOriginUrl: "https://branch.climateaction.tech/issues/issue-3/beyond-single-dimensional-metrics-for-digital-sustainability/"
---

Have you ever been working towards greening a piece of software, and then you check it against a tool to see if it made an impact and you end up disappointed?

Sometimes that might be because the area that you were targeting wasn’t significant enough in its energy consumption that it would have an impact on whatever the tool is measuring. In other cases, you might have made a change that truly does have an impact on the energy consumption of the piece of software, but the tool is measuring something else.

What do you do then?

You can propose changes to the measurement being done by that tool or you alter how you go about greening your piece of software because you have to meet some quotas and the score provided by the tool is the only yardstick available. This can happen when you have single-dimensional metrics that are used to assess the greenness of an application. 

> ***"What gets measured, gets managed."***

In a data-rich environment like software systems, this adage rings very true. We have all sorts of telemetry, monitoring, and alerting that drives how we shape our software systems and how we interact with them. Single-dimensional metrics are, at best, a poor facsimile of what is really going on in terms of the energy consumption of that system.

## What is a single-dimensional metric?

A single-dimensional metric is a metric that looks at just one facet of the entity under measurement, in our case the software system, or a metric that distills down the complexity of that system into something that represents a single facet, i.e. a poor facsimile. 

We encounter many such metrics throughout our interactions with systems, both digital and analogue, in the world. Some are a function of necessity, for example, a credit score that tries to distill the essence of your “financial worthiness” down to a single number so that credit giving institutions can easily bucket people into various risk categories. It has many underlying components, some of which are transparent to the subjects of these scores, others not so much. But, without a reporting of those underlying pieces, how they compose this score, and which ones borrowers should focus on to make the biggest impact. They perpetuate digital harm on unsuspecting people, both lenders and borrowers when there might be many richer ways of assessing whether someone is “worthy” of being provided credit. 

Do we have such metrics in measuring sustainability? Absolutely! We’ll discuss some of them in the following sections. But, before we do, let’s try and gain a deeper understanding of what problems such single-dimensional metrics create. 

## Why are single-dimensional metrics problematic?

Imagine a scenario where you are given a target: improve the environmental, social and governance (ESG) score of our organization so that it becomes more attractive to investors who pour money based on ESG ratings. As highlighted in a [Washington Post article](https://www.washingtonpost.com/business/economy/the-labels-said-organic-but-these-massive-imports-of-corn-and-soybeans-werent/2017/05/12/6d165984-2b76-11e7-a616-d7c8a68c1a66_story.html), some creative accounting and reporting on a shipment of soybeans marking it as “organic” led to a boost of $4m in its value. When we fail to analyze deeply how such markers and metrics are aggregated, in this case, the ESG score, and use in decision-making downstream, we risk adhering to the idea of sustainability in letter but not in spirit, chasing down ghost targets that don’t make a real change. This is Goodhart’s Law in action.

> ***“When a measure becomes a target, it ceases to be a good measure.”***

This is not the only way problems manifest when we ignore the underlying richness of a system and focus solely on neat distillations as a way of measuring impact. Genuine actions that can improve the sustainability posture of any product or service that you’re building can take a hit if they are not captured by whatever tool is used to assess the greenness of that application. This either discourages the developer from making efforts or steers them into paths that are known to yield minimal real improvements, but they look good in the existing reporting and assessment methodologies. 

## So, how can we address this challenge?

We need to unpack single-dimensional metrics to expose all their underlying components and remove our reliance on using just that number as a mode of measurement. In the case where there aren’t any underlying components composing this metric, wholeheartedly reject it in favour of multi-dimensional, rich metadata-supplemented metrics that counter the existing paradigm. 

Take, for example, a simple leaf icon indicating that a cloud provider’s region is “green” as a simple way to nudge the developer into choosing infrastructure that will lower the environmental impact of their application. In most cases, there are many moving parts to one’s application, including the variability in the compute, storage, and networking resources that it will consume. Not all of those can be neatly squeezed into a single “green leaf” that will indicate whether you’re making the best choice. In fact, a locally optimal choice for picking one region to house your compute and storage might be globally suboptimal if your application is network-heavy–say, a streaming application–and most of your traffic comes from a different part of the world and you’re constantly moving large data packets across the wire. 

Splitting apart that single green leaf in this instance can help reveal what the other pieces are and help to avoid unsatisfactory results and investments that don’t yield the anticipated outcomes when trying to green your applications. 

## Power Usage Effectiveness (PUE): A Case Study

Let’s dive even deeper into this with the example of power usage effectiveness (PUE), a metric that is used to characterize how efficiently a data centre converts the incoming energy into useful work, measured by how it puts that energy to use for computation workloads. A PUE value greater than 1 means that there are inefficiencies (which is normal!) manifested in powering supporting infrastructure for the core compute activities of the data centre such as cooling, lighting, etc.

So, how can a narrow-minded focus on PUE go wrong?

For example, in applying virtualization, you might reduce the power used by the computing equipment by 25W and the same amount goes down for the total in the data centre. But, imagine that it started with 100W for the data centre and 50W for computing equipment. Then, after virtualization, you end up with 75W and 25W which means the PUE has gone up from 2.0 to 3.0. But, virtualization is actually good since it makes better use of hardware in most cases. So, what went wrong? 

The associated data centre energy usage hasn’t gone down enough–say cooling and lighting needs–which has increased the PUE. But, you can look at the total energy use and costs which will go down and those are better indicators of greening the software system in this case. Looking at the sources behind the change in the PUE is more important when deciding how to evaluate whether you’re becoming greener or not. 

If you want to continue using the PUE, then tracking both the compute load and infrastructure changes by creating a composite metric or visualization would be the way to go. We add in the metadata surrounding these changes and supplement them with more information about how we are calculating the metric so that downstream decision-making is better informed. 

PUE can work well when you don’t have many changes in the computing workloads and the core compute infrastructure itself. In that case, tracking the PUE can accurately reflect efforts to make the application greener. But, given the dynamic nature of how to compute is scheduled and executed coupled with the blurring boundaries between core compute infrastructure and the supporting entities within the data centre, this expectation is not very realistic. 

You can think about this in terms of cooling’s energy consumption and the impact that it has on the PUE calculation when you have options like bringing in cool air from the outside, data centre fans cooling the server racks, or relying on internal fans of the server racks, or to make things even more complicated, a combination of all the above. What you choose to include in the boundaries of either the data centre infrastructure or the compute infrastructure can have an impact on the final PUE value that is computed. This becomes a place ripe for creative accounting and gaming the metric to look good. 

Here, a good piece of metadata to associate with the calculation of these metrics is to provide more information about the cooling infrastructure, what is included in the boundaries, what the typical ambient temperatures are where the data centre is hosted, and any other related information that can better inform anyone who is a downstream consumer of this metric.

> **Adding more dimensions to the metric itself can provide more surfaces for people to come up with innovative solutions through which they can reduce the environmental impacts of their digital systems. **

## Conclusion

Some caveats to keep in mind are that leaning towards more multidimensional, rich metadata-supplemented metrics shouldn’t make calculations more obtuse. Each of the pieces within it should still be simple enough to compute and report, at the same time, they should be as close to the actual scenario as possible. 

The benefits of using multi-dimensional, rich metadata-supplemented metrics are:

- Higher transparency 
- Lower ability to game metrics 
- More channels to actually implement actions that make your system greener!

As we saw with the PUE, there are many ways that a distilled, single-dimensional metric can go wrong, and instead of keeping the metric multidimensional and supplementing it with rich metadata can inform downstream users of that metric through higher transparency so that we can avoid cases like the organic soybeans inflating value and soliciting investments based on wrong information. 

Given the higher level of transparency and multiple components that are all considered in decision-making, the probability of gaming the metric to adhere to sustainability in goals in letter but not in spirit goes down. We are able to amplify and reward those actions that meaningfully make the system greener. 

Finally, having multiple avenues for taking actions to make the application greener also encourages innovation in how we go about solving these challenges of the environmental impact of software systems. There are tweaks and changes that can be made at any level of the software stack, [including the compute](https://greensoftware.foundation/articles/a-demand-curve-for-compute), storage, networking, and even the consumer application layers. Not all of them can be anticipated and accounted for; having these metrics expose the places for improvement, and if non-existent today, leaving them flexible enough to incorporate new developments will usher us into an era where we are applying green software engineering principles meaningfully in practice.
