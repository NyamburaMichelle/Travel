import { useState } from "react";

export default function Destination() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "../../public/lions.jpg",
    "../../public/antelope1.jpg",
    "../../public/birdie.jpg",
    "../../public/elephant1.jpg",
    "../../public/elephants2.jpg",
    "../../public/ghazal.jpg",
    "../../public/ghazal2.jpg",
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-orange-200 min-h-screen">
      {/* Carousel */}
      <div className="relative w-full h-[970px] overflow-hidden bg-orange-400">
        {/* Carousel Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${slides[currentSlide]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Carousel Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="text-center">
            <p className="text-xl md:text-4xl mt-4 ">KENYA</p>
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

      {/* Service Description */}
      <div className="text-xl text-gray-800 flex justify-center bg-orange-200 mt-10 mb-10 w-full p-10">
        <h1>
        From the savannas of the Maasai Mara to the sparkling waters of the Indian Ocean, Kenya offers an unforgettable journey of discovery.
        </h1>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-20">

          {/* Card1*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="https://i.pinimg.com/736x/a6/f8/a1/a6f8a14ab11c37683502d4364264bbc7.jpg"
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
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>

          {/* Card2*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="https://i.pinimg.com/736x/a6/f8/a1/a6f8a14ab11c37683502d4364264bbc7.jpg"
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
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>

          {/* Card3*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="https://i.pinimg.com/736x/a6/f8/a1/a6f8a14ab11c37683502d4364264bbc7.jpg"
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
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>

          {/* Card4*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="https://i.pinimg.com/736x/a6/f8/a1/a6f8a14ab11c37683502d4364264bbc7.jpg"
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
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>

          {/* Card5*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="https://i.pinimg.com/736x/a6/f8/a1/a6f8a14ab11c37683502d4364264bbc7.jpg"
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
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>

          {/* Card6*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="https://i.pinimg.com/736x/a6/f8/a1/a6f8a14ab11c37683502d4364264bbc7.jpg"
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
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>

          {/* Card7*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="https://i.pinimg.com/736x/a6/f8/a1/a6f8a14ab11c37683502d4364264bbc7.jpg"
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
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>

          {/* Card8*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="https://i.pinimg.com/736x/a6/f8/a1/a6f8a14ab11c37683502d4364264bbc7.jpg"
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
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>

          {/* Card9*/}
          <div className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-[400px] object-cover"
                src="https://i.pinimg.com/736x/a6/f8/a1/a6f8a14ab11c37683502d4364264bbc7.jpg"
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
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
}
