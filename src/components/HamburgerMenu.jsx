import React from "react";
import { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png"; // Import Logo

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "Services", "Join Us", "Blog", "About Us", "Contact Us"];

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        className="text-black focus:outline-none z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={20} />}
      </button>

      {/* Overlay for Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <ul
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 p-5 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo inside Hamburger Menu */}
        <div className="flex items-center gap-3 p-4">
          <img src={Logo} alt="logo" className="w-[60px]" />
          <h1 className="text-center">
            <span className="text-xl font-semibold">GREY</span> <br />
            <span className="text-zinc-600 text-sm font-medium">ALLEGIANCE</span>
          </h1>
        </div>

        {navLinks.map((link) => (
          <li key={link} className="relative cursor-pointer p-4">
            <h1
              onClick={() => setMenuOpen(false)}
              className="pb-2 transition relative uppercase text-black"
            >
              {link}
            </h1>
          </li>
        ))}

        {/* User Profile inside Hamburger */}
        <div className="flex bg-black text-white items-center gap-2 px-4 py-2 rounded-md cursor-pointer hover:bg-zinc-700 transition duration-300 mt-7">
          <FaUser size={24} />
          <span className="text-sm font-semibold">User Profile</span>
        </div>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
