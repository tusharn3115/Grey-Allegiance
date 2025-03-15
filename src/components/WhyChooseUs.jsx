import React from "react";
import { FaHourglassHalf, FaLightbulb, FaAnchor } from "react-icons/fa";
import chooseUs from "../assets/choose-us.jpg";

const WhyChooseUs = () => {
  return (
    <section className="flex justify-around items-center px-10 py-16">
      {/* Left Section */}
      <div className="w-1/2">
        <h2 className="text-3xl font-bold mb-4">WHY CHOOSE US</h2>
        <p className="text-gray-600 mb-6">
          The Love Boat promises something for everyone now to beat every one.
        </p>
        <div className="space-y-6">
          {[
            { title: "YEARS OF EXPERIENCES", icon: <FaHourglassHalf className="text-zinc-500 text-4xl" /> },
            { title: "SELF MOTIVATED GUARDS", icon: <FaLightbulb className="text-zinc-500 text-4xl" /> },
            { title: "LATEST SECURITY TECHNIQUES", icon: <FaAnchor className="text-zinc-500 text-4xl" /> },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-5">
              <div className="border-2 border-zinc-500 p-2">{item.icon}</div>
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600">
                  The Love Boat promises something for every beat of very best to make the others comfortable.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right Section */}
      <div className="w-[40%] relative">
        <img
          src={chooseUs}
          alt="Security Guard"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
