import { Link } from "react-router-dom";

const audiences = [
  "Consumers",
  "Financial Professionals",
  "Institutions",
  "Reinsurance",
  "Careers",
  "Support",
];

export default function AspidaHero() {
  return (
    <section
      className="aspida-hero"
      id="hero"
      aria-labelledby="aspida-hero-title"
    >
      <div className="aspida-hero__inner">
        <div className="aspida-hero__topbar">
          <Link className="aspida-hero__back" to="/#work">
            <span aria-hidden="true">←</span>
            Back to work
          </Link>

          <p className="aspida-hero__index">Case Study 03</p>
        </div>

        <p className="aspida-hero__eyebrow">Aspida Digital Experience</p>

        <h1 id="aspida-hero-title" className="aspida-hero__title">
          <span>Aspida</span>
          <span>Digital Experience</span>
        </h1>

        <p className="aspida-hero__statement">
          Designing one connected digital experience for audiences with
          completely different goals.
        </p>

        <div
          className="aspida-hero__audiences"
          aria-label="Audiences served by the Aspida digital experience"
        >
          {audiences.map((audience, index) => (
            <div
              key={audience}
              className="aspida-hero__audience"
              style={
                {
                  "--audience-index": index,
                } as React.CSSProperties
              }
            >
              <span className="aspida-hero__audience-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="aspida-hero__audience-name">{audience}</span>
            </div>
          ))}
        </div>

        <div className="aspida-hero__conclusion">
          <span className="aspida-hero__conclusion-line" aria-hidden="true" />

          <p>One Connected Experience</p>
        </div>
      </div>
    </section>
  );
}
