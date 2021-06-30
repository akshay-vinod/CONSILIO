import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Print.css";
// const request = require("request");
// const csv = require("csvtojson");

const Print = ({
  load,
  selectedS,
  selectedD,
  selectedSN,
  Sdate,
  SdateData,
}) => {
  const [stateData, setStateData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      var stateCode = selectedS.toUpperCase();
      const response = await axios.get(
        `https://api.covid19india.org/v4/min/timeseries-${stateCode}.min.json`
      );
      var fullData = response.data[stateCode];
      var stateDateList = [];
      var stateDateData = [];
      if (selectedD === "Select District") {
        var objState = fullData.dates;
        console.log(objState);
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
        var latestStateDate = Object.keys(objState)[lengthState - 1];
        var arrState = [
          {
            status: "Confirmed",
            data: objState[latestStateDate].delta.confirmed,
          },

          {
            status: "Recovered",
            data: objState[latestStateDate].delta.recovered,
          },
          {
            status: "Deceased",
            data: objState[latestStateDate].delta.deceased,
          },
        ];
        setStateData([...arrState]);
        setLoading(false);
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
        var latestDistrictDate = Object.keys(objDistrict)[lengthDistrict - 1];
        var arrDistrict = [
          {
            status: "Confirmed",
            data: objDistrict[latestDistrictDate].delta.confirmed,
          },

          {
            status: "Recovered",
            data: objDistrict[latestDistrictDate].delta.recovered,
          },
          {
            status: "Deceased",
            data: objDistrict[latestDistrictDate].delta.deceased,
          },
        ];
        setStateData([...arrDistrict]);
        setLoading(false);
      }
    };
    fetchItems();
  }, [selectedS, selectedD]);
  return (
    <div className="cards">
      {loading || load
        ? "</>"
        : stateData.map((item, index) => {
            var itemData = "-";
            if (item.data !== undefined) {
              itemData = item.data;
            }
            return (
              <div className="card" key={index}>
                <h4>{item.status}</h4>
                <p>{itemData}</p>
              </div>
            );
          })}
    </div>
  );
};

export default Print;
