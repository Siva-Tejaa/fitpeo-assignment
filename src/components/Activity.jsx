import React from "react";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components you need
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Activity = () => {
  const labels = [5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27];
  const salesData = [
    4000, 9000, 4500, 3000, 6000, 6000, 5500, 5750, 4000, 2000, 6500, 7000,
    6200, 10500, 8000, 12500, 15000, 11800, 7500, 5000, 4000, 6400, 11500, 7800,
    6900,
  ];

  // Data for the bar chart
  const data = {
    labels: Array.from({ length: 24 }, (_, i) => i + 1), // Generates [1, 2, ..., 24]
    datasets: [
      {
        label: "Sales",
        data: salesData,
        backgroundColor: "#7195FF",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        borderRadius: 12, // Rounded corners
      },
    ],
  };

  // Options for the bar chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hides the legend on top
      },
    },
    scales: {
      x: {
        title: {
          display: true,
        },
        grid: {
          display: false, // Hide vertical grid lines
        },
        ticks: {
          callback: function (value) {
            const xValues = [5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27];
            return xValues[value % xValues.length]; // Display x values
          },
        },
        border: {
          color: "rgba(128, 128, 128, 0.5)", // Gray color for the x-axis base line
          width: 1, // Width of the x-axis base line
        },
      },
      y: {
        title: {
          display: true,
        },
        grid: {
          color: "rgba(128, 128, 128, 0.2)", // Gray color for horizontal grid lines
          borderColor: "rgba(128, 128, 128, 0.5)", // Optional: gray color for axis border
          borderWidth: 1,
        },
        beginAtZero: true,
        ticks: {},
        border: {
          color: "rgba(128, 128, 128, 0.5)", // Gray color for the x-axis base line
          width: 1, // Width of the x-axis base line
        },
      },
    },
  };

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
      <div className="h-[100%] w-[100%]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Activity;
