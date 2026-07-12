import Hero from "./sections/Hero";
import Challenge from "./sections/Challenge";
import Principles from "./sections/Principles";
import DesignProcess from "./sections/DesignProcess";
import Development from "./sections/Development";
import Results from "./sections/Results";
import Reflection from "./sections/Reflection";
import CaseStudyNav, {
  type CaseStudyNavItem,
} from "@components/CaseStudyNav/CaseStudyNav";

import "./IncomeCalculator.css";

const incomeCalculatorNavItems: CaseStudyNavItem[] = [
  {
    id: "challenge",
    label: "Question",
  },
  {
    id: "principles",
    label: "Principles",
  },
  {
    id: "design-process",
    label: "Process",
  },
  {
    id: "development",
    label: "Development",
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
        ariaLabel="Income Calculator case study sections"
        items={incomeCalculatorNavItems}
      />
      <Challenge />
      <Principles />
      <DesignProcess />
      <Development />
      <Results />
      <Reflection />
    </main>
  );
}

export default IncomeCalculator;
