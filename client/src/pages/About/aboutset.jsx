import React from 'react';
import { FaGlobe, FaHeart, FaShieldAlt, FaPlane } from 'react-icons/fa';

const features = [
  {
    icon: <FaGlobe size={28} className="text-blue-500" />,
    title: "Authentic Experiences",
    description:
      "We prioritize genuine cultural encounters and local connections over tourist traps, helping you discover the real heart of every destination.",
  },
  {
    icon: <FaHeart size={28} className="text-blue-500" />,
    title: "Personalized Planning",
    description:
      "Every traveler is unique. Our platform learns your preferences, budget, and style to create itineraries that feel like they were made just for you.",
  },
  {
    icon: <FaShieldAlt size={28} className="text-blue-500" />,
    title: "Responsible Tourism",
    description:
      "We’re committed to sustainable travel practices that benefit local communities and preserve destinations for future generations.",
  },
  {
    icon: <FaPlane size={28} className="text-blue-500" />,
    title: "Seamless Experience",
    description:
      "From initial planning to real-time support during your trip, we handle the details so you can focus on creating memories.",
  },
];

export default function WhatSetsUsApart() {
  return (
    <section className="bg-[#f7f9fc] py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">What Sets Us Apart</h2>
        <p className="text-gray-600 mb-12">
          We’re not just another booking platform. We’re your travel planning partner,
          committed to making every journey meaningful and memorable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center transition duration-300 hover:shadow-lg"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
