"use client";

import { useEffect, useRef, useState } from "react";

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number | null>(null);

  const cards = [
    {
      id: 1,
      content: "Our New Peggeti Recipe",
      short:
        "Food is a substance that provides energy and nutritional support to an organism. It can be raw, processed, or formulated",
      date: "26",
      month:'March',
      time:'18',
      image:
        "https://images.unsplash.com/photo-1522906456132-bac22adad34e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      content: "Let's Have a Drink Tonight",
      short:
        "Food is mainly made up of water, lipids, proteins, and carbohydrates. It can also contain minerals and organic substances like vitamins",
      date: "17",
      month:'june',
      time:'07',
      image:
        "https://images.unsplash.com/photo-1608807469710-9b88e9f86b7a?q=80&w=1343&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      content: "Chefs With Crazy Knife",
      short:
        "The body uses food to sustain growth, vital processes, and to provide energy. The body intestines convert",
      date: "05",
      month:'August',
      time:'10',
      image:
        "https://images.unsplash.com/photo-1637334482971-5b340a9c8f90?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      content: "Our New Peggeti Recipe",
      short:
        "Food is a substance that provides energy and nutritional support to an organism. It can be raw, processed, or formulated",
      date: "11",
      month:'February',
      time:'06',
      image:
        "https://plus.unsplash.com/premium_photo-1678897750441-b7fe348b14a5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      content: "How Sitting Arrangement Should",
      short:
        "Plants are the primary food source, using photosynthesis to convert solar energy into food. ",
      date: "28",
      month:'May',
      time:'18',
      image:
        "https://images.unsplash.com/photo-1629471722874-13d4208d62ea?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      content: "Let's Have a Drink Tonight",
      short:
        "Food is mainly made up of water, lipids, proteins, and carbohydrates. It can also contain minerals and organic substances like vitamins",
      date: "17",
      month:'November',
      time:'17',
      image:
        "https://images.unsplash.com/photo-1665145323730-2d1e5f77426c?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      content: "Our New Peggeti Recipe",
      short:
        "Food is a substance that provides energy and nutritional support to an organism. It can be raw, processed, or formulated",
      date: "11",
      month:'October',
      time:'11',
      image: "https://images.unsplash.com/photo-1562436261-5c8371206f91?q=80&w=1341&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const handleSwipe = (direction: "left" | "right") => {
    setCurrentIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === cards.length - 3 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? cards.length - 3 : prevIndex - 1;
      }
    });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    startXRef.current = e.clientX;
  };

  const onMouseMove = (e: MouseEvent) => {
    if (startXRef.current !== null) {
      const diffX = startXRef.current - e.clientX;
      if (diffX > 50) {
        handleSwipe("left");
        startXRef.current = null; // Reset to prevent multiple swipes in one move
      } else if (diffX < -50) {
        handleSwipe("right");
        startXRef.current = null;
      }
    }
  };

  const onMouseUp = () => {
    startXRef.current = null;
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.addEventListener("mousemove", onMouseMove);
      sliderRef.current.addEventListener("mouseup", onMouseUp);
    }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("mousemove", onMouseMove);
        sliderRef.current.removeEventListener("mouseup", onMouseUp);
      }
    };
  }, []);

  return (
    <div>
      <section className="relative bg-[#1d1515] text-white py-16 overflow-hidden">
        <div className="relative flex justify-center items-start">
          <div>
            <img
              className="mx-auto bg-fixed bg-cover"
              src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/title_back.png"
              alt="Background Image"
            />
            <h1 className="absolute inset-0 flex justify-center items-center text-3xl font-semibold text-white nav mt-16">
              Latest Food Blog
            </h1>
            <h1 className="absolute inset-0 flex justify-center items-center text-4xl text-amber-600 nav mt-36 head">
              Have a glimps of some delicacies of David Parvez buzz
            </h1>
          </div>
        </div>
        <div
          className="overflow-hidden relative"
          ref={sliderRef}
          onMouseDown={onMouseDown}
        >
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-1/3 flex-shrink-0 flex-grow-0 px-4"
              >
                <div className="rounded overflow-hidden shadow-lg">
                  <a href="#"></a>
                  <div className="relative">
                    <a href="#">
                      <img
                        className="w-full h-80"
                        src={card.image}
                        alt="Sunset in the mountains"
                      />
                      <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                    </a>
                    <a href="#!">
                      <div className="absolute bottom-0 left-0 bg-amber-700 px-4 py-2 text-white hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out head text-xl">
                        Photos
                      </div>
                    </a>

                    <a href="!#">
                      <div className="text-sm absolute top-0 right-0 bg-amber-700 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        <span className="font-bold head">{card.date}</span>
                        <small className="nav">{card.month}</small>
                      </div>
                    </a>
                  </div>
                  <div className="px-6 py-4">
                    <a
                      href="#"
                      className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out text-amber-600 nav"
                    >
                      {card.content}
                    </a>
                    <p className="text-white text-xs nav mt-4">
                      {card.short}
                    </p>
                  </div>
                  <div className="px-6 py-4 flex flex-row items-center">
                    <span className="py-1 text-sm font-regular text-white mr-1 flex flex-row items-center">
                    <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" fill="white"></path></svg>
                      <span className="ml-3 text-white head font-bold">{card.time} mins ago</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
