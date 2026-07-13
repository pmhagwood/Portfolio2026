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
    href: "/work/income-calculator",
    previewKey: "income",
  },
  {
    number: "02",
    title: "Aspida Re Redesign",
    statement:
      "Modernizing a global financial brand without sacrificing trust.",
    description:
      "A complete redesign of Aspida Re’s digital experience, combining institutional credibility with playful motion, island-inspired storytelling, and a scalable front-end system.",
    disciplines: [
      "Creative Direction",
      "Interactive Design",
      "Front-end Development",
      "Brand Experience",
    ],
    className: "project--aspidare",
    href: "/work/aspida-re",
    previewKey: "aspidare",
  },
  {
    number: "03",
    title: "When Will I Die?",
    statement: "Turning an uncomfortable question into an engaging experience.",
    description:
      "A playful mobile-first experience combining storytelling, interaction, animation, and behavioral design to encourage exploration.",
    disciplines: ["Product Design", "Interaction Design", "Motion", "React"],
    className: "project--wwid",
    href: "/work/when-will-i-die",
    previewKey: "wwid",
  },
  {
    number: "04",
    title: "Aspida Digital Experience",
    statement: "Designing a digital ecosystem instead of isolated experiences.",
    description:
      "A growing collection of websites, educational experiences, calculators, product tools, and design systems that work together as one connected platform.",
    disciplines: [
      "UX Architecture",
      "Design Systems",
      "Front-end Engineering",
      "Leadership",
    ],
    className: "project--aspida",
    href: "/work/aspida",
    previewKey: "aspida",
  },
];
