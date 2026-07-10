import shapeOnlyLogo from "./assets/images/paulhagwood-creative-logo-shapeonly.png";
import "./App.css";

type Project = {
  number: string;
  title: string;
  statement: string;
  description: string;
  disciplines: string[];
  className: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Guaranteed Income Calculator",
    statement: "Making retirement planning easier to understand.",
    description:
      "A responsive financial-planning experience that translates complex income scenarios into a clear, approachable tool.",
    disciplines: ["Product strategy", "UX design", "React", "API integration"],
    className: "project--income",
  },
  {
    number: "02",
    title: "When Will I Die?",
    statement: "Making a difficult subject surprisingly engaging.",
    description:
      "A playful mobile-first experience combining interaction, education, animation, and storytelling.",
    disciplines: [
      "Product design",
      "Interaction design",
      "Creative direction",
      "TypeScript",
    ],
    className: "project--wwid",
  },
  {
    number: "03",
    title: "Aspida Digital Experience",
    statement: "Building an enterprise ecosystem—not just individual pages.",
    description:
      "A connected collection of product experiences, educational tools, design systems, and digital platforms.",
    disciplines: [
      "UX leadership",
      "Front-end architecture",
      "Accessibility",
      "Digital strategy",
    ],
    className: "project--aspida",
  },
];

const capabilities = [
  {
    title: "Think",
    description:
      "I uncover the real problem, understand the audience, and turn ambiguity into a clear direction.",
  },
  {
    title: "Design",
    description:
      "I create thoughtful experiences that balance usability, emotion, business goals, and brand.",
  },
  {
    title: "Build",
    description:
      "I turn ideas into accessible, responsive, maintainable experiences using modern front-end technology.",
  },
  {
    title: "Lead",
    description:
      "I bring people together, communicate the vision, and guide work from early concept through launch.",
  },
];

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <a className="brand" href="#top" aria-label="Paul Hagwood home">
          Paul Hagwood
        </a>

        <nav className="navigation" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero__copy">
            <p className="hero__hello">Hello, I’m Paul.</p>

            <h1>
              I turn complicated ideas into digital experiences that feel clear,
              useful, and human.
            </h1>

            <p className="hero__description">
              I’m a digital experience leader, designer, and front-end developer
              working across strategy, UX, storytelling, technology,
              accessibility, and product delivery.
            </p>

            <a className="arrow-link" href="#work">
              Explore selected work
              <span aria-hidden="true">↘</span>
            </a>
          </div>

          <div className="hero__portrait">
            <div className="logo-container">
              <img src={shapeOnlyLogo} alt="Paul Hagwood Creative logo" />
            </div>
          </div>
        </section>

        <section className="personal-note">
          <p>
            I’m most energized when something feels complicated, uncertain, or
            difficult to explain.
          </p>

          <p>That’s usually where the most meaningful design work begins.</p>
        </section>

        <section className="work-section" id="work">
          <div className="section-intro">
            <p className="section-label">Selected work</p>
            <h2>A few ways I’ve helped ideas become real.</h2>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article
                className={`project ${project.className}`}
                key={project.title}
              >
                <div className="project__visual">
                  <span className="project__number">{project.number}</span>

                  <div className="project__mockup">
                    <span>{project.title}</span>
                  </div>
                </div>

                <div className="project__content">
                  <p className="project__statement">{project.statement}</p>

                  <h3>{project.title}</h3>

                  <p className="project__description">{project.description}</p>

                  <ul className="project__disciplines">
                    {project.disciplines.map((discipline) => (
                      <li key={discipline}>{discipline}</li>
                    ))}
                  </ul>

                  <button className="project__link" type="button">
                    View case study
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="approach" id="approach">
          <div className="section-intro">
            <p className="section-label">What I bring</p>
            <h2>I connect the pieces that are often kept separate.</h2>
          </div>

          <div className="capability-grid">
            {capabilities.map((capability, index) => (
              <article className="capability" key={capability.title}>
                <span className="capability__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{capability.title}</h3>

                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <div className="about__headline">
            <p className="section-label">A little about me</p>

            <h2>
              Designer by instinct.
              <br />
              Developer by practice.
              <br />
              Problem solver by nature.
            </h2>
          </div>

          <div className="about__copy">
            <p>
              My career has grown across design, front-end development, digital
              strategy, analytics, accessibility, content, and leadership.
            </p>

            <p>
              I’ve learned that the best experiences rarely come from one
              discipline. They happen when technology, creativity, business, and
              empathy are considered together.
            </p>

            <p>
              Outside work, I’m drawn to art, movement, nature, storytelling,
              and experiences that help people see familiar things differently.
            </p>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="section-label">Let’s connect</p>

          <h2>
            Have an interesting problem that needs both imagination and
            execution?
          </h2>

          <a className="contact__link" href="mailto:">
            Start a conversation
            <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Paul Hagwood</p>

        <div>
          <a href="#top">Back to top</a>
          <a
            href="https://github.com/pmhagwood"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Paul's GitHub profile (opens a new tab)"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/paul-h-0215504a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Paul's LinkedIn profile (opens a new tab)"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
