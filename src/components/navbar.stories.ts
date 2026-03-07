import Navbar from "./navbar.astro";

export default {
  component: Navbar,
};

export const FullLogo = {
  args: {
    logoSrc: "/assets/gsf-logo-full.svg",
    logoAlt: "Green Software Foundation",
    logoHref: "/",
    topBar: "none",
    showSearch: true,
    ctaText: "Discuss your challenges",
    ctaHref: "/membership/",
  },
};

export const ProjectBy = {
  args: {
    logoSrc: "/assets/gsf-logo-full.svg",
    logoAlt: "Green Software Foundation",
    logoHref: "/",
    topBar: "project-by",
    ctaText: "Get Started",
    ctaHref: "#",
  },
};

export const Minimal = {
  args: {
    logoSrc: "/assets/gsf-logo-full.svg",
    logoAlt: "Green Software Foundation",
    logoHref: "/",
    topBar: "none",
  },
};
