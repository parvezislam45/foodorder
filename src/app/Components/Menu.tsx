const Menu = () => {
  const ingredients = [
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoLjJJYZT7sZgE2gugCEblms8TWaMc-Vww9A&s', alt: 'Tomato', size: 'w-20' },
    { src: 'https://images.unsplash.com/photo-1727387562395-6be53e861975?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D', alt: 'Lettuce', size: 'w-24' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDUdAhwLd3hCpif1Dhi-qKiPM4ls9bcCRNw&s', alt: 'Cheese', size: 'w-20' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoLjJJYZT7sZgE2gugCEblms8TWaMc-Vww9A&s', alt: 'Onion', size: 'w-18' },
    // Add more ingredients as needed
  ];
  return (
    <section className="relative h-full bg-[#1d1515] bg-fixed bg-cover">
      <div className="relative flex justify-center items-start">
        <div>
          <img
            className="mx-auto mt-10 bg-fixed bg-cover"
            src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/title_back.png"
            alt="Background Image"
          />
          <h1 className="absolute inset-0 flex justify-center items-center text-3xl text-white nav mt-28">
            Restaurant Menu
          </h1>
          <h1 className="absolute inset-0 flex justify-center items-center text-4xl text-amber-600 nav mt-56 head">
            Find your Favourite meal from the delicious options we have
          </h1>
        </div>
      </div>
      <section
        className="relative bg-fixed bg-cover bg-center mt-5"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/cup-black-coffee-dark-concrete-background_993599-22850.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#241508] bg-opacity-20"></div>
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none ">
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className={`absolute animate-random-float opacity-30`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 1}s`, // Random start delay for each ingredient
            }}
          >
            <img src={ingredient.src} alt={ingredient.alt} className={ingredient.size} />
          </div>
        ))}
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 mx-auto w-11/12 max-w-screen-lg py-14">
          <div className="flex flex-col items-center">
            <img
              src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/07/5-1.png"
              alt="Dish"
              className="mx-auto"
            />
            <h1
              className="text-white text-sm font-bold mt-3 menu"
              style={{ letterSpacing: "0.3em" }}
            >
              DESSERTS
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/07/6-1.png"
              alt="Dish"
              className="mx-auto"
            />
            <h1
              className="text-white text-sm font-bold mt-3 menu"
              style={{ letterSpacing: "0.3em" }}
            >
              STEAKS
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/07/4-1.png"
              alt="Dish"
              className="mx-auto"
            />
            <h1
              className="text-white text-sm font-bold mt-3 menu"
              style={{ letterSpacing: "0.3em" }}
            >
              SNAKES
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/07/10.png"
              alt="Dish"
              className="mx-auto"
            />
            <h1
              className="text-white text-sm font-bold mt-3 menu"
              style={{ letterSpacing: "0.3em" }}
            >
              SALAD
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/07/19.png"
              alt="Dish"
              className="mx-auto"
            />
            <h1
              className="text-white text-sm font-bold mt-3 menu"
              style={{ letterSpacing: "0.3em" }}
            >
              DRINKS
            </h1>
          </div>
        </div>

        {/* ------------------------- Menu ------------------------ */}
        <div className="grid grid-cols-2 gap-8 px-8">
          <div>
            <h1 className="text-md flex items-center flex-1 text-white nav">
              <span>
                01. <span className="mx-3">Chicken Avocado Sandwich</span>
              </span>
              <span className="flex-grow border-b border-white"></span>
              <span className="text-white mx-2">$210</span>
            </h1>
            <p className="text-2xl mt-3 head text-amber-600 mx-8">
              Type of sandwich made with chicken and avocado.
            </p>
          </div>
          <div>
            <h1 className="text-md flex items-center flex-1 text-white nav">
              <span>
                02. <span className="mx-3">Banana Nut Pancakes</span>
              </span>
              <span className="flex-grow border-b border-white"></span>
              <span className="text-white mx-2">$ 180</span>
            </h1>
            <p className="text-2xl mt-3 head text-amber-600 mx-8">
              Delightful breakfast dish made with ripe bananas and chopped nuts.
            </p>
          </div>
          <div>
            <h1 className="text-md flex items-center flex-1 text-white nav">
              <span>
                03. <span className="mx-3">Swiss Hash Browns</span>
              </span>
              <span className="flex-grow border-b border-white"></span>
              <span className="text-white mx-2">$ 100</span>
            </h1>
            <p className="text-2xl mt-3 head text-amber-600 mx-8">
              Delicious breakfast treat made with mashed bananas and chopped
              nuts.
            </p>
          </div>
          <div>
            <h1 className="text-md flex items-center flex-1 text-white nav">
              <span>
                04. <span className="mx-3">Perfect Scrambled Eggs</span>
              </span>
              <span className="flex-grow border-b border-white"></span>
              <span className="text-white mx-2">$ 155</span>
            </h1>
            <p className="text-2xl mt-3 head text-amber-600 mx-8">
              Method of cooking scrambled eggs that results in a delicious.
            </p>
          </div>
          <div>
            <h1 className="text-md flex items-center flex-1 text-white nav">
              <span>
                05. <span className="mx-3">Sesame Noodles with Garlic</span>
              </span>
              <span className="flex-grow border-b border-white"></span>
              <span className="text-white mx-2">$ 256</span>
            </h1>
            <p className="text-2xl mt-3 head text-amber-600 mx-8">
              Delicious and flavorful dish made with noodles, sesame oil, and
              garlic.
            </p>
          </div>
          <div>
            <h1 className="text-md flex items-center flex-1 text-white nav">
              <span>
                06. <span className="mx-3">Beer-Cheeseburger</span>
              </span>
              <span className="flex-grow border-b border-white"></span>
              <span className="text-white mx-2">$ 320</span>
            </h1>
            <p className="text-2xl mt-3 head text-amber-600 mx-8">
              Delicious and flavorful twist on the classic cheeseburger.
            </p>
          </div>
          <div>
            <h1 className="text-md flex items-center flex-1 text-white nav">
              <span>
                07. <span className="mx-3">Spaghetti carbonara</span>
              </span>
              <span className="flex-grow border-b border-white"></span>
              <span className="text-white mx-2">$ 110</span>
            </h1>
            <p className="text-2xl mt-3 head text-amber-600 mx-8">
              Classic Italian pasta dish that features a creamy sauce.
            </p>
          </div>
          <div>
            <h1 className="text-md flex items-center flex-1 text-white nav">
              <span>
                08. <span className="mx-3">Grilled Cheese Crostini</span>
              </span>
              <span className="flex-grow border-b border-white"></span>
              <span className="text-white mx-2">$ 500</span>
            </h1>
            <p className="text-2xl mt-3 head text-amber-600 mx-8">
              Delightful appetizer or snack that combines the classic comfort of
              grilled cheese
            </p>
          </div>
          <div>
            <h1 className="text-md flex items-center flex-1 text-white nav">
              <span>
                09. <span className="mx-3">Chicken Avocado Sandwitch</span>
              </span>
              <span className="flex-grow border-b border-white"></span>
              <span className="text-white mx-2">$ 1000</span>
            </h1>
            <p className="text-2xl mt-3 head text-amber-600 mx-8">
              Tasty and nutritious sandwich.
            </p>
          </div>
          <div>
            <h1 className="text-md flex items-center flex-1 text-white nav">
              <span>
                10. <span className="mx-3">Roasted Veggie Chips</span>
              </span>
              <span className="flex-grow border-b border-white"></span>
              <span className="text-white mx-2">$ 570</span>
            </h1>
            <p className="text-2xl mt-3 head text-amber-600 mx-8">
              Nutritious and flavorful alternative to traditional potato chips.
            </p>
          </div>
          <div>
            <h1 className="text-md flex items-center flex-1 text-white nav">
              <span>
                11. <span className="mx-3">One-Pot Beef with Broccoli</span>
              </span>
              <span className="flex-grow border-b border-white"></span>
              <span className="text-white mx-2">$ 230</span>
            </h1>
            <p className="text-2xl mt-3 head text-amber-600 mx-8">
              Delicious and easy-to-make dish that combines tender beef.
            </p>
          </div>
          <div>
            <h1 className="text-md flex items-center flex-1 text-white nav">
              <span>
                12. <span className="mx-3">Pesto Chicken Bake</span>
              </span>
              <span className="flex-grow border-b border-white"></span>
              <span className="text-white mx-2">$ 230</span>
            </h1>
            <p className="text-2xl mt-3 head text-amber-600 mx-8">
              flavorful and easy-to-make dish that combines chicken breasts.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Menu;
