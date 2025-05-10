// import React from "react";
// import menuData from "../data/menuData"; // Import menu data

// const Menu = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-6">
//       <div className="container mx-auto text-center">
//         <h2 className="text-gray-500 text-sm uppercase tracking-widest font-medium">
//           Explore Our Offerings
//         </h2>
//         <h1 className="text-4xl sm:text-5xl font-bold mt-2 text-gray-800">
//           Our Menu
//         </h1>
//         <p className="text-gray-500 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
//           Discover a variety of culinary delights tailored for every occasion, crafted with care and precision.
//         </p>
//       </div>

//       <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {menuData.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white rounded-lg shadow-sm border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-md"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full h-48 object-cover rounded-t-lg"
//             />
//             <div className="p-6">
//               <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
//               <p className="text-gray-500 text-sm mt-2">{item.description}</p>
//               <p className="text-gray-700 font-bold mt-3">₹{item.price} / per plate</p>
//               <button className="mt-4 px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-full hover:bg-gray-300 transition duration-300 w-full">
//                 Order Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Menu;


// src/pages/Menu.js or wherever you have this file

// import React, { useEffect, useState } from "react";

// const Menu = () => {
//   const [menuData, setMenuData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch menu from API
//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/menu/");
//         if (!response.ok) throw new Error("Failed to fetch menu data");
//         const data = await response.json();
//         setMenuData(data);
//       } catch (error) {
//         console.error("Error fetching menu:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMenu();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-6">
//       <div className="container mx-auto text-center">
//         <h2 className="text-gray-500 text-sm uppercase tracking-widest font-medium">
//           Explore Our Offerings
//         </h2>
//         <h1 className="text-4xl sm:text-5xl font-bold mt-2 text-gray-800">
//           Our Menu
//         </h1>
//         <p className="text-gray-500 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
//           Discover a variety of culinary delights tailored for every occasion, crafted with care and precision.
//         </p>
//       </div>

//       {loading ? (
//         <div className="text-center mt-10 text-lg text-gray-600">Loading...</div>
//       ) : (
//         <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {menuData.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-lg shadow-sm border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-md"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-48 object-cover rounded-t-lg"
//               />
//               <div className="p-6">
//                 <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
//                 <p className="text-gray-500 text-sm mt-2">{item.description}</p>
//                 <p className="text-gray-700 font-bold mt-3">₹{item.price} / per plate</p>
//                 <button className="mt-4 px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-full hover:bg-gray-300 transition duration-300 w-full">
//                   Order Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Menu;


import React, { useEffect, useState } from "react";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Base URL for images (Make sure this points to your uploads folder correctly)
  const IMAGE_BASE_URL = "http://localhost:5000/uploads/";

  // Fetch menu from API
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/menu/");
        if (!response.ok) throw new Error("Failed to fetch menu data");
        const data = await response.json();
        setMenuData(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-gray-500 text-sm uppercase tracking-widest font-medium">
          Explore Our Offerings
        </h2>
        <h1 className="text-4xl sm:text-5xl font-bold mt-2 text-gray-800">
          Our Menu
        </h1>
        <p className="text-gray-500 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Discover a variety of culinary delights tailored for every occasion, crafted with care and precision.
        </p>
      </div>

      {loading ? (
        <div className="text-center mt-10 text-lg text-gray-600">Loading...</div>
      ) : (
        <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <img
                src={item.image ? `${IMAGE_BASE_URL}${item.image}` : 'https://via.placeholder.com/150'}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                <p className="text-gray-500 text-sm mt-2">{item.description}</p>
                <p className="text-gray-700 font-bold mt-3">₹{item.price} / per plate</p>
                <button className="mt-4 px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-full hover:bg-gray-300 transition duration-300 w-full">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
