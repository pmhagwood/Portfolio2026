import { useEffect, useState } from "react";

import contributionMode from "@assets/images/income-calculator/design-process/contribution-mode.jpg";
import incomeMode from "@assets/images/income-calculator/design-process/income-mode.jpg";

import "./TwoPlanningPaths.css";

type PlanningMode = "contribution" | "income";

const modes = {
  contribution: {
    label: "Start with a contribution",
    shortLabel: "Contribution",
    description:
      "Begin with the amount available to invest and calculate the monthly income it could provide.",
    image: contributionMode,
    imageAlt:
      "Income Calculator in contribution mode, allowing a user to enter an investment amount",
  },
  income: {
    label: "Start with desired income",
    shortLabel: "Desired income",
    description:
      "Begin with a monthly income goal and calculate the contribution that may be required.",
    image: incomeMode,
    imageAlt:
      "Income Calculator in desired-income mode, allowing a user to enter a monthly income goal",
  },
} satisfies Record<
  PlanningMode,
  {
    label: string;
    shortLabel: string;
    description: string;
    image: string;
    imageAlt: string;
  }
>;

const AUTO_CHANGE_DELAY = 4000;

function TwoPlanningPaths() {
  const [activeMode, setActiveMode] = useState<PlanningMode>("contribution");

  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (hasInteracted) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setActiveMode((currentMode) =>
        currentMode === "contribution" ? "income" : "contribution",
      );
    }, AUTO_CHANGE_DELAY);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [activeMode, hasInteracted]);

  const selectMode = (mode: PlanningMode) => {
    setActiveMode(mode);
    setHasInteracted(true);
  };

  return (
    <div className="planning-paths">
      <div className="planning-paths__controls">
        <p className="planning-paths__label">Choose a planning mindset</p>

        <div
          className="planning-paths__tabs"
          role="tablist"
          aria-label="Income Calculator planning modes"
        >
          {(Object.keys(modes) as PlanningMode[]).map((mode) => {
            const isActive = activeMode === mode;

            return (
              <button
                className={`planning-paths__tab ${isActive ? "is-active" : ""}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`planning-panel-${mode}`}
                id={`planning-tab-${mode}`}
                onClick={() => selectMode(mode)}
                key={mode}
              >
                {modes[mode].shortLabel}
              </button>
            );
          })}
        </div>

        <div
          className="planning-paths__explanation"
          role="tabpanel"
          id={`planning-panel-${activeMode}`}
          aria-labelledby={`planning-tab-${activeMode}`}
        >
          <h4>{modes[activeMode].label}</h4>
          <p>{modes[activeMode].description}</p>
        </div>
      </div>

      <div className="planning-paths__visual">
        {(Object.keys(modes) as PlanningMode[]).map((mode) => {
          const isActive = activeMode === mode;
          const item = modes[mode];

          return (
            <figure
              className={`planning-paths__figure ${
                isActive ? "is-active" : ""
              }`}
              aria-hidden={!isActive}
              key={mode}
            >
              <img src={item.image} alt={isActive ? item.imageAlt : ""} />
            </figure>
          );
        })}

        <div className="planning-paths__annotation" aria-hidden="true">
          <span>Two questions.</span>
          <strong>One flexible experience.</strong>
        </div>
      </div>
    </div>
  );
}

export default TwoPlanningPaths;
