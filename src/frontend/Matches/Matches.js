import React, { useState, useEffect } from 'react';

export default function Matches() {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        fetch('/matches')
            .then(matches => setMatches(matches))
            console.log(matches);
    }, []);

    if(matches) {
        return <h1>{matches.competitions}</h1>
    } else {
        return <div>Nothing</div>
    }

    // return (
    //     <>
    //         {/* {
    //             matches.map(match => <h1>{match}</h1>)
    //         } */}
    //     </>
    // )
}