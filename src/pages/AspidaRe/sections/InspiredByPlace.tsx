import solutionsPage from "@assets/images/aspidare/Solutions-Home.jpg";

function InspiredByPlace() {
  return (
    <section
      className="aspidare-place"
      id="inspired-by-place"
      aria-labelledby="inspired-by-place-title"
    >
      <div className="aspidare-place__intro">
        <p className="aspidare-place__eyebrow">01 — Inspired by place</p>

        <h2 id="inspired-by-place-title">
          An island identity shaped the entire digital experience.
        </h2>

        <div className="aspidare-place__copy">
          <p className="aspidare-place__lead">
            Bermuda and the Cayman Islands became more than locations. They
            shaped the visual language of the brand.
          </p>

          <p>
            Open horizons, movement, light, and exploration became recurring
            themes throughout the experience. These ideas helped distinguish
            Aspida Re from the restrained and often predictable visual language
            of financial services.
          </p>

          <p>
            The result balances two very different needs: the confidence
            expected from a global reinsurance company and the openness and
            personality associated with its island roots.
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
            Island imagery and thoughtful motion created a distinctive
            experience without weakening the credibility of the brand.
          </p>
        </div>
      </div>

      <div className="aspidare-place__principles">
        <article>
          <h3>Openness</h3>
          <p>
            Generous space and large visual moments give sophisticated content
            room to breathe.
          </p>
        </article>

        <article>
          <h3>Movement</h3>
          <p>
            Animation and interaction establish rhythm while guiding attention
            through the page.
          </p>
        </article>

        <article>
          <h3>Trust</h3>
          <p>
            The visual system remains deliberate and restrained so creativity
            never competes with credibility.
          </p>
        </article>
      </div>
    </section>
  );
}

export default InspiredByPlace;
