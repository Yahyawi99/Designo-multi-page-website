import React from "react";
// css
import "../../styles/about/talent.css";

const Talent = () => {
  return (
    <section className="talent">
      <div className="talent-img">
        <img
          src="/assets/about/desktop/image-world-class-talent.jpg"
          alt="our-talent"
        />
      </div>

      <div className="talent-txt">
        <h1>World-class talent</h1>

        <p>
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </p>

        <p>
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
      </div>
    </section>
  );
};

export default Talent;
