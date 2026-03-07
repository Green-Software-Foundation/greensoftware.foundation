import Breadcrumb from "./breadcrumb.astro";

export default {
  component: Breadcrumb,
};

export const Default = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Articles", href: "/articles/" },
      { label: "Green Software Practices" },
    ],
  },
};

export const TwoLevels = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Standards" },
    ],
  },
};
