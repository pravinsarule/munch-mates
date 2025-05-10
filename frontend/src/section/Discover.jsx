

import React from "react";
// import Card from "../components/Card";
import Button from "../components/Button";

const Services = [
  {
    name: "Private Chefs",
    image:
      "https://static.wixstatic.com/media/7c969b_caa29433157b404bb7992ee8622d2cf8~mv2.webp/v1/fill/w_152,h_164,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/wix%201.webp",
    description:"Gourmet chefs in your own kitchen. Perfect for small gatherings or intimate dinners.",
  },
  {
    name: "Catering Solutions",
    image:
      "https://static.wixstatic.com/media/7c969b_8ab24cfaeffa437fba77bdb25a0ed142~mv2.webp/v1/fill/w_152,h_164,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/wix3.webp",
    description: "Tailored catering for events of all sizes, from weddings to corporate functions.",
  },
  {
    name: "Chef's Table",
    image:
      "https://static.wixstatic.com/media/7c969b_54d05f1e92f8450d9abf24823bc594fe~mv2.webp/v1/fill/w_145,h_164,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7c969b_54d05f1e92f8450d9abf24823bc594fe~mv2.webp",
    description: "An exclusive dining experience with a personal chef, tailored to your tastes.",
  },
  
  {
    name: "Grazing Tables",
    image:
      "https://static.wixstatic.com/media/7c969b_867f8ef4b4ef4da89c5a20639c1c5e7b~mv2.jpg/v1/fill/w_145,h_158,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/A%20grazing%20table.jpg",
    description: "Our artisanal grazing tables, dessert tables, and charcuterie boards.",
  },
  {
    name: "Event Rentals",
    image:
      "https://static.wixstatic.com/media/7c969b_54d05f1e92f8450d9abf24823bc594fe~mv2.webp/v1/fill/w_145,h_164,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7c969b_54d05f1e92f8450d9abf24823bc594fe~mv2.webp",
    description: "Elevate your event with our premium rentals, from tables to tents.",
  },
];

const Discover = () => {
  return (
    <div className="min-h-[80vh] p-6 sm:p-12 bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-yellow-400 text-xl uppercase tracking-widest font-semibold">
          Our Services
        </h2>
        <h1 className="text-4xl sm:text-5xl font-extrabold mt-2 text-gray-900 leading-tight drop-shadow-md">
          Savor Every Occasion with US!
        </h1>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          From grand weddings to cozy house parties, explore our handpicked
          catering options that are stealing the spotlight. Elevate your
          celebrations with flavors crafted to perfection! 🍽️🎉
        </p>
      </div>

      {/* Horizontal Scrollable Services */}
      <div className="mt-10 px-4 overflow-x-auto scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-100">
        <div className="flex space-x-6 pb-6">
          {Services.map((service, index) => (
            <div
              key={index}
              className="min-w-[250px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {service.name}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {service.description}
                  </p>
                  <Button
                    variant="pill"
                    className="mt-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-600 transition duration-300 text-sm"
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;