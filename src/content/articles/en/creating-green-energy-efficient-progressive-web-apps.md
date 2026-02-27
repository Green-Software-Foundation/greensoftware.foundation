---
title: "Creating Green, Energy Efficient, Progressive Web Apps"
date: "2021-08-12"
summary: "As web developers, can we adjust our code to participate in the global effort to reduce the carbon footprint? Results of my experiments show that we can. Read on to find out how. "
teaserText: "As web developers, can we adjust our code to participate in the global effort to reduce the carbon footprint? Experiments show that we can. "
mainImage: "/assets/articles/creating-green-energy-efficient-progressive-web-apps/main.png"
authors:
  - fullName: "David Rousset "
    role: "Senior Program Manager, Windows+Devices APS "
    company: "Microsoft"
    companyWebsite: "https://www.microsoft.com/"
    photo: "/assets/articles/authors/david-rousset.png"
    socialMedia:
      - platform: "Twitter"
        link: "https://twitter.com/davrous"
      - platform: "Linkedin"
        link: "https://www.linkedin.com/in/davrous/"
      - platform: "Personal Website"
        link: "https://www.davrous.com/"
originBlogName: "Microsoft Developer Blogs"
publishedOriginUrl: "https://devblogs.microsoft.com/sustainable-software/green-energy-efficient-progressive-web-apps/"
---

