import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import securityImage from "../../assets/loginImg.jpg";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing in with", credentials, rememberMe);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-zinc-900 text-white">
      <div className="flex flex-col md:flex-row bg-zinc-800 shadow-lg rounded-2xl overflow-hidden w-full max-w-4xl">
        {/* Security Image */}
        <div className="hidden md:flex flex-1">
          <img src={securityImage} alt="Security" className="w-full h-full object-cover" />
        </div>

        {/* Sign In Form */}
        <div className="p-10 flex-1 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-center mb-4">Welcome Back to Grey Allegiance!</h2>
        <p className="text-center text-gray-400 mb-6">Log in to access your dashboard and manage your account.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
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
              <FaLock className="absolute left-3 top-4 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full pl-10 p-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-4 text-gray-400 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="flex justify-between items-center">
              <label className="flex items-center text-gray-400">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="mr-2"
                />
                Remember Me
              </label>
              <a href="#" className="text-white underline">Forgot Password?</a>
            </div>
            <button type="submit" className="w-full bg-white text-zinc-900 hover:bg-gray-300 font-semibold py-2 rounded-lg">
              Sign In
            </button>
          </form>
          <p className="text-center text-gray-400 mt-4">
            New to Grey Allegiance? <a href="#" className="text-white underline">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;