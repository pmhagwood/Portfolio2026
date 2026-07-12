import "./CaseStudyNav.css";

export type CaseStudyNavItem = {
  id: string;
  label: string;
};

type CaseStudyNavProps = {
  ariaLabel: string;
  items: CaseStudyNavItem[];
};

function CaseStudyNav({ ariaLabel, items }: CaseStudyNavProps) {
  return (
    <nav className="case-study-nav" aria-label={ariaLabel}>
      <div className="case-study-nav__inner">
        {items.map((item) => (
          <a href={`#${item.id}`} key={item.id}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default CaseStudyNav;
