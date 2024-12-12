import React from "react";
import { Link } from "react-router-dom";

const ClearCache = ({ isVisible, togglePopup }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-white pt-2 shadow-2xl shadow-black rounded-t-3xl transform transition-transform ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Handle Bar */}
      <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>

      <div className="flex items-center justify-between w-full px-4 py-2">
        <img src="/close.png" width={40} onClick={togglePopup} alt="Close" />

        <h2 className="text-center flex-1 text-lg font-semibold">
          Clear cache
        </h2>

        <div className="w-6"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center items-center text-center px-6">
        <p className="text-base mb-8">
          You are requesting to delete a cache with a size of 238.05 mb. Are you
          sure about your request?
        </p>
        <div className="flex w-full justify-center gap-4 mb-7">
          <button
            onClick={togglePopup}
            className="bg-gray-200 px-14 py-4 rounded-full text-black font-semibold"
          >
            Cancel
          </button>
          <button className="bg-gray-900 px-14 py-4 rounded-full text-gray-200 font-semibold">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClearCache;
