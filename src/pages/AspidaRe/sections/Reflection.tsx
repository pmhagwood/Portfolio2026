const lessons = [
  {
    number: "01",
    title: "Clarity does not require removing complexity",
    description:
      "The strongest solutions did not oversimplify the business. They created better paths into sophisticated ideas through hierarchy, illustration, and interaction.",
  },
  {
    number: "02",
    title: "Creative direction needs a system",
    description:
      "Distinctive visual ideas become more valuable when they are supported by reusable patterns, responsive behavior, and maintainable implementation.",
  },
  {
    number: "03",
    title: "Trust and personality can coexist",
    description:
      "Financial experiences do not have to feel anonymous or restrained. Character can strengthen credibility when every decision remains intentional.",
  },
];

function Reflection() {
  return (
    <section
      className="aspidare-reflection"
      id="reflection"
      aria-labelledby="aspidare-reflection-title"
    >
      <div className="aspidare-reflection__header">
        <p className="aspidare-reflection__eyebrow">06 — Reflection</p>

        <h2 id="aspidare-reflection-title">
          Designing for complexity changed how I think about clarity.
        </h2>

        <div className="aspidare-reflection__intro">
          <p>
            This project reinforced that sophisticated subject matter does not
            need to produce a cold or overly technical experience.
          </p>

          <p>
            The challenge was not to make reinsurance appear simple. It was to
            create enough structure, context, and visual meaning for people to
            engage with it confidently.
          </p>
        </div>
      </div>

      <div className="aspidare-reflection__statement">
        <p>
          Thoughtful design does not reduce the intelligence of the subject. It
          gives people a clearer way to enter it.
        </p>
      </div>

      <div className="aspidare-reflection__lessons">
        {lessons.map((lesson) => (
          <article key={lesson.number}>
            <h3>{lesson.title}</h3>

            <p>{lesson.description}</p>
          </article>
        ))}
      </div>

      <div className="aspidare-reflection__closing">
        <div>
          <p className="aspidare-reflection__label">What I carried forward</p>

          <h3>
            The best digital experiences make difficult ideas feel possible to
            understand.
          </h3>
        </div>

        <div className="aspidare-reflection__closing-copy">
          <p>
            That principle now shapes how I approach every project: begin with
            the real communication problem, find the clearest story, and build a
            system capable of carrying it.
          </p>

          <p>
            Aspida Re gave me the opportunity to connect brand strategy,
            interaction design, visual storytelling, and front-end development
            within one cohesive experience.
          </p>
        </div>
      </div>

      {/* <div className="aspidare-reflection__next">
        <p>Next case study</p>

        <Link
          to="/projects/when-will-i-die"
          aria-label="View the When Will I Die case study"
        >
          <span>When Will I Die?</span>
          <span aria-hidden="true">↗</span>
        </Link>

        <p className="aspidare-reflection__next-description">
          Making a difficult subject surprisingly engaging.
        </p>
      </div> */}
    </section>
  );
}

export default Reflection;
