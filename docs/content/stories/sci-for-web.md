## Story: "No standard exists for measuring a website's carbon"

**Who came together:**
- Chris Adams, Director, Green Web Foundation -- leads the SCI for Web project and brokered the GSF-W3C collaboration as an active member of both communities
- Asim Hussain, Executive Director, Green Software Foundation -- participated in the SCI for Web assembly and championed the web sustainability agenda
- Daniel Schien, University of Bristol -- brought academic measurement methodology expertise to the SCI for Web assembly
- Florent Morel, Amadeus -- participated in the SCI for Web assembly, bringing large-scale web application perspective
- Emma Horrell, User Experience Manager, University of Edinburgh -- demonstrated the real-world impact of web sustainability through the 13-tonne CO2 savings case study
- Alekh Gupta, Google -- participated in the SCI for Web assembly
- Alexander Dawson, ClimateAction.tech -- contributed independent practitioner perspective to the assembly
- Camille Fassett, WattTime -- brought carbon data expertise to the assembly
- Nisha Ramachandra, Accenture -- participated in the SCI for Web assembly
- Raghava Rao Battina, HSBC -- contributed enterprise banking web perspective
- Riccardo Pomato, Microsoft -- participated in the SCI for Web assembly
- Ryan Sholin, Electricity Maps -- brought energy data expertise to the assembly
- Francesco Fullone, GrUSP -- participated in the SCI for Web assembly
- Mathias Uhlitzsch, Evosoft -- participated in the SCI for Web assembly
- Thiago Falcao Silva, NTT DATA -- participated in the SCI for Web assembly
- Facundo Armas, Globant -- participated in the SCI for Web assembly

**Organisations:** Green Web Foundation, W3C, Google, ClimateAction.tech, WattTime, Amadeus, Accenture, HSBC, Microsoft, Electricity Maps, University of Bristol, University of Edinburgh, Globant, NTT DATA, GrUSP, Evosoft

### The Problem

Almost everyone uses the web daily. Yet no standard existed for measuring a website's carbon intensity. Tools like the Sustainable Web Design Model, CO2.js, and the W3C Web Sustainability Guidelines had made web emissions visible and established foundational methodologies that thousands of practitioners used. But as organisations moved from awareness to accountability, they needed something more rigorous: a measurement approach that defined clear boundaries, measured carbon per functional unit rather than just totals, and required disclosure of methodology so results were comparable and defensible.

The University of Edinburgh discovered the scale of the problem first-hand. Emma Horrell, the university's User Experience Manager, led an investigation into the carbon footprint of the university's digital estate -- numerous individual websites, each managed by different teams. They found their image formats were "unnecessarily heavy," and through simple changes to homepage images alone, achieved 13 tonnes of CO2 reduction per year. But this was just one optimisation on one website. Without a systematic framework, they could not measure the rest: "Digital sustainability is a relatively new area for us. We faced uncertainty about whether our approaches were correct, which experts to engage, and where to find guidance."

The fragmentation ran deeper than any single institution. Modern web applications depend extensively on third-party services -- analytics, advertising, CDNs, authentication -- which consume energy on both servers and client devices. A website's carbon footprint spans the entire delivery chain: servers, networks, third-party services, and end-user devices. Without a standard that defined what to include and how to attribute emissions across this chain, any measurement was partial at best. Organisations could not compare results, validate reduction claims, or make informed decisions about where to invest optimisation effort.

### The Journey

**2024-2025 -- SCI becomes ISO standard, web gap becomes visible.** As the Software Carbon Intensity specification matured into ISO/IEC 21031:2024, GSF members recognised that a domain-specific, SCI-aligned approach was needed for web applications. The parent SCI standard was powerful but general. Web applications had unique characteristics -- browser rendering, third-party dependencies, content delivery networks, user device diversity -- that required specific guidance on boundaries and functional units.

**September 2025 -- W3C collaboration announced.** The Green Software Foundation and the World Wide Web Consortium announced a strategic collaboration to advance sustainable web development. The collaboration was brokered by Chris Adams of the Green Web Foundation, who was active in both communities. GSF would manage the SCI for Web specification through its consensus-driven process, while W3C's Sustainable Web Interest Group would provide feedback and insights. The agreement included regular knowledge sharing, development of training materials, creation of Impact Framework templates and plugins, and mutual support in promoting sustainable web development practices globally. As the announcement stated: "Almost all of us use the web daily, and like everything else, we need to make using it more sustainable. By defining a standard for measuring website emissions, we make it easier for people to request greener digital services, for responsible technologists to build them, and to reach the fossil-free internet we all need."

**September 2025 -- University of Edinburgh joins GSF.** The university brought practical insights from two years of ground-level implementation, including the 13-tonne CO2 case study. They had found the GSF through W3C's Web Sustainability Guidelines and saw SCI for Web as exactly what they needed. Their experience demonstrated that "sustainable digital transformation is fundamentally about behavioural change, not just technical solutions."

**September-November 2025 -- AI-assisted consensus assembly.** Fourteen GSF members with web-specific expertise piloted an innovative AI-assisted assembly process. Over ten weeks, participants moved from a blank page to a consensus design document. The process worked through structured rounds: participants answered questions about measurement accuracy and adoption complexity, an LLM synthesised their responses into draft content, the group reviewed and refined through multiple rounds, and in contentious areas, participants revised content until all objections were resolved. This "human-in-the-loop" approach reached consensus in weeks rather than the months a traditional standards process would require.

