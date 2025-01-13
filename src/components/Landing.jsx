import { useState } from "react";

export default function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "../../public/cheetah.jpg",
    "../../public/elephant1.jpg",
    "../../public/ghazal2.jpg",
    "../../public/waterfall.jpg",
    "../../public/hicker.jpg",
    "../../public/elephants2.jpg",
    "../../public/zebras2.jpg",
    "../../public/tourists.jpg",
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      {/* Carousel */}
      <div className="relative w-full h-[1000px] overflow-hidden bg-orange-100">
        {/* Carousel Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${slides[currentSlide]})`,
            backgroundSize: "cover", 
            backgroundPosition: "center", 
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Carousel Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="text-center">
            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold">Africkson Safaris</h1>
            {/* Subtitle */}
            <p className="text-xl md:text-2xl mt-4">A Home Away From Home</p>
            
            <div className="mt-8">
              <a
                href="/booknow"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition duration-300"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute top-1/2 left-5 z-30 transform -translate-y-1/2 flex items-center justify-center px-4 py-2 bg-transparent rounded-full hover:bg-gray-800/90"
        >
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          className="absolute top-1/2 right-5 z-30 transform -translate-y-1/2 flex items-center justify-center px-4 py-2 bg-transparent rounded-full hover:bg-gray-800/90"
        >
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 9l4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </button>
      </div>

      {/* Popular destinations */}
      <div className="py-16 bg-orange-200 text-center">
        <h2 className="text-4xl text-gray-800 mb-6">POPULAR DESTINATIONS</h2>

         {/*Cards*/ }
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-20">
  {/* Small Card 1 */}
  <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-white h-[547px]">
    <a href="#">
      <img
        className="rounded-t-lg w-full h-[400px] object-cover"
        src="../../public/zebra1.jpg"
        alt="Zebra"
      />
    </a>
    <div className="p-4">
      <a href="#">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </h5>
      </a>
      <p className="text-sm text-gray-700">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </div>
  </div>

  {/* Small Card 2 */}
  <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-white h-[547px]">
    <a href="#">
      <img
        className="rounded-t-lg w-full h-[400px] object-cover"
        src="../../public/chimpanzee.jpg"
        alt="Chimpanzee"
      />
    </a>
    <div className="p-4">
      <a href="#">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </h5>
      </a>
      <p className="text-sm text-gray-700">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </div>
  </div>

  {/* Small Card 3 */}
  <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-white h-[547px]">
    <a href="#">
      <img
        className="rounded-t-lg w-full h-[400px] object-cover"
        src="../../public/room1.jpg"
        alt="Room"
      />
    </a>
    <div className="p-4">
      <a href="#">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </h5>
      </a>
      <p className="text-sm text-gray-700">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </div>
  </div>
</div>


      </div>

      {/*ABOUT*/}
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12 bg-orange-200">
      
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
        <img 
          src="../../public/twolions.jpg" 
          alt="Kaaba with people surrounding it" 
          className="w-full h-[800px] object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full lg:w-1/2 text-center lg:text-left lg:ml-8">
        <h1 className="text-3xl  text-gray-800 mb-4">ABOUT</h1>
        <p className="text-gray-700 text-lg mb-4">
          Founded in 2018, Africkson Safaris had a vision to share the vibrant essence of Africa with the rest of the world. Our passion is rooted in creating meaningful connections by welcoming you into our cultures with warmth and authenticity, ensuring you feel at home, a home away from home.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Our tours are more than just adventures; they are opportunities to immerse yourself in Africa's rich culture. We will indulge you in the traditions and stories of our communities, savor the flavors of local cuisine, and discover Africa through the eyes of its people. As you journey with us, you'll also explore the continent's landscapes, from breathtaking wildlife safaris to caves, forests, the Great Migration, and so much more.
        </p>
        <p className="text-gray-700 text-lg">
          Our goal is to ensure your experience is unforgettable, heartfelt, and filled with wonder, where every moment tells a story, and every journey feels like coming home.
        </p>
      </div>
    </div>
           


{/* BLOG */}
<div>
  <h1 className="text-5xl text-gray-800 mb-6 flex justify-center">Blog</h1>
  <div className="bg-orange-200 w-full px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Image 1 */}
      <div className="bg-white border border-gray-200 rounded-lg shadow h-[600px] w-full">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-[400px] object-cover"
            src="https://i.pinimg.com/736x/a6/f8/a1/a6f8a14ab11c37683502d4364264bbc7.jpg"
            alt="Noteworthy technology acquisitions 2021"
          />
        </a>
        <div className="p-3">
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-2 text-sm text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </div>
      </div>

      {/* Image 2 */}
      <div className="bg-white border border-gray-200 rounded-lg shadow h-[600px] w-full">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-[400px] object-cover"
            src="https://i.pinimg.com/736x/a6/f8/a1/a6f8a14ab11c37683502d4364264bbc7.jpg"
            alt="Noteworthy technology acquisitions 2021"
          />
        </a>
        <div className="p-3">
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-2 text-sm text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </div>
      </div>

      {/* Image 3 */}
      <div className="bg-white border border-gray-200 rounded-lg shadow h-[600px] w-full">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-[400px] object-cover"
            src="https://i.pinimg.com/736x/a6/f8/a1/a6f8a14ab11c37683502d4364264bbc7.jpg"
            alt="Noteworthy technology acquisitions 2021"
          />
        </a>
        <div className="p-3">
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-2 text-sm text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>







    </div>
  );
}
