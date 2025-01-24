'use client'

const Specialty = () => {
    const cardData = [
        { icon: 'https://i.postimg.cc/52TrNZww/Screenshot-2025-01-08-211100-removebg-preview.png', text: 'Finest Chef', image: 'https://static.standard.co.uk/2023/03/22/09/newFile-5.jpg?trim=0,709,0,180&quality=75&auto=webp&width=960' },
        { icon: 'https://i.postimg.cc/kGJ1p9md/Screenshot-2025-01-08-211221-removebg-preview.png', text: 'Beautiful Ambience', image: 'https://media.istockphoto.com/id/1054319798/photo/group-of-happy-friends-having-breakfast-in-the-restaurant.jpg?s=612x612&w=0&k=20&c=rdb2gaIzr5n2eZthvK1B73LQa3yapubVD2AM_-SF50o=' },
        { icon: 'https://i.postimg.cc/c459XVkV/Screenshot-2025-01-08-211331-removebg-preview.png', text: 'Safe Food Takeout', image: 'https://media.licdn.com/dms/image/v2/D4E12AQEKvSJVzT_MqQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1725869292492?e=2147483647&v=beta&t=8d-1bG-J098hUP1zpOf_H2ye4KVXSEuN0WpdoJlwLqo' },
        { icon: 'https://i.postimg.cc/P5g6k1jy/Screenshot-2025-01-08-211401-removebg-preview.png', text: 'Famous Cuisines', image: 'https://media.timeout.com/images/105859768/750/422/image.jpg' },
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
              <p className="text-white font-normal nav px-4 text-center">
                This is a special dish made with love and the finest ingredients.
                Discover more by clicking on the card.
              </p>
            </div>
          </div>
        </>
      );
};

export default Specialty;