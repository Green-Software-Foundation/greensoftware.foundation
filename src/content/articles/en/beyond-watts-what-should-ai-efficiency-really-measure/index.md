---
title: 'Beyond Watts: What Should AI Efficiency Really Measure?'
teaserText: Notes from the Executive Director, Green Software Foundation
date: 2026-08-25
published: true
summary: In our ED series, Navveen Balani argues AI efficiency should be measured by the value it delivers. He examines how GSF specifications such as SCI, SEI, and SWI use functional units to connect compute to the outcomes we care about.
mainImage: Beyond-Watts.png
mainImageAlt: 'Illustration for "Beyond Watts: What Should AI Efficiency Really Measure?" showing a figure struggling to carry a large letter "W" (watts) across a row of server racks on the left, while on the right a smaller figure rides in a hot-air balloon basket lifted by a giant letter "R" (rate/functional unit), with balloons labeled with energy, cost, data-transfer, and water icons. Green Software Foundation logo in the bottom left.'
featured: false
tags:
  - standards
  - efficiency
  - measurement
authors: []
translators: []
originBlogName: ''
publishedOriginUrl: ''
lang: en
---

The resource tells us what AI consumed; the functional unit tells us what that consumption achieved. That difference is becoming more important as AI efficiency moves beyond processor performance to understand the value delivered for the energy, carbon, water, and infrastructure required to run increasingly capable systems.

We already think about AI through rates. We measure tokens per second, operations per watt, inferences per dollar, and the amount of computation that can fit within a fixed energy budget. These metrics connect consumption with production. But as AI's role evolves from generating outputs to completing tasks and workflows, I think the denominator needs to shift with it too.

This brings the focus from compute to outcomes and ultimately, delivered value. The mechanism that allows us to progress is already familiar within the Green Software Foundation: **the functional unit.**

## **Why the Rate Matters**

A total tells us how much a system consumed. A rate tells us how efficiently it delivered the task or outcome we care about.

