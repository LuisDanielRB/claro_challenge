import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div
      className={
        isDanger
          ? "border-2 border-red-700 w-20 h-20 text-center rounded-full text-red p-4 font-bold"
          : "border-2 w-20 h-20 text-center rounded-full text-white p-4 font-bold"
      }
    >
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
