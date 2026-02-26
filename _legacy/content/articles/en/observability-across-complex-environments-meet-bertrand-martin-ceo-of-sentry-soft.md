---
title: "Observability Across Complex Environments – Meet Bertrand Martin, CEO of Sentry Software"
date: "2023-06-19"
summary: "Bertrand Martin is the CEO and President of Sentry Software and one of the company’s co-founders. He is equally a developer and a system administrator by trade. His career has been dedicated to building monitoring and observability tools, initially as a user of such solutions and later as a developer."
teaserText: "“I believe observability is paramount on our path to reduce carbon emissions. Robust monitoring and observability solutions are empowering organizations to tackle carbon emissions head-on. Supplying them with the necessary insights allows them to move in the right direction effectively.”"
mainImage: "../images/observability-across-complex-environments-meet-bertrand-martin-ceo-of-sentry-soft/main.png"
---

# Who is [Sentry Software](https://www.sentrysoftware.com/)?


Sentry Software is a software company specializing in IT observability. We develop an OpenTelemetry agent to monitor physical systems such as PCs, servers, routers, and storage systems and to assess the health and performance of their electronic components like disks, processors, network cards, GPUs, temperature sensors, fans, and more. 

Additionally, our agent measures the energy usage of each system. We have also created interactive dashboards that leverage these metrics to report the carbon footprint of the monitored infrastructure. These dashboards help administrators optimize the efficiency of their data centers.

# What is the relevance of sustainability within Sentry Software?


