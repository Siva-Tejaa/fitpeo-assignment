import React from "react";
import SideNav from "./SideNav";
import Main from "./Main";

const Body = () => {
  return (
    <div className="flex">
      <SideNav />
      <Main />
    </div>
  );
};

export default Body;
