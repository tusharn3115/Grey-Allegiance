import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import securityImage from "../../../assets/forgetpass.jpg";
import { Link } from "react-router-dom";

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
    <div className="flex h-screen w-full items-center justify-center bg-zinc-950 text-white lg:px-4">
      <div className="flex flex-col md:flex-row lg:bg-zinc-800 shadow-2xl rounded-2xl overflow-hidden w-full max-w-3xl">
        {/* Security Image */}
        <div className="hidden md:flex flex-1">
          <img src={securityImage} alt="Security" className="w-full h-full object-cover" />
        </div>

        {/* Forgot Password Form */}
        <div className="p-10 flex-1 flex flex-col justify-center">
          <h2 className="lg:text-3xl text-4xl font-bold text-center mb-10">Forgot Password?</h2>
          <p className="text-center text-zinc-400 mb-6">No worries! Enter your email, and we’ll send you a reset link.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-4 text-zinc-400" />
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500 transition"
                required
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-zinc-200 hover:bg-zinc-400 cursor-pointer text-black font-semibold py-3 rounded-lg transition duration-300 shadow-md"
            >
              Send Reset Link
            </button>
          </form>

          <p className="text-center text-zinc-400 mt-6">
            Remembered your password?{" "}
            <Link to="/log-in" className="text-white underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
