import React, {useEffect, useState} from "react";
import Axios from "axios"
import './clTable.css';


export default function CLTable() {

    const [info, setInfo] = useState([])
    
    useEffect(() => {
        Axios.get('http://api.football-data.org/v2/competitions/2001/standings', {
        headers: { 'X-Auth-Token': '0154c5dc13514833a457779bbaafdd13', 'Content-Type': 'application/json'},
        })
        .then(data => setInfo(data.data.standings
            .filter(standing => standing.type === 'TOTAL')
            .map(standing => standing.table)
        ))
    }, []);

    let position = info.map(pos => pos.map(a => a.position));
    let pos = position.join(',').split(',');
    let teams = info.map(array => array.map(a => a.team.name.replace(/"/g,'')));
    let team = teams.join(',').split(',');
    let a = [pos, team].reduce((a, b) => a.map((v, i) => v + b[i]));

    console.log(a);

    return (   <>

        </>
    )

}


     
 