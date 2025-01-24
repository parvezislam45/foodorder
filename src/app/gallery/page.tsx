"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Drinks", "Steak", "Dessert", "Seafood"];
const images = {
  All: [
    "/images/drinks1.jpg",
    "/images/drinks2.jpg",
    "/images/drinks3.jpg",
    "/images/drinks4.jpg",
    "/images/steak1.jpg",
    "/images/steak2.jpg",
    "/images/steak3.jpg",
    "/images/dessert1.jpg",
    "/images/dessert2.jpg",
    "/images/dessert3.jpg",
    "/images/dessert4.jpg",
    "/images/seafood1.jpg",
    "/images/seafood2.jpg",
    "/images/seafood3.jpg",
  ],
  Drinks: ["/images/drinks1.jpg", "/images/drinks2.jpg", "/images/drinks3.jpg", "/images/drinks4.jpg"],
  Steak: ["/images/steak1.jpg", "/images/steak2.jpg", "/images/steak3.jpg"],
  Dessert: ["/images/dessert1.jpg", "/images/dessert2.jpg", "/images/dessert3.jpg", "/images/dessert4.jpg"],
  Seafood: ["/images/seafood1.jpg", "/images/seafood2.jpg", "/images/seafood3.jpg"],
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  return (
    <div className="relative bg-cover bg-center h-auto py-16 bg-[#1d1515]">
      {/* Video Background */}
      <div className="relative bg-cover bg-center h-[600px] flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2021/04/14/71119-537976857_tiny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <div className="relative z-10 flex items-center justify-center">
          <div className="relative w-[350px] h-32 bg-transparent border-2 border-amber-500 shadow-lg flex items-center justify-center">
            <p className="text-center text-5xl font-bold text-amber-600">
              Gallery
            </p>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex justify-center space-x-6 mt-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`text-lg font-semibold px-4 py-2 rounded-md transition ${
              selectedCategory === category
                ? "text-amber-600"
                : "text-white hover:text-amber-600"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="mt-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {images[selectedCategory].map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1, // Stagger animation for each image
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
