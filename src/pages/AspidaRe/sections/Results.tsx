const outcomes = [
  {
    number: "01",
    title: "A more distinctive digital brand",
    description:
      "The experience moved beyond the familiar visual conventions of financial services while maintaining the confidence and credibility expected from a global reinsurance company.",
  },
  {
    number: "02",
    title: "Clearer paths into complex content",
    description:
      "Illustration, hierarchy, progressive disclosure, and interaction helped visitors approach sophisticated financial concepts without flattening their meaning.",
  },
  {
    number: "03",
    title: "A connected visual system",
    description:
      "Shared patterns brought consistency across pages while allowing each story, solution, and interaction to retain its own character.",
  },
  {
    number: "04",
    title: "A foundation built to evolve",
    description:
      "Reusable components and flexible content structures made the site easier to maintain, expand, and adapt as the business continued to grow.",
  },
];

const projectScope = [
  "Creative direction",
  "UX strategy",
  "Interaction design",
  "Responsive design",
  "Front-end development",
  "Component architecture",
  "Accessibility",
  "Content presentation",
];

function Results() {
  return (
    <section
      className="aspidare-results"
      id="results"
      aria-labelledby="aspidare-results-title"
    >
      <div className="aspidare-results__header">
        <p className="aspidare-results__eyebrow">05 — Results</p>

        <h2 id="aspidare-results-title">
          A digital experience with clarity, character, and room to grow.
        </h2>

        <div className="aspidare-results__intro">
          <p>
            The redesign gave Aspida Re a digital presence that felt more
            closely connected to its identity, ambitions, and global audience.
          </p>

          <p>
            It also created a stronger framework for explaining complex
            offerings, introducing new stories, and extending the experience
            across future content.
          </p>
        </div>
      </div>

      <div className="aspidare-results__outcomes">
        {outcomes.map((outcome) => (
          <article key={outcome.number}>
            <div>
              <h3>{outcome.title}</h3>
              <p>{outcome.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="aspidare-results__scope">
        <div className="aspidare-results__scope-heading">
          <p className="aspidare-results__label">My contribution</p>

          <h3>Connecting strategy, design, and implementation.</h3>
        </div>

        <ul className="aspidare-results__scope-list">
          {projectScope.map((item) => (
            <li key={item}>
              <span aria-hidden="true">↗</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="aspidare-results__statement">
        <p>
          The outcome was more than a redesigned website. It was a clearer and
          more expressive way for Aspida Re to communicate who it is, what it
          offers, and why those ideas matter.
        </p>
      </div>
    </section>
  );
}

export default Results;
