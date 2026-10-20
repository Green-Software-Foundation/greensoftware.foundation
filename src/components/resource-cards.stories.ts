import ResourceCards from "./resource-cards.astro";

export default {
  component: ResourceCards,
};

export const Default = {
  args: {
    heading: "Useful *Resources*",
    body: "Tools and materials to help you on your green software journey.",
    cards: [
      {
        icon: "/assets/standardized-icon.svg",
        title: "Green Software Patterns",
        description: "A curated online catalogue of software patterns reviewed and published by the GSF.",
        ctaText: "Browse patterns →",
        ctaHref: "#",
      },
      {
        icon: "/assets/co2-icon.svg",
        title: "Carbon Aware SDK",
        description: "An SDK to build carbon-aware applications that do more when the grid is green.",
        ctaText: "Get the SDK →",
        ctaHref: "#",
      },
      {
        icon: "/assets/realtime-icon.svg",
        title: "Impact Framework",
        description: "An open-source framework for measuring the environmental impact of software.",
        ctaText: "Try the framework →",
        ctaHref: "#",
      },
    ],
  },
};
