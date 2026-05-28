---
title: Introducing GSF Reference Implementations
teaserText: A community space for educational, working examples of how to apply GSF specifications and green-software tools—starting with an implementation of SCI for AI for LLM inference.
date: 2026-05-28
published: true
summary: The new GSF Reference Implementations repository is a community space for working examples showing how to apply green software specifications in practice. It starts with SCI for AI applied to LLM inference and invites contributions across tools, patterns, and workloads.
mainImage: GSF-Reference-Implementations-3.png
mainImageAlt: Isometric illustration showing a system of interconnected components — a document, code panel, energy tower, location pin, and chip — with three human figures interacting with the system, representing the community-driven nature of the GSF Reference Implementations repository.
featured: false
tags:
  - standards
  - tools
  - community
authors: []
translators: []
originBlogName: ''
publishedOriginUrl: ''
lang: en
---

When a new specification or tool is published, one of the questions practitioners ask most often is what it looks like to actually apply it. The guidance explains the methodology. A reference implementation shows how it can be applied end-to-end, on a workload or in an engineering context, with the choices and assumptions made clear. 

The new [GSF Reference Implementations](https://github.com/Green-Software-Foundation/reference-implementations) repository is a community-driven, educational collection of working examples that show practitioners how to apply GSF specifications and green-software tools. Each implementation presents one possible approach rather than a specific toolchain. We welcome contributions reflecting other valid approaches to make the repository more diverse and useful. 

Reference implementations in this collection can take many forms. Some might illustrate how to apply a measurement specification (the first entry, [sci-for-ai](https://github.com/Green-Software-Foundation/reference-implementations/tree/main/specifications/sci-for-ai/gsf/llm-inference), shows one way to apply the SCI for AI specification to LLM inference workloads). Some may be developer tools or agent skills, such as a code-review assistant that flags energy-intensive patterns. Others might focus on architectural patterns like carbon-aware scheduling or request batching in working systems. What they have in common is that each one is an end-to-end example that practitioners can try and adapt in their own environments. 

**These reference implementations are intended for educational purposes — demonstrating how to apply a specification in practice. They are not production-ready applications, and practitioners adopting them should evaluate each against their own tooling and methodology requirements.**

# **What Reference Implementations Are For**

Specifications and tools are deliberately abstract. A single methodology needs to apply across cloud providers, hardware generations, model architectures, programming languages, and workload patterns that don’t yet exist. That level of abstraction helps the guidance stay useful as technologies evolve, but it also creates a challenge: how to apply it in practice?

A reference implementation answers that question by walking through a specific example end-to-end. Depending on what it implements, it might show:

- How the inputs to a measurement formula (such as SCI) get sourced and combined in code, what decisions a practitioner has to make along the way, and how those decisions are reflected in the implementation.
- How a developer tool, agent skill, linter, or workflow can encode a green-software approach in a way that engineering teams can use daily. 
- How a pattern such as carbon-aware scheduling, request batching, or efficient caching looks when assembled into a working example.

Different teams and deployment environments will naturally lead to different choices about tooling, measurement providers, and implementation details. Each project documents those choices so practitioners can evaluate them in context.

> _“Standards define the methodology. Reference implementations show what applying that methodology looks like in practice — with the assumptions and trade-offs made transparent. If your team has implemented a GSF specification, we invite you to contribute a reference implementation for the community to build on.” — Navveen Balani, Executive Director, Green Software Foundation_

# **Starting with a Baseline** 

The aim of a reference implementation is not to produce the definitive measurement. The actual numbers will depend on the measurement provider used, the assumptions baked into its model, and the operational context in which the workload runs. Measurement methodologies and tooling will continue to evolve.

The reference implementations help teams establish a baseline for carbon, energy, and cost — and then improve it with each iteration. The first reference implementation shows this with prompt design; in another team's context, the relevant lever might be model selection, region selection, caching, or hardware choice.

Waiting for the perfect measurement before starting leaves teams without a starting point at all. 

# **The First Reference Implementation: SCI for AI on LLM Inference**

The [SCI for AI specification](https://sci-for-ai.greensoftware.foundation/) extends ISO/IEC 21031:2024 with the AI-specific considerations that show up in machine learning and generative workloads. Applying it to LLM inference — a workload class many teams have in production, including chatbots, retrieval-augmented generation systems, and report writers — is a natural starting point for the collection.

The sci-for-ai reference implementation demonstrates:

- **Carbon and energy measurement** for an end-to-end LLM pipeline, using available instrumentation tools to obtain per-call energy figures from the major provider SDKs, with a calibrated fallback when measured values are not available. The implementation is designed so that alternative measurement providers could be substituted by adapting the provider layer.
- **A functional unit appropriate for end-user LLM workloads** — R = 1 request. In this implementation, one request is a workflow of three LLM calls (a Planner, a Collector, and a Writer working together), but from the end user's perspective, it is a single question they asked. SCI is reported per request, so the metric stays aligned with what the user actually experiences.
- **Location-based carbon intensity** for the deployment region. A data center in Iowa has a different grid mix from one in Finland, and the implementation uses regional figures rather than a global average.
- **Operational scale projection** — per-request impact extrapolated to per-day, per-month, and per-year values, so the figures can be expressed in the units used in sustainability reporting frameworks.
- **API cost reported alongside carbon**. Cost is not part of the SCI for AI specification; in practice carbon, energy, and cost are all consequences of the same underlying choices, so reporting them side by side enables engineers to evaluate decisions against sustainability and finance criteria.

Recorded fixtures from real LLM runs are committed to the repository, so the implementation can be tried locally without an API key. The methodology document explains what the measurements do and don’t include, and where the choices made in this implementation diverge from other equally valid approaches.

# **What is in the Repository**

The first reference implementation ships:

- An open-source implementation of the SCI for AI calculation end-to-end, with adapters for several major LLM provider SDKs and a recorded-fixture replay mode that needs no API key.
- A methodology document covering each input (energy, carbon intensity, embodied emissions, and the functional unit choice) with citations and scope statements.
- Committed fixtures of real LLM runs, replayable by anyone who clones the repository, so the example can be explored locally.
- A reporting layer that shows per-request carbon, energy, and cost side by side, projected to operational scale.
- A test suite that runs without network access, so the implementation can be exercised offline.

The code is MIT-licensed, matching the convention of other GSF code repositories.

# **What Comes Next**

This first reference implementation focuses on a measurement specification (SCI for AI) applied to LLM inference. The repository is designed for a much broader range of contributions over time, including:

- Implementations of GSF measurement specifications applied to other workload types — model training, computer vision, recommender systems, batch data processing, and so on.
- Developer tools and agent skills that surface carbon or energy implications in the work engineers do — code reviewers, linters, or developer workflows that flag energy-intensive patterns or carbon considerations during design.
- Implementations of architectural patterns — carbon-aware scheduling, request batching, efficient caching strategies, and other patterns documented in the broader GSF body of work.

We invite practitioners who have worked through any of these to submit their implementations, including alternative approaches to work already covered. Multiple valid approaches to the same problem are a feature of the collection, reflecting different trade-offs or engineering contexts.

As practitioner adoption increases and feedback comes in from the community, reference implementations themselves will also evolve. 

# **Get Involved**

If your team is working on software carbon measurement and would benefit from a worked example to anchor your own implementation, here’s where to start: 

- **Try the reference implementation.** The README has a quick-start that runs against a committed fixture without requiring any API key.
- **Read the methodology.** The [SCI for AI specification](https://sci-for-ai.greensoftware.foundation/) defines the standard; the reference implementation's methodology document shows how the standard maps to one specific type of workload, with the choices made along the way.
- **Share feedback on the repository's issue tracker.** We welcome questions about scope, methodology, alternative measurement approaches, or applicability to your workload.  
- **Contribute a reference implementation.** If your team has implemented a GSF specification, built a developer tool that encodes a green-software approach, or assembled a working example of a sustainability pattern, the repository's README describes the process for contributing it. 

Reference implementations are most valuable when they reflect the diversity of how practitioners work. The methodology provides the standard; the implementations are where the community builds on it. 

_The SCI for AI specification is published by the Green Software Foundation and extends ISO/IEC 21031:2024. Reference implementations in this repository are educational, illustrative examples of how GSF specifications and green software tools can be applied. Different workloads and teams will reasonably make different choices about measurement providers, tooling, and approach; each project documents the choices it made so readers can evaluate them against their own context._
