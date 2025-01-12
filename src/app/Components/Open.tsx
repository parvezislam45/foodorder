const Open = () => {
  return (
    <div className="relative h-full bg-[#1d1515] bg-fixed bg-cover">
      <section
        className="bg-fixed h-screen flex justify-center items-center relative overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515510457176-39b9b5821a4a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        {/* Content Inside the Square Border */}
        <div className="relative w-2/5 h-4/5 mx-2 bg-amber-950 text-white shadow-lg p-4 z-10">
          {/* Top Border and Content Inside */}
          <div className="absolute top-0 left-0 w-full flex justify-between items-center">
            <div className="w-full border-t-2 border-white"></div>
          </div>

          {/* Top Border Image */}
          <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2">
            <img
              src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/Boarder.png"
              alt="Top Border"
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
            />
          </div>

          {/* Centered Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-5">
            <h1 className="nav text-3xl font-bold">Opening Hours</h1>
            <div className="flex items-center text-white w-full">
              <span className="mx-10 head text-xl font-semibold">Sunday</span>
              <span className="flex-grow border-b-2 border-white"></span>{" "}
              {/* Ensuring border thickness is visible */}
              <span className="mx-10 head font-semibold">08.00 - 23.00</span>
            </div>
            <div className="flex items-center text-white w-full">
              <span className="mx-10 head text-xl font-semibold">Monday</span>
              <span className="flex-grow border-b-2 border-white"></span>{" "}
              {/* Ensuring border thickness is visible */}
              <span className="mx-10 head font-semibold">08.00 - 23.00</span>
            </div>
            <div className="flex items-center text-white w-full">
              <span className="mx-10 head text-xl font-semibold">Tuesday</span>
              <span className="flex-grow border-b-2 border-white"></span>{" "}
              {/* Ensuring border thickness is visible */}
              <span className="mx-10 head font-semibold">08.00 - 23.00</span>
            </div>
            <div className="flex items-center text-white w-full">
              <span className="mx-10 head text-xl font-semibold">
                Wednesday
              </span>
              <span className="flex-grow border-b-2 border-white"></span>{" "}
              {/* Ensuring border thickness is visible */}
              <span className="mx-10 head font-semibold">08.00 - 23.00</span>
            </div>
            <div className="flex items-center text-white w-full">
              <span className="mx-10 head text-xl font-semibold">Thursday</span>
              <span className="flex-grow border-b-2 border-white"></span>{" "}
              {/* Ensuring border thickness is visible */}
              <span className="mx-10 head font-semibold">08.00 - 23.00</span>
            </div>
            <div className="flex items-center text-white w-full">
              <span className="mx-10 head text-xl font-semibold">Friday</span>
              <span className="flex-grow border-b-2 border-white"></span>{" "}
              {/* Ensuring border thickness is visible */}
              <span className="mx-10 head font-semibold">Close</span>
            </div>
            <div className="flex items-center text-white w-full">
              <span className="mx-10 head text-xl font-semibold">Saturday</span>
              <span className="flex-grow border-b-2 border-white"></span>{" "}
              {/* Ensuring border thickness is visible */}
              <span className="mx-10 head font-semibold">Close</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section Outside the Square Border */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-auto px-10 mt-20">
        <div className="card-content flex items-center justify-center flex-col h-52 border border-amber-900 relative group">
          <img
            className="mb-2 w-36"
            src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/1.png"
            alt=""
          />

          {/* Overlay with black opacity by default */}
          <div className="absolute inset-0 bg-[#1d1515] opacity-60 group-hover:opacity-0 transition-opacity duration-300"></div>
        </div>
        <div className="card-content flex items-center justify-center flex-col h-52 border border-amber-900 relative group">
          <img
            className="mb-2 w-36"
            src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/client_2_2.png"
            alt=""
          />

          {/* Overlay with black opacity by default */}
          <div className="absolute inset-0 bg-[#1d1515] opacity-60 group-hover:opacity-0 transition-opacity duration-300"></div>
        </div>
        <div className="card-content flex items-center justify-center flex-col h-52 border border-amber-900 relative group">
          <img
            className="mb-2 w-36"
            src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/client_3_2.png"
            alt=""
          />

          {/* Overlay with black opacity by default */}
          <div className="absolute inset-0 bg-[#1d1515] opacity-60 group-hover:opacity-0 transition-opacity duration-300"></div>
        </div>
        <div className="card-content flex items-center justify-center flex-col h-52 border border-amber-900 relative group">
          <img
            className="mb-2 w-28"
            src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/client_4_2.png"
            alt=""
          />

          {/* Overlay with black opacity by default */}
          <div className="absolute inset-0 bg-[#1d1515] opacity-60 group-hover:opacity-0 transition-opacity duration-300"></div>
        </div>
        <div className="card-content flex items-center justify-center flex-col h-52 border border-amber-900 relative group">
          <img
            className="mb-2 w-36"
            src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/5.png"
            alt=""
          />

          {/* Overlay with black opacity by default */}
          <div className="absolute inset-0 bg-[#1d1515] opacity-60 group-hover:opacity-0 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Open;
