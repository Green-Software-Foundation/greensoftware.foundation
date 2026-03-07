import TextWithImage from "./text-with-image.astro";

export default {
  component: TextWithImage,
};

export const Default = {
  args: {
    badge: "MEASUREMENT",
    heading: "Understanding a Carbon",
    headingAccent: "Lifecycle",
    body: "Every software application has a carbon lifecycle — from the energy consumed during development and testing to the operational emissions of running in production.",
    ctaText: "Learn more →",
    ctaHref: "#",
    imageSrc: "/assets/hero-illustration.svg",
    imageAlt: "Carbon lifecycle illustration",
  },
};

export const Reversed = {
  args: {
    badge: "EDUCATION",
    heading: "Green Software for",
    headingAccent: "Practitioners",
    body: "A free online course covering the core concepts of green software engineering. Learn to build applications that are carbon efficient, energy efficient, and hardware efficient.",
    ctaText: "Take the course →",
    ctaHref: "#",
    imageSrc: "/assets/hero-illustration.svg",
    imageAlt: "Education illustration",
    reversed: true,
  },
};

export const WithStats = {
  args: {
    badge: "IMPACT",
    heading: "SCI for",
    headingAccent: "AI",
    stats: ["First AI-specific carbon standard", "ISO-accredited methodology"],
    body: "Extending the Software Carbon Intensity specification to measure the environmental impact of AI and machine learning workloads.",
    ctaText: "Read the specification →",
    ctaHref: "#",
    imageSrc: "/assets/hero-illustration.svg",
    imageAlt: "SCI for AI",
  },
};

export const LightHeading = {
  args: {
    heading: "Policy",
    headingAccent: "Radar",
    body: "Tracking green software policy developments across the globe, mapping regulations and standards that affect software sustainability.",
    ctaText: "Explore the radar →",
    ctaHref: "#",
    imageSrc: "/assets/hero-illustration.svg",
    imageAlt: "Policy Radar",
    headingStyle: "light",
  },
};
