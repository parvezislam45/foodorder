import React from "react";

const Menu = () => {
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
            src="https://cdn.pixabay.com/video/2017/08/29/11632-231581056_tiny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative w-[350px] h-32 bg-transparent border-2 border-amber-500 shadow-lg flex items-center justify-center">
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
            <p className="text-center text-5xl font-bold text-amber-600">
              Menu Item
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-full bg-[#1d1515] bg-fixed bg-cover">
        <div className="relative flex justify-center items-start">
          <div>
            <img
              className="mx-auto mt-10 bg-fixed bg-cover"
              src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/title_back.png"
              alt="Background Image"
            />
            <h1 className="absolute inset-0 flex justify-center items-center text-5xl text-white nav mt-28">
              Dessert
            </h1>
            <h1 className="absolute inset-0 flex justify-center items-center text-2xl text-amber-600 nav mt-56 head">
              Find your Favourite meal from the delicious options we have
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-2xl gap-x-8 gap-y-4 mx-auto mt-5 p-5">
          {/* Card 1 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md">
            {/* Image Section */}
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            {/* Content Section */}
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md mt-0">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md mt-0">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md">
            {/* Image Section */}
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            {/* Content Section */}
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md mt-0">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md mt-0">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md">
            {/* Image Section */}
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            {/* Content Section */}
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md mt-0">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md mt-0">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>
        </div>
        <section
          className="hidden sm:block bg-fixed h-[60vh] flex justify-center items-center relative overflow-hidden mt-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1692197275931-0793e08efcc1?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </section>

        <div className="relative flex justify-center items-start">
          <div>
            <img
              className="mx-auto mt-10 bg-fixed bg-cover"
              src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/title_back.png"
              alt="Background Image"
            />
            <h1 className="absolute inset-0 flex justify-center items-center text-5xl text-white nav mt-28">
              Stack
            </h1>
            <h1 className="absolute inset-0 flex justify-center items-center text-2xl text-amber-600 nav mt-56 head">
              Find your Favourite meal from the delicious options we have
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-2xl gap-x-8 gap-y-4 mx-auto mt-5 p-5">
          {/* Card 1 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md">
            {/* Image Section */}
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            {/* Content Section */}
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md mt-0">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md mt-0">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md">
            {/* Image Section */}
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            {/* Content Section */}
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md mt-0">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md mt-0">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md">
            {/* Image Section */}
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            {/* Content Section */}
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md mt-0">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md mt-0">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>
        </div>
        <section
          className="hidden sm:block bg-fixed h-[60vh] flex justify-center items-center relative overflow-hidden mt-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1692197275931-0793e08efcc1?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </section>
        <div className="relative flex justify-center items-start">
          <div>
            <img
              className="mx-auto mt-10 bg-fixed bg-cover"
              src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/title_back.png"
              alt="Background Image"
            />
            <h1 className="absolute inset-0 flex justify-center items-center text-5xl text-white nav mt-28">
              Starter
            </h1>
            <h1 className="absolute inset-0 flex justify-center items-center text-2xl text-amber-600 nav mt-56 head">
              Find your Favourite meal from the delicious options we have
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-2xl gap-x-8 gap-y-4 mx-auto mt-5 p-5">
          {/* Card 1 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md">
            {/* Image Section */}
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            {/* Content Section */}
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md mt-0">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md mt-0">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md">
            {/* Image Section */}
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            {/* Content Section */}
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md mt-0">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md mt-0">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md">
            {/* Image Section */}
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            {/* Content Section */}
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md mt-0">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center space-x-5 p-4 rounded-lg shadow-md mt-0">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://www.eatingwell.com/thmb/kA-mqVTRpA-0pFYvjwW2imBEcFo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7804777-cef40de3903b47c5b4bbe65df65fbde5.jpg"
              alt="Banana Nut Pancakes"
            />
            <div className="flex-1">
              <div className="flex items-center text-md nav text-white">
                <span className="font-semibold">Banana Nut Pancakes</span>
                <span className="flex-grow border-b border-white mx-2"></span>
                <span className="text-white font-bold">$210</span>
              </div>
              <p className="mt-2 text-xl text-amber-500">
                Type of sandwich made with chicken and avocado.
              </p>
            </div>
          </div>
        </div>
        <section
          className="hidden sm:block bg-fixed h-[60vh] flex justify-center items-center relative overflow-hidden mt-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1692197275931-0793e08efcc1?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </section>
        <section className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-16 bg-[#1d1515]">
          <div className="md:w-1/2 text-center md:text-left md:px-20">
            <h1 className="text-5xl font-medium text-amber-600 mb-1 about">
              Safe Food Take Out
            </h1>
            <p className="text-xl text-amber-600 about mb-6">
              We are open for anu order Online
            </p>
            <p className="text-xl about text-white mb-16">
              Making healthy meal choices while juggling a busy schedule can be
              a challenge.Ordering takeout meals from a restaurant can be a
              convenient solution to this problem.
            </p>
            <button
              type="button"
              className="text-white bg-amber-950 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-16 py-5 text-start inline-flex items-center me-2 mb-2"
            >
              <div className="flex justify-start items-center gap-5">
                <img
                  className="w-20 me-2 -ms-1"
                  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/accept-call-3749745-3125983.png"
                  alt=""
                />
                <div>
                  <h1 className="text-md text-white nav">
                    CALL US TO ORDER ONLINE
                  </h1>
                  <h1 className="text-md text-white nav mt-3">
                    +8801683338523
                  </h1>
                </div>
              </div>
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 w-full">
            <img
              className="w-full h-auto rounded-lg object-cover"
              src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/image2.jpg"
              alt="Hero Image"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;
