import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaRss,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white text-center pt-24 pb-6 mt-14">
      {/* Newsletter Section */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-zinc-600 w-[90%] max-w-4xl rounded-[50px] flex flex-col sm:flex-row items-center p-6 shadow-lg gap-5">
        <div className="flex items-center gap-3 text-white">
          <FaRss className="text-4xl text-red-500" />
          <div>
            <p className="text-sm font-semibold">
              Want to know about our offers first?
            </p>
            <h2 className="text-xl font-bold">Subscribe our newsletter</h2>
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center gap-2 mt-4 sm:mt-0">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 border-2 py-2 rounded-full flex-1 text-white-700 focus:outline-none"
          />
          <button className="bg-blue-800 text-white px-5 py-2 rounded-full font-semibold cursor-pointer">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="px-6">
        <p className="text-gray-300 max-w-2xl mx-auto text-sm">
          Grey Allegiance Security is dedicated to providing top-tier
          protection with innovative security solutions. Our commitment to
          safety and reliability ensures peace of mind for individuals and
          businesses alike.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <div className="bg-zinc-700 p-3 rounded-full text-black cursor-pointer hover:opacity-80">
            <FaTwitter className="text-white" />
          </div>
          <div className="bg-zinc-700 p-3 rounded-full text-black cursor-pointer hover:opacity-80">
            <FaFacebookF className="text-white" />
          </div>
          <div className="bg-zinc-700 p-3 rounded-full text-black cursor-pointer hover:opacity-80">
            <FaInstagram className="text-white" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-gray-500 text-sm">
        Grey Allegiance © All Rights Reserved - 2025
      </div>
    </footer>
  );
};

export default Footer;
