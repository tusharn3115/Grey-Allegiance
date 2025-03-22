import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 grid-cols-1 gap-10">
        {/* Grey Allegiance Description */}
        <div>
          <h2 className="text-2xl font-bold">Grey Allegiance</h2>
          <p className="text-gray-400 text-sm mt-4">
            Grey Allegiance is one of the best marketing themes with which you
            can create astounding websites. It is easy to use, highly
            customizable, and built with a modern approach.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <div className="bg-gray-800 p-2 rounded-md hover:bg-zinc-400">
              <FaFacebookF />
            </div>
            <div className="bg-gray-800 p-2 rounded-md hover:bg-zinc-400">
              <FaInstagram />
            </div>
            <div className="bg-gray-800 p-2 rounded-md hover:bg-zinc-400">
              <FaXTwitter />
            </div>
          </div>
        </div>

        {/* Quick Links with Navigation */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-400 text-sm">
            <li>
              <Link
                to="/services"
                className="hover:underline hover:text-zinc-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/join-us"
                className="hover:underline hover:text-zinc-300"
              >
                Join Us
              </Link>
            </li>
            <li>
              <Link
                to="/request-quote"
                className="hover:underline hover:text-zinc-300"
              >
                Request Quote
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:underline hover:text-zinc-300">
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="hover:underline hover:text-zinc-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="hover:underline hover:text-zinc-300"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold">Get In Touch</h3>
          <div className="mt-3 space-y-2 text-gray-400 text-sm">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-zinc-400" /> (437) 982-9280
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-zinc-400" /> allegiancegrey@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-zinc-400" /> 19181 34A Ave #101, Surrey, BC V3Z 0Z7
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-gray-400 text-sm flex flex-col md:flex-row items-center lg:justify-evenly sm:justify-between text-center gap-4 px-4">
        <span>Copyright © 2025 Grey Allegiance All Rights Reserved.</span>
        <div className="flex gap-6">
          <Link
            to="/privacy-policy"
            className="hover:underline hover:text-zinc-300"
          >
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:underline hover:text-zinc-300">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
