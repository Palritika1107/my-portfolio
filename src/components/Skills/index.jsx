import React from 'react';
import './index.css';
import htmlImg from "../../assets/imgs/html5.jpg";
import cssImg from "../../assets/imgs/css3.jpg";
import jsImg from "../../assets/imgs/js.jpeg";
import reactLogo from "../../assets/imgs/react-logo-1.png";
import cppImg from "../../assets/imgs/cpp.png";
import javaLogo from "../../assets/imgs/java-logo.png";
import gitIcon from "../../assets/imgs/git-icon.png";
import nodeJsImg from "../../assets/imgs/nodejs.png";

const Skills= () => {
  return (
      <>
          {/* Skills Section */}
          <section className="bg-teal-500 text-white h-screen flex flex-col justify-center items-center scroll-snap-align-start p-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold">
              <h1 class="bouncing-letters"> 
                    <span>S</span> 
                    <span>k</span> 
                    <span>i</span> 
                    <span>l</span> 
                    <span>l</span> 
                    <span>s</span> 
                </h1> 
              </h1>
              <h3 className="text-base md:text-xl mt-4">
                I am a Frontend Developer with skills in HTML/CSS, React, and
                Node.js
              </h3>
              <h3 className="text-sm md:text-lg mt-2">
                Connect with me on{" "}
                <a
                  href="https://www.linkedin.com/in/pal-ritika/"
                  className="text-white underline"
                >
                  LinkedIn
                </a>
              </h3>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {[
                {"img" : htmlImg, "name" : "HTML"},
                {"img" : cssImg, "name" : "CSS"},
                 {"img" : jsImg , "name" : "Javascript"},
                {"img" : reactLogo, "name" : "React"},
                {"img" : cppImg , "name" : "C++"},
                {"img" : javaLogo , "name" : "Java"},
                {"img" : gitIcon , "name" : "Git"},
                {"img" : nodeJsImg , "name" : "Node"},
              ].map((obj, index) => (
                <div
                  key={index}
                  className="text-center w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6"
                >
                  <img
                    className="h-16 w-16 md:h-24 md:w-24 mx-auto"
                    src={obj.img}
                    alt="Skill"
                  />
                  <p className="font-bold mt-2 text-sm md:text-base">
                    {obj.name}
                  </p>
                </div>
              ))}
            </div>
          </section>
          </>

  )
}

export default Skills
