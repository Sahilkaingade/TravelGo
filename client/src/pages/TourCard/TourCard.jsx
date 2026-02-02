import React from "react";
import { useParams } from "react-router-dom";
import { indianTrips } from "../../data/indianTrips";

const TourCard = () => {
  const { id } = useParams();

  const trip = indianTrips.find(
    (item) => item.id === Number(id)
  );

  if (!trip) {
    return <div className="p-10 text-center">Tour not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 mt-16">
      <img
        src={trip.image}
        alt={trip.title}
        className="w-full h-[400px] object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-6">{trip.title}</h1>
      <p className="text-gray-500">{trip.location}</p>

      <div className="flex gap-6 mt-4 font-semibold">
        <span>{trip.duration}</span>
        <span>{trip.difficulty}</span>
        <span className="text-green-600">₹{trip.price}</span>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {trip.tags.map((tag, i) => (
          <span key={i} className="px-3 py-1 bg-gray-200 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-6 text-gray-600">{trip.description}</p>

      <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg">
        Book Now
      </button>
    </div>
  );
};

export default TourCard;
