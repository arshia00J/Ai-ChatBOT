import React from "react";

export default function MemoryBox({ title, content, createdAt }) {
  const formatDate = (timestamp) => {
    const now = new Date();
    const date = new Date(timestamp * 1000);
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} sec ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 604800) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else {
      const weeks = Math.floor(diffInSeconds / 604800);
      return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    }
  };

  return (
    <div className="text-base max-w-48 bg-white border rounded-3xl mb-4 px-6 py-7">
      {/* Title */}
      <h2 className="font-semibold text-emerald-400">{title}</h2>

      {/* Content */}
      <p className="mt-2 text-gray-700 ">
        {content.length > 100 ? `${content.slice(0, 100)}...` : content}
      </p>

      {/* Timestamp */}
      <p className="mt-4 text-gray-400 text-xs">{formatDate(createdAt)}</p>
    </div>
  );
}