The assembly members came from Google, ClimateAction.tech, Green Software Foundation, WattTime, Green Web Foundation, University of Bristol, Globant, Amadeus, GrUSP, Evosoft, Accenture, HSBC, Microsoft, Electricity Maps, and NTT DATA -- a mix of tech giants, data providers, academic institutions, and independent practitioners.

**Three key outcomes emerged from the assembly:**

1. **Scope defined:** SCI for Web applies to software applications that deliver value primarily through browser interfaces accessed via HTTP/HTTPS. Static sites, SPAs, server-rendered apps, e-commerce, streaming, and real-time collaboration tools all fall within scope.

2. **Target personas identified:** The specification serves frontend developers, backend and infrastructure engineers, and product owners -- the roles that control different aspects of web application delivery affecting carbon emissions.

3. **Evaluation criteria agreed:** The core tension was resolved: "a specification that is technically accurate but unused won't serve its purpose, and a widely used metric that lacks credibility also won't serve the purpose." Principles included accuracy proportionate to control, mandatory disclosure of boundaries and assumptions, and integration into existing workflows over added complexity.

**February 2026 -- Design document published.** The full consensus document was published, setting the foundation for specification development in Q1 2026. Chris Adams leads the project, with applications open for co-chairs.

### The Impact

- **W3C collaboration** -- bridging the world's web standards body with the green software standards body, a first-of-its-kind partnership
- **14-member consensus assembly** from 15 organisations reached agreement in 10 weeks using AI-assisted process
- **13 tonnes of CO2 per year** saved at the University of Edinburgh from homepage image optimisation alone -- demonstrating the scale of web sustainability opportunity
- **AI-assisted consensus process proven** -- a methodological innovation that could accelerate future standards development
- **Comprehensive scope** covering the full web delivery chain: servers, networks, third-party services, and end-user devices
- **Third-party accountability** -- the specification requires that third-party services (analytics, advertising, CDNs) be included within the measurement boundary
- **Design document completed** with detailed evaluation criteria, comparative analysis of existing frameworks, gaming prevention mechanisms, and consensus positions

### Key Quotes

"Almost all of us use the web daily, and like everything else, we need to make using it more sustainable. By defining a standard for measuring website emissions, we make it easier for people to request greener digital services, for responsible technologists to build them, and to reach the fossil-free internet we all need."
-- GSF-W3C collaboration announcement

"Digital sustainability is a relatively new area for us. We faced uncertainty about whether our approaches were correct, which experts to engage, and where to find guidance. The GSF provides the expertise and community we needed."
-- Emma Horrell, User Experience Manager, University of Edinburgh

"Sustainable digital transformation is fundamentally about behavioural change, not just technical solutions. When colleagues understand that unused content with heavy PDFs and videos has a real environmental impact, they make more thoughtful decisions about what they create and maintain."
-- Emma Horrell, User Experience Manager, University of Edinburgh

"A specification that is technically accurate but unused won't serve its purpose, and a widely used metric that lacks credibility also won't serve the purpose."
-- SCI for Web design document, consensus position

### Related Articles
- `_legacy/content/articles/en/designing-sci-web-what-we-agreed-and-what-comes-next.md`
- `_legacy/content/articles/en/the-green-software-foundation-and-world-wide-web-consortium-w3c-collaborate-to-ad.md`
- `_legacy/content/articles/en/pioneering-digital-sustainability-in-higher-education-meet-emma-horrell-of-the-un.md`

### Call to Action
GSF members can get involved in SCI for Web in two ways: become a project co-chair to support Chris Adams in leading the specification work, or join the Software Standards Working Group to help shape the specification through draft review, implementation testing, and technical feedback. Contact sci-for-web@greensoftware.foundation to get started. If you are not yet a member, join the Green Software Foundation to participate in this work and support open, industry-driven sustainability standards.

### Open Questions
- **W3C timeline:** What is the W3C Sustainable Web Interest Group's timeline for reviewing and endorsing SCI for Web? Is there a pathway to W3C Recommendation status?
- **Specification completion date:** The design document targets Q1 2026 for specification development. When is the specification expected to be ratified?
- **Broader adoption data:** The 13-tonne figure from Edinburgh is compelling but comes from a single optimisation (images) at a single institution. Are there other organisations measuring web emissions at scale, and what results are they seeing?
- **Relationship to existing tools:** How exactly will SCI for Web relate to existing tools like CO2.js, the Sustainable Web Design Model, and Ecograder? Will these tools adopt SCI for Web, or will new tools be needed?
- **Third-party data availability:** The specification requires including third-party services in the measurement boundary. How many third-party service providers currently publish the energy data needed for these calculations?
- **Quote attribution:** The "Almost all of us use the web daily..." quote appears in both the W3C collaboration announcement and the SCI for Web design document but is not attributed to a specific individual. Need to confirm who said this.
- **Gaming prevention:** The design document identifies that "measurement approaches that automatically credit 'green hosting' based on provider claims allow organisations to improve scores by switching hosts without reducing actual energy use." How does the specification prevent this in practice?
