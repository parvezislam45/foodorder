import { NextPage } from 'next';
import { FiClock, FiHeart, FiShare2, FiBookmark } from 'react-icons/fi';

interface Recipe {
  id: number;
  title: string;
  description: string;
  prepTime: number;
  cookTime: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  flavorProfile: {
    sweet: number;
    savory: number;
    spicy: number;
    sour: number;
  };
  imageUrl: string;
  category: string;
}

const Blog: NextPage = () => {
  const featuredRecipe: Recipe = {
    id: 1,
    title: 'Miso Glazed Eggplant with Crispy Shallots',
    description: 'A perfect balance of umami and sweetness with a satisfying crunch',
    prepTime: 15,
    cookTime: 25,
    difficulty: 'Medium',
    flavorProfile: {
      sweet: 4,
      savory: 5,
      spicy: 2,
      sour: 3,
    },
    imageUrl: 'https://www.restroapp.com/blog/wp-content/uploads/2020/03/online-food-ordering-statistics-RestroApp.jpg',
    category: 'Vegetarian',
  };

  const recipes: Recipe[] = [
    {
      id: 2,
      title: 'Turmeric Coconut Rice Bowl',
      description: 'Vibrant golden rice with seasonal vegetables and a peanut dressing',
      prepTime: 20,
      cookTime: 30,
      difficulty: 'Easy',
      flavorProfile: {
        sweet: 3,
        savory: 4,
        spicy: 3,
        sour: 2,
      },
      imageUrl: 'https://api.photon.aremedia.net.au/wp-content/uploads/sites/12/2025/02/bhg2503-eattherainbow-gingerlambcutlets-hero-b-0189_w1920-67aa8cce073fd-scaled.jpg?crop=0px%2C428px%2C1427px%2C1427px&resize=980%2C980',
      category: 'Vegan',
    },
    {
      id: 3,
      title: 'Saffron Infused Seafood Paella',
      description: 'Spanish classic with a mix of fresh seafood and aromatic saffron',
      prepTime: 30,
      cookTime: 45,
      difficulty: 'Hard',
      flavorProfile: {
        sweet: 2,
        savory: 5,
        spicy: 1,
        sour: 1,
      },
      imageUrl: 'https://i.ytimg.com/vi/QLPxMKmCp20/maxresdefault.jpg',
      category: 'Seafood',
    },
    {
      id: 4,
      title: 'Mango Sticky Rice with Coconut Cream',
      description: 'Sweet Thai dessert with ripe mango and fragrant sticky rice',
      prepTime: 15,
      cookTime: 20,
      difficulty: 'Easy',
      flavorProfile: {
        sweet: 5,
        savory: 1,
        spicy: 0,
        sour: 2,
      },
      imageUrl: 'https://api.photon.aremedia.net.au/wp-content/uploads/sites/4/2022/03/17/32953/HL094B03-scaled.jpg?resize=760%2C608',
      category: 'Dessert',
    },
    {
      id: 5,
      title: 'Sichuan Dan Dan Noodles',
      description: 'Spicy, numbing noodles with ground pork and chili oil',
      prepTime: 25,
      cookTime: 15,
      difficulty: 'Medium',
      flavorProfile: {
        sweet: 1,
        savory: 4,
        spicy: 5,
        sour: 3,
      },
      imageUrl: 'https://cdn.sunbasket.com/97f85095-a7d4-480d-8545-e852c2fa2627.jpg',
      category: 'Noodles',
    },
    {
      id: 6,
      title: 'Beetroot and Goat Cheese Tart',
      description: 'Elegant tart with roasted beets and creamy goat cheese',
      prepTime: 40,
      cookTime: 35,
      difficulty: 'Medium',
      flavorProfile: {
        sweet: 3,
        savory: 4,
        spicy: 0,
        sour: 4,
      },
      imageUrl: 'https://www.tastingtable.com/img/gallery/beetroot-and-goat-cheese-tart-recipe/l-intro-1689693343.jpg',
      category: 'Vegetarian',
    },
  ];

  const categories = [
    'All',
    'Vegetarian',
    'Vegan',
    'Seafood',
    'Meat',
    'Dessert',
    'Noodles',
    'Quick Meals'
  ];

  return (
    <div className="min-h-screen bg-[#1d1515]">
        <div className="relative bg-cover bg-center h-[600px] flex items-center justify-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2024/08/18/227134_tiny.mp4"
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
              Blog
            </p>
          </div>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Recipe */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row gap-8 bg-transparent rounded-2xl shadow-md overflow-hidden">
            <div className="lg:w-1/2">
              <div className="h-full bg-transparent">
                {/* Replace with actual image */}
                <div className="h-64 lg:h-full w-full flex items-center justify-center">
                  <img src="https://www.restroapp.com/blog/wp-content/uploads/2020/03/online-food-ordering-statistics-RestroApp.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-8 bg-transparent">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                  {featuredRecipe.category}
                </span>
                <div className="flex gap-2">
                  <button className="p-2 text-white hover:text-amber-600">
                    <FiHeart className='h-7 w-7' />
                  </button>
                  <button className="p-2 text-white hover:text-amber-600">
                    <FiBookmark className='h-7 w-7' />
                  </button>
                  <button className="p-2 text-white hover:text-amber-600">
                    <FiShare2 className='h-7 w-7'/>
                  </button>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-3">{featuredRecipe.title}</h2>
              <p className="text-white mb-6">{featuredRecipe.description}</p>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center text-white">
                  <FiClock className="mr-2" />
                  <span>Prep: {featuredRecipe.prepTime} min</span>
                </div>
                <div className="flex items-center text-white">
                  <FiClock className="mr-2" />
                  <span>Cook: {featuredRecipe.cookTime} min</span>
                </div>
                <div className="px-3 py-1 bg-black text-white rounded-full text-sm">
                  {featuredRecipe.difficulty}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium text-white mb-3">Flavor Profile</h3>
                <div className="grid grid-cols-4 gap-4">
                  <FlavorMeter label="Sweet" value={featuredRecipe.flavorProfile.sweet} color="bg-amber-300" />
                  <FlavorMeter label="Savory" value={featuredRecipe.flavorProfile.savory} color="bg-amber-500" />
                  <FlavorMeter label="Spicy" value={featuredRecipe.flavorProfile.spicy} color="bg-red-400" />
                  <FlavorMeter label="Sour" value={featuredRecipe.flavorProfile.sour} color="bg-lime-400" />
                </div>
              </div>
              
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                View Full Recipe
              </button>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-8">
          <div className="flex overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${category === 'All' ? 'bg-amber-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Recipe Grid */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Latest Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-16 mb-8">
          <div className="bg-transparent rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Join Our Flavor Journey</h2>
            <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
              Get weekly unique recipes, flavor pairing tips, and culinary inspiration delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 bg-transparent border border-amber-700"
              />
              <button className="bg-transparent border border-amber-700 text-amber-600 px-6 py-3 rounded-lg font-medium hover:bg-amber-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Recipe Card Component
const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div className="bg-transparent border border-amber-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="">
        <img className='h-52 w-full' src={recipe.imageUrl} alt="" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="px-2 py-1 bg-black text-white rounded-full text-xs font-medium">
            {recipe.category}
          </span>
          <div className="flex gap-1">
            <button className="p-1 text-white hover:text-amber-600">
              <FiHeart className="h-7 w-7" />
            </button>
            <button className="p-1 text-white hover:text-amber-600">
              <FiBookmark className="h-7 w-7" />
            </button>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{recipe.title}</h3>
        <p className="text-white text-sm mb-4">{recipe.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-white text-sm">
            <FiClock className="mr-1" />
            <span>{recipe.prepTime + recipe.cookTime} min</span>
          </div>
          <div className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
            {recipe.difficulty}
          </div>
        </div>
      </div>
    </div>
  );
};

// Flavor Meter Component
const FlavorMeter = ({ label, value, color }: { label: string; value: number; color: string }) => {
  return (
    <div>
      <div className="text-sm text-white mb-1">{label}</div>
      <div className="h-2 bg-amber-600 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color}`} 
          style={{ width: `${value * 20}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Blog;