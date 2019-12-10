import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import MenuBar from '../components/BurgerMenu/BurgerMenu';
import Tab from '../Tabs/TabsTest';

export default function UserPage({ name, team }) {

    return (
        <>
            {/* <MenuBar /> */}
            <div className='userPage'>
                <div className='logo'>
                    <h1>Welcome {name}</h1>
                </div>
                <div className='team'>{team}</div>
                <div>
                    <Tab team={team} />
                </div>
            </div>
        </>
    )
}

