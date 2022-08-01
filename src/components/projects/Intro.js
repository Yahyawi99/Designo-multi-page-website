import React from "react";
// css
import "../../styles/projects/intro.css";

const Intro = ({ data, type }) => {
  return data.map((e) => {
    if (e.type === type) {
      const { id, title, description } = e;

      return (
        <section key={id} className="projects-intro">
          <h1>{title}</h1>
          <p>{description}</p>
        </section>
      );
    }
  });
};

export default Intro;
