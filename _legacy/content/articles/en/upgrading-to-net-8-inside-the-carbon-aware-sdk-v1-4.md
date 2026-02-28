---
title: "Upgrading to .NET 8: Inside the Carbon Aware SDK v1.4"
date: "2024-08-13"
summary: "Takuya Iwatsuka, Damien Roux and Yasumasa Suenaga from NTT and NTT DATA explain the .NET8 update for the Carbon Aware SDK."
teaserText: "We're revealing what took place behind the scenes and how NTT and NTT DATA are using the latest version of the Carbon Aware SDK. "
mainImage: "../images/upgrading-to-net-8-inside-the-carbon-aware-sdk-v1-4/main.png"
---

*Takuya Iwatsuka, Damien Roux and Yasumasa Suenaga from NTT and NTT DATA explain the .NET8 update for the Carbon Aware SDK.
*

As most software nowadays, the [<u>Carbon Aware SDK</u>](https://greensoftware.foundation/articles/celebrating-the-graduation-of-the-carbon-aware-sdk) relies on a stack of utilities, and while adding a new feature is often what’s most appealing for a project, it’s also critical to maintain the stack, especially in a community effort.

Containerization has made it easier for development teams to schedule upgrades at convenient times. However, there are still various reasons to keep a tech stack up to date with current versions, such as security, bug fixes, performance, and support. The best approach is to pair updates with new feature development, which the Carbon Aware SDK team did with the .NET framework. These updates often have ripple effects since their dependencies are not always foreseeable, which makes software upgrade workloads harder to predict.

[<u>Carbon Aware SDK v1.4.0</u>](https://github.com/Green-Software-Foundation/carbon-aware-sdk/blob/dev/CHANGELOG.md#140---2024-05) was released in May 2024. Its core evolution was the upgrade to .NET 8. Until v1.3.x, the Carbon Aware SDK relied on the LTS (Long Term Support) version .NET 6. With an EOL (End of Life) set for November 2024, an upgrade was required. As Microsoft released .NET 8 in November 2023, this is the latest LTS version of .NET and [<u>will be supported until November 2026</u>](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core).

For engineers undertaking similar upgrades, this article reveals what took place behind the scenes and how NTT and NTT DATA is using the latest version of the Carbon Aware SDK. 

# **Why .NET 8?**

To display the carbon intensity metrics from the Carbon Aware SDK WebAPI, we needed to use .NET 8, which introduced [<u>enhanced support for implementing metrics features</u>](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-8/runtime#extensions-metrics).  

The new [<u>IMeterFactory</u>](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.imeterfactory?view=net-8.0) interface allowed us to create a [<u>Meter</u>](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.meter?view=net-8.0) instance while keeping our code modular, using dependency injection (i.e., use the .NET 8 implementation of the feature instead of recreating it, another software development sustainable pattern).

Handling carbon intensity metrics was integrated with the necessary support provided by the .NET 8 upgrade.

# **In practice**

The initial work for upgrading to .NET 8 was done in [<u>Pull Request (PR) #404</u>](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/404) (i.e., a code change proposal that was later merged into the main code).

Even without being a C# expert, it's interesting to look at the PR and see the impact of a collaborative effort by scanning the number of files that changed and how tests and samples led to enhancements.

For the nitty-gritty (next paragraph), the core work is in updating the target framework version. This can be done in the property window of each C# project, for example, in the Japanese version of Visual Studio (Fig.1).

<figure>
<img src="../images/upgrading-to-net-8-inside-the-carbon-aware-sdk-v1-4/fig-1-property-window-of-c-project-in-carbon-aware-sdk-on-visual-studio-community-edition.png" alt="" />
<figcaption><em>Fig.1 Property window of C# project in Carbon Aware SDK on Visual Studio Community Edition</em></figcaption>
</figure>

Carbon Aware SDK includes 30 C# projects (at least in v1.3.0), so automation is welcomed. The target framework version is described in /Project/PropertyGroup/TargetFramework in .csproj file. For example, running the command on WSL:

```
find . -name "*.csproj" -exec sed -i 's|^\(\s\+\)
's|^\(\s\+\)<TargetFramework>net6.0</TargetFramework>$|\1<Target
Framework>net8.0</TargetFramework>|g' {} \;
```

.NET version is specified in many other places, and must also be updated (grep will list them all).

- Base image in Docker file
- Use tag 8.0 instead of 6.0 for mcr.microsoft.com/dotnet/sdk
- Tool configurations
- global.json
- dotnet-tools.json
- launch.json for VSCode
- Target framework version for OpenAPI generator for .NET
- .NET version for [<u>actions/setup-dotnet</u>](https://github.com/actions/setup-dotnet) in GitHub Actions Workflow
- Comments in source files
- Documents

While the update might be done, the work has not ended.

# **Unexpected work items**

While the .NET 8 upgrade was done, some unexpected issues surfaced.

## **Ripple effect on sample code**

A sample running on Azure Functions is available to help onboard newcomers to the Carbon Aware SDK.

Azure Functions for .NET is transitioning one of its execution modes (the In-process model) for the Isolated worker model ([<u>more details here</u>](https://learn.microsoft.com/en-us/azure/azure-functions/dotnet-isolated-in-process-differences)). Additionally, the initial release of .NET 8 does not yet provide an option to use the former model in its initial release (cf. [<u>roadmap of Azure Functions</u>](https://techcommunity.microsoft.com/t5/apps-on-azure-blog/net-on-azure-functions-august-2023-roadmap-update/ba-p/3910098)) .NET 8 did not provide yet an option to use the former model in its initial release.

As our sample was still implementing the in-process model (to be deprecated and unavailable in .NET 8 at this time), it made sense to migrate to the isolated worker model.

For the code lover, there is a helpful [<u>guide</u>](https://learn.microsoft.com/en-us/azure/azure-functions/migrate-dotnet-to-isolated-model?tabs=net8) for the migration. This led to:

- Change the version of container images to build and test
- Update the .csproj file
- Replace Startup.cs with Program.cs
- Replace FunctionName attribute with Function
- Change loggers to be obtained from the DI container
- Update the document

For more details browse: [<u>Pull Request #420</u>](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/420).

## **Port Number Breaking change**

Since the Carbon Aware SDK WebAPI uses ASP.NET Core technology, we had to make an additional update because .NET 8 changed its default port number from 80 to 8080 [<u>Microsoft Learn document</u>](https://learn.microsoft.com/en-us/dotnet/core/compatibility/containers/8.0/aspnet-port)). This involved updating the port number in the WebAPI container which also affected the containerPort in Helm chart and some GitHub Workflows that use WebAPI.

## **Broken build pipeline on GitHub Actions**

GitHub allows for a lot of automation in publishing code, allowing developers a chance to focus more on coding. 

The Carbon Aware SDK repository is configured to publish WebAPI container images (like a snapshot build) when a commit occurs on the dev branch. But, after the .NET 8 upgrade, it suddenly stopped working.

The team investigated the logs (Fig. 2), as a container image for AMD64 and Arm64 Linux in GitHub Actions with [<u>docker/build-push-action</u>](https://github.com/docker/build-push-action): a mysterious segmentation fault (SEGV) was occurring after the upgrade. The code was not changed, dotnet publish was outside the scope.

```
[linux/arm64 build-env 4/6] RUN dotnet publish CarbonAware.WebApi/src/CarbonAware.WebApi.csproj -c Release -o publish:
7.209 MSBuild version 17.9.6+a4ecab324 for .NET
24.69   Determining projects to restore...
41.42 Segmentation fault (core dumped)
```

*Fig.2 Logs in dotnet publish on GitHub Actions*



Further investigation, aided by a [<u>.NET blog</u>](https://devblogs.microsoft.com/dotnet/improving-multiplatform-container-support/) on multi-platform container support, revealed that an unsupported approach was used for the build and needed to be corrected. Specifically, since .NET 6, QEMU static binaries were used to build container images for multi platforms.

Fortunately .NET blog guides how to build multi platform container images.The workflow was fixed accordingly in [<u>Pull Request #498</u>](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/498). Now, the WebAPI container image with .NET 8 can be pulled from [<u>GitHub Packages</u>](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pkgs/container/carbon-aware-sdk) now!



## **.NET8 Upgrade in Action**

### Carbon Intensity map

Thanks to .NET 8, the new Carbon Aware SDK v1.4.0 includes a carbon metrics exporter that enhances visualization capabilities.

This feature facilitates integration with monitoring solutions like [<u>Prometheus</u>](https://prometheus.io/) and visualization tools like [<u>Grafana</u>](https://grafana.com/docs/grafana/latest/panels-visualizations/visualizations/), unlocking geomap-style visualizations that show metrics at specified locations on a map. By enabling the exporter and configuring Grafana, carbon intensities can be exported from Carbon Aware SDK to a geomap. This becomes part of a dashboard to monitor carbon emissions for software systems.

![](../images/upgrading-to-net-8-inside-the-carbon-aware-sdk-v1-4/image.png)

### Green Dashboard for Kubernetes

Carbon Aware SDK helps increase awareness around Carbon emissions, and it is now possible to monitor carbon emissions per application within Kubernetes.

In practice, each container’s energy consumption is evaluated through [<u>Kepler</u>](https://www.cncf.io/projects/kepler/) (sandbox project in Cloud Native Cloud Foundation, [<u>CNCF</u>](https://www.cncf.io/)), and thanks to the Carbon Aware SDK, the carbon emission can be evaluated.

Emission data from the power grid can be accessed through the Prometheus exporter with Carbon Aware SDK (starting v1.4.0), and visualized with Grafana dashboard. The power consumption, energy consumption, carbon emission, and SCI (Software Carbon Intensity) can be seen at a glance!

![](../images/upgrading-to-net-8-inside-the-carbon-aware-sdk-v1-4/image.png)

### **Elevating Carbon Aware Computing**

By integrating new features such as the carbon metrics exporter and improving compatibility with tools like Prometheus and Grafana, the SDK is better equipped to help developers monitor and reduce carbon emissions. As we continue to improve, the Carbon Aware SDK will continue to serve an important role in building environmentally-conscious software that is responsive to climate change.

The Carbon Aware SDK has [<u>achieved graduation</u>](https://greensoftware.foundation/articles/celebrating-the-graduation-of-the-carbon-aware-sdk) and continues to be improved thanks to the enduring efforts from individual contributors from our member organizations.
