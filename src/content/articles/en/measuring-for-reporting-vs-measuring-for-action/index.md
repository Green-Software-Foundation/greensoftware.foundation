---
title: "Measuring for Reporting vs. Measuring for Action"
date: "2026-03-05"
published: true
summary: "The metrics designed for regulators aren't always the ones that help practitioners reduce emissions. Asim Hussain (ED of GSF) explores the trade-offs between measuring for reporting and measuring for action, and how to design systems that do both."
teaserText: "Why the metrics that report emissions aren’t always the ones that help reduce them. "
mainImage: "./main.png"
authors:
  - fullName: "Asim Hussain"
    role: "Executive Director"
    company: "Green Software Foundation"
    companyWebsite: "https://greensoftware.foundation"
    photo: "/assets/articles/authors/asim-hussain.png"
    socialMedia:
      - platform: "Linkedin"
        link: "https://www.linkedin.com/in/asimhussain/"
---

There are two reasons to measure carbon emissions. One is reporting. The other is driving action. Both matter. But they're not the same thing, and the trade-offs between them are worth understanding.

Most of the carbon measurement conversation today focuses on reporting. Totals, life cycle assessments, scope 1/2/3 disclosures. This makes sense. Regulators need comparable data. Investors need consistent frameworks. Society needs organizations to be transparent about their impact. Reporting serves all of those needs.

But there's a second purpose for measurement that gets far less attention. Measurement as a tool for actually reducing emissions. Measurement that gives teams clear signals for what to change and sits within their agency to make that change.

At the GSF, this second purpose became our focus. Not because reporting doesn't matter, but because we noticed something important. The qualities that make a metric good for reporting often make it less useful for driving action. And vice versa. Understanding that trade-off is the key to designing measurement systems that do both well.

## What Makes a Metric Good for Reporting

Reporting metrics need to be comparable across organizations. They need to be auditable. They need to be consistent over time so you can track trends. They need to withstand scrutiny from regulators and third-party auditors.

All of this pushes you towards totals. Total organizational emissions. Total product lifecycle emissions. Standardized boundaries and methodologies so that Company A's number means roughly the same thing as Company B's number.

This is genuinely valuable work. Without it, there's no accountability at scale, and there's no way for regulators to set meaningful thresholds or for consumers to make informed choices. Reporting creates the baseline of transparency that everything else builds on.

But here's the trade-off. The standardization and breadth that make a metric comparable across organizations also make it less specific to any individual team inside an organization. A total tells you the size of the problem. It doesn't tell a specific team what to do about it.

> “A total tells you the size of the problem. It doesn't tell a specific team what to do about it”.

## The Auditing Problem (or, Top-down vs. Bottom-up)

There's a practical reason why reporting metrics and action metrics pull in different directions, and it comes down to auditing.

Reporting metrics often need to be verified by a third party. And a third-party auditor isn't interested in granular, instrumented telemetry data. They're interested in data they can independently verify. In practice, that means bills. An auditor can trust that an organization consumed a certain amount of energy because they can see the invoice. They can cross-reference it. They can verify it against an independent source. What they can't easily verify is the output of a monitoring tool that the organization itself controls.

This creates a very specific problem for cloud computing. Cloud providers often have detailed, real-time instrumentation data about energy consumption at the server and process level. But because auditors prefer billing data over instrumentation, that granular data often isn't what gets used for reporting purposes. And billing data is inherently delayed (you get the bill after the fact, not in real time).

The deeper challenge is what happens next. Once you have a large electricity bill for a data center, how do you allocate that down to a specific software process that ran for three seconds on a shared virtual machine? This is fundamentally a top-down exercise. You're taking a big number and trying to divide it up. There have been many efforts to do this, some better than others, but none of them have produced data as granular or as accurate as measuring bottom-up (instrumenting the actual processes and measuring their consumption directly).

Top-down measurement (starting from a total and allocating downward) serves reporting well. It gives you a defensible, auditable number. Bottom-up measurement (instrumenting individual components and measuring from the source) serves action well. It gives you the granular signals that teams need to know where to focus and whether their improvements are working.

This isn't a flaw in either approach. It's a fundamental difference in what they're designed for. And it's one of the clearest examples of why a single metric can't easily serve both purposes without compromise.

## What Makes a Metric Good for Driving Action

Through our work at the GSF, we kept coming back to two conditions that need to be true for a metric to actually change behavior.

It needs to give a clear signal for action. The measurement has to tell someone something they can act on. Granular energy data showing that process A consumes ten times more electricity than process B is a signal. An engineer looks at that and knows where to invest their time. When they make an improvement, they can see the impact. The metric is doing a job: pointing towards the next useful thing to do.

It needs to be within the team's agency to change. If the number moves up or down independent of anything the team does, it's not a useful action metric for them. It might be a perfectly valid reporting metric. But it won't drive the behavior you're looking for.

## How this Plays Out in Organizations

Think about how KPIs work inside any large organization. The sales team has revenue targets. Engineering has performance and reliability metrics. HR tracks retention and hiring. Each team gets metrics aligned to their function, their skills, and their ability to actually move the number.

Nobody gives every team the same top-level target. You wouldn't hand the engineering department a revenue goal because if revenue goes up, it's mostly down to the sales team. You wouldn't give the sales team an uptime SLA because they have no influence over system reliability. It's not that revenue or uptime don't matter. They matter enormously. But they're not useful KPIs for every team.

