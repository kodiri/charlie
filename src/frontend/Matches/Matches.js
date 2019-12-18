import React, { useState, useEffect } from 'react';
import './Matches.css';
import getData from '../Data';
import Loading from '../Loading/Loading';

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
        setSelectedId(id);
        const homeRank = getData().filter(a => a.name === home).map(a => a.rating);
        const awayRank = getData().filter(a => a.name === away).map(a => a.rating);
        let ranksDiff = homeRank.concat(awayRank).sort().reverse().reduce((a, b) => a - b);

        if (homeRank > awayRank && ranksDiff <= 2) {
            let tightGame = `${home} ${Math.ceil(Math.random() * 4)} - ${Math.ceil(Math.random() * 3)} ${away}`;
            setPredictions(tightGame);
        } else if (homeRank < awayRank && ranksDiff <= 2) {
            let tightGame = `${home} ${Math.ceil(Math.random() * 3)} - ${Math.ceil(Math.random() * 4)} ${away}`;
            setPredictions(tightGame);
        } else if (homeRank > awayRank && ranksDiff >= 3) {
            let tightGame = `${home} ${Math.ceil(Math.random() * 3)} - ${Math.ceil(Math.random() * 2)} ${away}`;
            setPredictions(tightGame);
        } else if (homeRank < awayRank && ranksDiff >= 3) {
            let tightGame = `${home} ${Math.ceil(Math.random() * 2)} - ${Math.ceil(Math.random() * 3)} ${away}`;
            setPredictions(tightGame);
        }
    }

    if (matches < 1) {
        return <Loading />
    } else {
        return (
            <div className='match-parent-div'>
                {
                    matchInfo.map(match => {
                        let home = match.homeTeam.name.replace(/ FC /g, '').trim();
                        let away = match.awayTeam.name.replace(/ FC /g, '').trim();
                        let matchDate = match.utcDate.slice(0, 10);
                        let idForKey = match.id;
                        return match.status === 'SCHEDULED' ?
                            <div className='scores' key={idForKey}>
                                <span className='match'>{home}</span> <span className='match-center'>vs </span>
                                <span className='match'>{away}</span> <div>{matchDate}</div>
                                <div className='pred-button'><button onClick={() => matchPredictions(home, away, match.id)}>Match Prediction</button></div> <p>{selectedId === match.id ? predictions : ''}</p> </div> :
                            <div className='scores' key={idForKey}><span className='match'>{home}</span> {match.score.fullTime.homeTeam}-{match.score.fullTime.awayTeam} <span className='match'>{away}</span>
                                <div>{matchDate}</div> </div>
                    })}
            </div>
        )
    }
}