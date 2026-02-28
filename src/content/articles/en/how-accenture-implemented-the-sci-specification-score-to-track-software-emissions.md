---
title: "How Accenture Implemented the SCI Specification Score to Track Software Emissions"
date: "2023-03-01"
summary: "An in depth look at how Accenture implemented the SCI Specification Score to track software emissions."
teaserText: "The design, development, and deployment of all software applications should prioritize sustainability as an essential outcome."
mainImage: "/assets/articles/how-accenture-implemented-the-sci-specification-score-to-track-software-emissions/main.png"
featured: true
organizations:
  - "Accenture"
---

The design, development, and deployment of all software applications should prioritize sustainability as an essential outcome. This requires using energy-efficient hardware, developing climate-conscious code, optimizing energy consumption, and increasing the use of renewable and clean energy sources.

Upon the 1.0 release of the [Software Carbon Intensity (SCI) specification](https://github.com/Green-Software-Foundation/sci/blob/dev/Software_Carbon_Intensity/Software_Carbon_Intensity_Specification.md) by Green Software Foundation, Accenture took quick action to calculate a measure to track and, ultimately, reduce the carbon emissions of one of its internal reference applications. “SCI specification provided a practical methodology to baseline carbon emissions of the application, including embodied emissions and reducing the same.” says Navveen Balani. 

## What is the SCI Specification?
The SCI specification describes a methodology for calculating the rate of carbon emissions for a software system. The purpose of the score is to increase awareness and transparency of an application’s sustainability credentials. The score helps software practitioners make better, evidence-based decisions during system design, development, and deployment that ultimately minimize carbon emissions. A reliable, consistent, fair, and comparable measure better positions technology leaders to set  targets during development and for progress to be tracked.

## Technology Stack of Reference Application
The following graph defines the technology stack for the reference application.

![Architecture diagram showing mobile and desktop clients, API Gateway, Kubernetes compute cluster, and managed database with reporting, security, and monitoring](/assets/articles/how-accenture-implemented-the-sci-specification-score-to-track-software-emissions/image.png)

The architecture has an API Gateway that exposes all the required APIs that any web or mobile application can invoke. The API is implemented using microservices and deployed as containers using a container managed service like Azure Kubernetes Service (AKS) or Google Kubernetes Engine (GKE). Autoscaling is configured for the Kubernetes cluster, which scales up or down based on actual runtime workloads.

The microservices implementation uses a managed database like Azure Database for PostgreSQL or Google Cloud SQL for persistence. The technology stack uses PowerBI as a reporting module. The application leverages the monitoring environment offered by the cloud vendor, which includes central logging, alerts, backups, etc.

## Releasing SCI for Reference Application
To calculate the SCI for the above technology stack, Accenture took the following steps:

1. **Bound - Software Boundary**

Accenture included the  API Gateway, Compute, Managed Database, and Reporting within its software boundary. For managed components like API Gateway, the server and CPU utilization details were abstracted by the cloud vendor, and we went ahead with approximation as described in Quantify – Measurements below.

The team excluded external network and end user devices for the first version of the SCI calculation. Since we are dealing with a global application, we would require an approximation to calculate the emissions associated with the network and end user devices. The plan is to implement that in the next version of this case study.

1. **Scale - Functional Unit**

For the functional unit, we used the total number of APIs as the scaling factor.

1. **Define – Measurements**

For measurements, the team leveraged the average monthly telemetry data for CPU utilization from the production environment running its reference application. We used the monitoring tools provided by the cloud vendor (like Azure Insights) to get the CPU utilization of the Nodes to run the containers and the VM to run the managed database.

1. **Quantify – Measurements**

Based on the CPU utilization of the nodes, we got the energy curves. Leveraging  [third-party APIs](https://www.climatiq.io/docs#cpu) from vendors like [Climatiq](https://www.climatiq.io/docs#cpu) also provides energy measurement based on parameters like utilization, region, and CPU (i.e., based on virtual cores used).

The team then used the data presented to generate an SCI score.

![Architecture diagram showing mobile and desktop clients, API Gateway, Kubernetes compute cluster, and managed database with reporting, security, and monitoring](/assets/articles/how-accenture-implemented-the-sci-specification-score-to-track-software-emissions/image.png)

The VM1 to VM8 represent the nodes running containers that auto-scale based on actual runtime loads. The Database Node provides CPU utilization for the database. Reporting node is the reporting tool, and App Gateway provides API functionality.  Since the cloud vendor abstracted the utilization and node details for API Gateway, the team attributed 5% of the total application emissions to the Managed API Gateway.

For the Embodied Emissions calculation, based on Node type (i.e., processor type), we used  [spec.org](https://www.spec.org/) to find a match and get the embodied emissions. For a specific node (VM instance type), the team identified the underlying hardware provisioned, mapped it to an identical bare metal server (e.g., Dell PowerEdge R740), and then considered the embodied emission from the Product Lifecycle Assessment. They later apportioned the embodied emissions of the server to the cloud VMs based on the virtual cores.

Another source that can be used for embodied carbon is the [Cloud Carbon Footprint](https://www.cloudcarbonfootprint.org/docs/embodied-emissions/) (emission data is available [here](https://docs.google.com/spreadsheets/d/1k-6JtneEu4E9pXQ9QMCXAfyntNJl8MnV2YzO4aKHh-0/edit#gid=0)). Cloud Carbon Footprint lists the embodied carbon based on a cloud VM/server type. 

For the Emission factor, we assessed where the Node is hosted and took average marginal values from the IEA emission factor table (for country-level values) and the EPA emission factor table (for state-level values for the US). You can use APIs from vendors like [WattTime](https://www.watttime.org/) and [ElectricityMaps](https://www.electricitymaps.com/) to get the carbon intensity data.

1. **Report**

Calculations were based on API as the functional unit. The total average monthly API request was 890k. We got an SCI score of 0.025 gC02 per API for our internal reference application.

## What we Learned
We gained three major takeaways while working on the implementation of the SCI specification:

 

1. **Energy calculation** – There are various approaches to calculating energy curves. Some are based on coefficient values (like how many watt-hours it takes to run a virtual server), some are based on statistical methods, and some provide their methodology through APIs. Most of these energy calculation strategies are based on certain approximations. There is no single source of truth, and the intent here is to use the same method for future calculations to compare against the baseline. We documented the various approaches as part of [SCI guidance ](https://sci-data.greensoftware.foundation/E/)to help software practitioners calculate the energy of the software systems. 

2. **Embodied emissions** – The type of underlying hardware for running VMs and its embodied emissions are currently abstracted by the cloud vendors. We are forced to use certain approximations based on VM type to calculate the embodied emissions. We have documented our learnings and approaches [here](https://sci-data.greensoftware.foundation/M/).

3. **Cloud-managed services emissions** – There are certain managed and shared services like API Gateway, Load Balancer, etc., where the type of hardware is not listed. In such scenarios, you can apply some approximation as we did with the API gateway. Similarly, we used an approximation based on usage (utilization, time) for serverless components.

## What’s Next   
The SCI score provided us with a benchmark for the carbon emissions of the reference application. Please note that the data used was approximated and should not be reported as part of carbon accounting. The intent was to develop an SCI score that we track and reduce. Our next step is to reduce the SCI score by applying the three fundamental principles: developing energy-efficient code, using less and efficient hardware for the same amount of workload and making applications carbon-aware.

*About Accenture*

[Accenture](http://www.accenture.com/) is a leading global professional services company that helps the world’s leading businesses, governments and other organizations build their digital core, optimize their operations, accelerate revenue growth and enhance citizen services—creating tangible value at speed and scale. We are a talent and innovation led company with 738,000 people serving clients in more than 120 countries. As a founding member of the Green Software Foundation, Accenture has made significant contributions toward the GSF mission of enabling sustainable software. Accenture is particularly active in developing the Software Carbon Intensity (SCI) specification, which is the first methodology that describes how to calculate the rate of carbon emissions for a software system.

*About the Authors*

**Sanjay Podder** is the Global Managing Director and leads Technology Sustainability Innovation at Accenture. He is co-founder and steering member of the Green Software Foundation. Sanjay has over 50 granted patents in Software Engineering,  

**Navveen Balan**i is the Managing Director and Chief Technologist with Technology Sustainability Innovation at Accenture. He leads various technology sustainability research and innovation initiatives in his role and represents Accenture in the Green Software Foundation (GSF). He is an active contributor to various GSF workgroups and the lead for the SCI Open Ontology project.

**Vishwadeep Rao** is a Strategy Consultant with Sustainability Services, working at the intersection of technology and sustainability. He has rich experience developing strategic IT decarbonization roadmaps for clients across industries.
