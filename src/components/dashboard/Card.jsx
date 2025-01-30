import React from "react";

const Card = ({ icon, total, description }) => {
  return (
    <div className="mt-5 bg-[#fff] px-8 py-4 rounded-md flex items-center gap-3 text-black shadow-lg">
      <div className="bg-blue-500 p-4 rounded-md">{React.createElement(icon, { className: "text-white size-6" })}</div>
      <div>
        <h2 className="font-bold ">{total}</h2>
        <p className="text-black/70 font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default Card;
