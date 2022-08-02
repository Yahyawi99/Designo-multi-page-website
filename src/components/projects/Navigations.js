import React from "react";
import { Link } from "react-router-dom";
// css
import "../../styles/projects/navigations.css";

const Navigations = ({ data, type }) => {
  return (
    <section className="navigation-projects">
      {data.map((e) => {
        if (e.type !== type) {
          const { id, type, title } = e;
          return (
            <Link
              key={id}
              to={`/projects/${type}`}
              className="link"
              onClick={window.scrollTo({
                top: 0,
              })}
            >
              <div className={`navigation ${type}`}>
                <h1>{title}</h1>

                <div>
                  <p>VIEW PROJECTS</p>
                  <img
                    src="/assets/shared/desktop/icon-right-arrow.svg"
                    alt="right-arrow"
                  />
                </div>

                <span className="layer"></span>
              </div>
            </Link>
          );
        }
      })}
    </section>
  );
};

export default Navigations;
