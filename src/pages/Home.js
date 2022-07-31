import React from "react";
// css
import "../styles/home/home.css";
// components
import Header from "../components/shared/Header";
import Intro from "../components/home/Intro";
import Projects from "../components/home/Projects";
import Description from "../components/home/Description";
import GetInTouch from "../components/home/GetInTouch";
import Footer from "../components/shared/Footer";

const Home = () => {
  return (
    <section className="home">
      <Header logo="logo-dark.png" />

      <Intro />

      <Projects />

      <Description />

      <GetInTouch />

      <Footer />
    </section>
  );
};

export default Home;
