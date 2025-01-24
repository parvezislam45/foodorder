import React from 'react';

const Try = () => {
    return (
        <div>
           <div className="relative bg-cover bg-center h-[600px] flex items-center justify-center">
        {/* Background Video */}
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative w-[550px] h-32 bg-transparent border-2 border-amber-500 shadow-lg flex items-center justify-center">
            <img
              src="https://i.postimg.cc/cLgCqV4p/Screenshot-2025-01-17-190615.png"
              alt="Left Image"
              className="absolute hidden sm:block top-0 right-[-160px] transform translate-y-3/4 opacity-90"
              style={{
                width: "200px",
                height: "80px",
                backgroundColor: "transparent",
              }}
            />

            <img
              src="https://i.postimg.cc/cLgCqV4p/Screenshot-2025-01-17-190615.png"
              alt="Right Image"
              className="absolute hidden sm:block bottom-0 left-[-160px] transform -translate-y-3/4 opacity-90"
              style={{
                width: "200px",
                height: "80px",
                backgroundColor: "transparent",
              }}
            />

            {/* Text Content */}
            <p className="text-center text-4xl sm:text-6xl font-bold text-amber-600">
              About Us
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-[#1d1515] py-20 px-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 text-left mb-10 md:mb-0">
            <h1 className="text-5xl about font-bold text-amber-600 leading-tight">
              We have Started Our Journey to serve you from 1975.
            </h1>
          </div>

          <div className="md:w-1/2 text-justify">
            <p className="text-md text-white leading-relaxed nav">
              For over four decades, we have embarked on a remarkable journey
              dedicated to serving our valued customers. Since our establishment
              in 1975, our unwavering commitment to excellence has guided us
              every step of the way. Today, we stand proud as a leading provider
              in our industry, ready to meet your needs with unparalleled
              expertise and passion.
            </p>
            <p className="mt-4 text-md text-white leading-relaxed nav">
              From our humble beginnings, we recognized the importance of
              building strong relationships with our customers. We understood
              that trust and loyalty were the pillars upon which successful
              businesses are built.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1d1515] py-10 px-5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 h-full">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1727387562395-6be53e861975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
              alt="Gallery Left"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col gap-5">
            <img
              src="https://images.unsplash.com/photo-1651978595428-b79169f223a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8fDB8fHww"
              alt="Gallery Center Top"
              className="w-full h-[calc(50%-10px)] object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1625861910621-e9385ba1d993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8fDB8fHww"
              alt="Gallery Center Bottom"
              className="w-full h-[calc(50%-10px)] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col gap-5">
            <img
              src="https://images.unsplash.com/photo-1651981101695-219fa3653bf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8fDB8fHww"
              alt="Gallery Right Top"
              className="w-full h-[calc(50%-10px)] object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1661600135596-dcb910b05340?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8fDB8fHww"
              alt="Gallery Right Bottom"
              className="w-full h-[calc(50%-10px)] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div
        className="relative flex justify-center items-start
    bg-[#1d1515] bg-fixed bg-cove"
      >
        <div>
          <img
            className="mx-auto mt-10 bg-fixed bg-cover"
            src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/grillman.png"
            alt="Background Image"
          />
          <h1
            className="absolute inset-0 flex justify-center items-center text-6xl font-normal text-white nav mt-28 sea"
            style={{ letterSpacing: "0.1em" }}
          >
            Testing Restart
          </h1>
        </div>
      </div>
      <section className="relative bg-[#1d1515] bg-fixed bg-cover">
        <div className="relative flex justify-center items-start">
          <div>
            <img
              className="mx-auto mt-10 bg-fixed bg-cover"
              src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/title_back.png"
              alt="Background Image"
            />
            <h1 className="absolute inset-0 flex justify-center items-center font-bold text-3xl text-white nav mt-28">
              Tastydine Timeline
            </h1>
            <h1 className="absolute inset-0 flex justify-center items-center text-4xl text-amber-600 nav mt-56 head">
              Learn our history see our glorious journey as a restaurant
            </h1>
          </div>
        </div>
        <section
          className="relative bg-fixed bg-cover bg-center mt-5"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1692197275931-0793e08efcc1?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div className="bg-[#1d1515] py-10">
            <div className="container mx-auto relative">
              {/* Central Vertical Line */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-400 transform -translate-x-1/2"></div>

              {/* Timeline Item 1 */}
              <div className="relative flex items-center justify-start mt-2">
                {/* Horizontal Connecting Line */}
                <div className="absolute h-0.5 bg-gray-100 right-1/2 transform -translate-x-3/5 w-96"></div>

                {/* Card */}
                <div className="bg-transparent p-5 w-80 ml-5 relative">
                  <p className="text-xl head font-semibold text-amber-700">
                    1975 - 1976
                  </p>
                  <h3 className="text-2xl font-bold nav text-white mb-2">
                    Idea Generation
                  </h3>
                  <p className="text-md nav text-white">
                    Brainstorming and conceptualizing the restaurant unique
                    concept and cuisine offerings.
                  </p>
                </div>

                <div className="absolute h-3 w-3 bg-amber-700 rounded-full left-1/2 transform -translate-x-1/2"></div>
              </div>

              <div className="relative flex items-center justify-end">
                <div className="absolute h-0.5 bg-gray-300 left-1/2 transform translate-x-3/5 w-96"></div>

                <div className="bg-transparent p-5 w-80 ml-5 relative">
                  <p className="text-xl head font-semibold text-amber-700">
                    1976 - 1977
                  </p>
                  <h3 className="text-2xl font-bold nav text-white mb-2">
                    Introduction
                  </h3>
                  <p className="text-md nav text-white">
                    Developing a comprehensive business plan and conducting
                    market research to identify target customers and
                    competitors.
                  </p>
                </div>

                <div className="absolute h-3 w-3 bg-amber-700 rounded-full right-1/2 transform translate-x-1/2"></div>
              </div>

              <div className="relative flex items-center justify-start">
                {/* Horizontal Connecting Line */}
                <div className="absolute h-0.5 bg-gray-300 right-1/2 transform -translate-x-3/5 w-96"></div>

                {/* Card */}
                <div className="bg-transparent p-5 w-80 ml-5 relative">
                  <p className="text-xl head font-semibold text-amber-700">
                    1979 - 1980
                  </p>
                  <h3 className="text-2xl font-bold nav text-white mb-2">
                    Investment
                  </h3>
                  <p className="text-md nav text-white">
                    Seeking potential investors and pitching the restaurant
                    concept to secure necessary funding for the venture.
                  </p>
                </div>

                {/* Marker */}
                <div className="absolute h-3 w-3 bg-amber-600 rounded-full left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div className="relative flex items-center justify-end">
                {/* Horizontal Connecting Line */}
                <div className="absolute h-0.5 bg-gray-300 left-1/2 transform translate-x-3/5 w-96"></div>

                {/* Card */}
                <div className="bg-transparent p-5 w-80 ml-5 relative">
                  <p className="text-xl head font-semibold text-amber-700">
                    1981 - 1982
                  </p>
                  <h3 className="text-2xl font-bold nav text-white mb-2">
                    Fund Collection
                  </h3>
                  <p className="text-md nav text-white">
                    Engaging in fundraising activities such as presenting the
                    business plan to investors, banks, or crowdfunding
                    platforms.
                  </p>
                </div>

                {/* Marker */}
                <div className="absolute h-3 w-3 bg-amber-600 rounded-full right-1/2 transform translate-x-1/2"></div>
              </div>
              <div className="relative flex items-center justify-start">
                {/* Horizontal Connecting Line */}
                <div className="absolute h-0.5 bg-gray-300 right-1/2 transform -translate-x-3/5 w-96"></div>

                {/* Card */}
                <div className="bg-transparent p-5 w-80 ml-5 relative">
                  <p className="text-xl head font-semibold text-amber-700">
                    1983 - 1984
                  </p>
                  <h3 className="text-2xl font-bold nav text-white mb-2">
                    Construction
                  </h3>
                  <p className="text-md nav text-white">
                    Acquiring the location, obtaining permits, and overseeing
                    the construction and interior design of the restaurant
                    space.
                  </p>
                </div>

                {/* Marker */}
                <div className="absolute h-3 w-3 bg-amber-600 rounded-full left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div className="relative flex items-center justify-end">
                {/* Horizontal Connecting Line */}
                <div className="absolute h-0.5 bg-gray-300 left-1/2 transform translate-x-3/5 w-96"></div>

                {/* Card */}
                <div className="bg-transparent p-5 w-80 ml-5 relative">
                  <p className="text-xl head font-semibold text-amber-700">
                    1986 - 1987
                  </p>
                  <h3 className="text-2xl font-bold nav text-white mb-2">
                    Operation
                  </h3>
                  <p className="text-md nav text-white">
                    Hiring staff, sourcing ingredients, conducting a soft
                    opening, and officially launching the restaurant for daily
                    operations.
                  </p>
                </div>

                {/* Marker */}
                <div className="absolute h-3 w-3 bg-amber-600 rounded-full right-1/2 transform translate-x-1/2"></div>
              </div>

              {/* Repeat for other items... */}
            </div>
          </div>
        </section>
      </section>

      <div className="bg-[#1d1515] py-10 px-5">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#1d1515] shadow-lg rounded-lg p-5 w-full mt-5">
            <img
              className="mx-auto mb-7"
              src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/icon1.png"
              alt=""
            />
            <h2 className="text-xl nav font-semibold text-white text-center mb-4">
              Finest Chef
            </h2>
            <p className="text-white text-md nav text-center">
              Look no further than the Finest Chef, where culinary excellence
              meets unparalleled passion.
            </p>
          </div>
          <div className="bg-[#1d1515] shadow-lg rounded-lg p-5 w-full mt-5">
            <img
              className="mx-auto mb-7"
              src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/icon2.png"
              alt=""
            />
            <h2 className="text-xl nav font-semibold text-white text-center mb-4">
              Beautiful Ambience
            </h2>
            <p className="text-white text-md nav text-center">
              Prepare to be transported to a realm of elegance, tranquility, and
              sensory deligh
            </p>
          </div>
          <div className="bg-[#1d1515] shadow-lg rounded-lg p-5 w-full mt-5">
            <img
              className="mx-auto mb-7"
              src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/icon3.png"
              alt=""
            />
            <h2 className="text-xl nav font-semibold text-white text-center mb-4">
              Safe Food Takeout
            </h2>
            <p className="text-white text-md nav text-center">
              Our commitment to food safety starts from the moment your order is
              placed.
            </p>
          </div>
          <div className="bg-[#1d1515] shadow-lg rounded-lg p-5 w-full mt-5">
            <img
              className="mx-auto mb-7"
              src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/icon4.png"
              alt=""
            />
            <h2 className="text-xl nav font-semibold text-white text-center mb-4">
              Famous Cousine
            </h2>
            <p className="text-white text-md nav text-center">
              Immerse yourself in an atmosphere that is both inviting and
              elegant and luxurious.
            </p>
          </div>
        </div>
      </div>

      <div
        className="relative flex justify-center items-start
    bg-[#1d1515] bg-fixed bg-cove"
      >
        <div>
          <img
            className="mx-auto mt-10 bg-fixed bg-cover"
            src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/grillman.png"
            alt="Background Image"
          />
          <h1
            className="absolute inset-0 flex justify-center items-center text-6xl font-normal text-white nav mt-28 sea"
            style={{ letterSpacing: "0.1em" }}
          >
            Happy Clients
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-center bg-[#1d1515]">
        <div className="relative w-full max-w-5xl px-4 overflow-hidden">
          {/* Slider Container */}
          <div
            className="flex transition-transform duration-700 ease-linear"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-full max-w-5xl h-96 bg-[#2e2323] mt-20 p-6 text-center"
              >
                <div>
                  <img
                    className="mx-auto h-28 w-28 mt-5 rounded-full"
                    src={testimonial.pic}
                    alt=""
                  />
                  <div className="flex justify-center items-center mt-5 gap-2">
                    {/* Render Star Icons */}
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-amber-700"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white nav text-md w-1/2 text-center mx-auto mt-3">
                    {testimonial.quote}
                  </p>
                  <p className="text-lg font-semibold text-amber-600 mt-3">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-white italic mb-4">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Previous Button */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 mt-14">
            <div className="flex items-center justify-center w-14 h-14 border-2 border-white rounded-full">
              <button className="text-white" onClick={handlePrevious}>
                <GrFormPrevious className="h-8 w-8" />
              </button>
            </div>
          </div>

          {/* Next Button */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 mt-14">
            <div className="flex items-center justify-center w-14 h-14 border-2 border-white rounded-full">
              <button className="text-white" onClick={handleNext}>
                <MdNavigateNext className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </div> 
        </div>
    );
};

export default Try;