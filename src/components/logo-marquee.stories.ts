import LogoMarquee from "./logo-marquee.astro";

export default {
  component: LogoMarquee,
};

export const Default = {
  args: {
    heading: "ISO-accredited and endorsed by leading technology organizations",
  },
};

export const CustomHeading = {
  args: {
    heading: "Trusted by 80+ member organizations worldwide",
    bgClass: "bg-white",
  },
};

export const Grayscale = {
  args: {
    heading: "Our members",
    grayscale: true,
  },
};
