import React from "react";
import { useGlobal } from "../context";
// css
import "../styles/contact/contact.css";
// components
import Header from "../components/shared/Header";
import ContactUs from "../components/contact/ContactUs";
import Locations from "../components/shared/Locations";
import Footer from "../components/shared/Footer";

const Contact = () => {
  const { showNav, setShowNav } = useGlobal();

  return (
    <section className="contact">
      <Header
        logo="logo-dark.png"
        name="main-header"
        showNav={showNav}
        setShowNav={setShowNav}
      />

      <ContactUs />

      <Locations />

      <Footer />
    </section>
  );
};

export default Contact;
