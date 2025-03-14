import React, { useState } from "react";
import "./index.css";

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaHome,
  FaSuitcase,
  FaPhone,
  FaPen,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineProject,
  AiOutlinePhone,
} from "react-icons/ai";
import { Link } from "react-scroll";
import { FaPerson } from "react-icons/fa6";
import Socials from "../Socials";

const Navbar = () => {
  const [mm, setMm] = useState(false);

  const handleClick = () => {
    setMm(!mm);
  };

  return (
    <div className="bg-gray-900 bg-opacity-75 p-4 fixed w-full h-[80px] flex justify-end px-1 pr-6 text-white z-10">
      {/* menu */}
      <div className="flex justify-between items-center">
        <ul className="hidden md:flex space-x-2">
          <li>
            <Link to="head" smooth={true}>
              <div className="flex items-center group transition-colors duration-300 hover:text-[#B08D57] cursor-pointer">
                <AiOutlineHome className="m-1 text-white text-xl transition-colors duration-300 group-hover:text-[#B08D57]" />{" "}
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true}>
              <div className="flex items-center group transition-colors duration-300 hover:text-[#B08D57] cursor-pointer">
                <AiOutlineUser className="m-1 text-white text-xl transition-colors duration-300 group-hover:text-[#B08D57]" />{" "}
                About
              </div>
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true}>
              <div className="flex items-center transition-colors group duration-300 hover:text-[#B08D57] cursor-pointer">
                <AiOutlineBook className="m-1 text-white text-xl transition-colors duration-300 group-hover:text-[#B08D57]" />{" "}
                Experience
              </div>
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true}>
              <div className="flex items-center transition-colors group duration-300 hover:text-[#B08D57] cursor-pointer">
                <AiOutlineProject className="m-1 text-white text-xl transition-colors duration-300 group-hover:text-[#B08D57]" />{" "}
                Projects
              </div>
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true}>
              <div className="flex items-center transition-colors group duration-300 hover:text-[#B08D57] cursor-pointer">
                <AiOutlinePhone className="m-1 text-white text-xl transition-colors duration-300 group-hover:text-[#B08D57]" />{" "}
                Contact
              </div>
            </Link>
          </li>
        </ul>
      </div>

      {/* hamburger */}
      <div className="md:hidden z-10 cursor-pointer" onClick={handleClick}>
        {mm ? <FaTimes /> : <FaBars />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          mm
            ? "fixed top-10 right-0 w-[80vw] md:w-[40vw] h-[60vh] md:h-[40vh] bg-gray-900 bg-opacity-75 flex flex-col justify-start items-center shadow-lg transition-all duration-300 overflow-auto"
            : "hidden"
        }
      >
        <li className="py-4 text-xl md:text-2xl transition-colors duration-300 hover:text-[#B08D57] cursor-pointer">
          <Link to="home" smooth={true} onClick={handleClick}>
            <div className="flex">
              <AiOutlineHome className="m-1" /> Home
            </div>
          </Link>
        </li>
        <li className="py-4 text-xl md:text-2xl transition-colors duration-300 hover:text-[#B08D57] cursor-pointer">
          <Link to="about" smooth={true} onClick={handleClick}>
            <div className="flex">
              <AiOutlineUser className="m-1" /> About
            </div>
          </Link>
        </li>
        <li className="py-4 text-xl md:text-2xl transition-colors duration-300 hover:text-[#B08D57] cursor-pointer">
          <Link to="experience" smooth={true} onClick={handleClick}>
            <div className="flex">
              <AiOutlineBook className="m-1" /> Experience
            </div>
          </Link>
        </li>
        <li className="py-4 text-xl md:text-2xl transition-colors duration-300 hover:text-[#B08D57] cursor-pointer">
          <Link to="projects" smooth={true} onClick={handleClick}>
            <div className="flex">
              <AiOutlineProject className="m-1" /> Projects
            </div>
          </Link>
        </li>
        <li className="py-4 text-xl md:text-2xl transition-colors duration-300 hover:text-[#B08D57] cursor-pointer">
          <Link to="contact" smooth={true} onClick={handleClick}>
            <div className="flex">
              <AiOutlinePhone className="m-1" /> Contact
            </div>
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <Socials />
    </div>
  );
};

export default Navbar;
