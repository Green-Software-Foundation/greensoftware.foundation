/**
 * Shared navigation items used across all pages.
 * Extracted to avoid duplicating the full navbar config in every page template.
 */
export const navItems = [
  {
    label: "Standards",
    footerLink: { href: "/standards/", label: "All standards →" },
    sections: [
      {
        title: "Software",
        links: [
          { href: "/standards/sci/", label: "SCI", description: "ISO-certified metric for software carbon intensity", iconSrc: "/assets/icons/sci-mark.svg" },
          { href: "/standards/soft/", label: "SOFT", description: "Framework for organisational transformation", iconSrc: "/assets/icons/soft-mark.svg" },
          { href: "/standards/sci-ai/", label: "SCI for AI", description: "Carbon measurement for AI systems", icon: "bot" },
          { href: "/standards/swe/", label: "SWE", description: "Software Water Efficiency", icon: "droplets" },
          { href: "/standards/see/", label: "SEE", description: "Software Energy Efficiency", icon: "zap" },
        ],
      },
      {
        title: "Hardware",
        links: [
          { href: "/standards/wdpc/", label: "WDPC", description: "Data centre power and cooling efficiency", iconSrc: "/assets/icons/wdpc-mark.svg" },
        ],
      },
      {
        title: "Process",
        links: [
          { href: "/standards/certification/", label: "Certification", description: "Get certified in green software specifications", icon: "award" },
          { href: "/assemblies/", label: "Assemblies", description: "AI-facilitated consensus at scale", icon: "messages-square" },
        ],
      },
    ],
  },
  {
    label: "Adoption",
    footerLink: { href: "/research/", label: "All research →" },
    sections: [
      {
        title: "Education",
        links: [
          { href: "https://learn.greensoftware.foundation", label: "Courses", external: true },
          { href: "https://patterns.greensoftware.foundation", label: "Patterns", external: true },
          { href: "https://github.com/Green-Software-Foundation/awesome-green-software", label: "Awesome Green Software", external: true },
        ],
      },
      {
        title: "Policy & Research",
        links: [
          { href: "/policy/", label: "Manifesto" },
          { href: "/policy/radar/", label: "Policy Radar", description: "Track emerging legislation and regulatory trends" },
          { href: "/policy/#engagement", label: "Policy Engagement" },
          { href: "/research/state-of-green-software/", label: "State of Green Software" },
        ],
      },
      {
        title: "Tools",
        links: [
          { href: "https://github.com/Green-Software-Foundation/carbon-aware-sdk", label: "Carbon Aware SDK", description: "SDK for building carbon-aware applications", external: true },
          { href: "https://github.com/Green-Software-Foundation/carmen", label: "Carmen", description: "Automated carbon reporting for cloud workloads", external: true },
          { href: "https://if.greensoftware.foundation", label: "Impact Framework", description: "Measure the carbon footprint of your software", external: true },
        ],
      },
    ],
  },
  {
    label: "Community",
    footerLink: { href: "/community/", label: "About our community →" },
    sections: [
      {
        title: "Listen & Learn",
        links: [
          { href: "https://podcast.greensoftware.foundation", label: "Environment Variables", description: "Practitioner-focused podcast", external: true },
          { href: "https://podcast.greensoftware.foundation/cxo-bytes", label: "CXO Bytes", description: "C-suite focused podcast", external: true },
          { href: "/articles/", label: "Articles" },
        ],
      },
      {
        title: "Connect",
        links: [
          { href: "https://community.greensoftware.foundation", label: "Community Platform", external: true },
          { href: "https://newsletter.greensoftware.foundation", label: "Newsletter", external: true },
          { href: "https://badges.greensoftware.foundation", label: "Badges", external: true },
          { href: "https://champions.greensoftware.foundation", label: "Champions Programme", external: true },
        ],
      },
      {
        title: "Events",
        links: [
          { href: "https://summit.greensoftware.foundation", label: "Summit", external: true },
          { href: "https://carbonhack.greensoftware.foundation", label: "Carbon Hack", external: true },
        ],
      },
    ],
  },
  {
    label: "About",
    sections: [
      {
        title: "Organisation",
        links: [
          { href: "/about/", label: "About" },
          { href: "/governance/", label: "Governance & Leadership" },
          { href: "/history/", label: "History" },
          { href: "/brand/", label: "Brand & Assets" },
          { href: "https://directory.greensoftware.foundation/members", label: "Member Directory", external: true },
          { href: "https://directory.greensoftware.foundation/partners", label: "Partner Directory", external: true },
          { href: "https://directory.greensoftware.foundation/working-groups", label: "Working Groups", external: true },
          { href: "https://directory.greensoftware.foundation/committees", label: "Committees", external: true },
          { href: "https://directory.greensoftware.foundation/projects", label: "Projects", external: true },
        ],
      },
      {
        title: "Impact",
        links: [
          { href: "/impact/", label: "Success Stories" },
          { href: "/articles/", label: "Articles" },
          { href: "/impact/#press", label: "Press & Media" },
        ],
      },
      {
        title: "For Members",
        links: [
          { href: "https://playbook.greensoftware.foundation", label: "Member Playbook", external: true },
          { href: "https://onboarding.greensoftware.foundation", label: "Member Onboarding", external: true },
          { href: "https://register.greensoftware.foundation", label: "Employee Registration", description: "If you're an employee of an existing member organisation, register here to join working groups and initiatives", external: true },
        ],
      },
    ],
  },
];
