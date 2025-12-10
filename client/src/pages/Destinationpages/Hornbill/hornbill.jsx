import React, { useRef, useState } from "react";
import {
  CalendarDays,
  MapPin,
  Star,
  ArrowLeft,
  Pencil,
  Save,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";

// Using the same images as provided (no change to assets)
import Holi1 from "../../../assets/hornbill.png";
import Holi2 from "../../../assets/hornbill.png";
import Holi3 from "../../../assets/hornbill.png";

export default function HornbillFestival() {
  const contentRef = useRef();

  // --- States ---
  const [hotelType, setHotelType] = useState("3-star");
  const [isEditing, setIsEditing] = useState(false);
  const [groupSize, setGroupSize] = useState("10–15");

  const basePrices = {
    "3-star": 18499,
    "4-star": 27499,
    "5-star": 38999,
  };
  const [baseBudget, setBaseBudget] = useState(basePrices[hotelType]);

  const hotelNames = {
    "3-star": "Hotel Vivor, Kohima",
    "4-star": "The Heritage, Kohima",
    "5-star": "Niraamaya Retreats, Kohima",
  };

  // --- Hornbill Festival Itinerary ---
  const [itinerary, setItinerary] = useState([
    {
      day: "Day 1–2",
      cost: 4500,
      points: [
        "Arrival in Kohima; traditional welcome and transfer to hotel.",
        "Visit Kisama Heritage Village and attend the opening ceremony.",
        "Evening: local Naga cuisine tasting and cultural introduction.",
      ],
    },
    {
      day: "Day 3–5",
      cost: 12500,
      points: [
        "Witness tribal dance performances from multiple Naga tribes.",
        "Traditional sports demonstrations (archery, wrestling, bamboo climbing).",
        "Explore the handicraft market, tribal exhibitions and workshops.",
      ],
    },
    {
      day: "Day 6–8",
      cost: 9000,
      points: [
        "Attend the Hornbill International Rock Festival and night carnival.",
        "Heritage walk around Kohima and visit local viewpoints.",
        "Farewell cultural show and shopping for souvenirs; depart next day.",
      ],
    },
  ]);

  const highlights = [
    "Celebration of Naga tribal cultures and traditional dances",
    "Hornbill International Rock Festival & night carnival",
    "Handicraft bazaars, indigenous food stalls & tribal exhibitions",
    "Traditional sports, workshops and cultural demonstrations",
  ];

  const included = [
    "Accommodation in selected hotel",
    "Breakfast & dinner daily",
    "Entry to Kisama Heritage Village events",
    "Private AC vehicle for sightseeing (as per itinerary)",
    "Local guide for cultural visits and workshops",
  ];

  const notIncluded = [
    "Personal shopping & souvenirs",
    "Lunch on independent travel days",
    "Optional premium concert/rock-festival VIP passes",
    "Travel / health insurance",
  ];

  const handleHotelChange = (type) => {
    setHotelType(type);
    setBaseBudget(basePrices[type]);
  };

  const getTotalCost = () => {
    let num = 1;
    // split on en dash or hyphen just in case
    const dash = groupSize.includes("–") ? "–" : "-";
    if (groupSize.includes(dash)) {
      const [min, max] = groupSize.split(dash).map((s) => Number(s.trim()));
      if (!isNaN(min) && !isNaN(max)) num = Math.round((min + max) / 2);
    } else {
      const n = Number(groupSize);
      if (!isNaN(n) && n > 0) num = n;
    }
    return baseBudget * num;
  };

  const handleDownload = async () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    let y = 15;

    const addTitle = (text, size = 18) => {
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(size);
      pdf.text(text, 15, y);
      y += 7;
      pdf.setDrawColor(200);
      pdf.line(15, y, width - 15, y);
      y += 5;
    };

    const addText = (text, size = 11) => {
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(size);
      const maxLineWidth = width - 30;
      const split = pdf.splitTextToSize(text, maxLineWidth);
      pdf.text(split, 15, y);
      y += split.length * (size * 0.35 + 3);
    };

    addTitle("Hornbill Festival Tour (Kisama Heritage Village)");
    addText("📍 Kohima / Kisama Heritage Village, Nagaland, India");
    addText("📅 December 1 – December 10 (Festival period)");
    addText("⭐ 4.9");
    addText(`💰 Total Cost: ₹${getTotalCost().toLocaleString()}`);

    addTitle("Package Details", 14);
    addText(`Hotel Type: ${hotelType}`);
    addText(`Hotel Name: ${hotelNames[hotelType]}`);
    addText(`Cost: ₹${baseBudget.toLocaleString()} per person`);
    addText(`Group Size: ${groupSize} people`);
    addText("Duration: 8 days (sample itinerary)");

    addTitle("Event Highlights", 14);
    highlights.forEach((h) => addText(`• ${h}`, 11));

    addTitle("Detailed Itinerary", 14);
    itinerary.forEach((item) => {
      addText(`${item.day} (Est. Cost: ₹${item.cost.toLocaleString()})`, 12);
      item.points.forEach((p) => addText(`• ${p}`, 11));
      y += 3;
    });

    addTitle("What's Included", 14);
    included.forEach((item) => addText(`✓ ${item}`, 11));

    addTitle("What's Not Included", 14);
    notIncluded.forEach((item) => addText(`✗ ${item}`, 11));

    pdf.save("Hornbill-Festival-Itinerary.pdf");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div ref={contentRef}>
        {/* Header */}
        <div
          className="relative text-white bg-cover bg-center"
          style={{ backgroundImage: `url(${Holi1})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative max-w-6xl mx-auto px-4 py-8">
            <div className="mb-4">
              <Link
                to="/destination"
                className="inline-flex items-center gap-2 text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-semibold transition"
              >
                <ArrowLeft size={18} /> Back to Home
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              {[
                "Hornbill Festival",
                "Kohima",
                "Nagaland",
                "Culture",
                "Tribal",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-white/20 px-2 py-1 rounded text-sm backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-bold drop-shadow-md">Hornbill Festival Tour</h1>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
              <p className="flex items-center gap-1">
                <MapPin size={16} /> Kohima / Kisama Heritage Village, Nagaland
              </p>
              <p className="flex items-center gap-1">
                <CalendarDays size={16} /> December 1 – 10
              </p>
              <p>⏱️ 8 days (sample itinerary)</p>
              <p className="flex items-center gap-1">
                <Star size={16} className="text-yellow-300" /> 4.9
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            {/* Overview */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-3">Event Overview</h2>
              <p className="text-gray-700">
                The Hornbill Festival (often called the "Festival of Festivals") is a vibrant
                celebration of Naga tribal culture held in Kisama Heritage Village near Kohima.
                Expect colourful tribal performances, indigenous sports, craft bazaars, local
                cuisine, music concerts and a lively night carnival.
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold text-pink-600 mb-3">Event Highlights</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div className="bg-white p-6 rounded-2xl shadow space-y-5">
              <h2 className="text-lg font-semibold mb-3">Detailed Itinerary</h2>
              {itinerary.map((item, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-pink-600">
                    {item.day} (Est. Cost: ₹{item.cost.toLocaleString()})
                  </h3>

                  {isEditing ? (
                    <textarea
                      value={item.points.join("\n")}
                      onChange={(e) => {
                        const newItinerary = [...itinerary];
                        newItinerary[i].points = e.target.value.split("\n");
                        setItinerary(newItinerary);
                      }}
                      className="w-full border rounded-lg p-2 mt-2 text-sm text-gray-700"
                      rows={item.points.length + 1}
                    />
                  ) : (
                    <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1">
                      {item.points.map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Included / Not Included */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow">
                <h2 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <CheckCircle className="text-green-600" /> What's Included
                </h2>
                <ul className="space-y-2 text-gray-700">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-600" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <h2 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <XCircle className="text-red-600" /> What's Not Included
                </h2>
                <ul className="space-y-2 text-gray-700">
                  {notIncluded.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <XCircle size={16} className="text-red-600" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-sm text-gray-500 mb-2">From</p>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">₹{baseBudget.toLocaleString()}</h2>
              <p className="text-sm text-gray-500">per person</p>

              {/* Hotel Selector */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">Select Hotel Type:</label>
                <select
                  value={hotelType}
                  onChange={(e) => handleHotelChange(e.target.value)}
                  className="w-full border rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-pink-500"
                >
                  <option value="3-star">3-Star Hotel</option>
                  <option value="4-star">4-Star Hotel</option>
                  <option value="5-star">5-Star Hotel</option>
                </select>
              </div>

              <div className="mt-4 bg-pink-50 border border-pink-200 rounded-lg p-3 text-sm text-gray-800">
                <p className="font-semibold text-pink-700">🏨 Selected Hotel:</p>
                <p>{hotelNames[hotelType]}</p>
              </div>

              <div className="my-4 text-sm text-gray-700 space-y-1">
                {isEditing ? (
                  <input
                    type="text"
                    value={groupSize}
                    onChange={(e) => setGroupSize(e.target.value)}
                    className="w-full border rounded-lg px-2 py-1 text-gray-700"
                  />
                ) : (
                  <>
                    <p>👥 Group size: {groupSize} people</p>
                    <p>📅 Festival period: December 1–10</p>
                    <p>⭐ Rating: 4.9</p>
                    <p className="font-semibold text-gray-800 mt-2">💰 Total Cost: ₹{getTotalCost().toLocaleString()}</p>
                  </>
                )}
              </div>

              {isEditing ? (
                <button
                  onClick={() => setIsEditing(false)}
                  className="w-full mb-3 inline-flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-xl font-semibold hover:bg-green-700 transition"
                >
                  <Save size={18} /> Save Changes
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full mb-3 inline-flex items-center justify-center gap-2 bg-pink-500/10 text-pink-600 border border-pink-600 py-2 rounded-xl font-semibold hover:bg-pink-500/20 transition"
                >
                  <Pencil size={18} /> Edit Plan
                </button>
              )}

              <button
                onClick={handleDownload}
                className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto px-4 pb-10">
        <h2 className="text-lg font-semibold mb-4">Photo Gallery</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-72 bg-pink-200 rounded-2xl overflow-hidden">
            <img src={Holi2} alt="Hornbill Festival" className="w-full h-full object-cover" />
          </div>
          <div className="h-72 bg-gray-200 rounded-2xl overflow-hidden">
            <img src={Holi3} alt="Hornbill Festival Celebration" className="w-full h-full object-cover" />
          </div>
          <div className="h-72 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-2xl font-bold">+
          </div>
        </div>
      </div>
    </div>
  );
}
