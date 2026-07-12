const technicalDetails = [
  {
    number: "01",
    title: "React architecture",
    description:
      "The calculator was structured with reusable components and clearly separated form, validation, API, and result-display responsibilities.",
  },
  {
    number: "02",
    title: "Backend calculations",
    description:
      "The interface collects and validates user inputs, while the final financial calculations remain on the backend and are returned through an API.",
  },
  {
    number: "03",
    title: "Accessible interaction",
    description:
      "Labels, keyboard-friendly controls, clear validation, readable feedback, and responsive layouts were treated as part of the product—not additions at the end.",
  },
  {
    number: "04",
    title: "Measurement",
    description:
      "Analytics events capture meaningful interactions, including calculator submissions, mode changes, and engagement with expanded results.",
  },
];

function Development() {
  return (
    <section className="income-development" id="development">
      <div className="income-development__header">
        <p className="income-development__eyebrow">Building the experience</p>

        <h2>The interface was only half of the solution.</h2>

        <div className="income-development__intro">
          <p>
            The final product needed to preserve the simplicity of the design
            while supporting validation, responsive behavior, accessibility,
            analytics, and accurate financial calculations.
          </p>

          <p>
            I worked across design and development so implementation decisions
            could strengthen the experience rather than dilute it.
          </p>
        </div>
      </div>

      <div className="income-development__flow">
        <div className="income-development__flow-item">
          <strong>User input</strong>
        </div>

        <span className="income-development__arrow" aria-hidden="true">
          →
        </span>

        <div className="income-development__flow-item">
          <strong>React validation</strong>
        </div>

        <span className="income-development__arrow" aria-hidden="true">
          →
        </span>

        <div className="income-development__flow-item">
          <strong>Backend API</strong>
        </div>

        <span className="income-development__arrow" aria-hidden="true">
          →
        </span>

        <div className="income-development__flow-item">
          <strong>Clear results</strong>
        </div>
      </div>

      <div className="income-development__grid">
        {technicalDetails.map((detail) => (
          <article className="income-development-card" key={detail.number}>
            <h3>{detail.title}</h3>

            <p>{detail.description}</p>
          </article>
        ))}
      </div>

      <blockquote className="income-development__statement">
        <p>
          Designing and building the product together made it possible to
          protect the original experience all the way through production.
        </p>
      </blockquote>
    </section>
  );
}

export default Development;
