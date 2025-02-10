import React from "react";
import About from "./components/About";
import Head from "./components/Head";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Element } from 'react-scroll';

// Importing all images
import githubLogo from "./assets/imgs/github-logo.webp";

const App = () => {
  return (
    <div className="scrollbar-hide overflow-x-hidden"> {/* Add overflow-x-hidden here */}
      <Navbar />
      <div className="font-mono">
        <div className="scroll-snap-type-y mandatory h-screen overflow-y-scroll scrollbar-hide">
          {/* Header Section */}
          <Element name="head">
            <div id="head"><Head /></div>
          </Element>
          <Element name="about">
            <div id="about"><About /></div>
          </Element>
          <Element name="skills">
            <div id="skills"><Skills /></div>
          </Element>
          <Element name="experience">
            <div id="experience"><Experience /></div>
          </Element>
          <Element name="projects">
            <div id="projects"><Projects /></div>
          </Element>
          <Element name="contact">
            <div id="contact"><Contact /></div>
          </Element>
        </div>
      </div>
    </div>
  );
};

export default App;
