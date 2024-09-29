import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useUsersActivitiesQuery } from "@/redux/api/user/userApi";

ChartJS.register(ArcElement, Tooltip, Legend);

const ActivitiesChart: React.FC = () => {
  const { data: activities } = useUsersActivitiesQuery("");
  const data = {
    labels: [ "Completed", "Not Completed"],
    datasets: [
      {
        label: "users",
        data: [activities?.data, 100 - activities?.data],
        backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 99, 132, 0.6)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Users Activities",
      },
    },
  };

  return (
    <div className="max-w-md mx-auto">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ActivitiesChart;
