import React, { useState, useEffect } from 'react';
import './PremTable.css'

export default function PremTable() {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch('/rest/standingsPrem')
      .then(response => response.json())
      .then(tables => {
        setInfo(tables.standings[0].table)
      })
  }, []);

  return (
    <>
      <div className='table'>
        <div className='table-Container'>
          <div className='list-team'>Teams</div>

          <div className='list'>Wins</div>
          <div className='list'>Draws</div>
          <div className='list'>Loses</div>
          <div className='list'>G/D</div>
          <div className='list'>Pts</div>
        </div>
        {
          info.map((team, i) => <div key={i} className='lines'>
            <div className='names'>{team.position}. {team.team.name === 'Wolverhampton Wanderers FC' ? 'Wolves' : team.team.name.replace(/FC/g, '')}</div>
            <div className='prem-points'>
              <div className='scores-item'>{team.won}</div>
              <div className='scores-item'>{team.draw}</div>
              <div className='scores-item'>{team.lost}</div>
              <div className='scores-item'>{team.goalDifference} </div>
              <div className='scores-item points'>{team.points}</div>
            </div>
          </div>
          )
        }
      </div>
    </>
  )
}
