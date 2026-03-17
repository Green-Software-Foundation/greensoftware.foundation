import ReleaseBanner from "./release-banner.astro";

export default {
  component: ReleaseBanner,
};

export const Default = {
  args: {
    releases: [
      { text: "SCI for AI ratified — the first consensus-based AI carbon standard", href: "/stories/sci-for-ai/" },
      { text: "SOFT framework ratified — embedding green software across every function", href: "/stories/soft-framework/" },
      { text: "Green Software Practitioner surpasses 130,000 completions", href: "/education/" },
    ],
  },
};

export const SingleItem = {
  args: {
    releases: [
      { text: "SCI for AI ratified — the first consensus-based AI carbon standard", href: "/stories/sci-for-ai/" },
    ],
  },
};
