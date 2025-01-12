import React from "react";

const Reserve = () => {
  return (
    <div>
      <section
        className="relative h-screen bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/cup-black-coffee-dark-concrete-background_993599-22850.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#241508] bg-opacity-50"></div>
        <div className="relative flex justify-center items-center h-full px-10">
          <form className=" w-full">
            <img
              src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/title_border.png"
              alt=""
              className="w-32 mx-auto"
            />
            <h2 className="text-4xl nav text-white text-center mt-10">
              Reserve Your Table
            </h2>
            <p className="text-amber-600 head text-4xl text-center font-normal mt-5">
              Book a table in advance to enjoy your time with friends & Family
            </p>
            <div className="flex justify-between gap-5 mt-10">
              <div className="">
                <label className="block mb-2 nav text-sm text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  id="field3"
                  className="w-72 h-14 px-4 py-2 border border-white bg-transparent text-amber-600 placeholder-amber-600"
                  placeholder="Ex- David Parvez"
                />
              </div>
              <div className="">
                <label className="block nav text-sm mb-2 text-white">
                  No. of Person
                </label>
                <input
                  type="text"
                  id="4"
                  className="w-72 h-14 px-4 py-2 border border-white bg-transparent text-amber-600 placeholder-amber-600"
                  placeholder="Enter field 3"
                />
              </div>
              <div className="">
                <label className="block mb-2 nav text-sm text-white">
                  Date
                </label>
                <input
                  type="date"
                  id="field3"
                  className="w-72 h-14 px-4 py-2 border border-white bg-transparent text-amber-600 placeholder-amber-600"
                  placeholder=""
                />
              </div>
              <div className="">
                <label className="block mb-2 nav text-sm text-white">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  className="w-72 h-14 px-2 py-2 border border-white bg-transparent text-amber-600 placeholder-amber-600"
                  placeholder="Select Your Time"
                />
              </div>
            </div>
            <button className="px-10 py-3 bg-amber-900 mt-5 hover:bg-orange-900 hover:text-blue-500 text-white text-sm">Reserve a Table</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Reserve;
