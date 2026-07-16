import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import sailboat from "@assets/images/aspidare/sailboat-outline-color.gif";

function Hero() {
  const sailingRef = useRef<HTMLDivElement | null>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    const element = sailingRef.current;

    if (!element || hasEnteredView) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setHasEnteredView(true);
        observer.disconnect();
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasEnteredView]);

  return (
    <section className="aspidare-hero" id="hero">
      <div className="aspidare-hero__topbar">
        <Link className="aspidare-hero__back" to="/">
          <span aria-hidden="true">←</span>
          Back to work
        </Link>

        <p className="aspidare-hero__index">Case Study 02</p>
      </div>

      <div className="aspidare-hero__content">
        <p className="aspidare-hero__eyebrow">Aspida Re</p>

        <h1>Bringing a global reinsurance brand to life.</h1>

        <p className="aspidare-hero__intro">
          I redesigned and built a digital experience that balances
          institutional confidence with island-inspired storytelling, thoughtful
          motion, and a more distinctive expression of the Aspida Re brand.
        </p>

        <dl className="aspidare-hero__meta">
          <div>
            <dt>My contribution</dt>
            <dd>
              Creative direction
              <br />
              UX leadership
              <br />
              Front-end development
            </dd>
          </div>

          <div>
            <dt>Company</dt>
            <dd>Aspida Re</dd>
          </div>

          <div>
            <dt>Experience</dt>
            <dd>Responsive global website</dd>
          </div>
        </dl>
      </div>

      <div
        className="aspidare-hero__sailing"
        aria-hidden="true"
        ref={sailingRef}
      >
        <img
          className={`aspidare-hero__boat ${
            hasEnteredView ? "is-visible" : ""
          }`}
          src={sailboat}
          alt=""
        />
      </div>

      <div className="aspidare-hero__transition" aria-hidden="true" />
    </section>
  );
}

export default Hero;
