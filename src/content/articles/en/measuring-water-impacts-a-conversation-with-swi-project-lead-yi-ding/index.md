---
title: 'Measuring Water Impacts: A Conversation with SWI Project Lead Yi Ding'
teaserText: Yi Ding explains what her research shows about AI's water footprint and why the industry needs a shared standard that addresses the unique challenges of water measurement.
date: 2026-07-09
published: true
summary: In our Q&A, Yi Ding shares how the SWI project is building a practical standard for measuring software's water footprint to support more informed engineering and business decisions.
mainImage: Yi-Ding-Q&A.png
mainImageAlt: "Quote card: Yi Ding, Assistant Professor at Purdue University and SWI Project Lead at GSF, says she'd like software teams to think about Software Water Intensity (SWI) as naturally as they think about energy efficiency or SCI five years from now."
featured: false
tags:
  - standards
  - water
authors: []
translators: []
originBlogName: ''
publishedOriginUrl: ''
lang: en
---

## **What inspired you to focus on the intersection of AI, water, and environmental sustainability?**

I'm a computer scientist by training, and for many years my research focused on building more energy-efficient AI and computing systems. Energy has always been a central sustainability metric in computing, so naturally that's where most of my work began.

After joining Purdue University, I started collaborating with an environmental sustainability professor. Working together exposed me to a different perspective: sustainability is much broader than just carbon or energy. At the time, the computing community had made significant progress in measuring carbon emissions, but almost no one was asking a simple question: how do we evaluate the impact of AI’s water consumption?

That question led us to develop [**SCARF**](https://arxiv.org/abs/2506.22773), one of the first frameworks for evaluating the water impacts of computing systems, including AI services, data centers, and semiconductor manufacturing. One of our key findings was that water’s impact depends heavily on local water stress conditions. 

What surprised me most happened after the research was published. I expected it to be another academic paper, but instead I started hearing from journalists, industry practitioners, and policymakers who wanted to understand AI's water footprint and what could be done about it. That was the moment I realized this was becoming a real societal challenge that people needed practical ways to measure and manage.

Looking back, I feel fortunate that my research happened to intersect with a problem that was becoming increasingly important. It also convinced me that researchers shouldn't stop at publishing papers. If we want the work to have real impact, we need to develop solutions that organizations can actually use. That's what ultimately led me to help lead the Software Water Intensity (SWI) project.

## **In the past years, have you seen growing awareness and new, specific initiatives around water sustainability? What drives it?** 

Absolutely. Over the past few years, I've seen water move from being a niche research topic to an issue that sustainability leaders, infrastructure teams, policymakers, and even the general public are actively discussing.

AI is certainly one of the biggest drivers. As demand for AI continues to grow, organizations are building larger data centers and deploying increasingly powerful hardware. That has naturally raised questions about the environmental footprint of this infrastructure, especially water consumption and water withdrawal.

At the same time, companies have become much more sophisticated in how they think about sustainability. Carbon accounting has matured considerably over the last decade, and many organizations are now asking what other environmental impacts they should measure. Water has become a natural next step because it is essential for electricity generation, semiconductor manufacturing, and data center cooling.

One important realization is that water is fundamentally different from carbon. Carbon emissions have global impacts, whereas water impacts are highly local. That means organizations need metrics that go beyond simply reporting water volumes and instead reflect the local context.

That's why initiatives like SWI are attracting so much interest. People aren't just asking, "How much water does my software consume?" They're asking, "How can I measure it in a way that supports better engineering and business decisions?" That's exactly the gap SWI is designed to address.

## **You bring a strong research perspective to the SWI project. What drew you to this work and what impact do you hope SWI will have in five years?** 

My research has taught me that one of the biggest barriers to improving sustainability isn't necessarily technology; it's measurement. Engineers and scientists are very good at optimizing what they can measure. If we don't have the right metrics, it's extremely difficult to make informed engineering decisions or compare different solutions fairly.

That's what drew me to the SWI project. Without a common methodology, organizations may calculate water footprints differently, making it difficult to benchmark progress or drive meaningful improvements.

SWI offers a solution by translating research into a practical standard that software teams can actually use and apply to their work. Just as SCI has helped organizations measure, report, and reduce emissions, I hope SWI will enable the same kind of progress for water. 

Looking five years ahead, I hope engineers can use SWI to make better design decisions, organizations can confidently report their software water footprint using a shared methodology, and the broader ecosystem can innovate on top of this foundation. Five years from now, I'd like to see software teams think about SWI as naturally as they think about energy efficiency or SCI today.

## **As the spec has developed, what challenges do you foresee for the project, and how do you plan to overcome them?**

One of the biggest challenges in developing a standard is deciding what to include in the scope. We aim to make SWI scientifically robust while also keeping it practical enough to support adoption. 

One important discussion is whether SWI should account for water consumption only, or both water consumption and water withdrawal. Most existing assessment frameworks focus on water consumption because it represents water that is no longer available to the local watershed. However, water withdrawal tells a different story; it reflects the total amount of water taken from the environment, even if much of it is later returned. Some cooling technologies have high withdrawal but relatively low consumption, while others have the opposite pattern. Looking at only one metric may overlook important tradeoffs. The challenge is that these two metrics answer different questions, so we need to carefully evaluate whether SWI should report one, both, or guide on when each is appropriate.

Another challenge is how to account for where water is used. A liter of water consumed in a water-abundant region does not have the same environmental burden as a liter consumed in a water-scarce region. There are several well-established water stress indicators, such as AWARE and the WRI Baseline Water Stress Index, but they were developed for different purposes and represent different aspects of water scarcity. We are carefully evaluating which approach best aligns with SWI's goals and how water stress should be incorporated into the metric, particularly if SWI ultimately considers both consumption and withdrawal. 

## **How do you see collaboration and partnerships shaping SWI, and how can anyone get involved?** 

Developing an industry standard requires collaboration across disciplines. We are working closely with researchers, sustainability experts, and industry practitioners to ensure that SWI is transparent and practical for real-world use. The goal isn't simply to choose a methodology, but to build a standard that organizations can trust and consistently apply.

The variety of different expertise and perspectives is one of the things I appreciate most about the SWI project. And that's also what helps us build a standard that the whole industry can rely on. 

If you're interested in our work, we'd love to have you involved. Whether it's reviewing the specification, sharing feedback, contributing data or use cases, or simply participating in the discussions, every perspective helps make SWI stronger.

The project is open to employees of all GSF member organizations to contribute. To receive project updates and WG meeting invites, [subscribe to the project](https://wiki.greensoftware.foundation/subscribe-swi).
