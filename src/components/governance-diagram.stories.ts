import GovernanceDiagram from "./governance-diagram.astro";

export default {
  component: GovernanceDiagram,
};

export const Default = {
  args: {},
};

export const WhiteBg = {
  args: {
    bgClass: "bg-white",
  },
};
