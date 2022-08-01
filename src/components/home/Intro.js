import React from "react";
import { Link } from "react-router-dom";
// css
import "../../styles/home/intro.css";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-txt">
        <h1>Award-wining custom</h1>
        <h1>designs and digital</h1>
        <h1>branding solutions</h1>

        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>

        <Link to="/about">
          <button type="button">LEARN MORE</button>
        </Link>
      </div>

      <div className="image-hero">
        <img src="/assets/home/desktop/image-hero-phone.png" alt="phone" />
      </div>
    </section>
  );
};

export default Intro;
