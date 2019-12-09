import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './PremTable.css'

export default function PremTable() {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    Axios.get('http://api.football-data.org/v2/competitions/2021/standings', {
      headers: { 'X-Auth-Token': '0154c5dc13514833a457779bbaafdd13', 'Content-Type': 'application/json' },
    })
      .then(data => setInfo(data.data.standings[0].table));
  }, []);
  
  return (
    <>
      <div className='table'>
        <div className='item teams'>
          <h3>Teams</h3>
          {
            info.map(team => <p>{team.position}. {team.team.name}</p>)
          }
        </div>
        <div className='item wins'>
          <h3>Wins</h3>
          {
            info.map(wins => <p>{wins.won}</p>)
          }
        </div>
        <div className='item draws'>
          <h3>Draws</h3>
          {
            info.map(draws => <p>{draws.draw}</p>)
          }
        </div>
        <div className='item loses'>
          <h3>Loses</h3>
          {
            info.map(loses => <p>{loses.lost}</p>)
          }
        </div>
        <div className='item goal'>
          <h3>Goal Difference</h3>
          {
            info.map(gd => <p>{gd.goalDifference}</p>)
          }
        </div>
        <div className='item points'>
          <h3>Points</h3>
          {
            info.map(entry => <p>{entry.points}</p>)
          }
        </div>
      </div>

    </>
  )
}
