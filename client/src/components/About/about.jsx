import React from 'react';
import Rafting from '../../assets/about-5-1.png';
import Rafting2 from '../../assets/about-s-5-1.png';
import bgabout from '../../assets/bg-about.png';
import { FaAngleDoubleRight, FaMapMarkerAlt, FaCalendarCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div
      className="flex flex-col md:flex-row bg-gradient-to-b from-[#f5f5f5] to-white"
      style={{
        backgroundImage: `url(${bgabout})`,
        backgroundPosition: 'right',
        transition: 'background-image 1s ease-in-out',
      }}
    >

      {/* IMAGE SECTION */}
      <div className="flex items-center justify-center w-full md:w-auto h-auto md:h-screen relative md:ml-24 md:bottom-4 mt-10 md:mt-0">
        <div className="relative w-[300px] h-[250px] sm:w-[380px] sm:h-[300px] md:w-[600px] md:h-[400px]">
          {/* Main Image */}
          <img
            src={Rafting}
            alt="Rafting"
            className="object-cover w-full h-full rounded-tl-[80px] md:rounded-tl-[120px]"
          />

          {/* Foreground Image */}
          <img
            src={Rafting2}
            alt="Foreground"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 object-cover 
            rounded-br-[40px] rounded-tl-[40px] md:rounded-br-[70px] md:rounded-tl-[70px]
            absolute bottom-0 right-0 border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* TEXT SECTION */}
      <section className="py-10 px-6 md:px-20 w-full md:w-auto">
        <div className="max-w-5xl mx-auto">
          <p className="inline-block bg-[#ffe8cc] text-[#f58220] px-3 py-1 rounded-md text-sm font-semibold mb-4">
            About Gotur
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Experience The New <br />
            <span className="italic text-green-600 font-semibold">Adventure</span> With Us
          </h1>

          <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-10">
            It is a long established fact that a reader will be distracted the readable
            content of a page when looking at layout the point.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-green-600 text-3xl" />
              <div>
                <h3 className="text-lg font-bold text-gray-900">Trusted Travel Guide</h3>
                <p className="text-gray-500">We will try to provide the best Tour Guide for you.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaCalendarCheck className="text-green-600 text-3xl" />
              <div>
                <h3 className="text-lg font-bold text-gray-900">Instant Booking</h3>
                <p className="text-gray-500">
                  The booking is currently unavailable on the website as it's just a Travel Planner Website.
                </p>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <div className="flex justify-start">
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
