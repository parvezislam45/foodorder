const Menu = () => {
  const ingredients = [
    { src: 'https://graphicdesigneye.com/images/rastaurant-logo-design-service.png', alt: 'Tomato', size: 'w-80' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIjnJMrrB9O1eX5wXWfQ2eehBa5oaOyMguvZy5-iz-lF_ETQ4bS1KLIfcKvyQxrH_HeQ&usqp=CAU', alt: 'Lettuce', size: 'w-24' },
    { src: 'https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239850.png', alt: 'Cheese', size: 'w-20' },
    { src: 'https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png', alt: 'Onion', size: 'w-18' },
    { src: 'https://img.freepik.com/premium-vector/restaurant-logo-design-vector-illustration_917213-243861.jpg', alt: 'Onion', size: 'w-18' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfs34u_N1ULtolnPPy4FH8oC21O18TVxY3a_TIGDZFzZNkc5SMVbjv4nOz5Q-w27VUrw&usqp=CAU', alt: 'Onion', size: 'w-18' },
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
          <h1 className="absolute inset-0 flex justify-center items-center sm:text-3xl md:text-4xl text-amber-600 nav mt-56 head">
            Find your Favourite meal from the delicious options we have
          </h1>
        </div>
      </div>
      <section
        className="relative bg-fixed bg-cover bg-center mt-5"
        style={{
          backgroundImage: `url('')`,
        }}
      >
      
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none ">
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className={`absolute animate-random-float opacity-50`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 1}s`, // Random start delay for each ingredient
            }}
          >
            <img src={ingredient.src} alt={ingredient.alt} className='w-44 rounded-full' />
          </div>
        ))}
      </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 mx-auto w-11/12 max-w-screen-lg py-14 mt-2">
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
              SALAD
            </h1>
          </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20">
  {[
    {
      id: "01",
      title: "Chicken Avocado Sandwich",
      description: "Type of sandwich made with chicken and avocado.",
      price: "$210",
    },
    {
      id: "02",
      title: "Banana Nut Pancakes",
      description:
        "Delightful breakfast dish made with ripe bananas and chopped nuts.",
      price: "$180",
    },
    {
      id: "03",
      title: "Swiss Hash Browns",
      description:
        "Delicious breakfast treat made with mashed bananas and chopped nuts.",
      price: "$100",
    },
    {
      id: "04",
      title: "Perfect Scrambled Eggs",
      description:
        "Method of cooking scrambled eggs that results in a delicious meal.",
      price: "$155",
    },
    {
      id: "05",
      title: "Sesame Noodles with Garlic",
      description:
        "Delicious and flavorful dish made with noodles, sesame oil, and garlic.",
      price: "$256",
    },
    {
      id: "06",
      title: "Beer-Cheeseburger",
      description:
        "Delicious and flavorful twist on the classic cheeseburger.",
      price: "$320",
    },
    {
      id: "07",
      title: "Spaghetti Carbonara",
      description:
        "Classic Italian pasta dish that features a creamy sauce.",
      price: "$110",
    },
    {
      id: "08",
      title: "Grilled Cheese Crostini",
      description:
        "Delightful appetizer or snack that combines the classic comfort of grilled cheese.",
      price: "$500",
    },
    {
      id: "09",
      title: "Chicken Avocado Sandwich",
      description: "Tasty and nutritious sandwich.",
      price: "$1000",
    },
    {
      id: "10",
      title: "Roasted Veggie Chips",
      description:
        "Nutritious and flavorful alternative to traditional potato chips.",
      price: "$570",
    },
    {
      id: "11",
      title: "One-Pot Beef with Broccoli",
      description:
        "Delicious and easy-to-make dish that combines tender beef.",
      price: "$230",
    },
    {
      id: "12",
      title: "Pesto Chicken Bake",
      description:
        "Flavorful and easy-to-make dish that combines chicken breasts.",
      price: "$230",
    },
  ].map((item) => (
    <div key={item.id} className="bg-[#241508] p-4 rounded-md shadow-lg">
      <h1 className="text-lg flex items-center text-white font-semibold nav">
        <span>{item.id}.</span>
        <span className="mx-3">{item.title}</span>
        <span className="flex-grow border-b border-white"></span>
        <span className="text-white ml-2">{item.price}</span>
      </h1>
      <p className="text-3xl mt-3 head text-amber-500">
        {item.description}
      </p>
    </div>
  ))}
</div>

      </section>
    </section>
  );
};

export default Menu;
