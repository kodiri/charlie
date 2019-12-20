import React from 'react';
import Tab from '../Tabs/TabsTest';
import getData from '../Data';

export default function UserPage({ team }) {

    let name = localStorage.getItem('name');
    let selectedteam = localStorage.getItem('team');
    let logo = getData().filter(a => a.name === selectedteam).map(b => b.logo);

    return (
        <>
            <div className='userPage'>
                <div className='logo'>
                    <img className='team-logos' src={logo} alt='manu' />
                    <h1>Welcome {name}</h1>
                </div>
                <div className='team'></div>
                <div>
                    <Tab />
                </div>
            </div>
        </>
    )
}

