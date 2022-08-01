import React from "react";
import { useParams } from "react-router-dom";
// data
import { IntroProjects, AllProjects, ProjectsNavigation } from "../data";
// components
import Header from "../components/shared/Header";
import Intro from "../components/projects/Intro";
import ProjectList from "../components/projects/ProjectList";
import Navigations from "../components/projects/Navigations";
import GetInTouch from "../components/shared/GetInTouch";
import Footer from "../components/shared/Footer";

const Web = () => {
  const { type } = useParams();

  return (
    <section className="project-page">
      <Header logo="logo-dark.png" />

      <Intro data={IntroProjects} type={type} />

      <ProjectList data={AllProjects} type={type} />

      <Navigations data={ProjectsNavigation} type={type} />

      <GetInTouch />

      <Footer />
    </section>
  );
};

export default Web;
