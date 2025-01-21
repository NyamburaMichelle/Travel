import { useState } from "react";

export default function Booknow() {
  const [adults, setAdults] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");

  // Handler to increase the number of adults
  const increaseAdults = () => setAdults(adults + 1);

  // Handler to decrease the number of adults
  const decreaseAdults = () => {
    if (adults > 1) setAdults(adults - 1);
  };

  // Handler for date change
  const handleDateChange = (event) => setSelectedDate(event.target.value);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-200 ">
      <div className="w-full max-w-md mt-20">
        <section className="rounded-lg shadow-lg p-4 bg-orange-100 h-auto">
          <div className="flex items-center justify-center my-3 bg-orange-600 h-[40px]">
            <h1 className="text-xl font-bold text-black">Tailor your trip</h1>
          </div>

          <div className="flex items-center justify-center my-3">
            <div className="w-full">
              <form className="space-y-2">
                {/* Name */}
                <div>
                  <label className="text-lg font-medium text-gray-900">Name</label>
                  <div className="mt-2">
                    <input
                      placeholder="Full Name"
                      type="text"
                      className="w-full h-10 rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                      name="user_name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-lg font-medium text-gray-900">Email</label>
                  <div className="mt-2">
                    <input
                      placeholder="Email"
                      type="email"
                      className="w-full h-10 rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                      name="email"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="text-lg font-medium text-gray-900">Phone Number</label>
                  <div className="mt-2">
                    <input
                      placeholder="Phone Number"
                      type="text"
                      className="w-full h-10 rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                      name="phone_number"
                    />
                  </div>
                </div>

                   {/* Where to? */}
                
                   <div>
  <label className="text-lg font-medium text-gray-900">Where to?</label>
  <div className="mt-2">
    <select
      className="w-full h-10 rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 text-gray-400"
      name="destination"
    >
      <option value="" disabled selected hidden>Choose a destination</option>
      <option value="kenya">Kenya</option>
      <option value="uganda">Uganda</option>
      <option value="namibia">Namibia</option>
      <option value="south africa">South Africa</option>
      <option value="morocco">Morocco</option>
      <option value="zanzibar">Zanzibar</option>
      <option value="madagascar">Madagascar</option>
      
    </select>
  </div>
</div>

                {/* Guests and Date Component */}
                <div className="rounded-md border border-gray-300 bg-orange-400 p-4">
                  <h2 className="text-lg font-medium text-center text-black mb-4">
                    Select Participants and Date
                  </h2>
                  <div className="flex space-x-4 justify-between">
                    {/* Guests */}
                    <div className="relative w-1/2">
                      <div className="w-full h-10 flex items-center justify-between px-4 rounded-md bg-white text-black text-sm border border-gray-300">
                        <span className="flex items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 11a4 4 0 100-8 4 4 0 000 8zm-6 8a6 6 0 1112 0H4z" />
                          </svg>
                          <span>Adult x {adults}</span>
                        </span>
                        <div className="flex space-x-2">
                          <button
                            type="button"
                            className="text-gray-600 hover:text-black"
                            onClick={decreaseAdults}
                          >
                            -
                          </button>
                          <button
                            type="button"
                            className="text-gray-600 hover:text-black"
                            onClick={increaseAdults}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="relative w-1/2">
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className="w-full h-10 px-4 rounded-md bg-white text-black text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-lg font-medium text-gray-900">Message</label>
                  <div className="mt-2">
                    <textarea
                      name="message"
                      className="w-full h-20 rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 text-white bg-orange-600 hover:bg-orange-700 rounded-md font-semibold transition duration-300 ease-in-out"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
