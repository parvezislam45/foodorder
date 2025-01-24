'use client'



const Video = () => {
    
    return (
        <div>
           <div className="relative h-screen w-full overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source
      src="https://cdn.pixabay.com/video/2024/05/08/211185_large.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>

  {/* Overlay Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-20 text-white text-center px-4">
    {/* Centered Content */}
    <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-600 about">
        Watch Parvez
      </h1>
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-600 rounded-full flex items-center justify-center animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-10 h-10 sm:w-16 sm:h-16 text-black"
          viewBox="0 0 16 16"
        >
          <path d="M11.596 8.697l-6-4A.5.5 0 0 0 5 5v6a.5.5 0 0 0 .776.416l6-4a.5.5 0 0 0 0-.832z" />
        </svg>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-600 about">
        Cooking Video
      </h1>
    </div>
  </div>

  {/* Overlay for Dim Effect */}
  <div className="absolute inset-0 bg-black opacity-30"></div>
</div>
 
        </div>
    );
};

export default Video;