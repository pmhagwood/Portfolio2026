import "./App.css";

type Capability = {
  number: string;
  title: string;
  description: string;
  evidence: string[];
};

type Project = {
  category: string;
  title: string;
  description: string;
  contribution: string;
};

const capabilities: Capability[] = [
  {
    number: "01",
    title: "I make complex ideas easier to understand.",
    description:
      "I turn complicated products, business requirements, and user journeys into clear digital experiences that help people make confident decisions.",
    evidence: [
      "Financial planning tools",
      "Product education",
      "Information architecture",
      "Content strategy",
    ],
  },
  {
    number: "02",
    title: "I design experiences people enjoy using.",
    description:
      "I combine thoughtful UX, visual design, storytelling, and motion to create experiences that feel intuitive, polished, and memorable.",
    evidence: [
      "Interaction design",
      "Responsive UX",
      "Prototyping",
      "Motion and animation",
    ],
  },
  {
    number: "03",
    title: "I build what I design.",
    description:
      "I move comfortably from design into production code, creating responsive and accessible React experiences with maintainable component architecture.",
    evidence: [
      "React and TypeScript",
      "Reusable components",
      "API integration",
      "Accessibility",
    ],
  },
  {
    number: "04",
    title: "I create systems that can grow.",
    description:
      "I look beyond individual pages to improve design systems, navigation, localization, analytics, performance, and the workflows behind digital products.",
    evidence: [
      "Design systems",
      "Localization",
      "Analytics and SEO",
      "Scalable architecture",
    ],
  },
  {
    number: "05",
    title: "I lead work from idea to launch.",
    description:
      "I bring executives, designers, developers, vendors, and subject-matter experts together to turn ambitious ideas into finished experiences.",
    evidence: [
      "Cross-functional leadership",
      "Executive communication",
      "Vendor collaboration",
      "Product delivery",
    ],
  },
];

const projects: Project[] = [
  {
    category: "Product Design · React · Financial Technology",
    title: "Guaranteed Income Calculator",
    description:
      "A responsive financial-planning tool that helps users explore complex retirement-income scenarios through a clear and approachable experience.",
    contribution:
      "UX strategy, interaction design, front-end development, validation, API integration, analytics, and accessibility.",
  },
  {
    category: "Product Strategy · UX · Interactive Design",
    title: "When Will I Die?",
    description:
      "A playful, mobile-first quiz experience that combines storytelling, animation, education, and interaction to make a difficult topic engaging.",
    contribution:
      "Product direction, experience design, interaction patterns, responsive UI, component planning, and stakeholder communication.",
  },
  {
    category: "Digital Strategy · UX Engineering · Enterprise Web",
    title: "Aspida Digital Experience",
    description:
      "A growing collection of enterprise websites, product experiences, educational tools, and interactive stories designed to simplify financial products.",
    contribution:
      "UX leadership, front-end architecture, design systems, navigation, animation, accessibility, analytics, and ongoing optimization.",
  },
];

const processSteps = [
  {
    title: "Understand",
    description:
      "Learn the business, the audience, the constraints, and the real problem behind the request.",
  },
  {
    title: "Simplify",
    description:
      "Organize complex information and identify the clearest path forward.",
  },
  {
    title: "Design",
    description:
      "Create an experience that balances usability, brand, emotion, and business goals.",
  },
  {
    title: "Build",
    description:
      "Turn the design into responsive, accessible, and maintainable production code.",
  },
  {
    title: "Measure",
    description:
      "Use feedback, analytics, and observation to improve the experience after launch.",
  },
];

function App() {
  return (
    <div className="site">
      <header className="site-header">
        <a className="site-logo" href="#top" aria-label="Paul Hagwood home">
          PH
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#capabilities">Capabilities</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero__content">
            <p className="eyebrow">Design · Engineering · Digital Leadership</p>

            <h1>
              I turn complex ideas into clear, engaging digital experiences.
            </h1>

            <p className="hero__intro">
              I combine product strategy, UX design, front-end development,
              accessibility, storytelling, and leadership to take digital
              experiences from early idea through launch and improvement.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#work">
                Explore my work
              </a>

              <a className="text-link" href="#capabilities">
                See what I bring
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="hero__statement" aria-hidden="true">
            <span>Think</span>
            <span>Design</span>
            <span>Build</span>
            <span>Lead</span>
          </div>
        </section>

        <section className="section introduction">
          <div className="section-heading">
            <p className="eyebrow">What I bring</p>
            <h2>More than a collection of deliverables.</h2>
          </div>

          <div className="introduction__copy">
            <p>
              I do not approach digital work as separate design, development,
              or business tasks. I connect them.
            </p>

            <p>
              That means I can help a team understand the problem, shape the
              experience, communicate the vision, build the solution, and
              improve it after launch.
            </p>
          </div>
        </section>

        <section className="section capabilities" id="capabilities">
          <div className="section-heading section-heading--wide">
            <p className="eyebrow">How I help companies</p>
            <h2>Problems I solve</h2>
          </div>

          <div className="capabilities__list">
            {capabilities.map((capability) => (
              <article className="capability" key={capability.number}>
                <p className="capability__number">{capability.number}</p>

                <div className="capability__content">
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>

                <ul className="capability__evidence">
                  {capability.evidence.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section work" id="work">
          <div className="section-heading section-heading--wide">
            <p className="eyebrow">Selected evidence</p>
            <h2>Work that shows how I think.</h2>
          </div>

          <div className="projects">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-card__visual">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="project-card__content">
                  <p className="project-card__category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-card__contribution">
                    <strong>My contribution</strong>
                    <p>{project.contribution}</p>
                  </div>

                  <button className="project-card__link" type="button">
                    Case study coming soon
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section process" id="process">
          <div className="section-heading">
            <p className="eyebrow">How I work</p>
            <h2>From ambiguity to a finished experience.</h2>
          </div>

          <div className="process__steps">
            {processSteps.map((step, index) => (
              <article className="process-step" key={step.title}>
                <p className="process-step__number">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-heading">
            <p className="eyebrow">About Paul</p>
            <h2>I work where design, technology, and business meet.</h2>
          </div>

          <div className="about__content">
            <p className="about__lead">
              I am a digital experience leader, designer, and front-end
              developer who enjoys turning complicated challenges into
              thoughtful, useful products.
            </p>

            <div className="about__details">
              <p>
                My experience spans enterprise websites, product tools,
                financial education, interactive storytelling, localization,
                analytics, accessibility, design systems, and React
                development.
              </p>

              <p>
                I am at my best when I can understand a problem deeply, bring
                people together around a strong direction, and help turn that
                direction into something real.
              </p>
            </div>
          </div>
        </section>

        <section className="contact">
          <p className="eyebrow">Let’s build something meaningful</p>

          <h2>
            Looking for someone who can think strategically and bring the work
            to life?
          </h2>

          <a className="button button--primary" href="mailto:">
            Start a conversation
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Paul Hagwood</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;