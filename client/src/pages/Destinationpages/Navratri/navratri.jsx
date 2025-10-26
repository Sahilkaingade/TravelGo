import React, { useRef } from "react";
import { CalendarDays, MapPin, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Navratris from "/Travel-Planner/client/src/assets/navratri.png";
import Dandiya from "/Travel-Planner/client/src/assets/dandiya.jpg";
import Dandiya2 from "/Travel-Planner/client/src/assets/dandiya2.jpg";

export default function Navratri() {
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
    pdf.save("Navratri-Dandiya.pdf");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Content to capture */}
      <div ref={contentRef}>
        {/* Header Section */}
        <div
          className="relative text-white bg-cover bg-center"
          style={{ backgroundImage: `url(${Navratris})` }}
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
              {["Navratri", "Dandiya", "Gujarat", "Garba", "Traditional"].map(
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
              Navratri Dandiya Celebration
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
              <p className="flex items-center gap-1">
                <MapPin size={16} /> Ahmedabad, Gujarat
              </p>
              <p className="flex items-center gap-1">
                <CalendarDays size={16} /> October 3-11, 2025
              </p>
              <p>⏱️ 9 days</p>
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
                Dance to traditional Garba and Dandiya rhythms during the nine-night Navratri celebration in the cultural heart of Gujarat. Experience the most authentic and vibrant Navratri celebrations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-3">Event Highlights</h2>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Learn traditional Garba and Dandiya dance forms</li>
                <li>Experience authentic Gujarati Navratri celebrations</li>
                <li>PVisit beautifully decorated community venues</li>
                <li>Enjoy traditional Gujarati cuisine and sweets</li>
                <li>Participate in daily temple prayers and ceremonies</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-3">Detailed Itinerary</h2>
              <h3 className="font-semibold text-pink-600">Days 1-3 - Learning Phase</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1 mb-4">
                <li>Arrival and traditional welcome</li>
                <li>Garba dance lessons with local instructors</li>
                <li>Visit to famous Navratri venues</li>
                <li>Traditional costume fitting</li>
              </ul>

              <h3 className="font-semibold text-pink-600">Days 4-6 - Celebration Phase</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Daily temple visits and prayers</li>
                <li>Community Garba participation</li>
                <li>Dandiya competitions</li>
                <li>Cultural performances and music</li>
              </ul>

              <h3 className="font-semibold text-pink-600">Days 7-9 - Grand Finale</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Grand Navratri celebrations</li>
                <li>Professional dance performances</li>
                <li>Festival food and sweet preparation</li>
                <li>Closing ceremony participation</li>
              </ul>
            </div>
          </div>

          {/* Booking Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-sm text-gray-500 mb-2">From</p>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">₹30,000</h2>
              <p className="text-sm text-gray-500">per person</p>

              <div className="my-4 text-sm text-gray-700 space-y-1">
                <p>👥 Group size: 10–18 people</p>
                <p>📅 Duration: 9 days</p>
                <p>⭐ Rating: 4.9</p>
              </div>

              {/* Download PDF Button */}
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
                    <li>9 nights accommodation in heritage hotel</li>
                    <li>All meals featuring authentic Gujarati cuisine</li>
                    <li>Temple entry fees and offerings</li>
                    <li>Cultural workshop participation</li>
                    <li>Professional dance instructors</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">What's Excluded</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>International flights</li>
                    <li>Additional costume purchases</li>
                    <li>Personal expenses</li>
                    <li>Travel insurance</li>
                    <li>Photography services</li>
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
          <div className="h-72 bg-pink-200 rounded-2xl overflow-hidden">
            <img
              src={Dandiya}
              alt="Dandiya"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-72 bg-gray-200 rounded-2xl overflow-hidden">
            <img
              src={Dandiya2}
              alt="Dandiya2"
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
