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
        <div id='scroller'>
          {
            info.map((layer1, i) =>
              <div key={i} className='content'>
                <div className='head'>
                  <div className='Teams'>Teams</div>
                  <div className='li'>Plyd</div>
                  <div className='li'>Won</div>
                  <div className='li'>Drawn</div>
                  <div className='li'>Lost</div>
                  <div className='li'>For</div>
                  <div className='li'>AG/ST</div>
                  <div className='li'>GD</div>
                  <div className='li'>Points</div>
                </div>
                {layer1.map((group, i) =>
                  <div key={i} className='champions'>
                    <div className='c-Teams'>{group.team.name}</div>
                    <div className='li'>{group.playedGames}</div>
                    <div className='li'>{group.won}</div>
                    <div className='li'> {group.draw}</div>
                    <div className='li'> {group.lost}</div>
                    <div className='li'> {group.goalsFor}</div>
                    <div className='li'>{group.goalsAgainst}</div>
                    <div className='li'>{group.goalDifference}</div>
                    <div className='li'> {group.points} </div>
                  </div>
                )}
              </div>)
          }
        </div>
        {/* <div className="points">
          <h3>Points</h3>
        </div> */}
      </div>
    )
  }




}





