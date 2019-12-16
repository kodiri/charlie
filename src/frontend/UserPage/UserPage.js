import React from 'react';
import MenuBar from '../components/BurgerMenu/BurgerMenu';
import Tab from '../Tabs/TabsTest';

export default function UserPage({ team }) {

    let name = localStorage.getItem('name');

    return (
        <>
            <div className='userPage'>
                <div className='logo'>
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

