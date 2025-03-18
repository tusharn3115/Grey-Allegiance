import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SignUpImg from "../../assets/SignUpImg.jpg";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex md:min-h-screen bg-zinc-900 text-white md:flex-row flex-col">
      {/* Left Section with Full-Width Image, Hidden on Mobile */}
      <div className="md:w-1/2 w-full hidden md:block">
        <img src={SignUpImg} alt="Security Image" className="w-full h-full object-cover object-right" />
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-10 bg-white text-black">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center">Create Your Account</h2>
          <p className="text-center text-gray-600">Secure your information with Grey Allegiance</p>

          <form className="mt-6">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <input type="text" placeholder="First name" className="p-3 border rounded-md w-full" />
              <input type="text" placeholder="Last name" className="p-3 border rounded-md w-full" />
            </div>

            <input type="email" placeholder="Enter your email" className="mt-4 p-3 border rounded-md w-full" />

            <div className="mt-4 flex items-center gap-2 border rounded-md p-3">
              <span className="text-gray-500">+1</span>
              <input type="tel" placeholder="(000) 000-0000" className="w-full outline-none" />
            </div>

            <div className="mt-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="p-3 border rounded-md w-full"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="mt-4 flex items-center">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms" className="text-gray-600 text-sm">
                I have read and agree with the Terms of Use, Client Agreement and Privacy Policy
              </label>
            </div>

            <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-md font-semibold">
              Create account
            </button>

            <p className="mt-4 text-center text-gray-600">
              Already have an account? <a href="#" className="text-blue-500">Log in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}