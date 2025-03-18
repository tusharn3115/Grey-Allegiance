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
        <div className="p-8 flex-1 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-center mb-2">Welcome Back</h2>
          <p className="text-center text-gray-400 mb-6">Sign in to access your account</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full pl-10 p-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full pl-10 p-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-400 focus:outline-none"
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
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-500" />
            <span className="px-2 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-500" />
          </div>
          <div className="flex justify-center space-x-4">
            <button className="flex w-full items-center justify-center cursor-pointer space-x-2 bg-white text-zinc-900 py-2 px-4 rounded-lg hover:bg-gray-300">
              <FcGoogle /> <span>Google</span>
            </button>
          </div>
          <p className="text-center text-gray-400 mt-4">
            Don't have an account? <a href="#" className="text-white underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;