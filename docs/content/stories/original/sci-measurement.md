## Story: We can't measure software carbon

**Who came together:**
- Abhishek Gupta, Founder and Principal Researcher, Montreal AI Ethics Institute / Machine Learning at Microsoft -- co-chair of the Standards Working Group from GSF's formation, led the SCI from inception through ISO (in memoriam, passed 30 Sep 2024)
- Henry Richardson, Senior Analyst, WattTime -- co-chair of the Standards Working Group, brought grid-oriented expertise to complement software focus
- Navveen Balani, Managing Director and Chief Technologist, Accenture -- co-chair of Standards Working Group and Impact Framework, led the first SCI implementation case study
- Sanjay Podder, Global Managing Director, Accenture -- co-founder and steering member of GSF, Chairperson at time of ISO achievement
- Pindy Bhullar, ESG Technology and Sustainable Technology Lead, UBS -- led step-by-step SCI application at UBS banking applications
- Michael Muller, Director Product Management, CAST -- led SCI application to decarbonise CAST software
- Denis Angeletta and Franziska Warncke, NTT DATA -- co-leads for Green Software Patterns, applied SCI to serverless applications on AWS
- Gadhu Sundaram, VP of Application Services, NTT DATA UK -- drove collaborative adoption across NTT DATA global offices
- Riccardo Marchiani, Head of Agile, Digital Innovation, and IT Group Excellence, Autostrade per l'Italia -- applied SCI-based methodology to 60 applications
- Sara Bergman, Microsoft -- early SCI collaborator, worked on the very first versions of the specification

**Organisations:** Microsoft, Accenture, WattTime, Montreal AI Ethics Institute, UBS, CAST, NTT DATA, Intesa Sanpaolo, AVEVA, Texas State University, Autostrade per l'Italia

### The Problem

Organisations had been reporting carbon totals annually for years, but those numbers lived in sustainability reports that engineering teams never saw. A CTO could tell you the company's total Scope 2 emissions, but couldn't tell an individual developer whether the software they'd just shipped was better or worse for the climate than the version before. The existing GHG Protocol gave compliance but not insight. As Abhishek Gupta put it, the world of carbon measurement was "splintered in its methodologies and tooling with very few widely accepted standards, especially for computing systems."

The core frustration was that existing approaches didn't reward genuine action. A developer could spend weeks optimising code for energy efficiency and see no change in the company's reported carbon total -- the number was too aggregated, too annual, and too disconnected from the software itself. Current carbon emissions measurement made it "extremely difficult without any clear indication that such an approach would succeed," and the result was "inconsistent, if any, reporting of the carbon footprint of various applications, leaving consumers in the dark."

No single company could solve this alone. The problem required a standard that worked across industries -- banking, travel, consulting, telecommunications -- and across technology stacks: cloud, on-premises, serverless, desktop. It needed buy-in from competitors who would agree to measure the same way. That meant a coalition.

### The Journey

**2021 -- Crafting the standard.** When the Green Software Foundation formed, Abhishek Gupta volunteered to co-chair the Standards Working Group alongside Henry Richardson of WattTime. A team of multidisciplinary experts -- energy grids, cloud computing, standards bodies -- from across the industry began crafting what would become the Software Carbon Intensity (SCI) specification. The key insight was making it a rate, not a total: carbon emissions per functional unit (per API call, per user, per request). As the alpha release explained: "The 'per R' is the secret sauce to the SCI. It is what makes the SCI into a tool that works for every software domain, every use case, and every person." Critically, the SCI adopted a consequentialist approach and excluded offsets -- the only way to improve your score was to genuinely reduce emissions.

**December 2021 -- Alpha release for public comment.** The Foundation released the alpha version of the SCI specification, inviting the global software community to test it. The specification was sensitive to carbon awareness, energy efficiency, and hardware efficiency; it took a systems-footprint view; and it required standardised, transparent reporting of what went into the calculations.

**2022 -- Case studies begin.** The biggest barrier at this point was, as the co-chairs acknowledged, "a dearth of case studies." That changed as member organisations began applying the SCI to real software. Texas State University evaluated the SCI against foundation models for AI (GPT-J 6B, GPT-Neo variants, GPT-2) and concluded: "SCI is an effective metric to evaluate the carbon impact of different foundation models at the inference stage." Their research demonstrated that carbon-intensive models don't necessarily yield better quality -- GPT-Neo 1.3B consumed only 27% of the energy of GPT-J 6B while producing similar quality answers.

