import { ChevronLeft, Clock, Bus, Plane, Hotel, Download, Waves, Mountain, Trees, Camera } from "lucide-react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import keralaImg from "/Travel-Planner/client/src/assets/keralabg.jpeg";
import jsPDF from "jspdf";

export default function Kerala() {
  const tripInfoRef = useRef(null);

  const [activeTab, setActiveTab] = useState("plan");
  const [travelers, setTravelers] = useState(2);
  const [duration, setDuration] = useState("5 Days");
  const [budget, setBudget] = useState("Medium (₹25,000 - ₹50,000)");
  const [selectedDestinations, setSelectedDestinations] = useState([]);

  const destinations = [
    { name: "Kochi", type: "Port City" },
    { name: "Munnar", type: "Hill Station" },
    { name: "Alleppey Backwater", type: "Backwater" },
    { name: "Wayanad", type: "Nature" },
    { name: "Kovalam", type: "Beach" },
    { name: "Thekkady", type: "Wild Life" },
  ];

  const toggleDestination = (name) => {
    setSelectedDestinations((prev) =>
      prev.includes(name) ? prev.filter((d) => d !== name) : [...prev, name]
    );
  };

  // Kerala-specific itineraries
  const itineraries = {
    Kochi: [
      {
        day: 1,
        title: "Arrival in Kochi",
        activities: [
          "Check-in at hotel",
          "Fort Kochi sightseeing",
          "Jewish Synagogue visit",
          "Marine Drive evening walk",
        ],
        transport: "Flight",
        hotel: "4★ Hotel Kochi",
      },
      {
        day: 2,
        title: "Kochi Culture & Shopping",
        activities: [
          "Kathakali performance",
          "Mattancherry Palace visit",
          "Shopping at local markets",
          "Dinner at seaside cafe",
        ],
        transport: "Local transport",
        hotel: "4★ Hotel Kochi",
      },
    ],
    Munnar: [
      {
        day: 3,
        title: "Trip to Munnar",
        activities: [
          "Drive to Munnar",
          "Tea plantations tour",
          "Eravikulam National Park visit",
          "Evening relax at hotel",
        ],
        transport: "Car",
        hotel: "Hill Resort Munnar",
      },
    ],
    "Alleppey Backwater": [
      {
        day: 4,
        title: "Alleppey Backwater Cruise",
        activities: [
          "Houseboat check-in",
          "Cruise through backwaters",
          "Local village visit",
          "Kerala cuisine onboard",
        ],
        transport: "Boat",
        hotel: "Houseboat Stay",
      },
    ],
    Wayanad: [
      {
        day: 5,
        title: "Explore Wayanad",
        activities: [
          "Edakkal Caves visit",
          "Soochipara Waterfalls trek",
          "Wildlife spotting at sanctuary",
          "Return to hotel",
        ],
        transport: "Car",
        hotel: "Wayanad Jungle Resort",
      },
    ],
    Kovalam: [
      {
        day: 6,
        title: "Kovalam Beach Relaxation",
        activities: [
          "Sunbathing and beach activities",
          "Lighthouse visit",
          "Water sports (optional)",
          "Sunset dinner on beach",
        ],
        transport: "Car",
        hotel: "Beach Resort Kovalam",
      },
    ],
    Thekkady: [
      {
        day: 7,
        title: "Thekkady Wildlife Adventure",
        activities: [
          "Periyar Tiger Reserve boat safari",
          "Spice plantation visit",
          "Cultural show",
          "Evening at leisure",
        ],
        transport: "Car",
        hotel: "Wildlife Resort Thekkady",
      },
    ],
  };

  // Combine selected itineraries
  const finalItinerary = selectedDestinations.flatMap(
    (place) => itineraries[place] || []
  );

  const totalDays = finalItinerary.length;

  // Budget Calculation
  const calculateBudget = () => {
    if (budget.includes("Low"))
      return `₹${10000 * travelers} - ₹${25000 * travelers}`;
    if (budget.includes("Medium"))
      return `₹${25000 * travelers} - ₹${50000 * travelers}`;
    if (budget.includes("High")) return `₹${50000 * travelers}+`;
    return budget;
  };

  // PDF Download with Attractive Layout
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(255, 87, 34); // green color
    doc.text("Kerala Trip Plan", 20, 20);

    doc.setDrawColor(255, 87, 34);
    doc.setLineWidth(1);
    doc.line(20, 25, 190, 25);

    // Basic Info
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`👥 Travelers: ${travelers}`, 20, 40);
    doc.text(`🕒 Duration: ${duration}`, 20, 48);
    doc.text(`💰 Budget: ${calculateBudget()}`, 20, 56);
    doc.text(
      `📍 Destinations: ${selectedDestinations.join(", ") || "Not selected"}`,
      20,
      64
    );
    doc.text(`📅 Total Days: ${totalDays}`, 20, 72);

    // Section Title
    let y = 90;
    doc.setFontSize(16);
    doc.setTextColor(255, 87, 34);
    doc.text("📖 Detailed Itinerary", 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.setTextColor(50, 50, 50);

    // Add Itinerary
    finalItinerary.forEach((day) => {
      doc.setFont("helvetica", "bold");
      doc.text(`Day ${day.day}: ${day.title}`, 20, y);
      y += 8;

      doc.setFont("helvetica", "normal");
      day.activities.forEach((act) => {
        doc.text(`- ${act}`, 25, y);
        y += 6;
      });

      doc.text(`🚍 Transport: ${day.transport}`, 25, y);
      y += 6;
      doc.text(`🏨 Hotel: ${day.hotel}`, 25, y);
      y += 10;

      // Add separator
      doc.setDrawColor(200, 200, 200);
      doc.line(20, y, 190, y);
      y += 10;

      // Avoid overflow
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save("Kerala_Trip.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="shadow-md h-14 flex items-center px-6 bg-white">
        <Link
          to="/"
          className="flex items-center text-green-600 hover:text-green-700 transition"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="ml-2 font-semibold">Back to Home</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-10 p-10">
        {/* Left Column */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="relative h-[70vh]">
            <img
              src={keralaImg}
              alt="Kerala"
              className="rounded-xl shadow-xl w-full h-full object-cover border-4 border-green-200 hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute bottom-4 left-4 text-white bg-green-600 px-3 py-1 rounded">
              Discover Kerala
            </span>
          </div>

          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h3 className="text-xl font-semibold">Why Kerala?</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex"><Waves className="text-blue-500"/> &nbsp; &nbsp; Sea Backwaters</li>
              <li className="flex"><Mountain className="text-green-500"/> &nbsp; &nbsp; Vibrant Cities</li>
              <li className="flex"><Trees className="text-green-500"/> &nbsp; &nbsp; Beautiful Coastline</li>
              <li className="flex"><Camera className="text-purple-500"/> &nbsp; &nbsp; Rich Culture</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow space-y-2">
            <h3 className="text-xl font-semibold">Quick Facts</h3>
            <ul className="text-gray-700">
              <li><span className="font-semibold">Best Time:</span> Oct - Mar</li>
              <li><span className="font-semibold">Language:</span> Malayalam, Hindi, English</li>
              <li><span className="font-semibold">Currency:</span> ₹ Indian Rupee</li>
              <li><span className="font-semibold">Time Zone:</span> IST (UTC+5:30)</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow space-y-6">
            {/* Tabs */}
            <div className="flex space-x-6 border-b border-gray-300 pb-2">
              <button
                onClick={() => setActiveTab("plan")}
                className={`font-semibold pb-1 ${
                  activeTab === "plan"
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-500"
                }`}
              >
                Plan Trip
              </button>
              <button
                onClick={() => setActiveTab("itinerary")}
                className={`font-semibold pb-1 ${
                  activeTab === "itinerary"
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-500"
                }`}
              >
                View Itinerary
              </button>
              <button
                onClick={() => setActiveTab("book")}
                className={`font-semibold pb-1 ${
                  activeTab === "book"
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-500"
                }`}
              >
                Book Now
              </button>
            </div>

            {/* Plan Trip */}
            {activeTab === "plan" && (
              <>
                <h2 className="text-xl font-semibold text-green-600">
                  Customize Your Kerala Trip
                </h2>

                {/* Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="date" className="p-2 border rounded" />
                  <input type="date" className="p-2 border rounded" />

                  <div className="flex items-center border rounded p-2 justify-between">
                    <span>Number of Travelers</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          setTravelers(Math.max(1, travelers - 1))
                        }
                      >
                        -
                      </button>
                      <span>{travelers}</span>
                      <button onClick={() => setTravelers(travelers + 1)}>
                        +
                      </button>
                    </div>
                  </div>

                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="p-2 border rounded"
                  >
                    <option>5 Days</option>
                    <option>7 Days</option>
                    <option>10 Days</option>
                  </select>

                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="p-2 border rounded col-span-2"
                  >
                    <option>Medium (₹25,000 - ₹50,000)</option>
                    <option>Low (₹10,000 - ₹25,000)</option>
                    <option>High (₹50,000+)</option>
                  </select>
                </div>

                {/* Destination Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {destinations.map((dest) => (
                    <button
                      key={dest.name}
                      onClick={() => toggleDestination(dest.name)}
                      className={`p-4 border rounded-lg text-left ${
                        selectedDestinations.includes(dest.name)
                          ? "border-green-500 bg-green-50"
                          : "border-gray-300"
                      }`}
                    >
                      <span className="font-semibold">{dest.name}</span>
                      <br />
                      <span className="text-gray-500 text-sm">{dest.type}</span>
                    </button>
                  ))}
                </div>

                {/* Generate Trip Plan */}
                <button
                  onClick={() => {
                    setActiveTab("itinerary");
                    setTimeout(() => {
                      tripInfoRef.current?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                  className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  Generate Trip Plan
                </button>
              </>
            )}

            {/* Itinerary */}
            {activeTab === "itinerary" && (
              <div
                ref={tripInfoRef}
                className="p-6 bg-gray-50 border-t border-gray-200 rounded-xl shadow"
              >
                <h2 className="text-xl font-semibold text-green-600 mb-2">
                  {duration} Kerala Itinerary
                </h2>
                <p className="text-gray-600 mb-4">
                  Total Days Planned: <span className="font-semibold">{totalDays}</span>
                </p>

                <div className="flex justify-end mb-4">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                    {travelers} Travelers
                  </span>
                </div>

                <div className="space-y-8">
                  {finalItinerary.length > 0 ? (
                    finalItinerary.map((dayPlan, index) => (
                      <div
                        key={index}
                        className="border-l-2 border-green-500 pl-4"
                      >
                        {/* Day Badge */}
                        <div className="flex items-center mb-2">
                          <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md text-sm font-medium mr-2">
                            Day {dayPlan.day}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-800">
                            {dayPlan.title}
                          </h3>
                        </div>

                        {/* Activities */}
                        <ul className="space-y-1 text-gray-700 mb-3">
                          {dayPlan.activities.map((activity, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Clock size={16} className="text-gray-500" />
                              {activity}
                            </li>
                          ))}
                        </ul>

                        {/* Transport + Hotel */}
                        <div className="flex items-center gap-6 text-gray-600 text-sm">
                          <div className="flex items-center gap-1">
                            {dayPlan.transport.includes("Plane") ||
                            dayPlan.transport.includes("Flight") ? (
                              <Plane size={16} className="text-green-500" />
                            ) : (
                              <Bus size={16} className="text-green-500" />
                            )}
                            {dayPlan.transport}
                          </div>
                          <div className="flex items-center gap-1">
                            <Hotel size={16} className="text-green-500" />
                            {dayPlan.hotel}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No destinations selected.</p>
                  )}
                </div>

                {/* Go to Book Now */}
                <button
                  onClick={() => setActiveTab("book")}
                  className="w-full mt-6 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  Proceed to Book Now
                </button>
              </div>
            )}

            {/* Book Now */}
            {activeTab === "book" && (
              <div className="p-6 bg-gray-50 border-t border-gray-200 rounded-xl shadow">
                <h2 className="text-xl font-semibold text-green-600">Book Your Trip</h2>

                {/* Preview */}
                <div className="mt-4 space-y-3 text-gray-700">
                  <p><span className="font-semibold">Travelers:</span> {travelers}</p>
                  <p><span className="font-semibold">Duration:</span> {duration}</p>
                  <p><span className="font-semibold">Budget:</span> {calculateBudget()}</p>
                  <p><span className="font-semibold">Total Days:</span> {totalDays}</p>

                  {/* Destinations with details */}
                  <div>
                    <span className="font-semibold">Destinations & Plans:</span>
                    {finalItinerary.length > 0 ? (
                      <ul className="mt-2 space-y-2 list-disc list-inside">
                        {finalItinerary.map((dayPlan, i) => (
                          <li key={i}>
                            <span className="font-semibold">{dayPlan.title}</span>  
                            <div className="text-sm text-gray-600">
                              Hotel: {dayPlan.hotel} | Transport: {dayPlan.transport}
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500">Not selected</p>
                    )}
                  </div>
                </div>

                {/* Download Button */}
                <button
                  onClick={handleDownloadPDF}
                  className="mt-6 flex items-center gap-2 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  <Download size={18} /> Download PDF
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
