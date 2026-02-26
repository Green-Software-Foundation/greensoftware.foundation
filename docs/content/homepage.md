# Homepage Content Spec

**Status:** In Progress
**Created:** 2026-02-25
**Last Updated:** 2026-02-26

## Overview

Content specification for the GSF homepage, designed around a hero's journey narrative where the visitor is the hero, their sustainability challenges are the villain, and GSF is the guide that shows them they don't have to solve it alone.

## Target Persona

Head of Sustainability at a Fortune 500 organisation, and their board members.

**Primary fear:** Recommending GSF membership reflects badly on them or the share price.
**Primary need:** Real, repeatable results — not new tools.

## Design Principles

1. The homepage is about THEM, not us
2. Must pass the 4-second test: "What do they do?" and "Am I the right person?"
3. Every section frames a problem first, then reveals the solution
4. By the end of the scroll, the reader should be imagining what GSF could solve for THEM
5. Single CTA throughout: "Discuss your challenges with us"
6. Look, feel, and language must meet Fortune 500 board-level expectations

## Page Structure

### Section 1: Hero
**Component:** `Hero`

**Headline:** "The sustainability challenges you're solving alone? Your peers are solving them together."

**Subheadline:** "The Green Software Foundation is where member organisations — from tech giants to financial institutions — collaborate on the standards, strategies, and solutions that none of them could build alone."

**CTA:** "Discuss your challenges with us"

---

### Section 2: Logo Marquee
**Component:** `LogoMarquee`

Scrolling member logos. Grayscale, colour on hover. Subtle, not too large. Must use official logos per contractual requirements.

**Purpose:** Instant credibility. "These are the people in the room."

---

### Section 3: GSF Context
**Component:** `TextBlock` + `TestimonialQuote`

**Body (3 sentences max):**
"Every organisation's sustainability challenges feel unique. They rarely are. Our members identify the problems affecting the entire industry — then solve them together. The standards, frameworks, and strategies below exist because a member brought us a problem."

**Chair Quote:**
"The Green Software Foundation provides the neutral ground where peers and competitors collaborate on efficiency standards for the benefit of everyone."
— [Chair Name], [Title], [Company]

---

### Sections 4–8: Problem-Solution Blocks

**Section Header**
**Component:** `TextBlock` (centred)

**Title:** "You're not the first to face these challenges"

**Subtitle:** "Our members identified the biggest problems in software sustainability — then solved them together."

---

### Section 4: Problem-Solution #1 — Organisational Upskilling

**Component:** `TextWithImage` (text left, image right)

**Problem Title:** "Your engineers can't deliver on your climate commitments"

**Problem (2-3 sentences):** IT and infrastructure represent a growing portion of your energy footprint. Your engineering teams lack the specialised training to build in the efficiencies leadership requires. Without a common framework, teams make inconsistent decisions — unable to distinguish genuine emissions reduction from well-intentioned guesswork.

**Solution:** The Green Software Practitioner Course — your engineering teams equipped to turn board-level strategy into technical reality. Developed with Microsoft, Accenture, Thoughtworks, and GitHub.

**Social proof:** "Completed by over 130,000 developers globally"

**Link:** "Learn more →" to /education/ or dedicated SPC page

---

### Section 5: Problem-Solution #2 — Measurement & Targets
**Component:** `TextWithImage` (image left, text right)

**Problem Title:** "You're reporting emissions but can't set engineering targets"

**Problem (2-3 sentences):** GHG reporting gives you compliance but not insight. You report an annual total, but your CTO can't turn that into actionable targets for engineering teams. Cloud migrations, architectural changes, infrastructure investments — they all blur into one number.

**Solution:** The Software Carbon Intensity standard (SCI) — an ISO-certified metric that lets you set targets engineers can actually act on. Not an aggregate total. A rate your teams can own and reduce.

**Social proof:** Amadeus used SCI to set "reduce carbon intensity by 30%" targets across every software product.

**Link:** "Learn more →" to /standards/ or dedicated SCI page

---

### Section 6: Problem-Solution #3 — Scaling Beyond Pilots
**Component:** `TextWithImage` (text left, image right)

**Problem Title:** "Your pilots work but nothing scales"

**Problem (2-3 sentences):** You've launched sustainability pilots. You've measured emissions. But initiatives stay trapped in IT — never scaling across procurement, operations, and business units. Your board expects transformation; you're delivering point solutions.

