import React from "react";
import { useNavigate } from "react-router-dom";
import blogImage1 from "../../../assets/blog1.jpg";
import { RiAdminLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { PiTagBold } from "react-icons/pi"; // Tag Icon

const blogData = [
  {
    id: 1,
    title: "Latest Security Techniques",
    date: "02 Jul. 2023",
    author: "Admin",
    views: 1250,
    description:
      "Discover the newest advancements in security techniques to safeguard data and ensure digital safety in today's evolving landscape. This blog explores the latest security trends, emerging threats, and innovative solutions to keep your digital assets secure.\n\n" +
      "Key Security Techniques - \n" +
      "1. Multi-Factor Authentication (MFA): Enhancing security by requiring multiple authentication factors.\n" +
      "2. End-to-End Encryption: Protecting sensitive data from unauthorized access.\n" +
      "3. Zero-Trust Architecture: 'Never trust, always verify' approach to security.\n" +
      "4. AI-Powered Threat Detection: Using machine learning to identify threats in real time.\n" +
      "5. Regular Security Audits: Identifying vulnerabilities before cybercriminals do.\n\n\n" +
      "In-Depth Analysis - \n\n" +
      "Cyber threats are evolving rapidly, making it crucial for businesses and individuals to stay ahead with the latest security strategies. Traditional security models relied on perimeter defense, assuming that internal networks were inherently safe. However, this approach is no longer viable in a world where cyberattacks are more sophisticated and insiders can pose threats.\n\n" +
      "The Zero-Trust Architecture (ZTA) model enforces strict identity verification for every user and device attempting to access network resources. Instead of assuming trust, ZTA continuously monitors and validates credentials. Companies like Google have successfully implemented this model through their 'BeyondCorp' framework, demonstrating its effectiveness in preventing unauthorized access.\n\n" +
      "Another game-changer in cybersecurity is Artificial Intelligence (AI) and Machine Learning (ML). These technologies analyze vast amounts of data to detect anomalies and potential cyber threats in real time. AI-driven security systems can proactively identify suspicious activities, reducing response time to security breaches.\n\n" +
      "Organizations must also adopt Security Information and Event Management (SIEM) Systems, which provide centralized real-time monitoring and analysis of security alerts. These systems help in detecting patterns of cyberattacks and enable rapid response.\n\n" +
      "Lastly, cybersecurity is not just about technology; it’s about awareness and education. Companies must conduct regular training programs to educate employees on security best practices, phishing attack detection, and password hygiene. A well-informed workforce can significantly reduce the risk of security breaches.\n\n" +
      "By integrating these advanced security techniques, businesses and individuals can enhance their digital safety and stay resilient against ever-evolving cyber threats. Security is an ongoing process that requires vigilance, adaptation, and continuous learning in an increasingly digital world.",
    image: blogImage1,
    tags: ["#events", "#insurance", "#loans", "#sales", "#trainings"],
  },
];

const DetailedBlog = () => {
  const navigate = useNavigate();
  const blog = blogData[0];

  if (!blog) {
    return <div className="text-center text-xl py-10">Blog not found</div>;
  }

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full min-h-[370px] sm:min-h-[400px] md:min-h-[450px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-transparent opacity-80"></div>
        <h1 className="relative text-white text-2xl sm:text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg text-center px-4 sm:px-8 md:px-12">
          {blog.title}
        </h1>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-16 max-w-[95%] sm:max-w-2xl md:max-w-5xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 text-sm sm:text-base font-medium mb-4 sm:mb-6 transition-all"
        >
          <IoArrowBack className="text-lg sm:text-xl" />
          <span>Back to Blogs</span>
        </button>

        {/* Title and Meta Info */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          {blog.title}
        </h2>
        <div className="flex flex-wrap items-center justify-between text-gray-500 text-xs sm:text-sm mt-2 mb-6 sm:mb-12 pt-2 sm:pt-4">
          <div className="flex flex-wrap items-center space-x-3 sm:space-x-4">
            <span className="flex items-center space-x-1 sm:space-x-2">
              📅 <span>{blog.date}</span>
            </span>
            <span className="flex items-center space-x-1">
              <RiAdminLine className="text-lg" />
              <span>By {blog.author}</span>
            </span>
          </div>
          <span className="flex items-center space-x-2">
            <FaEye className="text-blue-500" /> <span>{blog.views} Views</span>
          </span>
        </div>

        {/* Detailed Description */}
        <p className="text-base sm:text-lg text-gray-700 mt-4 sm:mt-6 leading-relaxed whitespace-pre-line">
          {blog.description}
        </p>

        {/* Tags Section */}
        <div className="mt-8 sm:mt-12 flex items-center space-x-3">
          <PiTagBold className="text-gray-500 text-lg sm:text-xl" />
          <div className="flex flex-wrap gap-3">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm sm:text-base font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedBlog;
