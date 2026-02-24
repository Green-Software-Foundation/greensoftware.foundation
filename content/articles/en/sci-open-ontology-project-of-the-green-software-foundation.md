---
title: "SCI Open Ontology Project of the Green Software Foundation "
date: "2022-03-08"
summary: "In this series featuring GSF Projects, the first interview is with Naveeen Balani of Accenture who heads the SCI Open Ontology Project of the Innovation Working Group."
teaserText: "Navveen is the Chief Technologist - Technology Sustainability Innovation at Accenture. In this interview he talks about the SCI Open Ontology Project, its goals and why you should be excited to join it and what you get from doing so. "
mainImage: "../images/sci-open-ontology-project-of-the-green-software-foundation/main.png"
authors:
  - fullName: "Nilooka Dissanayake"
    role: "Editor & Content Creator"
    company: "Green Software Foundation"
    companyWebsite: "https://greensoftware.foundation/"
    photo: "../images/authors/nilooka-dissanayake.jpg"
    socialMedia:
      - platform: "Linkedin"
        link: "https://www.linkedin.com/in/nilookadissanayake/"
      - platform: "Twitter"
        link: "https://twitter.com/SMMWriter"
      - platform: "Facebook"
        link: "https://www.facebook.com/BusinessTrainerSriLanka/"
      - platform: "Personal Website"
        link: "https://diyunuwablog.com/"
---

## First, why do you find this project exciting? 

I have a passion for creating innovative products and applying exponential technology and research to build high quality and optimised products. Sustainability is one of the core themes at Accenture. I have got a great opportunity to represent Accenture in the Green Software Foundation to look at this space holistically and drive standardisation and innovation.

Technology itself has a carbon footprint. And in my view, the way we design, develop and deploy applications—be it in cloud, on-premises, or standalone software—need to include sustainability as one of the key outcomes. Our first focus should be on reducing the carbon footprint and creating energy efficient applications.

With Software Carbon Intensity Specification (SCI), we are not just looking at measurement, but how to reduce carbon emissions. We can do this by either creating energy** **efficient applications, using less hardware for the same amount of work, or by building carbon aware applications.

One of the key first steps in SCI is defining the software boundary. This is an interesting problem to solve where we can help enterprises define the software boundary of the SCI application in a unified way. 

## Tell us more about the SCI-Open Ontology Project. Why is this project important?

As enterprises start to understand and apply the SCI specification, it is important that we provide a common terminology to define the software boundary of the SCI application in a unified way. 

Having a common terminology to define the software boundary of the SCI application is the first step to drive uniformity for enterprises and practitioners implementing the SCI specification. Secondly, we would also provide sample Ontology model references for various SCI applications such as machine learning (ML) application, cloud application and digital application. Doing so helps the community to understand what constitutes the software boundary—and its dependencies—of an SCI application, which can in turn be used to create the SCI score for each of the required application components.

Once the common terminology and software boundary is defined, the scope can be extended to include various use cases like visualising the ontology model, using the model as a lightweight storage format or understanding what changed between two versions of SCI applications by comparing their software boundary. 

For example, assume the first version of SCI application uses three instances of the same hardware types for running the application**.** And **after hardware optimization, **the second version of SCI application now uses two instances of the same hardware type, without any changes to application and workload. This would be captured through the ontology model. When we compare these two versions, we can infer the reduction in hardware—without changing the application and workload—caused the reduction in SCI score, which reflects a positive improvement.

## **Please elaborate different areas of the project. **

The project is broken down into several milestones. In each milestone, we would accomplish a specific goal which would help realise the larger vision of the SCI Ontology Project. 

The first milestone is creating the SCI Ontology, followed by creating the Software Development Kit (SDK) which can be used for instantiating the SCI ontology. Once the SDK is completed, we move on to advance topics around storage, reporting, versioning and even comparison of SCI enabled applications.

### Iteration 1: Defining the Base ontology for SCI Application

In this step, we would first create the basic entities for the SCI ontology model and design the relationship between them. For example, hardware is one entity,  software application is another entity and software application has a dependency on underlying hardware for execution. Similarly, a Machine Learning (ML) application has dependency on server (i.e of type hardware) for training, deployment, training cycles etc., dependency on data pipeline server for data capture and data conversions among other things. 

In Iteration 1, we would provide all the base entities, which would help practitioners design the software boundary. We would also provide reference SCI ontology model templates for various representative applications, such as typical software boundary for a digital application or ML application designed using the base entities, to help speed start on creating the software boundary for your SCI application.

### Iteration 2: Creating a Software Development Kit for SCI Ontology

In this iteration, we will create an SDK to allow practitioners and developers to instantiate the SCI ontology and create their own dependency graph based on their application boundary.

### Iteration 3: Extending SCI Ontology for Reporting and Storage

In the third iteration, we will extend the SDK to generate reports based on the software boundary. We would also look at how to use the ontology model as a lightweight storage representation format—i.e like converting the ontology model to JSON , OWL or any equivalent format—which can be used for downstream processing by other applications.

### Iteration 4: Comparison and Version Management

In this iteration, we would look at some of the advanced concepts like comparing two versions of SCI ontology models. This maps to the version example I have given earlier in explaining why this project is important.

## **What does a GSF member get from joining the Project? **

Creating the software boundary is an important first step in calculating the SCI score. We are looking for architects, ontology and domain experts, software practitioners who would help design the generic SCI application ontology model based on their expertise and consensus. The reference applications would help SCI implementers with readymade ontology models to visualise and quickly start their SCI application journey. 

The project provides an excellent collaboration and knowledge sharing opportunity to help shape and drive the unified SCI ontology model representation across organisations. Green software is a relatively new area and through this project, you can innovate, build community and contribute to the journey of this open source project.

## How does your project work?

We work entirely through GitHub. [<u>Here’s our GitHub repository</u>](https://github.com/Green-Software-Foundation/SCI_open_ontology). We first discuss ideas in the discussions tab. Once we are happy with the state of the discussion and are ready to make a change, we move the discussion to a GitHub issue and start working on details of the pull request. Eventually one of the team members creates a pull request and we then have a process by which we agree on the merging of the pull request.

## How does someone get involved in the Project? 

This is a community led Innovation. Participation is open to all GSF Members. Please reach out to me as Project Chair on GSF Slack or by email to get involved.

## Is it only GSF members who can contribute?

Once the project is published in GitHub, non GSF members can contribute through discussions, creating issues or pull requests. 

## What challenges do you see for the Project and how do you plan to overcome them?

The vision of the SCI Open Ontology project spans across the milestones that I explained earlier. Since, this is a community led innovation, we would need active participation from contributors and regular cadence to get consensus on the unified SCI ontology model. The first milestone is critical and successfully delivering it would streamline the development of the rest of our milestones.

## What can we expect from your project in the near future?

Our current focus is on completing Iteration 1 and releasing it. Once released, we would start executing the three additional milestones as described in the project details.

In the future, we also plan to build tools to generate ontology models and software boundary automatically by inspecting the cloud infrastructure environment.
