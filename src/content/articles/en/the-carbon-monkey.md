---
title: "The Carbon Monkey"
date: "2021-08-19"
summary: "Can applying principles of Chaos Engineering and using carbon monkeys to simulate real-life energy events help us achieve our sustainable software engineering goals? "
teaserText: "How principles of Chaos Engineering and using carbon monkeys to simulate real-life energy events help us achieve our sustainable software engineering goals. "
mainImage: "/assets/articles/the-carbon-monkey/main.png"
authors:
  - fullName: "Paola Annis"
    role: "Customer Success Account Manager, CSAM"
    company: "Microsoft"
    companyWebsite: "https://www.microsoft.com/about"
    photo: "/assets/articles/authors/paola-annis.png"
    socialMedia:
      - platform: "Twitter"
        link: "https://twitter.com/paolaannis"
      - platform: "Linkedin"
        link: "https://www.linkedin.com/in/paolaeva/"
originBlogName: "Microsoft Developer Blogs"
publishedOriginUrl: "https://devblogs.microsoft.com/sustainable-software/the-carbon-monkey/"
---

According to [<u>Principles of chaos engineering</u>](https://principlesofchaos.org/), Chaos Engineering is the discipline of experimenting on a system in order to build confidence in that system’s capability to withstand turbulent conditions in production. I have followed this discipline through the years finding it fascinating, especially when applied to large scale applications and systems. As the site explains:

> *“Even when all of the individual services in a distributed system are functioning properly, the interactions between those services can cause unpredictable outcomes. Unpredictable outcomes, compounded by rare but disruptive real-world events that affect production environments, make these distributed systems inherently chaotic.*

> *We need to identify weaknesses before they manifest in system-wide, aberrant behaviors. Systemic weaknesses could take the form of improper fallback settings when a service is unavailable; retry storms from improperly tuned timeouts; outages when a downstream dependency receives too much traffic; cascading failures when a single point of failure crashes; etc. We must address the most significant weaknesses proactively, before they affect our customers in production.*

> *We need a way to manage the chaos inherent in these systems, take advantage of increasing flexibility and velocity, and have confidence in our production deployments despite the complexity that they represent. An empirical, systems-based approach addresses the chaos in distributed systems at scale and builds confidence in the ability of those systems to withstand realistic conditions. We learn about the behavior of a distributed system by observing it during a controlled experiment. We call this Chaos Engineering.”*

### **Build a Hypothesis around Steady State Behavior**

Let’s start with the first step: a steady state behavior is the condition our application should aspire to be in. If we translate this principle into a sustainable one, this becomes the most beautiful and efficient state of an application: *one where no energy is wasted, and efficiency and performance is at its best*.

<figure>
<img src="/assets/articles/the-carbon-monkey/green-software-foundation-carbon-monkey-illustration-paola-annis2.png" alt="green-software-foundation-carbon-monkey-illustration-paola-annis2" />
<figcaption><em>Call for more "carbon monkeys"</em></figcaption>
</figure>

The most difficult part is how to measure and set this initial state. My colleagues have shared numerous ideas on the [Sustainable Software Engineering blog](https://aka.ms/sse/blog) that might help you jumpstart your measurement. However, I feel that at some point, this will have to reach a standardized and widely accepted form where we have a “carbon limit” where an application is considered inefficient and not sustainable.

### **Vary Real-world Events**

This is the principle that represents how close chaos engineering and sustainable software engineering are. There is no steady and predictable flow of energy coming from the same renewable source. From the challenging big picture of using solar, wind or hydro energy down to when we plug our device into the outlet, we still have limited ways to retrieve exactly how the energy that is powering the device is produced in that exact moment in time. Doing so precisely requires considering things like seasonality, time of day, peak hours as well as weather conditions that trigger renewable power supplies usage. The variables around this concept are too many!

Imagine now that your application is running on a virtual datacenter where you have even less information of its carbon impact. We still need to start somewhere, though, and set an amount of carbon usage for the application. This will be useful to measure its increase and decrease to drive efficiency.

Back to chaos engineering. Simulating power outages is just a start. We can think of it as the starting point for a sustainable application:

- What if the renewable power sources are suddenly unavailable and therefore, I have spikes of energy consumption that I could not foresee even in the greenest application?
- What if at some point my application has become a “carbon monster,” greedy with energy because a query has gone wrong and it’s suddenly taking most of its energy just to search for that item in your cart? Or because at some point the network path has changed due to an outage in the network route and its latency spikes? And so, trying to replicate real-life energy events directly into an application will make it more resilient to lower energy availability and overall, more efficient.

### Enter the “Carbon Monkey”

This concept is a “carbon” monkey: a process or system that triggers energy inefficiencies at random, testing how your application reacts, and measuring differential performance that can relate to the differential carbon impact.

Instead of measuring how much energy an application consumes, we should test adding energy events to see how the application behaves and then drive change to improve its reaction to events that make it less green. 

We have given the problem of how to measure an application’s carbon efficiency a lot of thought. But this approach offers a change of perspective. Instead of measuring how much energy an application consumes, we should test adding energy events to see how the application behaves and then drive change to improve its reaction to events that make it less green. 

As a result, we won’t have a carbon impact exact measurement, but only a differential. With time, this differential can become an absolute number when  other systems allow us to retrieve more precise energy consumption metrics.  In the meanwhile, let the carbon monkey help us reduce impact regardless of the metric standardization!

### Call for more “Carbon Monkeys”

I’d like to see developer communities creating one or more “carbon monkeys” that can introduce energy-impacting events into applications, to foster resiliency towards sustainability. 

The main trigger is defining a set of incorrect assumptions about energy usage that can prevent our application from performing “green”. These would include assumptions such as the highest energy cost/carbon use/region, the shortest/longest queries, the shortest/longest network paths, the highest compute and memory usage among other things. 

These assumptions should then be introduced by an automated process (our monkey) that will make sure that the application patterns are resilient enough to overcome those issues without completely failing. At the end of the run, we could set up a carbon resiliency value that can help set a standard for the application carbon impact differential evaluation.
