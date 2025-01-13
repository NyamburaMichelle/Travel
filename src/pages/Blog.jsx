import React from 'react';

export default function Blog() {
  return (
    <div className="bg-orange-200">
      <div
        className="relative bg-cover bg-center h-screen text-white flex items-center justify-center"
        style={{ backgroundImage: 'url(/giraffes.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold">Blog</h1>
        </div>
      </div>
      <div className="text-center text-xl my-8 px-4">
        <p>
          From the savannas of the Maasai Mara to the sparkling waters of the Indian Ocean, Kenya offers an unforgettable journey of discovery.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-20">
          {/* Card 1 */}
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

          {/* Card 2 */}
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

          {/* Top Posts Section */}
          <div className="bg-orange-200 shadow p-5 rounded">
            <h2 className="text-2xl font-semibold mb-4 ">Top Posts</h2>
            <ul className="space-y-2 text-lg">
              <li>1. TOP POSTS</li>
              <li>2. TOP POSTS</li>
              <li>3. TOP POSTS</li>
              <li>4. TOP POSTS</li>
              <li>5. TOP POSTS</li>
              <li>6. TOP POSTS</li>
            </ul>
          </div>

          {/* Card 3 */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow h-[547px]">
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
          ))}
        </div>
      </div>
    </div>
  );
}
