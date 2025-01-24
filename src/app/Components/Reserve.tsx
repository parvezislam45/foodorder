import React from "react";

const Reserve = () => {
  return (
    <div>
      <section
  className="relative h-screen bg-fixed bg-cover bg-center"
  style={{
    backgroundImage: `url('https://img.freepik.com/free-photo/black-pasta-fork-top-view_23-2148469862.jpg?ga=GA1.1.1407506645.1737034562&semt=ais_hybrid')`,
  }}
>
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-[#241508] bg-opacity-50"></div>

  {/* Content */}
  <div className="relative flex justify-center items-center h-full px-6 sm:px-16">
    <form className="w-full bg-opacity-0">
      {/* Form Header */}
      <img
        src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/title_border.png"
        alt=""
        className="w-24 sm:w-32 mx-auto"
      />
      <h2 className="text-2xl sm:text-4xl nav text-white text-center mt-6 sm:mt-10">
        Reserve Your Table
      </h2>
      <p className="text-amber-600 head text-lg sm:text-2xl font-normal text-center mt-4 sm:mt-5">
        Book a table in advance to enjoy your time with friends & family
      </p>

      {/* Form Fields */}
      <div className="flex flex-wrap justify-between mt-8 sm:mt-16 gap-6">
        {/* Name Input */}
        <div className="w-full sm:flex-1 sm:max-w-sm">
          <label className="block mb-2 nav text-sm text-white">Your Name</label>
          <input
            type="text"
            id="field3"
            className="w-full h-12 sm:h-16 px-4 py-2 border border-white bg-transparent text-amber-600 placeholder-amber-600 focus:outline-none focus:ring focus:ring-orange-600"
            placeholder="Ex- David Parvez"
          />
        </div>

        {/* Number of Persons Input */}
        <div className="w-full sm:flex-1 sm:max-w-sm">
          <label className="block mb-2 nav text-sm text-white">
            No. of Persons
          </label>
          <input
            type="number"
            id="field4"
            className="w-full h-12 sm:h-16 px-4 py-2 border border-white bg-transparent text-amber-600 placeholder-amber-600 focus:outline-none focus:ring focus:ring-orange-600"
            placeholder="Enter number of persons"
          />
        </div>

        {/* Date Input */}
        <div className="w-full sm:flex-1 sm:max-w-sm">
          <label className="block mb-2 nav text-sm text-white">Date</label>
          <input
            type="date"
            id="fieldDate"
            className="w-full h-12 sm:h-16 px-4 py-2 border border-white bg-transparent text-amber-600 focus:outline-none focus:ring focus:ring-orange-600"
          />
        </div>

        {/* Time Input */}
        <div className="w-full sm:flex-1 sm:max-w-sm">
          <label className="block mb-2 nav text-sm text-white">Time</label>
          <input
            type="time"
            id="time"
            className="w-full h-12 sm:h-16 px-4 py-2 border border-white bg-transparent text-amber-600 focus:outline-none focus:ring focus:ring-orange-600"
            placeholder="Select Your Time"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-8 sm:mt-10">
        <button className="px-6 py-3 sm:px-10 sm:py-4 bg-amber-900 hover:bg-orange-900 hover:text-blue-500 text-white text-sm sm:text-base font-bold nav rounded-lg">
          Reserve a Table
        </button>
      </div>
    </form>
  </div>
</section>

    </div>
  );
};

export default Reserve;
