


// import React, { useState } from "react";
// // import Card from "../components/Card";
// import Button from "../components/Button";

// const occasions = [
//   "Corporate Events",
//   "Weddings & Engagements",
//   "Birthday Celebrations",
//   "Festivals",
//   "Housewarming Parties",
//   "Baby Showers",
//   "Weekend & Private Parties",
// ];

// const occasionFoods = {
//   "Corporate Events": [
//     {
//       name: "Gourmet Platters",
//       image: "https://tse1.mm.bing.net/th?id=OIP.QDpdXFNR5-o3lmz64myqPQHaE8&pid=Api&P=0&h=180",
//       description: "Premium cheese & meat platters for corporate meetings.",
//     },
//     {
//       name: "Mini Sandwiches",
//       image: "https://tse1.mm.bing.net/th?id=OIP.n5qwc9VkELYuurt8X2L8-wHaHa&pid=Api&P=0&h=180",
//       description: "Delicious bite-sized sandwiches for conferences.",
//     },
//     {
//       name: "Salad Bowls",
//       image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
//       description: "Fresh, healthy salads for a light corporate meal.",
//     },
//     {
//       name: "Coffee Break",
//       image: "https://tse3.mm.bing.net/th?id=OIP.XYRdLzXxxNaS_ZWH8QE2eQHaIo&pid=Api&P=0&h=180",
//       description: "Energizing coffee and pastries for breaks.",
//     },
//     {
//       name: "Canapés",
//       image: "https://tse2.mm.bing.net/th?id=OIP.DcKmqW-c427It4GcWkG_IAHaE8&pid=Api&P=0&h=180",
//       description: "Elegant bite-sized appetizers for networking.",
//     },
//   ],
//   "Weddings & Engagements": [
//     {
//       name: "Wedding Feast",
//       image: "https://tse3.mm.bing.net/th?id=OIP.c-jKRiEgHhHr_Sgn4UBMxQHaEV&pid=Api&P=0&h=180",
//       description: "Lavish multi-course meals for your big day.",
//     },
//     {
//       name: "Dessert Buffet",
//       image: "https://tse4.mm.bing.net/th?id=OIP.0vW_tDC53t_9z1IH53T2vwHaE7&pid=Api&P=0&h=180",
//       description: "A variety of sweets to end your meal on a high note.",
//     },
//     {
//       name: "Champagne & Cocktails",
//       image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
//       description: "Celebrate with handcrafted cocktails and premium drinks.",
//     },
//     {
//       name: "Wedding Cake",
//       image: "https://tse2.mm.bing.net/th?id=OIP.lPLCaZ2ljqKM5mF1SSRWsAHaLG&pid=Api&P=0&h=180",
//       description: "Stunning custom cakes for your special moment.",
//     },
//     {
//       name: "Seafood Platter",
//       image: "https://tse1.mm.bing.net/th?id=OIP.5AIR2_NXyb7k15GbYtDKGgHaHa&pid=Api&P=0&h=180",
//       description: "Fresh seafood delights for a luxurious feast.",
//     },
//   ],
//   "Birthday Celebrations": [
//     {
//       name: "Birthday Cakes",
//       image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
//       description: "Custom-designed cakes for every birthday.",
//     },
//     {
//       name: "Finger Foods",
//       image: "https://tse4.mm.bing.net/th?id=OIP.XHRnvAiZJVnpi1Ymwi7EowHaLH&pid=Api&P=0&h=180",
//       description: "Perfect bite-sized treats for birthday parties.",
//     },
//     {
//       name: "Ice Cream Station",
//       image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
//       description: "A fun ice cream station with multiple flavors!",
//     },
//     {
//       name: "Party Snacks",
//       image: "https://tse2.mm.bing.net/th?id=OIP.4tKGFQHRLxDu0v7OiGWZ3wHaE8&pid=Api&P=0&h=180",
//       description: "Tasty snacks to keep the party going.",
//     },
//     {
//       name: "Juice Bar",
//       image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
//       description: "Refreshing juices for all ages.",
//     },
//   ],
//   "Festivals": [
//     {
//       name: "Festive Sweets",
//       image: "https://tse3.mm.bing.net/th?id=OIP.rXKqlNSiSTUFTiFne64zdQHaE7&pid=Api&P=0&h=180",
//       description: "Traditional sweets for all festive occasions.",
//     },
//     {
//       name: "BBQ & Grilled Items",
//       image: "https://tse4.mm.bing.net/th?id=OIP.yquHIC1OmZkPyqeSXcj3YAHaE8&pid=Api&P=0&h=180",
//       description: "Perfectly grilled meats and veggies for festival feasts.",
//     },
//     {
//       name: "Street Food Stalls",
//       image: "https://tse1.mm.bing.net/th?id=OIP.DMHBn2GkT0fCWqKnxJRZfwHaGD&pid=Api&P=0&h=180",
//       description: "Authentic festival street foods at your event.",
//     },
//     {
//       name: "Spiced Drinks",
//       image: "https://tse4.mm.bing.net/th?id=OIP.mf-1wk-xpM8oKXnJ41U1hAHaKN&pid=Api&P=0&h=180",
//       description: "Warm, spiced beverages for festive cheer.",
//     },
//     {
//       name: "Roasted Nuts",
//       image: "https://tse4.mm.bing.net/th?id=OIP.lf5YD-aHLeDbNrxjAY8P1wHaE8&pid=Api&P=0&h=180",
//       description: "Crunchy roasted nuts for snacking.",
//     },
//   ],
//   "Housewarming Parties": [
//     {
//       name: "Home Cooked Meals",
//       image: "https://tse4.mm.bing.net/th?id=OIP.DXBsCc8nxejDBgA1MCkRegHaE7&pid=Api&P=0&h=180",
//       description: "Comforting home-cooked meals for your guests.",
//     },
//     {
//       name: "Mocktails & Beverages",
//       image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
//       description: "Refreshing drinks to accompany your housewarming party.",
//     },
//     {
//       name: "Cheese Board",
//       image: "https://tse4.mm.bing.net/th?id=OIP.6jxts9HQzhQbqLHSC-0iRwHaII&pid=Api&P=0&h=180",
//       description: "A delightful assortment of cheeses and crackers.",
//     },
//     {
//       name: "Baked Goods",
//       image: "https://tse3.mm.bing.net/th?id=OIP.R3Jc3x_9gvhhfBcaOTRDDwAAAA&pid=Api&P=0&h=180",
//       description: "Freshly baked treats for a cozy vibe.",
//     },
//     {
//       name: "Fruit Platter",
//       image: "https://tse4.mm.bing.net/th?id=OIP.htT6ACWLo-eXcz_2fRF51QHaHY&pid=Api&P=0&h=180",
//       description: "Colorful fresh fruits for a healthy touch.",
//     },
//   ],
//   "Baby Showers": [
//     {
//       name: "Cupcake Tower",
//       image: "https://tse1.mm.bing.net/th?id=OIP.C3rCeb03L1tw7LC3DgW2SQHaE6&pid=Api&P=0&h=180",
//       description: "Beautifully crafted cupcakes for the baby shower.",
//     },
//     {
//       name: "Healthy Snacks",
//       image: "https://tse4.mm.bing.net/th?id=OIP.khf8W5uEXAOut8YdTu09UgHaE8&pid=Api&P=0&h=180",
//       description: "Light and nutritious snacks for the event.",
//     },
//     {
//       name: "Mini Pastries",
//       image: "https://tse1.mm.bing.net/th?id=OIP.DB-JaWSS9PTO0vEt_rd4pQHaE8&pid=Api&P=0&h=180",
//       description: "Delicate pastries for a sweet celebration.",
//     },
//     {
//       name: "Juice Station",
//       image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
//       description: "Fresh juices for a refreshing treat.",
//     },
//     {
//       name: "Themed Cookies",
//       image: "https://tse3.mm.bing.net/th?id=OIP.3CFek2R9wlFzyWNNW2jtbgHaE8&pid=Api&P=0&h=180",
//       description: "Adorable cookies shaped for the occasion.",
//     },
//   ],
//   "Weekend & Private Parties": [
//     {
//       name: "Pizza & Pasta",
//       image: "https://tse4.mm.bing.net/th?id=OIP.Tyfr1VGj_hLtvMjWaBx8jQHaF4&pid=Api&P=0&h=180",
//       description: "Italian delicacies for casual weekend parties.",
//     },
//     {
//       name: "Cocktail Bar",
//       image: "https://tse4.mm.bing.net/th?id=OIP.zcxwXRxgNncf9WOsTs-HvgHaE6&pid=Api&P=0&h=180",
//       description: "A selection of handcrafted cocktails and drinks.",
//     },
//     {
//       name: "BBQ Skewers",
//       image: "https://tse4.mm.bing.net/th?id=OIP.DC3rQ0ku5oY-7nvGJJmvtgHaE8&pid=Api&P=0&h=180",
//       description: "Juicy grilled skewers for a fun night.",
//     },
//     {
//       name: "Nachos & Dips",
//       image: "https://tse4.mm.bing.net/th?id=OIP.ZEA8Jt_p_0aIZdToJAf2WwHaF8&pid=Api&P=0&h=180",
//       description: "Crispy nachos with flavorful dips.",
//     },
//     {
//       name: "Dessert Shots",
//       image: "https://tse3.mm.bing.net/th?id=OIP.__82zA1eAGA5LT9_QNkTIwHaEK&pid=Api&P=0&h=180",
//       description: "Mini desserts in shot glasses for a sweet finish.",
//     },
//   ],
// };

