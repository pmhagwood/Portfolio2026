import { useEffect, useRef, useState } from "react";

import consumerImg from "@assets/images/AspidaExperience/Consumer.jpg";
import educationImg from "@assets/images/AspidaExperience/Education.jpg";
import reinsuranceImg from "@assets/images/aspidare/Solutions-Home.jpg";
import careersImg from "@assets/images/AspidaExperience/Careers.jpg";
import financialProfessionalsImg from "@assets/images/AspidaExperience/FinPro-Home.jpg";
import investorsImg from "@assets/images/AspidaExperience/About-People.jpg";

type Journey = {
  id: string;
  number: string;
  audience: string;
  startingPoint: string;
  steps: string[];
  image?: string;
  imageAlt?: string;
  featured?: boolean;
};

const journeys: Journey[] = [
  {
    id: "consumers",
    number: "01",
    audience: "Consumers",
    startingPoint: "I’m planning for retirement.",
    steps: [
      "Retirement education",
      "Product exploration",
      "Planning tools",
      "Income calculator",
      "Find an advisor",
    ],
    image: consumerImg,
    imageAlt: "Aspida consumer retirement experience",
    featured: true,
  },
  {
    id: "education",
    number: "02",
    audience: "Retirement Education",
    startingPoint: "I don’t know where to begin.",
    steps: [
      "Annuity basics",
      "Articles and videos",
      "Glossary",
      "Calculators",
      "Product education",
    ],
    image: educationImg,
    imageAlt: "Aspida retirement education experience",
    featured: true,
  },
  {
    id: "reinsurance",
    number: "03",
    audience: "Reinsurance Partners",
    startingPoint: "I need a long-term risk partner.",
    steps: [
      "Aspida Re",
      "Capabilities",
      "Financial strength",
      "Leadership",
      "Contact the team",
    ],
    image: reinsuranceImg,
    imageAlt: "Aspida Re digital experience",
    featured: true,
  },
  {
    id: "careers",
    number: "04",
    audience: "Career Seekers",
    startingPoint: "I want to know what it’s like to work here.",
    steps: [
      "Company culture",
      "Employee experience",
      "Benefits",
      "Open positions",
      "Apply",
    ],
    image: careersImg,
    imageAlt: "Aspida careers experience",
    featured: true,
  },
  {
    id: "financial-professionals",
    number: "05",
    audience: "Financial Professionals",
    startingPoint: "I need solutions for my clients.",
    steps: [
      "Product information",
      "Education",
      "Marketing resources",
      "Sales tools",
      "Contact sales",
    ],
    image: financialProfessionalsImg,
    imageAlt: "Aspida financial professionals experience",
    featured: true,
  },
  {
    id: "investors",
    number: "06",
    audience: "Investors & Board Members",
    startingPoint: "I need to understand the business.",
    steps: [
      "Company overview",
      "Leadership",
      "Financial strength",
      "News and reports",
      "Corporate information",
    ],
    image: investorsImg,
    imageAlt: "Aspida investors experience",
    featured: true,
  },
];

const sharedFoundation = [
  "Navigation",
  "Content strategy",
  "Reusable components",
  "Accessibility",
  "Design language",
  "React architecture",
];

export default function ConnectedExperience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(grid);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="connected-journeys"
      ref={sectionRef}
      className={`connected-journeys ${
        isVisible ? "connected-journeys--visible" : ""
      }`}
      aria-labelledby="connected-journeys-title"
    >
      <div className="connected-journeys__inner">
        <div className="connected-journeys__intro">
          <p className="connected-journeys__eyebrow">Connected Journeys</p>

          <h2
            id="connected-journeys-title"
            className="connected-journeys__title"
          >
            One platform.
            <span>Many starting points.</span>
          </h2>

          <div className="connected-journeys__intro-content">
            <p className="connected-journeys__lead">
              Every visitor arrived at Aspida with a different question.
            </p>

            <p className="connected-journeys__description">
              Instead of creating isolated experiences, I brought the company’s
              audiences, content, products, and resources together into one
              connected ecosystem. Each journey was designed to meet people
              where they were and guide them toward what they needed next.
            </p>
          </div>
        </div>

        <div
          ref={gridRef}
          className="connected-journeys__grid"
          aria-label="Audience journeys through the Aspida digital experience"
        >
          {journeys.map((journey, journeyIndex) => (
            <article
              key={journey.id}
              className={`connected-journeys__journey ${
                journey.featured ? "connected-journeys__journey--featured" : ""
              }`}
              style={
                {
                  "--journey-index": journeyIndex,
                } as React.CSSProperties
              }
            >
              <div className="connected-journeys__journey-content">
                <header className="connected-journeys__journey-header">
                  <p className="connected-journeys__number">{journey.number}</p>

                  <div>
                    <h3>{journey.audience}</h3>

                    <p className="connected-journeys__starting-point">
                      “{journey.startingPoint}”
                    </p>
                  </div>
                </header>

                <ol className="connected-journeys__steps">
                  {journey.steps.map((step, stepIndex) => (
                    <li
                      key={step}
                      style={
                        {
                          "--step-index": stepIndex,
                        } as React.CSSProperties
                      }
                    >
                      <span
                        className="connected-journeys__step-marker"
                        aria-hidden="true"
                      />

                      <span className="connected-journeys__step-label">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {journey.image && journey.imageAlt && (
                <figure className="connected-journeys__visual">
                  <div className="connected-journeys__image-wrap">
                    <img
                      src={journey.image}
                      alt={journey.imageAlt}
                      className="connected-journeys__image"
                      loading="lazy"
                    />
                  </div>

                  <figcaption className="connected-journeys__caption">
                    A purpose-built journey for {journey.audience.toLowerCase()}
                    .
                  </figcaption>
                </figure>
              )}
            </article>
          ))}
        </div>

        <div className="connected-journeys__convergence">
          <div className="connected-journeys__routes" aria-hidden="true">
            {journeys.map((journey, index) => (
              <span
                key={journey.id}
                style={
                  {
                    "--route-index": index,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>

          <div className="connected-journeys__foundation">
            <p className="connected-journeys__foundation-eyebrow">
              One shared foundation
            </p>

            <h3>
              Different journeys.
              <span>One digital ecosystem.</span>
            </h3>

            <ul className="connected-journeys__foundation-list">
              {sharedFoundation.map((item, index) => (
                <li
                  key={item}
                  style={
                    {
                      "--foundation-index": index,
                    } as React.CSSProperties
                  }
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="connected-journeys__destination">
              <span aria-hidden="true" />
              <p>Aspida</p>
            </div>
          </div>
        </div>

        <blockquote className="connected-journeys__closing">
          <p>
            I wasn’t designing a collection of pages.
            <span>
              I was designing how people move through an entire digital
              ecosystem.
            </span>
          </p>
        </blockquote>
      </div>
    </section>
  );
}
