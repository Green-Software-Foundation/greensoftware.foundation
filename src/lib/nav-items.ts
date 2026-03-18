/**
 * Shared navigation items used across all pages.
 * Extracted to avoid duplicating the full navbar config in every page template.
 *
 * Project icons are resolved from projects.json (fetched from the Notion PWCI table).
 * When icons change in Notion, re-running `npm run fetch-notion` updates them automatically.
 */
import projects from "@/data/projects.json";

// Build a slug → icon lookup from the fetched project data
const iconMap = new Map(
  projects.filter((p: any) => p.icon).map((p: any) => [p.slug, p.icon])
);

/** Return the project icon path for a given PWCI slug, or undefined */
function pi(slug: string): string | undefined {
  return iconMap.get(slug);
}

export const navItems = [
  {
    label: "Standards",
    footerLink: { href: "/standards/", label: "About our standards process →" },
    sections: [
      {
        title: "Software",
        links: [
          { href: "/standards/sci/", label: "SCI", description: "ISO-certified metric for software carbon intensity" /* iconSrc: pi("sci"), icon: "target" */ },
          { href: "/standards/sci-ai/", label: "SCI for AI", description: "Carbon measurement for AI systems" /* iconSrc: pi("sci-ai"), icon: "bot" */ },
          { href: "/standards/sci-web/", label: "SCI for Web", description: "Carbon measurement for web applications" /* iconSrc: pi("sci-web"), icon: "globe" */ },
          { href: "/standards/soft/", label: "SOFT", description: "Framework for organisational transformation" /* iconSrc: pi("soft"), icon: "workflow" */ },
          { href: "/standards/rtc/", label: "RTC", description: "Real-time energy and carbon for cloud providers" /* iconSrc: pi("real-time-cloud"), icon: "bar-chart" */ },
          { href: "/standards/see/", label: "SEE", description: "Software Energy Efficiency" /* iconSrc: pi("see"), icon: "zap" */ },
        ],
      },
      {
        title: "Hardware",
        links: [
          { href: "/standards/wdpc/", label: "WDPC", description: "Data centre power and cooling efficiency" /* iconSrc: pi("wdpc"), icon: "cloud" */ },
        ],
      },
      {
        title: "Process",
        links: [
          { href: "/standards/certification/", label: "Certification", description: "Get certified in green software specifications" /* iconSrc: pi("sci-certification"), icon: "award" */ },
          { href: "/assemblies/", label: "Assemblies", description: "AI-facilitated consensus at scale" /* icon: "messages-square" */ },
        ],
      },
    ],
  },
  {
    label: "Policy & Research",
    footerLink: { href: "/policy/", label: "About our policy & research →" },
    sections: [
      {
        title: "Resources",
        links: [
          { href: "/policy/whitepapers/", label: "Whitepapers", description: "Policy and legislation alignment white papers" },
          { href: "https://policy-radar.greensoftware.foundation", label: "Policy Radar", description: "Track emerging legislation and regulatory trends", external: true },
          { href: "https://stateof.greensoftware.foundation", label: "State of Green Software", description: "Annual report on the state of green software", external: true },
        ],
      },
    ],
  },
  {
    label: "Adoption",
    sections: [
      {
        title: "Education",
        headerLink: { href: "/education/", label: "About our education programme →" },
        links: [
          { href: "https://learn.greensoftware.foundation", label: "Courses", /* iconSrc: pi("gs-practitioner"), icon: "graduation-cap", */ external: true },
          { href: "https://patterns.greensoftware.foundation", label: "Patterns", /* iconSrc: pi("gs-patterns"), icon: "book-open", */ external: true },
          { href: "https://github.com/Green-Software-Foundation/awesome-green-software", label: "Resource Catalogue", /* iconSrc: pi("awesome-gs"), icon: "trophy", */ external: true },
        ],
      },
      {
        title: "Tools",
        links: [
          { href: "https://github.com/Green-Software-Foundation/carbon-aware-sdk", label: "Carbon Aware SDK", description: "SDK for building carbon-aware applications", /* iconSrc: pi("carbon-aware-sdk"), icon: "cloud", */ external: true },
          { href: "https://github.com/Green-Software-Foundation/carmen", label: "Carmen", description: "Automated carbon reporting for cloud workloads", /* iconSrc: pi("carmen"), icon: "calculator", */ external: true },
          { href: "https://if.greensoftware.foundation", label: "Impact Framework", description: "Measure the carbon footprint of your software", /* iconSrc: pi("if"), icon: "workflow", */ external: true },
        ],
      },
    ],
  },
  {
    label: "Community",
    footerLink: { href: "/community/", label: "About our community programme →" },
    sections: [
      {
        title: "Listen",
        links: [
          { href: "https://podcast.greensoftware.foundation", label: "Environment Variables", description: "Practitioner-focused podcast", /* iconSrc: pi("environment-variables-podcast"), icon: "mic", */ external: true },
          { href: "https://wiki.greensoftware.foundation/cxo-bytes-podcast", label: "CXO Bytes", description: "C-suite focused podcast", /* iconSrc: pi("cxo-bytes-podcast"), icon: "mic", */ external: true },
        ],
      },
      {
        title: "Connect",
        links: [
          { href: "https://movement.greensoftware.foundation", label: "Movement Platform", /* iconSrc: pi("movement-platform"), icon: "users", */ external: true },
          { href: "/newsletter/", label: "Newsletter", /* icon: "newspaper", */ },
          { href: "https://badges.greensoftware.foundation", label: "Badges", /* icon: "badge", */ external: true },
          { href: "https://champions.greensoftware.foundation", label: "Champions Programme", /* iconSrc: pi("green-software-champions"), icon: "trophy", */ external: true },
        ],
      },
      {
        title: "Events",
        links: [
          { href: "https://summit.greensoftware.foundation", label: "Summit", /* icon: "calendar", */ external: true },
          { href: "https://hack.greensoftware.foundation/", label: "Carbon Hack", /* icon: "zap", */ external: true },
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
          { href: "/about/", label: "About" /* icon: "building-2" */ },
          { href: "/governance/", label: "Governance & Leadership" /* icon: "shield" */ },
          { href: "/brand/", label: "Brand & Assets" /* icon: "palette" */ },
          { href: "/contact/", label: "Contact" /* icon: "mail" */ },
          { href: "https://directory.greensoftware.foundation/members", label: "Member Directory", /* icon: "users", */ external: true },
          { href: "https://directory.greensoftware.foundation/working-groups", label: "Working Groups", external: true },
          { href: "https://directory.greensoftware.foundation/committees", label: "Committees", external: true },
          { href: "https://directory.greensoftware.foundation/projects", label: "Projects", external: true },
        ],
      },
      {
        title: "Impact",
        links: [
          { href: "/stories/", label: "Member Stories" /* icon: "book-open" */ },
          { href: "/articles/", label: "Articles" /* icon: "newspaper" */ },
          { href: "/press/", label: "Press & Media" /* icon: "mic" */ },
        ],
      },
      {
        title: "For Members",
        links: [
          { href: "https://wiki.greensoftware.foundation/getting-started", label: "Getting Started", /* icon: "book-open", */ external: true },
          { href: "https://wiki.greensoftware.foundation/orientation", label: "Member Onboarding", /* icon: "handshake", */ external: true },
          { href: "https://wiki.greensoftware.foundation/register", label: "Employee Registration", description: "Register to join working groups and initiatives", /* icon: "users", */ external: true },
        ],
      },
    ],
  },
];
