import './App.css';
import LatLon from './location/LatLon'
import FetchNasa from './Nasa/Nasa';

function App() {
  return (
    <div className="location">
      <LatLon />
      <FetchNasa />
    </div>
  );
}

export default App;
