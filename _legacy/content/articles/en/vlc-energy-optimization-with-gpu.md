---
title: "VLC Energy Optimization With GPU"
date: "2021-09-03"
summary: "Follow the journey by the media player VLC to adopt Sustainable Software Engineering practices and reduce their carbon emissions. "
teaserText: "Displaying video and decoding media are energy intensive software applications. Here's how VLC media player adopted Sustainable Software Engineering practices to reduce carbon emissions. "
mainImage: "../images/vlc-energy-optimization-with-gpu/main.png"
authors:
  - fullName: "Pierre Lagarde"
    role: "Principal Program Manager, Analytics Platform System (APS)"
    company: "Microsoft"
    companyWebsite: "https://www.microsoft.com/"
    photo: "../images/authors/pierre-lagarde.jpeg"
    socialMedia:
      - platform: "Twitter"
        link: "https://twitter.com/pierlag/"
      - platform: "Linkedin"
        link: "https://www.linkedin.com/in/pierlag/"
originBlogName: "Microsoft Developer Blogs"
publishedOriginUrl: "https://devblogs.microsoft.com/sustainable-software/vlc-energy-optimization-with-gpu/"
---

For the past few years, sustainable software engineering has arisen as one of the major topics in the daily discussions I have with software developers. Due to the advancements in technology, as well as the increasing awareness we share on climate change and the overall impact of tech on the environment, sustainable software engineering is now deeply integrated with innovation, user experience or application performance. 

