import Hero from "./sections/Hero";
import InspiredByPlace from "./sections/InspiredByPlace";
import Motion from "./sections/Motion";
import Solutions from "./sections/Solutions";
import Development from "./sections/Development";
import Results from "./sections/Results";
import Reflection from "./sections/Reflection";
import CaseStudyNav, {
  type CaseStudyNavItem,
} from "@components/CaseStudyNav/CaseStudyNav";

import "./AspidaRe.css";

const aspidaReNavItems: CaseStudyNavItem[] = [
  {
    id: "Inspired-by-place",
    label: "Inspired by Place",
  },
  {
    id: "motion",
    label: "Motion",
  },
  {
    id: "solutions",
    label: "Solutions",
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

function AspidaRe() {
  return (
    <main className="aspidare-case-study">
      <Hero />
      <CaseStudyNav
        ariaLabel="Aspida Re case study sections"
        className="aspidare-case-study__nav"
        items={aspidaReNavItems}
        transparentUntilStuck
      />
      <InspiredByPlace />
      <Motion />
      <Solutions />
      <Development />
      <Results />
      <Reflection />
    </main>
  );
}

export default AspidaRe;
