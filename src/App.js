import React from "react";
import "./App.css";
import Hero from "./components/HeaderSection/Hero";
import About from "./components/AboutSection/About";
import Projects from "./components/ProjectsSection/Projects";
import Contact from "./components/ContactSection/Contact";

function App() {
  return (
    <React.Fragment>
      <div className="background-design">
        <Hero />
        <div className="container">
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
