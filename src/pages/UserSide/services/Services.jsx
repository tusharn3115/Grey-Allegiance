import React from "react";
import securityGuard from "../../../assets/securityGuard.webp";
import surveillanceService from "../../../assets/serveillanceService.webp";
import patrolService from "../../../assets/patrolService.webp";
import executiveService from "../../../assets/executiveService.webp";
import eventService from "../../../assets/eventService.webp";
import serviceHeader from "../../../assets/service.jpg";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Security Guard Service",
    img: securityGuard,
    description:
      "Professional security guards to protect your premises and ensure safety.",
  },
  {
    title: "Surveillance",
    img: surveillanceService,
    description:
      "Advanced surveillance solutions to monitor and secure your property.",
  },
  {
    title: "Patrol Services",
    img: patrolService,
    description:
      "Regular patrolling to prevent unauthorized access and enhance security.",
  },
  {
    title: "Executive Protection",
    img: executiveService,
    description: "Specialized protection services for executives and VIPs.",
  },
  {
    title: "Event Security",
    img: eventService,
    description: "Reliable security management for public and private events.",
  },
];

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full min-h-[350px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${serviceHeader})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-transparent opacity-80"></div>
        <h1 className="heading relative text-white font-bold tracking-wide drop-shadow-lg lg:text-7xl md:text-6xl text-center">
          Book Our Services
        </h1>
      </div>

      <div className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-200 overflow-hidden transition transform hover:shadow-xl"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <p className="text-gray-500 text-sm mb-4">1 hr | Book Service Now</p>
                <Link
                  to="/service-booking"
                  className="mt-5 inline-block bg-black text-white px-6 py-2 rounded-lg font-medium tracking-wide hover:bg-gray-500 transition duration-200"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
