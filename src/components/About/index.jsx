import React from "react";
import "./index.css";


const About = () => {
  return (
    <div>
      <header className="bg-teal-500 text-white h-screen flex flex-col justify-center items-center scroll-snap-align-start p-4">
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-mono">RITIKA PAL</h1>
        </div>
        
        <div className="text-center mx-4 md:mx-10">
          <h1 className="text-lg md:text-2xl">
            Hi, I am Ritika Pal, 25 years old, living in Bengaluru, India
          </h1>
          <h3 className="mt-2 text-sm md:text-base">
            I am learning{" "}
            <a
              className="text-white underline"
              href="https://www.instagram.com/palr711/"
            >
              full stack development
            </a>
          </h3>
          <h5 className="mt-2 text-sm md:text-base">
            Watch this space for more projects!
          </h5>
          <h5 className="mt-2 text-sm md:text-base">
            More stuff, coming soon!
          </h5>
        </div>
      </header>
    </div>
  );
};

export default About;
