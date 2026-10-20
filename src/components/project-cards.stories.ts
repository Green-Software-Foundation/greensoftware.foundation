import ProjectCards from "./project-cards.astro";

export default {
  component: ProjectCards,
};

export const Default = {
  args: {
    heading: "How members are *solving real problems*",
    body: "Every story starts the same way: an organization brings us a problem they can't solve alone",
    projects: [
      {
        title: "Our engineers don't know how to build green software",
        description:
          "Goldman Sachs, Avanade, and GSF members worldwide built and scaled the Green Software Practitioner course — now completed by over 130,000 engineers across the industry.",
        orgs: [
          { name: "Goldman Sachs", logoSrc: "/assets/logos/goldman-sachs.png" },
          { name: "Avanade", logoSrc: "/assets/logos/avanade.webp" },
          { name: "Microsoft", logoSrc: "/assets/logos/microsoft.svg" },
          { name: "Accenture", logoSrc: "/assets/logos/accenture.svg" },
          { name: "ThoughtWorks", logoSrc: "/assets/logos/thoughtworks.svg" },
          { name: "NTT DATA", logoSrc: "/assets/logos/ntt-data.png" },
        ],
        href: "#",
      },
      {
        title: "Our pilots work but nothing scales across the org",
        description:
          "Eight GSF member organizations built SOFT — the first ratified standard for embedding green software practices across an entire organization.",
        orgs: [
          { name: "HSBC", logoSrc: "/assets/logos/hsbc.svg" },
          { name: "Microsoft", logoSrc: "/assets/logos/microsoft.svg" },
          { name: "NTT DATA", logoSrc: "/assets/logos/ntt-data.png" },
          { name: "Siemens", logoSrc: "/assets/logos/siemens.png" },
          { name: "UBS", logoSrc: "/assets/logos/ubs.png" },
          { name: "Cisco", logoSrc: "/assets/logos/cisco.svg" },
        ],
        href: "#",
      },
    ],
    footerCtaText: "Browse all member stories",
    footerCtaHref: "/stories/",
  },
};

export const SingleCard = {
  args: {
    heading: "A single *project*",
    projects: [
      {
        title: "We can't measure software carbon",
        description:
          "11 organizations built the Software Carbon Intensity specification into ISO 21031:2024.",
        orgs: [
          { name: "Accenture", logoSrc: "/assets/logos/accenture.svg" },
          { name: "UBS", logoSrc: "/assets/logos/ubs.png" },
          { name: "Microsoft", logoSrc: "/assets/logos/microsoft.svg" },
        ],
        href: "#",
        cta: "Learn more →",
      },
    ],
  },
};

export const NoLogos = {
  args: {
    heading: "Projects without *logos*",
    projects: [
      {
        title: "A project with text only",
        description:
          "This card has no organization logos to demonstrate the fallback layout.",
        href: "#",
      },
      {
        title: "Another text-only project",
        description:
          "Clean card without the scrolling logo strip at the bottom.",
        href: "#",
      },
    ],
  },
};
