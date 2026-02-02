'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// ✅ IMPORT DATA FROM DATA FILE
import { indianTrips } from '../../data/indianTrips';
const heroImages = [
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80',
];

const hobbies = [
  'Adventure',
  'Playing',
  'Swimming',
  'Cycling',
  'Skating',
  'Hiking',
  'Photography',
  'Food Tasting',
];

const tripTypes = ['Romantic', 'Relaxing', 'Cultural', 'Historical', 'Wildlife'];
const groupSizes = ['Single', 'Couple', 'Group (3+)'];
const budgets = ['Budget-Friendly', 'Mid-Range', 'Luxury'];

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

  // 🔁 Auto background slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSelect = (category, value) => {
    setSelections((prev) => ({
      ...prev,
      [category]: value,
    }));
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
      {/* 🔹 Background Image */}
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

      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 🔹 Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover Incredible India
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Find your next breathtaking adventure
        </p>
        <button
          onClick={() => setShowPlanner(true)}
          className="px-6 py-3 bg-orange-500 rounded-full hover:bg-orange-600 transition"
        >
          Start Your Journey
        </button>
      </div>

      {/* 🔹 Planner Modal */}
      {showPlanner && (
        <div className="fixed inset-0 z-30 flex items-start justify-center px-4 pt-32 pb-8 overflow-y-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl max-w-4xl w-full p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Plan Your Trip</h2>
              <button onClick={resetPlanner} className="text-xl font-bold">
                ×
              </button>
            </div>

            {!isComplete ? (
              <div className="space-y-6">
                <Section
                  title="1. What's your hobby?"
                  options={hobbies}
                  selected={selections.hobby}
                  onSelect={(v) => handleSelect('hobby', v)}
                />

                <Section
                  title="2. Trip Type"
                  options={tripTypes}
                  selected={selections.type}
                  onSelect={(v) => handleSelect('type', v)}
                />

                <Section
                  title="3. Group Size"
                  options={groupSizes}
                  selected={selections.group}
                  onSelect={(v) => handleSelect('group', v)}
                />

                <Section
                  title="4. Budget"
                  options={budgets}
                  selected={selections.budget}
                  onSelect={(v) => handleSelect('budget', v)}
                />

                <button
                  disabled
                  className="w-full py-3 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed"
                >
                  Complete All Selections
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-semibold mb-4">
                  Trips Perfect for You
                </h3>

                {/* 🔹 CARD LIST */}
                <div className="grid md:grid-cols-2 gap-6">
                  {indianTrips.map((trip) => (
                    <Link key={trip.id} to={`/tour-card/${trip.id}`}>
                      <div className="bg-white shadow rounded-xl overflow-hidden hover:scale-[1.02] transition">
                        <img
                          src={trip.image}
                          alt={trip.title}
                          className="w-full h-44 object-cover"
                        />
                        <div className="p-4 space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="bg-pink-200 text-pink-700 px-2 py-1 rounded-full text-xs">
                              {trip.type}
                            </span>
                            <span className="font-bold">
                              {trip.price}
                            </span>
                          </div>

                          <h4 className="font-semibold">
                            {trip.title}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {trip.location}
                          </p>

                          <div className="text-sm text-gray-600">
                            {trip.duration} • {trip.difficulty}
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {trip.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="bg-gray-100 text-xs px-2 py-1 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <button
                  onClick={resetPlanner}
                  className="w-full mt-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Back to Search
                </button>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}

/* 🔹 Reusable Section Component */
function Section({ title, options, selected, onSelect }) {
  return (
    <div>
      <h4 className="font-medium mb-2">{title}</h4>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`px-4 py-2 rounded-full border ${
              selected === opt
                ? 'bg-blue-100 text-blue-700 border-blue-300'
                : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
