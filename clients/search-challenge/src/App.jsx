import React from 'react';
import './App.css';

function App() {
  const imgURL = 'http://localhost:8080/assets/logos/360px-Gap_1972.png';
  return (
    <div className="App">
      <header className="App-header">
        <img src={imgURL} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
