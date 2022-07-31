import React from "react";
// css
import "../styles/projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <div className="web-design">
        <h1>WEB DESIGN</h1>

        <div>
          <p>VIEW PROJECTS</p>
          <img
            src="/assets/shared/desktop/icon-right-arrow.svg"
            alt="right-arrow"
          />
        </div>

        <span className="layer"></span>
      </div>

      <div className="app-design">
        <h1>APP DESIGN</h1>

        <div>
          <p>VIEW PROJECTS</p>
          <img
            src="/assets/shared/desktop/icon-right-arrow.svg"
            alt="right-arrow"
          />
        </div>

        <span className="layer"></span>
      </div>

      <div className="graphic-design">
        <h1>GRAPHIC DESIGN</h1>

        <div>
          <p>VIEW PROJECTS</p>
          <img
            src="/assets/shared/desktop/icon-right-arrow.svg"
            alt="right-arrow"
          />
        </div>

        <span className="layer"></span>
      </div>
    </section>
  );
};

export default Projects;
