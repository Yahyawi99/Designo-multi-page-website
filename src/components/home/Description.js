import React from "react";
// css
import "../../styles/home/description.css";

const Description = () => {
  return (
    <section className="description">
      <div>
        <div className="illustration">
          <img
            src="/assets/home/desktop/illustration-passionate.svg"
            alt="passionate-illustration"
          />
        </div>

        <h3 className="description-title">PASSIONATE</h3>

        <p className="description-txt">
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.
        </p>
      </div>

      <div>
        <div className="illustration">
          <img
            src="/assets/home/desktop/illustration-resourceful.svg"
            alt="resourceful-illustration"
          />
        </div>

        <h3 className="description-title">RESOURCEFUL</h3>

        <p className="description-txt">
          Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs.
        </p>
      </div>

      <div>
        <div className="illustration">
          <img
            src="/assets/home/desktop/illustration-friendly.svg"
            alt="friendly-illustration"
          />
        </div>

        <h3 className="description-title">FRIENDLY</h3>

        <p className="description-txt">
          We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide.
        </p>
      </div>
    </section>
  );
};

export default Description;
