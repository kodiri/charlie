import React, { useState, useEffect } from 'react';
//import Data from '../frontend/Data.js'
import '../frontend/App.css';
import Axios from 'axios';

function App() {

  const [ info, setInfo ] = useState([]);
  const [ isLoaded, setisLoaded ] = useState(false);

  useEffect(() => {
    Axios.get('http://api.football-data.org/v2/competitions/2001/teams', {
        headers: {'X-Auth-Token': '0154c5dc13514833a457779bbaafdd13', 'Content-Type': 'application/json'},
      })
      .then(data=> setInfo(data))
  }, []);

  return (
    <div className="App">
      <h1>Info</h1>
      {
        info ? <h2>Data has loaded</h2> : <h3>It is not working</h3>
      }
      {/* {
        Data().map(leagues => leagues.competitions.map(entry => <p>{entry.name}</p>) )
      }       */}

    </div>
  );
}

export default App;
