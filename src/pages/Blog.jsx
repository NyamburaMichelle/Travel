import React from 'react'

export default function Blog() {
  return (
    <div>
      <h1 className="text-5xl mt-20 font-bold text-gray-800 mb-4 flex justify-center">Blog</h1>
      <div>
        <div className="flex justify-center items-center bg-gray-100 w-full">
          <div className="flex flex-col lg:flex-row gap-4 w-full justify-center px-4">
            {/* Image 1 */}
            <div className="relative w-full lg:w-1/3 h-[300px] md:h-[400px]">
              <img
                src="https://images.pexels.com/photos/937690/pexels-photo-937690.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Placeholder 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <h1 className="text-white font-bold text-2xl">Day Trips From Rome</h1>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative w-full lg:w-1/3 h-[300px] md:h-[400px]">
              <img
                src="https://images.pexels.com/photos/18058159/pexels-photo-18058159/free-photo-of-an-antique-church-with-stone-walls-in-france.png?auto=compress&cs=tinysrgb&w=600"
                alt="Placeholder 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <h1 className="text-white font-bold text-2xl">The Pilgrims' Center at PTAA</h1>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative w-full lg:w-1/3 h-[300px] md:h-[400px]">
              <img
                src="https://images.pexels.com/photos/19755497/pexels-photo-19755497/free-photo-of-statue-of-pope.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Placeholder 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <h1 className="text-white font-bold text-2xl">Pope Benedict XVI - Easter Mass</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
