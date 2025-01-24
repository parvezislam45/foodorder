const Sea = () => {
  return (
    <div className="relative h-full bg-[#1d1515] bg-fixed bg-cover">
      <div className="relative flex justify-center items-start bg-[#1d1515] bg-fixed bg-cover">
        <div className="w-full max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <img
              className="mx-auto mt-10 w-full max-w-xs sm:max-w-md md:max-w-lg bg-cover"
              src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/grillman.png"
              alt="Background Image"
            />
            <h1
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-3xl sm:text-5xl md:text-6xl font-normal text-white sea"
              style={{ letterSpacing: "0.1em" }}
            >
              Testing Restart
            </h1>
            <h1
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-3xl sm:text-3xl md:text-5xl font-bold text-white about"
             
            >
              Special Sea Food
            </h1>
            
          </div>
        </div>
      </div>
      
      <section
  className="bg-fixed h-screen flex justify-center items-center relative overflow-hidden mt-20 md:mt-10"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1692197275931-0793e08efcc1?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
  }}
>
  
  {/* Content */}
  <div className="relative w-full md:w-3/4 lg:w-2/5 h-full md:h-5/6 mt-10 md:mt-5 mx-2 bg-transparent text-white shadow-lg p-4 z-10">
    {/* Border and Content Inside */}
    <div className="absolute top-0 left-0 w-full h-1 flex justify-between items-center">
      <div className="w-2/6 border-t-4 border-white"></div>
      <span className="font-bold text-3xl md:text-5xl text-center text-amber-600">
        Plater
      </span>
      <div className="w-2/6 border-t-4 border-white"></div>
    </div>
    <div className="absolute top-0 left-0 h-full w-1 border-l-4 border-white"></div>
    <div className="absolute top-0 right-0 h-full w-1 border-r-4 border-white"></div>
    <div className="absolute bottom-0 left-0 w-full flex justify-between items-center">
      <div className="w-1/4 border-b-4 border-white"></div>
      <div className="w-1/4 border-b-4 border-white"></div>
      <div className="w-1/4 border-b-4 border-white"></div>
    </div>
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-6 px-4 sm:px-6">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="w-full">
          <h2 className="text-2xl md:text-4xl font-bold seaHeading text-amber-700">
            Lobstar Combo
          </h2>
          <p className="paragraph text-md md:text-xl mt-1">
            A flavorful dish featuring Lobstar as the main ingredient. Perfect for seafood lovers!
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


    </div>
  );
};

export default Sea;
