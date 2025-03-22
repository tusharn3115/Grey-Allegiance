import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import loginImage from "../../../assets/loginImg.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", credentials);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-zinc-900 text-white">
      <div className="flex flex-col md:flex-row bg-zinc-800 shadow-lg rounded-2xl overflow-hidden w-full max-w-5xl">
        {/* Security Image */}
        <div className="hidden relative md:flex flex-1">
          <img
            src={loginImage}
            alt="Security"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Log In Form */}
        <div className="p-8 flex-1 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-4">Welcome Back!</h2>
          <p className="text-center text-zinc-400 mb-6">
            Log in to access your account.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <button
                type="button"
                className="absolute right-3 top-4 text-zinc-400 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-white text-zinc-900 hover:bg-zinc-300 font-semibold py-2 rounded-lg"
            >
              Log In
            </button>
          </form>
          <div className="text-center mt-4">
            <a href="/forgot-password" className="text-white underline">
              Forgot Password?
            </a>
          </div>
          <p className="text-center text-zinc-400 mt-4">
            Don't have an account? {" "}
            <Link to="/sign-up" className="text-white underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;