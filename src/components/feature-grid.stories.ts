import FeatureGrid from "./feature-grid.astro";

export default {
  component: FeatureGrid,
};

const sampleFeatures = [
  {
    icon: "/assets/standardized-icon.svg",
    title: "Standards",
    description: "ISO-accredited methodologies for measuring software carbon intensity.",
    linkText: "View standards →",
    linkHref: "#",
  },
  {
    icon: "/assets/co2-icon.svg",
    title: "Policy",
    description: "Engaging with governments and regulators to shape green software policy.",
    linkText: "View policy →",
    linkHref: "#",
  },
  {
    icon: "/assets/realtime-icon.svg",
    title: "Education",
    description: "Courses and certifications for sustainable software development.",
    linkText: "View courses →",
    linkHref: "#",
  },
  {
    icon: "/assets/renewable-icon.svg",
    title: "Community",
    description: "A global network of practitioners driving sustainable software forward.",
    linkText: "Join community →",
    linkHref: "#",
  },
];

export const Cards2Col = {
  args: {
    heading: "What we *do*",
    body: "Four pillars driving sustainable software forward.",
    features: sampleFeatures,
    columns: 2,
    variant: "cards",
  },
};

export const Bordered2Col = {
  args: {
    heading: "*Connect*",
    body: "Join the platforms and programs that connect practitioners.",
    features: sampleFeatures,
    columns: 2,
    variant: "bordered",
  },
};

export const Cards3Col = {
  args: {
    heading: "Our *approach*",
    features: sampleFeatures.slice(0, 3),
    columns: 3,
    variant: "cards",
  },
};

export const Cards4Col = {
  args: {
    heading: "Key *areas*",
    features: sampleFeatures,
    columns: 4,
    variant: "cards",
  },
};
