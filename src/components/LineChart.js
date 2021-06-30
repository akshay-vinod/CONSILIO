import React from "react";
import { Line } from "react-chartjs-2";
const LineChart = ({ stateD, stateDateD }) => {
  var Confirmed = [];
  var Recovered = [];
  stateDateD.map((item) => {
    Confirmed.push(item.confirmed);
    Recovered.push(item.recovered);
  });
  const data = {
    labels: [...stateD],
    datasets: [
      {
        label: "Confirmed",
        data: Confirmed,
        fill: false,
        borderColor: "rgb(255, 7, 58)",
        tension: 0.1,
      },
      {
        label: "Recovered",
        data: Recovered,
        fill: false,
        borderColor: "rgb(40, 167, 69)",
        tension: 0.1,
      },
    ],
  };
  return (
    <div style={{ width: "500px" }}>
      <Line data={data} height={500} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default LineChart;
