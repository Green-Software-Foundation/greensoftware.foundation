---
title: "Can AI Truly Be Green? "
date: "2023-11-07"
summary: "In a recent GSF-organized panel on responsible AI, experts discussed the environmental challenges of AI, prompting a critical question: Can AI be truly green?"
teaserText: "We capture key themes/questions from the event on October 5 to help you better determine your stance on the issue and prepare for the fireside on November 16!  "
mainImage: "/assets/articles/can-ai-truly-be-green/main.jpg"
---

The debate on the topic is dynamic, oscillating between optimism and skepticism. On one side, practitioners believe AI can help meet sustainable development goals like responsible consumption, waste management, and energy conservation without contributing significantly to global greenhouse gas emissions or seriously depleting natural resources. Innovations in energy-efficient algorithms, hardware optimization, and the increasing use of renewable energy sources offer hope. On the side of skepticism, the breakneck expansion of AI, particularly Large Learning Language Models (LLMs), and the demand for this technology are proving to escalate energy consumption and resource use. As a result, the quest for 100% green AI seems elusive.

## Identifying the main culprit of AI’s environmental footprint

Training of LLMs leaves a considerable carbon footprint. To put it into perspective, training a LLM results in approximately [<u>500 tons of CO2 emissions</u>](https://aiindex.stanford.edu/wp-content/uploads/2023/04/HAI_AI-Index-Report_2023.pdf), equivalent to the environmental cost of a gas-powered car traversing approximately 2 million kilometers. That’s a significant volume of CO2 from training and inference. 

Navveen Balani, Chief Technologist at the Technology Sustainability Innovation Group at Accenture, made sure to emphasize that the environmental impact of AI extends beyond algorithms. Infrastructure supporting AI, including data centers, racks, and cooling systems, contributes to adverse environmental effects, such as generating vast quantities of wastewater. Moreover, hardware utilized in AI systems generates embodied emissions–carbon emissions generated during the production and transportation of materials.

To comprehensively address these issues, Balani shared three pivotal angles from which to problem-solve:

1. Optimizing the AI Lifecycle
2. Empowering Hardware Efficiency
3. Harnessing Renewable Resources with Carbon Awareness

## The impact of AI policy 

Advanced AI systems, such as GPT-3 and its successors, have revolutionized various sectors, from language processing to content creation, opening up exciting possibilities. However, the pace of innovation has far outstripped the establishment of comprehensive legal, ethical, and regulatory frameworks. 

Kiesow Cortez, Director of Quantum & AI at Ethicqual and Research Fellow at Stanford University, discussed the importance of software practitioners staying informed about potential upcoming regulations related to environmental considerations in AI because they are coming. For example, the European Union, committed to green and digital transitions, has a proposed [<u>AI Act</u>](https://www.europarl.europa.eu/news/en/headlines/society/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence). 

She went on to share that amendments from the European Parliament include greater emphasis on green goals, some of which are binding requirements. An example of a binding requirement, Kiesow Cortez shared, is the identification, assessment, and mitigation of foreseeable and emergent environmental risks in high-risk AI systems throughout their lifecycle. She noted that the discussed regulations are part of a draft act and proposed amendments that may not be final or enforceable.

Chris McClean, Global Lead for Digital Ethics at Avanade, underscored the importance of proactive measures for organizations. While some might choose to bide their time, industry giants are forging ahead with sustainability objectives, often under the banner of Corporate Social Responsibility. The imperative lies in seamlessly weaving these objectives into a product life cycle, AI projects included. The emphasis should be on nurturing a culture and incentives that drive responsible actions and decisions without waiting for regulations.

The more significant challenge in the current discussions about ethical and responsible AI is how to frame environmental considerations. Instead of viewing environmental, labor, social, and geopolitical costs as risks, they should be recognized as known costs and trade-offs inherent in AI work. Measuring them as risks in terms of likelihood and impact, as in traditional risk management, is insufficient. These factors should consider costs, particularly when conducting experiments, running large models, or engaging in extensive training exercises. This perspective shift is crucial to understanding the real trade-offs involved in AI development.

## Green AI integration across a software’s lifecycle 

Balani highlighted that sustainability should be integrated throughout the entire product development life cycle. This includes optimizing energy efficiency and resource usage at various stages. It is possible to offer energy-efficient AI with a low-carbon intensity.

Attendees learned how each phase contributes to environmentally conscious AI:

1. Design for Efficiency:

- In the design phase, prioritize energy-efficient solutions and architectural choices.
- Simplify AI user interfaces to reduce energy consumption and enhance user experience.

2. Data Management and Efficiency:

- Data engineers are crucial in developing energy-efficient data pipelines and storage formats.
- Optimize data usage and reduce resource-intensive operations.

3. Sustainable Model Training:

- Machine learning engineers can enhance efficiency during model training using techniques such as transfer learning and early stopping to balance trade-offs with energy consumption and accuracy. 
- Minimize computational resources while achieving performance.

4. Green Deployment:

- In deployment roles, consider hardware choices and opt for low carbon intensity regions for data centers and techniques like pruning and quantization for model deployment.
- Reduce the environmental impact of AI by making conscious infrastructure choices.

5. Sustainable QA Testing:

- QA roles should focus on using minimal resources and representative datasets for testing the overall AI application.
- Test AI models and systems in ways that minimize energy usage and environmental footprint.

## Sustainability through culture and leadership

Often, technology professionals are driven by the pursuit of efficiency, accuracy, and speed to market, inadvertently overlooking the environmental impact of software. McClean underscored the vital role of organizational culture in driving environmental responsibility at an organization of any size. 

To address this, McClean said, organizations should create a space for conversations about environmental impact and incentivize eco-friendly practices. Recognizing and highlighting individuals who develop innovative solutions to reduce carbon or environmental footprints can also encourage a culture of responsibility. By fostering a culture of sustainability, organizations empower their developers to find answers and share ideas, reducing the reliance on top-down mandates to drive change in infrastructure and methodologies.

Cortez also addressed the rise of new roles, such as Digital Sustainability Officer, emerging to bridge the chasm between environmental consciousness and practical initiatives within communities and organizations. Leaders in these positions raise awareness about the necessary steps and find ways to support and facilitate teams in achieving sustainability goals. This support can come from dedicated officers working with cross-functional teams or through various collaboration-enhancing initiatives. The goal is to promote dialogues and actions that drive AI sustainability without overburdening development teams.

## The Limitations Aren’t Technical

Our moderator, Dawn Nafus, Anthropologist and Senior Research Scientist at Intel Labs, noted that developers, like everyone else, are social beings. This means that in practice, all of the optimizations discussed might or might not be within their power to implement. For example, changing AI architectures may only be within scope if there is a more profound project rethink. Carbon awareness, a key method of decarbonization that pauses or geographically shifts workloads to find the lowest carbon energy available, can hit limitations when developers are facing tight deadlines or if they are geographically limited by where their data or compute needs to be. As [<u>researchers</u>](https://dl.acm.org/doi/pdf/10.1145/3531146.3533234) have noted, it is possible to decarbonize a very short workload by up to 80%. But this only gets us so far. In aggregate, there is a finite number of workloads that can be shifted before we reach capacity in areas with low carbon density. Within organizations, there needs to be better coordination between teams providing the infrastructure, and making decisions about location, and those responsible for software development. This synergy underscores the importance of organizational incentives and creating a broader culture of sustainability.   

## AI's impact on Net Zero

Kiesow Cortez noted that environmental sustainability is increasingly finding a central place in discussions among management teams, possibly driven by policymakers' increased attention to the issue. She emphasized that companies should go beyond dictating environmental goals to developers; they should provide the necessary support to help them achieve sustainability objectives. With the proper steps and collective action, there is hope for a greener AI future.

Balani promoted the concept of Green AI, which involves integrating energy efficiency and carbon emission reduction into every facet of AI development and deployment. Green AI consists of making environmentally conscious decisions at every stage, from data acquisition to processing, model training, deployment and monitoring. The goal is for Green AI to become synonymous with AI, where energy efficiency, carbon emission reduction, and responsible resource utilization are intrinsic to all  AI projects.

McClean was more skeptical about the consistent achievement of Green AI but stressed the importance of making AI more responsible. Drawing a parallel with a city introducing a million cars, he acknowledged that while efforts can make cars more environmentally responsible, they will still leave a footprint behind. Similarly, with AI, McClean emphasized the importance of thoughtfully considering the reasons for using AI and what value it brings to society. While he gave a nod to the idea of 'Greener AI,' turning the entire AI landscape into a deep shade of green feels unlikely.

## Harnessing clean energy to power apps

Balani provided practical solutions by highlighting the availability of greener deployment options offered by many cloud providers. For example, Google supplies data on regions powered by carbon-free energy. Additionally, APIs like WattTime and ElectricityMaps allow users to access carbon intensity data based on geographical regions. Developers have provider options and readily available APIs to make informed decisions about where to run their applications, whether considering region shifting or time shifting to reduce the environmental impact.

In line with efforts to promote sustainable app development, the panel highlighted the significance of the [<u>Software Carbon Intensity (SCI) Specification</u>](https://greensoftwarefoundation.atlassian.net/wiki/spaces/~612dd45e45cd76006a84071a/pages/15958033/Standards+SCI), providing developers with a framework for measuring and actively reducing carbon emissions.

The SCI Specification presents a standardized approach for measuring carbon emissions. It’s unique because of its focus on reduction, giving developers a practical means to not only report carbon emissions but also to actively reduce them (e.g., by designing energy-efficient architectures).

<u>**View our case studies**</u>

You can watch a recording of the event [<u>**here**</u>](https://www.youtube.com/watch?v=0CX9J3oAipM). 

A big thank you to our Moderator, Dawn Nafus and panelists Chris McClean, Dr. Elif Kiesow Cortez and Navveen Balani for their time and efforts. 

***Disclaimer: Opinions expressed in this article are those of the individuals and do not necessarily represent the views or official stance of their employer or the Green Software Foundation.***
