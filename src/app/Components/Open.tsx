const Open = () => {
  return (
    <div className="relative h-full bg-[#1d1515] bg-fixed bg-cover">
  <section
    className="bg-fixed h-screen flex justify-center items-center relative overflow-hidden"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1632898657953-f41f81bfa892?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    }}
  >
    {/* Content Inside the Square Border */}
    <div className="relative w-11/12 md:w-2/3 lg:w-2/5 h-4/5 mx-2 bg-amber-950 text-white shadow-lg p-4 z-10">
      {/* Top Border and Content Inside */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center">
        <div className="w-full border-t-2 border-white"></div>
      </div>

      {/* Top Border Image */}
      <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2">
        <img
          src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/Boarder.png"
          alt="Top Border"
          className="w-24 md:w-36"
        />
      </div>

      {/* Side Borders */}
      <div className="absolute top-0 left-0 h-full w-1 border-l-2 border-white"></div>
      <div className="absolute top-0 right-0 h-full w-1 border-r-2 border-white"></div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between items-center">
        <div className="w-full border-b-2 border-white"></div>
      </div>

      {/* Bottom Border Image */}
      <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2">
        <img
          src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/boarder1.png"
          alt="Bottom Border"
          className="w-24 md:w-36"
        />
      </div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-5">
        <h1 className="nav text-2xl md:text-4xl font-bold">Opening Hours</h1>
        {[
          { day: "Sunday", time: "08.00 - 23.00" },
          { day: "Monday", time: "08.00 - 23.00" },
          { day: "Tuesday", time: "08.00 - 23.00" },
          { day: "Wednesday", time: "08.00 - 23.00" },
          { day: "Thursday", time: "08.00 - 23.00" },
          { day: "Friday", time: "Close" },
          { day: "Saturday", time: "Close" },
        ].map(({ day, time }, idx) => (
          <div
            key={idx}
            className="flex items-center text-white w-full text-md md:text-2xl"
          >
            <span className="mx-5 md:mx-10 head font-semibold text-3xl">{day}</span>
            <span className="flex-grow border-b-2 border-white"></span>
            <span className="mx-5 md:mx-10 head font-semibold">{time}</span>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Grid Section Outside the Square Border */}
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mx-auto px-5 md:px-10 mt-20 gap-4">
    {[
      "https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/1.png",
      "https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/client_2_2.png",
      "https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/client_3_2.png",
      "https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/client_4_2.png",
      "https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/5.png",
    ].map((src, idx) => (
      <div
        key={idx}
        className="card-content flex items-center justify-center flex-col h-40 sm:h-52 border border-amber-900 relative group"
      >
        <img
          className="mb-2 w-20 sm:w-28 lg:w-36"
          src={src}
          alt={`Image ${idx + 1}`}
        />

        {/* Overlay with black opacity by default */}
        <div className="absolute inset-0 bg-[#1d1515] opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
      </div>
    ))}
  </div>
</div>


  );
};

export default Open;
