import React, { useState } from "react";  

export default function Landing() {  
  const [currentSlide, setCurrentSlide] = useState(0);  

  const slides = [  
    "https://i.pinimg.com/736x/a6/f8/a1/a6f8a14ab11c37683502d4364264bbc7.jpg",  
    "https://images.pexels.com/photos/1796736/pexels-photo-1796736.jpeg?auto=compress&cs=tinysrgb&w=600",  
    "https://images.pexels.com/photos/20245837/pexels-photo-20245837/free-photo-of-galata-tower-in-renovation.jpeg?auto=compress&cs=tinysrgb&w=600",  
    "https://images.pexels.com/photos/3569263/pexels-photo-3569263.jpeg?auto=compress&cs=tinysrgb&w=600",  
    "https://images.pexels.com/photos/18862728/pexels-photo-18862728/free-photo-of-man-on-the-pathway.jpeg?auto=compress&cs=tinysrgb&w=600",  
  ];  

  const handleNext = () => {  
    setCurrentSlide((prev) => (prev + 1) % slides.length);  
  };  

  const handlePrev = () => {  
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);  
  };  

  return (  
    <div className="relative w-full h-screen">  
      {/* Carousel Background */}  
      <div  
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"  
        style={{  
          backgroundImage: `url(${slides[currentSlide]})`,  
        }}  
      />  

      {/* Carousel Content */}  
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">  
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white mb-80">
          <h1 className="text-5xl md:text-6xl font-bold">Africkson Safaris</h1>
          <p className="text-xl md:text-2xl mt-4 ">A Home Away From Home</p>
          <a
            href="#join"
            className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition duration-300"
          >
            Join Now
          </a>
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

      {/* Popular Destinations */}  
      <div className="absolute bottom-0 left-0 right-0 bg-transparent bg-opacity-80  px-4 sm:px-6 lg:px-40 ">  
        <h2 className="text-3xl font-bold mb-4 flex justify-center text-white">Popular Destinations</h2>  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">  

          {/* Small Card 1 */}
          <div className="max-w-xs bg-white rounded-lg shadow dark:bg-white dark:border-gray-700">
              <a href="#">
                  <img className="rounded-t-lg" src="https://images.pexels.com/photos/924631/pexels-photo-924631.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              </a>
              <div className="p-3">
                  <a href="#">
                      <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                  </a>
                  <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="#" className="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg className="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
              </div>
          </div>

          {/* Small Card 2 */}
          <div className="max-w-xs bg-white rounded-lg shadow dark:bg-white dark:border-gray-700">
              <a href="#">
                  <img className="rounded-t-lg" src="https://images.pexels.com/photos/924631/pexels-photo-924631.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              </a>
              <div className="p-3">
                  <a href="#">
                      <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                  </a>
                  <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="#" className="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg className="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
              </div>
          </div>

          {/* Small Card 3 */}
          <div className="max-w-xs bg-white rounded-lg shadow dark:bg-white dark:border-gray-700">
              <a href="#">
                  <img className="rounded-t-lg" src="https://images.pexels.com/photos/924631/pexels-photo-924631.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              </a>
              <div className="p-3">
                  <a href="#">
                      <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                  </a>
                  <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="#" className="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg className="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
              </div>
          </div>

          {/* Small Card 4 */}
          <div className="max-w-xs bg-white rounded-lg shadow dark:bg-white dark:border-gray-700">
              <a href="#">
                  <img className="rounded-t-lg" src="https://images.pexels.com/photos/924631/pexels-photo-924631.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              </a>
              <div className="p-3">
                  <a href="#">
                      <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                  </a>
                  <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="#" className="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg className="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
              </div>
          </div>

        </div>
      </div>  
    </div>  
  );  
}
