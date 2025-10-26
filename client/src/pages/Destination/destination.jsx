import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";

 // ✅ import context

import Bg from "../../assets/backgroundss.jpg";
import Holi from "../../assets/holi.png";
import Ganpati from "../../assets/ganpati.png";
import Navratri from "../../assets/navratri.png";
import Diwali from "../../assets/diwali.png";
import Sankranthi from "../../assets/sankranthi.png";
import Navratri2 from "../../assets/navratri2.png";
import Onam from "../../assets/onam.png";
import Bihu from "../../assets/bihu.png";
import Pongal from "../../assets/pongal.png";
import Pushkar from "../../assets/pushkar.png";
import Hornbill from "../../assets/hornbill.png";
import Lohri from "../../assets/lohri.png";
import Thrissur from "../../assets/thissur.png";

export default function Destination() {
  const [showAll, setShowAll] = useState(false);
  const { addToCart } = useContext(CartContext); // ✅ use context

  const events = [
    {
      id: 1,
      title: "Holi Festival of Colors",
      description:
        "Experience the vibrant Holi celebration in the birthplace of Lord Krishna with traditional colors, music, and dance.",
      location: "Mathura & Vrindavan, Uttar Pradesh",
      date: "March 13-14, 2025",
      duration: "2 days",
      price: "₹4,999",
      rating: "4.9",
      tags: ["Colors", "Traditional", "Spring"],
      image: Holi,
      link: "/holi-festival",
    },
    {
      id: 2,
      title: "Ganesh Chaturthi Celebration",
      description:
        "Join the grand Ganesh Chaturthi festivities in Mumbai with processions, traditional music, and cultural performances.",
      location: "Mumbai, Maharashtra",
      date: "August 30 - September 8, 2025",
      duration: "10 days",
      price: "₹8,999",
      rating: "4.8",
      tags: ["Ganesh", "Procession", "Mumbai"],
      image: Ganpati,
      link: "/ganesh-chaturthi",
    },
    {
      id: 3,
      title: "Navratri Dandiya Festival",
      description:
        "Dance to traditional Garba and Dandiya rhythms during the nine-night Navratri celebration in Gujarat.",
      location: "Ahmedabad, Gujarat",
      date: "October 3-11, 2025",
      duration: "9 nights",
      price: "₹7,499",
      rating: "4.9",
      tags: ["Dance", "Gujarat", "Nine Nights"],
      image: Navratri,
      link: "/navratri-festival",
    },
    {
      id: 4,
      title: "Diwali Celebration",
      description:
        "Experience the Festival of Lights in Varanasi with illuminated ghats, Ganga aarti, fireworks, and cultural performances.",
      location: "Varanasi, Uttar Pradesh",
      date: "October 17-27, 2025",
      duration: "11 days",
      price: "₹6,999",
      rating: "4.5",
      tags: ["Diwali", "Lights", "Varanasi"],
      image: Diwali,
      link: "/diwali-celebration",
    },
    {
      id: 5,
      title: "Durga Puja Celebration",
      description:
        "Witness the grand Durga Puja in Kolkata with artistic pandals, traditional rituals, and cultural performances.",
      location: "Kolkata, West Bengal",
      date: "September 29 – October 3, 2025",
      duration: "5 days",
      price: "₹7,999",
      rating: "4.9",
      tags: ["Durga", "Pandal", "Kolkata"],
      image: Navratri2,
      link: "/durga-puja",
    },
    {
      id: 6,
      title: "Makar Sankranti Celebration",
      description:
        "Join the International Kite Festival in Ahmedabad with colorful skies, traditional food, and cultural festivities.",
      location: "Ahmedabad, Gujarat",
      date: "January 13 – January 15, 2025",
      duration: "3 days",
      price: "₹5,499",
      rating: "4.2",
      tags: ["Kite Festival", "Ahmedabad", "January"],
      image: Sankranthi,
      link: "/makar-sankranti",
    },
    {
      id: 7,
      title: "Onam Festival",
      description:
        "Celebrate Kerala's harvest festival with snake boat races, flower carpets, traditional feasts, and cultural performances.",
      location: "Kochi, Kerala",
      date: "August 21-31, 2025",
      duration: "10 days",
      price: "₹9,499",
      rating: "4.7",
      tags: ["Onam", "Kerala", "Harvest"],
      image: Onam,
      link: "/onam-festival",
    },
    {
      id: 8,
      title: "Bihu Festival",
      description:
        "Experience Assam's most popular festival with traditional Bihu dance, music, and vibrant celebrations.",
      location: "Guwahati, Assam",
      date: "April 14-20, 2025",
      duration: "7 days",
      price: "₹6,499",
      rating: "4.6",
      tags: ["Bihu", "Dance", "Assam"],
      image: Bihu,
      link: "/bihu-festival",
    },
    {
      id: 9,
      title: "Pongal Festival",
      description:
        "Celebrate the Tamil harvest festival with decorated homes, bull-taming sports, and traditional Pongal feasts.",
      location: "Madurai, Tamil Nadu",
      date: "January 14-17, 2025",
      duration: "4 days",
      price: "₹5,999",
      rating: "4.7",
      tags: ["Pongal", "Tamil Nadu", "Harvest"],
      image: Pongal,
      link: "/pongal-festival",
    },
    {
      id: 10,
      title: "Pushkar Camel Fair",
      description:
        "Join one of the world's largest camel fairs with folk music, dance, camel races, and vibrant markets.",
      location: "Pushkar, Rajasthan",
      date: "November 10-18, 2025",
      duration: "9 days",
      price: "₹10,999",
      rating: "4.8",
      tags: ["Pushkar", "Camel Fair", "Rajasthan"],
      image: Pushkar,
      link: "/pushkar-fair",
    },
    {
      id: 11,
      title: "Hornbill Festival",
      description:
        "Witness the 'Festival of Festivals' showcasing Naga culture with folk dances, music, and local traditions.",
      location: "Kisama, Nagaland",
      date: "December 1-10, 2025",
      duration: "10 days",
      price: "₹9,999",
      rating: "4.9",
      tags: ["Hornbill", "Nagaland", "Culture"],
      image: Hornbill,
      link: "/hornbill-festival",
    },
    {
      id: 12,
      title: "Lohri Festival",
      description:
        "Celebrate the Punjabi harvest festival with bonfires, folk songs, dances, and traditional delicacies.",
      location: "Punjab, India",
      date: "January 13, 2025",
      duration: "1 day",
      price: "₹4,499",
      rating: "4.6",
      tags: ["Lohri", "Punjab", "Harvest"],
      image: Lohri,
      link: "/lohri-festival",
    },
    {
      id: 13,
      title: "Thrissur Pooram",
      description:
        "Experience the grand temple festival of Kerala with decorated elephants, traditional percussion, and fireworks.",
      location: "Thrissur, Kerala",
      date: "April 21, 2025",
      duration: "1 day",
      price: "₹7,499",
      rating: "4.8",
      tags: ["Thrissur", "Kerala", "Temple Festival"],
      image: Thrissur,
      link: "/thrissur-pooram",
    },
  ];

  const visibleEvents = showAll ? events : events.slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div
        style={{ backgroundImage: `url(${Bg})` }}
        className="h-[80vh] w-full bg-cover bg-center flex items-center justify-start rounded-lg mb-5"
      >
        <div className="pl-10 text-white">
          <h1 className="font-bold text-5xl mb-4">
            Discover the Destination with <br />
            the Cultural Events of India
          </h1>
          <p className="text-lg mb-6 max-w-xl">
            Experience the rich heritage, vibrant traditions, and cultural
            festivities that make India truly unique. Explore breathtaking
            destinations and dive into unforgettable moments.
          </p>
        </div>
      </div>

      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto my-10 px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Indian Cultural Events & Festivals
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Immerse yourself in authentic Indian cultural experiences and
          traditional celebrations across the diverse regions of India.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-16 max-w-7xl mx-auto">
        {visibleEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="h-56 w-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-sm font-semibold shadow">
                ⭐ {event.rating}
              </span>
            </div>

            <div className="p-5">
              <div className="flex flex-wrap gap-2 mb-3">
                {event.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{event.description}</p>

              <div className="flex items-center text-gray-500 text-sm mb-2">
                📍 {event.location}
              </div>
              <div className="flex items-center text-gray-500 text-sm mb-2">
                📅 {event.date}
              </div>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                ⏳ {event.duration}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">
                  From {event.price}
                </span>

                <div className="flex gap-2">
                  <Link
                    to={event.link}
                    className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-md hover:bg-gray-700 transition"
                  >
                    Learn More
                  </Link>

                  <button
                    onClick={() => addToCart(event)}
                    className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-md hover:bg-green-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center pb-10">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-white text-black border border-black font-semibold rounded-md hover:bg-gray-200 transition"
          >
            View All Indian Cultural Events
          </button>
        </div>
      )}
    </div>
  );
}
