import React, { useRef } from "react";
import { CalendarDays, MapPin, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import HoliBg from "/Travel-Planner/client/src/assets/holi.png";
import Holi1 from "/Travel-Planner/client/src/assets/holigg.png";
import Holi2 from "/Travel-Planner/client/src/assets/holiggg.png";

export default function Holi() {
  const contentRef = useRef();

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
    pdf.save("Holi-Festival.pdf");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Content to capture */}
      <div ref={contentRef}>
        {/* Header Section */}
        <div
          className="relative text-white bg-cover bg-center"
          style={{ backgroundImage: `url(${HoliBg})` }}
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
              {["Colors", "Traditional", "Spring", "India", "Cultural"].map((tag) => (
                <span key={tag} className="bg-white/20 px-2 py-1 rounded text-sm backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-bold drop-shadow-md">Holi Festival of Colors</h1>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
              <p className="flex items-center gap-1">
                <MapPin size={16} /> Mathura & Vrindavan, Uttar Pradesh
              </p>
              <p className="flex items-center gap-1">
                <CalendarDays size={16} /> March 13–14, 2025
              </p>
              <p>⏱️ 2 days</p>
              <p className="flex items-center gap-1">
                <Star size={16} className="text-yellow-300" /> 4.9
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-3">Event Overview</h2>
              <p className="text-gray-700">
                Experience the vibrant Holi celebration in the birthplace of Lord Krishna
                with traditional colors, music, and authentic festivities...
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-3">Event Highlights</h2>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Participate in traditional Holi celebrations</li>
                <li>Visit sacred temples of Mathura and Vrindavan</li>
                <li>Enjoy traditional Holi sweets and refreshments</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-3">Detailed Itinerary</h2>
              <h3 className="font-semibold text-pink-600">Day 1 - March 13</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1 mb-4">
                <li>Morning arrival in Mathura</li>
                <li>Visit Krishna Janmabhoomi Temple</li>
                <li>Holi Dahan ceremony participation</li>
              </ul>

              <h3 className="font-semibold text-pink-600">Day 2 - March 14</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Holi celebration at Banke Bihari Temple</li>
                <li>Color throwing festivities in the streets</li>
                <li>Evening departure</li>
              </ul>
            </div>
          </div>

          {/* Booking Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-sm text-gray-500 mb-2">From</p>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">₹4,999</h2>
              <p className="text-sm text-gray-500">per person</p>

              <div className="my-4 text-sm text-gray-700 space-y-1">
                <p>👥 Group size: 12–20 people</p>
                <p>📅 Duration: 2 days</p>
                <p>⭐ Rating: 4.9</p>
              </div>

              {/* ✅ Updated button */}
              <button
                onClick={handleDownload}
                className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Download PDF
              </button>

              <p className="text-xs text-center mt-2 text-gray-500">
                Free cancellation up to 48 hours before the event
              </p>
              {/* What's Included & Excluded Section */}
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">What's Included</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>2 days accommodation in heritage hotel</li>
                    <li>All meals (traditional vegetarian cuisine)</li>
                    <li>Professional cultural guide</li>
                    <li>Transportation between venues</li>
                    <li>Temple entry fees</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">What's Excluded</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>International flights</li>
                    <li>Personal expenses</li>
                    <li>Travel insurance</li>
                    <li>Tips for guides and drivers</li>
                    <li>Alcoholic beverages</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto px-4 pb-10">
        <h2 className="text-lg font-semibold mb-4">Photo Gallery</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-40 bg-pink-200 rounded-2xl overflow-hidden">
            <img
              src={Holi1}
              alt="Holi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-40 bg-gray-200 rounded-2xl overflow-hidden">
            <img
              src={Holi2}
              alt="Holi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-40 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-2xl font-bold">
            +
          </div>
        </div>
      </div>
    </div>
  );
}
