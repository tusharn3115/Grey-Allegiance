import React from "react";
import { FaPhone, FaEnvelope, FaUser } from "react-icons/fa";

const MyAccount = () => {
  // Sample user data
  const user = {
    name: "John Doe",
    img: "https://via.placeholder.com/150",
    age: 28,
    phone: "+1234567890",
    email: "johndoe@example.com",
  };

  // Sample past bookings
  const pastBookings = [
    { id: 1, service: "Dental Checkup", date: "March 5, 2024", status: "Completed" },
    { id: 2, service: "Eye Consultation", date: "Feb 15, 2024", status: "Completed" },
    { id: 3, service: "Physiotherapy", date: "Jan 10, 2024", status: "Cancelled" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 border border-gray-200">
      {/* User Details */}
      <div className="flex flex-col items-center text-center pb-6 border-b">
        <img src={user.img} alt="User" className="w-28 h-28 rounded-full shadow-md border-4 border-blue-500" />
        <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
        <p className="text-gray-500 text-sm">Age: {user.age}</p>
        <div className="mt-2 space-y-1">
          <p className="flex items-center gap-2 text-gray-700"><FaPhone className="text-blue-500" /> {user.phone}</p>
          <p className="flex items-center gap-2 text-gray-700"><FaEnvelope className="text-red-500" /> {user.email}</p>
        </div>
      </div>

      {/* Past Bookings */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold border-b pb-2 mb-4 text-center">Past Bookings</h3>
        <div className="space-y-4">
          {pastBookings && pastBookings.length > 0 ? (
            pastBookings.map((booking) => (
              <div key={booking.id} className="p-5 bg-gray-50 rounded-lg shadow-sm border border-gray-300">
                <p className="font-medium text-lg text-gray-800">{booking.service}</p>
                <p className="text-gray-600 text-sm">Date: {booking.date}</p>
                <p
                  className={`text-sm font-semibold mt-1 ${
                    booking.status === "Completed" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  Status: {booking.status}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No past bookings found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;