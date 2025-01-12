'use client'

import { useEffect, useState } from "react";

const Video = () => {
    const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHovered(prev => !prev);
    }, 1000);
    
    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);
    return (
        <div>
            <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515510457176-39b9b5821a4a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="absolute inset-0 bg-[#241508] bg-opacity-50"></div>
        <div className="relative flex justify-center items-center h-full">
      <div className="w-full flex justify-center gap-10 items-center">
        <h2 className="text-5xl nav text-white text-center mt-10">
          Watch DavidBuzz
        </h2>
        
        {/* Play button with SVG and animation */}
        <a href="">
        <div
          className={`w-40 h-40 rounded-full bg-amber-800 flex justify-center items-center transform transition-transform duration-500 ease-in-out ${isHovered ? 'scale-110 rotate-45' : 'scale-100'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.25 5.25l13.5 7.5-13.5 7.5V5.25z"
            />
          </svg>
        </div>
        </a>
        
        
        <h2 className="text-5xl nav text-white text-center mt-10">
          Cooking Video
        </h2>
      </div>
    </div>
      </section>
        </div>
    );
};

export default Video;