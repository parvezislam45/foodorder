'use client'

import { useEffect, useState } from "react";

const slides = [
    { heading: "Exotic And Delicious", buttonText: "Learn More", buttonLink: "#", bgImage: "https://images.unsplash.com/photo-1447078806655-40579c2520d6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { heading: "Exotic And Delicious", buttonText: "Discover", buttonLink: "#", bgImage: "https://images.unsplash.com/photo-1674649203068-e9fd9c4a5620?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { heading: "Exotic And Delicious", buttonText: "Get Started", buttonLink: "#", bgImage: "https://images.unsplash.com/photo-1723744910614-c0b214a89279?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];
const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };
    return (
        <div>
           <div className="relative w-full h-[500px] overflow-hidden flex">
      {/* Left Side Section */}
      <div className="w-[100px] bg-[#1d1515] flex flex-col items-center justify-center relative z-10">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="mb-4 bg-transparent hover:text-red-700 text-white w-10 h-10 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7-7-7 7" />
        </svg>
      </button>

      {/* Number Buttons */}
      <button
        onClick={() => setCurrentIndex(0)}
        className={`bg-transparent hover:text-red-700 head text-2xl text-white w-10 h-10 flex items-center mt-8 justify-center ${
          currentIndex === 0 ? "bg-blue-500" : ""
        }`}
      >
        01
      </button>
      <button
        onClick={() => setCurrentIndex(1)}
        className={`bg-transparent hover:text-red-700 head text-2xl text-white w-10 h-10 flex items-center justify-center ${
          currentIndex === 1 ? "bg-blue-500" : ""
        }`}
      >
        02
      </button>
      <button
        onClick={() => setCurrentIndex(2)}
        className={`bg-transparent hover:text-red-700 head text-2xl text-white w-10 h-10 flex items-center justify-center ${
          currentIndex === 2 ? "bg-blue-500" : ""
        }`}
      >
        03
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="bg-transparent mt-8 text-white w-10 h-10 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 hover:text-red-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 10l-7 7-7-7" />
        </svg>
      </button>
    </div>

      {/* Slider Section */}
      <div className="relative flex-1 h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${slide.bgImage})` }}
            className={`absolute inset-0 flex flex-col items-center justify-center bg-cover bg-center transition-opacity duration-1000 ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <h1
              className={`head text-8xl text-white transition-transform duration-1000 ease-linear ${
                currentIndex === index ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {slide.heading}
            </h1>
            <a
              href={slide.buttonLink}
              className={`mt-4 px-6 py-2 bg-blue-500 text-white rounded-full transition-transform duration-1000 ease-linear ${
                currentIndex === index ? "translate-y-0 opacity-100" : "translate-y-[200%] opacity-0"
              }`}
            >
              {slide.buttonText}
            </a>
          </div>
        ))}

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;