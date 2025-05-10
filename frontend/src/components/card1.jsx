

import React from "react";

const card1 = ({ title, icon, description }) => {
  return (
    <div className="bg-gray-900 rounded-3xl shadow-md p-3 w-64 h-40 sm:h-50 overflow-hidden hover:scale-105 hover:shadow-lg">

      <div className="flex items-center mb-4">
        <div className="bg-blue-600 p-2 rounded-full">{icon}</div>
      </div>
      <div className="mt-2">
        <h3 className="text-white sm:text-base font-semibold  truncate mb-2">
          {title}
        </h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default card1;
