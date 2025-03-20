import { useState, useRef, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const location = useLocation(); // Get the current route
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Join Us", path: "/join-us" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative bg-white w-full overflow-visible border-b border-zinc-300">
      <div className="max-w-[1140px] mx-auto p-5 flex justify-between items-center">
        {/* Navigation Links */}
        <ul className="hidden md:flex md:gap-6 md:items-center lg:space-x-8 text-md font-semibold">
          {navLinks.map((link) => (
            <li key={link.name} className="relative cursor-pointer">
              <Link
                to={link.path}
                className={`pb-2 transition relative uppercase ${
                  location.pathname === link.path ? "text-zinc-600" : "text-black"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <div className="absolute left-0 bottom-0 w-full h-[2px] bg-zinc-600 transition-all duration-300"></div>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Request Quote */}
          <Link to="/request-quote">
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-zinc-700 cursor-pointer">
              Request a Quote
            </button>
          </Link>

          {/* User Profile */}
          <div className="relative" ref={menuRef}>
            <button
              className="hidden md:flex text-black items-center gap-2 px-4 py-2 rounded-md cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaUser size={24} />
            </button>

            {isOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border-2 shadow-xl rounded-md z-[9999]">
                <ul className="flex flex-col p-2">
                  <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                    SIGN IN
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                    CREATE ACCOUNT
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                    BOOKINGS
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                    MY ACCOUNT
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <HamburgerMenu navLinks={navLinks} />
      </div>
    </nav>
  );
};

export default Navbar;
