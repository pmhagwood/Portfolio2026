import TwoPlanningPaths from "@/components/TwoPlanningPaths/TwoPlanningPaths";
import ProgressiveDisclosure from "@/components/ProgressiveDisclosure/ProgressiveDisclosure";
import DesignToProduction from "@/components/DesignToProduction/DesignToProduction";

function DesignProcess() {
  return (
    <section className="income-process" id="design-process">
      <div className="income-process__header">
        <p className="income-process__eyebrow">Design process</p>

        <h2>From a complex calculation to a focused experience.</h2>

        <p className="income-process__intro">
          The work centered on organizing the right information, supporting
          different planning mindsets, and making the transition from input to
          result feel clear and predictable.
        </p>
      </div>

      <div className="income-process__steps">
        <article className="income-process-step">
          <div className="income-process-step__content">
            <p className="income-process-step__label">Shape the experience</p>

            <h3>Start with the decisions users are actually trying to make.</h3>

            <p>
              The calculator was organized around two familiar questions: “What
              could this contribution provide?” and “What would it take to reach
              my desired monthly income?”
            </p>

            <p>
              That led to a flexible experience with two planning modes rather
              than a single, rigid path.
            </p>
          </div>

          <div className="income-process-step__visual">
            <TwoPlanningPaths />
          </div>
        </article>

        <article className="income-process-step">
          <div className="income-process-step__content">
            <p className="income-process-step__label">Refine the interaction</p>

            <h3>Make every field, state, and result earn its place.</h3>

            <p>
              Inputs were kept focused, validation was written to guide rather
              than punish, and the result hierarchy emphasized the numbers users
              were most likely to understand and compare.
            </p>

            <p>
              Additional outcomes remained available through progressive
              disclosure, keeping the first answer simple without limiting the
              depth of the tool.
            </p>
          </div>

          <div className="income-process-step__visual">
            <ProgressiveDisclosure />
          </div>
        </article>

        <article className="income-process-step">
          <div className="income-process-step__content">
            <p className="income-process-step__label">
              Translate it into production
            </p>

            <h3>
              Preserve the design intent through responsive implementation.
            </h3>

            <p>
              The final experience was built in React with responsive layouts,
              reusable components, accessible controls, validation logic, and a
              backend API responsible for the final financial calculations.
            </p>

            <p>
              The design and implementation evolved together so the finished
              product stayed clear, consistent, and maintainable.
            </p>
          </div>

          <div className="income-process-step__visual">
            <DesignToProduction />
          </div>
        </article>
      </div>
    </section>
  );
}

export default DesignProcess;
