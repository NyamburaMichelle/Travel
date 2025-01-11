export default function Booknow() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-orange-200">

        <div className="w-full max-w-md"> 
            
          <section className="rounded-lg shadow-lg p-6 bg-white h-[857px]">
          <div className="flex items-center justify-center my-4 bg-orange-600 h-[45px]">
            <h1 className="text-xl font-bold text-black">Tailor your trip</h1>
           </div>
            <div className="flex items-center justify-center my-4">
               
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
                      <input
                        placeholder="Kenya"
                        type="text"
                        className="w-full h-10 rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                        name="destination"
                      />
                    </div>
                  </div>
  
                  {/* Number of guests */}
                  <div>
                    <label className="text-lg font-medium text-gray-900">Number of guests</label>
                    <div className="mt-2">
                      <input
                        type="number"
                        className="w-full h-10 rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                        name="guests"
                      />
                    </div>
                  </div>
  
                  {/* Date from */}
                  <div>
                    <label className="text-lg font-medium text-gray-900">Date from</label>
                    <div className="mt-2">
                      <input
                        type="date"
                        className="w-full h-10 rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                        name="date_from"
                      />
                    </div>
                  </div>
  
                  {/* Date to */}
                  <div>
                    <label className="text-lg font-medium text-gray-900">Date to</label>
                    <div className="mt-2">
                      <input
                        type="date"
                        className="w-full h-10 rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                        name="date_to"
                      />
                    </div>
                  </div>
  
                  {/* Message */}
                  <div>
                    <label className="text-lg font-medium text-gray-900">Message</label>
                    <div className="mt-2">
                      <textarea
                        name="message"
                        className="w-full h-23 rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
  
                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full py-3 text-white bg-orange-600 hover:bg-blue-700 rounded-md font-semibold transition duration-300 ease-in-out"
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
  