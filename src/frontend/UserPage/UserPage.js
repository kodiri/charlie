import React from 'react';
import PremTable from '../PremTable/PremTable'
import MenuBar from '../components/BurgerMenu/BurgerMenu';
import UserPageMenu from '../UserPageMenu/UserPageMenu'

export default function UserPage() {

    return (
        <>
            <MenuBar />
            <h1>Welcome User</h1>
            <UserPageMenu />
             <PremTable /> 
        </>
    )
}

