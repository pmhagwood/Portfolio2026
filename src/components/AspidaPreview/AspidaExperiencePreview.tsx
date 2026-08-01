import { useEffect, useState } from "react";

import "./AspidaExperiencePreview.css";

import consumerImg from "@assets/images/AspidaExperience/Consumer.jpg";
import lifestyleImg from "@assets/images/AspidaExperience/People---Life-at-AspidaLife.jpg";
import daleImg from "@assets/images/AspidaExperience/Case-Study-Dale.jpg";
import calculatorImg from "@assets/images/AspidaExperience/Case-Study-Dale-calc.jpg";
import careersImg from "@assets/images/AspidaExperience/Careers.jpg";
import educationImg from "@assets/images/AspidaExperience/Education.jpg";

type EcosystemExperience = {
  id: string;
  label: string;
  shortLabel: string;
  image: string;
  imageAlt: string;
  position: string;
};

type AspidaExperiencePreviewProps = {
  logoSrc: string;
};

const experiences: EcosystemExperience[] = [
  {
    id: "people",
    label: "People & Lifestyle",
    shortLabel: "People",
    image: lifestyleImg,
    imageAlt: "Aspida people and lifestyle experience",
    position: "top-left",
  },
  {
    id: "products",
    label: "Product Experiences",
    shortLabel: "Products",
    image: consumerImg,
    imageAlt: "Aspida consumer product experience",
    position: "top-right",
  },
  {
    id: "case-studies",
    label: "Case Studies",
    shortLabel: "Stories",
    image: daleImg,
    imageAlt: "Aspida Dale retirement case study",
    position: "middle-left",
  },
  {
    id: "planning",
    label: "Planning Tools",
    shortLabel: "Planning",
    image: calculatorImg,
    imageAlt: "Aspida guaranteed income calculator",
    position: "middle-right",
  },
  {
    id: "careers",
    label: "Careers",
    shortLabel: "Careers",
    image: careersImg,
    imageAlt: "Aspida careers experience",
    position: "bottom-left",
  },
  {
    id: "education",
    label: "Learning & Education",
    shortLabel: "Learning",
    image: educationImg,
    imageAlt: "Aspida retirement education experience",
    position: "bottom-right",
  },
];

export default function AspidaExperiencePreview({
  logoSrc,
}: AspidaExperiencePreviewProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (isInteracting) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === experiences.length - 1 ? 0 : currentIndex + 1,
      );
    }, 3500);

    return () => window.clearInterval(interval);
  }, [isInteracting]);

  const activeExperience = experiences[activeIndex];

  const selectExperience = (index: number) => {
    setActiveIndex(index);
    setIsInteracting(true);
  };

  return (
    <div
      className="aspida-experience-preview"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
    >
      <div className="aspida-experience-preview__grid" aria-hidden="true" />

      <div
        className="aspida-experience-preview__connections"
        aria-hidden="true"
      >
        {experiences.map((experience) => (
          <span
            key={experience.id}
            className={`aspida-experience-preview__connection aspida-experience-preview__connection--${experience.position}`}
          />
        ))}
      </div>

      <div className="aspida-experience-preview__ecosystem">
        {experiences.map((experience, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={experience.id}
              type="button"
              className={`aspida-experience-preview__node aspida-experience-preview__node--${experience.position} ${
                isActive ? "aspida-experience-preview__node--active" : ""
              }`}
              aria-pressed={isActive}
              onClick={() => selectExperience(index)}
              onFocus={() => selectExperience(index)}
            >
              <span className="aspida-experience-preview__node-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="aspida-experience-preview__node-label">
                {experience.shortLabel}
              </span>
            </button>
          );
        })}

        <div className="aspida-experience-preview__center">
          <div
            className="aspida-experience-preview__logo-mask"
            style={
              {
                "--aspida-preview-logo": `url("${logoSrc}")`,
              } as React.CSSProperties
            }
          >
            {experiences.map((experience, index) => (
              <img
                key={experience.id}
                src={experience.image}
                alt=""
                className={`aspida-experience-preview__masked-image ${
                  index === activeIndex
                    ? "aspida-experience-preview__masked-image--active"
                    : ""
                }`}
                aria-hidden="true"
              />
            ))}
          </div>

          <img
            className="aspida-experience-preview__logo-outline"
            src={logoSrc}
            alt=""
            aria-hidden="true"
          />

          <div className="aspida-experience-preview__center-copy">
            <span>One connected</span>
            <strong>brand experience</strong>
          </div>
        </div>
      </div>

      <div className="aspida-experience-preview__active">
        <p className="aspida-experience-preview__active-label">
          {activeExperience.label}
        </p>

        <p className="aspida-experience-preview__active-description">
          People, products, learning, stories, and tools brought together
          through one evolving digital system.
        </p>
      </div>

      <div className="aspida-experience-preview__progress" aria-hidden="true">
        {experiences.map((experience, index) => (
          <span
            key={experience.id}
            className={
              index === activeIndex
                ? "aspida-experience-preview__progress-item--active"
                : ""
            }
          />
        ))}
      </div>

      <div className="sr-only" aria-live="polite">
        Showing {activeExperience.label}: {activeExperience.imageAlt}
      </div>
    </div>
  );
}
