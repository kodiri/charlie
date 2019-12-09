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
      <div className="table">
        <div className="item teams">

          {
            info.map((layer1, i) => <div>
              <h3>Teams</h3>
              <p>{layer1.map(group => <p>{group.team.name}</p>)}
              </p>
            </div>)
          }
        </div>

        <div className="item playedGames">
          {
            info.map((layer1, i) => <div>
              <h3>Played Games</h3>
              <p>{layer1.map(group => <p>{group.playedGames}</p>)}
              </p>
              </div>) 
          }
         
        </div>

        <div className="item won">
        {
            info.map((layer1, i) => <div>
              <h3>Won</h3>
              <p>{layer1.map(group => <p>{group.won}</p>)}
              </p>
              </div>) 
          }
      </div>

      <div className="item drawn">
        {
            info.map((layer1, i) => <div>
              <h3>Drawn</h3>
              <p>{layer1.map(group => <p>{group.draw}</p>)}
              </p>
              </div>) 
          }
      </div>

       

        <div className="item lost">
        {
            info.map((layer1, i) => <div>
              <h3>Lost</h3>
              <p>{layer1.map(group => <p>{group.lost}</p>)}
              </p>
              </div>) 
          }
      </div>


        <div className="item lost">
        {
            info.map((layer1, i) => <div>
              <h3>For</h3>
              <p>{layer1.map(group => <p>{group.goalsFor}</p>)}
              </p>
              </div>) 
          }
        </div>

      <div className="item against">
        {
            info.map((layer1, i) => <div>
              <h3>Against</h3>
              <p>{layer1.map(group => <p>{group.goalsAgainst}</p>)}
              </p>
              </div>) 
          }
      </div>


      <div className="goal difference">
        {
            info.map((layer1, i) => <div>
              <h3>GD</h3>
              <p>{layer1.map(group => <p>{group.goalDifference}</p>)}
              </p>
              </div>) 
          }
      </div>

        {/* <div className="points">
          <h3>Points</h3>
        </div> */}

      <div className="goal difference">
        {
            info.map((layer1, i) => <div>
              <h3>Points</h3>
              <p>{layer1.map(group => <p>{group.points}</p>)}
              </p>
              </div>) 
          }
      </div>



      </div>
    )
  }




}





