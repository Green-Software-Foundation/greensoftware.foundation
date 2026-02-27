---
title: "10 Recommendations for Green Software Development "
date: "2021-11-18"
summary: "How many of these ten green software development recommendations are you not following?"
teaserText: "When it comes to green software development, every choice you make matters. Read these 10 recommendations for greener software. How many of  them are you not following?"
mainImage: "/assets/articles/10-recommendations-for-green-software-development-japanese/main.png"
authors:
  - fullName: "San Murugesan"
    role: "Director, BRITE Professional Services & Former Editor-in-Chief of the IEEE’s \"IT Professional\""
    company: "BRITE"
    companyWebsite: "http://www.tinyurl.com/san1bio"
    photo: "/assets/articles/authors/san-murugesan.png"
    socialMedia:
      - platform: "Linkedin"
        link: "https://au.linkedin.com/in/san-murugesan-60700a9"
      - platform: "Twitter"
        link: "https://twitter.com/santweets"
translators:
  - fullName: "Taichi Imura"
    role: "Assistant Manager, Green Innovation Office"
    company: "NTT DATA"
    companyWebsite: "http://nttdata.com/"
    photo: "/assets/articles/authors/taichi-imura.png"
    socialMedia:
      - platform: "Linkedin"
        link: "https://www.linkedin.com/in/taichi-imura-960292230/"
---