**Solution:** The SOFT Playbook — co-chaired by HSBC and Microsoft, developed with Google, Accenture, UBS, and Siemens. Not another measurement tool. The comprehensive framework for embedding green software practices systematically across every function.

**Social proof:** Currently in pilot with [steering member logos]

**Link:** "Learn more →" to dedicated SOFT page

---

### Section 7: Problem-Solution #4 — AI Carbon Impact
**Component:** `TextWithImage` (image left, text right)

**Problem Title:** "AI is your fastest-growing carbon cost and you can't measure it"

**Problem (2-3 sentences):** Your organisation is deploying AI at scale. When stakeholders ask about the carbon footprint, you have no standardised answer. You're making multi-million dollar infrastructure decisions without understanding their relative carbon efficiency.

**Solution:** SCI for AI — extending the proven SCI methodology specifically for artificial intelligence systems. Standardised measurement across training and inference, applicable from LLMs to computer vision. Developed by members including Microsoft, UBS, Google, and Accenture.

**Social proof:** [TBD — stat or quote]

**Link:** "Learn more →" to /ai/ or dedicated SCI for AI page

---

### Section 8: Problem-Solution #5 — Standards Speed
**Component:** `TextWithImage` (text left, image right)

**Problem Title:** "Standards move too slowly for your regulatory timeline"

**Problem (2-3 sentences):** Traditional standards development takes years. By the time specifications reach certification, regulations have evolved and technology has shifted. The bottleneck isn't technical complexity — it's coordination across dozens of stakeholders with competing priorities.

**Solution:** AI-accelerated consensus. GSF achieved ISO certification for SCI in under 3 years — unprecedented. Now applying AI to synthesise perspectives from hundreds of participants in days, not months. Proven at Green IO Paris 2025 with 800+ practitioners.

**Social proof:** "ISO certification in under 3 years"

**Link:** "Learn more →" to /standards/ or dedicated Harmony page

---

### Section 9: First CTA
**Component:** `GetStartedCTA`

**Headline:** "Discuss your challenges with us"

**Body:** "Every member's journey starts with a conversation about what you're trying to solve."

**CTA Button:** "Request a discussion"

---

### Section 10: Community & Reach
**Component:** `StatsGrid`

**Purpose:** "We're bigger than you think"

Stats to include:
- 130,000+ course completions
- [X] member organisations
- [X] countries
- [X] newsletter subscribers
- [X] podcast downloads
- [X] meetup community members

---

### Section 11: What We Do
**Component:** `TextBlock` (centred) + `FeatureGrid` (4 column, with links)

**Title:** "What we do"

**Subtitle:** "Four functions. Each one driven by member needs. Each one producing results the industry adopts."

Four pillar cards, each with: title, 2-3 sentence description, and link to dedicated page.

**Standards**
Setting the benchmarks the industry measures against. Our members develop vendor-neutral specifications — from SCI to SOFT — through a collaborative process that's achieved ISO certification in record time.
→ Explore our standards

**Policy**
Translating technical reality into regulatory language. Our policy working group tracks emerging legislation, publishes position papers, and gives members a voice before regulations are finalised.
→ See our policy work

**Education**
Building capability at every level. From the free Green Software Practitioner course (130,000+ completions) to advanced certification and cohort programmes — the learning journey that turns commitments into competence.
→ Start learning

**Research**
The evidence behind every decision. White papers, technical reports, and the State of Green Software — giving members and the industry the data to make the case internally and externally.
→ Read our research

---

### Section 12: Where To Go Next
**Component:** `AudienceCards`

Three persona signpost cards:

**"Leading sustainability strategy?"**
→ See our impact, Explore membership, Governance & leadership

**"Implementing in your engineering team?"**
→ Education journey, Standards & tools, Green Software Patterns

**"Want to contribute?"**
→ Member playbook, Working groups, Community

---

### Section 13: Featured Content
**Component:** `ResourceCards` (3-4 items, curated)

Rolling selection of:
- A key article
- A success story
- A white paper or research piece
- A press clipping

These rotate/are editable. Links into /articles/, /stories/, /papers/, /press/.

---

### Section 14: Final CTA
**Component:** `GetStartedCTA`

**Headline:** "Discuss your challenges with us"

**CTA Button:** "Request a discussion"

---

## Open Questions

- Exact stats for Section 10 (need current numbers)
- Chair quote attribution
- Social proof for SCI for AI section
- Which articles/stories to feature in Section 13
- Movement Platform one-liner
