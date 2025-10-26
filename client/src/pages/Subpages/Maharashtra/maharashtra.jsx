import { ChevronLeft, Clock, Bus, Plane, Hotel, Download } from "lucide-react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import maharashtraImg from "/Travel-Planner/client/src/assets/fort.jpg";
import jsPDF from "jspdf";

export default function Maharashtra() {
  const tripInfoRef = useRef(null);

  const [activeTab, setActiveTab] = useState("plan");
  const [travelers, setTravelers] = useState(2);
  const [duration, setDuration] = useState("5 Days");
  const [budget, setBudget] = useState("Medium (₹25,000 - ₹50,000)");
  const [selectedDestinations, setSelectedDestinations] = useState([]);

  const destinations = [
    { name: "Mumbai", type: "City" },
    { name: "Ajanta Caves", type: "Heritage" },
    { name: "Ellora Caves", type: "Heritage" },
    { name: "Lonavala", type: "Hill Station" },
    { name: "Konkan Coast", type: "Beach" },
    { name: "Nashik", type: "City" },
  ];

  const toggleDestination = (name) => {
    setSelectedDestinations((prev) =>
      prev.includes(name) ? prev.filter((d) => d !== name) : [...prev, name]
    );
  };

  // Predefined itineraries
  const itineraries = {
    Mumbai: [
      {
        day: 1,
        title: "Arrival in Mumbai",
        activities: [
          "Check-in at hotel",
          "Visit Gateway of India",
          "Marine Drive sunset walk",
          "Dinner at local restaurant",
        ],
        transport: "Plane",
        hotel: "4★ Hotel Mumbai",
      },
      {
        day: 2,
        title: "Mumbai Exploration",
        activities: [
          "Elephanta Caves tour",
          "Crawford Market shopping",
          "Bollywood studio visit",
          "Street food tour",
        ],
        transport: "Local transport",
        hotel: "4★ Hotel Mumbai",
      },
    ],
    "Ajanta Caves": [
      {
        day: 1,
        title: "Journey to Ajanta",
        activities: [
          "Morning flight to Aurangabad",
          "Ajanta Caves exploration",
          "UNESCO World Heritage site tour",
          "Local cultural dinner",
        ],
        transport: "Flight + Bus",
        hotel: "Heritage Hotel Aurangabad",
      },
    ],
    "Ellora Caves": [
      {
        day: 1,
        title: "Ellora Exploration",
        activities: [
          "Explore Kailasa Temple",
          "Visit Buddhist and Jain caves",
          "Photography tour",
          "Dinner at heritage restaurant",
        ],
        transport: "Bus",
        hotel: "Heritage Hotel Aurangabad",
      },
    ],
    Lonavala: [
      {
        day: 1,
        title: "Trip to Lonavala",
        activities: [
          "Drive from Mumbai/Pune",
          "Visit Bhushi Dam",
          "Explore Karla & Bhaja Caves",
          "Enjoy chikki shopping",
        ],
        transport: "Private Car",
        hotel: "Resort in Lonavala",
      },
    ],
    "Konkan Coast": [
      {
        day: 1,
        title: "Konkan Beach Retreat",
        activities: [
          "Scenic coastal drive",
          "Relax at Tarkarli Beach",
          "Water sports activities",
          "Seafood dinner",
        ],
        transport: "Bus/Car",
        hotel: "Beachside Resort",
      },
    ],
    Nashik: [
      {
        day: 1,
        title: "Nashik Wine Tour",
        activities: [
          "Drive to Nashik",
          "Visit Sula Vineyards",
          "Wine tasting experience",
          "Explore Panchavati temples",
        ],
        transport: "Car",
        hotel: "Vineyard Resort",
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
    doc.setTextColor(255, 87, 34); // Orange color
    doc.text("Maharashtra Trip Plan", 20, 20);

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

    doc.save("Maharashtra_Trip.pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
  {/* Header */}
  <div className="shadow-md h-14 flex items-center px-6 bg-white sticky top-0 z-20">
    <Link
      to="/"
      className="flex items-center text-orange-600 hover:text-orange-700 transition-all"
    >
      <ChevronLeft className="h-6 w-6" />
      <span className="ml-2 font-semibold">Back to Home</span>
    </Link>
  </div>

  {/* Main Content */}
  <div className="flex flex-col lg:flex-row gap-10 p-8 lg:p-12">
    {/* Left Column */}
    <div className="w-full lg:w-1/2 flex flex-col gap-6">
      <div className="relative h-[60vh] rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
        <img
          src={maharashtraImg}
          alt="Maharashtra"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-orange-600 px-4 py-2 rounded-lg text-white font-semibold shadow-lg">
          Discover Maharashtra
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-xl space-y-4">
        <h3 className="text-2xl font-bold text-orange-600">Why Maharashtra?</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">🌐 UNESCO Heritage Sites</li>
          <li className="flex items-center gap-2">🏙️ Vibrant Cities</li>
          <li className="flex items-center gap-2">🏖️ Beautiful Coastline</li>
          <li className="flex items-center gap-2">🎭 Rich Culture</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-xl space-y-2">
        <h3 className="text-2xl font-bold text-orange-600">Quick Facts</h3>
        <ul className="text-gray-700 space-y-1">
          <li><span className="font-semibold">Best Time:</span> Nov - Feb</li>
          <li><span className="font-semibold">Language:</span> Marathi, Hindi, English</li>
          <li><span className="font-semibold">Currency:</span> ₹ Indian Rupee</li>
          <li><span className="font-semibold">Time Zone:</span> IST (UTC+5:30)</li>
        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className="w-full lg:w-1/2 flex flex-col gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-2xl space-y-6">
        {/* Tabs */}
        <div className="flex space-x-6 border-b border-gray-300 pb-2">
          {["plan", "itinerary", "book"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-semibold pb-1 transition-colors duration-300 ${
                activeTab === tab
                  ? "text-white bg-orange-500 px-4 py-1 rounded-full shadow-md"
                  : "text-gray-500 hover:text-orange-500"
              }`}
            >
              {tab === "plan" ? "Plan Trip" : tab === "itinerary" ? "View Itinerary" : "Book Now"}
            </button>
          ))}
        </div>

        {/* Plan Trip */}
        {activeTab === "plan" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-600">
              Customize Your Maharashtra Trip
            </h2>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="date" className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 transition" />
              <input type="date" className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 transition" />

              <div className="flex items-center border rounded-lg p-3 justify-between shadow-sm">
                <span>Travelers</span>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 bg-orange-200 rounded" onClick={() => setTravelers(Math.max(1, travelers - 1))}>-</button>
                  <span>{travelers}</span>
                  <button className="px-3 py-1 bg-orange-200 rounded" onClick={() => setTravelers(travelers + 1)}>+</button>
                </div>
              </div>

              <select value={duration} onChange={(e) => setDuration(e.target.value)} className="p-3 border rounded-lg shadow-sm">
                <option>5 Days</option>
                <option>7 Days</option>
                <option>10 Days</option>
              </select>

              <select value={budget} onChange={(e) => setBudget(e.target.value)} className="p-3 border rounded-lg shadow-sm md:col-span-2">
                <option>Medium (₹25,000 - ₹50,000)</option>
                <option>Low (₹10,000 - ₹25,000)</option>
                <option>High (₹50,000+)</option>
              </select>
            </div>

            {/* Destination Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {destinations.map((dest) => (
                <button
                  key={dest.name}
                  onClick={() => toggleDestination(dest.name)}
                  className={`p-4 border rounded-2xl text-left shadow-sm hover:scale-105 transition-transform duration-300 ${
                    selectedDestinations.includes(dest.name)
                      ? "border-orange-500 bg-orange-50 shadow-md"
                      : "border-gray-300"
                  }`}
                >
                  <span className="font-semibold">{dest.name}</span>
                  <br />
                  <span className="text-gray-500 text-sm">{dest.type}</span>
                </button>
              ))}
            </div>

            {/* Generate Button */}
            <button
              onClick={() => {
                setActiveTab("itinerary");
                setTimeout(() => tripInfoRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
              }}
              className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white py-3 rounded-2xl font-bold shadow-lg hover:from-orange-500 hover:to-orange-700 transition"
            >
              Generate Trip Plan
            </button>
          </div>
        )}

        {/* Itinerary */}
        {activeTab === "itinerary" && (
          <div ref={tripInfoRef} className="space-y-6">
            {finalItinerary.length > 0 ? finalItinerary.map((dayPlan, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                    Day {dayPlan.day}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800">{dayPlan.title}</h3>
                </div>

                <ul className="space-y-1 text-gray-700 mb-3">
                  {dayPlan.activities.map((act, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Clock size={16} className="text-gray-500" /> {act}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-6 text-gray-600 text-sm">
                  <div className="flex items-center gap-1">
                    {dayPlan.transport.includes("Plane") || dayPlan.transport.includes("Flight") ? (
                      <Plane size={16} className="text-orange-500" />
                    ) : (
                      <Bus size={16} className="text-orange-500" />
                    )}
                    {dayPlan.transport}
                  </div>
                  <div className="flex items-center gap-1">
                    <Hotel size={16} className="text-orange-500" /> {dayPlan.hotel}
                  </div>
                </div>
              </div>
            )) : (
              <p className="text-gray-500">No destinations selected.</p>
            )}
          </div>
        )}

        {/* Book Now */}
        {activeTab === "book" && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-600">Book Your Trip</h2>
            <div className="bg-white p-4 rounded-2xl shadow space-y-2">
              <p>Travelers: <span className="font-semibold">{travelers}</span></p>
              <p>Duration: <span className="font-semibold">{duration}</span></p>
              <p>Budget: <span className="font-semibold">{calculateBudget()}</span></p>
              <p>Total Days: <span className="font-semibold">{totalDays}</span></p>
            </div>
            <button
              onClick={handleDownloadPDF}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-2xl font-bold shadow-lg transition"
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
