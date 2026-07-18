import partnershipScreenshot from "@assets/images/aspidare/partnering-boat.jpg";

const callouts = [
  {
    number: "01",
    className: "aspidare-partnership-callout--boat",
    title: "Movement establishes the metaphor",
    description:
      "The sailboat moves into frame, connecting the partnership message to Aspida Re’s island identity before the visitor reads a single benefit.",
  },
  {
    number: "02",
    className: "aspidare-partnership-callout--solutions",
    title: "The illustration organizes the content",
    description:
      "Numbered points on the sails create a direct relationship between the visual and the supporting insurance benefits.",
  },
  {
    number: "03",
    className: "aspidare-partnership-callout--experience",
    title: "Interaction makes the message memorable",
    description:
      "Progressive reveals allow visitors to explore each idea rather than confronting another static insurance chart.",
  },
];

function PartnershipStory() {
  return (
    <section
      className="aspidare-partnership"
      id="partnership-story"
      aria-labelledby="partnership-story-title"
    >
      <div className="aspidare-partnership__header">
        <p className="aspidare-partnership__eyebrow">
          02 — Communicating through storytelling
        </p>

        <h2 id="partnership-story-title">
          How do you explain partnership without writing another paragraph?
        </h2>

        <div className="aspidare-partnership__intro">
          <p>
            The page needed to communicate why insurers should partner with
            Aspida Re, but a conventional list of benefits would have made an
            important message feel predictable.
          </p>

          <p>
            I helped transform the content into an interactive sailboat
            experience that uses animation, numbered connection points, and
            progressive disclosure to make the value proposition easier to
            explore.
          </p>
        </div>
      </div>

      <div className="aspidare-partnership__presentation">
        <div className="aspidare-partnership__media">
          <img
            src={partnershipScreenshot}
            alt="Aspida Re partnership interaction showing a sailboat with numbered sails and supporting insurance benefits"
          />

          {callouts.map((callout) => (
            <article
              className={`aspidare-partnership-callout ${callout.className}`}
              key={callout.number}
            >
              <span className="aspidare-partnership-callout__number">
                {callout.number}
              </span>

              <div className="aspidare-partnership-callout__content">
                <h3>{callout.title}</h3>
                <p>{callout.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="aspidare-partnership__caption">
          <p>
            A screen capture from the live Aspida Re Solutions experience.
            Portfolio annotations were added to explain the interaction and
            design intent.
          </p>

          <a
            href="https://aspidare.bm/Solutions#partnering"
            target="_blank"
            rel="noreferrer"
          >
            Experience the live interaction
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="aspidare-partnership__takeaway">
        <p>
          The result was not simply a more decorative way to display
          information. It created a stronger relationship between the content,
          the brand, and the experience of moving through the page.
        </p>
      </div>
    </section>
  );
}

export default PartnershipStory;
