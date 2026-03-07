import Hero from "./hero.astro";

export default {
  component: Hero,
};

export const Default = {
  args: {
    heading: "Measure What Matters:",
    headingAccent: "Software's Carbon Impact",
    body: "Every software application has a carbon footprint through the energy it consumes and the hardware it requires.",
    ctas: [
      { text: "Get Started", variant: "primary", href: "#" },
      { text: "Learn More", variant: "outline", href: "#" },
    ],
    imageSrc: "/assets/hero-illustration.svg",
    imageAlt: "Hero illustration",
    bgClass: "bg-accent-lightest-2",
  },
};

export const WithSuffix = {
  args: {
    heading: "Brand",
    headingAccent: "& Assets",
    body: "Everything you need to represent the Green Software Foundation consistently.",
    ctas: [{ text: "Download guidelines", variant: "primary", href: "#" }],
    imageSrc: "/assets/hero-illustration.svg",
    imageAlt: "Brand illustration",
    bgClass: "bg-accent-lightest-2",
  },
};

export const Minimal = {
  args: {
    heading: "About the",
    headingAccent: "Green Software Foundation",
    body: "A non-profit building a trusted ecosystem of people, standards, tooling, and best practices for green software.",
    bgClass: "bg-accent-lightest-2",
  },
};
