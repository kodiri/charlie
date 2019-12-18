import React, { useEffect, useState } from "react";
import './clTable.css';
import Loading from '../Loading/Loading';


export default function CLTable() {

  const [info, setInfo] = useState([])

  let groups = ['A', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  useEffect(() => {
    fetch('/rest/standingsCL')
      .then(response => response.json())
      .then(tables => setInfo(tables.standings
          .filter(standing => standing.type === 'TOTAL')
          .map(standing => standing.table)
      ))
  }, []);

  if (info.length < 1) {
    return <Loading />
  } else {
    return (
      <div className="Cltable">
        <div id='scroller'>
          {
            info.map((layer1, i) =>
              <div key={i} className='content'>
                <div className='uefa-cl-group-year'>UEFA Champions League - Group {groups[i + 1]} 2019/20</div>
                <div className='head'>
                  <div className='table-position-hashtag'>#</div>
                  <div className='Teams'>Team</div>
                  <div className='li'>Pl</div>
                  <div className='li'>W</div>
                  <div className='li'>D</div>
                  <div className='li'>L</div>
                  <div className='li'>F</div>
                  <div className='li'>A</div>
                  <div className='li'>GD</div>
                  <div className='li'>Pts</div>
                </div>
                {layer1.map((group, i) =>
                  <div key={i} className='champions'>
                    <div className='li-position'>{group.position}</div>
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





