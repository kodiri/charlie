import React, { useState, useEffect } from 'react';
import './Matches.css';
import getData from '../Data';

export default function Matches() {
    const [matches, setMatches] = useState([]);
    let team = localStorage.getItem('team')

    useEffect(() => {
        fetch('/rest/competitions')
            .then(response => response.json())
            .then(matches => {
                setMatches(matches.matches)
            })
    }, []);

    const teamid = getData().filter(a => a.name === team).map(a => a.id);

    let today = new Date();
    let thisMonth = today.getMonth();
    let last7Days = today.getDate() - 7;
    let next7Days = today.getDate() + 14;

    let matchDates = matches.filter(a => {
        let apiMonth = new Date(a.utcDate).getMonth();
        let apiDate = new Date(a.utcDate).getDate();
        let teamAway = a.awayTeam.id;
        let teamHome = a.homeTeam.id;
        return apiMonth === thisMonth && apiDate < next7Days && apiDate > last7Days && 
                            (teamAway ===  Number(teamid) || teamHome === Number(teamid))
    });
    console.log(matchDates);

    return (
<div className=''>
        {
            matchDates.map(match => (
                match.status === 'SCHEDULED' ?
                <div className='match' key={match.id}>{match.awayTeam.name} vs {match.homeTeam.name} <div><button>Match Prediction</button></div> </div> :
                <div className='match' key={match.id}>{match.awayTeam.name} {match.score.fullTime.awayTeam} - {match.score.fullTime.homeTeam} {match.homeTeam.name} </div>
            ))}
        </div>
    )
}