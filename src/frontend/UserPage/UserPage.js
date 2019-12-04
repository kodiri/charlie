import React from 'react';
import PremTable from '../PremTable/PremTable'
import Matches from '../Matches/Matches';
import MenuBar from '../components/BurgerMenu/BurgerMenu';

export default function UserPage() {

    return (
        <>
            <MenuBar />
            <h1>Welcome User</h1>
            {/* <PremTable /> */}
            <Matches />
        </>
    )
}

