import React from 'react';
import TrafficLight from './components/TrafficLight';
import './App.css';

function App() {
  return (
    <div className="App">
      <TrafficLight initialValue={0} />
    </div>
  );
}

export default App;