**2023 -- Enterprise implementations.** Accenture became one of the first to calculate an SCI score for a production application. Using their internal reference application (API Gateway, Kubernetes-managed containers, PostgreSQL, PowerBI), they measured an SCI score of **0.025 gCO2 per API call** across 890,000 monthly API requests. Navveen Balani noted: "SCI specification provided a practical methodology to baseline carbon emissions of the application, including embodied emissions and reducing the same."

At UBS, Pindy Bhullar's team applied the SCI to two on-premises banking applications -- one in Investment Banking, the other in Asset Management. They documented the full methodology: calculating operational emissions from server energy and carbon intensity data, embodied emissions from manufacturer specifications, and scaling by functional unit (number of users). UBS acknowledged: "We recognize this is the first step in reporting the carbon emissions from our software applications and it will require further automated processes, additional data, and the ability to use the rates in order to make meaningful decisions."

NTT DATA Italy partnered with Intesa Sanpaolo, one of Italy's largest banks, to build a real-time monitoring dashboard showing SCI scores and CO2eq emissions across the bank's IT infrastructure. The tool provided decision-makers with emissions data filterable by services, offices, applications, and environments -- turning the abstract specification into an operational reality.

**2024 -- ISO certification and scaling.** In April 2024, the SCI Specification v1.0 achieved ISO standard status (ISO 21031:2024). Sanjay Podder declared: "Reaching this milestone represents a collective effort from GSF member organizations. This achievement unlocks the potential to achieve industry-wide adoption of the SCI Specification, which is crucial in empowering organizations to achieve real-world emissions reductions." Henry Richardson added: "We believe that the opensource SCI Specification will catalyze a new era of sustainable innovation within the technology industry."

CAST demonstrated that applying the SCI to a single enterprise application, fixing just ten green code deficiencies with four person-days of effort, could reduce annual CO2 emissions by an estimated **400 kg** and save over **1,000 kWh** per year. When extrapolated across CAST's full application suite and client portfolios, the cumulative impact was described as "monumental."

NTT DATA Germany applied the SCI to serverless applications on AWS, measuring **305 kg of CO2 per 1 million requests** -- demonstrating how small per-request emissions (0.305 gCO2) scale significantly in high-traffic systems.

Autostrade per l'Italia, working with CAST, targeted 60 applications and achieved an average of **15.1% CO2 saved per application**. They planned to expand to 250 applications, projecting an estimated saving of 86.8 kg CO2eq/year (14%).

**2025 and beyond -- Disclosure and the next frontier.** The Foundation began exploring voluntary SCI disclosure certification, recognising that while the standard existed, the ecosystem still lacked systemic support for sharing data transparently across the software supply chain. The vision: organisations publish their SCI scores alongside methodologies, creating feedback loops that improve both supply chain accuracy and the science of green software measurement.

### The Impact