Let us follow the journey taken by the media player [<u>VLC</u>](https://www.videolan.org/vlc/index.en-GB.html), to adopt Sustainable Software Engineering practices and reduce their carbon emissions. I will show how you can reconcile hardware innovations, application performance, and energy consumption.

## What is VLC?

[<u>VLC</u>](https://www.videolan.org/) is a free and open-source media player written by the [<u>VideoLAN project</u>](https://code.videolan.org/). VLC is available for desktop operating systems and mobile platforms, such as Windows 10, Windows, Linux, Mac, Android, Tizen, iPad, iPhone, and Apple TV. VLC is also available on App stores such as Apple App Store, Google Play store, and Windows Store.

The generation of electricity is responsible for almost half of global carbon emissions, and thus, the [<u>2nd principle of Sustainable Software Engineering</u>](https://principles.green/principles/electricity/) is to build applications that are energy efficient. 

### Decoding and energy optimization

Displaying video and decoding media are some of the most energy intensive software applications. Decoding is well suited to energy optimization since certain types of processing can be done on a GPU rather than a CPU, which results in fewer CPU cycles and lower power usage. Developers can take advantage by offloading the codec decoding of video scenarios to the more efficient GPU implementations. 

This has two advantages: performance and power usage.

The codecs used in decoding are expensive, computation-wise, and very repetitive because of the size of the data. The use of hardware codecs and video filters on the GPU can reduce power consumption significantly.

Typically, a developer has the choice between a “typical” algorithm utilizing the CPU or a more optimized algorithm leveraging the GPU. The optimized algorithm will reduce energy consumption and will provide better performance.

In Windows, DirectX is the main software interface used for handling game programming and video. It consists of multiple components including Direct3D, DirectDraw, DirectMusic, DirectPlay, and DirectSound.

One component, DirectX Video Acceleration (DXVA), can be used for hardware acceleration to speed up video processing. Software codecs and software video processors can use DXVA to offload certain CPU-intensive operations to the GPU. For example, a software decoder can offload the inverse Discrete Cosine Transform (iDCT) to the GPU.

Using a combination of DXVA and Direct3D shaders permits access to the right codec for a specific video format and can provide this information to stages further along in the graphics pipeline. Activating the filters in Direct 3D shaders removes a copy from the CPU, avoiding expensive CPU cycles.

![green-software-foundation-illustration-process-of-reading-decoding-and-display-of-media-files](../images/vlc-energy-optimization-with-gpu/green-software-foundation-illustration-process-of-reading-decoding-and-display-of-media-files.png)

## How to measure the impact of energy optimization?

To gauge the impact of different methods of decoding, two different VLC decoding scenarios were analyzed with powercfg: first with codec using hardware acceleration (GPU) codec, and second with hardware acceleration disabled. For more information on powercfg, read [<u>Measuring Your Application Power and Carbon Impact (Part 1)</u>](https://devblogs.microsoft.com/sustainable-software/measuring-your-application-power-and-carbon-impact-part-1/)<u>.</u>

In both scenarios, the playback of a standard video was chosen using a native render size of 4000 x 2250 (source [<u>here</u>](http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_native_60fps_normal.mp4)). The video was encoded with x264 and contained both an AC-3 5.1 surround sound track as well as a normal MP3 stereo track. The setup for the test is: Surface Laptop 3 with Core i7 – 1065G7 (Windows 2004) and VLC 3.0.11.

In the preference dialog of VLC, you can now choose the hardware acceleration.

![green-software-foundation-screenshot-on-choosing-hardware-acceleration-in-VLC-input-and-codecs-settings](../images/vlc-energy-optimization-with-gpu/green-software-foundation-screenshot-on-choosing-hardware-acceleration-in-vlc-input-and-codecs-settings.png)

If you have multiple GPUs on your device, you can choose the GPU you want to use per application. In this case, the Intel GPU integrated is better regarding energy consumption.

![green-software-foundation-screenshot-of-graphics-preferences](../images/vlc-energy-optimization-with-gpu/green-software-foundation-screenshot-of-graphics-preferences.jpg)

## **Energy consumption CPU vs GPU**

**Here's what we get when measuring energy consumption:
**

| **Energy Consumption (millijoules)**                   | **CPU Energy** | **Display Energy** | **Disk Energy** | **Total Energy ** |
|-------------------------------------------------------:|---------------:|-------------------:|----------------:|------------------:|
|  For 1-minute video playing with GPU acceleration      |  49,169        |  256,061           |  154            |  305,384          |
|  For 1-minute video playback without GPU acceleration  |  799,157       |  245,231           |  131            |  1,044,519        |



By default, in the task manager you can see the power usage here without GPU acceleration:

![green-software-foundation-VLC-media-player-power-settings](../images/vlc-energy-optimization-with-gpu/green-software-foundation-vlc-media-player-power-settings.png)

*As you can see a GPU enabled VLC is 70% more energy efficient than using the CPU!*

## Summary

There are other tools available on the market to monitor real-time applications’ energy consumption, like this [<u>tool</u>](https://software.intel.com/content/www/us/en/develop/articles/intel-power-gadget.htmlhttps:/software.intel.com/content/www/us/en/develop/articles/intel-power-gadget.html) for devices with Intel chipsets.

We are also seeing several promising hardware innovations made by Intel, Qualcomm, NVIDIA, even at the silicon level to enable reduced energy consumption. 

For example, with their project [<u>AI Can See Clearly Now</u>](https://blogs.nvidia.com/blog/2020/10/05/gan-video-conferencing-maxine/), NVIDIA uses a neural network in place of the video codec software typically used to compress and decompress video for transmission over the net. It enables a video call with one-tenth of the network bandwidth users typically need. In addition, we have developed new Artificial Intelligence (AI) instructions on the SQ1 processor for Surface Pro X, that allows you, for example, to [<u>maintain eye contact</u>](https://blogs.windows.com/devices/2020/08/20/make-a-more-personal-connection-with-eye-contact-now-generally-available/) during a call.

This use case with VLC is part of a global initiative we have launched within the Windows applications ecosystem called [<u>Devices Sustainability at Microsoft</u>](https://www.microsoft.com/en-us/devices/sustainability-report). We are convinced that algorithm optimizations, when used by millions of users and hundreds of minutes around the world, can have a significant impact on carbon emissions reduction. This type of optimization can also be leveraged for several other scenarios like database, compression, and AI. Green coding is one promising approach that developers can take to tackle environmental challenges.
