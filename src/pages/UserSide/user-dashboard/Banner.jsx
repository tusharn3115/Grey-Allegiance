import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight } from "react-icons/fa";

import banner_img1 from "../../../assets/banner1.jpg";
import banner_img2 from "../../../assets/banner2.jpg";

// ✅ Register Swiper Modules
SwiperCore.use([Navigation]);

const bannerText = [
  {
    subtitle: "Protection, Defence & Access Control",
    title1: "Security service",
    title2: "for your personal safety",
  },
  {
    subtitle: "Advanced Surveillance & Monitoring",
    title1: "Ensuring your safety",
    title2: "with cutting-edge technology",
  },
];

// 🎬 Smooth fade-in animation variants
const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        navigation
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {[banner_img1, banner_img2].map((img, index) => (
          <SwiperSlide key={index} className="w-full h-full relative">
            <img src={img} alt="banner" className="w-full h-full object-cover" />

            {/* Animated Text Overlay */}
            <AnimatePresence mode="wait">
              {activeIndex === index && (
                <motion.div
                  key={index}
                  className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fadeInVariant}
                >
                  <p className="text-sm md:text-lg mb-4 md:mb-10">
                    {bannerText[index].subtitle}
                  </p>
                  <h1 className="text-3xl md:text-6xl lg:text-7xl font-semibold leading-tight">
                    {bannerText[index].title1}
                  </h1>
                  <h1 className="text-3xl md:text-6xl lg:text-7xl font-semibold leading-tight">
                    {bannerText[index].title2}
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Contact Button */}
            <AnimatePresence mode="wait">
              {activeIndex === index && (
                <motion.div
                  key={`btn-${index}`}
                  className="absolute mt-6 md:mt-16 top-[32rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row items-center gap-3 md:gap-5 text-white"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fadeInVariant}
                  transition={{ delay: 0.3 }} // Slight delay for better effect
                >
                  <h3 className="text-lg md:text-xl font-semibold">Contact us</h3>
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <FaArrowRight className="text-black text-lg md:text-2xl cursor-pointer" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
