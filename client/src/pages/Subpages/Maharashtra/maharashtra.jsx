import { ChevronLeft, Download, Users, Calendar } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import maharashtraImg from "../../../assets/fort.jpg";
import jsPDF from "jspdf";

export default function Maharashtra() {
  const [activeTab, setActiveTab] = useState("plan");
  const [travelers, setTravelers] = useState(6);
  const [duration, setDuration] = useState("5 Days");
  const [budget, setBudget] = useState("Medium (₹25,000 - ₹50,000)");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
const downloadPDF = () => {

  const doc = new jsPDF();

  doc.text("Maharashtra Trip Plan", 20, 20);

  itinerary.forEach((day, index) => {

    doc.text(`Day ${day.day}`, 20, 40 + index * 30);

    day.activities.forEach((act, i) => {
      doc.text(`- ${act}`, 25, 50 + index * 30 + i * 8);
    });

  });

  doc.save("trip-plan.pdf");

};

const [itinerary, setItinerary] = useState([]);
const destinations = [
  "Mumbai City Tour",
  "Gateway of India",
  "Marine Drive Walk",
  "Elephanta Caves",
  "Ajanta Caves",
  "Ellora Caves",
  "Lonavala Hill Station",
  "Mahabaleshwar",
  "Panchgani",
  "Alibaug Beach",
  "Konkan Coast",
  "Shirdi Temple",
  "Nashik Wine Tour",
  "Kolhapur Temple",
  "Tadoba Safari"
];

const generateItinerary = () => {

  const days = parseInt(duration);

  const generated = [];

  for (let i = 0; i < days; i++) {

    const activities = [];

    for (let j = 0; j < 5; j++) {

      const random =
        destinations[Math.floor(Math.random() * destinations.length)];

      activities.push(random);
    }

    generated.push({
      day: i + 1,
      activities
    });

  }

  setItinerary(generated);

  setActiveTab("itinerary");
};


  const tabs = [
    { id: "plan", label: "Plan Trip" },
    { id: "itinerary", label: "View Itinerary" },
    { id: "book", label: "Book Now" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Header */}
      <div className="bg-white shadow-sm border-b px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
          <ChevronLeft size={20} /> Back
        </Link>

        <h1 className="text-xl font-bold text-slate-700">Maharashtra Explorer</h1>
      </div>


      {/* Main Layout */}
      <div className="grid lg:grid-cols-2 gap-8 p-6 lg:p-10">

        {/* LEFT IMAGE */}
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src={maharashtraImg}
            className="w-full h-full object-cover"
            alt="Maharashtra"
          />
        </div>


        {/* RIGHT PANEL */}
        <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8">

          {/* MODERN TABS */}
          <div className="flex bg-slate-100 rounded-full p-1 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>


          {/* PLAN TAB */}
          {activeTab === "plan" && (
            <div className="space-y-5">

              <h2 className="text-2xl font-bold text-blue-600">
                Customize Your Maharashtra Trip
              </h2>


              {/* DATE INPUTS */}
              <div className="grid md:grid-cols-2 gap-4">

                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-slate-400" size={18} />
                  <input
  type="date"
  value={startDate}
  onChange={(e) => setStartDate(e.target.value)}
  className="w-full pl-10 pr-3 py-3 border rounded-xl"
/>
                </div>

                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-slate-400" size={18} />
                  <input
  type="date"
  value={endDate}
  onChange={(e) => setEndDate(e.target.value)}
  className="w-full pl-10 pr-3 py-3 border rounded-xl"
/>
                </div>

              </div>


              {/* TRAVELERS */}
              <div>
                <label className="block text-slate-600 mb-2 font-medium">
                  Number of Travelers
                </label>

                <div className="flex items-center gap-4">

                  <button
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    className="w-12 h-12 rounded-xl border flex items-center justify-center text-xl hover:bg-slate-100"
                  >
                    −
                  </button>


                  <div className="flex-1 bg-slate-100 rounded-xl py-3 flex items-center justify-center gap-2">
                    <Users size={18} className="text-teal-600" />
                    <span className="font-semibold text-lg">{travelers}</span>
                  </div>


                  <button
                    onClick={() => setTravelers(travelers + 1)}
                    className="w-12 h-12 rounded-xl border flex items-center justify-center text-xl hover:bg-slate-100"
                  >
                    +
                  </button>

                </div>

              </div>


              {/* DURATION */}
              <div>
                <label className="block text-slate-600 mb-2 font-medium">
                  Trip Duration
                </label>

                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option>5 Days</option>
                  <option>7 Days</option>
                  <option>10 Days</option>
                </select>

              </div>


              {/* BUDGET */}
              <div>
                <label className="block text-slate-600 mb-2 font-medium">
                  Budget Range (per person)
                </label>

                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option>Medium (₹25,000 - ₹50,000)</option>
                  <option>Low (₹10,000 - ₹25,000)</option>
                  <option>High (₹50,000+)</option>
                </select>

              </div>


              {/* GENERATE BUTTON */}
              <button
  onClick={generateItinerary}
  className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 transition-all shadow-lg"
>
  Generate Personalized Trip Plan
</button>



            </div>
          )}


          {/* ITINERARY TAB */}
          {activeTab === "itinerary" && (
  <div>

    <h2 className="text-2xl font-bold mb-4 text-blue-600">
      Your Trip Itinerary
    </h2>

    {itinerary.map((dayPlan) => (

      <div
        key={dayPlan.day}
        className="border rounded-xl p-4 mb-4 shadow-sm"
      >

        <h3 className="font-bold text-lg mb-2 text-teal-600">
          Day {dayPlan.day}
        </h3>

        <ul className="list-disc ml-5 space-y-1">

          {dayPlan.activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}

        </ul>

      </div>

    ))}

    <button
      onClick={() => setActiveTab("book")}
      className="w-full mt-4 py-3 bg-green-500 text-white rounded-xl"
    >
      Proceed to Book Now
    </button>

  </div>
)}



          {/* BOOK TAB */}
          {activeTab === "book" && (
  <div>

    <h2 className="text-2xl font-bold mb-4 text-blue-600">
      Trip Preview
    </h2>

    <div className="space-y-3 mb-6">

      <p>
        <strong>Start Date:</strong> {startDate}
      </p>

      <p>
        <strong>End Date:</strong> {endDate}
      </p>

      <p>
        <strong>Travelers:</strong> {travelers}
      </p>

      <p>
        <strong>Duration:</strong> {duration}
      </p>

      <p>
        <strong>Budget:</strong> {budget}
      </p>

    </div>

    <h3 className="font-bold text-lg mb-2">
      Itinerary Summary
    </h3>

    <div className="max-h-60 overflow-y-auto border rounded-xl p-3">

      {itinerary.map((dayPlan) => (

        <div key={dayPlan.day} className="mb-3">

          <p className="font-semibold">
            Day {dayPlan.day}
          </p>

          <ul className="ml-4 list-disc">

            {dayPlan.activities.map((activity, i) => (
              <li key={i}>{activity}</li>
            ))}

          </ul>

        </div>

      ))}

    </div>


    <button className="w-full mt-6 py-4 bg-green-500 text-white rounded-xl flex items-center justify-center gap-2" onClick={downloadPDF}>
      <Download size={18} />
      Download PDF
    </button>

  </div>
)}



        </div>


      </div>

          {/* WHY MAHARASHTRA */}
<div className="px-6 lg:px-10 py-12">

  <h2 className="text-3xl font-bold text-blue-600 mb-8">
    Why Maharashtra?
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
      <div className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
        📍
      </div>
      <h3 className="font-semibold text-lg">UNESCO Heritage Sites</h3>
      <p className="text-slate-500 text-sm">
        Explore ancient Ajanta & Ellora caves
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
      <div className="bg-green-500 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
        ⭐
      </div>
      <h3 className="font-semibold text-lg">Vibrant Cities</h3>
      <p className="text-slate-500 text-sm">
        Experience Mumbai's energy & culture
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
      <div className="bg-cyan-500 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
        ☀️
      </div>
      <h3 className="font-semibold text-lg">Beautiful Coastline</h3>
      <p className="text-slate-500 text-sm">
        Pristine beaches along Konkan coast
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
      <div className="bg-purple-500 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
        📈
      </div>
      <h3 className="font-semibold text-lg">Rich Culture</h3>
      <p className="text-slate-500 text-sm">
        Festivals, art, and diverse traditions
      </p>
    </div>

  </div>
</div>


{/* WEATHER */}
<div className="px-6 lg:px-10 pb-12">

  <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-3xl p-6 shadow">

    <h2 className="text-2xl font-bold mb-2">
      Current Weather in Maharashtra
    </h2>

    <p className="mb-6 opacity-90">
      Plan your trip with real-time weather insights
    </p>

    <div className="grid md:grid-cols-4 gap-6 text-center">

      <div>
        <p className="text-lg">☁️</p>
        <p className="text-sm opacity-80">Condition</p>
        <p className="font-semibold">Partly Cloudy</p>
      </div>

      <div>
        <p className="text-lg">🌡️</p>
        <p className="text-sm opacity-80">Temperature</p>
        <p className="font-semibold">28°C</p>
      </div>

      <div>
        <p className="text-lg">☔</p>
        <p className="text-sm opacity-80">Rainfall</p>
        <p className="font-semibold">Low</p>
      </div>

      <div>
        <p className="text-lg">☀️</p>
        <p className="text-sm opacity-80">Best Months</p>

        <div className="flex justify-center gap-2 mt-1">
          {["Oct","Nov","Dec","Jan","Feb"].map(m => (
            <span key={m} className="bg-white text-blue-600 px-2 py-1 rounded-full text-xs">
              {m}
            </span>
          ))}
        </div>

      </div>

    </div>

  </div>

</div>


{/* TRAVEL TIPS + PACKAGES */}
<div className="grid lg:grid-cols-2 gap-8 px-6 lg:px-10 pb-12">

  {/* TIPS */}
  <div className="bg-white rounded-3xl shadow p-6">

    <h2 className="text-2xl font-bold text-blue-600 mb-6">
      Essential Travel Tips
    </h2>

    {[
      ["Best Time", "October to February for pleasant weather"],
      ["Budget Tip", "Book trains early for savings"],
      ["Transport", "MSRTC buses connect major destinations"],
      ["Culture", "Respect dress codes at religious sites"]
    ].map(([title, desc], i) => (

      <div key={i} className="bg-slate-50 p-4 rounded-xl mb-3">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>

    ))}

  </div>


  {/* PACKAGES */}
  <div className="bg-white rounded-3xl shadow p-6">

    <h2 className="text-2xl font-bold text-blue-600 mb-6">
      Popular Tour Packages
    </h2>

    {[
      ["Heritage Trail", "₹18,999"],
      ["Beach Escape", "₹12,499"],
      ["Complete Maharashtra", "₹35,999"]
    ].map(([name, price], i) => (

      <div key={i} className="border rounded-xl p-4 mb-4">

        <div className="flex justify-between">

          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-slate-500">5 Days • 3 Places</p>
          </div>

          <p className="font-bold text-green-600">{price}</p>

        </div>

        <button className="w-full mt-3 border border-teal-500 text-teal-500 py-2 rounded-lg hover:bg-teal-500 hover:text-white">
          View Details
        </button>

      </div>

    ))}

  </div>

</div>


{/* CTA */}
<div className="px-6 lg:px-10 pb-16">

  <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-3xl p-10 text-center shadow">

    <h2 className="text-3xl font-bold mb-3">
      Ready To Explore Maharashtra?
    </h2>

    <p className="mb-6 opacity-90">
      Join thousands of travelers who discovered Maharashtra
    </p>

    <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
      Start Planning Now →
    </button>

    <div className="grid md:grid-cols-3 gap-6 mt-10">

      <div>
        <p className="text-3xl font-bold">50+</p>
        <p>Destinations</p>
      </div>

      <div>
        <p className="text-3xl font-bold">10K+</p>
        <p>Happy Travelers</p>
      </div>

      <div>
        <p className="text-3xl font-bold">4.8</p>
        <p>Average Rating</p>
      </div>

    </div>

  </div>

</div>

    </div>
  );
}
