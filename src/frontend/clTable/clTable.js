import React, { useEffect, useState } from "react";
import Axios from "axios"
import './clTable.css';


export default function CLTable() {

  const [info, setInfo] = useState([])

  useEffect(() => {
    Axios.get('http://api.football-data.org/v2/competitions/2001/standings', {
      headers: { 'X-Auth-Token': '0154c5dc13514833a457779bbaafdd13', 'Content-Type': 'application/json' },
    })
      .then(data => setInfo(data.data.standings
        .filter(standing => standing.type === 'TOTAL')
        .map(standing => standing.table)
      ))
  }, []);

  // let position = info.map(pos => pos.map(a => a.position));
  // let pos = position.join(',').split(',');
  // let teams = info.map(array => array.map(a => a.team.name.replace(/"/g,'')));
  // let team = teams.join(',').split(',');
  // let a = [pos, team].reduce((a, b) => a.map((v, i) => v + b[i]));

  if (info.length > 0) {
    console.log('hello', info);
  }

  if (info.length < 1) {
    return <div>Table</div>
  } else {
    return (
      <div className="Cltable">
        <div className='Cl-Container' >
          <div id='scroller'>
            <div className="Cl-item">

              {
                info.map((layer1, i) => <div className='content'>
                  <flex>
                    <h5>Teams</h5>
                    <h5>Plyd</h5>
                    <h5>Won</h5>
                    <h5>Drawn</h5>
                    <h5>Lost</h5>
                    <h5>For</h5>
                    <h5>Against</h5>
                    <h5>GD</h5>
                    <h5>Points</h5>
                  </flex>
                  {layer1.map(group => <p> {group.team.name}
                    {group.playedGames} - {group.won} - {group.draw} - {group.lost} -
                    {group.goalsFor} - {group.goalsAgainst} - {group.goalDifference} -
                    {group.points}</p>)}
                </div>)
              }
            </div>


            {/* <div className="points">
          <h3>Points</h3>
        </div> */}

          </div>
        </div>
      </div>
    )
  }




}





