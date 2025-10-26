import React from "react";
import { FaMapMarkerAlt, FaSuitcaseRolling, FaClock, FaUsers } from "react-icons/fa";

export default function Search() {
  return (
    <div className="absolute bg-white w-[150vh] h-24 mt-[60vh] ml-[40vh] rounded-3xl shadow-lg flex items-center justify-between px-8">
      
      {/* Location */}
      <div className="flex items-center space-x-3">
        <FaMapMarkerAlt className="text-green-600 text-xl" />
        <div>
          <p className="font-semibold">Location</p>
          <p className="text-sm text-gray-500">Australia</p>
        </div>
        <span className="text-xl">&#9662;</span>
      </div>

      {/* Activities Type */}
      <div className="flex items-center space-x-3">
        <FaSuitcaseRolling className="text-green-600 text-xl" />
        <div>
          <p className="font-semibold">Activities Type</p>
          <p className="text-sm text-gray-500">Adventure</p>
        </div>
        <span className="text-xl">&#9662;</span>
      </div>

      {/* Activate Day */}
      <div className="flex items-center space-x-3">
        <FaClock className="text-green-600 text-xl" />
        <div>
          <p className="font-semibold">Activate Day</p>
          <p className="text-sm text-gray-500">19 Jul 25 → 19 Jul 25</p>
        </div>
        <span className="text-xl">&#9662;</span>
      </div>

      {/* Traveler */}
      <div className="flex items-center space-x-3">
        <FaUsers className="text-green-600 text-xl" />
        <div>
          <p className="font-semibold">Traveler</p>
          <p className="text-sm text-gray-500">12</p>
        </div>
        <span className="text-xl">&#9652;</span>
      </div>

      {/* Search Button */}
      <button className="bg-green-600 text-white font-semibold text-lg px-8 py-3 rounded-full hover:bg-green-700 transition duration-200">
        Search
      </button>
    </div>
  );
}