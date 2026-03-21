---
title: "We can't shift workloads to clean energy"
summary: >
  How Microsoft, UBS, Avanade, NTT DATA, and partners built the Carbon Aware SDK —
  the first open-source toolkit for carbon-aware computing, now deployed on production
  banking systems and graduated from the Green Software Foundation.

mainImage: /assets/stories/carbon-aware-sdk.png
problemHeading: The grid was cleaner at certain times — but software had no way to know
journeyHeading: From concept to the first graduated GSF project

orgs:
  - name: Microsoft
  - name: UBS
  - name: NTT DATA
  - name: Energy Web
  - name: Avanade

stats:
  - value: "13–24%"
    label: Carbon reductions demonstrated at CarbonHack22
  - value: "395"
    label: Participants at CarbonHack22 across 51 projects
  - value: "40"
    label: Programming languages supported via client library
  - value: "1st"
    label: GSF project to achieve Graduated status

timeline:
  - date: "2021"
    heading: The concept emerges
    body: >
      Members of the GSF Open Source Working Group identified carbon-aware computing as
      a quick win. Vaughan Knight at Microsoft launched the Carbon Aware SDK — starting
      with command-line tooling and a .NET library.
    source:
      text: About the Carbon Aware SDK project
      href: https://directory.greensoftware.foundation/projects/carbon-aware-sdk/

  - date: 2021–2022
    heading: From library to enterprise API
    body: >
      Early conversations revealed companies needed not just a library but a centralised
      web API. By mid-2022, the SDK had a hosted API and a client library available in
      40 different programming languages.
    source:
      text: Carbon Aware SDK on GitHub
      href: https://github.com/Green-Software-Foundation/carbon-aware-sdk

  - date: Oct–Nov 2022
    heading: CarbonHack22 accelerates adoption
    body: >
      The GSF ran its first-ever hackathon, coinciding with COP27. 395 participants
      submitted 51 projects built on the SDK. First place, Lowcarb, achieved 13% carbon
      reductions in federated machine learning. Second place, Zeus, showed 24% reductions
      in deep neural network training. Prize money totalled USD 100,000.
    source:
      text: Read about CarbonHack22
      href: /articles/carbonhack22-a-big-leap-in-carbon-aware-computing/

  - date: January 2023
    heading: UBS deploys on production banking systems
    body: >
      UBS and Microsoft integrated the Carbon Aware SDK into UBS's Advanced Compute
      Quantum Analytics risk platform, using WattTime data to time-shift workloads.
      The first enterprise-scale deployment of carbon-aware computing on a production
      banking system.
    source:
      text: Read the UBS carbon-aware computing whitepaper
      href: /articles/carbon-aware-computing-whitepaper-how-ubs-succeeded-in-measuring-and-reducing-car/

  - date: 2023–2024
    heading: Broader adoption and maturation
    body: >
      Vesta used the SDK to shift wind turbine simulations to cleaner windows. NTT DATA
      and NTT contributed the .NET 8 upgrade (v1.4), adding Prometheus and Grafana
      integration and Kubernetes-level carbon monitoring dashboards.
    source:
      text: Read about the .NET 8 upgrade
      href: /articles/upgrading-to-net-8-inside-the-carbon-aware-sdk-v1-4/

  - date: April 2024
    heading: First GSF project to graduate
    body: >
      The Carbon Aware SDK became the first software project in the Green Software
      Foundation's history to achieve Graduated status, meeting all acceptance criteria
      including public release, clear documentation, and evidence of usefulness.
    source:
      text: Read about the SDK graduation
      href: /articles/celebrating-the-graduation-of-the-carbon-aware-sdk/

  - date: October 2024
    heading: Decentralised carbon-aware computing
    body: >
      Energy Web delivered the world's first decentralised computation nomination system
      based on sustainability factors using the Carbon Aware SDK — extending carbon-aware
      computing into blockchain and Web3.
    source:
      text: Meet Mani Hagh Sefat of Energy Web
      href: /articles/making-decentralized-systems-more-sustainable-meet-mani-hagh-sefat-of-energy-web/

featuredQuote:
  text: Carbon aware software does more when energy is clean and less when it's dirty.
  author: Green Software Foundation

