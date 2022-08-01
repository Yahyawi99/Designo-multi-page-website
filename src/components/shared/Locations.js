import React from "react";
import { Link } from "react-router-dom";
// css
import "../../styles/shared/loactions.css";

const Locations = () => {
  return (
    <section className="locations">
      <div className="canada">
        <div className="countrie-img">
          <img
            src="/assets/shared/desktop/illustration-canada.svg"
            alt="country"
          />
        </div>

        <h1 className="country-name">CANADA</h1>

        <Link to="/locations" className="link">
          <button className="see-btn">SEE LOCATION</button>
        </Link>
      </div>

      <div className="australia">
        <div className="countrie-img">
          <img
            src="/assets/shared/desktop/illustration-australia.svg"
            alt="country"
          />
        </div>

        <h1 className="country-name">AUSTRALIA</h1>

        <Link to="/locations" className="link">
          <button className="see-btn">SEE LOCATION</button>
        </Link>
      </div>

      <div className="uk">
        <div className="countrie-img">
          <img
            src="/assets/shared/desktop/illustration-united-kingdom.svg"
            alt="country"
          />
        </div>

        <h1 className="country-name">UNITED KINGDOM</h1>

        <Link to="/locations" className="link">
          <button className="see-btn">SEE LOCATION</button>
        </Link>
      </div>
    </section>
  );
};

export default Locations;
