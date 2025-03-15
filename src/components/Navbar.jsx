import { useState } from "react";
import { FaUser } from "react-icons/fa";
import React from "react";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const navLinks = [
    "Home",
    "Services",
    "Join Us",
    "Blog",
    "About Us",
    "Contact Us",
  ];

  return (
    <nav className="bg-white shadow-md w-full relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto p-5 flex justify-between items-center">
        {/* Navigation Links */}
        <ul className="hidden md:flex md:gap-6 md:items-center lg:space-x-8 text-md font-semibold">
          {navLinks.map((link) => (
            <li key={link} className="relative cursor-pointer">
              <h1
                onClick={() => setActive(link)}
                className={`pb-2 transition relative uppercase ${
                  active === link ? "text-zinc-600" : "text-black"
                }`}
              >
                {link}
                {active === link && (
                  <div className="absolute left-0 bottom-0 w-full h-[2px] bg-zinc-600 transition-all duration-300"></div>
                )}
              </h1>
            </li>
          ))}
        </ul>

        {/* User Profile */}
        <div className="hidden md:flex bg-black text-white items-center gap-2 px-4 py-2 rounded-md cursor-pointer hover:bg-zinc-700 transition duration-300">
          <FaUser size={24} />
          <span className="text-sm font-semibold">User Profile</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <HamburgerMenu navLinks={navLinks} />
      </div>
    </nav>
  );
};

export default Navbar;
