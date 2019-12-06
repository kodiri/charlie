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
    let thisDate = today.getDate();
    

    let matchDates = matches.filter(a => {
        let apiMonth = new Date(a.utcDate).getMonth();
        let apiDate = new Date(a.utcDate).getDate();
        return apiMonth === thisMonth && apiDate === 26
    });
    console.log(thisDate);

    return (
        <div>
            Hello
        </div>
    )


    //   if(matches) {
    //       return matches.map(a => <h1>{a.id}</h1>)
    //   } else {
    //       return <h1>Nothing</h1>
    //   }

    // return (
    //     <div>
    //         <h1>Matches</h1>
    //         {
    //             matches.map(a => <h1>{a.id}</h1>)
    //         }
    //     </div>
    // )

}