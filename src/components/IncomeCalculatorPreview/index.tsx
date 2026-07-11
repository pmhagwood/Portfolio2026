import { useEffect, useState } from "react";

import step1 from "../../assets/images/income-calculator/income-step-1.png";
import step2 from "../../assets/images/income-calculator/income-step-2.png";
import step3 from "../../assets/images/income-calculator/income-step-3.png";
import step4 from "../../assets/images/income-calculator/income-step-4.png";

import "./styles.css";

const frames = [
  {
    src: step1,
    alt: "Income calculator before values are entered",
  },
  {
    src: step2,
    alt: "Income calculator with a 500,000 dollar contribution entered",
  },
  {
    src: step3,
    alt: "Income calculator with contribution, age, and start-year values entered",
  },
  {
    src: step4,
    alt: "Income calculator displaying monthly and annual income results",
  },
];

const FRAME_DURATION = 1800;
const RESULT_DURATION = 3200;

function IncomeCalculatorPreview() {
  const [activeFrame, setActiveFrame] = useState(0);

  useEffect(() => {
    const duration =
      activeFrame === frames.length - 1 ? RESULT_DURATION : FRAME_DURATION;

    const timeoutId = window.setTimeout(() => {
      setActiveFrame((currentFrame) => {
        return (currentFrame + 1) % frames.length;
      });
    }, duration);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [activeFrame]);

  return (
    <div className="income-preview">
      <div
        className="income-preview__phone"
        role="group"
        aria-label="Animated preview of the Guaranteed Income Calculator"
      >
        <div className="income-preview__speaker" aria-hidden="true" />

        <div className="income-preview__screen">
          {frames.map((frame, index) => {
            const isActive = index === activeFrame;

            return (
              <img
                className={`income-preview__frame ${
                  isActive ? "is-active" : ""
                }`}
                src={frame.src}
                alt={isActive ? frame.alt : ""}
                aria-hidden={!isActive}
                key={frame.src}
              />
            );
          })}
        </div>

        <div className="income-preview__side-button income-preview__side-button--left" />
        <div className="income-preview__side-button income-preview__side-button--right" />
      </div>

      <div className="income-preview__callouts">
        <p className="income-preview__callout income-preview__callout--one">
          <strong>Two ways to plan</strong>
          Start with a contribution or a desired monthly income.
        </p>

        <p className="income-preview__callout income-preview__callout--two">
          <strong>Clear results</strong>
          Monthly and annual guaranteed income at a glance.
        </p>

        <p className="income-preview__callout income-preview__callout--three">
          <strong>Built responsively</strong>
          Designed to work naturally across screen sizes.
        </p>
      </div>

      <div className="income-preview__progress" aria-hidden="true">
        {frames.map((frame, index) => (
          <span
            className={index === activeFrame ? "is-active" : ""}
            key={frame.src}
          />
        ))}
      </div>
    </div>
  );
}

export default IncomeCalculatorPreview;
