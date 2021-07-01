import React, { useState, useEffect } from "react";
import "./District.css";
const District = ({
  sList,
  dList,
  load,
  loadApi,
  setStateQuery,
  setDistrictQuery,
  setChartDisplay,
}) => {
  const [input, setInput] = useState("Kerala");
  const [district, setDistrict] = useState("Select District");
  const [display, setDisplay] = useState("Kerala");
  useEffect(() => {
    if (!loadApi) {
      var stateCode = sList[input].statecode;
      setStateQuery(stateCode);
    }

    setDistrictQuery(district);
    if (district !== "Select District") setDisplay(district);
    setChartDisplay(display);
  }, [input, setStateQuery, district, setDistrictQuery, loadApi, load]);

  return (
    <div className="district">
      <div className="">
        <h2>Overview : {district === "Select District" ? input : district}</h2>
      </div>
      <div className="selectors">
        <div className="select">
          {loadApi ? (
            ""
          ) : (
            <select
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setDistrict("Select District");
                setDisplay(e.target.value);
              }}
            >
              {Object.keys(sList).map((item) => {
                if (item !== "State Unassigned") {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                } else return "";
              })}
            </select>
          )}
        </div>
        <div className="select">
          {load ? (
            ""
          ) : (
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            >
              <option value="Select District">Select District</option>
              {Object.keys(dList).map((item) => {
                if (item !== "Other State" && item !== "Unknown") {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                } else {
                  return "";
                }
              })}
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

export default District;
