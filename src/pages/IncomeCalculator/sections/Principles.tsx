const principles = [
  {
    number: "01",
    title: "Support two ways of thinking",
    description:
      "Some people begin with the amount they have available to contribute. Others begin with the monthly income they want. The experience supports both paths instead of forcing everyone into the same mental model.",
  },
  {
    number: "02",
    title: "Ask only for what matters",
    description:
      "The calculator focuses on the few inputs required to produce a meaningful result, reducing friction and keeping the experience approachable.",
  },
  {
    number: "03",
    title: "Make the outcome easy to understand",
    description:
      "Monthly guaranteed income is presented as the primary result because it connects the calculation to a number people can use in real life.",
  },
  {
    number: "04",
    title: "Build confidence through clarity",
    description:
      "Plain language, validation, responsive behavior, and accessible interaction patterns help users understand what is required and what the result means.",
  },
];

function Principles() {
  return (
    <section className="income-principles" id="principles">
      <div className="income-principles__header">
        <p className="income-principles__eyebrow">Design principles</p>

        <h2>Four decisions shaped the experience.</h2>

        <p className="income-principles__intro">
          The goal was not to remove the complexity behind the calculation. It
          was to keep that complexity from becoming the user’s burden.
        </p>
      </div>

      <div className="income-principles__grid">
        {principles.map((principle) => (
          <article className="income-principle" key={principle.number}>
            <h3>{principle.title}</h3>

            <p>{principle.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Principles;
