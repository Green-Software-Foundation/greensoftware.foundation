# Membership Page Content Spec

**Status:** In Progress
**Created:** 2026-02-25
**Last Updated:** 2026-02-27

## Overview

Content specification for the GSF membership page. Leads with steering-level positioning — "bring us your hardest problem" — with general membership as the accessible entry point below. Ends with a "How it works" section showing the journey from first conversation to active participation.

## Target Persona

Primary: Head of Sustainability or CTO at a Fortune 500, evaluating whether to recommend GSF membership to their board.

**Key insight:** Nobody becomes a member from the website alone. The goal is to get them to request a meeting. The page must make them confident that suggesting this meeting won't reflect badly on them.

## Design Principles

1. Lead with steering-level value proposition
2. Frame membership as problem-solving, not access to tools
3. Show proof through member stories, not feature lists
4. General membership is the "start here" option, not the lesser option
5. Single CTA: "Discuss your challenges with us"

## Page Structure

### Section 1: Hero

**Component:** `Hero`

**Headline:** "You've been handed a sustainability mandate with no playbook"

**Subheadline:** "GSF membership gives you the peer network, frameworks, and foundation resources to turn that mandate into measurable results."

**CTA:** "Discuss your challenges with us"

---

### Section 2: The Room

**Component:** `LogoMarquee` + `TextBlock`

**Purpose:** Show who's already here and at what calibre.

**Body:** "Our steering members include [names]. These organisations don't just use our standards — they shape them. They bring their hardest problems to the foundation, and together we build solutions that benefit the entire industry."

---

### Section 3: Steering Proposition

**Component:** `TextBlock` + `BenefitsList`

**Headline:** "Bring us your hardest problem"

**Body:** "Steering membership isn't a subscription — it's a partnership. You bring the challenge your organisation is facing. We put the foundation's resources, expertise, and member network behind solving it. Bespoke."

**What steering members get:**

- **A bespoke plan for your biggest problem** — we combine assemblies, policy work, standards proposals, networking events, and educational material into a tailored offering that addresses your specific challenge
- **Guaranteed seat on the governing board** — direct influence on the foundation's direction and priorities
- **Foundation resources dedicated to your strategic priorities** — staff time, research capacity, and ecosystem access focused on what matters to you
- **Quarterly executive deep dives** — high-bandwidth conversations with the GSF leadership team to surface challenges, discuss engagement, and refine your roadmap
- **Guaranteed seats on all committees and assemblies** — you'll never be shut out of the room where decisions are made


---

### Section 4: Proof — Member Stories

**Component:** `TextWithImage` (alternating left/right) + link at end

**Story 1 — Amadeus (Measurement)**
"Amadeus needed their engineering teams to own carbon reduction — not just report on it. Using SCI, their CTO set a target: reduce software carbon intensity by 30% across every product. Engineers could finally act on a number that meant something to them."

**Story 2 — HSBC (Scaling)**
"HSBC had sustainability pilots running in IT but couldn't scale them across procurement, operations, and business units. They co-chaired the SOFT framework to build the playbook they didn't have — now in pilot across the organisation."

**Story 3 — [Member] (AI)**
"As AI workloads grew, [Member] had no standardised way to measure their carbon impact. They helped develop SCI for AI — giving them a framework to compare architectures and make infrastructure decisions with carbon data, not guesswork."

*[Placeholder stories — to be replaced with sourced case studies]*

**Link:** "View more member stories →" to /impact/ (success stories)

---

### Section 5: General Membership

**Component:** `TextBlock` + `FeatureGrid`

**Headline:** "Start with access to everything our members have built"

**Body:** "General membership gives you immediate access to the standards, training, and community that 130,000+ practitioners already use."

**Grid items:**

- **Attend project and working group meetings** — participate in the development of standards and frameworks
- **Propose projects** — bring ideas to the foundation for consideration
- **Access to cohort-based training** — join structured learning programmes with peers
- **In-house training licensing** — integrate GSF courses into your own internal training platforms
- **Participate in events** — Summit, Carbon Hack, and other member events
- **Ability to chair working groups** — lead initiatives (general members can chair, steering members can co-chair)

---

### Section 6: How It Works

**Component:** `Timeline` or `FeatureGrid` (numbered steps)

**Headline:** "From first conversation to active member"

**Steps:**

1. **Book a meeting** — Meet with our Head of Partnerships to discuss your sustainability challenges and objectives

2. **We understand your problem** — We extract the core challenges, connect the dots between your needs and existing projects, and identify members who might want to collaborate

3. **We build a bespoke proposal** — Leveraging our ecosystem — projects, standards, assemblies, policy work, educational resources — we create a tailored plan that addresses your specific challenge. A win-win for you and the foundation.

4. **We present it back to you** — Review the proposal together, refine it, and agree on the path forward

5. **Application and approval** — Complete the formal application. For steering-level membership, existing steering members approve new members — maintaining the calibre and exclusivity of the group

6. **Onboarding** — An onboarding call with the Director of Operations. We onboard your key staff, walk through our systems, show how meetings work, add you to mailing lists, and connect you to the community

7. **Quarterly touchpoints** — Regular check-ins with the Director of Operations to discuss progress, surface new challenges, and ensure you're getting value from your membership

---

### Section 7: CTA

**Component:** `GetStartedCTA`

**Headline:** "Every member's journey starts with a conversation"

**Body:** "Tell us what you're trying to solve. We'll tell you how membership can help."

**CTA Button:** "Discuss your challenges with us"

---

## Open Questions

- Actual steering member stories to replace placeholders
- Pricing/tier information — include on this page or separate?
- Whether the "How it works" steps need different copy for steering vs general (currently written for steering flow)
- Exact title for the person they meet with (Head of Partnerships?)
