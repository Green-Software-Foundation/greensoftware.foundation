## Story: "Standards move too slowly for our regulatory timeline"

**Who came together:**
- Asim Hussain, Executive Director, Green Software Foundation -- conceived and led the AI-assisted assembly process
- Chris Adams, Director of Technology and Policy, Green Web Foundation -- led the SCI for Web assembly as project chair
- Daniel Schien, University of Bristol -- brought academic rigour to the web measurement methodology
- Florent Morel, Amadeus -- contributed travel industry perspective on web sustainability measurement
- Alekh Gupta, Google -- brought platform-scale web expertise
- Nisha Ramachandra, Accenture -- enterprise consulting perspective on practical adoption
- Riccardo Pomato, Microsoft -- cloud provider perspective on measurement infrastructure
- Thiago Falcao Silva, NTT DATA -- implementation experience from a major systems integrator
- 14 assembly members in total (see full list below)

**Organisations:** Google, Green Web Foundation, Amadeus, Accenture, Microsoft, NTT DATA, Globant, Electricity Maps, WattTime, ClimateAction.tech, University of Bristol, HSBC, Evosoft, GrUSP

### The Problem

Traditional standards development takes years. The SCI specification -- widely celebrated as moving at unprecedented speed -- still took over three years from inception to ISO certification in April 2024. By the time specifications reach final form, regulations have evolved, technology has shifted, and the window for influence has narrowed. The bottleneck is not technical complexity. It is the challenge of coordinating dozens of stakeholders with competing priorities, different terminologies, and divergent views on scope, accuracy, and implementation.

The problem was becoming urgent. Web sustainability had no measurement standard despite almost everyone using the web daily. The W3C had developed Web Sustainability Guidelines, tools like CO2.js and the Sustainable Web Design Model had emerged, and the University of Edinburgh had demonstrated that image optimisation alone could save 13 tonnes of CO2 per year from a single institution's web estate. But there was no standardised, SCI-aligned methodology for measuring a website's carbon intensity. Organisations were moving from awareness to accountability and needed approaches that support optimisation decisions across the full delivery chain -- servers, browsers, and third-party services.

Meanwhile, the regulatory clock was ticking. The EU Green Digital Coalition, the NY Corporate Climate Accountability Act, and evolving GHG Protocol guidance were all creating pressure for organisations to report on digital sustainability. A standard that arrived two years too late would be a standard nobody adopted.

### The Journey

**April 2024: SCI achieves ISO standard status.** The SCI specification (ISO 21031:2024) was published, proving that a multi-stakeholder, consensus-driven process *could* produce a globally recognised standard. But even this success highlighted the speed problem. As Sanjay Podder, then GSF Chair, noted: "Reaching this milestone represents a collective effort from GSF member organizations." That collective effort had taken years of meetings, comment periods, and revision cycles. Henry Richardson of WattTime added: "Hopefully, [this] is another indicator for how important collective contributions from the opensource community are to scale green software." The question became: how do you keep the rigour of consensus while compressing the timeline?

**September 2025: W3C and GSF announce formal collaboration.** The Green Web Foundation, active members in both communities, brokered a strategic collaboration between GSF and W3C to advance sustainable web development through shared research, standards development, and measurement frameworks. The collaboration focused on developing SCI for Web -- extending the proven SCI methodology to web applications. As the announcement stated: "Almost all of us use the web daily, and like everything else, we need to make using it more sustainable. By defining a standard for measuring website emissions, we make it easier for people to request greener digital services, for responsible technologists to build them, and to reach the fossil-free internet we all need."

**September 2025: The AI-assisted assembly begins.** Rather than a traditional working group process of months of meetings and circulated drafts, GSF launched a deliberate experiment. Fourteen members with web-specific expertise were assembled: Alekh Gupta (Google), Alexander Dawson (ClimateAction.tech), Asim Hussain (GSF), Camille Fassett (WattTime), Chris Adams (Green Web Foundation), Daniel Schien (University of Bristol), Facundo Armas (Globant), Florent Morel (Amadeus), Francesco Fullone (GrUSP), Mathias Uhlitzsch (Evosoft), Nisha Ramachandra (Accenture), Raghava Rao Battina (HSBC), Riccardo Pomato (Microsoft), Ryan Sholin (Electricity Maps), and Thiago Falcao Silva (NTT DATA).

The process worked differently from traditional standards development. Participants started by answering structured questions about what level of measurement accuracy would drive behaviour change and what level of complexity would prevent adoption. Their responses were synthesised by an LLM to generate draft content, which the group then reviewed and refined through multiple rounds. In contentious areas, participants revised content until all objections were resolved. This "human-in-the-loop" approach made objections visible and resolvable -- a deliberate decision gate rather than the traditional model of circulating documents and hoping for feedback.

