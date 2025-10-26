import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/Travel-Planner/client/src/assets/logo.png";
import { FaShoppingCart, FaTelegram } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AuthContext } from "../../context/AuthContext.jsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate("/login");
  };

  return (
    <>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full bg-white h-[80px] flex items-center justify-between px-8 shadow-md z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-[180px]" />
        </div>

        {/* Navigation Menu (Desktop) */}
        <ul className="hidden lg:flex gap-8 text-gray-800 font-medium text-[16px]">
          <li><Link to="/" className="hover:text-green-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-green-600">About Us</Link></li>
          <li><Link to="/destination" className="hover:text-green-600">Destination</Link></li>
          <li><Link to="/tours" className="hover:text-green-600">Tours List</Link></li>
          <li><Link to="/planning" className="hover:text-green-600">Planning</Link></li>
          <li><Link to="/news" className="hover:text-green-600">News</Link></li>
          <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>
        </ul>

        {/* Right Icons and Hamburger */}
        <div className="flex items-center gap-5">
          {/* Cart Icon */}
          <FaShoppingCart
            className="text-xl text-gray-800 cursor-pointer hover:text-green-600 transition"
            onClick={() => navigate("/cart")}
          />

          {/* Hamburger Icon */}
          <div
            className="w-10 h-10 bg-green-100 flex items-center justify-center rounded-full cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HiOutlineMenuAlt3 className="text-green-600 text-xl" />
          </div>

          {/* Get in Touch Button */}
          <Link to="/contact">
            <button className="bg-orange-500 text-white font-semibold rounded-full px-6 py-2 flex items-center gap-2 hover:bg-orange-600 transition-all">
              Get In Touch <FaTelegram />
            </button>
          </Link>
        </div>
      </div>

      {/* Hamburger Sidebar */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 w-[300px] h-screen bg-white shadow-lg border-l z-50 p-6 mt-[81px]">
            <div className="flex flex-col items-center text-center mt-6">
              <img src={logo} alt="Company Logo" className="w-20 mb-2" />
              <h2 className="text-xl font-semibold text-green-700">Gotur Pvt. Ltd.</h2>
              <p className="text-gray-600 text-sm mt-1">
                We plan, you travel — Discover amazing places with us.
              </p>
            </div>

            {/* Auth Section */}
            <div className="flex flex-col gap-4 mt-8">
              {user ? (
                <>
                  <div className="text-center">
                    <p className="text-gray-700 font-medium">
                      Welcome, <span className="text-green-600">{user.name}</span>
                    </p>
                    <p className="text-gray-500 text-sm">{user.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-all"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-all">
                      Sign In
                    </button>
                  </Link>
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full bg-gray-100 border border-green-500 text-green-600 py-2 rounded hover:bg-gray-50 transition-all">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
