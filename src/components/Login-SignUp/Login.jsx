import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhone,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import securityImage from "../../assets/SignUpImg.jpg";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    console.log("Signing up with", credentials, acceptTerms);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-zinc-900 text-white">
      <div className="flex flex-col md:flex-row bg-zinc-800 shadow-lg rounded-2xl overflow-hidden w-full max-w-5xl">
        {/* Security Image */}
        <div className="hidden relative md:flex flex-1">
          <img
            src={securityImage}
            alt="Security"
            className="w-full h-full object-cover object-center" 
          />
        </div>

        {/* Sign Up Form */}
        <div className="p-8 flex-1 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-4">
            Join Grey Allegiance!
          </h2>
          <p className="text-center text-zinc-400 mb-6">
            Create an account to access exclusive features.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FaUser className="absolute left-3 top-4 text-zinc-400" />
              <input
                type="text"
                name="fullName"
                value={credentials.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full pl-10 p-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-4 text-zinc-400" />
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-10 p-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <div className="relative">
              <FaPhone className="absolute left-3 top-4 text-zinc-400" />
              <input
                type="tel"
                name="phone"
                value={credentials.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full pl-10 p-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-3 top-4 text-zinc-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full pl-10 p-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-3 top-4 text-zinc-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={credentials.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full pl-10 p-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-4 text-zinc-400 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={() => setAcceptTerms(!acceptTerms)}
                className="mr-2"
                required
              />
              <label className="text-zinc-400">
                I agree to Grey Allegiance Security's{" "}
                <a href="#" className="text-white underline">
                  Terms & Conditions
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-zinc-900 hover:bg-zinc-300 font-semibold py-2 rounded-lg"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-zinc-400 mt-4">
            Already have an account?{" "}
            <a href="#" className="text-white underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