At Microsoft, we have noticed that an [<u>average Windows user spends 60% of their time in the browser</u>](https://www.youtube.com/watch?v=EVrUiCNdh6w&start=2391) and therefore, on web pages. As web developers, can we adjust our code to participate in the global effort to reduce the carbon footprint? 

Let’s briefly review the various areas where a website consumes energy.

### How websites consume energy

First, start with the server that hosts your site. All countries do not produce electricity in the same way with some electricity emitting more carbon in its creation than others. The [<u>Electricity map </u>](https://www.electricitymap.org/map)shows you how clean or dirty the electricity is in different parts of the world. For instance, in France, we have particularly decarbonated energy thanks to nuclear power. The Nordic countries offer even greener energy thanks to renewables. Many countries have dirtier energy sources. 

<figure>
<img src="/assets/articles/creating-green-energy-efficient-progressive-web-apps/green-software-foundation-electricity-map-of-europe-showing-clean-and-dirty-electricity-by-nation.png" alt="green-software-foundation-Electricity-map-of-Europe-showing-clean-and-dirty-electricity-by-nation" />
<figcaption><em>Source: Electricitymap.org </em></figcaption>
</figure>

Where your server is hosted is a choice that can impact your footprint. But this is not as simple as that and I encourage you to read [<u>The Principles of Sustainable Software Engineering</u>](https://principles.green/) as well as [<u>How to measure the power consumption of your backend service</u>](https://greensoftware.foundation/articles/how-to-measure-the-energy-consumption-of-your-backend-service).

On my side, I wanted to focus my research on the client-side code of my web apps. Since [<u>Progressive Web Apps (PWAs)</u>](https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/) are closer than ever to so-called native applications, can they also offer solutions to be more energy efficient?

## **Where does all the energy go?**

#### Desktops

On desktop machines, according to the [<u>following site</u>](https://www.buildcomputers.net/power-consumption-of-pc-components.html), the CPU can consume between 55 and 150W. Its motherboard can consume between 25 and 80W. It often contains the network card among many other things. The RAM seems to consume little power, between 2 and 5W. 

Here are some interesting points:

- Your memory footprint seems to have little effect on your carbon footprint. Whether you have 2 x 8GB or 2 x 32GB strips, you will consume the same energy. 
- The GPU is an energy abyss and can vary from 25 to 350W! Keep a close eye on it. 
- Screens can consume from about 20W to more than 140W depending on size and technology.

#### Smartphones

Now let’s quickly review how it works on a smartphone. 

<figure>
<img src="/assets/articles/creating-green-energy-efficient-progressive-web-apps/green-software-foundation-graph-showing-smart-phone-energy-consumption-by-component.png" alt="green-software-foundation-graph-showing-smart-phone-energy-consumption-by-component" />
<figcaption><em>Smart phone energy consumption</em></figcaption>
</figure>

*Graph extracted from *[<u>*Understanding and Reducing Smartphone Energy Consumption*</u>](https://ts.data61.csiro.au/publications/papers/Carroll:phd.pdf)* by Aaron Carroll*

The element that consumes by far the most energy is the screen and especially its backlight if it is LCD. An OLED screen will consume less energy because each pixel is independent in its lighting. This allows an “absolute” black and especially much lower energy used. 

Of course, similar to desktop machines, a smartphone will provide a lot of energy to the CPU and GPU but also to the components managing the network: Wi-Fi and cellular. It is interesting to note that Wi-Fi will consume more energy in instantaneous peak power than 4G, which itself consumes more energy than 3G. Should we conclude that Wi-Fi is less efficient than cellular? Not at all.

Indeed, to assess overall energy efficiency, we must take the total amount of energy spent over a given period and not at a peak. Wi-Fi will enable the required data to be downloaded much faster and, therefore, in much less time. Its energy efficiency is often better than 4G. It is better to consume a little more on a much smaller time scale.

## **Benchmarks**

Thanks to this study, [<u>*How is energy consumed in smartphone display applications?*</u>](https://www.researchgate.net/publication/256840588_How_is_energy_consumed_in_smartphone_display_applications) I have discovered that blue light is consuming more energy than others. I’ve since tried to measure it on a web page using the approach described in [<u>How To Measure The Power Consumption of Your Frontend Application</u>](https://greensoftware.foundation/articles/how-to-measure-the-energy-consumption-of-your-frontend-application). 

I’ve created three web pages: one completely blue, one totally red, and the last one, all black.

<figure>
<img src="/assets/articles/creating-green-energy-efficient-progressive-web-apps/green-software-foundation-illustration-showing-comparison-of-smart-phone-energy-consupmtion-of-three-different-web-pages.png" alt="green-software-foundation-illustration-showing-comparison-of-smart-phone-energy-consupmtion-of-three-different-web-pages" />
<figcaption><em>Comparing smartphone energy consumption for three different web pages</em></figcaption>
</figure>

I measured the energy consumption with a power meter on a smartphone with an OLED display: the blue page consumes 1.4W, the red 1.3W, and the black 1W. Indeed, blue light consumes more than red! 

I then measured with the same wattmeter, but this time on a Surface Laptop 2 with an LCD screen. Whether it was blue, red, or black, the consumption was identical to 14W. Why? Because an LCD screen needs backlighting, and it is always active, which is confirmed by this study: [<u>Should you switch your wallpaper to affect less the battery life of your smartphone?</u>](https://greenspector.com/en/should-you-switch-your-wallpaper-to-affect-less-the-battery-life-of-your-smartphone/)

> ***Building a dark theme on your web site could help save energy on OLED screens!***

### **Can web assembly help?**

Let’s talk about the CPU now. I figured that Web Assembly (WASM) had a good chance of being a friend. I took a sample of code doing “face tracking” that I slightly modified to be executed either in [<u>pure JavaScript</u>](https://david.blob.core.windows.net/idt2019/wasm/index-purejs.html) (JS) or via [<u>WASM</u>](https://david.blob.core.windows.net/idt2019/wasm/index-wasm.html). The JS version runs on my Surface Laptop at 2 fps (frames per second) and displays 10W on the wattmeter. The WASM version runs at 30 fps, which is starting to be optimal for real-time video processing. On the other hand, it consumes 18W!

> ***First conclusion: Web Assembly does indeed make better use of the processor architecture to deliver a better user experience but at the cost of a significant rise in energy consumption.***

This was a special case, so I continued on this [<u>WASM benchmark</u>](https://pspdfkit.com/webassembly-benchmark/) simulating Office type operations in a PDF, which also exists in a pure JavaScript version. The WASM version runs faster than the JS version, in 25s instead of 45s. The power meter shows higher power peaks on the WASM version. However, using the [<u>powercfg.exe tool</u>](https://devblogs.microsoft.com/sustainable-software/measuring-your-application-power-and-carbon-impact-part-1/), I was able to measure an energy consumption of 382 Joules for the WASM version compared to 484 Joules for the JavaScript version. This is like the previous reasoning between Wi-Fi and 4G: what counts is the total energy spent, not the peak.

> ***Good news, Web Assembly can help us to consume less energy in our web apps!***

### **The impact of web workers**

On the CPU side, let’s now evaluate [<u>Web Workers</u>](https://www.davrous.com/2011/07/15/introduction-to-the-html5-web-workers-the-javascript-multithreading-approach/). I took this [<u>Ray Tracer</u>](https://nerget.com/rayjs-mt/rayjs.html) that I slightly modified to compute a 4000×4000 pixels image.

|           | Time to render | Power meter (peak) | Powercfg |
|-----------|----------------|--------------------|----------|
| 1 worker  | 31s            | 19W                | 222J     |
| 8 workers | 10s            | 35W                | 83J      |


Almost 3X less power required for the web workers version. 

> ***Web Workers, when they are relevant, will better exploit the multicores of the CPU and save energy!***

### **If well designed, a service worker can help**

I did more benchmarking in my [<u>online conference</u>](https://www.youtube.com/watch?v=lE-8M7d7IJ0&list=PL5Kprdw8GhxcAJFwsspN5hNV5koHgkjMI&index=5) and I’d like to briefly talk about the network usage here. 

If our [<u>Service Worker</u>](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) is well designed, we can limit unnecessary network requests and thus reduce the energy consumption of the network card, Wi-Fi, or cellular, not to mention the associated performance gain. In an extreme case, I was able to save 12% of energy at the network level with the right Service Worker. Without counting the energy saved on the network infrastructure and the server itself! However, I insist that the Service Worker must be designed by reducing network requests in mind. A Service Worker that simply caches all the pages as they are will have no impact, as the following study confirms: [<u>Evaluating the Impact of Caching on the Energy Consumption and Performance of Progressive Web Apps</u>](https://www.researchgate.net/publication/340389357_Evaluating_the_Impact_of_Caching_on_the_Energy_Consumption_and_Performance_of_Progressive_Web_Apps).

## **Conclusion**

Billions of people on billions of devices can use your web application. Every little watt you save can quickly have a big impact. As web developers, we have seen that it is possible to act at our level. We will also have to create new design patterns and guidelines. For example, there are some very interesting ideas shared here in [<u>Designing Branch: Sustainable Interaction Design Principles</u>](https://branch.climateaction.tech/2020/10/15/designing-branch-sustainable-interaction-design-principles/) that I plan to explore.
