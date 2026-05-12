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
    heading: "Trusted by 80+ member organisations worldwide",
    bgClass: "bg-white",
  },
};

export const Greyscale = {
  args: {
    heading: "Our members",
    greyscale: true,
  },
};
