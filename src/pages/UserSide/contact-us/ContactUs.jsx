import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,  
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import contactUs from "../../../assets/contactUs.jpg";

const ContactUs = () => {
return (
    <>
        {/* Hero Section */}
        <div
            className="relative w-full min-h-[400px] flex items-center justify-center"
            style={{
                backgroundImage: `url(${contactUs})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-transparent opacity-80"></div>
            <h1 className="heading relative text-white font-extrabold tracking-wide drop-shadow-lg lg:text-7xl md:text-6xl text-center">
                Contact Us
            </h1>
        </div>

      <div className="p-8 max-w-7xl mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">CONTACT US</h2>
            <p className="text-gray-600 mt-4">
              At Grey Allegiance, we are committed to providing exceptional
              service and support. Whether you have questions, need assistance,
              or want to collaborate, feel free to reach out to us.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-gray-700 text-xl" />
                <p className="text-gray-700 font-semibold">+1 6725004444
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-700 text-xl" />
                <p className="text-gray-700 font-semibold">
                allegiancegrey@gmail.com
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-gray-700 text-xl" />
                <p className="text-gray-700 font-semibold">
                  19181 34A Ave #101, Surrey, BC V3Z 0Z7
                </p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-800">SOCIAL:</h3>
              <div className="flex space-x-4 mt-3">
                <a href="#" className="text-2xl text-gray-700 hover:text-gray-500 duration-200">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-2xl text-gray-700 hover:text-gray-500 duration-200">
                  <FaTwitter />
                </a>
                <a href="#" className="text-2xl text-gray-700 hover:text-gray-500 duration-200">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800">Get in Touch</h3>
            <form className="mt-4">
              <label className="block text-gray-700 font-semibold">
                Your Name
              </label>
              <input
                type="text"
                className="w-full p-2 mt-2 border rounded-lg"
                placeholder="Enter your name"
              />

              <label className="block text-gray-700 font-semibold mt-4">
                Your Email
              </label>
              <input
                type="email"
                className="w-full p-2 mt-2 border rounded-lg"
                placeholder="Enter your email"
              />

              <label className="block text-gray-700 font-semibold mt-4">
                Your Message
              </label>
              <textarea
                className="w-full p-2 mt-2 border rounded-lg h-24"
                placeholder="Enter your message"
              ></textarea>

              <button className="bg-gray-800 cursor-pointer hover:bg-gray-700 duration-200 text-white px-6 py-2 mt-4 rounded-lg w-full font-semibold">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