That principle sits at the heart of[ Software Carbon Intensity (SCI)](https://greensoftware.foundation/standards/sci/), standardized as[ ISO/IEC 21031:2024](https://www.iso.org/standard/86612.html). SCI expresses carbon emissions as a rate relative to a functional unit (R):

**SCI = (O + M) per R**

where operational and embodied emissions are related to the work performed by the software.

[Software Energy Intensity (SEI)](https://greensoftware.foundation/standards/sei/), currently under development at the Foundation, takes a deliberately narrower view:

**SEI = E per R**

By focusing on energy, SEI gives teams a direct measure of how much electricity software requires for a functional unit, without the carbon-intensity and embodied-emissions components included in SCI.

[Software Water Intensity (SWI)](https://greensoftware.foundation/standards/swi/), also under development, applies the same rate-based approach to water consumption relative to a functional unit.

The numerator changes across carbon, energy, and water. R is what connects each of them to the purpose of the software.

## **When More AI Activity Does Not Achieve More**

Consider two AI systems given the same task.

The first understands the request, performs the necessary reasoning and tool calls, and returns the correct result. The second produces an incomplete answer, requires clarification, tries again, invokes additional tools, expands its context, performs more model calls, and eventually reaches the same result.

Measured in tokens, the second system did more processing. It made more model calls and consumed more computation. But from the user's perspective, both systems completed one task.

The distinction matters even more with agentic AI. More tokens can represent deeper reasoning, but they can also represent verbosity, poor routing, or recovery from an earlier mistake. Looking only at activity does not tell us whether that extra work improved the outcome or simply reflected inefficiency.

If the functional unit becomes one completed task at an agreed quality level, we can measure energy, carbon, or water against that task rather than against the volume of activity generated.

The resource being measured has not changed. The denominator has moved closer to what the AI system was expected to accomplish. That is the transition from measuring compute efficiency toward measuring task efficiency.

## **From Compute to Value**

Think about a customer-service AI system. At the infrastructure layer, a team may want to understand energy per thousand tokens because that can help compare models and serving configurations. At the platform layer, energy per inference may be more useful. For an agentic application, a better functional unit could be a completed workflow, allowing the team to measure energy per workflow.

The organization operating the service may care more about energy per successfully resolved customer case. At the business level, the question changes again: did that resolution reduce handling time, avoid an escalation, improve the customer outcome, or lower the cost of delivering the service?

The progression becomes:

**Compute → Output → Task Performance → Outcome → Value**

The pattern will look different by domain. A financial institution might focus on a resolved fraud investigation. A healthcare application might use a successfully processed study or another clinically appropriate outcome. And a software engineering agent could use a completed change that passes agreed tests.

The lower-level metrics do not disappear as we move toward measuring outcomes and value. They remain necessary for understanding where efficiency gains come from. The functional unit gives us a way to connect these layers rather than forcing them into one denominator.

This only works if the functional unit is clearly defined. Otherwise, the outcome may appear to improve simply because the definition of success has changed, not because the system has become more efficient. The functional unit should be measurable, consistently applied, and disclosed alongside the result. **A rate without its functional unit is incomplete.**

## **Applying the Functional Unit to AI** 

We're not starting from a blank page. The ratified[ SCI for AI](https://greensoftware.foundation/standards/sci-ai/) specification extends the SCI methodology specifically for AI systems and introduces AI-native functional units for different types of systems and lifecycle boundaries.

Depending on what is being measured, functional units can include tokens, images, video duration, and other units relevant to the AI system. An important principle is that there isn't one universal functional unit for AI. The appropriate denominator reflects the system and the question being asked.

For an infrastructure or model-level comparison, tokens, FLOPs, parameters, or inferences may be exactly the right units. For an agentic system, using a workflow execution as the denominator brings the measure closer to the actual task the system was asked to perform.

## **One Functional Unit, Three Environmental Views**

Together, SCI, SEI, and SWI create a stronger measurement framework.

Imagine an AI agent whose functional unit is one completed task meeting an agreed quality threshold. The same denominator can now support three different environmental views:

- **SEI:** Energy per completed task
- **SCI / SCI for AI:** Carbon per completed task
- **SWI:** Water per completed task

The value of this model is not that energy, carbon, and water impacts become interchangeable, but that each can be related to the same outcome.

That common reference point allows an organization to change its model, architecture, hardware, or region and ask a simple question: are we delivering the same outcome with lower energy, carbon, or water intensity?

This also connects naturally to the per-watt discussion. Per-watt thinking asks how much capability we can obtain from an increasingly constrained energy supply. The functional-unit approach extends that question by asking what the computation ultimately delivers.

> The shift is therefore not simply from one efficiency metric to another. It is from measuring the efficiency of producing computation toward measuring the efficiency of accomplishing something with it.

## **Beyond Task Completion**

Completing a task is not necessarily the end of the measurement chain. An AI system can complete tasks successfully without producing equivalent value. A relatively small workload may support a decision with significant economic or societal impact, while a much larger workload may automate activity of limited value.

As the functional unit aligns with outcomes, we can begin asking:

**Energy per unit of value delivered**

or, viewed from the opposite direction:

**Value per unit of energy**

The same thinking can extend to carbon and water:

- **Value per unit of carbon**
- **Value per unit of water**

At this level, the measurement also starts to connect value with the broader system required to deliver it. For carbon, SCI considers both operational and embodied emissions, allowing the functional unit to relate an outcome not only to the emissions generated while the AI system is running, but also to the embodied impact of the infrastructure supporting it.

A business outcome is rarely produced by the model alone. It is delivered through a stack that can include hardware, data, software and other elements. The functional unit helps connect the outcome we care about to the environmental impact of producing it.

This gives us a way to connect value back through the stack of resources and systems that made that value possible.

I'd consider these decision-support measures, not replacements for environmental reduction. A high-value workload does not make its energy, carbon, or water impact disappear, and value should not justify unlimited consumption. **Absolute reduction still matters.**

The question is whether the resources we do consume are being directed toward outcomes that matter, and whether we can produce those outcomes with progressively lower impact.

This connects two conversations that are often separated: **how much AI consumes and what AI actually accomplishes.**

## **Measuring What AI Accomplishes**

AI efficiency will continue to depend on factors such as better hardware, more efficient models, and cleaner energy. While per-watt improvement remains an important part of that work, as AI moves from generating responses to executing workflows and taking responsibility for larger tasks, the way we measure and describe efficiency needs to evolve, too.

The functional unit provides a way to do that while building on the technical measurements we already rely on. SCI for AI applies this approach to AI emissions. SEI extends rate-based measurement directly to energy, while SWI creates the opportunity to bring water into the same measurement approach.

The future of AI efficiency may therefore be less about choosing between watts, task performance, and value, and more about understanding the relationship between them.

> The resource tells us what AI consumed. The functional unit tells us what that consumption achieved. The rate connects the two.

## **Join the conversation**

Across the Green Software Foundation community, we explore how measurement can stay technically rigorous while evolving to reflect the outcomes software and AI deliver.

Find out how to get involved at[ greensoftware.foundation/membership](https://greensoftware.foundation/membership). I am always glad to make time for a direct conversation; you can reach me at navveen@greensoftware.foundation.

_These notes explore how rate-based measurement and functional units could evolve as AI shifts from compute toward task performance, outcomes, and value. They are intended to spark discussion and do not represent a formal Green Software Foundation position._
