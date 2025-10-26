import React, { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../../services/authService";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await forgotPassword(email);
      setMsg(res.data.msg || "Password reset link sent!");
    } catch (err) {
      setMsg(err.response?.data?.msg || "Failed to send reset link");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Enter your email to receive password reset instructions.
        </p>

        {msg && (
          <p className="text-center mb-4 text-sm text-green-600">{msg}</p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Send Reset Link
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Back to
          <Link
            to="/login"
            className="text-green-600 font-semibold ml-1 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
