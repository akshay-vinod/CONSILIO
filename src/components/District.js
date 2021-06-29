import React, { useState, useEffect } from "react";
import "./District.css";
const District = ({
  sList,
  load,
  setStateQuery,
  setDistrictQuery,
  setStateNameQuery,
}) => {
  const [input, setInput] = useState("Kerala");
  const [district, setDistrict] = useState("Select District");
  useEffect(() => {
    if (!load) {
      var stateCode = sList[input].statecode;
      setStateQuery(stateCode.toLowerCase());
    }
    setStateNameQuery(input);
    setDistrictQuery(district);
  }, [
    input,
    setStateQuery,
    district,
    setDistrictQuery,
    sList,
    load,
    setStateNameQuery,
  ]);

  return (
    <div className="district">
      <div className="overview">
        <h2>Overview</h2>
      </div>
      <div className="selectors">
        <div className="select">
          {load ? (
            ""
          ) : (
            <select
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setDistrict("Select District");
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
              {Object.keys(sList[input].districtData).map((item) => {
                if (item !== "Other State") {
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
