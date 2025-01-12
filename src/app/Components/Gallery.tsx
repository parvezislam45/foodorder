const Gallery = () => {
  return (
    <div>
      <section className="relative bg-[#1d1515] text-white py-16 overflow-hidden">
        <div className="relative flex justify-center items-start">
          <div>
            <img
              className="mx-auto bg-fixed bg-cover"
              src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/title_back.png"
              alt="Background Image"
            />
            <h1 className="absolute inset-0 flex justify-center items-center text-3xl text-white nav mt-16">
              Photo Gallery
            </h1>
            <h1 className="absolute inset-0 flex justify-center items-center text-4xl text-amber-600 nav mt-36 head">
              Have a glimps of some delicacies of David Parvez buzz
            </h1>
          </div>
        </div>
        {/* Gallery Content */}
        <div className="relative z-10 container mx-auto grid grid-cols-3 mt-10">
          <div className="flex flex-col gap-8">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1475856033578-76b4a228f5c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHJlc3R1cmVhbnQlMjBmb29kfGVufDB8fDB8fHww"
                alt="Dish 1"
                className=""
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 rounded-lg flex items-end justify-between p-4 transition-opacity duration-300">
                <div>
                  <h1
                    className="text-amber-600 text-sm font-normal mt-3 menu"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    DESSERTS
                  </h1>
                  <p className="nav text-md">Lorem ipsum dolor sit</p>
                </div>

                <button
                  type="button"
                  className="text-white bg-amber-600 font-medium px-4 py-2 inline-flex items-center me-2"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                      fill="white"
                    ></path>
                  </svg>
                  <span className="sr-only">Icon description</span>
                </button>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dish 1"
                className=""
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 rounded-lg flex items-end justify-between p-4 transition-opacity duration-300">
                <div>
                  <h1
                    className="text-amber-600 text-sm font-normal mt-3 menu"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    DESSERTS
                  </h1>
                  <p className="nav text-md">Lorem ipsum dolor sit</p>
                </div>

                <button
                  type="button"
                  className="text-white bg-amber-600 font-medium px-4 py-2 inline-flex items-center me-2"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                      fill="white"
                    ></path>
                  </svg>
                  <span className="sr-only">Icon description</span>
                </button>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1485921198582-a55119c97421?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHJlc3R1cmVhbnQlMjBmb29kfGVufDB8fDB8fHww"
                alt="Dish 1"
                className=""
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 rounded-lg flex items-end justify-between p-4 transition-opacity duration-300">
                <div>
                  <h1
                    className="text-amber-600 text-sm font-normal mt-3 menu"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    DESSERTS
                  </h1>
                  <p className="nav text-md">Lorem ipsum dolor sit</p>
                </div>

                <button
                  type="button"
                  className="text-white bg-amber-600 font-medium px-4 py-2 inline-flex items-center me-2"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                      fill="white"
                    ></path>
                  </svg>
                  <span className="sr-only">Icon description</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center bg-transparent gap-5">
          <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJlc3R1cmVudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
                alt="Dish 1"
                className="rounded-lg shadow-xl hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 rounded-lg flex items-end justify-between p-4 transition-opacity duration-300">
                <div>
                  <h1
                    className="text-amber-600 text-sm font-normal mt-3 menu"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    DESSERTS
                  </h1>
                  <p className="nav text-md">Lorem ipsum dolor sit</p>
                </div>

                <button
                  type="button"
                  className="text-white bg-amber-600 font-medium px-4 py-2 inline-flex items-center me-2"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                      fill="white"
                    ></path>
                  </svg>
                  <span className="sr-only">Icon description</span>
                </button>
              </div>
            </div>
          <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxyZXN0dXJlYW50JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Dish 1"
                className="rounded-lg shadow-xl hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 rounded-lg flex items-end justify-between p-4 transition-opacity duration-300">
                <div>
                  <h1
                    className="text-amber-600 text-sm font-normal mt-3 menu"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    DESSERTS
                  </h1>
                  <p className="nav text-md">Lorem ipsum dolor sit</p>
                </div>

                <button
                  type="button"
                  className="text-white bg-amber-600 font-medium px-4 py-2 inline-flex items-center me-2"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                      fill="white"
                    ></path>
                  </svg>
                  <span className="sr-only">Icon description</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
          <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxyZXN0dXJlYW50JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Dish 1"
                className=""
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 rounded-lg flex items-end justify-between p-4 transition-opacity duration-300">
                <div>
                  <h1
                    className="text-amber-600 text-sm font-normal mt-3 menu"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    DESSERTS
                  </h1>
                  <p className="nav text-md">Lorem ipsum dolor sit</p>
                </div>

                <button
                  type="button"
                  className="text-white bg-amber-600 font-medium px-4 py-2 inline-flex items-center me-2"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                      fill="white"
                    ></path>
                  </svg>
                  <span className="sr-only">Icon description</span>
                </button>
              </div>
            </div>
          <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxyZXN0dXJlYW50JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Dish 1"
                className=""
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 rounded-lg flex items-end justify-between p-4 transition-opacity duration-300">
                <div>
                  <h1
                    className="text-amber-600 text-sm font-normal mt-3 menu"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    DESSERTS
                  </h1>
                  <p className="nav text-md">Lorem ipsum dolor sit</p>
                </div>

                <button
                  type="button"
                  className="text-white bg-amber-600 font-medium px-4 py-2 inline-flex items-center me-2"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                      fill="white"
                    ></path>
                  </svg>
                  <span className="sr-only">Icon description</span>
                </button>
              </div>
            </div>
          <div className="relative group">
              <img
                src="https://plus.unsplash.com/premium_photo-1670740967011-86730910a2e5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmVudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
                alt="Dish 1"
                className=""
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 rounded-lg flex items-end justify-between p-4 transition-opacity duration-300">
                <div>
                  <h1
                    className="text-amber-600 text-sm font-normal mt-3 menu"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    DESSERTS
                  </h1>
                  <p className="nav text-md">Lorem ipsum dolor sit</p>
                </div>

                <button
                  type="button"
                  className="text-white bg-amber-600 font-medium px-4 py-2 inline-flex items-center me-2"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                      fill="white"
                    ></path>
                  </svg>
                  <span className="sr-only">Icon description</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
