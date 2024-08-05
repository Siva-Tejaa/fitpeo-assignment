import React from "react";
import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { PiWalletBold } from "react-icons/pi";
import { BsBagCheck } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";

const SideNav = () => {
  let sideNavItems = [
    {
      id: 1,
      icon: (
        <IconContext.Provider value={{ color: "#7796FB", size: "23px" }}>
          <AiFillHome />
        </IconContext.Provider>
      ),
    },
    {
      id: 2,
      icon: (
        <IconContext.Provider value={{ color: "#909296", size: "23px" }}>
          <MdOutlineAnalytics />
        </IconContext.Provider>
      ),
    },
    {
      id: 3,
      icon: (
        <IconContext.Provider value={{ color: "#909296", size: "23px" }}>
          <BiTask />
        </IconContext.Provider>
      ),
    },
    {
      id: 4,
      icon: (
        <IconContext.Provider value={{ color: "#909296", size: "23px" }}>
          <PiWalletBold />
        </IconContext.Provider>
      ),
    },
    {
      id: 5,
      icon: (
        <IconContext.Provider value={{ color: "#909296", size: "23px" }}>
          <BsBagCheck />
        </IconContext.Provider>
      ),
    },
  ];

  return (
    <aside className="hidden tablet:flex flex-col justify-between bg-[#1F2029] text-[#909296] py-1">
      <div className="flex flex-col bg-[#1F2029] text-[#909296] py-1">
        {sideNavItems.map((navItem) => (
          <nav
            key={navItem.id}
            className={
              navItem.id == 1
                ? "p-5 border-l-[3px] border-[#7496FC] block"
                : "p-5"
            }
          >
            {navItem.icon}
          </nav>
        ))}
      </div>
      <div className="flex items-center justify-center mb-6">
        <IconContext.Provider value={{ color: "#909296", size: "23px" }}>
          <IoMdLogOut />
        </IconContext.Provider>
      </div>
    </aside>
  );
};

export default SideNav;
