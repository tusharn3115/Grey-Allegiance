import React, { useState } from "react";
import backgroundImage from "../../../assets/request-quote.jpg";
import "./RequestQuote.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { requestQuoteSchemaValidation } from "../../../utils/services/form-validation/RequestQuoteValidation";
import { createRequestQuoteApi } from "../../../utils/services/apis/RequestQuote";
import { Watch } from "react-loader-spinner";

const RequestQuote = () => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitSuccessful }, // Added isSubmitSuccessful to track successful submission
  } = useForm({ resolver: yupResolver(requestQuoteSchemaValidation) });

  const onSubmit = async (formData) => {
    setLoading(true);
    setServerError("");
    setSuccessMessage(""); // Reset previous messages

    try {
      const res = await createRequestQuoteApi(formData);
      if (res.status) {
        setSuccessMessage("✅ Successfully submitted!");
        reset(); // Reset the form inputs after submission
      }
    } catch (error) {
      setServerError(error?.response?.data?.message || "❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-transparent opacity-80"></div>
        <h1 className="heading relative text-white font-extrabold tracking-wide drop-shadow-lg lg:text-7xl md:text-6xl text-center">
          Request a Quote
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl w-full mx-auto px-6 md:px-8 py-12">
        <p className="text-gray-700 text-lg leading-relaxed">
          At Grey Allegiance Security, we are committed to delivering exceptional security services that provide peace of mind at an affordable cost. With a team of highly trained professionals, we prioritize your safety with tailored security solutions.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* First Name */}
          <div>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName")}
              className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-zinc-700"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
              className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-zinc-700"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
          </div>

          {/* Mobile */}
          <div>
            <input
              type="number"
              placeholder="Phone Number"
              {...register("mobile")}
              className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-zinc-700"
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-zinc-700"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* City Dropdown */}
          <div>
            <select
              {...register("location")}
              className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-zinc-700"
            >
              <option value="">Select City *</option>
              <option value="Vancouver">Vancouver</option>
              <option value="Surrey">Surrey</option>
              <option value="Burnaby">Burnaby</option>
              <option value="Richmond">Richmond</option>
              <option value="Abbotsford">Abbotsford</option>
              <option value="Coquitlam">Coquitlam</option>
              <option value="Kelowna">Kelowna</option>
              <option value="Victoria">Victoria</option>
              <option value="Langley">Langley</option>
              <option value="Nanaimo">Nanaimo</option>
            </select>
            {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
          </div>

          {/* Reason of Inquiry */}
          <div>
            <select
              {...register("reasonOfInquiry")}
              className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-zinc-700"
            >
              <option value="">Reason for Inquiry *</option>
              <option value="Security Services">Security Services</option>
              <option value="Employment">Employment</option>
              <option value="Consultation">Consultation</option>
            </select>
            {errors.reasonOfInquiry && <p className="text-red-500 text-sm">{errors.reasonOfInquiry.message}</p>}
          </div>

          {/* Message */}
          <div className="col-span-1 md:col-span-2">
            <textarea
              placeholder="Message"
              {...register("message")}
              className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-zinc-700 h-40"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          {/* Success & Error Messages */}
          {successMessage && (
            <div className="col-span-1 md:col-span-2 text-green-600 font-semibold text-center">
              {successMessage}
            </div>
          )}
          {serverError && (
            <div className="col-span-1 md:col-span-2 text-red-500 font-semibold text-center">
              {serverError}
            </div>
          )}

          {/* Submit Button & Loader */}
          <div className="col-span-1 md:col-span-2 flex justify-center relative">
            <button
              type="submit"
              disabled={loading}
              className={`lg:w-48 md:w-auto py-3 px-6 rounded transition cursor-pointer ${
                loading ? "bg-gray-500 cursor-not-allowed" : "bg-zinc-700 hover:bg-zinc-900 text-white"
              }`}
            >
              {loading ? "Processing..." : "REQUEST A QUOTE"}
            </button>

            {/* Full-screen Loader */}
            {loading && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <Watch visible={true} height="80" width="80" color="#4fa94d" ariaLabel="loading" />
              </div>
            )}
          </div>
        </form>l
      </div>
    </>
  );
};

export default RequestQuote;