- **ISO 21031:2024** -- The SCI became an internationally recognised ISO standard in under three years from alpha release, one of the fastest paths to ISO certification for a software specification
- **7+ independent implementations** with published results: Accenture (0.025 gCO2/API call), UBS (two banking applications baselined), CAST (400 kg CO2/yr reduction, 1,000+ kWh saved), NTT DATA (305 kg CO2/1M requests on serverless), Intesa Sanpaolo (real-time monitoring dashboard), Autostrade per l'Italia (15.1% CO2 savings across 60 applications), Texas State University (academic validation on AI models)
- **Cross-industry adoption** spanning banking (UBS, Intesa Sanpaolo), consulting (Accenture), software intelligence (CAST), IT services (NTT DATA), infrastructure (Autostrade per l'Italia), and academia (Texas State University)
- **Foundation for tools** -- the SCI became the calculation backbone for the Impact Framework and Carmen measurement engine, extending its reach far beyond direct adopters
- **67% to 93%** of an organisation's emissions can stem from applications alone (per CAST analysis), validating why a software-specific metric was essential

### Key Quotes

"What can be measured can be managed." -- Abhishek Gupta, Montreal AI Ethics Institute / Microsoft, opening the original SCI crafting article (October 2021)

"The 'per R' is the secret sauce to the SCI. It is what makes the SCI into a tool that works for every software domain, every use case, and every person." -- GSF, SCI Alpha Release (December 2021)

"SCI specification provided a practical methodology to baseline carbon emissions of the application, including embodied emissions and reducing the same." -- Navveen Balani, Accenture (March 2023)

"We recognize this is the first step in reporting the carbon emissions from our software applications and it will require further automated processes, additional data, and the ability to use the rates in order to make meaningful decisions." -- UBS SCI case study (January 2024)

"Reaching this milestone represents a collective effort from GSF member organizations. This achievement unlocks the potential to achieve industry-wide adoption of the SCI Specification, which is crucial in empowering organizations to achieve real-world emissions reductions." -- Sanjay Podder, Accenture and GSF Chairperson (April 2024)

"We believe that the opensource SCI Specification will catalyze a new era of sustainable innovation within the technology industry. And, hopefully, is another indicator for how important collective contributions from the opensource community are to scale green software." -- Henry Richardson, WattTime and Co-Chair, Standards Working Group (April 2024)

"We envision that SCI measurement will become a standard part of every developer's toolbox and the norm in the future." -- Navveen Balani, Co-Chair, Standards Working Group and Impact Framework (April 2024)

"He leaves a powerful legacy with the Software Carbon Intensity (SCI) Specification. His tireless efforts over the years led to a consensus on the specification, which was later published to ISO in late 2023 and is now being adopted globally." -- Asim Hussain, Executive Director, GSF, on Abhishek Gupta (October 2024)

"I'm deeply saddened to hear about Abhishek's passing. His thoughtfulness and care from day one played an important role in making the SCI a successful and thorough specification. We'll miss his kindness, his depth of knowledge -- and even his ever-changing pixel art background -- in the standards working group." -- Henry Richardson, WattTime (October 2024)

"Working on the very first versions of the SCI with him continues to be one of the proudest moments in my career." -- Sara Bergman, Microsoft (October 2024)

"The automatically generated Green Software Insights from CAST Highlight enabled us to identify exactly where in our code we could improve our green impact and then estimate the actual CO2 emissions savings with concrete numbers." -- Michael Muller, Director Product Management, CAST (March 2024)

### Related Articles

- `_legacy/content/articles/en/software-carbon-intensity-crafting-a-standard.md`
- `_legacy/content/articles/en/the-green-software-foundation-releases-alpha-version-of-software-carbon-intensity.md`
- `_legacy/content/articles/en/software-carbon-intensity-sci-specification-project.md`
- `_legacy/content/articles/en/sci-specification-achieves-iso-standard-status.md`
- `_legacy/content/articles/en/honoring-abhishek-gupta.md`
- `_legacy/content/articles/en/how-accenture-implemented-the-sci-specification-score-to-track-software-emissions.md`
- `_legacy/content/articles/en/baselining-software-carbon-emissions-ubs-use-case.md`
- `_legacy/content/articles/en/decarbonizing-software-how-cast-applied-the-sci-metric.md`
- `_legacy/content/articles/en/calculating-your-carbon-footprint-a-guide-to-measuring-serverless-app-emissions-o.md`
- `_legacy/content/articles/en/how-intesa-and-ntt-data-measure-energy-consumption-of-software.md`
- `_legacy/content/articles/en/texas-state-university-deems-gsf-sci-an-effective-metric-to-evaluate-the-carbon-i.md`
- `_legacy/content/articles/en/building-green-software-through-standards-and-collaboration.md`
- `_legacy/content/articles/en/establishing-software-carbon-transparency-why-we-re-exploring-sci-disclosure-cert.md`

### Call to Action

Calculate your first SCI score. The SCI specification is freely available at sci.greensoftware.foundation, with a step-by-step guide at sci-guide.greensoftware.foundation. Start with one application, baseline it, then set a reduction target. Submit your case study to the GSF for review and contribute to the growing body of real-world evidence. If you want to go further, take the Green Software Practitioner training course and explore the Impact Framework for automated SCI calculation.

### Open Questions

- **Specific SCI scores from UBS:** The UBS case study describes the methodology in detail but the actual computed SCI values for the two banking applications are shown in images (not extractable as text). Need to verify the exact numbers.
- **Intesa Sanpaolo quantified reductions:** The article describes the monitoring tool and its benefits, but does not provide specific before/after CO2 reduction figures. The claim of "reduced carbon emissions by a significant margin" needs quantification.
- **AVEVA implementation details:** AVEVA is listed as applying SCI to its top 10 products (per the gap analysis) but no dedicated AVEVA SCI case study article was found in the source material. Need to source this.
- **Amadeus CTO "reduce by 30%" target:** This is referenced in the gap analysis but comes from the Virginie Corraze interview where the target is implied rather than explicitly stated as "30%." Need to verify the exact reduction target and whether it was a company-wide mandate.
- **Timeline from alpha to ISO:** The alpha was released December 2021 and ISO was published April 2024 -- approximately 2 years and 4 months. The gap analysis says "under 3 years" which is accurate but should be verified against the exact ISO publication date.
- **Abhishek Gupta's specific contributions:** Beyond co-chairing, what specific decisions or breakthroughs did he drive? The memorial tributes are deeply personal but light on technical specifics of his individual contributions to the specification's design.