contributors:
  - name: Vaughan Knight
    role: Principal Engineering Manager
    org: Microsoft
    contribution: Launched and led the Carbon Aware SDK project from inception through graduation.
  - name: Kin Chiu
    role: Executive Director and Sustainable Technology Lead
    org: UBS
    contribution: Drove UBS's strategic cloud initiative and led the Sustainable Technology Guild that connected UBS to the GSF.
  - name: Paul McEwen
    role: Global Head of Technology Services
    org: UBS
    contribution: Championed the first enterprise-scale carbon-aware computing deployment on a production banking platform.
  - name: Chris Lloyd-Jones
    role: Head of Open Technologies
    org: Avanade
    contribution: Contributed to SDK development and CarbonHack22 sponsorship.
  - name: Mani Hagh Sefat
    role: CTO and Board Member
    org: Energy Web
    contribution: Delivered the world's first decentralised carbon-aware computation nomination system.
  - name: Elisabeth Brinton
    role: Corporate Vice President, Sustainability
    org: Microsoft
    contribution: Executive sponsor connecting Microsoft's sustainability commitments to GSF collaboration.
  - name: Takuya Iwatsuka
    role: Engineer
    org: NTT DATA
    contribution: Led the .NET 8 upgrade for Carbon Aware SDK v1.4.
  - name: Damien Roux
    role: Engineer
    org: NTT DATA
    contribution: Contributed to the .NET 8 upgrade and ongoing Carbon Aware SDK maintenance.
  - name: Yasumasa Suenaga
    role: Engineer
    org: NTT DATA
    contribution: Contributed to the .NET 8 upgrade engineering work.

quotes:
  - text: >
      The way we design and build our applications has a direct relationship to how much
      carbon they emit. With a better understanding of the impact our application designs
      have on the environment, we can make choices which have a more positive impact on
      the planet.
    author: Paul McEwen
    role: Global Head of Technology Services, UBS
  - text: >
      Little awareness and slow adoption of greener software practices are the key
      obstacles that I see. It's human nature to take the path of least resistance,
      especially when it's hard to see and feel the immediate impact of your contributions.
    author: Kin Chiu
    role: Executive Director and Sustainable Technology Lead, UBS
  - text: >
      At Microsoft, we are committed to helping organizations reach their sustainability
      goals. Carbon-aware computing advances the measurement and reduction of carbon
      emissions associated with software technology at a global scale.
    author: Elisabeth Brinton
    role: Corporate Vice President, Sustainability, Microsoft

relatedSlugs:
  - en/celebrating-the-graduation-of-the-carbon-aware-sdk
  - en/carbonhack22-a-big-leap-in-carbon-aware-computing
  - en/carbon-aware-computing-whitepaper-how-ubs-succeeded-in-measuring-and-reducing-car
  - en/upgrading-to-net-8-inside-the-carbon-aware-sdk-v1-4
  - en/making-decentralized-systems-more-sustainable-meet-mani-hagh-sefat-of-energy-web

cta:
  heading: Be part of the next story
  body: >
    The Carbon Aware SDK was built by organisations who came together through the Green
    Software Foundation. Join us to collaborate on the standards, tools, and training
    that reduce software's environmental impact.
  ctaText: "Explore the Carbon Aware SDK"
  ctaHref: "https://carbon-aware-sdk.greensoftware.foundation"
---

In 2021, organisations across the Green Software Foundation knew something frustrating: the electricity grid was cleaner at certain times and in certain places, but their software had no way to respond to that signal. Workloads ran on dirty power even when clean power was available hours later or in a neighbouring region.

Every organisation faced the same fragmented landscape. Carbon data came from different providers — WattTime, Electricity Maps — in different formats, with different access methods. Building a carbon-aware application meant each company reinventing the same integration work.

The need was clear: a shared, open-source toolkit that could centralise the logic, provide a common interface to multiple carbon data sources, and make it easy for any developer to build software that does more when the electricity is clean and less when it is dirty.

> "Little awareness and slow adoption of greener software practices are the key obstacles that I see. It's human nature to take the path of least resistance, especially when it's hard to see and feel the immediate impact of your contributions."
> — Kin Chiu, Executive Director and Sustainable Technology Lead, UBS
