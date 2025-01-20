import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Socials = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-1000">
      <ul>
        <li className="w-[160px] h-[40px] flex justify-between items-center transition-all duration-300 bg-blue-500 p-4 hover:w-[180px]">
          <a
            href="https://www.linkedin.com/in/pal-ritika/"
            rel="noopener noreferrer"
            target="_blank"
            className="flex justify-between items-center w-full text-white"
          >
            Linkedin <FaLinkedin size={20} />
          </a>
        </li>
        <li className="w-[160px] h-[40px] flex justify-between items-center transition-all duration-300 bg-gray-500 p-4 hover:w-[180px]">
          <a
            href="https://github.com/Palritika1107"
            rel="noopener noreferrer"
            target="_blank"
            className="flex justify-between items-center w-full text-white"
          >
            Github <FaGithub size={20} />
          </a>
        </li>
        <li className="w-[160px] h-[40px] flex justify-between items-center transition-all duration-300 bg-green-300 p-4 hover:w-[180px]">
          <a
            href="mailto:palritika71@gmail.com"
            className="flex justify-between items-center w-full text-white"
          >
            Mail <HiOutlineMail size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
