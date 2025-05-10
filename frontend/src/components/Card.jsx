

// import React from "react";


// const Card = ({ name, image, description }) => {
//   return (
//     <div className="bg-gray-100 rounded-3xl shadow-md p-3 w-78 h-72 sm:h-80 overflow-hidden">
//       <img
//         src={image}
//         alt={name}
//         className="rounded-3xl w-full h-40 sm:h-44 object-cover"
//       />
//       <div className="mt-2">
//         <h3 className="text-sm sm:text-base font-semibold text-center truncate">
//           {name}
//         </h3>

//         {/* Display Description */}
//         <p className="text-gray-600 text-xs sm:text-sm text-center mt-1">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };


// export default Card;


import React from "react";
const Card = ({ name, image, description, className }) => {
  return (
    <div className={`${className} bg-gray-100 rounded-3xl shadow-md p-3 w-72 h-72 sm:h-80 overflow-hidden`}>
      <img
        src={image}
        alt={name}
        className="rounded-3xl w-full h-40 sm:h-44 object-cover"
      />
      <div className="mt-2">
        <h3 className="text-sm sm:text-base font-semibold text-center truncate">
          {name}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm text-center mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};
export default Card;


