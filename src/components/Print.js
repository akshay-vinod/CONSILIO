import React, { useState, useEffect } from "react";
import "./Print.css";
// const request = require("request");
// const csv = require("csvtojson");

const Print = ({ fullSData, load, selectedS, selectedD, Sdate, SdateData }) => {
  const [stateData, setStateData] = useState([]);
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
      }
      var arrState = [
        {
          status: "Confirmed",
          data: stateDateData[6].confirmed,
          increase: stateDateData[6].confirmed - stateDateData[5].confirmed,
          icon: "fas fa-hospital-user",
        },

        {
          status: "Recovered",
          data: stateDateData[6].recovered,
          increase: stateDateData[6].recovered - stateDateData[5].recovered,
          icon: "bi bi-heart-fill",
        },
        {
          status: "Deceased",
          data: stateDateData[6].deceased,
          increase: stateDateData[6].deceased - stateDateData[5].deceased,
          icon: "bi bi-x-octagon-fill",
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
                <div className="icon">
                  <i className={item.icon} style={{ color: "#ffff" }}></i>
                </div>
                <div>
                  <h4>{item.status}</h4>
                  <p>{itemData}</p>
                  <br />
                  <p>{itemData === "-" ? "-" : item.increase}</p>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Print;
