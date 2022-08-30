import { useEffect, useState, useRef } from "react";
import "./App.css";
import * as tt from "@tomtom-international/web-sdk-maps";

function App() {
  const mapElement = useRef();
  const [map, setMap] = useState({});
const longitude =4.135592629235007, -74.7249514586466
const latitude = 
  useEffect(() => {
    let map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_API_KEY,
      container: mapElement.current,
      center : [longitude, latitude],
      zoom: 14
    });
    setMap(map);
  }, []);

  return (
    <>
      <div className="app">
        <div ref={mapElement} className="map"></div>
      </div>
    </>
  );
}

export default App;



