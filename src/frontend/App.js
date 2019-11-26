import React, { useState } from 'react';
import Data from '../frontend/Data.js'
import '../frontend/App.css';

function App() {
  return (
    <div className="App">
      <h1>Leagues</h1>
      {
        Data().map(leagues => leagues.competitions.map(entry => <p>{entry.name}</p>) )
      }      

    </div>
  );
}

export default App;
