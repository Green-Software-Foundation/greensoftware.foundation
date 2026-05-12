import TextBlock from "./text-block.astro";

export default {
  component: TextBlock,
};

export const Default = {
  args: {
    heading: "What is *Green Software?*",
    body: "Green software is software that is responsible for its own carbon emissions and minimizes them.",
  },
};

export const Compact = {
  args: {
    heading: "Listen & *Learn*",
    body: "Two podcasts. Two perspectives. Practitioner insights and C-suite strategy.",
    compact: true,
  },
};

export const WithImage = {
  args: {
    heading: "Using our *brand*",
    body: "Please review our Brand Guidelines and Trademark Policy before using GSF branding.",
    imageSrc: "/assets/hero-illustration.svg",
    imageAlt: "Brand illustration",
  },
};

export const InCard = {
  args: {
    heading: "Software Carbon *Intensity*",
    body: "The SCI specification provides the first ISO-accredited methodology to measure software carbon impact.",
    card: true,
  },
};
