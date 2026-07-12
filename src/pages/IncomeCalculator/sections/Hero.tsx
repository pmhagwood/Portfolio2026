import { Link } from "react-router-dom";

import IncomeCalculatorPreview from "@/components/IncomeCalculatorPreview";

function Hero() {
  return (
    <section className="income-hero">
      <div className="income-hero__topbar">
        <Link className="income-hero__back" to="/#work">
          <span aria-hidden="true">←</span>
          Back to work
        </Link>

        <p className="income-hero__index">Case Study 01</p>
      </div>

      <div className="income-hero__layout">
        <div className="income-hero__content">
          <p className="income-hero__eyebrow">
            Product strategy · UX design · Front-end development
          </p>

          <h1>Income Calculator</h1>

          <p className="income-hero__intro">
            Helping people understand retirement income with greater clarity and
            confidence.
          </p>

          <dl className="income-hero__meta">
            <div>
              <dt>Company</dt>
              <dd>Aspida</dd>
            </div>

            <div>
              <dt>My contribution</dt>
              <dd>
                Product strategy
                <br />
                UX design
                <br />
                React development
              </dd>
            </div>

            <div>
              <dt>Platform</dt>
              <dd>Responsive web application</dd>
            </div>
          </dl>
        </div>

        <div className="income-hero__visual">
          <div className="income-hero__preview">
            <IncomeCalculatorPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
