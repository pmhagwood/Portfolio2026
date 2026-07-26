import "./Aspida.css";

import AspidaHero from "./sections/AspidaHero";
import AspidaChallenge from "./sections/AspidaChallenge";
import ConnectedExperience from "./sections/ConnectedExperience";
import CaseStudyNav, {
  type CaseStudyNavItem,
} from "@components/CaseStudyNav/CaseStudyNav";

const aspidaItems: CaseStudyNavItem[] = [
  {
    id: "aspidaexperience-challenge",
    label: "The Challenge",
  },
  {
    id: "connected-journeys",
    label: "Connected Journeys",
  },
];

export default function AspidaDigitalExperience() {
  return (
    <main className="aspida-experience">
      <AspidaHero />
      <CaseStudyNav
        ariaLabel="Aspida case study sections"
        className="aspida-case-study__nav"
        items={aspidaItems}
        transparentUntilStuck
      />
      <AspidaChallenge />
      <ConnectedExperience />
    </main>
  );
}
