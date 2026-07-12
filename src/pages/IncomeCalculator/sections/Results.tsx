const outcomes = [
  "Responsive experience across desktop and mobile devices.",
  "Support for both contribution-first and income-first planning.",
  "Reusable React component architecture.",
  "Accessible interactions and validation throughout the experience.",
  "Backend-driven financial calculations through API integration.",
  "Analytics to understand user engagement and product usage.",
];

function Results() {
  return (
    <section id="results" className="income-results">
      <div className="income-results__header">
        <p className="income-results__eyebrow">Results</p>

        <h2>A better experience for understanding retirement income.</h2>

        <p>
          The project successfully transformed a complex financial calculation
          into a guided digital experience that is approachable, responsive, and
          designed to build confidence.
        </p>
      </div>

      <ul className="income-results__list">
        {outcomes.map((outcome) => (
          <li key={outcome}>{outcome}</li>
        ))}
      </ul>
    </section>
  );
}

export default Results;
