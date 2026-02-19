import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      // Save user and token using AuthContext
      login(res.data);

      alert(res.data.msg || "Login successful");

      // redirect to home page
      navigate("/");

    } catch (err) {

      console.error(err);

      alert(
        err.response?.data?.msg ||
        "Login failed. Please check your credentials."
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200">

      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-semibold text-center mb-6 text-green-600">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">

          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-md p-2 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>

            <label className="block mb-1 text-gray-700 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-md p-2 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md shadow-md transition duration-200"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        {/* Register link */}
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
