import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { registerUser } from "../../../services/authService";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMsg("Passwords do not match");
      return;
    }

    try {
      const res = await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      setMsg(res.data.msg || "Registered successfully");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (err) {
      setMsg(err.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
          Create an Account
        </h2>

        {msg && (
          <p className="text-center mb-4 text-sm text-red-500">{msg}</p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Register
          </button>
        </form>

        <div className="mt-6">
          <p className="text-center text-sm text-gray-500">Or sign up with</p>
          <div className="flex justify-center mt-4 gap-4">
            <button className="p-3 rounded-full border hover:bg-gray-100 text-red-500">
              <FaGoogle />
            </button>
            <button className="p-3 rounded-full border hover:bg-gray-100 text-blue-600">
              <FaFacebookF />
            </button>
            <button className="p-3 rounded-full border hover:bg-gray-100 text-gray-700">
              <FaGithub />
            </button>
          </div>
        </div>

        <p className="mt-6 text-sm text-center">
          Already have an account?
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
