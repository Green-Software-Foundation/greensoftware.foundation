---
title: "We can't measure software carbon"
summary: >
  How Abhishek Gupta, Henry Richardson, Navveen Balani, and contributors from
  across the industry built the Software Carbon Intensity specification — a rate-based
  metric that became ISO 21031:2024 and is now used by banks, consultancies, and
  infrastructure operators to baseline and reduce their software emissions.

mainImage: /assets/stories/sci-measurement.png
problemHeading: Carbon totals existed — but engineers couldn't see the impact of their own code
journeyHeading: From a fragmented measurement landscape to an ISO standard in under three years

orgs:
  - name: Accenture
    logo: /assets/logos/accenture.svg
  - name: WattTime
    logo: /assets/logos/watttime.png
  - name: Microsoft
    logo: /assets/logos/microsoft.svg
  - name: UBS
    logo: /assets/logos/ubs.png
  - name: CAST
    logo: /assets/logos/cast.png
  - name: NTT DATA
    logo: /assets/logos/ntt-data.png
  - name: AVEVA
    logo: /assets/logos/aveva.svg
  - name: Texas State University
    logo: /assets/logos/texas-state-university.svg

stats:
  - value: ISO 21031:2024
    label: The SCI became an internationally recognised ISO standard in under three years
  - value: "7+"
    label: Independent implementations with published results across banking, consulting, and infrastructure
  - value: "15.1%"
    label: Average CO₂ saved per application at Autostrade per l'Italia across 60 applications
  - value: "400 kg"
    label: CO₂ reduction per year from fixing just ten green code deficiencies in a single enterprise application

timeline:
  - date: "2021"
    heading: Crafting the standard
    body: >
      When the Green Software Foundation formed, Abhishek Gupta volunteered to co-chair
      the Standards Working Group alongside Henry Richardson of WattTime. The team's
      key insight: make the SCI a rate, not a total — carbon emissions per functional unit
      (per API call, per user, per request). This meant the SCI could work across every
      software domain, every use case, and every person. Critically, the specification
      excluded offsets — the only way to improve your score was to genuinely reduce emissions.
    source:
      text: Read the original SCI crafting article
      href: /articles/software-carbon-intensity-crafting-a-standard/

  - date: December 2021
    heading: Alpha release for public comment
    body: >
      The Foundation released the alpha SCI specification, inviting the global software
      community to test it. The specification accounted for carbon awareness, energy
      efficiency, and hardware efficiency, and required standardised, transparent reporting
      of what went into the calculations. At this point, the co-chairs acknowledged
      the biggest barrier was "a dearth of case studies."
    source:
      text: Read the SCI specification project article
      href: /articles/software-carbon-intensity-sci-specification-project/

  - date: "2022"
    heading: First case studies validate the approach
    body: >
      Texas State University evaluated the SCI against foundation AI models — GPT-J 6B,
      GPT-Neo variants, GPT-2 — and concluded it was an effective metric for evaluating
      carbon impact at the inference stage. Their research found that carbon-intensive
      models don't necessarily yield better quality: GPT-Neo 1.3B consumed only 27% of
      the energy of GPT-J 6B while producing comparable answers.
    source:
      text: Texas State University deems the SCI an effective metric
      href: /articles/texas-state-university-deems-gsf-sci-an-effective-metric-to-evaluate-the-carbon-i/

  - date: "2023"
    heading: Enterprise implementations at scale
    body: >
      Accenture became one of the first organisations to calculate an SCI score for a
      production application: 0.025 gCO₂ per API call across 890,000 monthly requests.
      At UBS, Pindy Bhullar's team applied the SCI to two on-premises banking applications
      — one in Investment Banking, one in Asset Management — documenting operational
      emissions, embodied emissions, and scaling by functional unit. NTT DATA Italy
      partnered with Intesa Sanpaolo to build a real-time monitoring dashboard showing
      SCI scores across the bank's entire IT infrastructure.
    source:
      text: Read the Accenture SCI implementation case study
      href: /articles/how-accenture-implemented-the-sci-specification-score-to-track-software-emissions/

  - date: March 2024
    heading: ISO standard status
    body: >
      From alpha release in December 2021 to ISO 21031:2024 in March 2024 — the SCI became
      an internationally recognised standard in under three years. For context, ISO certification
      for a software specification typically takes five to seven years. GSF's consensus-driven
      process, combining open community review with direct enterprise participation, compressed
      that timeline without compromising rigour. CAST demonstrated that fixing just ten green
      code deficiencies with four person-days of effort could reduce annual CO₂ emissions by
      an estimated 400 kg and save over 1,000 kWh per year. Autostrade per l'Italia, working
      with CAST, achieved an average of 15.1% CO₂ savings across 60 applications.
    source:
      text: Read about the SCI achieving ISO standard status
      href: /articles/sci-specification-achieves-iso-standard-status/

  - date: Ongoing
    heading: Abhishek Gupta's legacy
    body: >
      Abhishek Gupta, co-chair of the Standards Working Group from GSF's formation, passed
      away on 30 September 2024. He had driven the SCI from inception through to ISO
      certification. As Asim Hussain wrote: "He leaves a powerful legacy with the Software
      Carbon Intensity Specification. His tireless efforts over the years led to a consensus
      on the specification, which was later published to ISO in late 2023 and is now being
      adopted globally." Sara Bergman of Microsoft added: "Working on the very first versions
      of the SCI with him continues to be one of the proudest moments in my career."
    source:
      text: Read the tribute to Abhishek Gupta
      href: /articles/honoring-abhishek-gupta/

