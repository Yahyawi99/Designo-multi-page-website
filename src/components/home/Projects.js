import React from "react";
import { Link } from "react-router-dom";
// css
import "../../styles/home/projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <Link to="" className="web-design link">
        <h1>WEB DESIGN</h1>

        <div>
          <p>VIEW PROJECTS</p>
          <img
            src="/assets/shared/desktop/icon-right-arrow.svg"
            alt="right-arrow"
          />
        </div>

        <span className="layer"></span>
      </Link>

      <Link to="" className="app-design link">
        <h1>APP DESIGN</h1>

        <div>
          <p>VIEW PROJECTS</p>
          <img
            src="/assets/shared/desktop/icon-right-arrow.svg"
            alt="right-arrow"
          />
        </div>

        <span className="layer"></span>
      </Link>

      <Link to="" className="graphic-design link">
        <h1>GRAPHIC DESIGN</h1>

        <div>
          <p>VIEW PROJECTS</p>
          <img
            src="/assets/shared/desktop/icon-right-arrow.svg"
            alt="right-arrow"
          />
        </div>

        <span className="layer"></span>
      </Link>
    </section>
  );
};

export default Projects;
