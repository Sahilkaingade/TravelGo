import React from 'react';
import { motion } from 'framer-motion';
import { IoLocationOutline } from 'react-icons/io5';
import { LuCalendarDays } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

// Images
import Fp1 from '../../assets/ganpati.png';
import Fp2 from '../../assets/navratri2.png';
import Fp3 from '../../assets/holi.png';
import Fp4 from '../../assets/diwali.png';

// Tours Data
const tours = [
  {
    id: 1,
    title: "Ganesh Chaturthi Special Tour Package",
    location: "Mumbai",
    days: "10 Days, 11 Night",
    price: "Rs. 4,500",
    image: Fp1,
    featured: true,
    discount: "40% Off",
    rating: 4,
    reviews: 10,
    path: "/ganesh-chaturthi",
  },
  {
    id: 2,
    title: "Durga Puja",
    location: "Kolkata",
    days: "10 Days, 10 Night",
    price: "Rs. 5,500",
    image: Fp2,
    featured: true,
    discount: "40% Off",
    rating: 5,
    reviews: 8,
    path: "/durga-puja",
  },
  {
    id: 3,
    title: "Holi Festival Tour",
    location: "Mathura",
    days: "1 Days, 2 Night",
    price: "Rs. 4,500",
    image: Fp3,
    featured: true,
    discount: "40% Off",
    rating: 4,
    reviews: 12,
    path: "/holi-festival",
  },
  {
    id: 4,
    title: "Diwali Celebration",
    location: "Uttar Pradesh",
    days: "7 Days, 8 Night",
    price: "Rs. 19,500",
    image: Fp4,
    featured: true,
    discount: "40% Off",
    rating: 5,
    reviews: 15,
    path: "/diwali-celebration",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Features() {
  const navigate = useNavigate();

  return (
    <div className="px-4 md:px-16 py-16 bg-white">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="inline-block bg-[#ffe8cc] text-[#f58220] px-3 py-1 rounded-md text-sm font-semibold mb-3">
          Popular Tours
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Featured <span className="italic text-green-600 font-semibold">Packages</span>
        </h1>
      </div>

      {/* Cards Wrapper */}
      <div
        className="
          flex gap-12 md:gap-6 pl-10 overflow-x-auto pb-4 px-2 snap-x snap-mandatory
          sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 sm:overflow-visible
        "
      >
        {tours.map((tour, i) => (
          <motion.div
            key={tour.id}
            className="
              bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow
              duration-300 overflow-hidden min-h-[520px] flex-shrink-0 flex flex-col
              cursor-pointer w-[80%] xs:w-[70%] sm:w-auto snap-center
            "
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true, amount: 0.2 }}
            onClick={() => navigate(tour.path)}
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-[230px] object-cover rounded-t-3xl"
              />
              {tour.discount && (
                <span className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
                  ~{tour.discount}
                </span>
              )}
              {tour.featured && (
                <span className="absolute top-3 left-24 bg-green-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
                  Featured
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <div className="text-sm text-gray-500 mb-2 flex items-center gap-1">
                  ({tour.reviews} Review)
                  {Array(5)
                    .fill()
                    .map((_, idx) => (
                      <span
                        key={idx}
                        className={`text-sm ${
                          idx < tour.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-snug">
                  {tour.title}
                </h3>

                <div className="flex items-center text-sm text-gray-600 mb-4 gap-4">
                  <div className="flex items-center gap-1">
                    <IoLocationOutline />
                    {tour.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <LuCalendarDays />
                    {tour.days}
                  </div>
                </div>
              </div>

              {/* Price + Button */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-orange-500 font-bold text-xl">{tour.price}</span>

                <button className="bg-white border-2 border-green-600 text-green-600 px-5 py-2 rounded-full hover:bg-green-600 hover:text-white transition-all text-sm font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
