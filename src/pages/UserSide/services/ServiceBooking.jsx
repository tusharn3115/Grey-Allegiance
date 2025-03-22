import React, { useState } from "react";
import {
  format,
  addMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
  isBefore,
  isToday,
} from "date-fns";
import securityGuard from "../../../assets/securityGuard.webp";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const ServiceBooking = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const today = new Date();

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
    if (!isBefore(day, today) || isToday(day)) {
      setSelectedDate(day);
      setSelectedTime(null); // Reset selected time when date changes
    }
  };

  const handleTimeSlotClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-4 bg-white w-full max-w-5xl mx-auto mt-6 mb-6 gap-10">
      {/* Left Side - Calendar and Time Slots */}
      <div className="w-full">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-gray-900 text-sm sm:text-base font-medium mb-4 sm:mb-6 transition-all"
        >
          <IoArrowBack className="text-lg sm:text-xl" />
          <span>View All Services</span>
        </button>

        {/* Calendar */}
        <div className="flex justify-between items-center p-4 bg-black text-white rounded-t-md">
          <button
            onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
            className="p-2 bg-zinc-700 rounded-md"
            disabled={isBefore(startOfMonth(currentMonth), startOfMonth(today))}
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

        {/* Days of the week */}
        <div className="grid grid-cols-7 text-center text-gray-700 font-semibold py-2">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, index) => (
            <div key={index} className="py-1">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Cells */}
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 42 }, (_, index) => {
            const monthStart = startOfMonth(currentMonth);
            const monthEnd = endOfMonth(monthStart);
            const startDate = startOfWeek(monthStart);
            const endDate = endOfWeek(monthEnd);
            const day = addDays(startDate, index);

            return (
              <div
                key={index}
                className={`py-3 text-center rounded-lg transition cursor-pointer ${
                  isSameDay(day, selectedDate)
                    ? "bg-zinc-500 text-white"
                    : isBefore(day, today) && !isToday(day)
                    ? "text-gray-400 cursor-not-allowed"
                    : "hover:bg-gray-200 text-gray-900"
                }`}
                onClick={() => handleDateClick(day)}
              >
                {format(day, "d")}
              </div>
            );
          })}
        </div>

        {/* Time Slots */}
        {selectedDate && (
          <div className="mt-6 w-full">
            <h3 className="lg:text-xl sm:text-base font-semibold text-gray-800 text-left mt-20 mb-10">
              Available Time Slots on {format(selectedDate, "MMMM dd, yyyy")}
            </h3>

            {[
              { label: "🌅 Morning", slots: morningSlots },
              { label: "☀️ Afternoon", slots: afternoonSlots },
              { label: "🌙 Evening/Night", slots: eveningSlots },
            ].map(({ label, slots }, idx) => (
              <div key={idx} className="mt-4">
                <h4 className="text-md font-semibold text-gray-700 mb-2">
                  {label}
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {slots.map((time, index) => (
                    <button
                      key={index}
                      className={`p-2 rounded-md transition ${
                        selectedTime === time
                          ? "bg-zinc-500 text-white"
                          : "bg-gray-100 hover:bg-zinc-500 hover:text-white"
                      }`}
                      onClick={() => handleTimeSlotClick(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* "Book Service" Button */}
            {selectedTime && (
              <div className="mt-10">
                <Link to="/booking-user-details">
                  <button className="w-full p-3 bg-zinc-500 cursor-pointer text-white rounded-md text-lg font-semibold hover:bg-zinc-600 transition">
                    CONTINUE
                  </button>
                </Link>
              </div>
            )}
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
        <p className="text-gray-600 mt-1">{service.duration} service</p>
        <p className="mt-4 text-gray-700">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceBooking;
