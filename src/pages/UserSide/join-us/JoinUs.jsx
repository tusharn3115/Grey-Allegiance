import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../../assets/img1.webp";
import img2 from "../../../assets/img2.webp";
import img3 from "../../../assets/img3.webp";
import img4 from "../../../assets/img4.webp";
import Navbar from "../../../components/user/Navbar";
import { FaPaperclip } from "react-icons/fa";
import FooterAll from "../../../components/user/FooterAll";

const JoinUs = () => {
  const images = [img1, img2, img3, img4];

  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileError("");
    } else {
      setFile(null);
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-5xl p-10 bg-white mb-20">
          {/* Header Section */}
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-6">
            Join Our Team
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
            Grey Allegiance Security is always on the lookout for skilled and
            dedicated professionals to join our team. If you have the expertise
            and commitment to contribute to a safer future, we welcome you to
            apply and be a part of our mission.
          </p>

          {/* Form Section */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-700 transition shadow-sm"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-700 transition shadow-sm"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-700 transition shadow-sm"
              />
            </div>

            {/* About You */}
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                About You
              </label>
              <textarea
                placeholder="Tell us about yourself, your experience, and why you want to join our team."
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-700 transition shadow-sm"
                rows={4}
              ></textarea>
            </div>

            {/* File Upload Section */}
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                Upload Resume (PDF or DOC)
              </label>
              <div className="flex items-center justify-between p-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
                <label className="flex items-center space-x-3 cursor-pointer text-gray-700 hover:text-gray-900">
                  <FaPaperclip className="text-xl" />
                  <span className="font-medium">Attach Resume</span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
                {file ? (
                  <span className="text-sm text-gray-600 truncate">
                    {file.name}
                  </span>
                ) : (
                  <span className="text-sm text-gray-500">No file selected</span>
                )}
              </div>
              {fileError && (
                <p className="text-red-500 text-sm mt-1">{fileError}</p>
              )}
            </div>

            {/* Submit Button */}
            <button className="w-full bg-gray-900 text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition">
              Submit Application
            </button>
          </form>
        </div>

        {/* Swiper Section */}
        <div className="w-full max-w-6xl text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Work Culture</h2>
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            centeredSlides={true}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="group">
                <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <FooterAll />
    </>
  );
};

export default JoinUs;