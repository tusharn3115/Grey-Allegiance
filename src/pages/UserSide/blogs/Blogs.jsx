import React from "react";
import { FaEye } from "react-icons/fa";
import blogHeaderImg from "../../../assets/blogs.jpg";
import blogImage1 from "../../../assets/blog1.jpg";
import blogImage2 from "../../../assets/blog1.jpg";
import { RiAdminLine } from "react-icons/ri";

const blogData = [
  {
    id: 1,
    title: "Latest Security Techniques",
    date: "02 Jul. 2023",
    author: "Admin",
    views: 120,
    description:
      "Discover the newest advancements in security techniques to safeguard data and ensure digital safety in today's evolving landscape.",
    image: blogImage1,
  },
  {
    id: 2,
    title: "Cyber Threats & Protection",
    date: "15 Aug. 2023",
    author: "Admin",
    views: 95,
    description:
      "Learn about the increasing cyber threats and how businesses can protect their valuable information from potential breaches.",
    image: blogImage2,
  },
];

const Blogs = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full min-h-[450px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${blogHeaderImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-transparent opacity-80"></div>
        <h1 className="relative text-white text-6xl font-extrabold tracking-wide drop-shadow-lg">
          Latest Insights & Blogs
        </h1>
      </div>

      {/* Blog Section */}
      <div className="container mx-auto px-6 py-20 max-w-6xl space-y-20">
        {blogData.map((blog, index) => (
          <div
            key={blog.id}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10 group`}
          >
            {/* Blog Image */}
            <div className="md:w-1/2 w-full overflow-hidden rounded-lg shadow-lg">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Blog Content */}
            <div className="md:w-1/2 w-full">
              <h2 className="text-4xl font-bold text-gray-900 transition-colors group-hover:text-gray-500 cursor-pointer">
                {blog.title}
              </h2>
              <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                {blog.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-gray-500 text-sm mt-6 pt-4">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-2">
                    📅 <span>{blog.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <RiAdminLine className="text-lg" />
                    <span>By {blog.author}</span>
                  </span>
                </div>
                <span className="flex items-center space-x-2">
                  <FaEye className="text-blue-500" />{" "}
                  <span>{blog.views} Views</span>
                </span>
              </div>    
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogs;
