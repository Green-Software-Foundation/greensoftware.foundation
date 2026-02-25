# Membership Page Content Spec

**Status:** In Progress
**Created:** 2026-02-25
**Last Updated:** 2026-02-25

## Overview

Content specification for the GSF membership page. Leads with steering-level positioning — "bring us your hardest problem" — with general membership as the accessible entry point below.

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
**Component:** `TextBlock`

**Headline:** "Bring us your hardest problem"

**Body:** "Steering membership isn't a subscription — it's a partnership. You bring the challenge your organisation is facing. We put the foundation's resources, expertise, and member network behind solving it. Bespoke."

**Supporting points (short list):**
- Direct influence on standards development
- Co-chair working groups alongside peers at Microsoft, HSBC, Google
- Foundation resources dedicated to your strategic priorities
- Shape the solutions before your competitors adopt them

---

### Section 4: Proof — Member Stories
**Component:** `SuccessStoriesCarousel` or `TextWithImage` (repeated)

**Story 1 — Amadeus (Measurement)**
"Amadeus needed their engineering teams to own carbon reduction — not just report on it. Using SCI, their CTO set a target: reduce software carbon intensity by 30% across every product. Engineers could finally act on a number that meant something to them."

**Story 2 — HSBC (Scaling)**
"HSBC had sustainability pilots running in IT but couldn't scale them across procurement, operations, and business units. They co-chaired the SOFT framework to build the playbook they didn't have — now in pilot across the organisation."

**Story 3 — [Member] (AI)**
"As AI workloads grew, [Member] had no standardised way to measure their carbon impact. They helped develop SCI for AI — giving them a framework to compare architectures and make infrastructure decisions with carbon data, not guesswork."

*[Placeholder stories — to be replaced with sourced case studies]*

---

### Section 5: General Membership
**Component:** `TextBlock` + `FeatureGrid`

**Headline:** "Start with access to everything our members have built"

**Body:** "Not ready for steering? General membership gives you immediate access to the standards, training, and community that 130,000+ practitioners already use."

**Grid items:**
- Green Software Practitioner Course
- SCI measurement framework
- SOFT implementation playbook
- Green Software Patterns catalogue
- Community & working groups
- Events, summits, and hackathons

---

### Section 6: CTA
**Component:** `GetStartedCTA`

**Headline:** "Every member's journey starts with a conversation"

**Body:** "Tell us what you're trying to solve. We'll tell you how membership can help."

**CTA Button:** "Discuss your challenges with us"

---

## Open Questions

- Actual steering member stories to replace placeholders
- Pricing/tier information — include on this page or separate?
- New member journey/onboarding content — include here or in the playbook?
- Whether to include a "How it works" section (apply → conversation → onboarding → first working group)
