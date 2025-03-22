import React, { useState } from "react";
import { Link } from "react-router-dom";

const cityPostalMap = {
  Toronto: "M5H 2N2",
  Vancouver: "V5K 0A1",
  Montreal: "H2X 1Y9",
  Calgary: "T2P 2M5",
  Edmonton: "T5J 3R8",
  Ottawa: "K1P 1J1",
  Winnipeg: "R3C 4T3",
  "Quebec City": "G1R 4P5",
  Halifax: "B3J 3S9",
  Victoria: "V8W 1H9",
};

const SecurityServiceForm = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setPostalCode(cityPostalMap[city] || "");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-900 mt-6 mb-4">
      <h2 className="text-4xl font-bold mb-4">Security Guard Service</h2>
      <div className="flex items-center gap-2 text-gray-600 mt-1">
        <p>March 22, 2025, 3:30 AM</p>
        <button className="px-3 py-1 text-white border bg-zinc-600 rounded-md cursor-pointer hover:bg-zinc-700 transition">
          Modify
        </button>
      </div>
      <p className="text-gray-600 mt-2">1 hr service</p>

      <h3 className="mt-6 text-lg font-medium">
        Service will be provided at your location
      </h3>

      <div className="mt-4 space-y-4">
        <input
          required
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 bg-gray-100 rounded-md placeholder-gray-500"
        />
        <input
          required
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 bg-gray-100 rounded-md placeholder-gray-500"
        />
        <input
          required
          type="text"
          placeholder="Address 1"
          className="w-full p-3 border border-gray-300 bg-gray-100 rounded-md placeholder-gray-500"
        />
        <input
          required
          type="text"
          placeholder="Address 2 (optional)"
          className="w-full p-3 border border-gray-300 bg-gray-100 rounded-md placeholder-gray-500"
        />

        <div className="grid grid-cols-2 gap-4">
          <select
            className="w-full p-3 border border-gray-300 bg-gray-100 rounded-md text-gray-900"
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="" disabled>
              Select City
            </option>
            {Object.keys(cityPostalMap).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <input
            required
            type="text"
            placeholder="Postal / Zip"
            value={postalCode}
            readOnly
            className="w-full p-3 border border-gray-300 bg-gray-100 rounded-md placeholder-gray-500 cursor-not-allowed"
          />
        </div>
      </div>

      <Link to="/success-booking">
        <button className="mt-6 px-6 py-3 bg-zinc-600 text-white font-semibold rounded-md cursor-pointer hover:bg-zinc-700 transition">
          BOOK
        </button>
      </Link>
    </div>
  );
};

export default SecurityServiceForm;
