import { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import React from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "Services", "Join Us", "Blog", "About Us", "Contact Us"];

  return (
    <nav className="bg-white shadow-md w-full relative">
      <div className="w-[1140px] mx-auto p-5 flex justify-between items-center">
        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={20} />}
        </button>

        {/* Overlay for mobile menu */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        {/* Side Navigation Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-50 md:static md:w-auto md:flex md:items-center md:bg-transparent md:shadow-none md:translate-x-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 text-md font-semibold p-5 md:p-0">
            {navLinks.map((link) => (
              <li key={link} className="relative cursor-pointer p-4 md:p-0">
                <h1
                  onClick={() => {
                    setActive(link);
                    setMenuOpen(false); // Close menu on click (mobile)
                  }}
                  className={`pb-2 transition relative ${
                    active === link ? "text-zinc-600" : "text-black"
                  } uppercase`}
                >
                  {link}
                  {active === link && (
                    <div className="absolute left-0 bottom-0 w-full h-[2px] bg-zinc-600 transition-all duration-300"></div>
                  )}
                </h1>
              </li>
            ))}
          </ul>
          {/* User Icon in Mobile Menu */}
          <div className="bg-black text-white flex items-center justify-center gap-2 p-4 md:hidden rounded-md mt-5 mx-4">
            <FaUser size={24} />
            <span className="text-sm font-semibold">User Profile</span>
          </div>
        </div>

        {/* User Icon */}
        <div className="bg-black text-white flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer hidden md:flex hover:bg-zinc-700 transition duration-300">
          <FaUser size={24} />
          <span className="text-sm font-semibold">User Profile</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;