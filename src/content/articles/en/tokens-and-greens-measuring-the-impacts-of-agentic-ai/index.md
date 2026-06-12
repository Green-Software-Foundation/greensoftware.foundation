---
title: 'Tokens and Greens: Measuring the Impacts of Agentic AI'
teaserText: A note from the Executive Director
date: 2026-06-09
published: true
summary: Navveen Balani (ED of GSF) shares why agentic AI has become the next big efficiency problem in software and what measuring its environmental impact across energy, carbon, and water, requires from every layer of the technology stack.
mainImage: Tokens-and-Greens-2.png
mainImageAlt: A developer sits cross-legged on a large open hand, working on a laptop. Three glowing circular icons float above, connected by circuit-like lines, representing energy (lightning bolt), carbon (hexagon), and water (droplet). A dark background with teal grid patterns frames the illustration. Green Software Foundation logo in the bottom left corner.
featured: false
tags:
  - standards
  - community
  - engineering
authors:
  - fullName: Navveen Balani
    role: Executive Director
    company: The Green Software Foundation
    companyWebsite: ''
    photo: ''
    socialMedia: []
translators: []
originBlogName: ''
publishedOriginUrl: ''
lang: en
---

When I took on this role, one of the first questions I started asking practitioners, researchers, and member companies was: _What's the next big efficiency problem in AI?_

The answer they kept coming back with was the same. Not training. Not inference at the model level. **Agents.**

And the more I looked at the numbers, the clearer it became that agentic AI is rewriting the economics of software, cost, energy, carbon, and water, in ways most organizations haven't yet understood. 

## **The 1000x Problem**

A recent study of agentic coding workloads across frontier models found that these tasks can consume **up to 1000x more tokens** than equivalent code-reasoning or code-chat interactions, with _input_ tokens, not output, driving the cost [1]. Another benchmark built around realistic enterprise workloads found that a single agentic scenario requires an average of around **90 tool calls, one million tokens, and hours of execution time** [2].

Read those numbers again. The same business outcome that used to cost one LLM call now costs hundreds, sometimes thousands of times more. It's not unavoidable: runs on the same task can differ by up to **30x** in total tokens, and, critically, higher token usage does not translate into higher accuracy. Accuracy often peaks at intermediate cost and saturates beyond it [1].

This is what we call the agentic multiplier. Planning loops, tool calls, reflection, retries, multi-agent debate, context that compounds with every turn—each is defensible on its own. When stacked together, they turn a 2,000-token interaction into a 2,000,000-token workflow.

Every one of those tokens requires GPU time. Every GPU-second is energy drawn from a grid, carbon emitted somewhere along the way, and water consumed to cool the silicon that produced it. **The token is the unit we bill on. The kilowatt-hour, the gram of CO₂e, and the liter of water are the units that cost the planet.** 

## **Why Energy, Carbon, and Water All Matter**

It's tempting to frame agentic AI as a cost issue. Tokens are expensive; the market will sort it out.

The problem is that it won't, at least not within the timeline that the climate, the grid, or the watershed needs.

These three resource dimensions are connected, but distinct, and treating any of them as a proxy for the others is how organizations end up with blind spots.

**Energy is the lever.** It’s the dimension that practitioners and architects directly control, but rarely measure. Reducing the tokens reduces the GPU-seconds and reduces the kilowatt-hours. Reasoning models stacked on agentic loops are pushing energy consumption much steeper than the cost curve.

**Carbon is the climate consequence.** A kilowatt-hour from a solar-heavy grid at midday carries a fraction of the carbon of one drawn from coal at night. Where and when an agent runs matters as much as how much energy it consumes. Embodied carbon, the emissions baked into the hardware, is rising rapidly as the industry expands AI data centre capacity.

**Water is the local impact, and its use by AI is increasingly drawing community attention.** Agentic workloads, with their long execution times and sustained GPU utilization, generate heat that needs cooling. In response, many data centers rely on evaporative cooling, which can consume millions of liters of freshwater per facility per day. Water impact is also place-specific—a liter consumed in a stressed watershed is not interchangeable with a liter elsewhere. The available alternatives are more energy-intensive and increase the carbon cost instead.

You cannot optimize for one resource and assume the other two will follow. A carbon-aware schedule that shifts workloads to a renewable-heavy region in a drought zone can lower emissions while worsening water stress. An efficiency gain that reduces tokens but routes inference to newer hardware with high embodied emissions can lower energy and raise total lifecycle carbon. **Green software practice has to hold all three in view.**

