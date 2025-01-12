'use client'

const Specialty = () => {
    const cardData = [
        { icon: 'https://i.postimg.cc/52TrNZww/Screenshot-2025-01-08-211100-removebg-preview.png', text: 'Finest Chef', image: '/images/burger.jpg' },
        { icon: 'https://i.postimg.cc/kGJ1p9md/Screenshot-2025-01-08-211221-removebg-preview.png', text: 'Beautiful Ambience', image: '/images/pizza.jpg' },
        { icon: 'https://i.postimg.cc/c459XVkV/Screenshot-2025-01-08-211331-removebg-preview.png', text: 'Safe Food Takeout', image: '/images/sushi.jpg' },
        { icon: 'https://i.postimg.cc/P5g6k1jy/Screenshot-2025-01-08-211401-removebg-preview.png', text: 'Famous Cuisines', image: '/images/salad.jpg' },
      ];
      return (
        <section className="flex flex-wrap md:flex-nowrap items-center justify-between bg-[#1d1515] p-8 gap-28">
          {/* Left Side - Cards */}
          <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-1 mt-28">
            {cardData.map((item, index) => (
              <div
                key={index}
                className="relative  bg-[#2e2323] p-6 transition-all duration-300 hover:shadow-xl"
                onMouseEnter={(e) => toggleHover(e, true)}
                onMouseLeave={(e) => toggleHover(e, false)}
              >
                <CardContent icon={item.icon} text={item.text} image={item.image} />
              </div>
            ))}
          </div>
    
          {/* Right Side - Text Content */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left px-5">
            <h1 className="text-4xl nav mb-4 text-white">Our Specialty</h1>
            <p className="mb-6 head text-2xl text-amber-600">
            Find your Favourite meal from the delicious options we have
            </p>
            <p className="mb-10 nav text-md font-normal text-white">
            Culinary artists often take inspiration from various cuisines, cultural traditions, and personal experiences to create their own signature dishes.
            </p>
            <button className="px-6 py-3 bg-amber-700 text-white hover:bg-amber-500">
              Explore More
            </button>
          </div>
        </section>
      );
    
      function toggleHover(e: React.MouseEvent<HTMLDivElement>, isHovered: boolean) {
        const card = e.currentTarget;
        const content = card.querySelector('.card-content') as HTMLDivElement;
        const image = card.querySelector('.card-image') as HTMLDivElement;
    
        if (isHovered) {
          content.classList.add('hidden');
          image.classList.remove('hidden');
        } else {
          content.classList.remove('hidden');
          image.classList.add('hidden');
        }
      }
    };
    
    interface CardContentProps {
      icon: string;
      text: string;
      image: string;
    }
    
    const CardContent = ({ icon, text, image }: CardContentProps) => {
      return (
        <>
          <div className="card-content flex items-center justify-center flex-col h-60">
            <img className="mb-2 w-28" src={icon} alt="" />
            <p className="text-white nav text-md">{text}</p>
          </div>
          <div
            className="card-image absolute inset-0 bg-cover bg-center rounded-lg hidden"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-white px-4 text-center">
                This is a special dish made with love and the finest ingredients.
                Discover more by clicking on the card.
              </p>
            </div>
          </div>
        </>
      );
};

export default Specialty;