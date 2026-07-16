import solutionsPage from "@assets/images/aspidare/Solutions-Home.jpg";

function InspiredByPlace() {
  return (
    <section className="aspidare-place" id="inspired-by-place">
      <div className="aspidare-place__intro">
        <p className="aspidare-place__eyebrow">Inspired by place</p>

        <h2>
          A digital experience shaped by island roots and global ambition.
        </h2>

        <div className="aspidare-place__copy">
          <p className="aspidare-place__lead">
            Aspida Re is rooted in Bermuda and the Cayman Islands, but operates
            within a sophisticated global financial market.
          </p>

          <p>
            Rather than relying on the expected visual language of reinsurance,
            I used openness, movement, color, photography, and interaction to
            create an experience that felt confident, distinctive, and closely
            connected to place.
          </p>

          <p>
            The Solutions page became one of the clearest expressions of that
            direction—combining complex business content with a more visual,
            exploratory way to move through the story.
          </p>
        </div>
      </div>

      <div className="aspidare-place__presentation">
        <div className="aspidare-place__image-frame">
          <div className="aspidare-place__browser-bar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="aspidare-place__image-window">
            <img
              src={solutionsPage}
              alt="Aspida Re Solutions page showing its island-inspired visual design"
            />
          </div>
        </div>

        <div className="aspidare-place__note">
          <span>Creative direction</span>

          <p>
            Island imagery and motion created a sense of openness without
            weakening the credibility expected from a global reinsurance brand.
          </p>
        </div>
      </div>

      <div className="aspidare-place__principles">
        <article>
          <h3>Openness</h3>
          <p>
            Generous space and large visual moments keep dense institutional
            content from feeling closed or overwhelming.
          </p>
        </article>

        <article>
          <h3>Movement</h3>
          <p>
            Motion guides attention and helps the experience feel alive rather
            than behaving like a static corporate brochure.
          </p>
        </article>

        <article>
          <h3>Confidence</h3>
          <p>
            The visual system remains restrained and deliberate so the more
            playful elements still feel credible.
          </p>
        </article>
      </div>
    </section>
  );
}

export default InspiredByPlace;
