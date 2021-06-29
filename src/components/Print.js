import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Print.css";
// const request = require("request");
// const csv = require("csvtojson");

const Print = ({ sList, load, selectedS, selectedD, selectedSN }) => {
  const [stateData, setStateData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedD === "Select District") {
      const fetchItems = async () => {
        const response = await axios.get(
          "https://api.covid19india.org/states_daily.json"
        );

        var len = response.data.states_daily.length;
        var arr = [];
        for (var i = 3; i >= 1; i--) {
          var obj = {
            status: response.data.states_daily[len - i].status,
            data: response.data.states_daily[len - i][selectedS],
          };
          arr.push(obj);
        }
        setStateData([...arr]);
        setLoading(false);
      };
      fetchItems();
    } else {
      const fetchItems = async () => {
        var stateCode = selectedS.toUpperCase();
        const response = await axios.get(
          `https://api.covid19india.org/v4/min/timeseries-${stateCode}.min.json`
        );
        var obj = response.data[stateCode].districts[selectedD].dates;
        console.log(obj);
        var length = Object.keys(obj).length;
        var latestDate = Object.keys(obj)[length - 1];
        var arr = [
          {
            status: "Confirmed",
            data: obj[latestDate].delta.confirmed,
          },

          {
            status: "Recovered",
            data: obj[latestDate].delta.recovered,
          },
          {
            status: "Deceased",
            data: obj[latestDate].delta.deceased,
          },
        ];
        setStateData([...arr]);
      };
      fetchItems();
    }
  }, [selectedS, selectedD, load, sList, selectedSN]);
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
