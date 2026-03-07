import CTACard from "./cta-card.astro";

export default {
  component: CTACard,
};

export const Default = {
  args: {
    heading: "Want to *contribute?*",
    body: "Join our community of practitioners building the future of sustainable software.",
    ctaText: "Get involved",
    ctaHref: "#",
    imageSrc: "/assets/ready.svg",
    imageAlt: "Get involved illustration",
  },
};

export const WithHtml = {
  args: {
    heading: "SCI *Certification*",
    bodyHtml: "<p>Get your software certified against the <strong>SCI specification</strong> — the world's first ISO-accredited standard for software carbon intensity.</p>",
    ctaText: "Learn about certification",
    ctaHref: "#",
    imageSrc: "/assets/hero-illustration.svg",
    imageAlt: "Certification illustration",
  },
};
