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
  const [isStuck, setIsStuck] = useState(false);

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
        <div className="case-study-nav__trigger" aria-hidden="true" ref={triggerRef} />
      ) : null}

      <nav className={navClassName} aria-label={ariaLabel}>
        <div className="case-study-nav__inner">
          {items.map((item) => (
            <a href={`#${item.id}`} key={item.id}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}

export default CaseStudyNav;
