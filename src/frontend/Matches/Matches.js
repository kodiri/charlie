import React, { useState, useEffect } from 'react';
import './Matches.css';
// import getData from '../Data';

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
    let last7Days = today.getDate() - 14;
    let next7Days = today.getDate() + 14;

    let matchInfo = matches.filter(a => {
        let apiMonth = new Date(a.utcDate).getMonth();
        let apiDate = new Date(a.utcDate).getDate();
        let teamAway = a.awayTeam.id;
        let teamHome = a.homeTeam.id;
        return apiMonth === thisMonth && apiDate < next7Days && apiDate > last7Days &&
            (teamAway === Number(teamid) || teamHome === Number(teamid))
    });

    function matchPredictions(home, away) {
        let homeTeam = home;
        let awayTeam = away;
        console.log(homeTeam, awayTeam);
    }

    return (
        <div className=''>
            {
                matchInfo.map(match => {
                    let home = match.homeTeam.name;
                    let away = match.awayTeam.name;
                    let matchDate = match.utcDate.slice(0, 10);
                    return match.status === 'SCHEDULED' ?
                <div className='scores' key={match.id}> 
                    <span className='match'>{home}</span> <span className='match-center'>vs </span> 
                        <span className='match'>{away}</span> <div>{matchDate}</div> 
                            <div><button onClick={() => matchPredictions(home, away)}>Match Prediction</button></div> </div> :
                <div className='scores' key={match.id}><span className='match'>{home}</span> {match.score.fullTime.homeTeam} - 
                    {match.score.fullTime.awayTeam} <span className='match'>{away}</span> 
                        <div>{matchDate}</div> </div>
                    })}
        </div>
    )
}