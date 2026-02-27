---
title: "How To Measure The Energy Consumption of Your Frontend Application"
date: "2021-09-14"
summary: "Find out how to measure energy cost for applications running client-side on a computer, such as web-applications and native applications to make software in accordance with Principles of Sustainable Software Engineering. "
teaserText: "Learn how to measure energy cost for applications running client-side on a computer, such as web-applications and native applications. "
mainImage: "/assets/articles/how-to-measure-the-energy-consumption-of-your-frontend-application/main.png"
authors:
  - fullName: "Sara Bergman"
    role: "Software Engineer II, M365 Core People Services"
    company: "Microsoft"
    companyWebsite: "https://www.microsoft.com/"
    photo: "/assets/articles/authors/sara-bergman.jpg"
originBlogName: "Microsoft Dev Blogs"
publishedOriginUrl: "https://devblogs.microsoft.com/sustainable-software/how-to-measure-the-power-consumption-of-your-frontend-application/"
---

The second principle of [Sustainable Software Engineering](https://principles.green/) is to build energy efficient applications. The very first step in that direction is to measure the energy your application consumes, also known as its energy cost. Once you know your energy cost, you can start to work to decrease it. Understanding your energy cost when the software runs on a server you own is one thing, but how do you measure it when your software is quite literally in the hands of your customers?

This blog post focuses on measuring energy cost for applications running client-side on a computer, such as web-applications and native applications. It does not cover native applications running on mobile devices such as phones and tablets. For more details on measuring the energy cost of server-side applications, see my post on [the energy consumption of backend services](https://greensoftware.foundation/articles/how-to-measure-the-energy-consumption-of-your-backend-service). This post is operating system agnostic and is primarily meant for front end applications.

## Measure energy consumption directly from the wall socket

Measuring energy consumption directly from the wall socket is the same approach as for backend applications. Using a watt-hour meter, you can measure the total power consumption of your device, which helps you calculate energy cost. This will always be the best way to measure power consumption because it will measure exactly what your hardware consumes. 

<figure>
<img src="/assets/articles/how-to-measure-the-energy-consumption-of-your-frontend-application/illustration-measuring-power-consumption-directly-from-wall-socket.png" alt="illustration-measuring-power-consumption-directly-from-wall-socket" />
<figcaption>*Measuring power consumption directly from the wall socket*</figcaption>
</figure>

Using a watt-hour meter gives you the energy usage of the entire device, but with some planning, you can also use it to determine the approximate energy consumption of an application running on your device. However, this will work best for applications that consume a lot of system resources on the host and/or are long-running. 

For example, a program like Visual Studio is a good candidate, but a lightweight website will be trickier. Why is that? Well, there is a lot of noise when running a laptop or a cellphone – the operating system, background processes, the browser itself if you have a web page, among other things. All of these consume power as well. The noise will make it harder to determine the impact of your application, especially if your application consumes little system resources for a short amount of time.

## Considerations on measuring energy consumption

If your application is a suitable candidate for this approach, here are a few considerations for using a watt-hour meter to measure the energy consumption of an application on your device:

- Any hardware will consume power when idle. Consider this a baseline energy consumption. If you are interested in absolute numbers for your application, then you will need to measure the baseline consumption and then subtract it from the overall consumption measured when running the application.
- Always start measuring from Steady State (SS). There will be a transient event, often an oscillation, observed as a sudden burst of energy when starting up any electrical component, so start measuring when you can observe SS.
- If your device has a battery, it needs to be fully charged when measuring. Otherwise, you will end up measuring the power consumption of charging your battery, which can be interesting, but not what we are going for here.

## Use tools to measure or estimate energy use

What do we need to measure? On a device, the largest energy consumers are usually the screen, central processing unit (CPU), graphics processing unit (GPU), and memory. ]

Estimating and measuring the impact of the CPU, GPU, and memory is relatively straight-forward. 

Measuring the energy consumption for a device’s screen is more challenging, because there are several types of screens and screen technologies available on the market. Varying screen types and technologies make it difficult to control when measuring energy consumption.

 

<figure>
<img src="/assets/articles/how-to-measure-the-energy-consumption-of-your-frontend-application/illustration-using-tools-to-measure-energy-consumption-of-applications-windows-and-already-deployed.png" alt="Illustration-using-tools-to-measure-energy-consumption-of-applications-windows-and-already-deployed" />
<figcaption>*Using tools to measure energy consumption of your backend service*</figcaption>
</figure>

## Tools for measuring energy consumption

Tools for measuring the energy consumption of software are usually specific to an operating system or application domain. I have identified a few examples, but this is not an exhaustive list. Some of the examples below are energy profilers, which analyze and estimate the energy consumption of the application running on your computer. This estimation is useful in identifying ways to reduce your applications energy consumption, but cannot be treated as exact values of energy consumption since they will vary between different computers running the same application. But for identifying areas where you can improve and track energy consumption over time, this is good enough!

#### For Windows devices there are different options.

I refer once again to my [colleague Scott’s post](https://devblogs.microsoft.com/sustainable-software/measuring-your-application-power-and-carbon-impact-part-1/?WT.mc_id=green-8660-cxa). It is also possible to use the Windows task manager to find the utilization of different components, which can then be converted into energy (see my other blog post).

There is a browser task manager for Edge that can be used similarly for web applications, it can be accessed by clicking Shift + Escape or under “More tools” in the browser menu.

**For energy efficiency of already deployed web pages** 

- Use [Green Spector](http://mobile-efficiency-index.com/en/) to measure the energy efficiency of an already deployed web page. It will test your web page of an actual mobile device and give you a score between 0 and 100. This can be used in combination with above approaches used for other devices to get a more holistic overview.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse/) is an open-source application that can be used for assessing the quality of already deployed web pages. It is not optimized for looking at power consumption, but it tracks some things that have a strong correlation to power consumption. For example, the performance score looks at things like loading time, which will have a correlation to the network usages and GPU usage.

## Take Action

Watch the talk ‘[Building Green Progressive Web Apps](https://www.youtube.com/watch?v=D-spTjqAswA&t=3324s)’ at Green Conf 2020 by David Rousset. He shares a lot of his learning and useful tools. If you haven't read them already, check out the [Principles of Sustainable Software Engineering](https://principles.green/) at Principles of Green.
