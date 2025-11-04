import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
        <p className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty</p>
        <Link
          to="/destination"
          className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all"
        >
          Browse Destinations
        </Link>
      </div>
    );

  // Calculate totals
  const totalTravelers = cart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const gst = 100;
  const grandTotal = subtotal + gst;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          to="/destination"
          className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
        >
          <FaArrowLeft className="mr-2" /> Back to Tours
        </Link>

        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Booking Cart</h1>
        <p className="text-gray-500 mb-8">
          Review your selected tours before checkout.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Left side - Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row justify-between items-center border border-gray-200 bg-white rounded-2xl shadow-sm p-5"
              >
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {item.days || "3 Nights / 4 Days"}
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <select
                        defaultValue="3-star"
                        className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                      >
                        <option>3-star</option>
                        <option>4-star</option>
                        <option>5-star</option>
                      </select>
                      <p className="font-semibold text-gray-800">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity || 1}
                    readOnly
                    className="w-12 text-center border border-gray-300 rounded-md"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Summary */}
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            <div className="flex justify-between text-gray-700">
              <span>Total Travelers</span>
              <span className="font-medium">{totalTravelers}</span>
            </div>
            <hr />
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span className="font-semibold">${subtotal}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>GST / Service charge</span>
              <span className="font-semibold">${gst}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t">
              <span>Grand Total</span>
              <span>${grandTotal}</span>
            </div>

            <div className="pt-4">
              <p className="text-gray-600 text-sm mb-2">Apply promo code</p>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-grow border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <button className="bg-green-500 text-white px-4 rounded-r-md hover:bg-green-600">
                  Apply
                </button>
              </div>
            </div>

            <button className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold text-lg hover:bg-orange-600 transition-all">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
