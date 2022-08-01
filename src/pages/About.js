import React from "react";
import { useGlobal } from "../context";
// components
import Header from "../components/shared/Header";
import AboutUs from "../components/about/AboutUs";
import Talent from "../components/about/Talent";
import Locations from "../components/shared/Locations";
import Deal from "../components/about/Deal";
import GetInTouch from "../components/shared/GetInTouch";
import Footer from "../components/shared/Footer";

const About = () => {
  const { showNav, setShowNav } = useGlobal();

  return (
    <section className="about">
      <Header
        logo="logo-dark.png"
        name="main-header"
        showNav={showNav}
        setShowNav={setShowNav}
      />

      <AboutUs />

      <Talent />

      <Locations />

      <Deal />

      <GetInTouch />

      <Footer />
    </section>
  );
};

export default About;
