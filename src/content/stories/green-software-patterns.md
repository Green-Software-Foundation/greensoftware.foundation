---
title: "Engineers know the theory but not what to change in code"
summary: >
  How NTT DATA, Goldman Sachs, AVEVA, and contributors from 11 organisations built the
  Green Software Patterns catalogue — a peer-reviewed library of actionable techniques
  for reducing software emissions, with measurable before-and-after impact.

mainImage: /assets/stories/green-software-patterns.png
problemHeading: The knowledge existed in fragments — but there was no single trusted source of actionable patterns
journeyHeading: From 50 patterns to a 2030 vision for green-by-default development

orgs:
  - name: NTT DATA
    logo: /assets/logos/ntt-data.png
  - name: Goldman Sachs
    logo: /assets/logos/goldman-sachs.png
  - name: AVEVA
    logo: /assets/logos/aveva.svg
  - name: Microsoft
    logo: /assets/logos/microsoft.svg
  - name: Accenture
    logo: /assets/logos/accenture.svg
  - name: Mastercard
    logo: /assets/logos/mastercard.svg
  - name: Shell
    logo: /assets/logos/shell.svg
  - name: Siemens
    logo: /assets/logos/siemens.png
  - name: Globant
    logo: /assets/logos/globant.svg
  - name: CAST
    logo: /assets/logos/cast.png

stats:
  - value: "50"
    label: Patterns published in the initial catalogue covering AI, Cloud, and Web
  - value: "~4%"
    label: Carbon reduction demonstrated from a single pattern in a controlled test
  - value: "11"
    label: Companies in the Design Thinking workshop shaping the catalogue's roadmap
  - value: "2030"
    label: Target year for green-by-default development environments

timeline:
  - date: "2022"
    heading: Green Software Patterns catalogue launched
    body: >
      The Green Software Foundation launched the Green Software Patterns catalogue with
      50 patterns covering AI, Cloud, and Web — each a concrete, actionable technique
      for reducing software emissions. Every pattern went through a review and consensus
      process to ensure relevance and applicability across diverse industries and use cases.
      It was the answer to the question trained engineers kept asking: what do I actually
      change in my code?
    source:
      text: Browse the Green Software Patterns catalogue
      href: https://patterns.greensoftware.foundation

  - date: "2023"
    heading: NTT DATA turns patterns into measurable interventions
    body: >
      NTT DATA Germany built a patterns accelerator — enabling before-and-after SCI
      measurement for each pattern. Franziska Warncke and Denis Angeletta developed a
      comprehensive methodology for serverless applications on AWS, using Lambda, DynamoDB,
      S3, and API Gateway with k6 load testing to generate comparable emission values.
      Their "Reduce transmitted data" pattern test demonstrated approximately 4% carbon
      reduction — proving patterns weren't theoretical advice but quantifiable interventions.
    source:
      text: Read the serverless carbon measurement methodology
      href: /articles/en/calculating-your-carbon-footprint-a-guide-to-measuring-serverless-app-emissions-o/

  - date: Early 2024
    heading: Design Thinking workshop with 11 companies
    body: >
      Representatives from NTT DATA, AVEVA, Mastercard, Goldman Sachs, Microsoft, Shell,
      Accenture, Siemens, Globant, CAST, and re:cinq gathered to shape the catalogue's
      evolution. Facilitated by Peter Wadsworth, the workshop surfaced user-specific
      "jobs to be done" across roles from CTO to architect to developer, revealing that
      each role needed the catalogue differently. Four key insights emerged: the developer
      experience needs to be green by default; patterns must enable informed decision-making;
      measurement must be continuous; and AI is both a key enabler and a domain requiring
      its own carbon accountability.
    source:
      text: Read about the patterns catalogue next chapter
      href: /articles/en/green-software-patterns-catalog-the-next-chapter/

  - date: Ongoing
    heading: Green Software Patterns v2 in development
    body: >
      Led by Franziska Warncke (NTT DATA) and Liya Mathew (Goldman Sachs), v2 will extend
      the catalogue with persona-based and behavioural patterns. The 2030 vision defined
      by the workshop: Green Software Patterns integrated into all major tool environments,
      with automated default application and real-time impact measurement — and AI-driven
      analysis, forecasting, and optimisation throughout the software lifecycle.

