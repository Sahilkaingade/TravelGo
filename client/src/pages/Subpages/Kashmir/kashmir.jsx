import { ChevronLeft, Clock, Bus, Plane, Hotel, Download, Waves, Mountain, Trees, Camera } from "lucide-react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import kashmirImg from "/Travel-Planner/client/src/assets/kashmirbg.jpeg";
import jsPDF from "jspdf";

export default function Kashmir() {
  const tripInfoRef = useRef(null);

  const [activeTab, setActiveTab] = useState("plan");
  const [travelers, setTravelers] = useState(2);
  const [duration, setDuration] = useState("5 Days");
  const [budget, setBudget] = useState("Medium (INR 25,000 - 50,000)");
  const [selectedDestinations, setSelectedDestinations] = useState([]);

  const destinations = [
    { name: "Srinagar", type: "Dal Lake" },
    { name: "Gulmarg", type: "Hill Station" },
    { name: "Pahalgam", type: "Valley" },
    { name: "Sonamarg", type: "Meadow" },
    { name: "Leh-Ladakh", type: "Desert" },
    { name: "Jammu", type: "Heritage" },
  ];

  const toggleDestination = (name) => {
    setSelectedDestinations((prev) =>
      prev.includes(name) ? prev.filter((d) => d !== name) : [...prev, name]
    );
  };

  // Kashmir itineraries
  const itineraries = {
    Srinagar: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        activities: [
          "Check-in at hotel",
          "Shikara ride at Dal Lake",
          "Visit Mughal Gardens",
          "Evening stroll at Boulevard Road",
        ],
        transport: "Flight",
        hotel: "5 Star Houseboat / Hotel Srinagar",
      },
    ],
    Gulmarg: [
      {
        day: 2,
        title: "Gulmarg Adventure",
        activities: [
          "Drive to Gulmarg",
          "Gondola ride",
          "Skiing / Snow activities (seasonal)",
          "Evening at leisure in resort",
        ],
        transport: "Car",
        hotel: "Gulmarg Resort",
      },
    ],
    Pahalgam: [
      {
        day: 3,
        title: "Pahalgam Valley Exploration",
        activities: [
          "Drive to Pahalgam",
          "Betaab Valley visit",
          "Aru & Lidder River sightseeing",
          "Evening cultural show",
        ],
        transport: "Car",
        hotel: "Pahalgam Hotel / Resort",
      },
    ],
    Sonamarg: [
      {
        day: 4,
        title: "Sonamarg Meadow Trek",
        activities: [
          "Drive to Sonamarg",
          "Thajiwas Glacier visit",
          "Trekking & horse ride in meadows",
          "Return to Srinagar for overnight stay",
        ],
        transport: "Car",
        hotel: "Srinagar Hotel",
      },
    ],
    "Leh-Ladakh": [
      {
        day: 5,
        title: "Leh-Ladakh Adventure",
        activities: [
          "Flight/Drive to Leh",
          "Visit Shanti Stupa & Leh Palace",
          "Local market shopping",
          "Overnight at Leh hotel",
        ],
        transport: "Flight/Car",
        hotel: "Leh Hotel",
      },
      {
        day: 6,
        title: "Pangong & Nubra Valley Excursion",
        activities: [
          "Drive to Pangong Lake",
          "Visit Nubra Valley (Diskit & Hunder)",
          "Camel ride in sand dunes",
          "Return to Leh for overnight stay",
        ],
        transport: "Car",
        hotel: "Leh Hotel",
      },
    ],
    Jammu: [
      {
        day: 7,
        title: "Jammu Heritage Tour",
        activities: [
          "Drive to Jammu",
          "Visit Vaishno Devi Temple (optional)",
          "Raghunath Temple visit",
          "Evening leisure & local cuisine tasting",
        ],
        transport: "Car",
        hotel: "Jammu Hotel",
      },
    ],
  };

  // Combine itineraries
  const finalItinerary = selectedDestinations.flatMap(
    (place) => itineraries[place] || []
  );

  const totalDays = finalItinerary.length;

  // Budget Calculation
  const calculateBudget = () => {
    if (budget.includes("Low"))
      return `INR ${10000 * travelers} - INR ${25000 * travelers}`;
    if (budget.includes("Medium"))
      return `INR ${25000 * travelers} - INR ${50000 * travelers}`;
    if (budget.includes("High")) return `INR ${50000 * travelers}+`;
    return budget;
  };

  // PDF Export
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(44, 62, 80);
    doc.text("Kashmir Trip Plan", 20, 20);

    doc.setDrawColor(100, 149, 237);
    doc.setLineWidth(1);
    doc.line(20, 25, 190, 25);

    
    // Basic Info
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Travelers: ${travelers}`, 20, 40);
    doc.text(`Duration: ${duration}`, 20, 48);
    doc.text(`Budget: ${calculateBudget()}`, 20, 56);
    doc.text(
      `Destinations: ${selectedDestinations.join(", ") || "Not selected"}`,
      20,
      64
    );
    doc.text(`Total Days: ${totalDays}`, 20, 72);

    // Section Title
    let y = 90;
    doc.setFontSize(16);
    doc.setTextColor(100, 149, 237);
    doc.text("Detailed Itinerary", 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.setTextColor(50, 50, 50);

    // Itinerary
    finalItinerary.forEach((day) => {
      doc.setFont("helvetica", "bold");
      doc.text(`Day ${day.day}: ${day.title}`, 20, y);
      y += 8;

      doc.setFont("helvetica", "normal");
      day.activities.forEach((act) => {
        doc.text(`- ${act}`, 25, y);
        y += 6;
      });

      doc.text(`Transport: ${day.transport}`, 25, y);
      y += 6;
      doc.text(`Hotel: ${day.hotel}`, 25, y);
      y += 10;

      doc.setDrawColor(200, 200, 200);
      doc.line(20, y, 190, y);
      y += 10;

      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save("Kashmir_Trip.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="shadow-md h-14 flex items-center px-6 bg-white">
        <Link
          to="/"
          className="flex items-center text-blue-600 hover:text-blue-700 transition"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="ml-2 font-semibold">Back to Home</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-10 p-10">
        {/* Left */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="relative h-[70vh]">
            <img
              src={kashmirImg}
              alt="kashmir"
              className="rounded-xl shadow-xl w-full h-full object-cover border-4 border-blue-200 hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute bottom-4 left-4 text-white bg-blue-600 px-3 py-1 rounded">
              Discover Kashmir
            </span>
          </div>

          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h3 className="text-xl font-semibold">Why Kashmir?</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex"><Waves className="text-blue-500"/> &nbsp; Pristine Dal Lake</li>
              <li className="flex"><Mountain className="text-green-500"/> &nbsp; Snow-Capped Mountains</li>
              <li className="flex"><Trees className="text-green-500"/> &nbsp; Alpine Meadows</li>
              <li className="flex"><Camera className="text-purple-500"/> &nbsp; Kashmiri Handicrafts</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow space-y-2">
            <h3 className="text-xl font-semibold">Quick Facts</h3>
            <ul className="text-gray-700">
              <li><span className="font-semibold">Best Time:</span> Apr - Oct</li>
              <li><span className="font-semibold">Language:</span> Kashmiri, Hindi, English</li>
              <li><span className="font-semibold">Currency:</span> INR</li>
              <li><span className="font-semibold">Time Zone:</span> IST (UTC+5:30)</li>
            </ul>
          </div>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow space-y-6">
            {/* Tabs */}
            <div className="flex space-x-6 border-b border-gray-300 pb-2">
              <button
                onClick={() => setActiveTab("plan")}
                className={`font-semibold pb-1 ${activeTab === "plan" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
              >
                Plan Trip
              </button>
              <button
                onClick={() => setActiveTab("itinerary")}
                className={`font-semibold pb-1 ${activeTab === "itinerary" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
              >
                View Itinerary
              </button>
              <button
                onClick={() => setActiveTab("book")}
                className={`font-semibold pb-1 ${activeTab === "book" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
              >
                Book Now
              </button>
            </div>

            {/* Plan Trip */}
            {activeTab === "plan" && (
              <>
                <h2 className="text-xl font-semibold text-blue-600">
                  Customize Your Kashmir Trip
                </h2>

                {/* Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="date" className="p-2 border rounded" />
                  <input type="date" className="p-2 border rounded" />

                  <div className="flex items-center border rounded p-2 justify-between">
                    <span>Number of Travelers</span>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => setTravelers(Math.max(1, travelers - 1))}>-</button>
                      <span>{travelers}</span>
                      <button onClick={() => setTravelers(travelers + 1)}>+</button>
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
                    <option>Medium (INR 25,000 - 50,000)</option>
                    <option>Low (INR 10,000 - 25,000)</option>
                    <option>High (INR 50,000+)</option>
                  </select>
                </div>

                {/* Destinations */}
                <div className="grid grid-cols-2 gap-4">
                  {destinations.map((dest) => (
                    <button
                      key={dest.name}
                      onClick={() => toggleDestination(dest.name)}
                      className={`p-4 border rounded-lg text-left ${
                        selectedDestinations.includes(dest.name)
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300"
                      }`}
                    >
                      <span className="font-semibold">{dest.name}</span>
                      <br />
                      <span className="text-gray-500 text-sm">{dest.type}</span>
                    </button>
                  ))}
                </div>

                {/* Generate Plan */}
                <button
                  onClick={() => {
                    setActiveTab("itinerary");
                    setTimeout(() => {
                      tripInfoRef.current?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                >
                  Generate Trip Plan
                </button>
              </>
            )}

            {/* Itinerary */}
            {activeTab === "itinerary" && (
              <div ref={tripInfoRef} className="p-6 bg-gray-50 border-t border-gray-200 rounded-xl shadow">
                <h2 className="text-xl font-semibold text-blue-600 mb-2">
                  {duration} Kashmir Itinerary
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
                      <div key={index} className="border-l-2 border-blue-500 pl-4">
                        <div className="flex items-center mb-2">
                          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-sm font-medium mr-2">
                            Day {dayPlan.day}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-800">
                            {dayPlan.title}
                          </h3>
                        </div>

                        <ul className="space-y-1 text-gray-700 mb-3">
                          {dayPlan.activities.map((activity, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Clock size={16} className="text-gray-500" />
                              {activity}
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center gap-6 text-gray-600 text-sm">
                          <div className="flex items-center gap-1">
                            {dayPlan.transport.includes("Plane") || dayPlan.transport.includes("Flight") ? (
                              <Plane size={16} className="text-blue-500" />
                            ) : (
                              <Bus size={16} className="text-blue-500" />
                            )}
                            {dayPlan.transport}
                          </div>
                          <div className="flex items-center gap-1">
                            <Hotel size={16} className="text-blue-500" />
                            {dayPlan.hotel}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No destinations selected.</p>
                  )}
                </div>

                <button
                  onClick={() => setActiveTab("book")}
                  className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                >
                  Proceed to Book Now
                </button>
              </div>
            )}

            {/* Book Now */}
            {activeTab === "book" && (
              <div className="p-6 bg-gray-50 border-t border-gray-200 rounded-xl shadow">
                <h2 className="text-xl font-semibold text-blue-600">Book Your Trip</h2>

                <div className="mt-4 space-y-3 text-gray-700">
                  <p><span className="font-semibold">Travelers:</span> {travelers}</p>
                  <p><span className="font-semibold">Duration:</span> {duration}</p>
                  <p><span className="font-semibold">Budget:</span> {calculateBudget()}</p>
                  <p><span className="font-semibold">Total Days:</span> {totalDays}</p>

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

                <button
                  onClick={handleDownloadPDF}
                  className="mt-6 flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
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
