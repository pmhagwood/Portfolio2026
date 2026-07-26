const AspidaChallenge = () => {
  return (
    <section
      id="aspidaexperience-challenge"
      className="aspida-challenge"
      aria-labelledby="aspida-challenge-title"
    >
      <div className="aspida-challenge__inner">
        <p className="aspida-challenge__eyebrow">The Challenge</p>

        <h2 className="aspida-challenge__title" id="aspida-challenge-title">
          Moving from printed collateral to connected digital experiences.
        </h2>

        <div className="aspida-challenge__content">
          <div className="aspida-challenge__statement">
            <p>The challenge wasn’t simply redesigning a website.</p>
          </div>

          <div className="aspida-challenge__body">
            <p>
              When I joined Aspida, much of the company’s communication lived in
              printed brochures, PDFs, presentations, and disconnected web
              pages. Information was often duplicated across teams, updated
              independently, and dependent on printed materials to tell the
              complete story.
            </p>

            <p>
              Aspida wanted to become a digital-first company, but its digital
              presence did not yet provide the connected experience needed to
              support that goal. Customers, financial professionals,
              institutional partners, reinsurance clients, prospective
              employees, and existing policyholders all arrived with different
              needs, yet the experience did little to guide them from one answer
              to the next.
            </p>

            <p>
              My role was to help begin that transition by creating a digital
              ecosystem that could educate, guide, and support each audience
              while reducing the organization’s reliance on fragmented print
              materials.
            </p>
          </div>
        </div>

        <div className="aspida-challenge__principle">
          <p>
            Printed materials answer individual questions.
            <span> Digital experiences can guide an entire journey.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AspidaChallenge;
