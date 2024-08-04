import React from "react";

import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";
import user4 from "../assets/user4.jpeg";
import user5 from "../assets/user5.jpeg";
import user6 from "../assets/user6.jpeg";

const RecentOrders = () => {
  const ordersList = [
    {
      id: 1,
      customerImage: user1,
      customerName: "Wade Warren",
      orderNumber: 735785,
      orderAmount: "$124.00",
      orderStatus: "Delivered",
    },
    {
      id: 2,
      customerImage: user2,
      customerName: "Jane Cooper",
      orderNumber: 986745,
      orderAmount: "$365.02",
      orderStatus: "Delivered",
    },
    {
      id: 3,
      customerImage: user3,
      customerName: "Guy Hawking",
      orderNumber: 345234,
      orderAmount: "$45.88",
      orderStatus: "Cancelled",
    },
    {
      id: 4,
      customerImage: user4,
      customerName: "Kristin Watson",
      orderNumber: 652198,
      orderAmount: "$128.20",
      orderStatus: "Pending",
    },
    {
      id: 5,
      customerImage: user5,
      customerName: "Cody Fisher",
      orderNumber: 763145,
      orderAmount: "$65.00",
      orderStatus: "Delivered",
    },
    {
      id: 6,
      customerImage: user6,
      customerName: "Nguyen Huy",
      orderNumber: 290876,
      orderAmount: "$545.00",
      orderStatus: "Delivered",
    },
  ];

  return (
    <div className="bg-[#1F2029] rounded-sm p-3 h-[450px] flex flex-col gap-2">
      <p className="text-xl font-bold">Recent Orders</p>
      <div>
        <table className="w-[100%] border-collapse">
          <thead>
            <tr className="border-b-[1px] border-gray-50">
              <th className="text-left py-3">Customer</th>
              <th className="text-left py-3">Order No.</th>
              <th className="text-left py-3">Amount</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {ordersList.map((order) => (
              <tr
                key={order?.id}
                className="border-b-[1px] border-gray-50 last:border-none"
              >
                <td className="py-2 text-sm flex items-center gap-2">
                  <img
                    src={order.customerImage}
                    className="w-10 h-10 rounded-full object-cover "
                  />
                  <span>{order.customerName}</span>
                </td>
                <td className="py-2 text-sm">{order.orderNumber}</td>
                <td className="py-2 text-sm">{order.orderAmount}</td>
                <td className="py-2 text-sm">
                  <span
                    className={
                      order.orderStatus == "Delivered"
                        ? "text-[#00CB8C] bg-[#D1F5E9] p-1 rounded-full"
                        : " text-[#F65D5C] bg-[#F2C9C9] p-1 rounded-full"
                    }
                  >
                    {order.orderStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
