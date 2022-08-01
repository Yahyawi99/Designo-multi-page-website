import React from "react";
// css
import "../../styles/locations/countries.css";

const Countries = () => {
  return (
    <section className="countries">
      <div className="country">
        <div className="country-info">
          <h1 className="name">Canada</h1>

          <div className="info">
            <ul>
              <li>Designo Central Office</li>
              <li>3886 Wellington Street</li>
              <li>Toronto, Ontario M9C 3J5</li>
            </ul>

            <ul>
              <li>Contact</li>
              <li>P : +1 253-863-8967</li>
              <li>M : contact@designo.co</li>
            </ul>
          </div>
        </div>

        <div className="country-map">
          <img
            src="/assets/locations/desktop/image-map-canada.png"
            alt="office-location"
          />
        </div>
      </div>

      <div className="country">
        <div className="country-map">
          <img
            src="/assets/locations/desktop/image-map-australia.png"
            alt="office-location"
          />
        </div>

        <div className="country-info">
          <h1 className="name">Australia</h1>

          <div className="info">
            <ul>
              <li>Designo AU Office</li>
              <li>19 Balonne Street</li>
              <li>New South Wales 2443</li>
            </ul>

            <ul>
              <li>Contact</li>
              <li>P : (02) 6720 9092</li>
              <li>M : contact@designo.au</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="country">
        <div className="country-info">
          <h1 className="name">United kingdom</h1>

          <div className="info">
            <ul>
              <li>Designo UK Office</li>
              <li>13 Colorado Way</li>
              <li>Rhyd-y-fro SA8 9GA</li>
            </ul>

            <ul>
              <li>Contact</li>
              <li>P : 078 3115 1400</li>
              <li>M : contact@designo.uk</li>
            </ul>
          </div>
        </div>

        <div className="country-map">
          <img
            src="/assets/locations/desktop/image-map-united-kingdom.png"
            alt="office-location"
          />
        </div>
      </div>
    </section>
  );
};

export default Countries;
