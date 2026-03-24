---
title: "Measurement is too hard for non-specialists"
published: true
summary: >
  How Accenture, Microsoft, Amadeus, NTT DATA, and partners built the Impact Framework —
  an open-source tool that democratises software carbon measurement — and validated it
  through two global hackathons that together drew 900+ participants.

mainImage: /assets/stories/impact-framework.jpg
problemHeading: The SCI formula existed — but using it required specialist knowledge most teams didn't have
journeyHeading: From hackathon appetite to a production-scale measurement ecosystem

orgs:
  - name: Accenture
  - name: Microsoft
  - name: Amadeus
  - name: Aveva
  - name: BCG
  - name: NTT DATA
  - name: Sentry
  - name: Infocomm Media Development Authority
  - name: Thoughtworks

stats:
  - value: "500+"
    label: Participants at Carbon Hack 24
  - value: "47"
    label: Project submissions at Carbon Hack 24
  - value: "30"
    label: New community-built plugins for the Impact Framework
  - value: "8"
    label: Major sponsors investing in the measurement ecosystem

timeline:
  - date: "2022"
    heading: CarbonHack22 proves the appetite
    body: >
      The Foundation's first hackathon ran with 395 participants and 51 project submissions.
      While focused on the Carbon Aware SDK, it demonstrated a massive appetite in the
      developer community for practical green software tools — and attracted sponsors including
      Accenture, Thoughtworks, Goldman Sachs, UBS, and BCG. The message was clear: developers
      wanted tools to act on sustainability, not just measure it.
    source:
      text: Read about CarbonHack22
      href: /articles/carbonhack22/

  - date: "2023"
    heading: Impact Framework development
    body: >
      Recognising that measurement needed to be democratised, the GSF developed the
      Impact Framework (IF) — an open-source tool that converts observable data from
      running systems (CPU utilisation, page views, number of installs) into environmental
      impacts (carbon, water, energy, air quality) in an auditable, replicable, and
      transparent manner. Its plugin architecture meant anyone could contribute modules
      handling specific cloud provider metrics, embodied carbon calculations, or
      entirely new impact categories.
    source:
      text: Explore the Impact Framework
      href: https://if.greensoftware.foundation

  - date: December 2023
    heading: Carbon Hack 24 announced
    body: >
      The Foundation announced a second hackathon, this time centred squarely on the
      Impact Framework. The framing was explicit: solving the biggest pain point facing
      the industry — measuring software for sustainability. The IF was the tool to make
      measurement scalable.
    source:
      text: Read the Carbon Hack 24 announcement
      href: /articles/carbon-hack-24-where-measurement-meets-innovation-and-impact-knows-no-bounds/

  - date: March–April 2024
    heading: Carbon Hack 24 scales the ecosystem
    body: >
      Over 500 sustainability software developers and practitioners worldwide participated.
      Sponsored by Accenture, Amadeus, AVEVA, BCG X, Sentry Software, IMDA, Nedbank South
      Africa, and NTT DATA, the hackathon produced 47 submissions and 30 new community-built
      plugins. Winners ranged from LLM carbon footprint evaluation (Thoughtworks) to an
      Environmental Impact Risk Scorecard covering water, waste, and air quality
      (Opencast Software Europe) — proving the framework's versatility across domains.
    source:
      text: Read the Carbon Hack 24 wrap-up
      href: /articles/carbon-hack-24-expanding-the-ecosystem-of-software-measurement/

  - date: September 2024
    heading: LLM-powered measurement
    body: >
      Srinivasan Rakhunathan (Microsoft) and Navveen Balani (Accenture) published a
      methodology for estimating software emissions during the system design phase using
      Large Language Models — training AI on architecture blueprints, green design patterns,
      and emission data to provide guidance before a single line of code is written.
      This shifted measurement left into the design phase, where architectural decisions
      that lock in 67–93% of an application's emissions are made.
    source:
      text: Read the LLM emissions methodology
      href: /articles/emission-calculations-through-large-language-model/

  - date: "2026"
    heading: Amadeus donates Carmen, built on IF
    body: >
      Amadeus donated Carmen — their production carbon measurement engine — to the GSF.
      Carmen was explicitly built on the Impact Framework and delivered transparent,
      reproducible carbon calculations at scale across hundreds of applications serving
      1.9 billion travellers. It was the ultimate validation: a major enterprise had chosen
      IF as the backbone of their measurement infrastructure.
    source:
      text: Read the Carmen announcement
      href: /articles/welcoming-carmen-carbon-measurement-engine-as-a-gsf-project/

