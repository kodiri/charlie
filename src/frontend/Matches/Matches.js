import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Matches() {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        Axios.get('http://api.football-data.org/v2/competitions/2021/matches', {
            headers: { 'X-Auth-Token': '0154c5dc13514833a457779bbaafdd13', 'Content-Type': 'application/json' },
        })
            .then(data => setMatches(data.data.matches));
    }, []);

    let today = new Date();
    let thisMonth = today.getMonth();
    //let thisDate = today.getDate();
    let last7Days = today.getDate() - 6;
    let next7Days = today.getDate() + 6;


    let matchDates = matches.filter(a => {
        let apiMonth = new Date(a.utcDate).getMonth();
        let apiDate = new Date(a.utcDate).getDate();
        let teamAway = a.awayTeam.name;
        let teamHome = a.homeTeam.name;
        return apiMonth === thisMonth && apiDate < next7Days && apiDate > last7Days && (teamAway === 'Arsenal FC' || teamHome === 'Arsenal FC')
    });
    console.log(matchDates);
    // debugger;
    return (
        <div className='matches'>{
            matchDates.map(match => (
                match.status === 'SCHEDULED' ?
                <div key={match.id}>{match.awayTeam.name} 0 - 0 {match.homeTeam.name}</div> :
                <div>{match.awayTeam.name} {match.score.fullTime.awayTeam} - {match.score.fullTime.homeTeam} {match.homeTeam.name}</div>
           ))
        }</div>
    )
}