import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight } from "react-icons/fa";

import banner_img1 from "../assets/banner1.jpg";
import banner_img2 from "../assets/banner2.jpg";

// ✅ Register Swiper Modules
SwiperCore.use([Navigation]);

const Banner = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation
        className="w-full h-full"
      >
        {[banner_img1, banner_img2].map((img, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <img
              src={img}
              alt="banner"
              className="w-full h-full object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <p className="text-lg mb-10">
                Protection, Defence & Access Control
              </p>
              <h1 className="text-7xl font-semibold">Security service</h1>
              <h1 className="text-7xl font-semibold">
                for your personal safety
              </h1>
            </div>

            {/* Contact Button */}
            <div className="absolute mt-16 top-[34rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-5 text-white">
              <h3 className="text-xl font-semibold">Contact us</h3>
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <FaArrowRight className="text-black" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
