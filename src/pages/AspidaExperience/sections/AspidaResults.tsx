type ResultMetric = {
  value: string;
  label: string;
  description: string;
};

const metrics: ResultMetric[] = [
  {
    value: "+148.5%",
    label: "Increase in adoption of Case Studies & Education",
    description:
      "Connecting product experiences with case studies and educational resources encouraged visitors to continue exploring retirement concepts instead of stopping after reviewing a single product page.",
  },
  {
    value: "+256.7%",
    label: "Increase in product page views after calculators were added",
    description:
      "Interactive calculators transformed product pages from static destinations into starting points for exploration, giving visitors a practical way to engage with complex financial concepts.",
  },
];

const outcomes = [
  "Connected product and educational journeys",
  "Interactive retirement-planning experiences",
  "A more recognizable digital brand",
  "Reusable patterns that support continued growth",
];

export default function AspidaResults() {
  return (
    <section
      id="aspida-results"
      className="aspida-results"
      aria-labelledby="aspida-results-title"
    >
      <div className="aspida-results__inner">
        <header className="aspida-results__header">
          <p className="aspida-results__eyebrow">Results</p>

          <h2 id="aspida-results-title" className="aspida-results__title">
            Designing experiences that
            <span> encouraged exploration.</span>
          </h2>

          <div className="aspida-results__introduction">
            <p className="aspida-results__lead">
              The goal was not simply to increase traffic.
            </p>

            <p className="aspida-results__description">
              By connecting product information with interactive tools,
              educational content, and real-world scenarios, the website gave
              visitors more meaningful ways to continue learning and engage with
              Aspida’s products.
            </p>
          </div>
        </header>

        <div
          className="aspida-results__metrics"
          aria-label="Measured website outcomes"
        >
          {metrics.map((metric, index) => (
            <article className="aspida-results__metric" key={metric.label}>
              <p className="aspida-results__metric-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </p>

              <strong className="aspida-results__metric-value">
                {metric.value}
              </strong>

              <h3>{metric.label}</h3>

              <p className="aspida-results__metric-description">
                {metric.description}
              </p>
            </article>
          ))}
        </div>

        <div className="aspida-results__outcomes">
          <div className="aspida-results__outcomes-heading">
            <p className="aspida-results__outcomes-eyebrow">
              Beyond the metrics
            </p>

            <h3>
              A digital platform that could
              <span> continue evolving with the business.</span>
            </h3>
          </div>

          <ul className="aspida-results__outcomes-list">
            {outcomes.map((outcome, index) => (
              <li key={outcome}>
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{outcome}</p>
              </li>
            ))}
          </ul>
        </div>

        <footer className="aspida-results__closing">
          <p>
            The greatest success was not simply higher page views.
            <span>
              It was helping people explore retirement products with greater
              clarity and confidence.
            </span>
          </p>
        </footer>
      </div>
    </section>
  );
}
