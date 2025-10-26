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
import html2canvas from "html2canvas";
import Diwalis from "/Travel-Planner/client/src/assets/diwali.png";
import Diwali1 from "/Travel-Planner/client/src/assets/diwali1.jpg";
import Diwali2 from "/Travel-Planner/client/src/assets/diwali2.jpg";

export default function Diwali() {
  const contentRef = useRef();
  const [hotelType, setHotelType] = useState("3-star");
  const [isEditing, setIsEditing] = useState(false);
  const [groupSize, setGroupSize] = useState("15–25 people");


  // Per-day cost mapping (used for day-by-day estimate as requested)
  const costPerDay = {
    "3-star": 12000,
    "4-star": 15000,
    "5-star": 19000,
  };

  // Itinerary state (made editable). Each item has day and points array.
  const [itinerary, setItinerary] = useState([
    {
      day: "Day 1 - November 1 (Dhanteras)",
      points: [
        "Arrival in Varanasi and check-in at heritage hotel",
        "Visit to Vishwanath Temple for Dhanteras prayers",
        "Evening Ganga Aarti at Dashashwamedh Ghat",
        "Traditional Diwali sweet tasting tour",
        "Welcome dinner with local family",
      ],
    },
    {
      day: "Day 2 - November 2 (Naraka Chaturdashi)",
      points: [
        "Early morning boat ride on the Ganges",
        "Visit ancient temples and witness special pujas",
        "Traditional oil lamp making workshop",
        "Evening exploration of Ram Janmabhoomi",
        "Spectacular fireworks display and diyas lighting",
      ],
    },
    {
      day: "Day 3 - November 3 (Diwali Main Day)",
      points: [
        "Morning darshan at Ram Janmabhoomi Temple",
        "Participate in Lakshmi Puja ceremony",
        "Traditional Diwali feast with local community",
        "Night celebration with cultural programs",
      ],
    },
    {
      day: "Day 4 - November 4 (Govardhan Puja)",
      points: [
        "Return journey to Varanasi",
        "Visit to temples for Govardhan Puja",
        "Rangoli making workshop",
        "Evening boat ride with floating diyas",
        "Special Diwali dinner cruise on the Ganges",
      ],
    },
    {
      day: "Day 5 - November 5 (Bhai Dooj)",
      points: [
        "Morning Bhai Dooj ceremony participation",
        "Visit to Sarnath Buddhist temples",
        "Final Ganga Aarti experience",
        "Farewell dinner with cultural performances",
      ],
    },
  ]);

  // hotel names for display
  const hotelNames = {
    "3-star": "Hotel Temple View, Varanasi",
    "4-star": "Hotel Ganges Grand, Varanasi",
    "5-star": "Taj Ganges, Varanasi",
  };

  // total budget derived from per-day cost * number of days
  const totalBudget = costPerDay[hotelType] * itinerary.length;

  // --- Handlers ---
  const handleDownload = async () => {
    const input = contentRef.current;
    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
      scrollY: -window.scrollY,
    });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Diwali-Festival-of-Lights.pdf");
  };

  const handleSave = () => {
    // Save edits by simply turning off editing mode.
    // The itinerary state is already updated while editing.
    setIsEditing(false);
  };

  // update a day's points (textarea returns newline-separated string)
  const updateDayPoints = (index, text) => {
    setItinerary((prev) => {
      const copy = JSON.parse(JSON.stringify(prev));
      copy[index].points = text.split("\n").filter((line) => line.trim() !== "");
      return copy;
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Content to capture */}
      <div ref={contentRef}>
        {/* Header Section */}
        <div
          className="relative text-white bg-cover bg-center"
          style={{ backgroundImage: `url(${Diwalis})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative max-w-6xl mx-auto px-4 py-8">
            <div className="mb-4">
              <Link
                to="/destination"
                className="inline-flex items-center gap-2 text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-semibold transition"
              >
                <ArrowLeft size={18} />
                Back to Home
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              {["Diwali", "Festival", "Lights", "Celebration", "Shree Ram"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-white/20 px-2 py-1 rounded text-sm backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <h1 className="text-4xl font-bold drop-shadow-md">
              Diwali - Festival of Lights
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
              <p className="flex items-center gap-1">
                <MapPin size={16} /> Varanasi & Ayodhya, Uttar Pradesh
              </p>
              <p className="flex items-center gap-1">
                <CalendarDays size={16} /> November 1–5, 2025
              </p>
              <p>⏱️ {itinerary.length} days</p>
              <p className="flex items-center gap-1">
                <Star size={16} className="text-yellow-300" /> 4.9
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6">
            {/* Overview */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-3">Event Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                Celebrate the grandest Diwali in Varanasi and Ayodhya with
                millions of diyas, spectacular fireworks, Ganga Aarti, and the
                legendary Ram Lila performances. Experience the spiritual and
                cultural magnificence of Diwali at its most sacred locations.
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-3">Event Highlights</h2>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Witness the spectacular Dev Deepawali on the Ganges ghats</li>
                <li>Experience Ayodhya’s grand Diwali with millions of diyas</li>
                <li>Visit beautifully decorated temples and venues</li>
                <li>Attend traditional Ram Lila performances</li>
                <li>Experience the grand Ganga Aarti during festivities</li>
              </ul>
            </div>

            {/* Itinerary */}
            <div className="bg-white p-6 rounded-2xl shadow space-y-5">
              <h2 className="text-lg font-semibold mb-3">Detailed Itinerary</h2>

              {itinerary.map((dayInfo, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-pink-600">{dayInfo.day}</h3>
                    <p className="text-sm text-gray-600 font-medium">
                      Est. Cost: ₹{costPerDay[hotelType].toLocaleString()}
                    </p>
                  </div>

                  {isEditing ? (
                    <textarea
                      value={dayInfo.points.join("\n")}
                      onChange={(e) => updateDayPoints(i, e.target.value)}
                      className="w-full border rounded-lg p-2 mt-2 text-sm text-gray-700"
                      rows={Math.max(3, dayInfo.points.length + 1)}
                    />
                  ) : (
                    <ul className="list-disc ml-5 text-gray-700 space-y-1 mt-2">
                      {dayInfo.points.map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* --- What's Included / Excluded (moved here, styled like Ganesh.jsx) --- */}
              <div className="bg-white p-6 rounded-2xl shadow mt-2">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                      <CheckCircle className="text-green-600" /> What's Included
                    </h2>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-600" /> 5 days accommodation in heritage hotels
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-600" /> All meals with festive cuisine
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-600" /> Transportation between Varanasi & Ayodhya
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-600" /> Professional spiritual guide
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-600" /> Boat rides on the Ganges
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                      <XCircle className="text-red-600" /> What's Excluded
                    </h2>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <XCircle size={16} className="text-red-600" /> International flights
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle size={16} className="text-red-600" /> Personal shopping
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle size={16} className="text-red-600" /> Individual puja costs
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle size={16} className="text-red-600" /> Travel insurance
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle size={16} className="text-red-600" /> Tips for guides/drivers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* --- end included/excluded --- */}
            </div>
          </div>

          {/* Right Column - Booking Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-sm text-gray-500 mb-2">From</p>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                ₹{totalBudget.toLocaleString()}
              </h2>
              <p className="text-sm text-gray-500">per person</p>

              {/* Hotel Type Selector */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Select Hotel Type:
                </label>
                <select
                  value={hotelType}
                  onChange={(e) => setHotelType(e.target.value)}
                  className="w-full border rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-pink-500"
                >
                  <option value="3-star">3-Star Hotel</option>
                  <option value="4-star">4-Star Hotel</option>
                  <option value="5-star">5-Star Hotel</option>
                </select>
              </div>

              {/* Dynamic Hotel Name */}
              <div className="mt-4 bg-pink-50 border border-pink-200 rounded-lg p-3 text-sm text-gray-800">
                <p className="font-semibold text-pink-700">🏨 Selected Hotel:</p>
                <p>{hotelNames[hotelType]}</p>
              </div>

              {/* Group Size */}
              <div className="my-4 text-sm text-gray-700 space-y-1">
                {isEditing ? (
                  <input
                    type="text"
                    value={groupSize}
                    onChange={(e) => setGroupSize(e.target.value)}
                    className="w-full border rounded-lg px-2 py-1 text-gray-700"
                  />
                ) : (
                  <p>👥 Group size: {groupSize}</p>
                )}
                <p>📅 Duration: {itinerary.length} days</p>
                <p>⭐ Rating: 4.9</p>
              </div>

              {/* Buttons */}
              {isEditing ? (
                <button
                  onClick={handleSave}
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

              <p className="text-xs text-center mt-2 text-gray-500">
                Free cancellation up to 48 hours before the event
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto px-4 pb-10">
        <h2 className="text-lg font-semibold mb-4">Photo Gallery</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-72 bg-gray-200 rounded-2xl overflow-hidden">
            <img
              src={Diwali1}
              alt="Diwali 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-72 bg-gray-200 rounded-2xl overflow-hidden">
            <img
              src={Diwali2}
              alt="Diwali 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-72 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-2xl font-bold">
            +
          </div>
        </div>
      </div>
    </div>
  );
}
