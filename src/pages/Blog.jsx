import React from 'react';

export default function Blog() {
  return (
    <div className="bg-orange-200">
    <div className="relative bg-cover bg-center h-screen text-white flex items-center justify-center" style={{ backgroundImage: 'url(/giraffes.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold">Blog</h1>
      </div>
      </div>
      <div>
        <p>
        From the savannas of the Maasai Mara to the sparkling waters of the Indian Ocean, Kenya offers an unforgettable journey of discovery.
        </p>
      </div>
    
    </div>
  );
}
