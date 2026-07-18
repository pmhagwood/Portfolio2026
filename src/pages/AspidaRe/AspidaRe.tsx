import Hero from "./sections/Hero";
import InspiredByPlace from "./sections/InspiredByPlace";
import PartnershipStory from "./sections/PartnershipStory";
import Solutions from "./sections/Solutions";
import CraftingExperience from "./sections/CraftingExperience";
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
    id: "partnership-story",
    label: "Partnership Story",
  },
  {
    id: "solutions",
    label: "Solutions",
  },
  {
    id: "crafting-the-experience",
    label: "Crafting the Experience",
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
      <PartnershipStory />
      <Solutions />
      <CraftingExperience />
      <Results />
      <Reflection />
    </main>
  );
}

export default AspidaRe;
