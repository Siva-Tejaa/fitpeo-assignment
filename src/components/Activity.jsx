import React from "react";

const Activity = () => {
  return (
    <div className="bg-[#1F2029] rounded-sm p-3 h-[250px]">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">Activity</p>
        <select className="text-[#FFFFFF] p-[6px] rounded-full outline-none bg-[#4B4C53]">
          <option>Daily</option>
          <option selected>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
    </div>
  );
};

export default Activity;
