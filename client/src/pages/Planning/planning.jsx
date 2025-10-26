'use client';

import React, { useState } from 'react';
import { FaPlus, FaTrash, FaPlaneDeparture, FaHotel, FaClipboardList, FaWallet, FaEye } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import bg from '/Travel-Planner/client/src/assets/planbg.jpg'

export default function TripPlannerPage() {
  const [plans, setPlans] = useState([{ date: '', time: '', description: '', budget: '' }]);
  const [preview, setPreview] = useState(false);

  const handleChange = (index, field, value) => {
    const updated = [...plans];
    updated[index][field] = value;
    setPlans(updated);
  };

  const addPlan = () => {
    setPlans([...plans, { date: '', time: '', description: '', budget: '' }]);
  };

  const removePlan = (index) => {
    setPlans(plans.filter((_, i) => i !== index));
  };

  const handleEdit = () => {
    setPreview(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalBudget = plans.reduce((acc, curr) => acc + (parseFloat(curr.budget) || 0), 0);

  const handlePreview = () => setPreview(true);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Trip planning', 14, 20);

    const headers = [['#', 'Date', 'Time', 'Description', 'Budget (Rs.)']];
    const body = plans.map((plan, index) => [
      index + 1,
      plan.date || 'N/A',
      plan.time || 'N/A',
      plan.description || 'N/A',
      `Rs. ${plan.budget || '0'}`,
    ]);

    body.push(['', '', '', 'Total', `Rs. ${totalBudget.toFixed(2)}`]);

    doc.autoTable({
      startY: 30,
      head: headers,
      body: body,
      styles: { fontSize: 11 },
      headStyles: { fillColor: [34, 197, 94] },
    });

    doc.save('trip-planning.pdf');
  };

  const scrollToPlanning = () => {
    const planningEl = document.getElementById('planning');
    if (planningEl) {
      planningEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center relative flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bg})` }}
 // Replace with your image
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Plan Your Perfect <span className="text-green-400">Adventure</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            Turn your travel dreams into reality with our comprehensive trip planning tools.
            Discover destinations, create itineraries, and make memories that last a lifetime.
          </p>

          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Feature icon={<FaPlaneDeparture />} text="Flight Booking" />
            <Feature icon={<FaHotel />} text="Hotel Reservations" />
            <Feature icon={<FaClipboardList />} text="Itinerary Builder" />
            <Feature icon={<FaWallet />} text="Budget Tracker" />
          </div>

          <button
            onClick={scrollToPlanning}
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold"
          >
            Start Planning Now ↓
          </button>
        </div>
      </div>

      {/* Planning Section */}
      <div className="min-h-screen py-10 px-4 md:px-20 mt-28" id="planning">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-10">🌍 Trip Planner</h1>

        <div className="w-[500px] mx-auto space-y-10">
          {!preview && plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl shadow-xl border border-gray-100 relative"
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-400 text-white text-lg font-semibold px-4 py-2 rounded-t-2xl mb-4 p-5">
                🗓️ Segment {index + 1}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 p-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={plan.date}
                    onChange={(e) => handleChange(index, 'date', e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Time</label>
                  <input
                    type="time"
                    value={plan.time}
                    onChange={(e) => handleChange(index, 'time', e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
                  <textarea
                    value={plan.description}
                    onChange={(e) => handleChange(index, 'description', e.target.value)}
                    placeholder="E.g., Visit Eiffel Tower, check-in hotel..."
                    className="w-full px-4 py-2 border border-green-300 bg-green-50 rounded-md focus:ring-2 focus:ring-green-500 resize-none"
                    rows={3}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Budget (Rs.)</label>
                  <input
                    type="number"
                    value={plan.budget}
                    onChange={(e) => handleChange(index, 'budget', e.target.value)}
                    placeholder="Enter estimated cost"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              {plans.length > 1 && (
                <button
                  type="button"
                  onClick={() => removePlan(index)}
                  className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                  title="Remove this segment"
                >
                  <FaTrash />
                </button>
              )}
            </div>
          ))}

          {!preview && (
            <div className="flex justify-center gap-6 flex-wrap">
              <button
                onClick={addPlan}
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-700 shadow"
              >
                <FaPlus /> Add Segment
              </button>
              <button
                onClick={handlePreview}
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 shadow"
              >
                <FaEye /> Preview
              </button>
            </div>
          )}

          {preview && (
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-orange-400">Trip Itinerary Preview</h2>
              <div className="overflow-x-auto">
                <table className="w-full table-auto border border-gray-200 text-sm">
                  <thead className="bg-blue-100 text-gray-800 font-medium">
                    <tr>
                      <th className="border px-3 py-2">#</th>
                      <th className="border px-3 py-2">Date</th>
                      <th className="border px-3 py-2">Time</th>
                      <th className="border px-3 py-2">Description</th>
                      <th className="border px-3 py-2">Budget (Rs.)</th>
                      <th className="border px-3 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plans.map((plan, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border px-3 py-2 text-center">{index + 1}</td>
                        <td className="border px-3 py-2">{plan.date}</td>
                        <td className="border px-3 py-2">{plan.time}</td>
                        <td className="border px-3 py-2">{plan.description}</td>
                        <td className="border px-3 py-2">Rs. {plan.budget}</td>
                        <td className="border px-3 py-2 text-center">
                          <div className="flex gap-2 justify-center">
                            <button onClick={() => handleEdit(index)} className="text-blue-600 hover:underline">
                              Edit
                            </button>
                            <button onClick={() => removePlan(index)} className="text-red-600 hover:underline">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-100 font-semibold">
                      <td colSpan={4} className="text-right px-3 py-2 border">Total</td>
                      <td className="border px-3 py-2">Rs. {totalBudget.toFixed(2)}</td>
                      <td className="border px-3 py-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={downloadPDF}
                  className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition flex"
                >
                  <IoDocumentText /> Download PDF
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="bg-black/40 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm">
      {icon} {text}
    </div>
  );
}