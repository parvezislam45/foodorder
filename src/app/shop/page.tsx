"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  spicy?: boolean;
  vegan?: boolean;
};

type CartItem = MenuItem & {
  quantity: number;
};

const FoodOrderPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOrderConfirmed] = useState(false);
  const [recentlyAdded, setRecentlyAdded] = useState<number | null>(null);

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Truffle Pizza",
      description: "White truffle oil, wild mushrooms, mozzarella",
      price: 18.99,
      category: "pizza",
      image:
        "https://www.ilovelindsay.com/assets/components/phpthumbof/cache/pizza-with-black-olives-and-pepperoni-small.f82724c758f5a7e1142cf0568b85d580.jpg",
      vegan: true,
    },
    {
      id: 2,
      name: "Spicy Ramen",
      description: "Rich pork broth, chili oil, soft egg, noodles",
      price: 14.5,
      category: "noodles",
      image:
        "https://images.unsplash.com/photo-1552611052-d59a0d9741bc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      spicy: true,
    },
    {
      id: 3,
      name: "Avocado Burger",
      description: "Grass-fed beef, avocado, special sauce",
      price: 12.75,
      category: "burger",
      image:
        "https://plus.unsplash.com/premium_photo-1713639365497-c041ce813de6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Sushi Platter",
      description: "Assorted fresh sushi with wasabi and ginger",
      price: 22.99,
      category: "sushi",
      image:
        "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Vegan Bowl",
      description: "Quinoa, roasted veggies, tahini dressing",
      price: 11.25,
      category: "bowls",
      image:
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      vegan: true,
    },
    {
      id: 6,
      name: "Chocolate Lava",
      description: "Warm chocolate cake with vanilla ice cream",
      price: 8.5,
      category: "dessert",
      image:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Chicken Thanduri",
      description: "White truffle oil, wild mushrooms, mozzarella",
      price: 18.99,
      category: "pizza",
      image:
        "https://images.unsplash.com/photo-1553659971-f01207815844?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      vegan: true,
    },
    {
      id: 8,
      name: "Butter Shake",
      description: "White truffle oil, wild mushrooms, mozzarella",
      price: 18.99,
      category: "pizza",
      image:
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      vegan: true,
    },
    {
      id: 9,
      name: "Soul Cake",
      description: "White truffle oil, wild mushrooms, mozzarella",
      price: 18.99,
      category: "pizza",
      image:
        "https://images.unsplash.com/photo-1520080906273-ac3114063b21?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      vegan: true,
    },
    {
      id: 10,
      name: "Pasty Bloob",
      description: "White truffle oil, wild mushrooms, mozzarella",
      price: 18.99,
      category: "pizza",
      image:
        "https://plus.unsplash.com/premium_photo-1713371128106-3d4c5ad9e308?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      vegan: true,
    },
    {
      id: 11,
      name: "Chocolate Shake",
      description: "White truffle oil, wild mushrooms, mozzarella",
      price: 18.99,
      category: "pizza",
      image:
        "https://images.unsplash.com/photo-1546197361-5ce3f0340bb2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      vegan: true,
    },
    {
      id: 12,
      name: "Italiano Soup",
      description: "White truffle oil, wild mushrooms, mozzarella",
      price: 18.99,
      category: "pizza",
      image:
        "https://plus.unsplash.com/premium_photo-1713447395823-2e0b40b75a89?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      vegan: true,
    },
    {
      id: 13,
      name: "Fish Gril",
      description: "White truffle oil, wild mushrooms, mozzarella",
      price: 18.99,
      category: "pizza",
      image:
        "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      vegan: true,
    },
    {
      id: 14,
      name: "Milk Soup",
      description: "White truffle oil, wild mushrooms, mozzarella",
      price: 18.99,
      category: "pizza",
      image:
        "https://images.unsplash.com/photo-1624896276654-2eb0c7e8247c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      vegan: true,
    },
  ];

  const categories = [
    "all",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    setRecentlyAdded(item.id);
    setTimeout(() => setRecentlyAdded(null), 1000);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter((item) => item.id !== id);
      }
    });
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#1d1515]">
      <div className="relative bg-cover bg-center h-[600px] flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2021/07/02/79900-570532758_tiny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <div className="relative z-10 flex items-center justify-center">
          <div className="relative w-[350px] h-32 bg-transparent border-2 border-amber-500 shadow-lg flex items-center justify-center">
            <p className="text-center text-5xl font-bold text-amber-600">
              Order Now
            </p>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-600 opacity-60"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16 text-center"
        >
          <motion.h2
            animate={{
              scale: [1, 1.02, 1],
              textShadow: [
                "0 0 0px rgba(0,0,0,0)",
                "0 0 10px rgba(234, 88, 12, 0.3)",
                "0 0 0px rgba(0,0,0,0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600"
          >
            Delicious Food Delivered Fast
          </motion.h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Order from our premium selection of gourmet dishes prepared with
            love and delivered to your doorstep.
          </p>

          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border border-amber-600 px-6 py-3 text-white rounded-full shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-amber-600 text-white p-2 rounded-full">
              🔍
            </button>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12 overflow-x-auto"
        >
          <div className="flex space-x-4 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? "bg-amber-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-amber-100"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.05 }}
              className="bg-transparent border border-amber-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all w-full"
            >
              <div className="relative h-60 overflow-hidden">
                <div
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center text-6xl"
                >
                  {!item.image && ( // Show emoji fallback only if no image
                    <>
                      {item.name.toLowerCase().includes("pizza")
                        ? "🍕"
                        : item.name.toLowerCase().includes("burger")
                        ? "🍔"
                        : item.name.toLowerCase().includes("sushi")
                        ? "🍣"
                        : "🍲"}
                    </>
                  )}
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  {item.spicy && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                      🌶️ Spicy
                    </span>
                  )}
                  {item.vegan && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                      🌱 Vegan
                    </span>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <span className="text-lg font-bold text-amber-600">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="w-full py-3 bg-amber-700 border border-amber-600 hover:bg-amber-600 text-white rounded-lg font-medium transition-all flex items-center justify-center"
                >
                  <span className="mr-2">+</span> Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-bold mb-2">No items found</h3>
            <p className="text-gray-600">Try a different search or category</p>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-20 mt-20"
              onClick={() => setIsCartOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-black border border-amber-600 shadow-xl z-30 overflow-y-auto mt-20"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Your Order</h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-white hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>

                {cart.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-6xl mb-4">🛒</div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      Your cart is empty
                    </h3>
                    <p className="text-white">
                      Add some delicious items to get started
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="space-y-4 mb-20">
                      {cart.map((item) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            backgroundColor:
                              recentlyAdded === item.id
                                ? "rgba(146, 64, 14, 0.3)"
                                : "rgba(180, 83, 9, 1)",
                          }}
                          transition={{ backgroundColor: { duration: 0.5 } }}
                          className="flex justify-between items-center p-4 bg-transparent rounded-lg"
                        >
                          <div className="mt-5">
                            <h4 className="font-medium text-white">
                              {item.name}
                            </h4>
                            <p className="text-sm text-white">
                              ${item.price.toFixed(2)} × {item.quantity}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="w-8 h-8 flex items-center justify-center bg-[#1d1515] text-white text-lg rounded-full shadow mr-2"
                            >
                              -
                            </button>
                            <span className="mx-2 text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => addToCart(item)}
                              className="w-8 h-8 flex items-center justify-center bg-[#1d1515] text-white text-lg rounded-full shadow ml-2"
                            >
                              +
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 pt-4 mb-6">
                      <div className="flex justify-between text-lg font-bold mb-6">
                        <span className="text-white">Total:</span>
                        <span className="text-white">
                          ${cartTotal.toFixed(2)}
                        </span>
                      </div>

                      <Link
                        href={isOrderConfirmed ? "#" : "/checkout"}
                        passHref
                        legacyBehavior
                      >
                        <motion.a
                          whileHover={{ scale: isOrderConfirmed ? 1 : 1.02 }}
                          whileTap={{ scale: isOrderConfirmed ? 1 : 0.95 }}
                          className={`w-full py-4 rounded-xl font-bold text-white transition-all flex justify-center ${
                            isOrderConfirmed
                              ? "bg-green-500 cursor-default"
                              : "bg-amber-600 hover:bg-amber-700 cursor-pointer"
                          }`}
                        >
                          {isOrderConfirmed ? (
                            <>
                              <motion.span
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="inline-block mr-2"
                              >
                                ✓
                              </motion.span>
                              Order Confirmed!
                            </>
                          ) : (
                            "Checkout Now"
                          )}
                        </motion.a>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {!isCartOpen && cart.length > 0 && (
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 z-10 bg-amber-600 text-white p-4 rounded-full shadow-xl flex items-center md:hidden"
        >
          <span className="mr-2">🛒</span>
          <span className="font-bold">${cartTotal.toFixed(2)}</span>
        </motion.button>
      )}
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-10 mr-16 z-10">
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="relative p-3 rounded-full bg-transparent border-4 border-amber-600 shadow-lg hover:shadow-xl transition-all"
        >
          <span className="text-2xl text-white">🛒</span>
          {cart.length > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center"
            >
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </motion.span>
          )}
        </button>
        <div></div>
      </div>
    </div>
  );
};

export default FoodOrderPage;
