import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom"; // ✅ Import useLocation for active tag

import destination1 from "/Travel-Planner/client/src/assets/maharashtra.jpg";
import destination2 from "/Travel-Planner/client/src/assets/kerala.jpg";
import destination3 from "/Travel-Planner/client/src/assets/kashmir.jpg";
import destination4 from "/Travel-Planner/client/src/assets/goa.jpg";

const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Popular() {
  const location = useLocation(); // ✅ get current route

  const destinations = [
    { src: destination1, label: "Maharashtra", path: "/maharashtra" },
    { src: destination2, label: "Kerala", path: "/kerala" },
    { src: destination3, label: "Kashmir", path: "/kashmir" },
    { src: destination4, label: "Goa", path: "/goa" },
  ];

  const tags = ["Kashmir", "Kerala", "Goa", "Maharashtra"];

  return (
    <div className="text-center px-4 py-16 overflow-hidden">
      {/* Section title */}
      <motion.p
        className="inline-block bg-[#ffe8cc] text-[#f58220] px-3 py-1 rounded-md text-sm font-semibold mb-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Popular Destinations
      </motion.p>

      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Popular <i className="text-green-600">Destinations</i>
      </motion.h1>

      <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
        The Island Of Crete Offers A Rare Mix Of Splendid Beaches, Amazing
        Mountain Landscapes, Vibrant Towns And Cosy Villages Inhabited By
        Warm-Hearted Locals.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {tags.map((tag, index) => {
          const destination = destinations.find(
            (dest) => dest.label.toLowerCase() === tag.toLowerCase()
          );

          const isActive = location.pathname === destination?.path; // ✅ check if active

          return (
            <Link
              key={index}
              to={destination?.path || "/"}
              className={`px-4 py-1 rounded-full font-semibold text-sm transition 
                ${isActive ? "bg-orange-500 text-white" : "bg-black text-white hover:bg-orange-500 hover:text-white"}`}
            >
              {tag}
            </Link>
          );
        })}
      </div>

      {/* Destinations */}
      <div className="flex justify-center items-start flex-wrap gap-12 mt-12">
        {destinations.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="relative group"
          >
            {/* ✅ Wrap with Link */}
            <Link to={item.path}>
              <img
                src={item.src}
                alt={item.label}
                className="w-[250px] h-[340px] object-cover rounded-t-full rounded-b-full border-4 border-transparent group-hover:border-orange-400 transition-all duration-300 shadow-md cursor-pointer"
              />
              <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-md">
                <h3 className="text-orange-500 text-lg font-bold italic font-[cursive]">
                  {item.label}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
