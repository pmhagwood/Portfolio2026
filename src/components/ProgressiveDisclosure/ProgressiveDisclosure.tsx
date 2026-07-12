import { useEffect, useState } from "react";

import singlePlan from "@assets/images/income-calculator/design-process/plan-type-single.png";
import jointPlan from "@assets/images/income-calculator/design-process/plan-type-joint.png";

import "./ProgressiveDisclosure.css";

type PlanType = "single" | "joint";

const plans = {
  single: {
    label: "Single plan",
    title: "Keep the experience focused",
    description:
      "Single-life planning asks only for the information needed to calculate an individual result.",
    image: singlePlan,
    imageAlt:
      "Income Calculator showing the single plan selected with only the user's age field visible",
  },
  joint: {
    label: "Joint plan",
    title: "Reveal relevant information",
    description:
      "Selecting a joint plan introduces the spouse-age field without adding complexity to the experience.",
    image: jointPlan,
    imageAlt:
      "Income Calculator showing the joint plan selected with both user age and spouse age fields visible",
  },
} satisfies Record<
  PlanType,
  {
    label: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  }
>;

const AUTO_CHANGE_DELAY = 4000;

function ProgressiveDisclosure() {
  const [activePlan, setActivePlan] = useState<PlanType>("single");
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
      setActivePlan((currentPlan) =>
        currentPlan === "single" ? "joint" : "single",
      );
    }, AUTO_CHANGE_DELAY);

    return () => window.clearTimeout(timeoutId);
  }, [activePlan, hasInteracted]);

  const selectPlan = (plan: PlanType) => {
    setActivePlan(plan);
    setHasInteracted(true);
  };

  return (
    <div className="progressive-disclosure">
      <div className="progressive-disclosure__content">
        <p className="progressive-disclosure__eyebrow">
          Progressive disclosure
        </p>

        <h4>{plans[activePlan].title}</h4>

        <p className="progressive-disclosure__description">
          {plans[activePlan].description}
        </p>

        <div
          className="progressive-disclosure__tabs"
          role="tablist"
          aria-label="Income Calculator plan type"
        >
          {(Object.keys(plans) as PlanType[]).map((plan) => {
            const isActive = activePlan === plan;

            return (
              <button
                className={`progressive-disclosure__tab ${
                  isActive ? "is-active" : ""
                }`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`plan-panel-${plan}`}
                id={`plan-tab-${plan}`}
                onClick={() => selectPlan(plan)}
                key={plan}
              >
                {plans[plan].label}
              </button>
            );
          })}
        </div>

        <p className="progressive-disclosure__principle">
          Only ask for information when it is actually needed.
        </p>
      </div>

      <div
        className="progressive-disclosure__visual"
        role="tabpanel"
        id={`plan-panel-${activePlan}`}
        aria-labelledby={`plan-tab-${activePlan}`}
      >
        {(Object.keys(plans) as PlanType[]).map((plan) => {
          const isActive = activePlan === plan;
          const item = plans[plan];

          return (
            <figure
              className={`progressive-disclosure__figure ${
                isActive ? "is-active" : ""
              }`}
              aria-hidden={!isActive}
              key={plan}
            >
              <img src={item.image} alt={isActive ? item.imageAlt : ""} />
            </figure>
          );
        })}

        <div
          className={`progressive-disclosure__field-callout ${
            activePlan === "joint" ? "is-visible" : ""
          }`}
          aria-hidden="true"
        >
          <span>New field</span>
          <strong>Spouse age appears</strong>
        </div>
      </div>
    </div>
  );
}

export default ProgressiveDisclosure;
