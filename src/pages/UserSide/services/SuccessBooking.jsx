import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const SuccessBooking = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-zinc-800 to-zinc-900 text-white">
      <div className="bg-zinc-800 p-8 rounded-lg shadow-xl text-center max-w-lg border border-zinc-700">
        <div className="flex justify-center">
          <CheckCircleIcon className="w-20 h-20 text-green-400 animate-bounce" />
        </div>
        <h2 className="text-3xl font-bold mt-4">Booking Confirmed! 🎉</h2>
        <p className="text-gray-300 mt-3 leading-relaxed">
          Your security service has been successfully booked. Our team will contact you soon with further details.
        </p>

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-transform transform hover:scale-105 shadow-md"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessBooking;
