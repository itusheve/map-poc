import { useState } from 'react'
import CesiumMap from './components/CesiumMap';
import './App.css'

const App: React.FC = () => {
  return (
    <div>
      <h1>Offline Cesium Map</h1>
      <CesiumMap /> {/* Render the Cesium map */}
    </div>
  );
};

export default App
