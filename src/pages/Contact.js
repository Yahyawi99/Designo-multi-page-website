import React from "react";
// css
import "../styles/contact/contact.css";
// components
import Header from "../components/shared/Header";
import ContactUs from "../components/contact/ContactUs";
import Locations from "../components/shared/Locations";
import Footer from "../components/shared/Footer";

const Contact = () => {
  return (
    <section className="contact">
      <Header logo="logo-dark.png" name="main-header" />

      <ContactUs />

      <Locations />

      <Footer />
    </section>
  );
};

export default Contact;
