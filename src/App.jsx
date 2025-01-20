import React from "react";
import About from "./components/About";
import Head from "./components/Head";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

// Importing all images


import calendarImg from "./assets/imgs/calendar.png";
import githubLogo from "./assets/imgs/github-logo.webp";

const App = () => {
  return (
    <div className="scrollbar-hide no-scrollbar">
      <Navbar></Navbar>
      <body className="font-mono">
        <div className="scroll-snap-type-y mandatory h-screen overflow-y-scroll">
          {/* Header Section */}
          
          <Head />
          <About />
          <Skills />
          <Experience />
          <Projects />

          

          {/* Contact Section */}
          <section className="bg-teal-500 text-white h-screen flex flex-col justify-center items-center scroll-snap-align-start p-4">
            <p className="text-sm md:text-lg text-center">
              Connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/pal-ritika/"
                className="text-white underline"
              >
                LinkedIn
              </a>{" "}
              or <br />
              Send me an email at{" "}
              <a
                href="mailto:palritika71@gmail.com"
                className="text-white underline"
              >
                palritika71@gmail.com
              </a>
            </p>
          </section>

          {/* Footer */}
          <div className="fixed bottom-2 left-4">
            <a href="https://github.com/Palritika1107">
              <img
                className="rounded-full h-10 w-10 md:h-12 md:w-12 shadow-xl"
                src={githubLogo}
                alt="GitHub"
              />
            </a>
          </div>
        </div>
      </body>
    </div>
  );
};

export default App;
