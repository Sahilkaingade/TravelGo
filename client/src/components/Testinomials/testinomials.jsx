'use client';
import React from 'react';
import { FaStar } from 'react-icons/fa'; 
import test from '../../assets/testi-2-1.png';

export default function Testimonial() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-8 py-12 bg-gradient-to-br from-white to-green-50 gap-8">
      {/* Image Section */}
      <div className="relative">
        <div className="relative z-10">
          <img
            src={test} alt='Testimonial'
            className="w-[480px] h-[480px]"
          />
        </div>
        <div className="absolute -top-5 -left-5 w-[300px] h-[300px] bg-green-600 rounded-full -z-10"></div>
        <div className="absolute top-16 right-0 w-[150px] h-[150px] bg-orange-100 rounded-tl-[80%] rounded-bl-[80%] border border-dashed border-orange-300 -z-20"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-xl text-center md:text-left">
        <span className="text-orange-400 text-sm font-semibold px-3 py-1 rounded-md bg-orange-100">
          testimonial
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Latest client <span className="text-green-600 italic">feedback</span>
        </h2>

        {/* Rating */}
        <div className="flex justify-center md:justify-start mt-3 text-orange-400">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <FaStar className="text-gray-300" />
        </div>

        {/* Text */}
        <p className="mt-4 text-gray-600 leading-relaxed">
          We’d love to hear about your experience!
Your feedback helps us improve and bring you even more unforgettable travel moments.
        </p>
      </div>
    </div>
  );
}
