import React from "react";
import alarm from "../../../assets/alarm.webp";
import constructionsite from "../../../assets/constructionsite.webp";
import event from "../../../assets/eventSecurity.jpg";
import firewatch from "../../../assets/firewatch.webp";
import mobilepatrol from "../../../assets/mobilePatrol.webp";
import serveillance from "../../../assets/serveillance.webp";

const services = [
  {
    title: "Surveillance",
    image: serveillance,
    description:
      "Keep a vigilant eye on your property with our surveillance services. From advanced CCTV systems to professional monitoring, we ensure your safety 24/7.",
  },
  {
    title: "Mobile Patrols",
    image: mobilepatrol,
    description:
      "Grey Allegiance Security’s mobile patrol services provide rapid, on-the-go protection, ensuring your property remains secure with regular monitoring and swift response 24/7.",
  },
  {
    title: "Alarm Response",
    image: alarm,
    description:
      "We provide alarm response services to quickly respond to potential threats and minimize damage to your property.",
  },
  {
    title: "Fire Watch",
    image: firewatch,
    description:
      "Our security guards are trained to detect and respond to fire hazards, ensuring your property is protected from potential fires.",
  },
  {
    title: "Event Security",
    image: event,
    description:
      "We provide event security services to ensure the safety of attendees and prevent disruptions during your events.",
  },
  {
    title: "Construction Site Security",
    image: constructionsite,
    description:
      "Our construction site security prevents theft, vandalism, and other criminal activities that may occur on your site.",
  },
];

const Services = () => {
  return (
    <div className="py-16 px-6 sm:px-8 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Protect Your Property with Grey Allegiance
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
