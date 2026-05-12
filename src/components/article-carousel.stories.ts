import ArticleCarousel from "./article-carousel.astro";

export default {
  component: ArticleCarousel,
};

export const Default = {
  args: {
    heading: "Latest Articles",
    body: "News and insights from the green software community.",
    articles: [
      {
        title: "The State of Green Software 2025",
        description: "An annual report on the adoption and impact of green software practices worldwide.",
        href: "#",
        cta: "Read the article →",
      },
      {
        title: "SCI for AI: Measuring Machine Learning's Carbon Impact",
        description: "How the new SCI for AI specification helps teams measure and reduce AI carbon emissions.",
        href: "#",
        cta: "Read the article →",
      },
      {
        title: "Carbon Hack 24: Redefining Software Measurement",
        description: "Highlights from our flagship hackathon, featuring innovative approaches to carbon-aware computing.",
        href: "#",
        cta: "Read the article →",
      },
      {
        title: "Building a Global Meetup Network",
        description: "How the GSF meetup program grew to 37 groups across 17 countries.",
        href: "#",
        cta: "Read the article →",
      },
    ],
    ctaText: "View all articles →",
    ctaHref: "/articles/",
  },
};

export const NoOrganizations = {
  args: {
    heading: "Community & Events",
    body: "Stories from the green software community.",
    articles: [
      {
        title: "GSF Global Summit 2024",
        description: "A look back at the biggest green software event of the year.",
        href: "#",
        cta: "Read the article →",
      },
      {
        title: "London Meetup Recap",
        description: "Building a green tech culture, one meetup at a time.",
        href: "#",
        cta: "Read the article →",
      },
    ],
    showOrganizations: false,
  },
};
