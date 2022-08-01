import React from "react";
import { useGlobal } from "../context";
// components
import Header from "../components/shared/Header";
import Countries from "../components/locations/Countries";
import GetInTouch from "../components/shared/GetInTouch";
import Footer from "../components/shared/Footer";

const Locations = () => {
  const { showNav, setShowNav } = useGlobal();

  return (
    <section className="loactions-page">
      <Header
        logo="logo-dark.png"
        name="main-header"
        showNav={showNav}
        setShowNav={setShowNav}
      />

      <Countries />

      <GetInTouch />

      <Footer />
    </section>
  );
};

export default Locations;
