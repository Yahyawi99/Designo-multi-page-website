import React from "react";
// css
import "../../styles/projects/projectsList.css";

const ProjectList = ({ data, type }) => {
  return (
    <section className="projects-list">
      {data.map((e) => {
        if (e.type === type) {
          const { id, title, description, image } = e;

          return (
            <div key={id} className="project">
              <img src={image} alt="project" />

              <div>
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
            </div>
          );
        }
      })}
    </section>
  );
};

export default ProjectList;
