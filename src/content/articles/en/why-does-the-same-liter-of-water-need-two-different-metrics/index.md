---
title: Why Does the Same Liter of Water Need Two Different Metrics?
teaserText: How SWI aims to provide a clearer picture of software's water footprint.
date: 2026-11-05
published: true
summary: The same amount of water can have very different environmental impacts depending on where it's consumed. Yi Ding explains how the Software Water Intensity (SWI) specification uses both raw and stress-adjusted metrics to provide a clearer picture of software's water footprint.
mainImage: Why-We-Need-Two-Metrics-.png
mainImageAlt: Illustration split down the middle. On the left, a smiling woman holds a clear umbrella under heavy rain against a dark blue sky. On the right, a bearded man stands in a bright, dry landscape with a sun, hills and cacti. Between them is a cube of water with a single drop falling into it, showing the same volume of water in two very different conditions.
featured: false
tags:
  - standards
authors:
  - fullName: Yi Ding
    role: Project Chair of Software Water Intensity (SWI)
    company: Green Software Foundation
    companyWebsite: ''
    photo: ''
    socialMedia: []
translators: []
originBlogName: ''
publishedOriginUrl: ''
lang: en
---

A liter is a liter wherever we measure it, but its environmental impact is not always the same.

Consuming one liter in a water-abundant location after a wet season isn’t equivalent to consuming one liter in a drought-prone region where households, farms, industry, and ecosystems are already competing for limited supplies. While the physical volume is identical, the potential consequences for local water resources can vary greatly. 

This is why the Software Water Intensity (SWI) specification, currently in development at the Green Software Foundation, asks practitioners and organizations to measure and report water in two ways: as a raw metric and as a stress-adjusted metric. The two measures answer different questions, and both are needed to support better-informed software decisions. 

## **One Liter, Two Questions**

The raw metric asks a straightforward question: **How much water is associated with delivering a unit of software service?** It might be reported as liters per API call, per user, or per AI training run. This measure supports accounting, efficiency tracking, and comparisons over time.

The stress-adjusted metric asks: **What is the potential consequence of that water use in the place where it occurs?** It applies a location-specific characterization factor to the same volume. In simple terms: 

**Raw water intensity = water volume / unit of software service**

**Stress-adjusted water intensity = (water volume × local water-stress factor) / unit of software service**

The adjusted result doesn’t claim that the activity physically used more or less water. Instead, it’s an indicator that can inform practitioner decisions: a liter in a more water-stressed region receives greater weight because its use has greater potential to intensify competition for scarce water.

This distinction is similar to the difference between a transaction record and a risk assessment. The transaction record tells us what happened, but the risk assessment adds the context we need to interpret it.

## **Why Not Report Only the Adjusted Number?**

Adjustment changes the meaning of the reported number. A higher stress-adjusted result can come from greater water consumption, higher local water stress, or both. Without the raw value, practitioners can’t tell which factor is responsible. 

Raw values are also essential for engineering: they help teams compare infrastructure, track demand, and verify reductions. Stress-adjusted values help teams prioritize where changes may matter most.

Reporting only raw volume creates the opposite problem. It can make two locations look equivalent even when their watersheds face very different conditions. It can also make the location with the lowest water use per unit of computing look better even if that use occurs where water is much scarcer.

Therefore, the Software Standards Working Group (SSWG) chose dual reporting to preserve both transparency and decision relevance. The two metrics complement each other to provide a more complete picture of software’s water footprint, and neither can replace the other.

## **What the SCARF Research Shows**

In 2025, I co-authored [SCARF](https://arxiv.org/abs/2506.22773), a framework for stress-adjusted assessment of computing's water footprint. Although SCARF doesn’t form the methodological basis of SWI, the case studies illustrate why the distinction we just explained matters in practice. SCARF evaluates water consumption first as physical volume and then as an adjusted impact that accounts for local water stress.

One of the case studies modeled large language model (LLM) serving across multiple data center locations of a cloud provider, using publicly reported efficiency values. We found that the location that consumed the least water per unit of electricity wasn’t the same as the location where water consumption occurred under the least-stressed conditions. Considering both volume and stress showed that the same model and request produced different stress-adjusted impacts across locations. At one high-stress location evaluated in the paper, the modeled stress-adjusted impact was more than 1,000 times that in low-stress locations. 

The results also showed that a location’s impact can change over time. For the same 32-billion-parameter model, Arizona had a lower adjusted impact than Wyoming from January through March. During the drier months from April through June, Arizona's water stress increased, and its adjusted impact rose to more than twice Wyoming's. Although the workload remained the same, the local water-stress conditions changed. 

The analysis of another provider’s data centers, based on reported water consumption and estimated energy use, showed that facilities in medium-stress regions collectively had more than twice the adjusted impact of those in high-stress regions because their water consumption was much larger. This highlights that neither stress nor volume on its own is enough to understand the potential environmental impact. The combination of both matters. 

The semiconductor case study from the paper made the contrast even clearer. One facility in Oregon reported the highest water consumption among the sites examined, at 18.2 billion liters per year. Yet the same manufacturer’s Arizona fabs had much higher adjusted impacts despite consuming less water, because they operated under more severe local water stress. 

These findings don’t mean organizations should simply move workloads to locations with lower water stress. Choices about where and when to run workloads also depend on latency, energy sources, resilience, capacity, and other constraints. What the results show is that we can’t rely on water-volume efficiency alone when making decisions about workloads, infrastructure selection, or long-term planning. 

## Extending the Same Approach to Withdrawal

SCARF's case studies focus on water **consumption**: water that is evaporated, incorporated into products, or otherwise not returned to the same location. SWI also measures and reports water **withdrawal**: all water removed from a source, including water later returned.

Consumption and withdrawal describe different pressures. Consumption reduces the water remaining locally. Withdrawal can pressure water availability and aquatic systems even when much of the water is returned. A system can have low consumption but high withdrawal, so combining the two could obscure important information.

The raw-versus-adjusted reasoning applies to both consumption and withdrawal. In each case, measuring physical water volume alongside local water stress provides a more complete understanding of how software affects local resources. 

To answer the question we started with, the same liter needs two metrics because measurement and meaning are not the same thing. Good water accounting starts with the physical volume, but good water stewardship also asks where that water came from and what its use means for the local environment.

## Get Involved 

Explore the [SWI project](https://greensoftware.foundation/standards/swi/) to learn more about the developing specification, follow its progress, and find out how to get involved.
