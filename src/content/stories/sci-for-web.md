---
title: "No standard exists for measuring a website's carbon"
summary: >
  How Chris Adams of the Green Web Foundation, Emma Horrell of the University of Edinburgh,
  and 14 assembly members from across the industry are building SCI for Web — a standard
  for measuring website carbon intensity that covers the full delivery chain: servers,
  networks, third-party services, and end-user devices.

mainImage: /assets/stories/sci-for-web.jpg
problemHeading: Web emissions tools existed — but results weren't comparable, boundaries weren't defined, and third parties were invisible
journeyHeading: From a 13-tonne CO₂ case study to a formal W3C collaboration and consensus design document

orgs:
  - name: Green Web Foundation
    logo: /assets/logos/the-green-web-foundation.png
  - name: Google
    logo: /assets/logos/google.png
  - name: Accenture
    logo: /assets/logos/accenture.svg
  - name: Microsoft
    logo: /assets/logos/microsoft.svg
  - name: WattTime
    logo: /assets/logos/watttime.png
  - name: HSBC
    logo: /assets/logos/hsbc.svg
  - name: NTT DATA
    logo: /assets/logos/ntt-data.png
  - name: Globant
    logo: /assets/logos/globant.svg
  - name: Electricity Maps
    logo: /assets/logos/electricity-maps.svg
  - name: ClimateAction.tech
    logo: /assets/logos/climateaction.tech.png

stats:
  - value: "13 tonnes"
    label: CO₂ saved per year at the University of Edinburgh from homepage image optimisation alone
  - value: "14"
    label: Assembly members from 15 organisations — tech giants, data providers, academics, and practitioners
  - value: W3C
    label: Formal collaboration with the world's web standards body — bridging two communities for the first time

timeline:
  - date: 2024–2025
    heading: The web measurement gap becomes visible
    body: >
      As the SCI specification matured into ISO/IEC 21031:2024, GSF members recognised that
      a domain-specific, SCI-aligned approach was needed for web applications. The parent SCI
      standard was powerful but general. Web applications had unique characteristics — browser
      rendering, third-party dependencies, content delivery networks, user device diversity —
      that required specific guidance on boundaries and functional units. Tools like CO2.js
      and the Sustainable Web Design Model had made web emissions visible, but results weren't
      comparable and organisations couldn't validate reduction claims.
    source:
      text: Beyond single-dimensional metrics for digital sustainability
      href: /articles/beyond-single-dimensional-metrics-for-digital-sustainability/

  - date: September 2025
    heading: W3C and GSF announce formal collaboration
    body: >
      Chris Adams of the Green Web Foundation, active in both communities, brokered a
      strategic collaboration between GSF and W3C. GSF would manage the SCI for Web
      specification; W3C's Sustainable Web Interest Group would provide feedback. The
      collaboration included joint knowledge sharing, development of training materials,
      and Impact Framework templates. As the announcement stated: "Almost all of us use the
      web daily, and like everything else, we need to make using it more sustainable."
    source:
      text: Read about the GSF and W3C collaboration
      href: /articles/the-green-software-foundation-and-world-wide-web-consortium-w3c-collaborate-to-ad/

  - date: September 2025
    heading: University of Edinburgh joins GSF
    body: >
      Emma Horrell, User Experience Manager at the University of Edinburgh, had led an
      investigation into the university's digital estate — numerous websites each managed
      by different teams. They found image formats were "unnecessarily heavy," and through
      changes to homepage images alone, achieved 13 tonnes of CO₂ reduction per year. Their
      experience demonstrated that sustainable digital transformation is "fundamentally about
      behavioural change, not just technical solutions." The university joined GSF to
      contribute their ground-level implementation experience to SCI for Web.
    source:
      text: Meet Emma Horrell of the University of Edinburgh
      href: /articles/pioneering-digital-sustainability-in-higher-education-meet-emma-horrell-of-the-un/

  - date: September–November 2025
    heading: AI-assisted consensus assembly
    body: >
      Fourteen GSF members piloted an AI-assisted assembly process. Participants answered
      structured questions about measurement accuracy and adoption complexity. An LLM
      synthesised responses into draft content. The group reviewed and refined through
      multiple rounds. In contentious areas, participants revised until all objections were
      resolved. In ten weeks, the assembly moved from a blank page to a consensus design
      document — resolving the core tension: "A specification that is technically accurate
      but unused won't serve its purpose, and a widely used metric that lacks credibility
      also won't serve the purpose."
    source:
      text: About the SCI for Web assembly
      href: /assemblies/sci-for-web/

  - date: February 2026
    heading: Design document published
    body: >
      The full consensus document was published. Scope: web applications delivering value
      through browser interfaces via HTTP/HTTPS, covering static sites, SPAs, server-rendered
      apps, e-commerce, and streaming services. Third-party services — analytics, advertising,
      CDNs, authentication — must be included within the measurement boundary because they
      consume energy on both servers and client devices.
    source:
      text: Read the SCI for Web assembly report
      href: /articles/sci-web-assembly-report/

  - date: Q1 2026
    heading: SCI for Web specification accepted and launched
    body: >
      The SCI for Web specification entered active development under the Software Standards
      Working Group, led by Chris Adams. Built on the consensus design document, the
      specification will define how to measure the carbon intensity of web applications
      across the full delivery chain.
    source:
      text: Learn about the SCI for Web standard
      href: /standards/sci-web/

