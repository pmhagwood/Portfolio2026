const lessons = [
  {
    number: "01",
    title: "Design beyond individual pages.",
    description:
      "The strongest solutions came from understanding how navigation, content, components, and interactions worked together across the entire ecosystem.",
  },
  {
    number: "02",
    title: "Meet people where they begin.",
    description:
      "Different audiences arrived with different levels of knowledge and different goals. The experience became more useful when each journey acknowledged those starting points.",
  },
  {
    number: "03",
    title: "Build a foundation that can evolve.",
    description:
      "A successful launch was not the end of the project. Reusable patterns and connected content made it possible for the platform to continue growing with the business.",
  },
];

export default function AspidaReflection() {
  return (
    <section
      id="aspida-reflection"
      className="aspida-reflection"
      aria-labelledby="aspida-reflection-title"
    >
      <div className="aspida-reflection__inner">
        <header className="aspida-reflection__header">
          <p className="aspida-reflection__eyebrow">Reflection</p>

          <h2 id="aspida-reflection-title" className="aspida-reflection__title">
            The most important result was not
            <span> any single page.</span>
          </h2>

          <div className="aspida-reflection__introduction">
            <p className="aspida-reflection__lead">
              This project changed how I think about digital design.
            </p>

            <p className="aspida-reflection__description">
              I began by solving individual website problems, but the work
              increasingly became about systems: how audiences move, how content
              connects, how a brand behaves, and how a platform can continue
              evolving long after its initial launch.
            </p>
          </div>
        </header>

        <div className="aspida-reflection__lessons">
          {lessons.map((lesson) => (
            <article className="aspida-reflection__lesson" key={lesson.number}>
              <h3>{lesson.title}</h3>

              <p>{lesson.description}</p>
            </article>
          ))}
        </div>

        <blockquote className="aspida-reflection__quote">
          <p>
            The greatest opportunity was not redesigning Aspida’s website.
            <span>
              It was helping establish a more connected, useful, and
              digital-first way for the company to communicate.
            </span>
          </p>
        </blockquote>

        <footer className="aspida-reflection__closing">
          <p>
            Strategy.
            <span>Design.</span>
            <span>Development.</span>
            <strong>One evolving digital experience.</strong>
          </p>
        </footer>
      </div>
    </section>
  );
}
