import SplitCards from "./split-cards.astro";

export default {
  component: SplitCards,
};

export const Default = {
  args: {
    heading: "Business Benefits",
    body: "Green software isn't just good for the planet — it delivers real business value through cost reduction, risk mitigation, and competitive advantage.",
    iconSrc: "/assets/standardized-icon.svg",
    quote: "Implementing green software practices reduced our cloud costs by 30% while cutting our carbon footprint in half.",
    attribution: {
      name: "Engineering Lead",
      role: "VP Engineering",
      company: "Member Organisation",
    },
  },
};
