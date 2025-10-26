'use client';
import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const contactDetails = [
  {
    icon: <FaMapMarkerAlt className="text-orange-500 text-6xl" />,
    title: 'Our Address',
    text: 'flat no: 111, bldg no 14, Mankhurd, Mumbai, India',
  },
  {
    icon: <FaEnvelope className="text-orange-500 text-6xl" />,
    title: 'info@gotur.com',
    text: 'Email us anytime for any kind of query.',
  },
  {
    icon: <FaPhoneAlt className="text-orange-500 text-6xl" />,
    title: 'IND: +91 7021418973',
    text: 'Call us for any support, we are here to help.',
  },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8 bg-white mt-10 mb-10">
      {contactDetails.map((item, index) => (
        <div
          key={index}
          className="bg-green-50 rounded-xl shadow-sm p-8 text-center w-full max-w-sm border border-green-100 h-[40vh] flex flex-col justify-center items-center"
        >
          <div className="mb-4">{item.icon}</div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
