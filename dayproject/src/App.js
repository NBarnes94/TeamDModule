import React from 'react';
import './App.css';



//import LatLon from './location/LatLon';
import WeatherResults from './Weather/Weather'
import LatLon from './location/LatLon'

import FetchNasa from './Nasa/Nasa';

function App() {
  return (
    <div className="location">
    
    <WeatherResults />
      <LatLon />
      {/* <FetchNasa /> */}
    </div>
  );
}

export default App;