import React from "react";
import { Link } from "react-router-dom";

const ThemePopUp = ({ isVisible, togglePopup }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-white pt-2 shadow-2xl shadow-black rounded-t-3xl transform transition-transform ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Handle Bar */}
      <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
      <img
        src="/close.png"
        className="ml-5"
        width={40}
        onClick={togglePopup}
        alt=""
      />
      {/* Content */}
      <div className="space-y-6 py-6 px-8">
        <div className="flex justify-between items-center text-lg font-medium text-black">
          <h5>System default</h5>
          <img src="/arrow.png" width={24} alt="" />
        </div>

        {/* Divider */}
        <div className="border-b"></div>

        <div className="flex justify-between items-center text-lg font-medium text-black">
          <h5>Light mode</h5>

          <img src="/arrow.png" width={24} alt="" />
        </div>

        {/* Divider */}
        <div className="border-b"></div>

        <div className="flex justify-between items-center text-lg font-medium text-black">
          <h5>Dark mode</h5>
          <img src="/arrow.png" width={24} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ThemePopUp;
