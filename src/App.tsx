import "./App.css";

function App() {
  return (
    <main className="portfolio">
      <section className="hero">
        <p className="hero__eyebrow">Designer · Developer · Digital Experience Leader</p>

        <h1 className="hero__title">
          Hi, I’m Paul.
          <span>I design and build thoughtful digital experiences.</span>
        </h1>

        <p className="hero__description">
          I bring design, front-end development, strategy, accessibility,
          animation, and product thinking together to create digital
          experiences that are useful, engaging, and built to perform.
        </p>

        <div className="hero__actions">
          <a className="button button--primary" href="#work">
            View my work
          </a>

          <a className="button button--secondary" href="mailto:">
            Contact me
          </a>
        </div>
      </section>

      <section className="work-preview" id="work">
        <p className="section-label">Selected work</p>

        <h2>Case studies are coming next.</h2>

        <p>
          This portfolio is currently being built. Soon it will feature
          projects spanning UX design, React development, digital strategy,
          accessibility, analytics, and interactive storytelling.
        </p>
      </section>
    </main>
  );
}

export default App;