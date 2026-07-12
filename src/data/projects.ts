import type { Project } from "@app-types/Project";

export const projects: Project[] = [
  {
    number: "01",
    title: "Guaranteed Income Calculator",
    statement: "Making retirement planning easier to understand.",
    description:
      "A responsive financial-planning experience that translates complex income scenarios into a clear, approachable tool.",
    disciplines: ["Product strategy", "UX design", "React", "API integration"],
    className: "project--income",
  },
  {
    number: "02",
    title: "When Will I Die?",
    statement: "Making a difficult subject surprisingly engaging.",
    description:
      "A playful mobile-first experience combining interaction, education, animation, and storytelling.",
    disciplines: [
      "Product design",
      "Interaction design",
      "Creative direction",
      "TypeScript",
    ],
    className: "project--wwid",
  },
  {
    number: "03",
    title: "Aspida Digital Experience",
    statement: "Building an enterprise ecosystem—not just individual pages.",
    description:
      "A connected collection of product experiences, educational tools, design systems, and digital platforms.",
    disciplines: [
      "UX leadership",
      "Front-end architecture",
      "Accessibility",
      "Digital strategy",
    ],
    className: "project--aspida",
  },
];
