import React from "react";
import { ArrowRight } from "lucide-react";
import AboutUsImg from "../assets/aboutUsImg.webp";

const AboutUs = () => {
  return (
    <section className="flex md:flex-col items-center gap-8 p-6 md:p-12 md:mt-10 rounded-lg shadow-lg max-w-7xl mx-auto">
      {/* Text Section */}
      <div className="w-full text-center space-y-6">
        <h4 className="text-zinc-500 font-bold uppercase">About Us</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          SECURITY for <span className="text-zinc-500">your Safety</span>
        </h2>
        <p className="text-gray-700 font-medium">
          Security is not just about technology; it’s about trust and reliability. We ensure that our solutions provide round-the-clock protection, keeping you and your assets safe.
        </p>
        <p className="text-gray-600 font-medium">
          <strong>Grey Allegiance Security</strong> excels in personal security and close protection, offering discreet,
          highly trained professionals dedicated to ensuring your safety and peace of mind in every situation.
        </p>
        <p className="text-gray-600 font-medium">
          Our team is equipped with cutting-edge surveillance technology and strategic security planning to deter threats before they arise.
        </p>
        <p className="text-gray-600 font-medium">
          At Grey Allegiance Security, we prioritize discretion and efficiency, ensuring that our clients receive seamless protection without intrusion.
        </p>
        <div className="flex justify-center">
          <button className="bg-zinc-500 text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold hover:bg-zinc-800 transition cursor-pointer">
            Read more <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full">
        <img
          src={AboutUsImg} 
          alt="CCTV Camera"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutUs;
