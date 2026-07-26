const principles = [
  {
    number: "01",
    title: "Navigation",
    statement: "One information architecture.",
    description:
      "Rather than designing isolated navigation for each audience, every experience became part of one connected ecosystem. Visitors could move naturally between education, products, resources, and support without feeling like they had entered a different website.",
    takeaway: "Every journey felt connected.",
  },
  {
    number: "02",
    title: "Components",
    statement: "Reusable building blocks.",
    description:
      "Shared interface patterns reduced repeated design work, accelerated development, and made new pages easier to build while maintaining consistency across the platform.",
    takeaway: "Consistency became automatic.",
  },
  {
    number: "03",
    title: "Content",
    statement: "Shared language.",
    description:
      "Common structures, terminology, and messaging created a predictable experience across business lines, helping users understand what mattered regardless of where they entered the site.",
    takeaway: "Clarity scaled with the business.",
  },
  {
    number: "04",
    title: "Accessibility",
    statement: "Designed from the beginning.",
    description:
      "Accessibility shaped the experience from the start, influencing navigation, typography, semantic markup, keyboard interaction, responsive behavior, and visual contrast.",
    takeaway: "Everyone received the same experience.",
  },
];

const metrics = [
  {
    value: "6",
    label: "Distinct audiences served",
  },
  {
    value: "100+",
    label: "Pages unified",
  },
  {
    value: "1",
    label: "Scalable design system",
  },
];

export default function SystemThinking() {
  return (
    <section
      id="system-thinking"
      className="system-thinking"
      aria-labelledby="system-thinking-title"
    >
      <div className="system-thinking__inner">
        <header className="system-thinking__header">
          <p className="system-thinking__eyebrow">Design philosophy</p>

          <h2 className="system-thinking__title" id="system-thinking-title">
            <span>Every page solved a problem.</span>
            <span>Every decision strengthened a system.</span>
          </h2>

          <p className="system-thinking__intro">
            The challenge was not simply designing a better website. It was
            creating a foundation that could support every audience, business
            line, and future initiative. Rather than treating each page as a
            separate project, I designed a flexible system that made the digital
            experience more consistent, scalable, and easier to evolve.
          </p>
        </header>

        <div className="system-thinking__principles">
          {principles.map((principle) => (
            <article
              className="system-thinking__principle"
              key={principle.title}
            >
              <p className="system-thinking__number" aria-hidden="true">
                {principle.number}
              </p>

              <div className="system-thinking__principle-heading">
                <h3>{principle.title}</h3>
                <p>{principle.statement}</p>
              </div>

              <div className="system-thinking__principle-copy">
                <p>{principle.description}</p>

                <p className="system-thinking__takeaway">
                  {principle.takeaway}
                </p>
              </div>
            </article>
          ))}
        </div>

        <blockquote className="system-thinking__quote">
          <p>
            A design system is not a collection of components.
            <span>It is a collection of decisions that scale.</span>
          </p>
        </blockquote>

        <div className="system-thinking__metrics" aria-label="Project scale">
          {metrics.map((metric) => (
            <div className="system-thinking__metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <footer className="system-thinking__closing">
          <p>
            The result was not a collection of redesigned pages.
            <span>
              It became a platform capable of growing with the business.
            </span>
          </p>
        </footer>
      </div>
    </section>
  );
}
