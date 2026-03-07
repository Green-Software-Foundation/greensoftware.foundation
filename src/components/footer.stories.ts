import Footer from "./footer.astro";

export default {
  component: Footer,
};

export const Default = {
  args: {
    sections: [
      {
        title: "Our Work",
        links: [
          { href: "/standards/", text: "Standards" },
          { href: "/policy/", text: "Policy" },
          { href: "/education/", text: "Education" },
          { href: "/research/", text: "Research" },
          { href: "/stories/", text: "Member Stories" },
        ],
      },
      {
        title: "About",
        links: [
          { href: "/about/", text: "About GSF" },
          { href: "/governance/", text: "Governance & Leadership" },
          { href: "/articles/", text: "Articles" },
        ],
      },
      {
        title: "Join",
        links: [
          { href: "/membership/", text: "Become a Member" },
          { href: "https://newsletter.greensoftware.foundation", text: "Newsletter" },
          { href: "https://summit.greensoftware.foundation", text: "Events" },
        ],
      },
      {
        title: "Contact",
        type: "contact",
        socialLinks: [
          { href: "https://github.com/Green-Software-Foundation", icon: "github", label: "GitHub" },
          { href: "https://www.linkedin.com/company/green-software-foundation/", icon: "linkedin", label: "LinkedIn" },
          { href: "mailto:help@greensoftware.foundation", icon: "email", label: "Email" },
        ],
      },
    ],
  },
};
