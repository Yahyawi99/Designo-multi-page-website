import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/projects/:type" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
