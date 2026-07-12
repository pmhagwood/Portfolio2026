import { useState } from "react";

import figmaDesign from "@assets/images/income-calculator/design-process/contribution-mode.jpg";
import liveProduct from "@assets/images/income-calculator/design-process/live-product.jpg";

import "./DesignToProduction.css";

type ViewMode = "figma" | "production";

function DesignToProduction() {
  const [activeView, setActiveView] = useState<ViewMode>("figma");

  return (
    <div className="design-production">
      <div className="design-production__toolbar">
        <p className="design-production__eyebrow">Design fidelity</p>

        <div
          className="design-production__tabs"
          role="tablist"
          aria-label="Compare the Figma design and production application"
        >
          <button
            className={activeView === "figma" ? "is-active" : ""}
            type="button"
            role="tab"
            aria-selected={activeView === "figma"}
            aria-controls="design-production-figma"
            id="design-production-tab-figma"
            onClick={() => setActiveView("figma")}
          >
            Figma
          </button>

          <button
            className={activeView === "production" ? "is-active" : ""}
            type="button"
            role="tab"
            aria-selected={activeView === "production"}
            aria-controls="design-production-live"
            id="design-production-tab-live"
            onClick={() => setActiveView("production")}
          >
            Live product
          </button>
        </div>
      </div>

      <div className="design-production__comparison">
        <figure
          className={`design-production__panel ${
            activeView === "figma" ? "is-active" : ""
          }`}
          id="design-production-figma"
          role="tabpanel"
          aria-labelledby="design-production-tab-figma"
        >
          <div className="design-production__label">
            <strong>Approved experience</strong>
          </div>

          <img
            src={figmaDesign}
            alt="Approved Figma design for the Guaranteed Income Calculator"
          />
        </figure>

        <div className="design-production__transition" aria-hidden="true">
          <span>Design</span>
          <strong>→</strong>
          <span>Production</span>
        </div>

        <figure
          className={`design-production__panel ${
            activeView === "production" ? "is-active" : ""
          }`}
          id="design-production-live"
          role="tabpanel"
          aria-labelledby="design-production-tab-live"
        >
          <div className="design-production__label">
            <strong>Working React product</strong>
          </div>

          <img
            src={liveProduct}
            alt="Production version of the Guaranteed Income Calculator"
          />
        </figure>
      </div>

      <div className="design-production__details">
        <div>
          <strong>Visual fidelity</strong>
          <p>
            Typography, spacing, hierarchy, and interaction patterns carried
            through from the approved design.
          </p>
        </div>

        <div>
          <strong>Responsive behavior</strong>
          <p>
            The production experience adapts the same design principles across
            desktop and mobile layouts.
          </p>
        </div>

        <div>
          <strong>Real product logic</strong>
          <p>
            Validation, API communication, analytics, accessibility, and result
            states complete the experience beyond the static design.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DesignToProduction;