We aim to significantly reduce carbon emissions compared to our 2019 levels. To help measure and assess our progress in achieving this goal, we have recently subscribed to the [<u>Science-based Targets initiative</u>](https://sciencebasedtargets.org/), targeting a 46% emissions reduction.

Furthermore, we actively collaborate with our customers to reduce the carbon emissions of their data centers by utilizing our software. We have been working on this endeavor since 2008. We are optimistic that the world is ready to embrace and invest in these sustainable techniques.

Observability is paramount in our mission to reduce carbon emissions, as many CIOs express frustration at the lack of visibility in this area. By empowering organizations with robust monitoring and observability solutions, we can move in the right direction and provide CIOs with the necessary insights to tackle carbon emissions head-on.

# How do you see Green Software in the sustainability context?


To us, sustainability means conducting our activities in a way that allows us to continue for the next 50 or even 100 years while preserving the balance of life and nature on Earth, much as it has existed for the past 500 years. Unfortunately, it’s become evident that humanity has fallen short of this target.

In IT, sustainability entails addressing several critical issues: the embodied carbon footprint of electronics, rare earths extraction, and associated water consumption, and the energy expended when using the devices. These issues must be considered in 3 main areas: data centers, terminals, and Cloud/SaaS platforms.

Green software, to us, is software that not only reports these sustainability metrics but is also optimized to perform tasks with minimal resource consumption and minimal environmental impact. If we go even further, green software should empower its users to predict the carbon emissions resulting from the utilization of the software.

# Will Green Software change the world?


The future of green software appears promising as its objectives often align with the latest trends in the industry. A notable example is optimizing software to consume less battery power on mobile devices, which enhances the user experience and promotes green software practices (even if as a secondary benefit). Similarly, optimizing lambda functions to reduce costs in your favorite public cloud platforms results in decreased electronics requirements and energy consumption within their data centers.

Because the purpose of green software aligns with users’ interests, we anticipate its widespread adoption in our industry within the next five years. The rise of green software may even lead to unexpected shifts in IT practices. For instance, techniques such as backups, replication, and antivirus, which traditionally consumed significant resources and energy, may soon be considered obsolete in a world where every joule gets utilized for genuinely valuable computing and transmission purposes.

By embracing green software principles, we can drive positive changes in sustainability while influencing the evolution of IT practices to be more environmentally friendly. This transformation will contribute to a greener and more sustainable future for the entire industry.

# Where do you see the main challenges for Green Software?


As a specialist in monitoring and observability, I consider instrumentation to be the main problem. We’ve been instrumenting operating systems, processes and applications for decades to measure their performance: how many CPU cycles they consume, how much memory, I/Os, and storage they require. But accurately estimating the energy consumption needed to execute specific operations remains a considerable challenge.

Although manufacturers of electronic components are making strides in this area, we are still some distance away from achieving per-process power measurement, which is the ultimate goal. While commendable, existing techniques like Intel's RAPL instructions do not encompass other vital components such as fans, network cards, disks, and GPUs. Worse: RAPL relies on a software power model rather than a direct measurement of power consumption. Can you imagine that researchers are still estimating the power consumed by a PC’s processor only by measuring its heat dissipation and not using a power meter?

# What other hurdles do we have to take?


Observability across complex environments is a topic that we’re concerned with. Linking the activity triggered by an HTTP request across a distributed system comprising containers, virtual machines, and a cluster of physical systems with shared storage remains an ongoing observability challenge that requires further development.

Energy usage classification is another problem. It is crucial to determine whether we should adopt a scope 2/scope 3 classification for energy usage in computer systems. For instance, when your software queries an external web service, should you include the energy usage of that web service in your own software's carbon intensity calculation? The same question arises for other external dependencies such as authentication services, centralized storage, and backups.

Going another step forward, we have to look at broadening our sustainability metrics. While Software Carbon Intensity (SCI) concentrates on carbon emissions, it is important to expand our focus to include other sustainability metrics such as abiotic depletion potential and water consumption. By incorporating a comprehensive range of metrics, we can gain a more holistic understanding of the environmental impact of software.

While these challenges may seem daunting, they are ultimately solvable. When considering humankind’s remarkable achievements in electronics and software, tackling these obstacles is well within our capabilities. By fostering collaboration, research, and innovation, we can overcome these challenges and pave the way for a greener, more sustainable future in software development and consumption. That’s what I’m looking for with the Green Software Foundation.

# Which other sustainability initiatives are you working on?


A notable project I am working on is the authorship of an Internet Draft, which proposes a new RFC (Request for Comments) with the [<u>Internet Engineering Task Force</u>](https://www.ietf.org/). This draft outlines the definition of a new HTTP response header, which would enable web services and web servers to report the carbon emissions associated with processing each HTTP request.

If this proposed standard were to be adopted and implemented, it would give visibility into the carbon emissions generated by your browsing activities! We could have enterprise proxies that would calculate the carbon emissions resulting from the consumption of cloud or SaaS services. This level of transparency could make software and IT significantly more sustainable.

Additionally, my team is collaborating with OpenTelemetry to establish semantic conventions for sustainability metrics, such as power, energy, carbon intensity, and PUE (Power Usage Effectiveness). With a common set of metrics across observability vendors, users can easily aggregate and compare sustainability metrics from various sources. This standardization effort aims to enhance the overall understanding and management of sustainability-related data in the observability space.

# Why did you join GSF?


At Sentry Software, we have dedicated years of work to monitoring the physical aspects of IT infrastructure, notably focusing on electricity usage. Recently, some of our customers challenged us to assess the energy usage and carbon footprint of their applications running on virtual machines. This prompted us to embark on our research to estimate the power usage of VMs, leading us to delve deep into the processes involved. During this exploration, we came across the Green Software Foundation and its remarkable initiatives addressing software sustainability, energy usage, and carbon intensity.

As we had already joined [<u>OpenTelemetry</u>](https://opentelemetry.io/) and the [<u>Cloud Native Computing Foundation</u>](https://www.cncf.io/) to collaborate and contribute to establishing observability standards, it seemed only natural to join forces with the GSF. We recognized the opportunity to contribute to these efforts, particularly in specifying methodologies for estimating software energy usage.

We are filled with enthusiasm and anticipation about our collaboration with the GSF going forward! I am eager to contribute to the Standards and Open Source working groups within the foundation. The opportunity to shape and establish standards in the realm of green software is both exciting and fulfilling. We believe in the power of collective efforts and collaboration, and we are committed to making meaningful contributions to the initiatives and objectives of the GSF.

![](../images/observability-across-complex-environments-meet-bertrand-martin-ceo-of-sentry-soft/image.png)
