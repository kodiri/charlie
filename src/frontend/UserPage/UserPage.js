import React from 'react';
import PremTable from '../PremTable/PremTable';
import MenuBar from '../components/BurgerMenu/BurgerMenu';
import CLTable from "../clTable/clTable";


export default function UserPage() {

    return (
        <>
            <MenuBar />
            <h1>Welcome User</h1>
            <CLTable />
            <PremTable />
        </>
    )
}

