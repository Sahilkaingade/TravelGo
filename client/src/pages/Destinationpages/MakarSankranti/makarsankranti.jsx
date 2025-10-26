import React, { useRef } from "react";
import { CalendarDays, MapPin, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Diwalis from "/Travel-Planner/client/src/assets/sankranthi1.png";
import Diwali1 from "/Travel-Planner/client/src/assets/sankranthi2.jpg";
import Diwali2 from "/Travel-Planner/client/src/assets/sankranthi3.jpg";

export default function Makarsankranthi() {
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
    pdf.save("Makar-Sankranti.pdf");
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
              {["Kites", "Harvest", "Festival", "Gujarat", "Traditions"].map(
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
              Makar Sankranti Kite Festival
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
              <p className="flex items-center gap-1">
                <MapPin size={16} /> Ahmedabad & Rajkot, Gujarat
              </p>
              <p className="flex items-center gap-1">
                <CalendarDays size={16} /> January 14-15, 2026
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
Experience the vibrant International Kite Festival in Gujarat with thousands of colorful kites filling the sky, traditional food, and cultural celebrations. Join the spectacular harvest festival that transforms Gujarat's skies into a canvas of colors.</p>           
 </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-3">Event Highlights</h2>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Participate in the world-famous International Kite Festival in Ahmedabad</li>
                <li>Fly traditional and designer kites from rooftops across the city</li>
                <li>Witness spectacular kite flying competitions with international teams</li>
                <li>Enjoy traditional Gujarati harvest delicacies like undhiyu and jalebi</li>
                <li>Experience the colorful night kite flying with illuminated kites</li>
                <li>Learn the art of kite making from local artisans</li>
                <li>Visit kite markets and meet master kite makers</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-3">Detailed Itinerary</h2>
              <h3 className="font-semibold text-pink-600">Day 1 - January 14 (Makar Sankranti)</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1 mb-4">
                <li>Early morning arrival in Ahmedabad</li>
                <li>Check-in at heritage hotel and welcome breakfast</li>
                <li>Visit to local kite market and kite making workshop</li>
                <li>Traditional Gujarati thali lunch with harvest specialties</li>
                <li>Afternoon rooftop kite flying session with expert guides</li>
                <li>Watch the sunset kite flying competition</li>
                <li>Traditional til-gul (sesame-jaggery sweets) exchange ceremony</li>
                <li>Evening cultural program with folk music and dance</li>
                <li>Night kite flying with illuminated tukals (lantern kites)</li>
                <li>Traditional dinner with Gujarati delicacies</li>
              </ul>

              <h3 className="font-semibold text-pink-600">Day 2 - January 15 (Uttarayan Celebrations)</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Early morning kite flying from hotel rooftop</li>
                <li>Breakfast with traditional undhiyu and puri</li>
                <li>Visit to Sabarmati Riverfront for kite festival events</li>
                <li>Watch international kite teams demonstrate unique designs</li>
                <li>Lunch at local restaurant featuring Gujarati cuisine</li>
                <li>Travel to Rajkot for evening festivities</li>
                <li>Participate in community kite flying celebrations</li>
                <li>Shopping for traditional handicrafts and souvenirs</li>
                <li>Farewell dinner with cultural performances</li>
                <li>Evening departure with kite flying memories</li>
              </ul>

            </div>
          </div>

          {/* Booking Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-sm text-gray-500 mb-2">From</p>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">₹60,000</h2>
              <p className="text-sm text-gray-500">per person</p>

              <div className="my-4 text-sm text-gray-700 space-y-1">
                <p>👥 Group size: 15-25 people</p>
                <p>📅 Duration: 2 days</p>
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
                    <li>2 days accommodation in heritage hotel</li>
                    <li>All meals featuring traditional Gujarati cuisine</li>
                    <li>Professional local guide and kite flying instructor</li>
                    <li>Kite flying kit (traditional and designer kites)</li>
                    <li>Rooftop access for kite flying</li>
                    <li>Transportation between Ahmedabad and Rajkot</li>
                    <li>Entry to International Kite Festival venues</li>
                    <li>Kite making workshop materials</li>
                    <li>Traditional Sankranti gift basket</li>
                    <li>Cultural program tickets</li>
                    <li>Photography opportunities at prime locations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">What's Excluded</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>International flights</li>
                    <li>Personal kite purchases beyond provided kit</li>
                    <li>Additional kite flying competitions entry fees</li>
                    <li>Travel insurance</li>
                    <li>Tips for guides and hotel staff</li>
                    <li>Personal shopping and souvenirs</li>
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
              src={Diwali1}
              alt="Diwali1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-72 bg-gray-200 rounded-2xl overflow-hidden">
            <img
              src={Diwali2}
              alt="Diwali2"
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
