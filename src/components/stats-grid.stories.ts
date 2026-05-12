import StatsGrid from "./stats-grid.astro";

export default {
  component: StatsGrid,
};

export const Default = {
  args: {
    heading: "The Numbers Behind Our",
    headingAccent: "Impact",
    body: "Since our founding in 2021, we've grown into a global force for sustainable software.",
    stats: [
      { value: "80+", label: "Member organisations" },
      { value: "3", label: "ISO-accredited standards" },
      { value: "450K", label: "Podcast downloads" },
      { value: "37", label: "Meetup groups" },
      { value: "12K+", label: "Community members" },
      { value: "17", label: "Countries" },
    ],
  },
};

export const WithCards = {
  args: {
    heading: "Green Software",
    headingAccent: "at Scale",
    stats: [
      { value: "80+", label: "Members" },
      { value: "3", label: "Standards" },
    ],
    cards: [
      { title: "Open Source", description: "All our specifications and tools are open source." },
      { title: "Consensus-driven", description: "Standards developed through industry consensus." },
    ],
  },
};
