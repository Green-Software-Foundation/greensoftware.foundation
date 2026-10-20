import MemberStories from "./member-stories.astro";

export default {
  component: MemberStories,
};

export const Default = {
  args: {
    heading: "Member *Stories*",
    body: "See how organizations are putting green software into practice.",
    stories: [
      {
        title: "Measuring Cloud Carbon at Scale",
        description: "How a global bank used SCI to baseline and reduce the carbon intensity of their cloud workloads.",
        href: "#",
      },
      {
        title: "Building a Green Engineering Culture",
        description: "A technology company's journey to embedding sustainability into their software development lifecycle.",
        href: "#",
      },
      {
        title: "AI-Powered Carbon Optimization",
        description: "Using machine learning to optimize workload scheduling based on grid carbon intensity.",
        href: "#",
      },
    ],
    footerCtaText: "View all stories →",
    footerCtaHref: "/stories/",
  },
};
