import { useState } from 'react';

export default function Services1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);  // Define the openFaq state
  
  const slides = [
    "../../public/lady.jpg",
    "../../public/outdoor1.jpg",
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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index); // Toggle open/close of the FAQ
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
            <p className="text-5xl md:text-4xl mt-4 font-bold">EXPLORE AFRICA IN OUR FLEET</p>
          </div>
          <div>
            <h4 className="mt-3 text-xl"> Affordable, flexible, fully equipped</h4>
          </div>
          <button className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-orange-400 bg-opacity-80 text-yellow-400 rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md mt-3">
            GET A QUOTE
          </button>
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

      <div className="max-w-7xl mx-auto bg-orange-200 shadow-lg rounded-lg p-6 space-y-8">
        {/* Vehicles Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-5">Vehicles</h2>
          <p className="text-gray-700">
            4x4 Cars - per day, unlimited mileage<br />
            Short/Long Range Rover<br />
            Short/Long Land Rover<br />
            Minibus/Van
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Afrisson Safaris offers reduced prices to customers who want our services for a long rental period.
          </p>
        </div>

        <hr className="border-black" />

        {/* Camping Equipment Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Camping Equipment</h2>
          <p className="text-gray-700">
            Tents, beddings, table, chairs, kitchen utensils...<br />
            Roof Top Tent
          </p>
          <p className="mt-4 text-sm text-gray-600">Per day, each tent</p>
        </div>

        <hr className="border-black" />

        {/* Driver/Chef Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Driver/Chef</h2>
          <p className="text-gray-700">Help to do shopping (prior)</p>
          <p className="mt-4 text-sm text-gray-600">
            The cost doesn’t include their food, park fees, and accommodation, which must be taken care of by the client. He will bring his own tent.
          </p>
        </div>

        <hr className="border-black" />

        {/* Booking/Availability Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Booking/Availability</h2>
          <p className="text-gray-700">
            To confirm your booking, a deposit of 20% of the total fee is required upon receiving the invoice.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            The remaining balance must be paid at least 14 days prior to the start of the hire period to secure your reservation.
          </p>
        </div>

        <hr className="border-black" />

        {/* FAQ Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">FAQs</h2>
          <div className="space-y-4">
            {/* FAQ Item */}
            <div>
  <button
    className="w-full flex justify-between items-center p-4 bg-yellow-300 text-black font-semibold rounded-lg focus:outline-none"
    onClick={() => toggleFaq(0)} 
  >
    <span>Do I need an international driver’s license?</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
    </svg>
  </button>
  {openFaq === 0 && (
    <div className="mt-2 p-4 bg-yellow-100 rounded-lg">
      <p className="text-sm text-gray-700">If you're visiting from abroad, an international driver's license is generally recommended, though it may not be required depending on your country of origin and the length of your stay. Please contact us to confirm the requirements for your specific case.</p>
    </div>
  )}
</div>


            {/* FAQ Item */}
            <div>
              <button
                className="w-full flex justify-between items-center p-4 bg-yellow-300 text-black font-semibold rounded-lg focus:outline-none"
                onClick={() => toggleFaq(1)} // Toggle second FAQ
              >
                <span>What happens in case of a breakdown?</span>
                <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
              </button>
              {openFaq === 1 && (
                <div className="mt-2 p-4 bg-yellow-100 rounded-lg">
                  <p className="text-sm text-gray-700"> In the event of a breakdown, we provide 24/7 roadside assistance to ensure your safety and minimize any inconvenience. Simply contact us immediately, and our team will assist you in resolving the issue as quickly as possible. If necessary, we will arrange for a replacement vehicle.

</p>
                </div>
              )}
            </div>

            {/* FAQ Item */}
            <div>
              <button
                className="w-full flex justify-between items-center p-4 bg-yellow-300 text-black font-semibold rounded-lg focus:outline-none"
                onClick={() => toggleFaq(2)} // Toggle third FAQ
              >
                <span>Can I modify or cancel my booking?</span>
                <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
              </button>
              {openFaq === 2 && (
                <div className="mt-2 p-4 bg-yellow-100 rounded-lg">
                  <p className="text-sm text-gray-700">Yes, you can modify or cancel your booking, subject to our terms and conditions. Cancellations made within 48 hours before the rental period begins may be eligible for a refund or rescheduling. Please refer to our cancellation policy for more details or contact us directly for assistance.





</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
