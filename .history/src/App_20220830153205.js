import React from 'react';
import './App.css';


function App() {

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
