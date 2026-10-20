import CardGrid from "./card-grid.astro";

export default {
  component: CardGrid,
};

const sampleCards = [
  {
    title: "SCI Specification",
    description: "The first ISO-accredited methodology to measure software carbon intensity as a rate.",
    ctaText: "Learn more →",
    ctaHref: "#",
  },
  {
    title: "Real-Time Cloud",
    description: "A standard for measuring the carbon intensity of cloud workloads in real time.",
    ctaText: "Learn more →",
    ctaHref: "#",
    featured: true,
  },
  {
    title: "Green Software Patterns",
    description: "A curated catalogue of proven patterns for building green software.",
    ctaText: "Browse patterns →",
    ctaHref: "#",
  },
];

export const ThreeColumns = {
  args: {
    heading: "Our",
    headingAccent: "Standards",
    body: "ISO-accredited specifications for measuring and reducing software emissions.",
    cards: sampleCards,
    columns: 3,
  },
};

export const TwoColumns = {
  args: {
    heading: "Featured",
    headingAccent: "Projects",
    cards: sampleCards.slice(0, 2),
    columns: 2,
  },
};
