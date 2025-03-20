import React from "react";
import CountUp from "react-countup";
import { FaShieldAlt, FaBullseye, FaEye } from "react-icons/fa";
import aboutUsImg from "../../../assets/about.jpg";
import aboutBanner from "../../../assets/aboutBanner.jpg";
import team1 from "../../../assets/img1.webp";
import team2 from "../../../assets/img2.webp";
import team3 from "../../../assets/img3.webp";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${aboutBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-[38%]"></div>
        <h1 className="relative text-white lg:text-7xl md:text-6xl font-medium text-center">
          About
        </h1>
      </div>

      {/* Welcome Section */}
      <div className="max-w-6xl mx-auto px-5 py-20 text-center">
        <h2 className="text-5xl font-bold">
          WELCOME TO <span className="text-gray-400">GREY ALLEGIANCE</span>
        </h2>
        <p className="mt-6 text-lg max-w-4xl mx-auto leading-relaxed">
          At <strong className="text-gray-400">Grey Allegiance</strong>, we are committed to providing
          <span> world-class security solutions</span> that guarantee protection,
          reliability, and peace of mind. Our expert professionals, combined with cutting-edge
          technology, ensure a proactive approach to safety and risk mitigation.
        </p>
      </div>

      {/* Stats & Image Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="relative w-full flex justify-center">
            <div className="w-full max-w-lg overflow-hidden rounded-lg shadow-lg">
              <img
                src={aboutUsImg}
                alt="Security Team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Guards", value: 3500 },
              { label: "Awards", value: 48 },
              { label: "Branches", value: 35 },
              { label: "Happy Clients", value: 1200 },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gray-700 p-10 rounded-lg text-center transition-transform transform hover:scale-105 shadow-lg"
              >
                <h3 className="text-5xl font-bold text-gray-300">
                  <CountUp end={stat.value} duration={3} />+
                </h3>
                <p className="text-gray-400 text-lg mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Are, Mission & Vision */}
      <div className="py-20 ">
        <div className="max-w-7xl mx-auto px-5 grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Who We Are",
              icon: <FaShieldAlt className="text-gray-300 text-5xl" />, 
              desc: "Grey Allegiance is a leading security provider known for its expertise in safeguarding lives and assets. We leverage advanced technology and highly trained professionals to ensure unmatched protection."
            },
            {
              title: "Our Mission",
              icon: <FaBullseye className="text-gray-300 text-5xl" />, 
              desc: "To integrate innovation and experience in security solutions, ensuring a proactive approach to risk management while providing clients with absolute peace of mind."
            },
            {
              title: "Our Vision",
              icon: <FaEye className="text-gray-300 text-5xl" />, 
              desc: "To establish a new benchmark in security services, where safety is accessible to all, and threats are neutralized before they emerge."
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-10 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-5">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400 mt-4 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet Our Team Section */}
        <div className="py-20 text-center">
          <h2 className="text-5xl font-bold">Meet Our Team</h2>
          <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto leading-relaxed">
            Our expert security professionals are committed to safeguarding lives and assets. With years of experience and a dedication to excellence, our team ensures that every client receives top-notch protection and peace of mind.
          </p>

          {/* Team Images */}
        <div className="max-w-9xl h-full mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[team1, team2, team3].map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img
                src={img}
                alt="Team Member"
                className="w-full h-80 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
