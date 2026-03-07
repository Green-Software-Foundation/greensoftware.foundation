import VerticalPipeline from "./vertical-pipeline.astro";

export default {
  component: VerticalPipeline,
};

export const Default = {
  args: {
    heading: "Specification *Lifecycle*",
    badge: "PROCESS",
    body: "Every GSF specification follows a rigorous, consensus-driven lifecycle.",
    steps: [
      { name: "Pre-proposal", description: "Initial idea discussion within the community." },
      { name: "Proposal", description: "Formal proposal submitted to a working group." },
      { name: "Draft", description: "Active development with community input." },
      { name: "Working Draft", description: "Stable enough for review and feedback." },
      { name: "Consistency Review", description: "Cross-working-group alignment check." },
      { name: "Ratification", description: "Final approval by the Steering Committee." },
      { name: "Published", description: "Released as an official GSF specification." },
    ],
  },
};
