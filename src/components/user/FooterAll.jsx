import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaRss,
} from "react-icons/fa";

const FooterAll = () => {
  return (
    <footer className="relative bg-gray-900 text-white text-center pt-16 pb-6 mt-14">
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

export default FooterAll;
