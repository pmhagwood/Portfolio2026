import solutionsScreenshot from "@assets/images/aspidare/Solutions-blockflow.jpg";

const designPrinciples = [
  {
    number: "01",
    title: "Storytelling",
    description:
      "Information unfolds through a visual sequence rather than appearing as a disconnected list of technical benefits.",
  },
  {
    number: "02",
    title: "Hierarchy",
    description:
      "Typography, spacing, numbering, and contrast establish a clear reading order before interaction begins.",
  },
  {
    number: "03",
    title: "Illustration",
    description:
      "Custom visual metaphors give abstract financial concepts a more recognizable and memorable identity.",
  },
  {
    number: "04",
    title: "Systems thinking",
    description:
      "Each graphic follows a shared visual language while adapting its structure to the concept it needs to explain.",
  },
];

function Solutions() {
  return (
    <section
      className="aspidare-solutions"
      id="visualizing-complexity"
      aria-labelledby="aspidare-solutions-title"
    >
      <div className="aspidare-solutions__header">
        <p className="aspidare-solutions__eyebrow">
          03 — Visualizing complex financial concepts
        </p>

        <h2 id="aspidare-solutions-title">
          Making sophisticated ideas more approachable.
        </h2>

        <div className="aspidare-solutions__intro">
          <p>
            Reinsurance concepts are often presented through dense language,
            tables, and conventional business diagrams.
          </p>

          <p>
            Instead of simplifying the business itself, I designed visual
            systems that made its structure easier to understand. Illustration,
            hierarchy, numbering, and interaction created clearer paths into the
            information.
          </p>
        </div>
      </div>

      <figure className="aspidare-solutions__figure">
        <div className="aspidare-solutions__image">
          <img
            src={solutionsScreenshot}
            alt="Aspida Re visual systems explaining flow reinsurance and block reinsurance benefits"
          />

          <div
            className="
              aspidare-solutions-callout
              aspidare-solutions-callout--flow
            "
          >
            <span>01</span>

            <div>
              <h3>Sequential storytelling</h3>
              <p>
                The Flow Reinsurance graphic creates a structured path through
                five connected benefits.
              </p>
            </div>
          </div>

          <div
            className="
              aspidare-solutions-callout
              aspidare-solutions-callout--illustration
            "
          >
            <span>02</span>

            <div>
              <h3>Memorable visual anchors</h3>
              <p>
                Custom illustrations help turn abstract financial ideas into
                concepts that are easier to recognize and recall.
              </p>
            </div>
          </div>

          <div
            className="
              aspidare-solutions-callout
              aspidare-solutions-callout--block
            "
          >
            <span>03</span>

            <div>
              <h3>A connected system</h3>
              <p>
                The Block Reinsurance composition uses a more flexible, modular
                structure to show how the benefits operate together.
              </p>
            </div>
          </div>
        </div>

        <figcaption>
          The Flow and Block sections use different compositions because each
          concept required a different kind of explanation.
        </figcaption>
      </figure>

      <div className="aspidare-solutions__comparison">
        <article>
          <span>Flow reinsurance</span>

          <h3>Structured and sequential</h3>

          <p>
            The vertical rhythm guides visitors through a connected progression
            of benefits. The composition feels stable, ordered, and directional.
          </p>
        </article>

        <article>
          <span>Block reinsurance</span>

          <h3>Flexible and interconnected</h3>

          <p>
            The modular arrangement presents each benefit as an individual
            element while showing that all five belong to a larger system.
          </p>
        </article>
      </div>

      <div className="aspidare-solutions__principles-header">
        <p>Design principles</p>

        <h2>
          The graphics support the message rather than simply decorating it.
        </h2>
      </div>

      <div className="aspidare-solutions__principles">
        {designPrinciples.map((principle) => (
          <article key={principle.number}>
            {/* <span>{principle.number}</span> */}
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </article>
        ))}
      </div>

      <blockquote className="aspidare-solutions__quote">
        <p>
          The objective wasn’t to reduce complexity. It was to make complexity
          easier to navigate.
        </p>
      </blockquote>
    </section>
  );
}

export default Solutions;
