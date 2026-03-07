import CTABanner from "./cta-banner.astro";

export default {
  component: CTABanner,
};

export const Default = {
  args: {
    heading: "Ready to Get Started?",
    body: "Join the movement for sustainable software development.",
    ctaText: "Get Started",
    ctaHref: "#",
  },
};

export const WithNote = {
  args: {
    heading: "Join the movement",
    body: "Whether you want to listen to a podcast, attend a meetup, or champion green software — there's a place for you.",
    ctaText: "Join the Movement Platform",
    ctaHref: "#",
    note: "Free for individuals and non-profits.",
  },
};
