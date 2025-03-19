import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import securityImage from "../../../assets/forgetpass.jpg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset request for", email);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-zinc-900 to-gray-800 text-white px-4">
      <div className="flex flex-col md:flex-row bg-zinc-800 shadow-2xl rounded-2xl overflow-hidden w-full max-w-3xl">
        {/* Security Image */}
        <div className="hidden md:flex flex-1">
          <img src={securityImage} alt="Security" className="w-full h-full object-cover" />
        </div>

        {/* Forgot Password Form */}
        <div className="p-10 flex-1 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center mb-2">Forgot Password?</h2>
          <p className="text-center text-gray-400 mb-6">No worries! Enter your email, and we’ll send you a reset link.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
            >
              Send Reset Link
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Remembered your password?{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300 underline transition">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