Carbon measurement has the same dynamic. A total organizational emissions figure is important for reporting, for transparency, and for regulatory compliance. But when you hand that number to a software engineering team and ask them to reduce it, you've given them a metric that's influenced by procurement decisions, office energy use, business travel, supply chain factors, and a hundred other things they can't control.

The metric isn't wrong. It's just not designed for them.

## The Trade-off in Practice

A quick example to make this concrete. [The Software Carbon Intensity (SCI) specification](https://sci.greensoftware.foundation/) doesn't include carbon offsets in its calculation. This isn't an ethical stance on offsets. It's a design decision about agency. If you're a software engineer and your SCI score improves because the energy procurement department purchased renewable energy credits, what signal does that give you? None. Your code didn't change. A separate team made a purchasing decision, and your number moved.

For reporting purposes, you absolutely want offsets in the picture. They're part of the organization's overall emissions story. But for an action metric scoped to an engineering team, including them adds noise and removes signal. Same data, different purpose, different boundary.

## Designing a Metric for Action

So how do you actually build a metric that drives action? There's a process to it, and it starts in a different place than most people expect.

Start with the persona, not the boundary. Most measurement efforts begin with "what should we include in the calculation?" That's the wrong starting point. Start instead with the person or team you want to influence. Who are they? What decisions do they make day to day? What levers can they pull?

Map their realm of agency. Once you know the persona, you need to understand what they actually have control over. An engineering team can optimize code, choose more efficient architectures, and reduce unnecessary computation. They can't control where the company sources its energy. They can't influence how many units the sales team sells. Their realm of agency has clear boundaries, and your metric needs to respect those boundaries.

Design the metric boundary to fit inside their agency. This is where the concept of a "software boundary" comes in. Every metric has an inclusion boundary (what factors are counted in the calculation). Every team has an agency boundary (what they can actually influence). For a metric to drive action, the inclusion boundary needs to sit inside the agency boundary. When those two boundaries are misaligned, the metric breaks down.

Test for independence. There's a simple test to check whether your metric is aligned with a team's agency. Ask: Will this metric go up or down independent of anything this team does? If the answer is yes, you've got a misalignment. The metric is being influenced by forces outside the team's control, which means it can't reliably signal whether the team is doing well or poorly.

Push accountability to the smallest possible collective. When multiple teams share responsibility for a single metric, accountability dissolves. If five teams are all responsible for the same number, nobody is responsible for it. The metric becomes something everyone watches, and nobody owns. The goal is to push accountability to smaller and smaller collectives, ideally to the point where a team looks at their metric and knows that the number on the screen reflects their work and their decisions.

Invest in granular data. None of this works without data at the right level of detail. If you're only measuring at the organizational level, you can't give teams actionable KPIs. Engineers need to know that process A consumes ten times more electricity than process B. They need that granularity for two reasons: first, to know where to invest their time, and second, to measure whether their improvements actually had an impact. Without granular data, you've got a metric with no signal.

The SCI specification is a practical example of this process in action. The persona is a software engineer. Their agency covers code, architecture, and infrastructure choices. The metric boundary includes the energy and carbon associated with running their software, but excludes things like carbon offsets, because those are controlled by a completely different team. The result is a metric that an engineering team can own, act on, and improve.

This approach means you don't end up with one universal metric. You end up with many. Potentially thousands across a large organization, each scoped to a specific team. It's less elegant. It's harder to standardize. But each metric actually does the job it's supposed to do.

## Efficiency and the Growth Question

This reporting/action distinction also shapes how you think about what kind of metric to use.

Reporting tends to focus on totals because that's what gives you the complete picture. Action metrics tend to focus on efficiency (emissions per unit of work) because that's what teams can actually optimize.

This matters especially in the digital world, where growth is the defining characteristic. Organizations in this space can scale enormously and quickly. Their business models, their investors, and their entire operating structure are built around growth. That's not a moral judgment, it's just the reality of the landscape.

An efficiency metric works with that reality. It says: grow if you're going to grow, but make every unit of growth cleaner than the last one. Every new release, every new service, every new feature should consume less energy per unit of work. That's something an engineering team can own, track, and improve.

Someone will bring up Jevons' paradox (the idea that efficiency gains get consumed by increased usage). It's a fair concern. In practice, though, genuine Jevons' paradox is quite rare. What's more common is a rebound effect that eats somewhere between 5 and 50 percent of the efficiency gain. That's real, but it still leaves you ahead. And for a team looking at their KPIs each sprint, efficiency is the lever they can actually pull.

## Both, not Either

The point isn't that reporting metrics are bad and action metrics are good. It's that they serve different purposes and involve real trade-offs.

Reporting metrics need breadth, comparability, and standardization. Those qualities are essential for accountability at scale. But they come at the cost of specificity and actionability for individual teams.

Action metrics need granularity, clear signals, and alignment with team agency. Those qualities are essential for behavior change. But they come at the cost of comparability across organizations.

The solution isn't choosing one metric over the other. It's understanding which tool you're reaching for and why.

If your goal is regulatory compliance and organizational transparency, design your measurement system for reporting. Totals, standardized boundaries, auditable methodologies.

If your goal is actual emissions reduction, design your measurement system around the people who will do the reducing. Start with the persona. Understand their realm of agency. Then design a metric with a boundary that fits inside that realm. Not one universal metric, but potentially thousands of bespoke ones, each giving a specific team the signals they need to act.

The best measurement programs do both. They report at the organizational level for accountability and transparency. And they decompose that into granular, team-scoped action metrics that actually drive change. The key is knowing which is which, and not expecting one type of metric to do the other's job.

*By Asim Hussain, Executive Director of the GSF*
