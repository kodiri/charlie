import React, { useState, useEffect } from 'react';
import './PremTable.css';
import Loading from '../Loading/Loading';

export default function PremTable() {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch('/rest/standingsPrem')
      .then(response => response.json())
      .then(tables => {
        setInfo(tables.standings[0].table)
      })
  }, []);

  if (info.length < 1) {
    return <Loading />
  }
  else {
    return (
      <>
        <div className='table'>
          <div className='header'>Premier League 2019/20</div>
          <div className='table-Container'>
            <div className='list-team'> # Teams</div>

            <div className='list'>W</div>
            <div className='list'>D</div>
            <div className='list'>L</div>
            <div className='list'>G/D</div>
            <div className='list'>Pts</div>
          </div>
          {
            info.map((team, i) => <div key={i} className='lines'>
              {team.position} <div className='names'> {team.team.name === 'Wolverhampton Wanderers FC' ? 'Wolves' : team.team.name.replace(/FC/g, '')}</div>
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
}
