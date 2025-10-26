import React, { useRef } from "react";
import { CalendarDays, MapPin, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Diwalis from "/Travel-Planner/client/src/assets/diwali.png";
import Diwali1 from "/Travel-Planner/client/src/assets/diwali1.jpg";
import Diwali2 from "/Travel-Planner/client/src/assets/diwali2.jpg";

export default function Onam() {
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
    pdf.save("Onam-Festival.pdf");
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
              {["Harvest", "Boat Race", "Kerala", "Sadhya", "Pookalam"].map(
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
              Onam Festival Celebration
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
              <p className="flex items-center gap-1">
                <MapPin size={16} /> Kochi & Thrissur, Kerala
              </p>
              <p className="flex items-center gap-1">
                <CalendarDays size={16} /> September 5-15, 2025
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
Experience Kerala's grandest harvest festival with traditional Pookalam designs, snake boat races, Kathakali performances, and the legendary Onam Sadhya feast. Immerse yourself in God's Own Country during its most colorful celebration.
</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-3">Event Highlights</h2>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Witness the spectacular Vallam Kali (snake boat race) in Kerala's backwaters</li>
                <li>Create traditional Pookalam (floral carpet) with local families</li>
                <li>Experience the grand Onam Sadhya feast with 26+ dishes on banana leaf</li>
                <li>Watch mesmerizing Kathakali and Mohiniyattam dance performances</li>
                <li>Participate in traditional Thiruvathira and Pulikali celebrations</li>
                <li>Visit ancient temples during special Onam ceremonies</li>
                <li>Enjoy houseboat cruise through Kerala's scenic backwaters</li>
                <li>Learn traditional Kerala art forms and crafts</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-3">Detailed Itinerary</h2>
              <h3 className="font-semibold text-pink-600">Days 1-2 - September 5-6 (Atham & Chithira)</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1 mb-4">
                <li>Arrival in Kochi and welcome to heritage hotel</li>
                <li>Introduction to Onam traditions and cultural briefing</li>
                <li>Pookalam making workshop with flower experts</li>
                <li>Visit to spice plantations and markets</li>
                <li>Traditional Kerala cuisine cooking class</li>
                <li>Evening Kathakali performance with backstage access</li>
                <li>Backwater sunset cruise</li>
              </ul>

              <h3 className="font-semibold text-pink-600">Days 3-4 - September 7-8 (Chodhi & Vishakam)</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Travel to Thrissur for temple visits</li>
                <li>Witness Vallam Kali (snake boat race) with VIP seating</li>
                <li>Participation in temple Onam celebrations</li>
                <li>Traditional games (Onakalikal) with local community</li>
                <li>Pulikali (tiger dance) rehearsal visit</li>
                <li>Shopping for traditional Kerala sarees and handicrafts</li>
                <li>Ayurvedic spa experience</li>
                <li>Cultural evening with folk music and dance</li>
              </ul>

              <h3 className="font-semibold text-pink-600">Days 5-6 - September 9-10 (Anizham & Thriketa)</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Return to Kochi for boat race preparations</li>
                <li>Visit to boat race venue setup</li>
                <li>Traditional swing (Oonjal) ceremony participation</li>
                <li>Explore Fort Kochi and colonial heritage sites</li>
                <li>Chinese fishing net demonstration</li>
                <li>Attend traditional Onam music concerts</li>
                <li>Elaborate Pookalam competition</li>
              </ul>

              <h3 className="font-semibold text-pink-600">Day 7 - September 11 (Moolam)</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Preparation for Thiruvonam celebrations</li>
                <li>Grand Pookalam creation in hotel courtyard</li>             
                <li>Traditional attire fitting and photography</li>
                <li>Visit to local homes for cultural immersion</li>
                <li>Evening cultural program with Mohiniyattam</li>
                <li>Traditional lamp lighting ceremony</li>
              </ul>

              <h3 className="font-semibold text-pink-600">Day 8 - September 12 (Pooradam)</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Early morning temple visit for special prayers</li>
                <li>Preparation and participation in Onam games</li>
                <li>Houseboat check-in for overnight cruise</li>
                <li>Backwater exploration and village visits</li>
                <li>Traditional Kerala dinner on houseboat</li>
                <li>Starlit backwater experience</li>
              </ul>

              <h3 className="font-semibold text-pink-600">Day 9 - September 13 (Uthradom)</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Morning in backwaters with breakfast on boat</li>
                <li>Return to shore for final Onam preparations</li>
                <li>Witness spectacular Pulikali (tiger dance) parade</li>
                <li>Visit to Vallam Kali (boat race) venue</li>
                <li>Traditional Thiruvathira dance participation</li>
                <li>Pre-Thiruvonam celebrations and feast</li>
              </ul>         

              <h3 className="font-semibold text-pink-600">Day 10 - September 14-15 (Thiruvonam & Avittam)</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Grand Thiruvonam day celebrations</li>
                <li>Spectacular Vallam Kali snake boat race viewing</li>
                <li>Legendary Onam Sadhya feast (26+ dishes)</li>
                <li>Traditional games and entertainment</li>
                <li>Final cultural programs and performances</li>
                <li>Farewell ceremony with traditional blessings</li>
                <li>Departure with Kerala memories and gifts</li>
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
                <p>📅 Duration: 5 days</p>
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
                    <li>10 days accommodation in heritage hotels and houseboat</li>
                    <li>All meals including traditional Onam Sadhya</li>
                    <li>Professional Malayalam-speaking cultural guide</li>
                    <li>All local transfers and transportation throughout Kerala</li>
                    <li>Snake boat race premium viewing tickets</li>
                    <li>Kathakali and Mohiniyattam performance tickets</li>
                    <li>Pookalam making workshops and materials</li>
                    <li>Traditional Kerala attire rental</li>
                    <li>Backwater houseboat cruise (overnight)</li>
                    <li>Cooking class and spice plantation tour</li>
                    <li>Temple entry fees and ceremony participation</li>
                    <li>Traditional Onam gift hamper</li>
                    <li>All cultural workshops and activities</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">What's Excluded</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>International flights</li>
                    <li>Personal shopping and souvenirs</li>
                    <li>Ayurvedic spa treatments (optional)</li>
                    <li>Travel insurance</li>
                    <li>Tips for guides and boat crew</li>
                    <li>Personal donations at temples</li>
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
