import React from "react";
import "./DrawerToggleButton.css";
import Icon from '../../Images/burgericon.png'

const drawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click} >
        <img src={Icon} alt='button'></img>
    </button>

);

export default drawerToggleButton 