featuredQuote:
  text: Everyone is craving measurement. The one question we get all the time is, 'How do we measure?'
  author: Eleonore Gueit, Sustainable Engineering Advocate, Amadeus

contributors:
  - name: Asim Hussain
    role: Executive Director
    org: Green Software Foundation
    contribution: >
      Championed the Impact Framework as the tool to "decentralise impact measurement and
      democratise data" — framing it as open source for the sustainability measurement world.
  - name: Navveen Balani
    role: Managing Director and Chief Technologist
    org: Accenture
    contribution: >
      Co-chair of the Impact Framework project and Carbon Hack 24 sponsor lead. Co-authored
      the LLM-based emissions estimation approach with Srinivasan Rakhunathan.
  - name: Srinivasan Rakhunathan
    role: Technical Product Manager
    org: Microsoft
    contribution: >
      GSF contributor since 2021. Co-authored the methodology for LLM-powered emissions
      estimation during the software design phase.
  - name: Eleonore Gueit
    role: Sustainable Engineering Advocate
    org: Amadeus
    contribution: >
      Gave voice to the measurement gap at Carbon Hack 24, articulating the "everyone is
      craving measurement" reality that drove IF's development. Led Amadeus's eventual
      contribution of Carmen to the GSF.
  - name: Gadhu Sundaram
    role: VP of Application Services
    org: NTT DATA
    contribution: >
      Advocated making KPI measurement mandatory as part of non-functional requirements,
      positioning IF as the tool to make that standard achievable.
  - name: Bertrand Martin
    role: CEO
    org: Sentry Software
    contribution: >
      Championed the role of standards in making carbon observable and traceable across
      software systems.

quotes:
  - text: >
      More and more clients want to measure their carbon emissions and reduce them.
      The challenges come when assessing what tools they should use and the methodologies
      and data used by these tools. The Impact Framework is one tool that can scale
      measurement across the software industry.
    author: Ioannis Kolaxis
    role: Director of Technology Sustainability Innovation, Accenture
  - text: >
      Once you make measurement of KPIs mandatory, as part of your non-functional
      requirements, and provide an ecosystem of tools and standards, it will lead to
      greater adoption and improved practice in measuring software for sustainability.
    author: Gadhu Sundaram
    role: VP of Application Services, NTT DATA
  - text: >
      Two things need to happen for greater adoption of IF. The first is that regulators
      need to demand that companies report using tools like Impact Framework. The second
      is to apply AI to the framework so it's baked into the tooling.
    author: Daniel Lazaro
    role: Senior Technical Program Manager, AVEVA

relatedSlugs:
  - en/welcoming-carmen-carbon-measurement-engine-as-a-gsf-project
  - en/carbon-hack-24-expanding-the-ecosystem-of-software-measurement
  - en/carbon-hack-24-where-measurement-meets-innovation-and-impact-knows-no-bounds
  - en/emission-calculations-through-large-language-model
  - en/carbonhack22-a-big-leap-in-carbon-aware-computing
  - en/carbonhack22

cta:
  heading: Help build the measurement ecosystem
  body: >
    The Impact Framework was built by organisations who came together through the Green
    Software Foundation. If your teams are struggling to measure software emissions,
    or you've built something that solves a measurement gap, join us.
  ctaText: "Explore the Impact Framework"
  ctaHref: "https://if.greensoftware.foundation"
---

By 2023, the SCI specification had given the world a standard way to express software carbon intensity. But having a formula and being able to use it were two different things. Calculating an SCI score required gathering CPU utilisation data, mapping it to energy curves, finding the right carbon intensity factors for the location, estimating embodied emissions from hardware specifications, and choosing an appropriate functional unit. Each step involved specialist knowledge — energy engineering, hardware lifecycle analysis, regional grid data — that most software teams simply didn't have.

Clients were coming to companies like Accenture, NTT DATA, and BCG X asking for help measuring their software emissions, but even those consulting firms found that the challenges were in "assessing what tools they should use and the methodologies and data used by these tools." As Eleonore Gueit of Amadeus put it at Carbon Hack 24: "The one question we get all the time is, 'How do we measure?' Everyone is craving measurement."

The result was a growing gap between ambition and execution. Organisations wanted to measure. Regulations like the CSRD and EU AI Act were beginning to require it. But the expertise barrier meant that only a handful of well-resourced companies could actually calculate their software's carbon footprint. The measurement revolution promised by the SCI standard was stuck behind a wall of complexity.

> While we all know the importance of lowering our carbon footprint, software usually feels cleaner than it is. Furthermore, one cannot improve without measuring.
> — Toru Shimogaki, NTT DATA