featuredQuote:
  text: >
    The 'per R' is the secret sauce to the SCI. It is what makes the SCI into
    a tool that works for every software domain, every use case, and every person.
  author: GSF, SCI Alpha Release, December 2021

contributors:
  - name: Abhishek Gupta
    role: Founder and Principal Researcher
    org: Montreal AI Ethics Institute
    photo: /assets/articles/authors/abhishek-gupta.jpg
    contribution: >
      Co-chaired the Standards Working Group from GSF's formation and led the SCI
      from inception through ISO certification. In memoriam — passed 30 September 2024.
  - name: Henry Richardson
    role: Senior Analyst
    org: WattTime
    photo: /assets/standards/sci/henry.jpeg
    contribution: >
      Co-chaired the Standards Working Group, bringing grid-oriented expertise that
      shaped the carbon awareness dimension of the SCI.
  - name: Navveen Balani
    role: Managing Director and Chief Technologist
    org: Accenture
    photo: /assets/standards/sci/navveen.jpeg
    contribution: >
      Co-chaired the Standards Working Group and Impact Framework, and led the first
      enterprise SCI implementation case study — measuring 0.025 gCO₂ per API call
      on a production Accenture application.
  - name: Sanjay Podder
    role: Global Managing Director
    org: Accenture
    photo: /assets/articles/authors/sanjay-podder.jpeg
    contribution: >
      Co-founder and steering member of GSF, and Chairperson at the time of ISO
      achievement. Championed the SCI as the foundation for industry-wide adoption.
  - name: Pindy Bhullar
    role: ESG Technology and Sustainable Technology Lead
    org: UBS
    photo: /assets/standards/soft/pindy.jpeg
    contribution: >
      Led step-by-step SCI application to two UBS banking applications, producing one
      of the first published financial services SCI case studies.

quotes:
  - text: >
      What can be measured can be managed.
    author: Abhishek Gupta
    role: Montreal AI Ethics Institute / BCG
  - text: >
      SCI specification provided a practical methodology to baseline carbon emissions
      of the application, including embodied emissions and reducing the same.
    author: Navveen Balani
    role: Managing Director and Chief Technologist, Accenture
  - text: >
      Reaching this milestone represents a collective effort from GSF member organizations.
      This achievement unlocks the potential to achieve industry-wide adoption of the SCI
      Specification, which is crucial in empowering organizations to achieve real-world
      emissions reductions.
    author: Sanjay Podder
    role: Accenture and GSF Chairperson

relatedSlugs:
  - en/software-carbon-intensity-crafting-a-standard
  - en/sci-specification-achieves-iso-standard-status
  - en/honoring-abhishek-gupta
  - en/how-accenture-implemented-the-sci-specification-score-to-track-software-emissions
  - en/baselining-software-carbon-emissions-ubs-use-case
  - en/decarbonizing-software-how-cast-applied-the-sci-metric

cta:
  heading: Calculate your first SCI score
  body: >
    The SCI specification is freely available and backed by an ISO standard.
    Start with one application, baseline it using the step-by-step guide,
    then set a reduction target. The Impact Framework automates SCI calculation
    across your infrastructure.
  ctaText: "Learn about the SCI Specification"
  ctaHref: "/standards/sci/"
---

Organisations had been reporting carbon totals annually for years, but those numbers lived in sustainability reports that engineering teams never saw. A CTO could quote the company's total Scope 2 emissions, but couldn't tell an individual developer whether the software they'd just shipped was better or worse for the climate than the version before.

The existing GHG Protocol gave compliance but not insight. The world of carbon measurement was, as Abhishek Gupta described it, "splintered in its methodologies and tooling with very few widely accepted standards, especially for computing systems." A developer could spend weeks optimising code for energy efficiency and see no change in the company's reported carbon total — the number was too aggregated, too annual, and too disconnected from the software itself.

No single company could solve this alone. The problem required a standard that worked across industries — banking, travel, consulting, telecommunications — and across technology stacks: cloud, on-premises, serverless, desktop. It needed buy-in from competitors who would agree to measure the same way. That meant a coalition.

> "We envision that SCI measurement will become a standard part of every developer's toolbox and the norm in the future."
> — Navveen Balani, Co-Chair, Standards Working Group and Impact Framework (April 2024)
