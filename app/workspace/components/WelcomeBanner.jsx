import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-500 to-pink-500 text-white shadow-lg">
      <h1 className="text-2xl font-bold mb-2">
        Welcome to Online Learning Platform
      </h1>
      <p className="text-sm md:text-base opacity-90">
        Learn your skills and advance your career with our comprehensive courses.
      </p>
    </div>
  );
};

export default WelcomeBanner;
