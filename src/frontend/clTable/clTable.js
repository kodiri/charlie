import React, { useEffect, useState } from "react";
import './clTable.css';


export default function CLTable() {

  const [info, setInfo] = useState([])

  useEffect(() => {
    fetch('/rest/standingsCL')
      .then(response => response.json())
      .then(tables => setInfo(tables.standings
          .filter(standing => standing.type === 'TOTAL')
          .map(standing => standing.table)
      ))
  }, []);

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
      </div>
    )
  }




}





