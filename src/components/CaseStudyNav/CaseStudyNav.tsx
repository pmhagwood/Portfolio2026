import { useEffect, useRef, useState } from "react";

import "./CaseStudyNav.css";

export type CaseStudyNavItem = {
  id: string;
  label: string;
};

type CaseStudyNavProps = {
  ariaLabel: string;
  items: CaseStudyNavItem[];
  className?: string;
  transparentUntilStuck?: boolean;
};

function CaseStudyNav({
  ariaLabel,
  items,
  className,
  transparentUntilStuck = false,
}: CaseStudyNavProps) {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const [isStuck, setIsStuck] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (!transparentUntilStuck) {
      return;
    }

    const element = triggerRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry?.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-1px 0px 0px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [transparentUntilStuck]);

  useEffect(() => {
    if (!items.length) {
      return;
    }

    const updateActiveSection = () => {
      const navHeight = navRef.current?.getBoundingClientRect().height ?? 0;
      const offset = navHeight + 32;
      let nextActiveId = items[0].id;

      for (const item of items) {
        const section = document.getElementById(item.id);

        if (!section) {
          continue;
        }

        const { top } = section.getBoundingClientRect();

        if (top - offset <= 0) {
          nextActiveId = item.id;
        } else {
          break;
        }
      }

      setActiveSectionId(nextActiveId);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [items]);

  const navClassName = [
    "case-study-nav",
    className,
    transparentUntilStuck ? "case-study-nav--transparent-until-stuck" : "",
    isStuck ? "is-stuck" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      {transparentUntilStuck ? (
        <div
          className="case-study-nav__trigger"
          aria-hidden="true"
          ref={triggerRef}
        />
      ) : null}

      <nav className={navClassName} aria-label={ariaLabel} ref={navRef}>
        <div className="case-study-nav__inner">
          {items.map((item) => (
            <a
              className={`case-study-nav__link ${
                activeSectionId === item.id ? "is-active" : ""
              }`}
              href={`#${item.id}`}
              key={item.id}
              onClick={() => setActiveSectionId(item.id)}
            >
              {item.label}
            </a>
          ))}
          <a href="/#work" className="case-study-nav__back">
            <span aria-hidden="true">↖</span>
            Back to Work
          </a>
        </div>
      </nav>
    </>
  );
}

export default CaseStudyNav;
