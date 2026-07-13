import Hero from "./sections/Hero";
import Challenge from "./sections/Challenge";
import DesignDirection from "./sections/DesignDirection";
import InformationArchitecture from "./sections/InformationArchitecture";
import DesignSystem from "./sections/DesignSystem";
import GlobalExperience from "./sections/GlobalExperience";
import Results from "./sections/Results";
import Reflection from "./sections/Reflection";
import CaseStudyNav, {
  type CaseStudyNavItem,
} from "@components/CaseStudyNav/CaseStudyNav";

import "./AspidaRe.css";

const aspidaReNavItems: CaseStudyNavItem[] = [
  {
    id: "challenge",
    label: "Question",
  },
  {
    id: "design-direction",
    label: "Principles",
  },
  {
    id: "information-architecture",
    label: "Information Architecture",
  },
  {
    id: "design-system",
    label: "Design System",
  },
  {
    id: "global-experience",
    label: "Global Experience",
  },
  {
    id: "results",
    label: "Results",
  },
  {
    id: "reflection",
    label: "Reflection",
  },
];

function IncomeCalculator() {
  return (
    <main className="income-case-study">
      <Hero />
      <CaseStudyNav
        ariaLabel="Aspida Re case study sections"
        items={aspidaReNavItems}
      />
      <Challenge />
      <DesignDirection />
      <InformationArchitecture />
      <DesignSystem />
      <GlobalExperience />
      <Results />
      <Reflection />
    </main>
  );
}

export default IncomeCalculator;