The [article that expands GSF’s definition of green software](https://greensoftware.foundation/articles/revisiting-green-software-from-silicon-to-screen/) explores what each dimension means for how software is designed and operated. 

Hyperscaler power demand is already pushing utility planning conversations that didn't exist three years ago, and water consumption for data center cooling is drawing community and regulatory attention from Arizona to the Netherlands. The issues that were once back-office infrastructure questions are now constraints on how fast AI can scale responsibly. 

## **The Foundation’s Position** 

Three things map directly to work underway across the GSF.

**First, granular measurement across energy, carbon, _and_ water.** You cannot manage what you cannot measure, and right now most organizations deploying agents have no tooling for any of these dimensions at the task level. The [**Software Carbon Intensity (SCI)** specification](https://sci.greensoftware.foundation/), an ISO standard, defines a methodology that connects energy and carbon together: energy consumed by the software, multiplied by the carbon intensity of the electricity, plus embodied emissions. [**SCI for AI**](https://greensoftware.foundation/standards/sci-ai/), ratified by the community in late 2025, extends that methodology across the AI lifecycle, including agentic inference workloads. Energy is getting its own dedicated standard through [**Software Energy Efficiency (SEE)**](https://greensoftware.foundation/standards/see/)**,** currently under active development, with water-usage effectiveness next in scope—so that a single agent task can eventually be evaluated across all three axes, not just the easiest one to measure. The [**Impact Framework**](https://if.greensoftware.foundation/) provides the open tooling to make the calculations reproducible.

**Second, time and location-aware environmental signals.** Optimizing agents requires knowing not just how much they consume, but when and where, because that determines both the carbon intensity of every kilowatt-hour and the water stress of every cooling cycle. The [**Real-Time Energy and Carbon Standard for Cloud Providers**](https://greensoftware.foundation/standards/rtc/) is the GSF community's effort to make hour-by-hour, region-by-region data available to workloads at runtime—so that agentic systems can be scheduled, throttled, or routed based on actual conditions rather than annual averages. Water signals belong in that same picture.

**Third, design discipline.** Not every problem needs an agent. Not every agent needs a reasoning model. Not every reasoning step needs full context. **The most efficient, and lowest-impact, token is the one that was never generated.** Routing patterns, caching, smaller specialized models, bounded retry budgets, and human-in-the-loop checkpoints are all available today—they're just not the default. As the cited research shows, using more tokens often doesn't even produce better outcomes. This is where the role of green software practice is to push efficient patterns toward being the default before the agentic stack ossifies.

## **Call to Action: From Silicon to Screen**

Agentic AI's adoption curve looks a lot like cloud computing around 2015—exploding deployment, accumulating technical debt, environmental accounting deferred to later. But this time, the resource picture is different. Cloud had roughly a decade before power demand, water consumption, and regulatory pressure became constraints on its growth. Agentic AI is meeting those constraints now, while the build-out is still accelerating. That changes what good looks like, and it sharpens the window we have to build the stack responsibly.

No single organization can solve agentic AI's footprint. This is a shared responsibility, and one that spans the entire stack, **from silicon to screen.**

- **Chipmakers and hardware vendors:** push performance-per-watt as a first-class metric, and make energy and thermal telemetry accessible to the software running above.
- **Hyperscalers and cloud providers:** give workloads the real-time energy, carbon, _and_ water signals they need to make smarter scheduling decisions. The Real-Time Cloud standard is the floor, not the ceiling.
- **Model providers:** publish per-token and per-task environmental data across all three dimensions. Make efficiency a competitive axis, not a footnote.
- **Framework and agent builders:** bake routing, caching, and retry budgets into defaults. Make the wasteful path the harder one to take.
- **Enterprises and developers:** measure what your agents actually consume. Adopt SCI and SCI for AI. Treat energy, carbon, and water as design constraints, not afterthoughts.
- **Policymakers and standards bodies:** anchor emerging disclosure expectations in the open standards that already exist, so the industry converges instead of fragmenting.
- **Users and buyers:** ask the question. _How much did that agent task just consume—in energy, in carbon, in water?_ Demand drives disclosure.

Done well, these actions reinforce each other. **Efficiency lowers cost**. Cost discipline drives smarter design. Smarter design lowers energy, carbon, and water in turn. From silicon to screen, the same decisions that build a sustainable agentic stack also build a more efficient and affordable one.

The GSF’s role is to bring these layers into the same room. If you're working anywhere along that silicon-to-screen path, we want you in the conversation.

_In follow-up posts, I'll go deeper on each of these dimensions from silicon to screen—connecting efficiency, cost, and environmental impact in ways that speak to everyone who shapes how software gets built and run: from CIOs, CTOs, and Chief Sustainability Officers to architects, developers, and the operators in between—and to the policymakers and regulators shaping the rules around them._

***

### **References**

[1] Bai, L., Huang, Z., Wang, X., Sun, J., Mihalcea, R., Brynjolfsson, E., Pentland, A., Pei, J. (2026). _How Do AI Agents Spend Your Money? Analyzing and Predicting Token Consumption in Agentic Coding Tasks._ arXiv:2604.22750. https://arxiv.org/abs/2604.22750

[2] Li, K., Shi, J., Xiao, Y., et al. (2026). _AgencyBench: Benchmarking the Frontiers of Autonomous Agents in 1M-Token Real-World Contexts._ arXiv:2601.11044. https://arxiv.org/abs/2601.11044

***

_The views reflect ongoing community conversations rather than formal Foundation positions._
