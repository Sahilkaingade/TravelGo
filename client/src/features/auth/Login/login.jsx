// src/features/auth/Login/login.jsx
import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      login(res.data);
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md transition-transform hover:scale-[1.02] duration-300">
        <h2 className="text-3xl font-semibold text-center mb-6 text-green-600">
          Welcome Back 👋
        </h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-md p-2 outline-none transition-all duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-md p-2 outline-none transition-all duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md shadow-md transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-5">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-green-600 font-medium cursor-pointer hover:underline"
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}
