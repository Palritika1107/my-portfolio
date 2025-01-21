import React from "react";
import skribbleImg from "../../assets/imgs/skribble.png";
import { FaGithub , FaLink} from "react-icons/fa";
import splitwiseImg from "../../assets/imgs/splitwise.jpeg"

const Projects = () => {
  return (
    <section className="h-screen flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide text-xl">
      {/* First Section */}
      <div className="section flex-shrink-0 w-screen h-full flex flex-col items-center justify-center snap-center bg-[#E6358B]">
        <h1 className="bouncing-letters text-4xl md:text-5xl font-bold text-white">
          <span>P</span>
          <span>r</span>
          <span>o</span>
          <span>j</span>
          <span>e</span>
          <span>c</span>
          <span>t</span>
          <span>s</span>
        </h1>
        <p className="text-white mt-4">List Of Personal Projects</p>
      </div>

     

      {/* Third Section */}
      
      <div className="section flex-shrink-0 w-screen h-full flex flex-col gap-4 p-4 lg:grid lg:grid-cols-2 lg:grid-rows-[auto,1fr] lg:gap-6 items-center justify-center snap-center bg-[#E6358B]">
        {/* Top Row - Single Item Spanning Two Columns */}
        <div className="rounded-lg flex justify-center lg:col-span-2 ">
          <h1 className="bouncing-letters text-4xl md:text-5xl font-bold text-white mx-auto">
            <span>S</span>
            <span>p</span>
            <span>l</span>
            <span>i</span>
            <span>t</span>
            <span>w</span>
            <span>i</span>
            <span>s</span>
            <span>e</span>
            <span>&nbsp;</span> 
            <span>A</span>
            <span>p</span>
            <span>p</span>
          </h1>
        </div>

        {/* Bottom Row - Two Equal Items */}
        {/* image */}
        <div className="rounded-lg">
          <img
            src={splitwiseImg}
            alt="Skribble-icon"
            className="max-w-full block"
          />
        </div>
        {/* description */}
        <div className=" rounded-lg">
          <p className="text-white mt-4">
          an expense sharing app ,that allows you to create group, add friends and add and settle expenses.
          Built using using HTML, CSS, and React.
          </p>
          <div className="w-[150px] h-[40px] ">
          <a
            href="https://github.com/Palritika1107/Splitwise"
            className="flex justify-between items-center text-yellow-300 hover:underline mt-2"
          >
           <FaGithub size={20} /> View Code
          </a>
          <a
            href="https://github.com/Palritika1107/Splitwise"
            className="flex justify-between items-center text-yellow-300 hover:underline mt-2"
          >
           <FaLink size={20} /> Live Link
          </a>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="section flex-shrink-0 w-screen h-full flex flex-col gap-4 p-4 lg:grid lg:grid-cols-2 lg:grid-rows-[auto,1fr] lg:gap-6 items-center justify-center snap-center bg-[#E6358B]">
        {/* Top Row - Single Item Spanning Two Columns */}
        <div className="rounded-lg flex justify-center lg:col-span-2 ">
          <h1 className="bouncing-letters text-4xl md:text-5xl font-bold text-white mx-auto">
            <span>S</span>
            <span>k</span>
            <span>r</span>
            <span>i</span>
            <span>b</span>
            <span>b</span>
            <span>l</span>
            <span>e</span>
            <span>&nbsp;</span> 
            <span>C</span>
            <span>l</span>
            <span>o</span>
            <span>n</span>
            <span>e</span>
          </h1>
        </div>

        {/* Bottom Row - Two Equal Items */}
        {/* image */}
        <div className="bg-gray-800 rounded-lg">
          <img
            src={skribbleImg}
            alt="Skribble-icon"
            className="max-w-full block"
          />
        </div>
        {/* description */}
        <div className=" rounded-lg">
          <p className="text-white mt-4">
            Created a clone of the popular game{" "}
            <a
              href="https://skribbl.io/"
              className="text-yellow-300 hover:underline"
            >
              skribbl
            </a>{" "}
            using HTML, CSS, and React.
          </p>
          <div className="w-[150px] h-[40px] ">
          <a
            href="https://github.com/Palritika1107/skribble-clone"
            className="flex justify-between items-center text-yellow-300 hover:underline mt-2"
          >
           <FaGithub size={20} /> View Code
          </a>
          <a
            href="https://github.com/Palritika1107/skribble-clone"
            className="flex justify-between items-center text-yellow-300 hover:underline mt-2"
          >
           <FaLink size={20} /> Live Link
          </a>
          </div>
        </div>
      </div>

       {/* Second Section */}
       <div className="section flex-shrink-0 w-screen h-full flex flex-col items-center justify-center snap-center bg-[#E6358B]">
        <h1 className="bouncing-letters text-4xl md:text-5xl font-bold text-white">
          <span>T</span>
          <span>a</span>
          <span>s</span>
          <span>k</span>
          <span></span>
          <span>T</span>
          <span>r</span>
          <span>a</span>
          <span>c</span>
          <span>k</span>
          <span>e</span>
          <span>r</span>
        </h1>
        <p className="text-white mt-4">
          Designed and developed a dynamic web application for seamless daily
          task management, utilizing the React framework, HTML, CSS, and JS.
        </p>
        <a
          href="https://github.com/Palritika1107/Task-Tracker-App"
          className="text-blue-400 hover:underline mt-2"
        >
          View Code
        </a>
      </div>
    </section>
  );
};

export default Projects;
