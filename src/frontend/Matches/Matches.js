import React, { useState, useEffect } from 'react';
import './Matches.css';
 import getData from '../Data';

export default function Matches() {
    const [matches, setMatches] = useState([]);
    const [predictions, setPredictions] = useState([]);
    const [selectedId, setSelectedId] = useState([]);
    let team = localStorage.getItem('team')

    useEffect(() => {
        fetch('/rest/competitions')
            .then(response => response.json())
            .then(matches => {
                setMatches(matches.matches)
            })
    }, []);

    const teamid = getData().filter(a => a.name === team).map(a => a.id);
    //const teamRank = getData().filter(a => a.name === team).map(a => a.rating);

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

    function matchPredictions(home, away, id) {
        let homeTeam = home;
        let awayTeam = away;
        setSelectedId(id);
        let UnrealisticPrediction = `${homeTeam} ${Math.ceil(Math.random() * 10)} - ${Math.ceil(Math.random() * 10)} ${awayTeam}`;
        setPredictions(UnrealisticPrediction);
    }

    return(
        
        <div className='match-parent-div'>
            {
                matchInfo.map(match => {
                    let home = match.homeTeam.name.replace(/FC/g, '').trim();
                    let away = match.awayTeam.name.replace(/FC/g, '').trim();
                    let matchDate = match.utcDate.slice(0, 10);
                    let idForKey = match.id;
                    return match.status === 'SCHEDULED' ?
                <div className='scores' key={idForKey}> 
                    <span className='match'>{home}</span> <span className='match-center'>vs </span> 
                        <span className='match'>{away}</span> <div>{matchDate}</div> 
                            <div><button onClick={() => matchPredictions(home, away, match.id)}>Match Prediction</button></div> <p>{selectedId === match.id ? predictions : ''}</p> </div> :
                <div className='scores' key={idForKey}><span className='match'>{home}</span> {match.score.fullTime.homeTeam} - 
                    {match.score.fullTime.awayTeam} <span className='match'>{away}</span> 
                        <div>{matchDate}</div> </div>
                    })}
        </div>
    )
}