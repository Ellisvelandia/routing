import { useEffect, useState, useRef } from "react";
import "./App.css";
import * as tt from "@tomtom-international/web-sdk-maps";

function App() {
  const mapElement = useRef();
  const [<map name=""></map>, setMap] = useState({});

  useEffect(() => {
    let <map name=""></map> = tt.<map name=""></map>({
      key: process.env.REACT_APP_TOM_TOM_API_KEY,
      container: mapElement,
    });
    setMap(<map name=""></map>);
  }, []);

  return (
    <>
      <div className="App">
        <div ref={mapElement}></div>
      </div>
    </>
  );
}

export default App;
