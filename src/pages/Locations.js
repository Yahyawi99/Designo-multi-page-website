import React from "react";
// components
import Header from "../components/shared/Header";
import Countries from "../components/locations/Countries";
import GetInTouch from "../components/shared/GetInTouch";
import Footer from "../components/shared/Footer";

const Locations = () => {
  return (
    <section className="loactions-page">
      <Header logo="logo-dark.png" />

      <Countries />

      <GetInTouch />

      <Footer />
    </section>
  );
};

export default Locations;
