import NewsletterSignup from "./newsletter-signup.astro";

export default {
  component: NewsletterSignup,
};

export const Default = {
  args: {
    heading: "Stay up to date",
    body: "Get the latest green software news, articles, and industry insights from the GSF in our weekly newsletter.",
  },
};

export const Custom = {
  args: {
    heading: "Join the newsletter",
    body: "A regular digest of standards updates, community highlights, and upcoming events.",
  },
};
