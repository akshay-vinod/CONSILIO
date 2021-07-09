import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import "./css/LineChart.css";
const LineChart = ({ stateD, stateDateD, dData, title }) => {
  var Confirmed = [];
  var Recovered = [];
  var Deceased = [];
  var DistrictName = [];
  var DistrictValue = [];
  var dataDistrict = [];
  Object.keys(dData).map((item) => {
    if (item !== "Unknown") {
      var lengthDistrict = Object.keys(dData[item].dates).length;
      var districtDate = Object.keys(dData[item].dates)[lengthDistrict - 1];
      dataDistrict.push({
        name: item,
        value: dData[item].dates[districtDate].delta.confirmed,
      });
    }
    return "";
  });
  dataDistrict.sort((a, b) => {
    return b.value - a.value;
  });
  // console.log(dataDistrict);
  for (var j = 0; j < 5; j++) {
    if (dataDistrict[j] !== undefined) {
      DistrictName.push(dataDistrict[j].name);
      DistrictValue.push(dataDistrict[j].value);
    }
  }
  stateDateD.map((item) => {
    if (item !== undefined) {
      if ("confirmed" in item) Confirmed.push(item.confirmed);
      if ("recovered" in item) Recovered.push(item.recovered);
      if ("deceased" in item) Deceased.push(item.deceased);
    }
    return "";
  });
  const data = {
    labels: [...stateD],
    datasets: [
      {
        label: "Confirmed",
        data: Confirmed,
        fill: false,
        borderColor: "rgb(255, 7, 58)",
        backgroundColor: "rgb(255, 7, 58)",
        tension: 0.1,
      },
      {
        label: "Recovered",
        data: Recovered,
        fill: false,
        borderColor: "rgb(40, 167, 69)",
        backgroundColor: "rgb(40, 167, 69)",
        tension: 0.1,
      },
    ],
  };
  const dataDoughnut = {
    labels: DistrictName,
    datasets: [
      {
        label: "My First Dataset",
        data: DistrictValue,
        backgroundColor: [
          "rgb(218,25,83)",
          "rgb(15,189,168)",
          "rgb(254,184,92)",
          "rgb(100,138,225)",
          "rgb(108, 117, 125)",
        ],
        borderColor: [
          "rgb(218,25,83)",
          "rgb(15,189,168)",
          "rgb(254,184,92)",
          "rgb(100,138,225)",
          "rgb(108, 117, 125)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="LineChart">
      <div className="chart">
        <Line
          data={data}
          height={300}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "bottom",
              },
              title: {
                display: true,
                align: "start",
                text: `Cumulative Summary of ${title}`,
                color: "#ffff",
                font: {
                  family: "Montserrat",
                  size: 21,
                  weight: "normal",
                },
                padding: { top: 10, bottom: 20 },
              },
            },
          }}
        />
      </div>
      <div className="coffee">
        <div className="chart">
          <Doughnut
            data={dataDoughnut}
            height={100}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "right",
                  title: {
                    display: true,
                    text: `On ${stateD[6]}`,
                  },
                },
                title: {
                  display: true,
                  align: "start",
                  text: `Top districts(Confirmed Case) `,
                  color: "#ffff",
                  font: {
                    family: "Montserrat",
                    size: 21,
                    weight: "normal",
                  },
                  padding: { top: 10, bottom: 20 },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
