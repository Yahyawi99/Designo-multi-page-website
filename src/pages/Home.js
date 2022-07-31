import React from "react";
// css
import "../styles/home.css";
// components
import Header from "../components/Header";
import Intro from "../components/Intro";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <section className="home">
      <Header />

      <Intro />

      <Projects />
    </section>
  );
};

export default Home;
