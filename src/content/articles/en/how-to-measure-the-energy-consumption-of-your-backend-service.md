---
title: "How to Measure the Energy Consumption of Your Backend Service"
date: "2021-10-16"
summary: "Ability to measure the energy cost of your application helps you to work on making software more energy efficient. Measuring shows you whether you are improving or regressing. So, what is the best way to measure the energy consumption of your backend service? "
teaserText: "What is the best way to measure the energy consumption of your backend service? Learn tricks to ensure you get reliable data and what to do if you are running in the cloud."
mainImage: "/assets/articles/how-to-measure-the-energy-consumption-of-your-backend-service/main.png"
authors:
  - fullName: "Sara Bergman"
    role: "Software Engineer II, M365 Core People Services"
    company: "Microsoft"
    companyWebsite: "https://www.microsoft.com/"
    photo: "/assets/articles/authors/sara-bergman.jpg"
originBlogName: "Microsoft Developer Blogs"
publishedOriginUrl: "https://devblogs.microsoft.com/sustainable-software/how-to-measure-the-power-consumption-of-your-backend-service/"
---

The second principle of [<u>Sustainable Software Engineering</u>](https://principles.green/) is to build energy efficient applications. The very first stepping stone in that direction is to measure the energy your application consumes. Being able to measure or estimate the energy cost of your application allows you to start reasoning over how your application can become more energy efficient. It will also allow you to observe when you are improving or when you are regressing. Which automatically leads us to the question, what is the best way to measure the energy consumption of your backend service?

This post is operating system agnostic and is primarily meant for applications running on backend only.

## Measure power consumption directly from the socket

The most reliable way is also the simplest way. Buy a cheap watt hour meter, plug it into the socket between your wall and your server and you are golden. This will always be the best way to measure power consumption because it will measure exactly what your server consumes.  

<figure>
<img src="../images/how-to-measure-the-energy-consumption-of-your-backend-service/green-software-foundation-measuring-power-consumption-from-socket-by-software-creators-illustration.png" alt="green-software-foundation-measuring-power-consumption-from -socket-by-software-creators-illustration" />
<figcaption><em>Measuring energy consumption directly from the socket</em></figcaption>
</figure>

There are tricks to ensure you get reliable data:

- The server will consume power when idle. Consider this a baseline energy consumption. If you are interested in absolute numbers for your application, then you will need to measure the baseline consumption and then subtract it from the overall consumption measured when running the application.
- Always start measuring from Steady State (SS). There will be a transient event, often an oscillation, observed as a sudden burst of energy when starting up any electrical component, so start measuring when you can observe SS.

## What if I run in the cloud?

There are a range of reasons why measuring directly from the socket might not work. If you are running in the cloud and don’t have access to your physical server, or if your server runs many different applications and you wish to measure them individually, we must break out a different toolbox.

The main consumers of power on a server will be the CPU, the GPU, and the memory. Estimating how much each consumes will give you an estimate of how much power your server, or your application on a server, consumes. This will, of course, be an estimation but if your goal is to start tracking energy consumption and make sure you are improving, this will do the job. Other components that consume energy may be less transparent to the end user, or completely missing from your setup, such as optical drives, motherboards, and hard drives.

Hardware manufacturers provide a data sheet for all their components and on which you will find a number called TDP or Thermal Design Power. This number is meant to help with designing what cooling the component needs, and not strictly for estimating energy consumption. But there is a correlation, even though it will be a simplification. 

Since we are all aware that the best way is to measure power consumption directly from the socket and we are looking for an estimation only, let us continue down this path together. 

If we approximate the TDP with the energy consumption of each component we will get this mathematical formula: 

> **P[kW] = (c∙P_c+ P_r+g∙P_g)/1000 **

> To get energy, we multiply by time: **E[kWh] = P*t**

<figure>
<img src="../images/how-to-measure-the-energy-consumption-of-your-backend-service/green-software-foundation-formula-for-measuring-power-consumption-of-different-hardware-components.png" alt="green-software-foundation-formula-for-measuring-power-consumption-of-different-hardware-components" />
<figcaption><em>A formula for estimating power consumption </em></figcaption>
</figure>

For our estimate to account for things such as cooling in a data center, this number needs to be multiplied with the PUE or the Power Usage Effectiveness (PUE) of your datacenter. 

The PUE is a ratio that determines how effective a datacenter is at utilizing energy. For example, a PUE of 2.0 means that for every 1 kWh of electricity that reaches the server, the data center needs 2 kWh to account for waste and other services like cooling. This is useful if you want to convert your numbers into CO2 equivalents. For comparing an application’s power consumption over time, you can consider it constant.

## Estimate power consumption before deployment

If you are more interested in a hardware agnostic approach, or if it is more important to compare software over time or against one another, an option is to calculate the number of FLOPs (floating point operations, not FLOP per second in this post). The number of FLOPs can be computed analytically by obtaining, or defining, the cost of two basic CPU operations, ADD and MUL. From those two basic operations the cost of all others can be defined. This was suggested in the paper [<u>Green AI</u>](https://arxiv.org/abs/1907.10597) by Schwartz et al. where the authors, in addition to suggesting this metric, measured several machine learning models to find trends over time.

This approach has also been used in several other studies. Examples: Tom Veniat and Ludovic Denoyer Learning time/memory-efficient deep architectures with budgeted super networks, [<u>In Proc. of CVPR</u>](https://openaccess.thecvf.com/content_cvpr_2018/html/Veniat_Learning_TimeMemory-Efficient_Deep_CVPR_2018_paper.html), 2018, and Polosukhin et al. Attention is all you need, [<u>In Proc. of NeurIPS</u>](http://papers.nips.cc/paper/7181-attention-is-all-you-need), 2017. 

Hardware providers sometimes release software for calculating FLOPs and there are also specialized open-source software for calculating FLOPs of different scenarios, for example of [<u>neural networks</u>](https://github.com/sovrasov/flops-counter.pytorch).

What do FLOPs have to do with energy, you wonder? Counting the FLOPs is a good time and hardware agnostic way to measure the amount of work a running machine performs to execute a piece of software. The amount of work a machine does corresponds well to the energy it consumes and therefore it can be used as an approximation. FLOPs are also correlated with the run time of software, which also has an impact on energy consumption. Another big win of this solution is that it can be analyzed on the code stage without being deployed anywhere. This makes it feasible to compare solutions to each other early in the development phase.

## Action

Here's something to read if you are interested in [measuring the energy consumption of your frontend applications](https://greensoftware.foundation/articles/how-to-measure-the-energy-consumption-of-your-frontend-application).  

