import TeamGrid from "./team-grid.astro";

export default {
  component: TeamGrid,
};

export const Default = {
  args: {
    heading: "Our *Leadership*",
    body: "The team driving the Green Software Foundation forward.",
    members: [
      { fullName: "Jane Smith", role: "Executive Director", company: "GSF" },
      { fullName: "Alex Chen", role: "Head of Standards", company: "GSF" },
      { fullName: "Maria Garcia", role: "Head of Policy", company: "GSF" },
      { fullName: "Tom Wilson", role: "Head of Education", company: "GSF" },
      { fullName: "Sarah Lee", role: "Head of Community", company: "GSF" },
      { fullName: "James Park", role: "Head of Research", company: "GSF" },
    ],
    columns: 3,
  },
};

export const WithHighlighted = {
  args: {
    heading: "Governance & *Leadership*",
    highlighted: [
      { fullName: "Gadhu Sundaram", role: "Chair", company: "Accenture" },
      { fullName: "Jonathan Turnbull", role: "Vice-Chair", company: "Google" },
    ],
    members: [
      { fullName: "Jane Smith", role: "Executive Director", company: "GSF" },
      { fullName: "Alex Chen", role: "Head of Standards", company: "GSF" },
    ],
    columns: 4,
  },
};
