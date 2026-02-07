import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { indianTrips } from "../../data/indianTrips";

const TourCard = () => {
  const { id } = useParams();
  const [selectedCity, setSelectedCity] = useState(null);
  const [openDay, setOpenDay] = useState(null);

  const trip = indianTrips.find((t) => t.id === Number(id));
  if (!trip) return <div className="p-10 text-center">Tour not found</div>;

  const cities = ["Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad"];

  const travelGuide = {
    Mumbai: ["✈ 1h flight", "🚆 Konkan Railway", "🚗 12–14h drive"],
    Delhi: ["✈ 2.5h flight", "🚆 Goa Express", "🚗 Not recommended"],
    Bangalore: ["✈ 1.5h flight", "🚆 Vasco Express", "🚗 10–12h drive"],
    Pune: ["✈ 1h flight", "🚆 Intercity", "🚗 8–10h drive"],
    Hyderabad: ["✈ 1.5h flight", "🚆 Vasco Express", "🚗 12h drive"],
  };

  return (
    <div className="bg-gray-50">

      {/* HERO WITH GALLERY */}
      <div className="relative h-[85vh]">
        <img
  src={trip.image}
  alt={trip.title}
  className="absolute inset-0 w-full h-full object-cover"
/>

        <div className="absolute inset-0 bg-black/50" />

        {/* FLOATING BADGES */}
        <div className="absolute top-6 left-6 flex gap-3">
          <span className="bg-white px-4 py-2 rounded-full font-semibold">
            ⭐ {trip.rating}
          </span>
          <span className="bg-green-500 text-white px-4 py-2 rounded-full">
            Bestseller
          </span>
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 h-full flex items-end px-10 pb-16">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-extrabold">{trip.title}</h1>
            <p className="text-lg opacity-90 mt-2">{trip.location}</p>

            {/* STATS STRIP */}
            <div className="mt-6 grid grid-cols-4 gap-4">
              <Stat label="Duration" value={trip.duration} />
              <Stat label="Difficulty" value={trip.difficulty} />
              <Stat label="Group" value={trip.groupSize} />
              <Stat label="Price" value={`₹${trip.price}`} />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10 py-14">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-12">

          {/* ABOUT */}
          <Section title="About this experience">
            <p>{trip.description}</p>
          </Section>

          {/* WHY */}
          <Section title="Why travelers love this">
            <div className="grid md:grid-cols-3 gap-4">
              <Badge text="🌊 Prime Location" />
              <Badge text="🏨 Luxury Stay" />
              <Badge text="🚗 Easy Transfers" />
            </div>
          </Section>

          {/* ITINERARY ACCORDION */}
          <Section title="Day-wise Plan">
            {trip.itinerary.map((day, i) => (
              <div
                key={i}
                className="border rounded-xl mb-4 overflow-hidden"
              >
                <button
                  onClick={() => setOpenDay(openDay === i ? null : i)}
                  className="w-full flex justify-between items-center p-4 bg-gray-100 font-semibold"
                >
                  Day {i + 1}
                  <span>{openDay === i ? "−" : "+"}</span>
                </button>

                {openDay === i && (
                  <div className="p-4 bg-white">
                    {day}
                  </div>
                )}
              </div>
            ))}
          </Section>

          {/* HOW TO REACH */}
          <Section title={`How to reach ${trip.location}`}>
            <div className="flex gap-4 flex-wrap">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedCity === city
                      ? "bg-black text-white"
                      : "bg-white"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>

            {selectedCity && (
              <div className="mt-4 grid md:grid-cols-3 gap-4">
                {travelGuide[selectedCity].map((item, i) => (
                  <div key={i} className="bg-gray-100 p-4 rounded-xl">
                    {item}
                  </div>
                ))}
              </div>
            )}
          </Section>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="sticky top-20 space-y-6">

          {/* PRICE CARD */}
          <div className="bg-white shadow-2xl rounded-3xl p-6">
            <p className="text-sm text-gray-500">Starting from</p>
            <h2 className="text-4xl font-bold text-green-600">
              ₹{trip.price}
            </h2>

            <button className="mt-6 w-full bg-black text-white py-4 rounded-xl text-lg hover:scale-105 transition">
              Book Now
            </button>
          </div>

          {/* INFO STACK */}
          <Info label="🏨 Stay" value={trip.accommodation} />
          <Info label="🍽 Meals" value={trip.meals} />
          <Info label="📍 Pickup" value={trip.pickup} />
          <Info label="📅 Best Time" value={trip.bestTime} />
        </div>
      </div>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 inset-x-0 bg-white shadow-xl p-4 flex justify-between items-center lg:hidden">
        <span className="font-bold">₹{trip.price}</span>
        <button className="bg-black text-white px-6 py-3 rounded-xl">
          Book Now
        </button>
      </div>
    </div>
  );
};

/* ---------- SMALL COMPONENTS ---------- */

const Section = ({ title, children }) => (
  <div className="bg-white rounded-3xl shadow-lg p-6">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

const Badge = ({ text }) => (
  <div className="bg-gray-100 p-4 rounded-xl font-semibold">
    {text}
  </div>
);

const Stat = ({ label, value }) => (
  <div className="bg-white/90 p-4 rounded-xl text-center">
    <p className="text-xs uppercase opacity-70">{label}</p>
    <p className="font-bold">{value}</p>
  </div>
);

const Info = ({ label, value }) => (
  <div className="bg-white rounded-2xl shadow-md p-4">
    <p className="font-semibold">{label}</p>
    <p className="text-gray-600">{value}</p>
  </div>
);

export default TourCard;
