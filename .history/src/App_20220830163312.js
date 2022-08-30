import { useEffect, useState, useRef } from "react";
import "./App.css";
import * as tt from "@tomtom-international/web-sdk-maps";

function App() {
  const mapElement = useRef();
  const [map, setMap] = useState({});
  const [longitude, setLongitude] = useState(-74.7249514586466);
  const [latitude, setLatitude] = useState(4.135592629235007);

  useEffect(() => {
    let map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_API_KEY,
      container: mapElement.current,
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
      center: [longitude, latitude],
      zoom: 14,
    });
    setMap(map);
  }, []);

  return (
    <>
      <div className="app">
        <div ref={mapElement} className="map" />
        <div className="search=-bar">
          <h1>Where to?</h1>
          ino
        </div>
      </div>
    </>
  );
}

export default App;
