import React, { useState, useEffect } from 'react';
import './Matches.css';
import getData from '../Data';

export default function Matches({team}) {
    const [matches, setMatches] = useState([]);
    console.log(team.id);
    //const [team, setTeam] = ('');

    useEffect(() => {
        fetch('/rest/competitions')
            .then(response => response.json())
            .then(matches => {
                setMatches(matches.matches)
            })
    }, []);

    let today = new Date();
    let thisMonth = today.getMonth();
    let last7Days = today.getDate() - 7;
    let next7Days = today.getDate() + 14;

    let matchDates = matches.filter(a => {
        let apiMonth = new Date(a.utcDate).getMonth();
        let apiDate = new Date(a.utcDate).getDate();
        let teamAway = a.awayTeam.name;
        let teamHome = a.homeTeam.name;
        return apiMonth === thisMonth && apiDate < next7Days && apiDate > last7Days && (teamAway === 'Manchester United FC' || teamHome === 'Manchester United FC')
    });

    //let myTeam = getData.filter(a => a.id === a.awayTeam);
    //console.log(getData().map(a => a.id));

    //console.log(matchDates);
    return (
        <div className=''>{
            matchDates.map(match => (
                match.status === 'SCHEDULED' ?
                <div className='match' key={match.id}>{match.awayTeam.name} -- {match.homeTeam.name} <div><button>Match Prediction</button></div> </div> :
                <div className='match' key={match.id}>{match.awayTeam.name} {match.score.fullTime.awayTeam} - {match.score.fullTime.homeTeam} {match.homeTeam.name} </div>
           ))
        }</div>
    )
}