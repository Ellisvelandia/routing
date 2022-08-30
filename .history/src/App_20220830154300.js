import React,{useEffect, useState} from 'react';
import './App.css';
improt * as from 'npm i @tomtom-international/web-sdk-maps'


function App() {

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
