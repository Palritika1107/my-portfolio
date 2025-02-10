
import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { AiOutlineEnvironment } from 'react-icons/ai';
import profilePhoto from '../../assets/imgs/profile-photo.jpg'


import Socials from "../Socials";

const Home = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1cmtSnIWdxElH7lPLjGnFAuZdChxShWAo/view?usp=sharing';

    const jobTitles = ['Software Engineer','Frontend Developer'];
    const location = 'Bengaluru,Karnataka';

    const [titleIndex, setTitleIndex] = useState(0);
    const [currentTitle, setCurrentTitle] = useState('');
    const [typewriterIndex, setTypewriterIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const titleInterval = setInterval(() => {
            setCurrentTitle(jobTitles[titleIndex].substring(0, typewriterIndex));
            if (isTyping) {
                setTypewriterIndex(prevIndex => prevIndex + 1);
                if (typewriterIndex > jobTitles[titleIndex].length) {
                    setIsTyping(false);
                    setTimeout(() => {
                        setIsTyping(true);
                        setTypewriterIndex(0);
                        setTitleIndex(prevIndex => (prevIndex + 1) % jobTitles.length);
                    }, 1000);
                }
            }
        }, 150);

        return () => clearInterval(titleInterval);
    }, [titleIndex, typewriterIndex, jobTitles, isTyping]);

    const handleResume = () => {
        window.open(resumeUrl, '_blank');
    };

    const [currentColor, setCurrentColor] = useState('#800020'); // Initial burgundy color

    useEffect(() => {
        const interval = setInterval(changeColor, 2000); // Change color every 2 seconds

        return () => clearInterval(interval);
    }, []);

    const changeColor = () => {
        // Generate a new color shade in the burgundy range
        const newColor = generateNewColor();
        setCurrentColor(newColor);
    };

    const generateNewColor = () => {
        // Generate a random shade between #800020 and #B00030 (burgundy hues)
        const minShade = 50;
        const maxShade = 150;
        const shade = Math.floor(Math.random() * (maxShade - minShade + 1)) + minShade;
        return `#${shade.toString(16).padStart(2, '0')}0000`;
    };


    return (
        <div name="home" className="w-full bg-teal-500 min-h-screen">
            <div className="max-w-screen-xl mx-auto px-6 md:ml-30 md:px-16 flex flex-col md:flex-row h-screen items-center justify-center pt-40 lg:pt-0">
                <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left lg:ml-20">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight name-element mb-2 lg:zoom-text" style={{ color: currentColor }}>
                        Hello, I'm <span className="text-yellow-300">Ritika</span>
                    </h1>
                    <div className="h-10">
                    <h2 className="text-xl md:text-3xl font-bold text-yellow-300 mb-4">{currentTitle}</h2>
                    </div>
                    <p className="text-gray-700 max-w-md md:max-w-lg text-sm md:text-base">
                        Frontend Development/Full Stack Development 
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4 mt-20 lg:mt-10">
                        <button onClick={handleResume} className="text-yellow-300 group border-yellow-300 border-2 px-4 py-2 md:px-6 md:py-3 my-2 md:my-0 flex items-center hover:bg-yellow-300 hover:border-yellow-300 hover:text-teal-500 text-sm md:text-base"
                                        >
                            Download Resume
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight className="ml-2"/>
                            </span>
                        </button>
                                        <div className="flex space-x-4 lg:hidden">
                                            <a href="https://github.com/Palritika1107" target="_blank" rel="noopener noreferrer">
                                                <FaGithub className="text-[#B08D57] hover:text-[#5A142A] text-lg"/>
                                            </a>
                                            <a href="https://www.linkedin.com/in/pal-ritika/" target="_blank"
                                               rel="noopener noreferrer">
                                                <FaLinkedin className="text-[#B08D57] hover:text-[#5A142A] text-lg"/>
                                            </a>
                                            <a href="mailto:palritika71@gmail.com">
                                                <FaEnvelope className="text-[#B08D57] hover:text-[#5A142A] text-lg"/>
                                            </a>
                                        </div>
                    </div>
                    {/* Social media links */}
                    
                </div>
        <div className="md:w-1/2 md:pl-6 max-w-[70%] animated slideInRight photo-class flex flex-col justify-center items-center">

                <img
              src={profilePhoto}
              alt="Profile"
              className="rounded-full shadow-lg md:w-[70%] md:max-w-[350px] mx-auto md:mx-0 mb-8 md:mb-0"
              style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
            />

                    
                    
                                         <p className="text-gray-700 my-2 text-sm md:text-lg md:text-base">
                                             <AiOutlineEnvironment className="inline text-yellow-300 mr-1"/> {location}
                                         </p>
                                    
        </div>
    </div>
</div>
    );
}

export default Home;