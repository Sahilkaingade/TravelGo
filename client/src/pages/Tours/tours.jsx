'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
];

const hobbies = ['Adventure', 'Playing', 'Swimming', 'Cycling', 'Skating', 'Hiking', 'Photography', 'Food Tasting'];
const tripTypes = ['Romantic', 'Relaxing', 'Cultural', 'Historical', 'Wildlife'];
const groupSizes = ['Single', 'Couple', 'Group (3+)'];
const countries = ['India', 'Japan', 'France', 'Brazil', 'Australia'];
const budgets = ['Budget-Friendly', 'Mid-Range', 'Luxury'];

const dummyTrip = {
  id: 1,
  title: 'Romantic Goa Beach Retreat',
  location: 'North Goa, India',
  price: '$899',
  rating: 4.9,
  duration: '5 days',
  type: 'Private (2 people)',
  difficulty: 'Easy',
  tags: ['Beach Access', 'Spa & Wellness', 'Local Cuisine'],
  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1350&q=80',
};

export default function HeroWithPlanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPlanner, setShowPlanner] = useState(false);
  const [selections, setSelections] = useState({
    hobby: '',
    type: '',
    group: '',
    country: '',
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
      country: '',
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
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Amazing Adventures</h1>
        <p className="text-lg md:text-xl mb-8">
          Explore breathtaking mountains and create unforgettable memories
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => setShowPlanner(true)}
            className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
          >
            Start Your Journey
          </button>
        </div>
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
              <h2 className="text-2xl font-semibold">Plan Your Perfect Trip</h2>
              <button onClick={resetPlanner} className="text-xl font-bold">×</button>
            </div>

            {!isComplete ? (
              <div className="space-y-6 mt-7">
                <Section title="1. What's your hobby?" options={hobbies} selected={selections.hobby} onSelect={(val) => handleSelect('hobby', val)} />
                <Section title="2. Trip Type" options={tripTypes} selected={selections.type} onSelect={(val) => handleSelect('type', val)} />
                <Section title="3. Group Size" options={groupSizes} selected={selections.group} onSelect={(val) => handleSelect('group', val)} />
                <Section title="4. Select Country" options={countries} selected={selections.country} onSelect={(val) => handleSelect('country', val)} />
                <Section title="5. Budget" options={budgets} selected={selections.budget} onSelect={(val) => handleSelect('budget', val)} />

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
                <h3 className="text-lg font-semibold mb-2">Perfect Trips for You</h3>
                <p className="text-sm mb-4 text-gray-600">
                  1 trip found based on your preferences
                </p>

                <div className="bg-white shadow rounded-xl overflow-hidden mb-6">
                  <img src={dummyTrip.image} alt="Trip" className="w-full h-60 object-cover" />
                  <div className="p-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="bg-pink-200 text-pink-700 px-2 py-1 rounded-full text-xs">Romantic</span>
                      <span className="font-bold text-lg">{dummyTrip.price}</span>
                    </div>
                    <h4 className="text-md font-semibold">{dummyTrip.title}</h4>
                    <p className="text-sm text-gray-500">{dummyTrip.location}</p>
                    <div className="text-sm text-gray-600">{dummyTrip.duration} • {dummyTrip.type} • {dummyTrip.difficulty}</div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {dummyTrip.tags.map((tag, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={resetPlanner}
                  className="w-full mt-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
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

// Reusable Selection Section
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
