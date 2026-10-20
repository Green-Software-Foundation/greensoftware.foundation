import Timeline from "./timeline.astro";

export default {
  component: Timeline,
};

export const Default = {
  args: {
    heading: "Our *Journey*",
    body: "Key milestones in the green software movement.",
    items: [
      { date: "May 2021", description: "<strong>GSF Founded</strong> — Launched by Accenture, GitHub, Microsoft, and ThoughtWorks under the Linux Foundation.", completed: true },
      { date: "Nov 2022", description: "<strong>SCI v1.0 Published</strong> — The first ISO-accredited standard for measuring software carbon intensity.", completed: true },
      { date: "Mar 2023", description: "<strong>Carbon Hack 22</strong> — Our flagship hackathon attracting teams from around the world.", completed: true },
      { date: "Dec 2024", description: "<strong>SCI for AI Ratified</strong> — Extending the SCI specification to AI and machine learning workloads.", completed: true },
      { date: "2025", description: "<strong>Real-Time Cloud</strong> — Developing a standard for real-time carbon measurement of cloud workloads.", current: true },
      { date: "Future", description: "<strong>Global Adoption</strong> — Working toward universal adoption of green software standards." },
    ],
  },
};
