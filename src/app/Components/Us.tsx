

const Us = () => {
    return (
        <div>
            <div className="relative h-screen flex bg-[#1d1515] items-center justify-center overflow-hidden">
        {/* Content */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left  mx-auto px-4">
          {/* Left Side */}
          <div className="md:w-1/2 px-24 space-y-6">
            <h1 className="text-3xl nav text-white">About Us</h1>
            <p className="text-amber-600 head text-2xl font-normal mt-5">
              DavidBuzz cooks food as a house Art
            </p>
            <p className="text-sm nav text-white">
              Culinary artists often take inspiration from various cuisines,
              cultural traditions, and personal experiences to create their own
              signature dishes.
            </p>
            <button className="px-6 py-3 bg-orange-600 text-white font-semibold">
              Learn More
            </button>
          </div>

          {/* Right Side */}
          <div className="relative md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/6-3.jpg"
              alt="Hero Image"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-[#241508] bg-opacity-20"></div>
        {/* Top Center Image */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
          <img
            src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/logo.png"
            alt="Top Center Image"
            className="w-32"
          />
        </div>

  

        {/* Bottom Images */}
        <div className="absolute bottom-1 left-2/5 transform -translate-x-1/2 animate-bounce-slow flex flex-col items-center">
  <img
    src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/layer3.png"
    alt="Bottom Left Image"
    className="w-20"
  />
  <img
    src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/layer4.png"
    alt="Bottom Right Image"
    className="w-72 mt-5"
  />
</div>

      </div>
        </div>
    );
};

export default Us;