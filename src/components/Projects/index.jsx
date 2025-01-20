import React from 'react'

const Projects = () => {
  return (
    <section className="overflow-x-auto h-screen  snap-x snap-mandatory">
  {/* First Section */}
  <div className="section w-full h-full flex flex-col items-center justify-center snap-start bg-[#E6358B]">
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

  {/* Second Section */}
  <div className="section w-full h-full flex flex-col items-center justify-center snap-start bg-[#E6358B]">
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
      Designed and developed a dynamic web application for seamless daily task management, utilizing the React framework, HTML, CSS, and JS.
    </p>
    <a href="https://github.com/Palritika1107/Task-Tracker-App" className="text-blue-400 hover:underline mt-2">View Code</a>
  </div>

  {/* Third Section */}
  <div className="section w-full h-full flex flex-col items-center justify-center snap-start bg-[#E6358B]">
    <h1 className="bouncing-letters text-4xl md:text-5xl font-bold text-white">
      <span>B</span>
      <span>l</span>
      <span>o</span>
      <span>g</span>
      <span></span>
      <span>A</span>
      <span>p</span>
      <span>p</span>
    </h1>
    <p className="text-white mt-4">
      Created a website for managing blogs, allowing users to add, delete, and edit blogs. Built with React framework, HTML, CSS, and JS.
    </p>
    <a href="https://github.com/Palritika1107/My-Blog-App" className="text-blue-400 hover:underline mt-2">View Code</a>
  </div>

  {/* Fourth Section */}
  <div className="section w-full h-full flex flex-col items-center justify-center snap-start bg-[#E6358B]">
    <h1 className="bouncing-letters text-4xl md:text-5xl font-bold text-white">
      <span>S</span>
      <span>k</span>
      <span>r</span>
      <span>i</span>
      <span>b</span>
      <span>b</span>
      <span>l</span>
      <span>e</span>
      <span></span>
      <span>C</span>
      <span>l</span>
      <span>o</span>
      <span>n</span>
      <span>e</span>
    </h1>
    <p className="text-white mt-4">
      Created a clone of the popular game 
      <a href="https://skribbl.io/" className="text-blue-400 hover:underline"> skribbl </a> 
       using HTML, CSS, and React.
    </p>
    <a href="https://github.com/Palritika1107/skribble-clone" className="text-blue-400 hover:underline mt-2">View Code</a>
  </div>

</section>


  )
}

export default Projects