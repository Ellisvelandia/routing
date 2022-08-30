import React,{useEffect, useState} from 'react';
import './App.css';
import * as tt from '@tomtom-international/web-sdk-maps'


function App() {
  const mapElement = useRef()
  const [map, setMap] = useState({})

useEffect(() => {
  let map = tt.map({
    key: REACT_APP_TOM_TOM_API_KEY,
    container: mapElement,
  })
  setMap(map)
}, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
