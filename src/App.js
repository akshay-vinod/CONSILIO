import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import District from "./components/District";
import Print from "./components/Print";
import Chart from "./components/LineChart";
import axios from "axios";
function App() {
  const [statesData, setStatesData] = useState({});
  const [fullStateData, setFullStateData] = useState({});
  const [districtData, setDistrictData] = useState({});
  const [selectedState, setSelectedState] = useState("KL");
  const [selectedDistrict, setSelectedDistrict] = useState("Select District");
  const [stateDateList, setStateDateList] = useState([]);
  const [stateDateData, setStateDateData] = useState([]);
  const [display, setDisplay] = useState("Kerala");
  const [loading, setLoading] = useState(true);
  const [apiLoading, setApiLoading] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      setApiLoading(true);
      const responseApi1 = await axios.get(
        "https://api.covid19india.org/state_district_wise.json"
      );
      await setStatesData(responseApi1.data);
      setApiLoading(false);
    };
    fetchItems();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const responseApi2 = await axios.get(
        `https://api.covid19india.org/v4/min/timeseries-${selectedState}.min.json`
      );
      const districtList = await responseApi2.data[selectedState].districts;
      // console.log(responseApi2.data.selectedState);
      await setDistrictData(districtList);
      await setFullStateData(responseApi2.data[selectedState]);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    fetchItems();
  }, [selectedState]);
  return (
    <div className="App">
      <Nav />
      <div className="overview">
        <District
          sList={statesData}
          dList={districtData}
          load={loading}
          loadApi={apiLoading}
          setStateQuery={(q) => setSelectedState(q)}
          setDistrictQuery={(d) => setSelectedDistrict(d)}
          setChartDisplay={(data) => setDisplay(data)}
        />
        {!loading ? (
          <>
            <Print
              load={loading}
              selectedS={selectedState}
              selectedD={selectedDistrict}
              fullSData={fullStateData}
              chartLabel={stateDateList}
              chartData={stateDateData}
              Sdate={(d) => setStateDateList(d)}
              SdateData={(data) => setStateDateData(data)}
              // districtD={(dd) => setDistrictData(dd)}
            />
            <Chart
              dData={districtData}
              stateD={stateDateList}
              stateDateD={stateDateData}
              title={display}
            />
          </>
        ) : (
          <div className="bars-1"></div>
        )}
      </div>
    </div>
  );
}

export default App;
