import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaArrowLeft, FaShoppingCart } from "react-icons/fa";

export default function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0)
    return (
      <div className="mt-28 flex flex-col items-center justify-center text-center p-8">
        <FaShoppingCart className="text-5xl text-gray-400 mb-4" />
        <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
        <Link
          to="/destination"
          className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all"
        >
          Browse Destinations
        </Link>
      </div>
    );

  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="mt-24 min-h-screen bg-gray-50 px-6 md:px-16 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <FaShoppingCart className="text-green-600" /> Your Cart
          </h1>
          <Link
            to="/destination"
            className="flex items-center gap-2 text-green-600 hover:text-green-700"
          >
            <FaArrowLeft /> Continue Shopping
          </Link>
        </div>

        {/* Cart Items */}
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between items-center border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-center gap-4 w-full md:w-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl border"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-500 text-sm">Price: ₹{item.price}</p>
                  <p className="text-gray-500 text-sm">Qty: {item.quantity || 1}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <p className="text-lg font-semibold text-green-700">
                  ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all"
                >
                  <FaTrashAlt /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Total: ₹{total.toFixed(2)}
          </h2>
          <button className="mt-4 md:mt-0 bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
