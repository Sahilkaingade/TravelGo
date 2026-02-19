import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { indianTrips } from "../../data/indianTrips";

const TourCard = () => {
  const { id } = useParams();
  const trip = indianTrips.find((t) => t.id === Number(id));

  const [openDay, setOpenDay] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  if (!trip) return <div className="p-10 text-center">Tour not found</div>;

  const {
    title,
    location,
    price,
    rating,
    duration,
    difficulty,
    groupSize = "Flexible",
    bestTime = "All year",
    pickup = "Airport pickup",
    accommodation = "Standard Hotel",
    meals = "As per itinerary",
    description = "No description available.",
    itinerary = [],
    inclusions = [],
    exclusions = [],
    tags = [],
    image,
  } = trip;

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

      {/* HERO GALLERY */}
      <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[80vh] p-4">
        <img
          src={image}
          alt={title}
          className="col-span-2 row-span-2 object-cover w-full h-full rounded-3xl"
        />
        <img
  src={image}
  alt={`${title} preview`}
  className="object-cover w-full h-full rounded-3xl"
/>

<img
  src={image}
  alt={`${title} view`}
  className="object-cover w-full h-full rounded-3xl"
/>

      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10 py-14">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-10">

          {/* TITLE */}
          <div>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-gray-600">{location}</p>
            <div className="flex gap-4 mt-3">
              <span className="bg-green-100 px-3 py-1 rounded-full">
                ⭐ {rating}
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                {duration}
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                {difficulty}
              </span>
            </div>
          </div>

          {/* DESCRIPTION */}
          <Section title="About this experience">
            <p>
              {expanded
                ? description
                : description.slice(0, 150) + "..."}
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-600 mt-2 font-semibold"
            >
              {expanded ? "Show Less" : "Read More"}
            </button>
          </Section>

          {/* TAGS */}
          <Section title="Highlights">
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-200 px-4 py-2 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Section>

          {/* ITINERARY */}
          {itinerary.length > 0 && (
            <Section title="Day-wise Plan">
              {itinerary.map((day, i) => (
                <div key={i} className="border rounded-xl mb-3">
                  <button
                    onClick={() =>
                      setOpenDay(openDay === i ? null : i)
                    }
                    className="w-full flex justify-between p-4 bg-gray-100 font-semibold"
                  >
                    Day {i + 1}
                    <span>{openDay === i ? "-" : "+"}</span>
                  </button>
                  {openDay === i && (
                    <div className="p-4 bg-white">{day}</div>
                  )}
                </div>
              ))}
            </Section>
          )}

          {/* INCLUSIONS & EXCLUSIONS */}
          <Section title="What's Included & Excluded">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-green-600 mb-3">
                  ✔ Inclusions
                </h3>
                {inclusions.map((item, i) => (
                  <p key={i}>• {item}</p>
                ))}
              </div>
              <div>
                <h3 className="font-bold text-red-600 mb-3">
                  ✘ Exclusions
                </h3>
                {exclusions.map((item, i) => (
                  <p key={i}>• {item}</p>
                ))}
              </div>
            </div>
          </Section>

          {/* HOW TO REACH */}
          <Section title={`How to reach ${location}`}>
            <div className="flex gap-3 flex-wrap">
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
                  <div
                    key={i}
                    className="bg-gray-100 p-4 rounded-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </Section>

          {/* REVIEWS */}
          <Section title="Traveler Reviews">
            <div className="space-y-4">
              <Review name="Rahul" rating={5} />
              <Review name="Priya" rating={4} />
            </div>
          </Section>

          {/* RELATED TOURS */}
          <Section title="You may also like">
            <div className="grid md:grid-cols-3 gap-6">
              {indianTrips
                .filter((t) => t.id !== trip.id)
                .slice(0, 3)
                .map((related) => (
                  <Link
                    key={related.id}
                    to={`/tour-card/${related.id}`}
                    className="bg-white shadow-lg rounded-2xl p-4 hover:scale-105 transition"
                  >
                    <img
  src={related.image}
  alt={related.title}
  className="h-40 w-full object-cover rounded-xl"
/>

                    <h3 className="font-bold mt-2">
                      {related.title}
                    </h3>
                    <p className="text-green-600">
                      {related.price}
                    </p>
                  </Link>
                ))}
            </div>
          </Section>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="sticky top-20 space-y-6">

          <div className="bg-white shadow-2xl rounded-3xl p-6">
            <p className="text-sm text-gray-500">Starting from</p>
            <h2 className="text-4xl font-bold text-green-600">
              ₹{price}
            </h2>

            <input
              type="date"
              className="mt-4 w-full border rounded-xl p-3"
            />

            <select className="mt-4 w-full border rounded-xl p-3">
              <option>1 Traveler</option>
              <option>2 Travelers</option>
              <option>3 Travelers</option>
              <option>4 Travelers</option>
            </select>

            <button className="mt-6 w-full bg-black text-white py-4 rounded-xl hover:scale-105 transition">
              Book Now
            </button>
          </div>

          <Info label="🏨 Stay" value={accommodation} />
          <Info label="🍽 Meals" value={meals} />
          <Info label="📍 Pickup" value={pickup} />
          <Info label="📅 Best Time" value={bestTime} />
          <Info label="👥 Group Size" value={groupSize} />
        </div>
      </div>
    </div>
  );
};

/* COMPONENTS */

const Section = ({ title, children }) => (
  <div className="bg-white rounded-3xl shadow-lg p-6">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

const Info = ({ label, value }) => (
  <div className="bg-white rounded-2xl shadow-md p-4">
    <p className="font-semibold">{label}</p>
    <p className="text-gray-600">{value}</p>
  </div>
);

const Review = ({ name, rating }) => (
  <div className="bg-gray-100 p-4 rounded-xl">
    <p className="font-semibold">
      {name} {"⭐".repeat(rating)}
    </p>
    <p>Wonderful experience! Highly recommended.</p>
  </div>
);

export default TourCard;
