const Sea = () => {
  return (
    <div className="relative h-full bg-[#1d1515] bg-fixed bg-cover">
      <div className="relative flex justify-center items-start">
        <div>
          <img
            className="mx-auto mt-10 bg-fixed bg-cover"
            src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/grillman.png"
            alt="Background Image"
          />
          <h1 className="absolute inset-0 flex justify-center items-center text-6xl font-normal text-white nav mt-28 sea" style={{ letterSpacing: "0.1em" }}>
            Testing Restart
          </h1>
        </div>
      </div>
      <section className="bg-fixed h-screen flex justify-center items-center relative overflow-hidden  mt-20"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1515510457176-39b9b5821a4a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
  }}>
  <div className="absolute inset-0 bg-[#241508] bg-opacity-50"></div>

  {/* Bubbles */}
  <div className="absolute inset-0">
    <div className="absolute bg-blue-400 rounded-full w-16 h-16 opacity-10 animate-pulse" style={{ top: '5%', left: '15%' }}></div>
    <div className="absolute bg-red-400 rounded-full w-20 h-20 opacity-50 animate-pulse" style={{ top: '10%', left: '75%' }}></div>
    <div className="absolute bg-green-400 rounded-full w-20 h-20 opacity-50 animate-pulse" style={{ top: '80%', left: '15%' }}></div>
    <div className="absolute bg-yellow-400 rounded-full w-12 h-12 opacity-50 animate-pulse" style={{ top: '85%', left: '40%' }}></div>
    <div className="absolute bg-purple-400 rounded-full w-10 h-10 opacity-30 animate-pulse" style={{ top: '20%', left: '20%' }}></div>
    <div className="absolute bg-pink-400 rounded-full w-14 h-14 opacity-50 animate-pulse" style={{ top: '50%', left: '100%' }}></div>
    <div className="absolute bg-indigo-400 rounded-full w-12 h-12 opacity-50 animate-pulse" style={{ top: '80%', left: '30%' }}></div>
    <div className="absolute bg-teal-400 rounded-full w-16 h-16 opacity-50 animate-pulse" style={{ top: '5%', left: '50%' }}></div>
    <div className="absolute bg-orange-400 rounded-full w-16 h-16 opacity-50 animate-pulse" style={{ top: '75%', left: '5%' }}></div>
    <div className="absolute bg-gray-400 rounded-full w-16 h-16 opacity-50 animate-pulse" style={{ top: '80%', left: '75%' }}></div>
    <div className="absolute bg-cyan-400 rounded-full w-10 h-10 opacity-50 animate-pulse" style={{ top: '50%', left: '90%' }}></div>
    <div className="absolute bg-lime-400 rounded-full w-10 h-10 opacity-50 animate-pulse" style={{ top: '1%', left: '70%' }}></div>
   
  </div>

  {/* Content */}
  <div className="relative w-2/5 h-4/5 mx-2 bg-transparent text-white shadow-lg p-4 z-10 mt-10">
    {/* Border and Content Inside */}
    <div className="absolute top-0 left-0 w-full h-1 flex justify-between items-center">
      <div className="w-2/6 border-t-4 border-white"></div>
      <span className=" font-bold text-3xl nav text-amber-600">Plater</span>
      <div className="w-2/6 border-t-4 border-white"></div>
    </div>
    <div className="absolute top-[-80px] left-1/2 transform -translate-x-1/2">
      <span className="text-white font-bold text-2xl nav">Special Sea Food</span>
    </div>
    <div className="absolute top-0 left-0 h-full w-1 border-l-4 border-white"></div>
    <div className="absolute top-0 right-0 h-full w-1 border-r-4 border-white"></div>
    <div className="absolute bottom-0 left-0 w-full flex justify-between items-center">
      <div className="w-1/4 border-b-4 border-white"></div>
      <div className="w-1/4 border-b-4 border-white"></div>
      <div className="w-1/4 border-b-4 border-white"></div>
    </div>
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-6">
      <div>
        <h2 className="text-3xl font-bold seaHeading text-amber-700">Lobstar Combo</h2>
        <p className="paragraph text-lg mt-1">Paragraph Dish or Meal Featuring Lobstar as the Main Ingredient</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold seaHeading text-amber-700">Lobstar Combo</h2>
        <p className="paragraph text-lg mt-1">Paragraph Dish or Meal Featuring Lobstar as the Main Ingredient</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold seaHeading text-amber-700">Lobstar Combo</h2>
        <p className="paragraph text-lg mt-1">Paragraph Dish or Meal Featuring Lobstar as the Main Ingredient</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold seaHeading text-amber-700">Lobstar Combo</h2>
        <p className="paragraph text-lg mt-1">Paragraph Dish or Meal Featuring Lobstar as the Main Ingredient</p>
      </div>
      
      
    </div>
  </div>
</section>

    </div>
  );
};

export default Sea;
