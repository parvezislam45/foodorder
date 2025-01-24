import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Team = () => {
    const teamMembers = [
        {
          id: 1,
          name: "David Parvez",
          designation: "Software Engineer",
          comment: "Building scalable web applications.",
          image: "https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/1.jpg",
        },
        {
          id: 2,
          name: "Parvez Islam",
          designation: "Product Manager",
          comment: "Leading with strategy and innovation.",
          image: "https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/2-1.jpg",
        },
        {
          id: 3,
          name: "Alice Johnson",
          designation: "UI/UX Designer",
          comment: "Designing user-friendly interfaces.",
          image: "https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/8.jpg",
        },
        {
          id: 4,
          name: "Bob Brown",
          designation: "DevOps Engineer",
          comment: "Optimizing CI/CD pipelines.",
          image: "https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/7.jpg",
        },
        {
          id: 5,
          name: "John Doe",
          designation: "Software Engineer",
          comment: "Building scalable web applications.",
          image: "https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/6-1.jpg",
        },
        {
          id: 6,
          name: "David Hales",
          designation: "Product Manager",
          comment: "Leading with strategy and innovation.",
          image: "https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/5-1.jpg",
        },
        {
          id: 7,
          name: "Flora Page",
          designation: "UI/UX Designer",
          comment: "Designing user-friendly interfaces.",
          image: "https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/4-1.jpg",
        },
        {
          id: 8,
          name: "John Bruce",
          designation: "DevOps Engineer",
          comment: "Optimizing CI/CD pipelines.",
          image: "https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/3-1.jpg",
        },
      ];
  return (
    <div className="bg-[#1d1515]">
      <div className="relative bg-cover bg-center h-[600px] flex items-center justify-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2021/04/07/70345-534725150_tiny.mp4"
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
              Our Team
            </p>
          </div>
        </div>
      </div>
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
              Team Members
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 bg-[#1d1515]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group relative bg-[#1d1515] shadow-lg rounded-lg overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full object-cover"
              />
              {/* Social Icons on Hover */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex justify-center space-x-6">
                <a
                  href="#"
                  className="text-amber-600 text-4xl hover:text-pink-500 transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="text-amber-600 text-4xl hover:text-pink-500 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-amber-600 text-4xl hover:text-pink-500 transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="text-amber-600 text-4xl hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Text Section */}
            <div className="p-4">
              <h3 className="text-3xl font-bold text-amber-600 about">{member.name}</h3>
              <p className="text-sm text-white mt-2 nav">{member.comment}</p>
              <p className="text-2xl font-semibold text-amber-600 mt-2 sea">{member.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
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

export default Team;
