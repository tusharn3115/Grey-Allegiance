import React from "react";
import { ArrowRight } from "lucide-react";
import AboutUsImg from "../../../assets/aboutUsImg.webp";

const AboutUs = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center gap-6 px-4 md:px-8 lg:px-12 py-8 lg:py-12 mt-6 lg:mt-10 max-w-7xl mx-auto">
      {/* Image Section - Appears first on mobile */}
      <div className="w-full lg:w-1/2">
        <img
          src={AboutUsImg}
          alt="Security"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-5">
        <h4 className="text-zinc-500 font-bold uppercase">About Us</h4>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
          SECURITY for <span className="text-zinc-500">your Safety</span>
        </h2>
        <p className="text-gray-700 font-medium">
          Security is not just about technology; it&apos;s about trust and reliability.
          We ensure that our solutions provide round-the-clock protection, keeping
          you and your assets safe.
        </p>
        <p className="text-gray-600 font-medium">
          <strong>Grey Allegiance Security</strong> excels in personal security
          and close protection, offering discreet, highly trained professionals
          dedicated to ensuring your safety and peace of mind.
        </p>
        <p className="text-gray-600 font-medium">
          Our team is equipped with cutting-edge surveillance technology and
          strategic security planning to deter threats before they arise.
        </p>
        <p className="text-gray-600 font-medium">
          At Grey Allegiance Security, we prioritize discretion and efficiency,
          ensuring that our clients receive seamless protection without intrusion.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="bg-zinc-500 text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold hover:bg-zinc-800 transition cursor-pointer">
            Read more <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
