import React from "react";

import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";

const Feedback = () => {
  const customerFeedback = [
    {
      id: 1,
      customerImage: user1,
      customerName: "Jenny Wilson",
      rating: 4,
      comment:
        "The food was excellent and so as the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens which was also very good.",
    },
    {
      id: 2,
      customerImage: user2,
      customerName: "Scarlet Johnson",
      rating: 5,
      comment:
        "We enjoyed the eggs benedict served on homemade focaccia bread and hot coffee. Perfect Service.",
    },
    {
      id: 3,
      customerImage: user3,
      customerName: "Devon Lane",
      rating: 4,
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <div className="bg-[#1F2029] rounded-sm p-3 h-[450px] overflow-y-scroll flex flex-col gap-2">
      <p className="text-xl font-bold">Customer's Feedback</p>
      <div className="flex flex-col gap-2">
        {customerFeedback.map((customer) => (
          <div
            key={customer?.id}
            className="flex flex-col gap-2 py-2 border-b-[1px] last:border-none"
          >
            <div className="flex items-center gap-2">
              <img
                src={customer.customerImage}
                className="w-10 h-10 rounded-full object-cover "
              />
              <p className="font-bold">{customer.customerName}</p>
            </div>
            <div className="text-xl">
              {"★★★★★✰✰✰✰✰".slice(5 - customer.rating, 10 - customer.rating)}
            </div>
            <div className="text-sm text-[#94959C]">{customer.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