// const OccasionFood = () => {
//   const [selectedOccasion, setSelectedOccasion] = useState(occasions[0]);

//   return (
//     <div className="min-h-[80vh] p-6 sm:p-12 bg-gradient-to-br from-gray-50 via-white to-yellow-50">
//       <div className="container mx-auto text-center px-4">
//         <h2 className="text-yellow-400 text-sm uppercase tracking-widest font-semibold">
//           Select an Occasion
//         </h2>
//         <h1 className="text-3xl sm:text-5xl font-extrabold mt-2 text-gray-900 leading-tight drop-shadow-md">
//           Curate Your Perfect Celebration Menu!
//         </h1>
//       </div>

//       {/* Occasion Slider */}
//       <div className="mt-10 px-4">
//         <div className="relative">
//           <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 pb-4">
//             {occasions.map((occasion, index) => (
//               <Button
//                 key={index}
//                 variant="pill"
//                 selected={selectedOccasion === occasion}
//                 className={`flex-shrink-0 snap-center text-sm sm:text-base px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${
//                   selectedOccasion === occasion
//                     ? "bg-yellow-500 text-black font-semibold"
//                     : "bg-white text-gray-800 border border-gray-200 hover:bg-yellow-100 hover:shadow-xl"
//                 }`}
//                 onClick={() => setSelectedOccasion(occasion)}
//               >
//                 {occasion}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Display Food Options */}
//       {selectedOccasion && (
//         <div className="mt-12 px-4 animate-fadeIn">
//           <h3 className="text-center text-3xl font-bold text-gray-800 mb-8 drop-shadow-sm">
//             {selectedOccasion} Specialties
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//             {occasionFoods[selectedOccasion]?.map((food, index) => (
//               <div
//                 key={index}
//                 className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
//               >
//                 <div className="bg-white rounded-xl shadow-md overflow-hidden">
//                   <img
//                     src={food.image}
//                     alt={food.name}
//                     className="w-full h-40 object-cover"
//                   />
//                   <div className="p-4">
//                     <h4 className="text-lg font-semibold text-gray-900">
//                       {food.name}
//                     </h4>
//                     <p className="text-sm text-gray-600 mt-1">
//                       {food.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OccasionFood;
import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import axios from "axios";

