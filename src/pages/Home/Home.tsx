import { Link } from "react-router-dom";
import IncomeCalculatorPreview from "@components/IncomeCalculatorPreview";
import AspidaRePreview from "@components/AspidaRePreview/AspidaRePreview";
import { projects } from "@data/projects";
import { capabilities } from "@data/capabilities";
import shapeOnlyLogo from "@assets/images/logos/paulhagwood-creative-logo-shapeonly.png";

import "./Home.css";

const previewMap = {
  income: <IncomeCalculatorPreview />,
  aspidare: <AspidaRePreview />,
  wwid: <div className="project__mockup">When Will I Die?</div>,
  aspida: <div className="project__mockup">Aspida Digital Experience</div>,
};

function Home() {
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
            <p className="hero__hello">Hello, I’m Paul Hagwood.</p>

            <h1>
              I create at the intersection of art, design, technology, and human
              experience.
            </h1>

            <p className="hero__description">
              I’m an artist, experience designer, front-end developer, creative
              thinker, and digital leader. I help companies turn complicated
              ideas into clear, engaging products and experiences people can
              understand, enjoy, and trust.
            </p>

            <div className="hero__roles" aria-label="Professional disciplines">
              <span>Artist</span>
              <span>Designer</span>
              <span>Developer</span>
              <span>UX Leader</span>
              <span>Creative Thinker</span>
            </div>

            <div className="hero__actions">
              <a className="arrow-link" href="#work">
                Explore selected work
                <span aria-hidden="true">↘</span>
              </a>

              <a className="arrow-link arrow-link--secondary" href="#about">
                Learn more about me
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="hero__portrait">
            <div className="logo-container">
              <img src={shapeOnlyLogo} alt="" />
            </div>

            <p className="hero__logo-caption">
              Ideas begin as marks, questions, sketches, and possibilities.
            </p>
          </div>
        </section>

        <section className="personal-note">
          <p>
            I don’t believe art, design, technology, and business should be
            separate conversations.
          </p>

          <div className="personal-note__supporting">
            <p>My strongest work happens when I can connect them.</p>

            <p>
              I can sketch the idea, shape the user experience, protect the
              brand, communicate the vision, and help build the finished
              product.
            </p>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-intro">
            <p className="section-label">Selected work</p>
            <h2>A few ways I’ve helped ideas become real.</h2>
          </div>

          <div className="project-list">
            {projects.map((project) => {
              const preview = previewMap[project.previewKey];

              return (
                <article
                  className={`project ${project.className}`}
                  key={project.title}
                >
                  <div className="project__visual">
                    <span className="project__number">{project.number}</span>

                    {preview ?? (
                      <div className="project__mockup">
                        <span>{project.title}</span>
                      </div>
                    )}
                  </div>

                  <div className="project__content">
                    <p className="project__statement">{project.statement}</p>

                    <h3>{project.title}</h3>

                    <p className="project__description">
                      {project.description}
                    </p>

                    <ul className="project__disciplines">
                      {project.disciplines.map((discipline) => (
                        <li key={discipline}>{discipline}</li>
                      ))}
                    </ul>

                    <Link className="project__link" to={project.href}>
                      View case study
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="approach" id="approach">
          <div className="section-intro">
            <p className="section-label">The full picture</p>

            <h2>I bring different kinds of thinking to the same problem.</h2>
          </div>

          <div className="capability-grid">
            {capabilities.map((capability, index) => (
              <article className="capability" key={capability.title}>
                <span className="capability__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{capability.title}</h3>

                <p>{capability.description}</p>

                <ul className="capability__details">
                  {capability.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section className="brand-experience">
          <div className="brand-experience__heading">
            <p className="section-label">Experience that shaped me</p>

            <h2>
              I understand what it means to create for established products and
              trusted brands.
            </h2>
          </div>

          <div className="brand-experience__content">
            <p className="brand-experience__lead">
              Working with John Deere taught me that a brand is much more than a
              logo or visual system.
            </p>

            <p>
              A strong brand is expressed through products, language, service,
              usability, consistency, and every interaction a customer has with
              a company.
            </p>

            <p>
              I’ve carried that understanding into enterprise websites,
              financial products, educational tools, interactive experiences,
              design systems, and digital platforms.
            </p>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about__headline">
            <p className="section-label">A little about me</p>

            <h2>
              Artist at heart.
              <br />
              Designer in how I think.
              <br />
              Developer in how I build.
              <br />
              Leader in how I bring it together.
            </h2>
          </div>

          <div className="about__copy">
            <p>
              My career has never fit neatly into one discipline. I’ve moved
              between art, design, development, user experience, brand,
              analytics, accessibility, strategy, and leadership.
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

export default Home;
