import React from "react";
import Total from "./Total";
import Activity from "./Activity";
import RecentOrders from "./RecentOrders";
import NetProfit from "./NetProfit";
import Links from "./Links";
import Feedback from "./Feedback";

const Main = () => {
  return (
    <main className="bg-[#141316] text-[#FFFFFF] w-[100%] p-4 flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="flex gap-6">
        <div className="w-[65%] flex flex-col gap-4">
          <Total />
          <Activity />
          <RecentOrders />
        </div>
        <div className="w-[35%] flex flex-col gap-4">
          <NetProfit />
          <Links />
          <Feedback />
        </div>
      </div>
    </main>
  );
};

export default Main;
