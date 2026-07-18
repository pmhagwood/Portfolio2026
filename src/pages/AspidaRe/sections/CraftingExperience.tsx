import desktopExperience from "@assets/images/aspidare/Solutions-Home.jpg";
import mobileExperience from "@assets/images/aspidare/Solutions-mobile.jpg";

const implementationAreas = [
  {
    number: "01",
    title: "Responsive composition",
    description:
      "Layouts, typography, imagery, and interactions were adapted for different screen sizes rather than simply compressed for mobile.",
  },
  {
    number: "02",
    title: "Purposeful motion",
    description:
      "Animation timing and staged reveals were used to guide attention, establish rhythm, and support the story being told.",
  },
  {
    number: "03",
    title: "Accessible interaction",
    description:
      "Interactive elements were designed with clear controls, meaningful focus states, readable content, and reduced-motion support.",
  },
  {
    number: "04",
    title: "Reusable architecture",
    description:
      "Shared React components and content-driven patterns made the experience easier to maintain and extend across the site.",
  },
];

const experienceLayers = [
  {
    label: "Brand",
    title: "Visual language",
    description:
      "Typography, color, imagery, illustration, and editorial composition.",
  },
  {
    label: "Experience",
    title: "Interaction patterns",
    description:
      "Scroll reveals, animated storytelling, progressive disclosure, and navigation.",
  },
  {
    label: "System",
    title: "Reusable components",
    description:
      "Flexible sections, shared content patterns, responsive layouts, and maintainable styles.",
  },
];

function CraftingExperience() {
  return (
    <section
      className="aspidare-crafting"
      id="crafting-the-experience"
      aria-labelledby="aspidare-crafting-title"
    >
      <div className="aspidare-crafting__header">
        <p className="aspidare-crafting__eyebrow">
          04 — Crafting the experience
        </p>

        <h2 id="aspidare-crafting-title">
          Bringing the creative direction into the browser.
        </h2>

        <div className="aspidare-crafting__intro">
          <p>
            The visual ideas only worked if they could survive real content,
            different devices, changing business needs, and the practical
            demands of a production website.
          </p>

          <p>
            I translated the creative direction into a responsive React
            experience supported by reusable components, thoughtful animation,
            and accessible interaction patterns.
          </p>
        </div>
      </div>

      <div className="aspidare-crafting__system">
        <div className="aspidare-crafting__system-copy">
          <p className="aspidare-crafting__label">From concept to system</p>

          <h3>
            Every expressive moment needed a dependable structure behind it.
          </h3>

          <p>
            The experience was built as a connected system rather than a series
            of isolated page designs. Shared patterns helped preserve the brand
            while allowing individual sections to respond to their content.
          </p>
        </div>

        <div
          className="aspidare-crafting__layers"
          aria-label="Three layers of the Aspida Re digital experience"
        >
          {experienceLayers.map((layer) => (
            <article key={layer.label}>
              <span>{layer.label}</span>
              <h4>{layer.title}</h4>
              <p>{layer.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="aspidare-crafting__areas">
        {implementationAreas.map((area) => (
          <article key={area.number}>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </article>
        ))}
      </div>

      <div className="aspidare-crafting__responsive">
        <div className="aspidare-crafting__responsive-copy">
          <p className="aspidare-crafting__label">Responsive by design</p>

          <h3>The experience changed composition—not just size.</h3>

          <p>
            Desktop layouts could use overlapping imagery, wide editorial
            compositions, and more spatial storytelling. On smaller screens,
            content was reorganized into a clearer vertical sequence with
            simplified motion and accessible controls.
          </p>
        </div>

        <figure className="aspidare-crafting__screens">
          <div className="aspidare-crafting__screen aspidare-crafting__screen--desktop">
            <div className="aspidare-crafting__browser-bar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className="aspidare-crafting__desktop-window">
              <img
                src={desktopExperience}
                alt="Desktop view of the Aspida Re website showing its responsive editorial layout"
              />
            </div>

            <div className="aspidare-crafting__screen-label">
              <span>Desktop</span>
              <p>
                Wide compositions create space for layered storytelling,
                imagery, and supporting content.
              </p>
            </div>
          </div>

          <div className="aspidare-crafting__screen aspidare-crafting__screen--mobile">
            <div className="aspidare-crafting__phone-frame">
              <div
                className="aspidare-crafting__phone-speaker"
                aria-hidden="true"
              />

              <div className="aspidare-crafting__mobile-window">
                <img
                  src={mobileExperience}
                  alt="Mobile view of the Aspida Re website showing its reorganized responsive layout"
                />
              </div>
            </div>

            <div className="aspidare-crafting__screen-label">
              <span>Mobile</span>
              <p>
                Content becomes a focused vertical sequence with clearer pacing,
                simplified composition, and touch-friendly interaction.
              </p>
            </div>
          </div>

          <figcaption>
            The same visual language is preserved across devices, while the
            composition changes to support the available space and method of
            interaction.
          </figcaption>
        </figure>
      </div>

      <blockquote className="aspidare-crafting__quote">
        <p>
          Craftsmanship is where visual ambition and technical discipline meet.
        </p>
      </blockquote>
    </section>
  );
}

export default CraftingExperience;