featuredQuote:
  text: >
    Sustainable digital transformation is fundamentally about behavioural change, not just
    technical solutions. When colleagues understand that unused content with heavy PDFs and
    videos has a real environmental impact, they make more thoughtful decisions about what
    they create and maintain.
  author: Emma Horrell, User Experience Manager, University of Edinburgh

contributors:
  - name: Chris Adams
    role: Director of Technology and Policy
    org: Green Web Foundation
    contribution: >
      Leads the SCI for Web project and brokered the W3C collaboration as an active member
      of both communities. Participated in the AI-assisted assembly as one of the fourteen
      expert members.
  - name: Emma Horrell
    role: User Experience Manager
    org: University of Edinburgh
    contribution: >
      Brought practical implementation experience from two years of ground-level web
      sustainability work, including the 13-tonne CO₂ case study, to inform the standard's
      real-world applicability.
  - name: Daniel Schien
    role: Academic
    org: University of Bristol
    contribution: >
      Brought academic rigour on web measurement methodology, drawing on published research
      into the environmental impact of internet infrastructure.

quotes:
  - text: >
      Almost all of us use the web daily, and like everything else, we need to make using
      it more sustainable. By defining a standard for measuring website emissions, we make
      it easier for people to request greener digital services, for responsible technologists
      to build them, and to reach the fossil-free internet we all need.
    author: GSF–W3C collaboration announcement
    role: September 2025
  - text: >
      Digital sustainability is a relatively new area for us. We faced uncertainty about
      whether our approaches were correct, which experts to engage, and where to find
      guidance. The GSF provides the expertise and community we needed.
    author: Emma Horrell
    role: User Experience Manager, University of Edinburgh

relatedSlugs:
  - en/designing-sci-web-what-we-agreed-and-what-comes-next
  - en/the-green-software-foundation-and-world-wide-web-consortium-w3c-collaborate-to-ad
  - en/pioneering-digital-sustainability-in-higher-education-meet-emma-horrell-of-the-un

cta:
  heading: Get involved in SCI for Web
  body: >
    GSF members can become a project co-chair to support Chris Adams in leading the
    specification work, or join the Software Standards Working Group to help through
    draft review, implementation testing, and technical feedback.
  note: Contact sci-for-web@greensoftware.foundation to get started
---

Almost everyone uses the web daily. Yet no standard existed for measuring a website's carbon intensity. Tools like the Sustainable Web Design Model, CO2.js, and the W3C Web Sustainability Guidelines had made web emissions visible and established foundational methodologies that thousands of practitioners used. But as organisations moved from awareness to accountability, they needed something more rigorous: a measurement approach with clear boundaries, carbon per functional unit rather than totals, and disclosed methodology so results were comparable and defensible.

The fragmentation ran deep. Modern web applications depend extensively on third-party services — analytics, advertising, CDNs, authentication — which consume energy on both servers and client devices. Without a standard that defined what to include and how to attribute emissions across this chain, any measurement was partial. Organisations could not compare results, validate reduction claims, or make informed decisions about where to invest optimisation effort.

The University of Edinburgh discovered the scale of the opportunity first-hand: through changes to homepage images alone, Emma Horrell and her team achieved 13 tonnes of CO₂ reduction per year. But they had no systematic framework to measure the rest — or to know if their approaches were right.
