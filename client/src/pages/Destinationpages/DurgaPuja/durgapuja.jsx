import React, { useRef } from "react";
import { CalendarDays, MapPin, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Durga1 from "/Travel-Planner/client/src/assets/durga1.png";
import Durga2 from "/Travel-Planner/client/src/assets/durga2.png";

export default function Durgapuja() {
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
    pdf.save("Durga-Puja.pdf");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Content to capture */}
      <div ref={contentRef}>
        {/* Header Section */}
        <div
          className="relative text-white bg-cover bg-center"
          style={{ backgroundImage: `url(${Durga1})` }}
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
              {["Durga", "Pandals", "Bengal", "Culturals", "Artistry"].map(
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
              Durga Puja Festival
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
              <p className="flex items-center gap-1">
                <MapPin size={16} /> Kolkata, West Bengal
              </p>
              <p className="flex items-center gap-1">
                <CalendarDays size={16} /> October 9-13, 2025
              </p>
              <p>⏱️ 10 days</p>
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
Witness the grandest Durga Puja celebrations in Kolkata with magnificent pandals, cultural programs, and traditional Bengali cuisine. Experience the cultural capital of India during its most important festival.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-3">Event Highlights</h2>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Explore elaborate and artistic Durga Puja pandals</li>
                <li>Experience traditional Bengali cultural programs</li>
                <li>Participate in vibrant processions and rituals</li>
                <li>Enjoy authentic Bengali cuisine and sweets</li>
                <li>Witness the emotional Durga visarjan ceremony</li>
                <li>Meet renowned pandal artists and craftsmen</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-3">Detailed Itinerary</h2>
              <h3 className="font-semibold text-pink-600">Day 1 - Sasthi</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1 mb-4">
                <li>Arrival and pandal orientation tour</li>
                <li>Visit to famous community pujas</li>
                <li>Traditional Bengali dinner</li>
                <li>Evening cultural performances</li>
              </ul>

              <h3 className="font-semibold text-pink-600">Day 2-4 - Saptami</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Morning prayers and aarti</li>
                <li>Artistic pandal exploration</li>
                <li>Traditional craft workshops</li>
                <li>Street food tour in College Street</li>
              </ul>

              <h3 className="font-semibold text-pink-600">Day 5-7 - Ashtami</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Kumari Puja ceremony participation</li>
                <li>Grand pandal competition judging</li>
                <li>Cultural program performances</li>
                <li>Traditional Bengali feast</li>
              </ul>

              <h3 className="font-semibold text-pink-600">Day 8-9 - Navami</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Final day celebrations</li>
                <li>Pandal artisan meetings</li>
                <li>Photography sessions</li>
                <li>Farewell dinner with local families</li>
              </ul>

              <h3 className="font-semibold text-pink-600">Day 10 - Dashami</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Emotional visarjan ceremony</li>
                <li>River Ganga farewell ritual</li>
                <li>Final cultural performances</li>
                <li>Departure preparations</li>
              </ul>

            </div>
          </div>

          {/* Booking Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-sm text-gray-500 mb-2">From</p>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">₹80,000</h2>
              <p className="text-sm text-gray-500">per person</p>

              <div className="my-4 text-sm text-gray-700 space-y-1">
                <p>👥 Group size: 15-25 people</p>
                <p>📅 Duration: 10 days</p>
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
                    <li>5 days accommodation in colonial heritage hotel</li>
                    <li>All meals featuring authentic Bengali cuisine</li>
                    <li>Expert art and culture guide</li>
                    <li>Transportation to all pandals</li>
                    <li>Cultural workshop participation</li>
                    <li>Traditional Bengali clothing (1 set)</li>
                    <li>Pandal photography permissions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">What's Excluded</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>International flights</li>
                    <li>Personal shopping at pandals</li>
                    <li>Professional photography services</li>
                    <li>Travel insurance</li>
                    <li>Individual activity costs</li>
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
              src={Durga1}
              alt="Durga1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-72 bg-gray-200 rounded-2xl overflow-hidden">
            <img
              src={Durga2}
              alt="Durga2"
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
