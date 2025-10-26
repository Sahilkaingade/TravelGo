import React from 'react';
import Rafting from '/Travel-Planner/client/src/assets/about-5-1.png';
import Rafting2 from '/Travel-Planner/client/src/assets/about-s-5-1.png';
import bgabout from '/Travel-Planner/client/src/assets/bg-about.png';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaCalendarCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='flex bg-gradient-to-b from-[#f5f5f5] to-white' style={{
        backgroundImage: `url(${bgabout})`,
        backgroundPosition: 'right',
        transition: 'background-image 1s ease-in-out'
      }}>
        <div className="flex items-center justify-center h-screen relative ml-24 bottom-4">
      <div className="relative w-[600px] h-[400px]">
        {/* Main Image with top-left rounded corner */}
        <img
          src={Rafting}
          alt="Rafting"
          className="object-cover rounded-tl-[120px]"
        />
        {/* Foreground Image with bottom-right and top-left rounded corners */}
        <img
          src={Rafting2}
          alt="Foreground"
          className="w-72 h-72 object-cover rounded-br-[70px] rounded-tl-[70px] absolute bottom-0 right-0 border-4 border-white shadow-lg"
        />
      </div>
    </div>
    <section className="py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header section */}
        <p className="inline-block bg-[#ffe8cc] text-[#f58220] px-3 py-1 rounded-md text-sm font-semibold mb-4">
          About Gotur
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Experience The New <br />
          <span className="italic text-green-600 font-semibold">Adventure</span> With Us
        </h1>
        <p className="text-gray-500 text-base md:text-lg mb-10">
          It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Trusted Travel Guide */}
          <div className="items-start gap-4">
            <FaMapMarkerAlt className="text-green-600 text-3xl" /><br />
            <div>
              <h3 className="text-lg font-bold text-gray-900">Trusted Travel Guide</h3>
              <p className="text-gray-500">Pellentesque ut vehicula sapien dictumst. Maecenas ante.</p>
            </div>
          </div>

          {/* Instant Booking */}
          <div className="items-start gap-4">
            <FaCalendarCheck className="text-green-600 text-3xl" /><br />
            <div>
              <h3 className="text-lg font-bold text-gray-900">Instant Booking</h3>
              <p className="text-gray-500">Pellentesque ut vehicula sapien dictumst. Maecenas ante.</p>
            </div>
          </div>
        </div>

        {/* CTA Button and Profile */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Link to={"/destination"}>
          <button className="flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300">
            Discover More <FaAngleDoubleRight className="ml-2" />
          </button>
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
}
