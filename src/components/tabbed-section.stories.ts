import TabbedSection from "./tabbed-section.astro";

export default {
  component: TabbedSection,
};

export const Default = {
  args: {
    badge: "STANDARDS",
    heading: "SCI Specification",
    tabs: [
      { value: "problem", heading: "The Problem", description: "Software carbon emissions are invisible. Without a standard way to measure them, organisations can't manage what they can't see." },
      { value: "solution", heading: "The Solution", description: "SCI provides a rate-based score (carbon per unit of work) that enables fair comparison and continuous improvement." },
      { value: "impact", heading: "The Impact", description: "Teams using SCI report 20-40% reductions in software carbon intensity within the first year." },
    ],
    imageSrc: "/assets/hero-illustration.svg",
    imageAlt: "SCI illustration",
    ctaText: "Read the specification →",
    ctaHref: "#",
  },
};

export const Compact = {
  args: {
    badge: "EDUCATION",
    heading: "Green Software Practitioner",
    tabs: [
      { value: "what", heading: "What You'll Learn", description: "Core concepts of green software: carbon efficiency, energy efficiency, hardware efficiency, and carbon awareness." },
      { value: "who", heading: "Who It's For", description: "Developers, architects, and engineering leaders who want to build sustainable software." },
    ],
    imageSrc: "/assets/hero-illustration.svg",
    imageAlt: "Course illustration",
    ctaText: "Start the course →",
    ctaHref: "#",
    compact: true,
  },
};
