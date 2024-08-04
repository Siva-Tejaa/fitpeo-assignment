import React from "react";
import { IconContext } from "react-icons";

import { GrBasket } from "react-icons/gr";
import { AiFillPlusCircle } from "react-icons/ai";

import { IoBag } from "react-icons/io5";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { RiCloseCircleFill } from "react-icons/ri";

import { BiSolidDollarCircle } from "react-icons/bi";
import { FaLongArrowAltDown } from "react-icons/fa";

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Total = () => {
  const list = [
    {
      id: 1,
      icon: <GrBasket />,
      subIcon: <AiFillPlusCircle />,
      iconColor: "#4562F0",
      iconBGColor: "rgb(186 195 238)",
      title: "Total Orders",
      price: "75",
      profitLoss: "3%",
      isprofit: true,
    },
    {
      id: 2,
      icon: <IoBag />,
      subIcon: <RiCheckboxCircleFill />,
      iconColor: "#00CB8C",
      iconBGColor: "rgb(209 245 233)",
      title: "Total Delivered",
      price: "70",
      profitLoss: "3%",
      isprofit: false,
    },
    {
      id: 3,
      icon: <IoBag />,
      subIcon: <RiCloseCircleFill />,
      iconColor: "#F65D5C",
      iconBGColor: "rgb(242 201 201)",
      title: "Total Cancelled",
      price: "05",
      profitLoss: "3%",
      isprofit: true,
    },
    {
      id: 4,
      icon: <BiSolidDollarCircle />,
      subIcon: <FaLongArrowAltDown />,
      iconColor: "#E2449C",
      iconBGColor: "rgb(241 198 222)",
      title: "Total Revenue",
      price: "$12k",
      profitLoss: "3%",
      isprofit: false,
    },
  ];

  return (
    <section className="flex items-center justify-between gap-2">
      {list.map((item) => (
        <div
          key={item?.id}
          className="bg-[#1F2029] rounded-md p-3 flex flex-col gap-6 w-[25%] h-[155px]"
        >
          <div className="flex flex-col gap-2">
            <div
              style={{ backgroundColor: item?.iconBGColor }}
              className="p-2 rounded-md w-fit relative"
            >
              <IconContext.Provider
                value={{ color: item?.iconColor, size: "25px" }}
              >
                {item?.icon}
              </IconContext.Provider>
              <div className="absolute bottom-0 right-1 ">
                <IconContext.Provider
                  value={{
                    color: item?.iconColor,
                    size: "15px",
                  }}
                >
                  {item?.subIcon}
                </IconContext.Provider>
              </div>
            </div>
            <div className="text-sm">{item?.title}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold">{item?.price}</div>
            <div
              className={
                item.isprofit
                  ? "text-[#12A57D] flex items-center gap-1"
                  : "text-[#EA5055] flex items-center gap-1"
              }
            >
              <IconContext.Provider
                value={{
                  size: "25px",
                }}
              >
                {item.isprofit ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </IconContext.Provider>
              <p>{item?.profitLoss}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Total;
