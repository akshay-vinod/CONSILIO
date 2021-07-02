import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "./Print.css";
// const request = require("request");
// const csv = require("csvtojson");

const Print = ({
  fullSData,
  load,
  selectedS,
  selectedD,
  Sdate,
  SdateData,
  chartLabel,
  chartData,
}) => {
  const [stateData, setStateData] = useState([]);
  const [latestDate, setLatestDate] = useState("");
  // console.log(chartData);
  useEffect(() => {
    const fetchItems = async () => {
      var fullData = fullSData;
      // const districtList = await fullData.districts;
      // districtD(districtList);
      var stateDateList = [];
      var stateDateData = [];
      if (selectedD === "Select District") {
        var objState = fullData.dates;
        // console.log(objState);
        var lengthState = Object.keys(objState).length;
        stateDateList = [];
        stateDateData = [];
        for (var i = lengthState - 7; i < lengthState; i++) {
          stateDateList.push(Object.keys(objState)[i]);
        }
        setLatestDate(stateDateList[6]);
        stateDateList.map((fetchItem) =>
          stateDateData.push(objState[fetchItem].delta)
        );
        Sdate([...stateDateList]);
        SdateData([...stateDateData]);
        // console.log(stateDateList);
      } else {
        var objDistrict = fullData.districts[selectedD].dates;
        var lengthDistrict = Object.keys(objDistrict).length;
        stateDateList = [];
        stateDateData = [];
        for (var j = lengthDistrict - 7; j < lengthDistrict; j++) {
          stateDateList.push(Object.keys(objDistrict)[j]);
        }
        stateDateList.map((item) =>
          stateDateData.push(objDistrict[item].delta)
        );
        Sdate([...stateDateList]);
        SdateData([...stateDateData]);
        // console.log(stateDateData);
      }
      var currentObj = {
        confirmed:
          stateDateData[6] !== undefined
            ? stateDateData[6].confirmed
            : undefined,
        recovered:
          stateDateData[6] !== undefined
            ? stateDateData[6].recovered
            : undefined,
        deceased:
          stateDateData[6] !== undefined
            ? stateDateData[6].deceased
            : undefined,
      };
      var prevObj = {
        confirmed:
          stateDateData[5] !== undefined
            ? stateDateData[5].confirmed
            : undefined,
        recovered:
          stateDateData[5] !== undefined
            ? stateDateData[5].recovered
            : undefined,
        deceased:
          stateDateData[5] !== undefined
            ? stateDateData[5].deceased
            : undefined,
      };
      // console.log(stateDateData[6]);
      var Confirmed = [];
      var Recovered = [];
      var Deceased = [];
      stateDateData.map((item) => {
        if (item !== undefined) {
          if ("confirmed" in item) Confirmed.push(item.confirmed);
          if ("recovered" in item) Recovered.push(item.recovered);
          if ("deceased" in item) Deceased.push(item.deceased);
        }
      });
      var arrState = [
        {
          status: "Confirmed",
          data: currentObj.confirmed,
          increase:
            (currentObj.confirmed === undefined ? 0 : currentObj.confirmed) -
            (prevObj.confirmed === undefined ? 0 : prevObj.confirmed),
          icon: "fas fa-hospital-user",
          arr: Confirmed,
          color: "rgb(255, 77, 77",
        },

        {
          status: "Recovered",
          data: currentObj.recovered,
          increase:
            (currentObj.recovered === undefined ? 0 : currentObj.recovered) -
            (prevObj.recovered === undefined ? 0 : prevObj.recovered),
          icon: "bi bi-heart-fill",
          arr: Recovered,
          color: "rgb(0, 255, 0",
        },
        {
          status: "Deceased",
          data: currentObj.deceased,
          increase:
            (currentObj.deceased === undefined ? 0 : currentObj.deceased) -
            (prevObj.deceased === undefined ? 0 : prevObj.deceased),
          icon: "bi bi-x-octagon-fill",
          arr: Deceased,
          color: "rgb(160, 164, 171",
        },
      ];
      setStateData([...arrState]);
    };
    if (!load) fetchItems();
  }, [selectedS, selectedD]);

  return (
    <div className="cards">
      {load
        ? ""
        : stateData.map((item, index) => {
            var itemData = "-";
            if (item.data !== undefined) {
              itemData = item.data;
            }
            return (
              <div className="card" key={index}>
                <div className="content">
                  <div className="icon">
                    <i className={item.icon} style={{ color: "#edf0f5" }}></i>
                  </div>
                  <div className="count">
                    <p>{item.status}</p>
                    <h1>{itemData}</h1>
                    <br />
                  </div>
                </div>
                <div className="change">
                  <div className="increase">
                    <i
                      className={
                        item.status !== "Recovered"
                          ? item.increase > 0
                            ? "bi bi-arrow-up red"
                            : "bi bi-arrow-down green"
                          : item.increase > 0
                          ? "bi bi-arrow-up green"
                          : "bi bi-arrow-down red"
                      }
                    ></i>
                    <p>{itemData === "-" ? "-" : Math.abs(item.increase)}</p>
                  </div>

                  <p>{latestDate}</p>
                  <div className="noChart">
                    <Line
                      data={(canvas) => {
                        const ctx = canvas.getContext("2d");
                        const gradient = ctx.createLinearGradient(0, 0, 0, 80);
                        gradient.addColorStop(0, `${item.color + ",1)"}`);
                        gradient.addColorStop(1, `${item.color + ",0)"}`);
                        return {
                          labels: [...chartLabel],
                          datasets: [
                            {
                              data: item.arr,
                              fill: true,
                              backgroundColor: gradient,
                              borderColor: `${item.color + ",0.3)"}`,
                              tension: 0.4,
                              pointRadius: [0, 0, 0, 0, , 0, 5],
                              pointBackgroundColor: "#fff",
                            },
                          ],
                        };
                      }}
                      options={{
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                        // elements: {
                        //   point: {
                        //     radius: 0,
                        //   },
                        // },
                        scales: {
                          x: {
                            display: false,
                            grid: {
                              display: false,
                            },
                            ticks: {
                              display: false,
                            },
                          },
                          y: {
                            display: false,
                            grid: {
                              display: false,
                            },
                            ticks: {
                              display: false,
                            },
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Print;