featuredQuote:
  text: The developer experience needs to be green by default.
  author: Design Thinking Workshop participants, Green Software Foundation

contributors:
  - name: Franziska Warncke
    role: Project Co-Lead, Green Software Patterns
    org: NTT DATA
    contribution: >
      Drove the Patterns catalogue development and led the serverless SCI measurement
      methodology alongside Denis Angeletta. Now co-leads v2 with Liya Mathew.
  - name: Liya Mathew
    role: Project Co-Lead, Green Software Patterns v2
    org: Goldman Sachs
    contribution: >
      Co-leading the vision and execution of Green Software Patterns v2 with Franziska
      Warncke, bringing Goldman Sachs's software engineering perspective to the roadmap.
  - name: Denis Angeletta
    role: Engineer
    org: NTT DATA
    contribution: >
      Co-developed the serverless carbon footprint methodology and SCI calculator,
      including a novel network emissions approach using VPC Flow Logs and Athena.
  - name: Daniel Lazaro
    role: Senior Technical Program Manager
    org: AVEVA
    contribution: >
      Contributed to the design thinking workshop and the catalogue's strategic evolution,
      representing AVEVA's perspective on patterns for industrial software.
  - name: Gadhu Sundaram
    role: VP of Application Services
    org: NTT DATA
    contribution: >
      Demonstrated how NTT DATA Germany built a patterns accelerator enabling before-and-after
      SCI measurement for each pattern — turning the catalogue into a measurable tool.

quotes:
  - text: >
      If we are to succeed in significantly reducing software's carbon emissions, we need
      a knowledge base of trusted guidelines.
    author: Green Software Patterns Catalogue
    role: The Next Chapter
  - text: >
      While this may seem small, it adds up significantly at scale. With 1 million requests,
      305 kilograms of CO2.
    author: Denis Angeletta & Franziska Warncke
    role: NTT DATA, on serverless carbon measurement
  - text: >
      One of the biggest challenges was finding resources, which were scattered across
      various publications, articles, and videos.
    author: Green Software Patterns Catalogue
    role: The Next Chapter

relatedSlugs:
  - en/green-software-patterns-catalog-the-next-chapter
  - en/calculating-your-carbon-footprint-a-guide-to-measuring-serverless-app-emissions-o
  - en/building-green-software-through-standards-and-collaboration

cta:
  heading: Find the patterns that fit your stack
  body: >
    The Green Software Patterns catalogue is peer-reviewed, open, and growing. Browse
    the existing patterns, test them against your own applications, and contribute
    patterns from your own experience through the GSF.
  note: Browse the catalogue at patterns.greensoftware.foundation
---

By 2022, the Green Software Foundation had trained tens of thousands of engineers through the Green Software Practitioner course. These engineers understood the principles: energy efficiency, carbon awareness, hardware efficiency, measurement. But a consistent question emerged from newly trained practitioners: "OK, I understand the principles — but what do I actually change in my code?"

The gap was real and specific. Early members like AVEVA and Mastercard recognised that "if we are to succeed in significantly reducing software's carbon emissions, we need a knowledge base of trusted guidelines." But when they audited what was available, one of the biggest challenges was finding resources — scattered across publications, articles, and videos — with no single trusted, peer-reviewed source of actionable patterns developers could apply to their codebases.

Measurement and theory were necessary but not sufficient. An engineer could calculate an SCI score but had no catalogue of proven interventions to improve it. The knowledge existed in fragments — individual blog posts, conference talks, internal wikis — but had never been consolidated, validated, and organised for practical use.

> "As a CTO, every time I want to understand how to make my existing software applications greener, I need clear guidance on which applications to decarbonise and the priority patterns to implement — but lack of knowledge about how patterns apply to my applications gets in the way, and that means we end up making poor choices or we do nothing."
> — User persona from the Design Thinking workshop
