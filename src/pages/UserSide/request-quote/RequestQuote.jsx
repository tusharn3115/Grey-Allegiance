import React from "react";
import Navbar from "../../../components/user/Navbar";
import FooterAll from "../../../components/user/FooterAll";
import backgroundImage from "../../../assets/request-quote.webp";

const RequestQuote = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative w-full min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-[35%]"></div>
        <h1 className="relative text-white lg:text-7xl md:text-6xl font-medium text-center">
          Request a Quote
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl w-full mx-auto px-6 md:px-8 py-12">
        <p className="text-gray-700 text-lg leading-relaxed">
          At Grey Allegiance Security, we are committed to delivering
          exceptional security services that provide peace of mind at an
          affordable cost. With a team of highly trained professionals, we
          prioritize your safety with tailored security solutions.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-6">
          Whether you need on-site security personnel, surveillance systems, or
          risk assessment services, we are here to help. Reach out today to
          explore how we can enhance your security.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-6">
          Looking for employment? Visit our{" "}
          <span className="font-semibold text-zinc-700 cursor-pointer">
            Job Board
          </span>{" "}
          for current opportunities. Join a team that values integrity,
          teamwork, and professional growth.
        </p>

        {/* Form Section */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-zinc-700"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-zinc-700"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-zinc-700"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-zinc-700"
          />
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-zinc-700"
          />
          <select className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-zinc-700">
            <option value="">Reason for Inquiry *</option>
            <option value="Security Services">Security Services</option>
            <option value="Employment">Employment</option>
            <option value="Consultation">Consultation</option>
          </select>
          <textarea
            placeholder="Message"
            className="border border-gray-300 p-3 rounded w-full col-span-1 md:col-span-2 focus:ring-2 focus:ring-zinc-700 h-40"
          ></textarea>
          <button className="w-full md:w-auto bg-zinc-700 text-white py-3 px-6 rounded hover:bg-zinc-900 transition cursor-pointer">
            REQUEST A QUOTE
          </button>
        </form>
      </div>

      <FooterAll />
    </>
  );
};

export default RequestQuote;
