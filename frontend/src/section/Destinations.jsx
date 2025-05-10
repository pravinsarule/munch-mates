// import React from "react";
// import { useState } from "react";
// import Button from "../components/Button";
// import CardComponent from "../components/CardComponent";

// const countries = [
//   {
//     name: "Indonesia",
//     destinations: "12,392 Destinations",
//     image:
//       "https://storage.googleapis.com/a1aa/image/K9Xw0BxuMzsFOPfjWwSa-yh5JiyYisKYnm3UQkdfEAI.jpg",
//   },
//   {
//     name: "Italy",
//     destinations: "9,865 Destinations",
//     image:
//       "https://storage.googleapis.com/a1aa/image/K9Xw0BxuMzsFOPfjWwSa-yh5JiyYisKYnm3UQkdfEAI.jpg",
//   },
//   {
//     name: "Japan",
//     destinations: "10,231 Destinations",
//     image:
//       "https://storage.googleapis.com/a1aa/image/K9Xw0BxuMzsFOPfjWwSa-yh5JiyYisKYnm3UQkdfEAI.jpg",
//   },
//   {
//     name: "Thailand",
//     destinations: "9,232 Destinations",
//     image:
//       "https://storage.googleapis.com/a1aa/image/K9Xw0BxuMzsFOPfjWwSa-yh5JiyYisKYnm3UQkdfEAI.jpg",
//   },
//   {
//     name: "Turkey",
//     destinations: "7,951 Destinations",
//     image:
//       "https://storage.googleapis.com/a1aa/image/K9Xw0BxuMzsFOPfjWwSa-yh5JiyYisKYnm3UQkdfEAI.jpg",
//   },
//   {
//     name: "France",
//     destinations: "15,433 Destinations",
//     image:
//       "https://storage.googleapis.com/a1aa/image/K9Xw0BxuMzsFOPfjWwSa-yh5JiyYisKYnm3UQkdfEAI.jpg",
//   },
//   {
//     name: "USA",
//     destinations: "20,932 Destinations",
//     image:
//       "https://storage.googleapis.com/a1aa/image/K9Xw0BxuMzsFOPfjWwSa-yh5JiyYisKYnm3UQkdfEAI.jpg",
//   },
// ];

// const categories = [
//   "All",
//   "Asian",
//   "European",
//   "Middle-East",
//   "Beach Paradise",
//   "Nature Retreats",
//   "Romantic Escapes",
//   "Cultural Immersion",
//   "African",
//   "American",
// ];

// const Destinations = () => {
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   return (
//     <>
//       <div className="bg-white min-h-screen p-6 sm:p-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           <div className="mt-20 ">
//             <h2 className="text-sm font-semibold text-gray-500">DISCOVER</h2>
//             <h1 className="text-4xl font-bold text-gray-900 mt-2 leading-tight">
//               Best Country Recommendation to Visit on 2025
//             </h1>
//             <p className="text-gray-500 mt-4">
//               Explore our curated list of the best countries to visit in 2025
//               and discover incredible destinations waiting to be explored.
//             </p>

//             <div className="flex flex-wrap gap-3 mt-6">
//               {categories.map((category, index) => (
//                 <Button
//                   key={index}
//                   variant="pill"
//                   selected={selectedIndex === index}
//                   className="text-sm"
//                   onClick={() => setSelectedIndex(index)}
//                 >
//                   {category}
//                 </Button>
//               ))}
//             </div>
//           </div>
//           <div className="grid grid-cols-3 grid-rows-3 gap-2 relative">
//             {countries.map((country, index) => (
//               <CardComponent
//                 key={index}
//                 image={country.image}
//                 name={country.name}
//                 destinations={country.destinations}
//                 className={`
//             ${index === 0 ? "col-span-2 row-span-2 h-[250px]" : "h-[120px]"} 
//             ${index === 1 || index === 2 ? "col-span-1 row-span-1" : ""} 
//             ${index === 3 ? "col-span-1 row-span-1 h-[120px]" : ""} 
//             ${index === 4 ? "col-span-2 row-span-1" : ""} 
//             ${index === 5 ? "col-span-1 row-span-1" : ""} 
//             ${index === 6 ? "col-span-1 row-span-1" : ""}
//           `}
//               />
//             ))}

//             <div className="flex justify-center items-center col-span-1 row-span-1 h-[50px] mt-18 bg-gray-200 text-blue-700 font-medium rounded-full cursor-pointer hover:bg-gray-300 transition">
//               <Button className="px-4 py-2 text-sm ">
//                 Find More Countries <span>&rarr;</span>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Destinations;
