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

    const addMarker = () => {
      const element = document.createElement("div");
      element.className = "marker";

      const marker = new tt.Marker({
        draggable: true,
        element: element,
      });
     .setLngLat([longitude, latitude])
     .addTo(map)

     marker.on ("dragend", () => {
   const lngLat = marker.setLngLat()
   setLongitude
     })
   
   
    };


    addMarker();

    return () => map.remove();
  }, [longitude, latitude]);

  return (
    <>
    { map && <div className="app">
        <div ref={mapElement} className="map" />
        <div className="search=-bar">
          <h1> Where to ? </h1>
          <input
            type="text"
            id="longitude"
            className="longitude"
            placeholder="Put in Longitude"
            onChange={(e) => {
              setLongitude(e.target.value);
            }}
          />
          <input
            type="text"
            id="latitude"
            className="latitude"
            placeholder="Put in Latitude"
            onChange={(e) => {
              setLatitude(e.target.value);
            }}
          />
        </div>
      </div>}
    </>
  );
}

export default App;
