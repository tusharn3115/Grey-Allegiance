import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
} from "date-fns";
import securityGuard from "../../../assets/securityGuard.webp";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ServiceBooking = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const navigate = useNavigate();

  const morningSlots = [
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
  ];
  const afternoonSlots = [
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];
  const eveningSlots = [
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
    "11:00 PM",
  ];

  const service = {
    title: "Security Guard Service",
    duration: "1 hr",
    description:
      "Ensure your safety with our professional personal protection services. Grey Allegiance provides highly trained bodyguards who can be deployed to your location, offering unmatched security and peace of mind wherever you go.",
    image: securityGuard,
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const renderHeader = () => (
    <div className="flex justify-between items-center p-4 bg-black text-white rounded-t-md">
      <button
        onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
        className="p-2 bg-zinc-700 rounded-md"
      >
        ❮
      </button>
      <h2 className="text-lg font-semibold">
        {format(currentMonth, "MMMM yyyy")}
      </h2>
      <button
        onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
        className="p-2 bg-gray-700 rounded-md"
      >
        ❯
      </button>
    </div>
  );

  const renderDays = () => {
    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    return (
      <div className="grid grid-cols-7 text-center text-gray-700 font-semibold py-2">
        {days.map((day, index) => (
          <div key={index} className="py-1">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const days = [];
    let day = startDate;

    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }

    return (
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div
            key={index}
            className={`py-3 text-center rounded-lg transition cursor-pointer ${
              isSameDay(day, selectedDate)
                ? "bg-zinc-500 text-white"
                : "hover:bg-gray-200"
            } ${
              format(day, "MM") !== format(currentMonth, "MM")
                ? "text-gray-400"
                : "text-gray-900"
            }`}
            onClick={() => handleDateClick(day)}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-4 bg-white w-full max-w-5xl mx-auto mt-6 mb-6 gap-10">
      {/* Left Side - Calendar and Time Slots */}
      <div className="w-full">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-gray-900 text-sm sm:text-base font-medium mb-4 sm:mb-6 transition-all"
        >
          <IoArrowBack className="text-lg sm:text-xl" />
          <span>View All Sevices</span>
        </button>

        {renderHeader()}
        {renderDays()}
        {renderCells()}

        {selectedDate && (
          <div className="mt-6 w-full">
            <h3 className="lg:text-xl sm:text-base font-semibold text-gray-800 text-left mt-20 mb-10">
              Available Time Slots on {format(selectedDate, "MMMM dd, yyyy")}
            </h3>

            {/* Morning Slots */}
            <div className="mt-4">
              <h4 className="text-md font-semibold text-gray-700 mb-2">
                🌅 Morning
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {morningSlots.map((time, index) => (
                  <button
                    key={index}
                    className="p-2 bg-gray-100 hover:bg-zinc-500 hover:text-white rounded-md transition"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Afternoon Slots */}
            <div className="mt-4">
              <h4 className="text-md font-semibold text-gray-700 mb-2">
                ☀ Afternoon
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {afternoonSlots.map((time, index) => (
                  <button
                    key={index}
                    className="p-2 bg-gray-100 hover:bg-zinc-500 hover:text-white rounded-md transition"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Evening/Night Slots */}
            <div className="mt-4">
              <h4 className="text-md font-semibold text-gray-700 mb-2">
                🌙 Evening/Night
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {eveningSlots.map((time, index) => (
                  <button
                    key={index}
                    className="p-2 bg-gray-100 hover:bg-zinc-500 hover:text-white rounded-md transition"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right Side - Service Info */}
      <div className="lg:w-full md:w-1/3 p-4 mt-6 md:mt-0 md:ml-6">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-72 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold">{service.title}</h2>
        <p className="text-gray-600 mt-1">{service.duration} | Get a quote</p>
        <p className="mt-4 text-gray-700">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceBooking;
