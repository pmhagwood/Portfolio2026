import { useEffect, useState } from "react";

// AspidRe Images
import sailboat from "@assets/images/aspidare/sailboat-outline-color.gif";
import websiteImage from "@assets/images/aspidare/aspidarehome.jpg";

import "./AspidaRePreview.css";

const INTRO_DURATION = 3200;

function AspidaRePreview() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setIntroComplete(true);
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIntroComplete(true);
    }, INTRO_DURATION);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`aspidare-preview ${
        introComplete ? "is-revealed" : "is-loading"
      }`}
      aria-label="Animated preview of the Aspida Re website redesign"
    >
      <div className="aspidare-preview__reveal">
        <div className="aspidare-preview__image-frame">
          <img src={websiteImage} alt="Aspida Re redesigned homepage" />
        </div>

        <div className="aspidare-preview__callout">
          <p>
            Inspired by Bermuda and the Cayman Islands, motion and interaction
            became part of the brand experience.
          </p>
        </div>
      </div>

      <div className="aspidare-preview__intro" aria-hidden={introComplete}>
        <img className="aspidare-preview__sailboat" src={sailboat} alt="" />
      </div>
    </div>
  );
}

export default AspidaRePreview;
