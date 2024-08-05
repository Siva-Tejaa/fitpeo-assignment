import React from "react";
import { IconContext } from "react-icons";

import { AiOutlineAim } from "react-icons/ai";
import { LiaHamburgerSolid } from "react-icons/lia";
import { BiDish } from "react-icons/bi";
import { MdOutlineChevronRight } from "react-icons/md";

const Links = () => {
  const list = [
    {
      id: 1,
      icon: <AiOutlineAim />,
      iconColor: "#E66F32",
      iconBGColor: "rgb(246 200 177)",
      title: "Goals",
    },
    {
      id: 2,
      icon: <LiaHamburgerSolid />,
      iconColor: "#6B7BD3",
      iconBGColor: "rgb(179 188 235)",
      title: "Popular Dishes",
    },
    {
      id: 3,
      icon: <BiDish />,
      iconColor: "#288DB1",
      iconBGColor: "rgb(174 217 233)",
      title: "Menus",
    },
  ];

  return (
    <div className="bg-[#1F2029] rounded-sm p-3 h-[250px] flex flex-col justify-around">
      {list.map((item) => (
        <div key={item.id} className="flex items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <div
              style={{ backgroundColor: item?.iconBGColor }}
              className="p-4 w-fit rounded-full"
            >
              <IconContext.Provider
                value={{ color: item?.iconColor, size: "25px" }}
              >
                {item.icon}
              </IconContext.Provider>
            </div>
            <p>{item.title}</p>
          </div>
          <div className="bg-[#47484C] p-2 rounded-full">
            <MdOutlineChevronRight />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Links;
