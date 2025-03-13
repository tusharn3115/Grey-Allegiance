import { useState } from "react";
import { FaUser } from "react-icons/fa";
import React from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const navLinks = ["Home", "Services", "Join Us", "Blog", "About Us", "Contact Us"];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Brand</div>

        {/* Navigation Links - Centered */}
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-8 text-lg font-medium relative">
            {navLinks.map((link) => (
              <li key={link} className="relative cursor-pointer">
                <span
                  onClick={() => setActive(link)}
                  className={`pb-2 hover:text-blue-600 transition ${
                    active === link ? "text-blue-600" : "text-gray-800"
                  }`}
                >
                  {link}
                </span>
                {active === link && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-blue-600 transition-all duration-300"></div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* User Icon */}
        <div className="text-gray-700 cursor-pointer hover:text-blue-600">
          <FaUser size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
