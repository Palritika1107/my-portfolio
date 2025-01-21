import React from "react";
import "./index.css"; // You can add your CSS styles here

import Socials from "../Socials";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full contact-page pt-10 flex flex-col justify-center items-center  bg-teal-500"
    >
      {/* Content */}
      <div className="text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-yellow-300 mb-2 text-with-shadow">
          Contact Me
        </h2>
        <div className="h-1 bg-yellow-300 w-16 mx-auto mb-0"></div>
      </div>
      <div className="max-w-5xl h-[90vh] flex flex-col justify-center items-center px-4">
        <div className="max-w-lg mx-auto lg:w-[2000px]">
          <form
            className="bg-[#F2EDE4] p-8 rounded-lg shadow-2xl"
            method="POST"
            action="https://getform.io/f/aejjkwob"
          >
            <p className="text-gray-700 pt-2 pb-4">
              Submit the form below or shoot me an email at:{" "}
              <span className="font-bold">palritika71@gmail.com</span>
            </p>
            <input
              type="text"
              name="name"
              className="bg-white p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:border-transparent w-full"
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              className="bg-white p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:border-transparent w-full"
              placeholder="Your Email"
            />
            <textarea
              name="message"
              rows="6"
              className="bg-white p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:border-transparent w-full"
              placeholder="Your Message"
            ></textarea>
            <button
              className="bg-[#B08D57] text-[#F2EDE4] hover:bg-[#5A142A] px-6 py-3 rounded-md transition duration-300 w-full"
              type="submit"
            >
              Let's connect!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
