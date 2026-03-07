import React from "react";

export default function CompanySince({ startYear = 20245 }) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
      {startYear === currentYear ? `Started in ${startYear}` : `Since ${startYear}`}
    </div>
  );
}