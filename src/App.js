import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import District from "./components/District";
import Print from "./components/Print";

import axios from "axios";
function App() {
  const [statesData, setStatesData] = useState({});
  const [selectedState, setSelectedState] = useState("kl");
  const [selectedStateName, setSelectedStateName] = useState("Kerala");
  const [selectedDistrict, setSelectedDistrict] = useState("Select District");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get(
        "https://api.covid19india.org/state_district_wise.json"
      );
      await setStatesData(response.data);
      setLoading(false);
    };
    fetchItems();
  }, [selectedState]);
  return (
    <div className="App">
      <Nav />
      <District
        sList={statesData}
        load={loading}
        setStateQuery={(q) => setSelectedState(q)}
        setDistrictQuery={(d) => setSelectedDistrict(d)}
        setStateNameQuery={(n) => setSelectedStateName(n)}
      />
      <Print
        load={loading}
        sList={statesData}
        selectedS={selectedState}
        selectedSN={selectedStateName}
        selectedD={selectedDistrict}
      />
    </div>
  );
}

export default App;
