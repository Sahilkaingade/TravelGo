'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";

const heroImages = [
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
];

const hobbies = ['Adventure', 'Playing', 'Swimming', 'Cycling', 'Skating', 'Hiking', 'Photography', 'Food Tasting'];
const tripTypes = ['Romantic', 'Relaxing', 'Cultural', 'Historical', 'Wildlife'];
const groupSizes = ['Single', 'Couple', 'Group (3+)'];
const budgets = ['Budget-Friendly', 'Mid-Range', 'Luxury'];

const indianTrips = [
  {
    id: 1,
    title: 'Romantic Goa Beach Retreat',
    location: 'North Goa, India',
    price: '$899',
    rating: 4.9,
    duration: '5 days',
    type: 'Couple',
    difficulty: 'Easy',
    tags: ['Beach Access', 'Spa & Wellness', 'Local Cuisine'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 2,
    title: 'Leh Ladakh Adventure Expedition',
    location: 'Ladakh, India',
    price: '$1199',
    rating: 4.8,
    duration: '7 days',
    type: 'Group',
    difficulty: 'Hard',
    tags: ['Mountains', 'Bike Trip', 'Camping'],
    image: 'https://images.unsplash.com/photo-1551776235-dde6d4829808?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 3,
    title: 'Kerala Backwater Cruise',
    location: 'Alleppey, Kerala',
    price: '$749',
    rating: 4.7,
    duration: '4 days',
    type: 'Couple',
    difficulty: 'Easy',
    tags: ['Houseboat', 'Nature', 'Relaxing'],
    image: 'https://images.unsplash.com/photo-1593697971687-6d9f77aa99b3?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 4,
    title: 'Jaipur Royal Heritage Tour',
    location: 'Jaipur, Rajasthan',
    price: '$599',
    rating: 4.6,
    duration: '3 days',
    type: 'Family',
    difficulty: 'Easy',
    tags: ['Palaces', 'Culture', 'Shopping'],
    image: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 5,
    title: 'Manali Snow Adventure',
    location: 'Manali, Himachal Pradesh',
    price: '$899',
    rating: 4.8,
    duration: '5 days',
    type: 'Group',
    difficulty: 'Medium',
    tags: ['Skiing', 'Snowfall', 'Mountains'],
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 6,
    title: 'Rishikesh River Rafting Escape',
    location: 'Rishikesh, Uttarakhand',
    price: '$499',
    rating: 4.5,
    duration: '3 days',
    type: 'Group',
    difficulty: 'Medium',
    tags: ['Rafting', 'Camping', 'Adventure'],
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 7,
    title: 'Darjeeling Toy Train & Tea Gardens',
    location: 'Darjeeling, West Bengal',
    price: '$699',
    rating: 4.6,
    duration: '4 days',
    type: 'Couple',
    difficulty: 'Easy',
    tags: ['Tea Estates', 'Toy Train', 'Mountains'],
    image: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 8,
    title: 'Andaman Island Beach Getaway',
    location: 'Havelock Island, Andaman',
    price: '$1099',
    rating: 4.9,
    duration: '6 days',
    type: 'Couple',
    difficulty: 'Easy',
    tags: ['Snorkeling', 'Coral Reefs', 'Beach'],
    image: 'https://images.unsplash.com/photo-1578894381163-e72c17f2f23b?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 9,
    title: 'Mysore Palace & Coffee Trails',
    location: 'Mysore, Karnataka',
    price: '$599',
    rating: 4.5,
    duration: '3 days',
    type: 'Family',
    difficulty: 'Easy',
    tags: ['Palace', 'Culture', 'Coffee Estates'],
    image: 'https://images.unsplash.com/photo-1571348500620-6b9f80c2f04d?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 10,
    title: 'Sundarbans Wildlife Safari',
    location: 'Sundarbans, West Bengal',
    price: '$799',
    rating: 4.6,
    duration: '4 days',
    type: 'Group',
    difficulty: 'Medium',
    tags: ['Tiger Reserve', 'Boat Ride', 'Mangroves'],
    image: 'https://images.unsplash.com/photo-1578566185452-0860e74a8f7e?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 11,
    title: 'Varanasi Spiritual Journey',
    location: 'Varanasi, Uttar Pradesh',
    price: '$499',
    rating: 4.7,
    duration: '3 days',
    type: 'Solo',
    difficulty: 'Easy',
    tags: ['Ganga Aarti', 'Culture', 'Temples'],
    image: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 12,
    title: 'Kashmir Heaven on Earth Tour',
    location: 'Srinagar, Kashmir',
    price: '$999',
    rating: 4.9,
    duration: '5 days',
    type: 'Couple',
    difficulty: 'Medium',
    tags: ['Dal Lake', 'Snow', 'Shikara Ride'],
    image: 'https://images.unsplash.com/photo-1628179990722-9a03f3b8ff59?auto=format&fit=crop&w=1350&q=80',
  },
    {
    id: 13,
    title: 'Udaipur Romantic Lakeside Getaway',
    location: 'Udaipur, Rajasthan',
    price: '$799',
    rating: 4.8,
    duration: '4 days',
    type: 'Couple',
    difficulty: 'Easy',
    tags: ['Lakes', 'Boat Ride', 'Palaces'],
    image: 'https://images.unsplash.com/photo-1606326608606-6b4fab79e927?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 14,
    title: 'Coorg Coffee Plantation Retreat',
    location: 'Coorg, Karnataka',
    price: '$649',
    rating: 4.7,
    duration: '4 days',
    type: 'Family',
    difficulty: 'Easy',
    tags: ['Coffee Estates', 'Nature', 'Waterfalls'],
    image: 'https://images.unsplash.com/photo-1589307000258-8fdfa5e3b927?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 15,
    title: 'Rann of Kutch White Desert Festival',
    location: 'Kutch, Gujarat',
    price: '$899',
    rating: 4.8,
    duration: '5 days',
    type: 'Group',
    difficulty: 'Medium',
    tags: ['Cultural Festival', 'Desert', 'Night Sky'],
    image: 'https://images.unsplash.com/photo-1602319679801-74e404f96c1c?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 16,
    title: 'Meghalaya Living Root Bridges Trek',
    location: 'Cherrapunji, Meghalaya',
    price: '$849',
    rating: 4.9,
    duration: '6 days',
    type: 'Group',
    difficulty: 'Hard',
    tags: ['Trekking', 'Rainforest', 'Waterfalls'],
    image: 'https://images.unsplash.com/photo-1590745461370-a3cdcde5b331?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 17,
    title: 'Ooty Nilgiri Hills Escape',
    location: 'Ooty, Tamil Nadu',
    price: '$599',
    rating: 4.5,
    duration: '3 days',
    type: 'Family',
    difficulty: 'Easy',
    tags: ['Tea Gardens', 'Hill Station', 'Lake'],
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b1bda?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 18,
    title: 'Golden Triangle Heritage Tour',
    location: 'Delhi–Agra–Jaipur',
    price: '$999',
    rating: 4.8,
    duration: '6 days',
    type: 'Group',
    difficulty: 'Easy',
    tags: ['Taj Mahal', 'Culture', 'Monuments'],
    image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 19,
    title: 'Spiti Valley High-Altitude Expedition',
    location: 'Spiti, Himachal Pradesh',
    price: '$1299',
    rating: 4.9,
    duration: '8 days',
    type: 'Group',
    difficulty: 'Hard',
    tags: ['Mountains', 'Adventure', 'Remote Villages'],
    image: 'https://images.unsplash.com/photo-1604754742629-050e55629f52?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 20,
    title: 'Mahabalipuram Beach & Temple Tour',
    location: 'Tamil Nadu, India',
    price: '$549',
    rating: 4.6,
    duration: '3 days',
    type: 'Family',
    difficulty: 'Easy',
    tags: ['UNESCO Sites', 'Beach', 'Temples'],
    image: 'httpsimages.unsplash.com/photo-1593694975530-19e9e09870ff?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 21,
    title: 'Pondicherry French Colony Escape',
    location: 'Pondicherry, India',
    price: '$699',
    rating: 4.7,
    duration: '4 days',
    type: 'Romantic',
    difficulty: 'Easy',
    tags: ['Beach', 'French Streets', 'Cafes'],
    image: 'https://images.unsplash.com/photo-1624359136357-f9d47cebb6a2?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 22,
    title: 'Amritsar Spiritual Heritage Tour',
    location: 'Amritsar, Punjab',
    price: '$499',
    rating: 4.8,
    duration: '3 days',
    type: 'Solo',
    difficulty: 'Easy',
    tags: ['Golden Temple', 'Culture', 'Food'],
    image: 'https://images.unsplash.com/photo-1607778104146-52ffb62a1eb2?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 23,
    title: 'Munnar Green Valley Escape',
    location: 'Munnar, Kerala',
    price: '$749',
    rating: 4.8,
    duration: '4 days',
    type: 'Couple',
    difficulty: 'Easy',
    tags: ['Tea Gardens', 'Nature', 'Waterfalls'],
    image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 24,
    title: 'Auli Skiing Tour',
    location: 'Auli, Uttarakhand',
    price: '$999',
    rating: 4.7,
    duration: '5 days',
    type: 'Group',
    difficulty: 'Medium',
    tags: ['Snow', 'Skiing', 'Adventure'],
    image: 'https://images.unsplash.com/photo-1543357480-24997b8df05e?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 25,
    title: 'Hampi Ancient Ruins Exploration',
    location: 'Hampi, Karnataka',
    price: '$699',
    rating: 4.8,
    duration: '4 days',
    type: 'Solo',
    difficulty: 'Medium',
    tags: ['Heritage', 'Temples', 'History'],
    image: 'https://images.unsplash.com/photo-1595658658481-e7b2ec0c54b0?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 26,
    title: 'Gokarna Beach Trek & Camping',
    location: 'Gokarna, Karnataka',
    price: '$599',
    rating: 4.6,
    duration: '3 days',
    type: 'Group',
    difficulty: 'Medium',
    tags: ['Beaches', 'Trekking', 'Camping'],
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 27,
    title: 'Shillong Romantic Hill Retreat',
    location: 'Shillong, Meghalaya',
    price: '$849',
    rating: 4.7,
    duration: '4 days',
    type: 'Couple',
    difficulty: 'Easy',
    tags: ['Waterfalls', 'Hills', 'Local Markets'],
    image: 'https://images.unsplash.com/photo-1587128081526-3d5d6b9c0ac8?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 28,
    title: 'Kaziranga National Park Safari',
    location: 'Assam, India',
    price: '$949',
    rating: 4.9,
    duration: '5 days',
    type: 'Group',
    difficulty: 'Medium',
    tags: ['Wildlife', 'Rhinoceros', 'Safari'],
    image: 'https://images.unsplash.com/photo-1600087626331-c96f2de24c40?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 29,
    title: 'Lakshadweep Island Paradise Trip',
    location: 'Agatti Island',
    price: '$1399',
    rating: 4.9,
    duration: '6 days',
    type: 'Couple',
    difficulty: 'Easy',
    tags: ['Coral Reef', 'Blue Waters', 'Snorkeling'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 30,
    title: 'Kodaikanal Misty Mountain Escape',
    location: 'Kodaikanal, Tamil Nadu',
    price: '$699',
    rating: 4.7,
    duration: '4 days',
    type: 'Family',
    difficulty: 'Easy',
    tags: ['Lakes', 'Hills', 'Pine Forest'],
    image: 'https://images.unsplash.com/photo-1603113817134-80bfde13f3bb?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 31,
    title: 'Jim Corbett Wildlife Escape',
    location: 'Uttarakhand, India',
    price: '$799',
    rating: 4.7,
    duration: '4 days',
    type: 'Group',
    difficulty: 'Medium',
    tags: ['Safari', 'Forest Stay', 'Wildlife'],
    image: 'https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 32,
    title: 'Haridwar & Rishikesh Spiritual Tour',
    location: 'Uttarakhand, India',
    price: '$499',
    rating: 4.8,
    duration: '3 days',
    type: 'Solo',
    difficulty: 'Easy',
    tags: ['Ganga Aarti', 'Yoga', 'Temples'],
    image: 'https://images.unsplash.com/photo-1566234689010-6b12a53d0d52?auto=format&fit=crop&w=1350&q=80',
  },
];

export default function HeroWithPlanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPlanner, setShowPlanner] = useState(false);
  const [selections, setSelections] = useState({
    hobby: '',
    type: '',
    group: '',
    budget: '',
  });

  const isComplete = Object.values(selections).every(Boolean);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSelect = (category, value) => {
    setSelections({ ...selections, [category]: value });
  };

  const resetPlanner = () => {
    setSelections({
      hobby: '',
      type: '',
      group: '',
      budget: '',
    });
    setShowPlanner(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={heroImages[currentSlide]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImages[currentSlide]})` }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Incredible India</h1>
        <p className="text-lg md:text-xl mb-8">
          Find your next breathtaking Indian adventure
        </p>
        <button
          onClick={() => setShowPlanner(true)}
          className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
        >
          Start Your Journey
        </button>
      </div>

      {/* Planner Modal */}
      {showPlanner && (
        <div className="fixed inset-0 z-30 flex items-start justify-center px-4 pt-32 pb-8 overflow-y-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Plan Your Indian Trip</h2>
              <button onClick={resetPlanner} className="text-xl font-bold">×</button>
            </div>

            {!isComplete ? (
              <div className="space-y-6 mt-7">
                <Section title="1. What's your hobby?" options={hobbies} selected={selections.hobby} onSelect={(val) => handleSelect('hobby', val)} />
                <Section title="2. Trip Type" options={tripTypes} selected={selections.type} onSelect={(val) => handleSelect('type', val)} />
                <Section title="3. Group Size" options={groupSizes} selected={selections.group} onSelect={(val) => handleSelect('group', val)} />
                <Section title="4. Budget" options={budgets} selected={selections.budget} onSelect={(val) => handleSelect('budget', val)} />

                <button
                  disabled={!isComplete}
                  className={`w-full mt-4 py-3 rounded-lg ${
                    isComplete
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Complete All Selections
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-semibold mb-2">Perfect Indian Trips for You</h3>
                <p className="text-sm mb-4 text-gray-600">
                  {indianTrips.length} trips found based on your preferences
                </p>

                {/* CARD LIST WITH NAVIGATION */}
                <div className="grid md:grid-cols-2 gap-6">
                  {indianTrips.map((trip) => (
                    <Link key={trip.id} to={`/TourCard/${trip.id}`}>
                      <div className="bg-white shadow rounded-xl overflow-hidden hover:scale-[1.02] transition cursor-pointer">
                        <img src={trip.image} alt={trip.title} className="w-full h-44 object-cover" />
                        <div className="p-4 space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="bg-pink-200 text-pink-700 px-2 py-1 rounded-full text-xs">{trip.type}</span>
                            <span className="font-bold text-lg">{trip.price}</span>
                          </div>
                          <h4 className="text-md font-semibold">{trip.title}</h4>
                          <p className="text-sm text-gray-500">{trip.location}</p>
                          <div className="text-sm text-gray-600">
                            {trip.duration} • {trip.difficulty}
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {trip.tags.map((tag, i) => (
                              <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <button
                  onClick={resetPlanner}
                  className="w-full mt-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                >
                  Back to Search
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}

function Section({ title, options, selected, onSelect }) {
  return (
    <div>
      <h4 className="font-medium mb-2">{title}</h4>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            className={`px-4 py-2 rounded-full border ${
              selected === opt
                ? 'bg-blue-100 text-blue-700 border-blue-300'
                : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
            }`}
            onClick={() => onSelect(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
