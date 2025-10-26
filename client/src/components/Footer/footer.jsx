'use client';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaClock, FaEnvelope } from 'react-icons/fa';
import logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <>
    <footer className="bg-[#121814] text-white px-6 md:px-20 py-12 rounded-t-lg">
      {/* Top Info Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-700 pb-6">
        <div>
          <img src={logo} alt="logo" className='w-36'/>
        </div>
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-green-500" />
          <div>
            <p className="text-sm font-semibold">Send Email</p>
            <p className="text-lg">kaingadesahil841@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-green-500" />
          <div>
            <p className="text-sm font-semibold">Call Agent</p>
            <p className="text-lg">+91 7021418973</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaClock className="text-green-500" />
          <div>
            <p className="text-sm font-semibold">Opening Time</p>
            <p className="text-lg">24 hrs</p>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-10 text-gray-300">
        {/* About Gotur */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">About Gotur</h3>
          <p>The Website is Used to Plan Your Travel Efficiently and Effectively.The Website focuses on the User Experience and Provides the Best Travel Options Available.</p>
          <div className="flex gap-4 mt-4">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* Destinations */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Destinations</h3>
          <ul className="space-y-2">
            <li>Maharashtra</li>
            <li>Goa</li>
            <li>Kashmir</li>
            <li>Kerala</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Destination</li>
            <li>News & blog</li>
            <li>Planning</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
          <p>Sign up to searing weekly newsletter to get the latest updates.</p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 rounded-l-md w-full text-black"
            />
            <button className="bg-orange-500 px-4 rounded-r-md text-white">→</button>
          </div>
          <div className="flex items-center mt-4">
            <input type="checkbox" id="privacy" className="mr-2" />
            <label htmlFor="privacy">
              I agree to the <span className="underline text-white">Privacy Policy</span>.
            </label>
          </div>
        </div>
      </div>
    </footer>
    <div className='bg-[#e6600e] text-white py-2'>
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2025 Travel Planner. All rights reserved.</p>
      </div>
    </div>
    </>
  );
}
