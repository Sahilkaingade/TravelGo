import React from 'react';
import { FaGlobe, FaHeart, FaShieldAlt, FaPlane } from 'react-icons/fa';

const features = [
  {
    icon: <FaGlobe size={28} className="text-green-500" />,
    title: "Authentic Experiences",
    description:
      "We prioritize genuine cultural encounters and local connections over tourist traps, helping you discover the real heart of every destination.",
  },
  {
    icon: <FaHeart size={28} className="text-green-500" />,
    title: "Personalized Planning",
    description:
      "Every traveler is unique. Our platform learns your preferences, budget, and style to create itineraries that feel like they were made just for you.",
  },
  {
    icon: <FaShieldAlt size={28} className="text-green-500" />,
    title: "Responsible Tourism",
    description:
      "We’re committed to sustainable travel practices that benefit local communities and preserve destinations for future generations.",
  },
  {
    icon: <FaPlane size={28} className="text-green-500" />,
    title: "Seamless Experience",
    description:
      "From initial planning to real-time support during your trip, we handle the details so you can focus on creating memories.",
  },
];


export default function about() {
  return (
    <div>
      <section className="relative mt-20 py-20 px-6 bg-gradient-to-br from-blue-50 to-orange-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl text-primary">
              Crafting Unforgettable Journey Experiences
            </h1>
            <p className="text-lg text-muted-foreground">
              We believe that travel is more than just visiting places—it's about creating memories, 
              discovering cultures, and transforming perspectives. Since 2018, we've been helping 
              travelers around the world plan their perfect adventures.
            </p>
            <p className="text-lg text-muted-foreground">
              Our mission is to make travel planning effortless while ensuring every journey 
              is meaningful, sustainable, and tailored to your unique preferences.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop"
              alt="Team planning travel destinations"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border">
              <div className="text-2xl text-primary">500K+</div>
              <div className="text-sm text-muted-foreground">Happy Travelers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 px-4 md:px-20">
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
  className="bg-white rounded-xl shadow-md p-8 h-full min-h-[400px] text-center pt-16 transition duration-300 hover:shadow-lg flex flex-col justify-start"
>
  <div className="mb-6 flex justify-center">{feature.icon}</div>
  <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
  <p className="text-base text-gray-600">{feature.description}</p>
</div>

          ))}
        </div>
      </div>
    </section>
    <section className="h-[100vh] bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center px-6">
  <div className="max-w-6xl w-full text-center text-white">
    {/* Heading */}
    <h1 className="text-4xl font-bold mb-4">Our Impact in Numbers</h1>
    <p className="text-lg mb-12">
      These milestones represent more than just statistics—they're a testament to the trust our community places in us and the adventures we've helped create.
    </p>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg">
        <h2 className="text-3xl font-bold">500K+</h2>
        <p className="text-lg font-semibold mt-1">Happy Travelers</p>
        <p className="text-sm mt-2 text-blue-100">
          Adventurers who trusted us with their dream trips
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg">
        <h2 className="text-3xl font-bold">150+</h2>
        <p className="text-lg font-semibold mt-1">Countries Covered</p>
        <p className="text-sm mt-2 text-blue-100">
          Destinations expertly curated and verified
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg">
        <h2 className="text-3xl font-bold">1M+</h2>
        <p className="text-lg font-semibold mt-1">Itineraries Created</p>
        <p className="text-sm mt-2 text-blue-100">
          Custom travel plans crafted to perfection
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg">
        <h2 className="text-3xl font-bold">98%</h2>
        <p className="text-lg font-semibold mt-1">Satisfaction Rate</p>
        <p className="text-sm mt-2 text-blue-100">
          Travelers who would recommend us to friends
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg">
        <h2 className="text-3xl font-bold">24/7</h2>
        <p className="text-lg font-semibold mt-1">Travel Support</p>
        <p className="text-sm mt-2 text-blue-100">
          Expert assistance whenever you need it
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg">
        <h2 className="text-3xl font-bold">5 Years</h2>
        <p className="text-lg font-semibold mt-1">Travel Innovation</p>
        <p className="text-sm mt-2 text-blue-100">
          Continuously improving the planning experience
        </p>
      </div>
    </div>
  </div>
</section>
          <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* Image */}
    <div>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
        alt="Boat in a lake"
        className="rounded-xl shadow-lg object-cover w-full h-full"
      />
    </div>

    {/* Content */}
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Ready to Start Your Next Adventure?
      </h2>
      <p className="text-gray-600 mb-6">
        Join hundreds of thousands of travelers who have discovered their perfect trips with our expert planning platform. 
        Whether you're dreaming of mountain peaks, bustling cities, or pristine beaches, we'll help you make it happen.
      </p>

      {/* Features List */}
      <ul className="space-y-4 mb-8">
        <li className="flex items-start space-x-3">
          <span className="text-blue-600 text-lg">📍</span>
          <span className="text-gray-700">
            Personalized itineraries for any destination
          </span>
        </li>
        <li className="flex items-start space-x-3">
          <span className="text-blue-600 text-lg">📍</span>
          <span className="text-gray-700">
            Expert recommendations from local travelers
          </span>
        </li>
        <li className="flex items-start space-x-3">
          <span className="text-blue-600 text-lg">📍</span>
          <span className="text-gray-700">
            24/7 support throughout your journey
          </span>
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition">
          Start Planning Now →
        </button>
        <button className="border border-gray-300 px-6 py-3 rounded-md shadow hover:bg-gray-100 transition">
          Explore Destinations
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
