---
title: 'Carmen Webinar Recap: Bringing Carbon Measurement to Enterprise Scale'
teaserText: On the heels of Carmen's transfer to the GSF, we hosted its first public launch, a live session bringing together the tool's creators and the community now invited to build with it.
date: 2026-04-30
published: true
summary: On Earth Day 2026, we hosted Carmen's first public webinar. Find out why the project was built inside Amadeus, how it shows which applications are driving emissions, and what features to expect next.
mainImage: Carmen-webinar-recap.png
mainImageAlt: Isometric illustration of Carmen (Carbon Measurement Engine) featuring a large green C logo surrounded by server stacks, a cloud icon, and a laptop displaying data, on a dark teal background. Green Software Foundation logo in the bottom left corner.
featured: false
tags:
  - '"tools", "measurement"'
authors: []
translators: []
originBlogName: ''
publishedOriginUrl: ''
lang: en
---

The webinar was the first live event introducing Carmen (Carbon Measurement Engine) as a GSF project, presenting its journey from four years in the making at Amadeus to an open source tool that complements the full software measurement stack, along with the SCI standard and Impact Framework. It formally opened the door to community participation, providing practitioners with specific steps to get involved. 

We were thrilled to see nearly 60 participants join the session, ask specific questions, and explore how Carmen fits into their own infrastructure—a strong signal that the community is ready to contribute and adopt the tool. 

## Starting Point: The Consistency Gap 

Florent Morel (Carmen Project Lead, Amadeus) set the stage by recalling Amadeus’s struggle to measure carbon emissions across over 250 cloud applications and hundreds of engineering teams. He shared how they tried using existing tools (Green Algorithms, internal models), but nothing worked at their scale. 

Carmen was born out of the need to fill this gap, but the main problem was consistency, not measurement. With each team using different constants, different implementations, and no common baseline, the key question they were asking was: Application by application, are we getting more efficient? 

## Bringing Consistency to Carbon Measurement

The existing GSF tools worked perfectly on an individual application or system level; the SCI specification gave the standard, the Impact Framework (IF) eased the calculation, but Carmen brought it to an enterprise scale. 

Robin Castellon (Project Lead, Amadeus) took us step by step through how Carmen auto-generates IF manifest files from existing infrastructure data, runs the calculations, and outputs a per-component SCI score for every item in the stack. 

It operates in two modes: daemon mode for fleet-wide reporting (plugs into FinOps pipeline) and API mode for specific application optimization (plugs into Prometheus/Kubernetes). 

Building on that foundation, Joseph Cook (Head of R&D at GSF) highlighted how with Carmen, every team gets a specific metric that reflects their performance, enabling them to see the impact of the optimizations in near real time and a complete, reproducible audit trail via the IF manifest file with every run. 

## The Philosophy Behind the Measurement 

> “Our motto is data consistency over accuracy." —Florent Morel, Carmen Project Lead 

Carmen was never intended to provide absolute numbers. Florent emphasized that more than accuracy, what matters is the consistent measurement practice that eventually turns into a trend—and this is what Carmen enables. 

Joseph reinforces this by underlining that a 20% reduction in the hottest component is a tangible engineering win, while a reduction in company-wide total is impossible to pinpoint and track to a single source.  

When we're tracking emissions and unit costs, they don't always move in the same direction. To enable better optimization decisions that tackle both aspects, Amadeus introduced the Effective Carbon Rate (ECR), bringing sustainability and FinOps together. 

## The Bigger Picture: Making Carmen Available to the Community 

Amadeus green-lighted open-sourcing Carmen in 2022, but the team decided to wait until the product was tangible and fully operational before making it available outside the organization, shared Florent. 

They eventually open-sourced it in 2025, [then transferred it to GSF in early 2026](https://greensoftware.foundation/articles/welcoming-carmen-carbon-measurement-engine-as-a-gsf-project/). Carmen is so closely coupled with the Impact Framework that they saw more benefits in GSF owning it than if it were to remain inside a single company. Joseph emphasized that the tool is now freely usable, freely modifiable, and managed by an active open source community under GSF governance, making it available to any organization worldwide to use and explore. 

> "Carmen represents exactly what we need more of in the green software ecosystem—practical tools built on solid measurement foundations that help teams act.”—Asim Hussain, former ED of GSF 

Amadeus showed how open standards and frameworks enable verification across the industry. This can work because the foundation that Carmen builds on is open and standardized, which proves that the stack is practical and scalable in an enterprise environment. 

## Next Steps 

Robin and Florent are already working on V0.2, which will add coverage of storage and cloud services, and a technical refactor to make the code more modular and easier to extend. As input and output formats won't change, everyone can start using V0.1 now without worrying about disruption. 

Currently, Carmen only supports Azure, because that's what Amadeus’ system runs on. However, there are already open issues in the GitHub repository for both AWS and GCP inclusions. The project leads are actively seeking contributors from the community to support this improvement. 

Joseph highlighted that using Carmen to capture AI emissions would be one of the most impactful features the community could build next.

## Get Involved 

Carmen is now open and available for anyone to explore and build on it. Joseph, Florent, and Robin reinforced the invitation for engineers, architects, and software practitioners to explore and contribute to the tool. Here is the list of useful resources: 

[**Watch Carmen’s webinar**](https://movement.greensoftware.foundation/spaces/22742081?utm_source=manual) on the Movement platform. 

[**Office hours**](https://movement.greensoftware.foundation/spaces/23617166/events): We’re introducing office hours that give you direct access to the project leads. Bring your specific setup and come with your questions; this is where they will get resolved. The first session will take place on **Wednesday, May 13, at 10 am BST**.

[**Subscribe to the project mailing list**](https://grnsft.org/carmen-public-mailing-list): This is a low-traffic channel for project updates, release announcements, and community news, delivered directly to your inbox.

[**GitHub Repository**](https://github.com/Green-Software-Foundation/if-carmen): Explore Carmen’s source code, a Quick Start Guide, dummy data to test the tool, and the data factors used in calculations. 

Not sure where to start? Install Carmen and run it with the dummy data in the repository before committing any engineering time.

If you're part of a GSF member organization, subscribing to the Carmen project means you'll be kept in the loop on governance, working group activity, and contribution opportunities. [**Subscribe here**](https://wiki.greensoftware.foundation/subscribe). 

A big thank you to Florent Morel, Robin Castellon, and the whole Amadeus team for building Carmen and contributing it back to the community.