const IMAGE_BASE_URL = "http://localhost:5000/uploads/"; // Update with your actual image base URL

const occasions = [
  "Corporate Events",
  "Weddings & Engagements",
  "Birthday Celebrations",
  "Festivals",
  "Housewarming Parties",
  "Baby Showers",
  "Weekend & Private Parties",
];

const OccasionFood = () => {
  const [selectedOccasion, setSelectedOccasion] = useState(occasions[0]);
  const [occasionFoods, setOccasionFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch occasion foods from the backend API
  const fetchOccasionFoods = async (occasion) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/occasion-cards/getByCategory/${occasion}`
      );
      setOccasionFoods(response.data); // Assuming the response contains an array of foods
    } catch (err) {
      setError("Failed to load foods. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch food items whenever selected occasion changes
    fetchOccasionFoods(selectedOccasion);
  }, [selectedOccasion]);

  return (
    <div className="min-h-[80vh] p-6 sm:p-12 bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-yellow-400 text-sm uppercase tracking-widest font-semibold">
          Select an Occasion
        </h2>
        <h1 className="text-3xl sm:text-5xl font-extrabold mt-2 text-gray-900 leading-tight drop-shadow-md">
          Curate Your Perfect Celebration Menu!
        </h1>
      </div>

      {/* Occasion Slider */}
      <div className="mt-10 px-4">
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 pb-4">
            {occasions.map((occasion, index) => (
              <Button
                key={index}
                variant="pill"
                selected={selectedOccasion === occasion}
                className={`flex-shrink-0 snap-center text-sm sm:text-base px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  selectedOccasion === occasion
                    ? "bg-yellow-500 text-black font-semibold"
                    : "bg-white text-gray-800 border border-gray-200 hover:bg-yellow-100 hover:shadow-xl"
                }`}
                onClick={() => setSelectedOccasion(occasion)}
              >
                {occasion}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Display Food Options */}
      <div className="mt-12 px-4 animate-fadeIn">
        <h3 className="text-center text-3xl font-bold text-gray-800 mb-8 drop-shadow-sm">
          {selectedOccasion} Specialties
        </h3>

        {/* Loading state */}
        {loading && <p className="text-center text-lg text-gray-600">Loading...</p>}

        {/* Error state */}
        {error && <p className="text-center text-lg text-red-600">{error}</p>}

        {/* Display fetched food items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {occasionFoods
            .filter((card) => card.category === selectedOccasion) // Filter cards by category
            .map((card, index) => (
              <div
                key={index}
                className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  {/* Image with fallback */}
                  <img
                    src={
                      card.image_url
                        ? `${IMAGE_BASE_URL}${card.image_url}`  // Prepend base URL if image_url is relative
                        : "https://via.placeholder.com/100"    // Fallback image
                    }
                    alt={card.title || "Food Item"}  // Use card.title as alt text if available
                    className="w-full h-40 object-cover rounded-t-xl"
                  />
                  <div className="p-4">
                    {/* Title of the card */}
                    <h4 className="text-lg font-semibold text-gray-900">
                      {card.title || "No Title Available"}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {card.description || "No description available."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OccasionFood;
