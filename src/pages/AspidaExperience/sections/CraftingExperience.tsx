import lifestyleImg from "@assets/images/AspidaExperience/People---Life-at-AspidaLife.jpg";
import productsImg from "@assets/images/AspidaExperience/Consumer.jpg";
import daleCaseStudyImg from "@assets/images/AspidaExperience/Case-Study-Dale.jpg";
import calculatorImg from "@assets/images/AspidaExperience/Case-Study-Dale-calc.jpg";

type BrandExperience = {
  number: string;
  title: string;
  statement: string;
  description: string;
  image: string;
  imageAlt: string;
  details: string[];
};

const brandExperiences: BrandExperience[] = [
  {
    number: "01",
    title: "Lifestyle & People",
    statement: "Building a brand people could connect with.",
    description:
      "Aspida’s digital presence needed to communicate more than products and financial strength. The lifestyle and people experience brought forward the company’s personality, culture, and human side, helping the brand feel more approachable and distinctive.",
    image: lifestyleImg,
    imageAlt:
      "Aspida lifestyle and people page highlighting the company’s culture and people",
    details: [
      "Brand personality",
      "People-centered storytelling",
      "Company culture",
      "Lifestyle imagery",
    ],
  },
  {
    number: "02",
    title: "Product Experiences",
    statement: "Financial products became digital experiences.",
    description:
      "Products evolved beyond static brochures and isolated descriptions. Connected product pages, educational content, supporting resources, and clear paths to action helped visitors understand what Aspida offered and how those products could fit into real financial goals.",
    image: productsImg,
    imageAlt: "Aspida consumer product experience showing retirement solutions",
    details: [
      "Product storytelling",
      "Connected resources",
      "Educational support",
      "Clear paths to action",
    ],
  },
  {
    number: "03",
    title: "Case Studies",
    statement: "Showing real decisions instead of listing product features.",
    description:
      "The Dale case study transformed a financial scenario into a guided story. Rather than presenting another product explanation, the experience showed how a person’s retirement goals, concerns, and choices could connect to an Aspida solution in a way that felt practical and understandable.",
    image: daleCaseStudyImg,
    imageAlt:
      "Aspida Dale retirement case study showing a guided financial planning story",
    details: [
      "Story-led education",
      "Realistic financial scenarios",
      "Interactive explanations",
      "Product context",
    ],
  },
  {
    number: "04",
    title: "Planning Tools",
    statement: "Turning education into action.",
    description:
      "Interactive calculators and planning tools translated complex financial concepts into guided, approachable experiences. Visitors could explore realistic scenarios, understand possible outcomes, and move forward with greater confidence.",
    image: calculatorImg,
    imageAlt:
      "Aspida guaranteed income calculator showing a retirement planning experience",
    details: [
      "Interactive calculators",
      "Scenario planning",
      "Responsive interfaces",
      "Guided decision-making",
    ],
  },
];

export default function CraftingExperience() {
  return (
    <section
      id="crafting-experience"
      className="crafting-experience"
      aria-labelledby="crafting-experience-title"
    >
      <div className="crafting-experience__inner">
        <header className="crafting-experience__header">
          <p className="crafting-experience__eyebrow">
            Crafting the Brand Experience
          </p>

          <h2
            id="crafting-experience-title"
            className="crafting-experience__title"
          >
            A digital brand built through
            <span> meaningful experiences.</span>
          </h2>

          <div className="crafting-experience__introduction">
            <p className="crafting-experience__lead">
              A digital-first brand needed to do more than present information.
            </p>

            <p className="crafting-experience__description">
              I created a connected collection of experiences that brought
              Aspida’s brand to life through its people, products, educational
              resources, and planning tools. Each experience served a different
              purpose, but together they created a more approachable, useful,
              and recognizable digital presence.
            </p>
          </div>
        </header>

        <div className="crafting-experience__experiences">
          {brandExperiences.map((experience, index) => (
            <article
              className="crafting-experience__item"
              key={experience.title}
            >
              <div className="crafting-experience__content">
                <div className="crafting-experience__heading">
                  <p className="crafting-experience__number" aria-hidden="true">
                    {experience.number}
                  </p>

                  <div>
                    <p className="crafting-experience__category">
                      {experience.title}
                    </p>

                    <h3>{experience.statement}</h3>
                  </div>
                </div>

                <p className="crafting-experience__copy">
                  {experience.description}
                </p>

                <ul className="crafting-experience__details">
                  {experience.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>

              <figure className="crafting-experience__visual">
                <div className="crafting-experience__image-wrap">
                  <img
                    src={experience.image}
                    alt={experience.imageAlt}
                    className="crafting-experience__image"
                    loading="lazy"
                  />
                </div>

                <figcaption>
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(brandExperiences.length).padStart(2, "0")}
                </figcaption>
              </figure>
            </article>
          ))}
        </div>

        <footer className="crafting-experience__closing">
          <p aria-label="Products, people, learning, and planning. One connected digital brand.">
            <span>Products.</span>
            <span>People.</span>
            <span>Learning.</span>
            <span>Planning.</span>
            <strong>One connected digital brand.</strong>
          </p>
        </footer>
      </div>
    </section>
  );
}
