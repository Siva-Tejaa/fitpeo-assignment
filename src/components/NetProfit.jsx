import React from "react";

import { Gauge } from "react-circular-gauge";

import { IconContext } from "react-icons";

import { IoMdArrowDropup } from "react-icons/io";

const NetProfit = () => {
  return (
    <div className="bg-[#1F2029] rounded-sm p-3 h-[155px] flex justify-between">
      <div className="flex flex-col gap-7">
        <p className="text-sm">Net Profit</p>
        <div>
          <p className="text-3xl font-bold">$6759.25</p>
          <div className="text-[#12A57D] flex items-center gap-1">
            <IconContext.Provider
              value={{
                size: "25px",
              }}
            >
              <IoMdArrowDropup />
            </IconContext.Provider>
            <p>3%</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-sm">
        <Gauge
          value="70"
          minValue="0"
          maxValue="100"
          direction="ccw"
          arcWidth="0.2"
          arcColor="#7A95F6"
          trackWidth="0.2"
          trackColor="#BAC3EE"
          renderValue={({ fmtValue }) => `${fmtValue}%`}
          renderBottomLabel="Goal Completed"
          bottomLabelStyle={{
            fontSize: "8px",
            color: "#93949B",
          }}
        />
        <p className="text-[10px] text-[#93949B]">
          *The values here has been rounded off
        </p>
      </div>
    </div>
  );
};

export default NetProfit;
