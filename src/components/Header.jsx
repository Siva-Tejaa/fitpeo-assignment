import React from "react";
import userImage from "../assets/userImage.png";

import { IconContext } from "react-icons";
import { IoSearch } from "react-icons/io5";
import { AiFillOpenAI } from "react-icons/ai";

import { HiOutlineMail } from "react-icons/hi";
import { IoSettingsOutline, IoNotifications } from "react-icons/io5";

const Header = () => {
  return (
    <div className="bg-[#1F2029] text-white p-4 flex items-center justify-between">
      <div className="flex items-center gap-10">
        <IconContext.Provider value={{ color: "#7796FB", size: "40px" }}>
          <AiFillOpenAI />
        </IconContext.Provider>

        <div className="hidden laptop:flex items-center">
          <div className="bg-[#292B2F] p-[10px] rounded-l-md">
            <IconContext.Provider value={{ color: "#9CA3AF" }}>
              <IoSearch />
            </IconContext.Provider>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-[#292B2F] p-[6px] border-none outline-none rounded-r-md desktop:w-[250px]"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-[#292B2F] p-2 rounded-full">
          <IconContext.Provider value={{ color: "#9CA3AF", size: "23px" }}>
            <HiOutlineMail />
          </IconContext.Provider>
        </div>
        <div className="bg-[#292B2F] p-2 rounded-full">
          <IconContext.Provider value={{ color: "#9CA3AF", size: "23px" }}>
            <IoSettingsOutline />
          </IconContext.Provider>
        </div>
        <div className="bg-[#292B2F] p-2 rounded-full relative">
          <IconContext.Provider value={{ color: "#9CA3AF", size: "23px" }}>
            <IoNotifications />
          </IconContext.Provider>
          <div className="w-2 h-2 bg-[#7796FB] rounded-full absolute top-2 right-3"></div>
        </div>
        <img src={userImage} className="w-9 h-9 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
