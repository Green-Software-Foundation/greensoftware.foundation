import Testimonial from "./testimonial.astro";

export default {
  component: Testimonial,
};

export const Default = {
  args: {
    quote: "SCI specification provided a practical methodology to baseline carbon emissions of the application, including embodied emissions and reducing the same.",
    author: "Navveen Balani",
    title: "Managing Director, Chief Technologist",
    company: "Accenture",
  },
};

export const Short = {
  args: {
    quote: "The Green Software Foundation is leading the way in sustainable software standards.",
    author: "Gadhu Sundaram",
    title: "Chair",
    company: "Green Software Foundation",
  },
};
