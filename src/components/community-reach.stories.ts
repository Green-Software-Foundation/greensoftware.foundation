import CommunityReach from "./community-reach.astro";

export default {
  component: CommunityReach,
};

export const Default = {
  args: {
    heading: "Our *Reach*",
    body: "A global community of practitioners driving sustainable software forward.",
    stats: [
      { value: "450,000", label: "Podcast downloads" },
      { value: "12,000+", label: "Global meetup community members" },
      { value: "12,000", label: "LinkedIn followers" },
      { value: "7,800+", label: "Newsletter subscribers" },
      { value: "37", label: "Meetup groups across 17 countries" },
    ],
    ctaText: "Join the Movement Platform",
    ctaHref: "#",
  },
};

export const WithImage = {
  args: {
    heading: "By the *Numbers*",
    body: "The scale of the green software movement.",
    imageSrc: "/assets/world-map.svg",
    imageAlt: "Global reach",
    stats: [
      { value: "80+", label: "Member organisations" },
      { value: "195", label: "Articles published" },
      { value: "3", label: "ISO-accredited standards" },
    ],
    columns: 3,
  },
};