**Late 2025: Consensus reached in ten weeks.** In ten weeks, the assembly moved from a blank page to a consensus design document that would inform the full specification's development. The document resolved core tensions: a specification that is technically accurate but unused serves no purpose, and a widely used metric that lacks credibility also fails. The assembly agreed on three key principles: accuracy proportionate to control, mandatory disclosure of boundaries and assumptions, and integration over complexity (fitting existing workflows rather than requiring new toolchains).

The scope was defined: web applications delivering value through browser interfaces via HTTP/HTTPS, technology-agnostic, covering static sites through to streaming services. Third-party services -- analytics, advertising, CDNs, authentication -- must be included within the boundary because they consume energy on both servers and client devices. The design explicitly addressed gaming prevention: measurement approaches that automatically credit "green hosting" based on provider claims would allow organisations to improve scores by switching hosts without reducing actual energy use.

**Q1 2026: Specification development begins.** With the design foundation established in weeks rather than months, the SCI for Web specification entered active development, establishing clear web-appropriate boundaries, functional units, and disclosure requirements.

### The Impact

- **Ten weeks from blank page to consensus design document** -- compared to the multi-year timeline of traditional standards development
- **14 expert participants from 15 organisations** reached consensus through the AI-assisted process, resolving contentious scope and accuracy questions
- **W3C formal collaboration** -- bridging the world's web standards body with the green software standards body for the first time
- **SCI for Web specification entering development** with a solid design foundation, on track for practical use by practitioners in 2026
- **Process proven and replicable** -- the AI-assisted assembly model can now be applied to future GSF standards work, compressing consensus timelines across all new specifications
- **The approach resolves a structural problem:** GSF now has 17 projects at various stages. If each required 3+ years of traditional consensus-building, the pipeline would be unmanageable. AI-assisted consensus makes the portfolio viable.

### Key Quotes

"Almost all of us use the web daily, and like everything else, we need to make using it more sustainable. By defining a standard for measuring website emissions, we make it easier for people to request greener digital services, for responsible technologists to build them, and to reach the fossil-free internet we all need."
-- SCI for Web / W3C collaboration announcement

"Reaching this milestone represents a collective effort from GSF member organizations. This achievement unlocks the potential to achieve industry-wide adoption of the SCI Specification, which is crucial in empowering organizations to achieve real-world emissions reductions."
-- Sanjay Podder, Managing Director, Accenture; then-Chairperson, GSF (SCI ISO announcement)

"We believe that the opensource SCI Specification will catalyze a new era of sustainable innovation within the technology industry. And, hopefully, is another indicator for how important collective contributions from the opensource community are to scale green software."
-- Henry Richardson, Senior Analyst, WattTime; Co-chair, Standards Working Group (SCI ISO announcement)

"We envision that SCI measurement will become a standard part of every developer's toolbox and the norm in the future."
-- Navveen Balani, Co-chair, Standards Working Group and Impact Framework, GSF (SCI ISO announcement)

### Related Articles
- `_legacy/content/articles/en/designing-sci-web-what-we-agreed-and-what-comes-next.md`
- `_legacy/content/articles/en/sci-specification-achieves-iso-standard-status.md`
- `_legacy/content/articles/en/the-green-software-foundation-and-world-wide-web-consortium-w3c-collaborate-to-ad.md`

### Call to Action
GSF members with web expertise can join the SCI for Web project team and help shape the specification through draft review, implementation testing, and technical feedback. Contact sci-for-web@greensoftware.foundation to get involved or apply to become a project co-chair. Non-members can join the Green Software Foundation to participate in this and other standards work.

### Open Questions
- **Green IO Paris 2025 metrics:** The gap analysis references "800+ practitioners at Green IO" where the AI-assisted process was demonstrated -- but no dedicated article was found covering this event. Need to verify the 800+ number and source it.
- **Quantitative comparison to traditional timeline:** The SCI took ~3 years to ISO. Can we get a concrete "this would have taken X months under the old process" comparison for SCI for Web?
- **Other applications of the AI-assisted process:** Has the assembly model been used or planned for any other GSF specifications beyond SCI for Web? The gap analysis mentions it is "now applying to all new standards work" but no source article confirms this.
- **Assembly participant feedback:** Are there individual quotes from assembly members about the AI-assisted process itself -- what worked, what surprised them, how it compared to their previous standards experience?
- **The quote attribution for "Almost all of us..."** appears in both the W3C collaboration article and the SCI for Web design article but is unattributed in both. Need to confirm who said it (likely Chris Adams or Asim Hussain).
- **University of Edinburgh 13 tonnes CO2 figure:** This is referenced in the gap analysis but sourced from a different article about Emma Horrell. Need to confirm whether this figure was used in the SCI for Web assembly deliberations or is merely contextual.
