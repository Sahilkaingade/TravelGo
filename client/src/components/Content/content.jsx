import React from 'react';
import { useNavigate } from 'react-router-dom';
import Planebg from '../../assets/hero-shapr-1-2.png';
import Bag from '../../assets/hero-1.png';

export default function Content() {
  const navigate = useNavigate();

  return (
    <div
 className="
    lg:absolute 
    lg:top-24 
    lg:h-[85vh]
    bg-[#f3e9dc]/80 backdrop-blur-md
    p-6 sm:p-8 lg:p-8
    rounded-3xl shadow-lg
    overflow-hidden        /* ⭐ FIX BLUR OVERFLOW */
    w-[100%] sm:w-[80%] lg:w-[62%]
  "
>
      
      {/* Plane image (no desktop change) */}
      <img 
        src={Planebg} 
        alt="plane" 
        className="absolute w-28 sm:w-40 lg:w-auto" 
      />

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-[#F7921E] mt-20 lg:mt-24">
        Explore Worlds
      </h1>

      {/* Heading */}
      <p className="
        mt-3 
        text-4xl sm:text-5xl md:text-6xl 
        lg:text-7xl lg:leading-[80px] 
        font-bold text-left text-gray-900
      ">
        Exploring Beautiful <br /> Destinations
      </p>

      {/* Description */}
      <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 lg:max-w-[70%]">
        Planning your next adventure with us with the valuable discounts and be
        the one to explore the world!
      </p>

      {/* Bag image → HIDE on mobile */}
      <img 
        src={Bag} 
        alt="bag" 
        className="
          hidden sm:block
          absolute left-4 bottom-0.5 
          w-24 sm:w-32 md:w-36 lg:w-40
        " 
      />

      {/* Button (position same on desktop) */}
      <button
        onClick={() => navigate('/destination')}
        className="
          mt-6 lg:mt-4 
          bg-[#F7921E] text-white 
          py-2 px-6 
          rounded-full 
          lg:absolute lg:ml-36 
          hover:bg-[#e87f15] transition-all
        "
      >
        Get Started
      </button>
    </div>
  );
}
