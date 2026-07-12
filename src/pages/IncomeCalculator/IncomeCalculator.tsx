import Hero from "./sections/Hero";
import Challenge from "./sections/Challenge";
import Principles from "./sections/Principles";
import DesignProcess from "./sections/DesignProcess";
import Development from "./sections/Development";
import Results from "./sections/Results";
import Reflection from "./sections/Reflection";

import "./IncomeCalculator.css";

function IncomeCalculator() {
  return (
    <main className="income-case-study">
      <Hero />
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