Climate crisis is upon us, and it is worsening. Urgent and sustained actions are needed to address this defining story of our times which affects everyone of us and our future generations. Nevertheless, the actions we take now to reduce emissions of carbon dioxide (CO2) and other greenhouse gases would limit climate change and positively impact the future climate, as the recent  the UN Intergovernmental Panel on Climate Change report, [*Climate Change 2021: the Physical Science Basis*](https://www.ipcc.ch/2021/08/09/ar6-wg1-20210809-pr/),* *emphasises. 

Information technology (IT) sector—including hardware, software, firmware and communications—holds huge potential to help reduce overall global emissions . In fact, a [report](https://smarter2030.gesi.org/downloads/Full_report.pdf) by the [Global e-Sustainability Initiative](https://gesi.org/) estimates that IT solutions, which we call ‘greening *by* IT,’  can help cut nearly 10 times more CO2 than they emit. Nevertheless, it is imperative to reduce IT ‘s own carbon emission and footprint, which is  known as ‘greening *of* IT’.   

As we now broadly recognise, green means efficient and environmentally sustainable. In my recent [Cutter Consortium](https://www.cutter.com/) report, [*Greening IT: Need and Opportunities*](https://www.cutter.com/offer/greening-it-need-opportunities), which you can [access for free](https://www.cutter.com/offer/greening-it-need-opportunities), I broadly discussed several aspects of Green IT.  

## Green IT, an umbrella term

Green IT is an umbrella term referring to environmentally sound IT hardware, software, systems, applications, and practices.  It encompasses three complementary approaches to improving environmental sustainability.

- **Greening of  IT. **This inward-looking approach focuses on reengineering IT products and processes to improve their energy efficiency, maximize their use, minimize their carbon footprint and meet compliance requirements. The greening of IT through [making green software](https://greensoftware.foundation/articles/what-is-green-software) is the mandate of the Green Software Foundation.
- **Greening by IT **means using IT as an enabler to create a sustainable environment. This outward looking approach  focuses on offering innovative solutions to key sectors such as manufacturing, energy, business, agriculture, healthcare, and buildings—homes, offices and other buildings—to decrease their emissions and resource consumption, while allowing for growth.
- **Promoting Green Awareness.  **Many people are not yet aware of the serious impacts of the climate crisis and are not taking action to address it. IT has the ability and the duty to motivate them, help them be better informed and get them more engaged in the fight against climate change. Thereby IT can help promote ‘green’ initiatives and desired behavioral changes.

Over the years, much emphasis and progress has been made towards making IT hardware efficient and environmentally friendly. But, to realize the fuller benefits, we need to take our green initiatives down to the software. Hence the newfound interest in making software greener. 

In this article, we emphasize the need for greening software and examine how we can make our software greener to reduce carbon emission resulting from software development and use. 

## Greening of Software

Software is pervasive and has significantly transformed almost every aspect of our life and work. Many applications require large, complex software. The significance and use of software will only grow in future. What impact, if any, can it cause on our environment?

What many don't realize is that, like computer hardware, software can contribute to environmental problems. Although software doesn't consume energy by itself directly, it directs and influences operation of computer hardware, thereby impacting  hardware’s  energy consumption indirectly and hence carbon emission. Computationally inefficient software can have a major impact on energy consumption. So, like computer hardware, software is part of the problem for environmental sustainability.  

As hardware becomes more powerful and energy efficient, the impact of software on overall energy consumption becomes significant. Several real-world examples reinforce this trend.  [University of Cambridge estimates](https://ccaf.io/cbeci/index) that the energy needed to maintain the Bitcoin network is roughly 115 terawatt-hours (TWh)  which is about twice  the energy consumption of the  entire nation of Switzerland. A [recent research](https://arxiv.org/abs/1906.02243) revealed huge environmental costs of training a variety of recently successful neural network models for Natural Language Processing (NLP).  

Further, the very development of software can be energy intensive. For example, [researchers](https://hbr.org/2020/09/how-green-is-your-software?) trained an AI model to classify flowers using a small, publicly available dataset of iris flowers. The AI model achieved accuracy of 96.17 percent in classifying the flowers’ different species with only 964 joules of energy. But to achieve higher accuracy the system consumed significantly higher energy—to gain 1.74 percent increase in accuracy energy consumption raised about three times significantly to 2,815 joules and further increase in accuracy demanded orders of increase energy consumption.  The wasteful approach of throwing more computing power at a problem to get better results than necessary has been [dubbed *red AI*](https://arxiv.org/pdf/1907.10597.pdf).

Therefore, it's important to design and use software to optimize its energy consumption.  As the use of software has exploded in all areas of our activity this is becoming a necessity. Though software impact has been an overlooked factor in the sustainability discourse until recently, it’s time to pay due attention to greening software. This is the mandate of the Green Software Foundation. Enterprises and the IT industry should incorporate green software as part of their sustainability efforts. 

## How to Green Your Software

To realize a greener software, we need to consider energy efficiency and [sustainability](https://dl.acm.org/doi/10.1145/2714560) of software as an important parameter, in addition to functionality, security, scalability, and accessibility. We also need to design software for reuse, extended longevity of use and minimal computational and memory resource requirements.

Writing energy-efficient software is, however, a challenging task; it requires a change of mindset for software developers and designers as well as guidelines, best practices, models and tools to measure and reduce the effect of software on the energy consumption of the underlying hardware. A 2015 IEEE *IT Professional* [article](https://ieeexplore.ieee.org/document/7030252) presents a conceptual framework that provides a unifying view of the strategies, models, and tools available so far for designing and developing greener software.

Development of green software spans the entire lifecycle of software: development, operation and disposal (reuse).  

Here are some recommendations for creating greener software. They focus on four areas:  design and coding options, choice of language, selection of AI models, and software development. 

### Design and coding options
Developers should think about and act on how to minimize environmental impacts of software from the early stage of software development.  Adopting the following general principles will help you in realizing green software.

(01) [Focus on and control](https://greensoftware.foundation/articles/how-to-measure-the-energy-consumption-of-your-backend-service) features with higher power consumption and common usage scenarios.

(02) Reduce data usage. Adopt efficient cache policy, minimise data  exchange, and manage the lifecycle of stored data - compress and aggregate data and use smaller sizes for media and image when possible. 

(03) Remove or refactor unused features. This improves energy efficiency and makes software easier to maintain. 

(04) Detect and remove loops which can’t achieve their intended purpose and uselessly consume energy. For example, polling an unreachable server.

(05) Adapt your app’s behavior according to the device power mode or [other operating conditions](https://greensoftware.foundation/articles/the-carbon-monkey). 

(06) Limit computational accuracy of the application to the desired level which commensurate with the operational needs. For example, you do not need very high resolution geolocation data of your user, if you  are just looking for friends nearby.

(07) Monitor real-time [energy consumption of the application](https://greensoftware.foundation/articles/how-to-measure-the-energy-consumption-of-your-frontend-application), to identify the modules that can be optimized to produce fewer emissions. 

For additional related information, refer to [Principles of Green Software Engineering](https://principles.green/) which identifies eight key potential areas to focus on and [GreenCoding](https://www.gft.com/int/en/technology/greencoding) which offers guidelines on the logic, methodology and platform to write, develop and run the code.  

### Choice of language 
(08) Even the choice of programming language you use can influence the energy efficiency of the software. In a 2018 study, a team of researchers from three universities in Portugal examined energy efficiency across programming languages. They wrote and [evaluated](http://greenlab.di.uminho.pt/wp-content/uploads/2017/10/sleFinal.pdf) software written in 27 different languages for 10 different problems. They monitored electricity consumption as well as the speed and memory usage of each. As highlighted in a brief [article](https://thenewstack.io/which-programming-languages-use-the-least-electricity/),  they concluded that there are several factors to be considered and no single language is the best under different criteria. We recommend further studies along these lines. 

###  Choice of AI Model

(09) As outlined in a recent  *IEEE Spectrum *article, AI can be made greener by developing and using [a less-power-consuming ML model](https://spectrum.ieee.org/energywise/artificial-intelligence/machine-learning/energy-efficient-green-ai-strategies); creating and sharing reproducible code that will reduce duplicated efforts; and developing and using specialized hardware optimized for AI workload. For further  details, refer to the ACM  [article](https://cacm.acm.org/magazines/2020/12/248800-green-ai/fulltext), [*Green AI*](https://cacm.acm.org/magazines/2020/12/248800-green-ai/fulltext). You may also want to check out this article:* *[*Why should sustainability be a first class consideration for AI systems?*](https://greensoftware.foundation/articles/why-should-sustainability-be-a-first-class-consideration-for-ai-systems)

### Software Development 
(10) During development monitor real-time power consumption through techniques such as [dynamic code analysis](https://www.computerweekly.com/answer/Dynamic-code-analysis-vs-static-analysis-source-code-testing). The data you gather will be critical for understanding the gaps between the design choices and actual energy profiles. Tools and resources are now available for developers for managing energy consumption. For example,  Intel’s [Software Development Assistant](https://software.intel.com/en-us/articles/energy-efficient-software-development) allows developer to take energy measurements from the system as it executes specific workloads within their application and determine its efficiency. 

## Prospects
Greening software is—and will continue to be—a necessity, not an option. To help create a more sustainable environment, software professionals must understand the principles of green software and its potential, and embrace green IT practices. By successfully greening your software  systems, you can  harness new opportunities, enhance your business’s competitive advantage, and help create a sustainable environment that benefits current and future generations. 

We need to educate software developers and students about green software and its prospects. To advance and promote green software, further research and development is required in several areas including  environmental impact assessment, standards and regulation, and harnessing software  for environmental sustainability. For instance, the Software Carbon Intensity specification from the Green Software Foundation is a positive step in this direction. 

Software developers, engineers,  professionals, educators, researchers, and users and the software industry can together make a huge difference and help create a sustainable environment that benefits current and future generations.

Let’s join the green software bandwagon and pledge to develop and use green software.
