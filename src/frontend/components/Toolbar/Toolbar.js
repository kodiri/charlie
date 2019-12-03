import React from 'react';
import "./toolbar.css";
import DrawerToggleButton from"../Sidedrawer/DrawerToggleButton"

const toolbar = props => (
    <header className="toolbar">
    <nav className="toolbar_navigation">
        <div className="toolbar_toggle-button" >
            <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        <div className="toolbar_navigation-items">
            <ul>
                <li></li>
                <li></li>
            </ul>
        </div>
    </nav>
    </header>
    
)

export default toolbar