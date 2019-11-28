import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function GetData() {

    const [ info, setInfo ] = useState([]);

    useEffect(() => {
        Axios.get('http://api.football-data.org/v2/competitions/2001/teams', {
            headers: {'X-Auth-Token': '0154c5dc13514833a457779bbaafdd13', 'Content-Type': 'application/json'},
          })
          .then(data=> setInfo(data))
      }, []);

      return (
          <>
            <h3>This is where the data is fetched</h3>
          </>
      )
}
