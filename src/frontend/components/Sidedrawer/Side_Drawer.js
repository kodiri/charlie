import React from "react"
import "./Side_Drawer.css";

const sideDrawer = props => {
    let drawerClasses = "side-drawer";
    if (props.show) {
        drawerClasses = "side-drawer open";
    }

    return (
    <nav className={drawerClasses}>
        <ul>
            <li>
                <a href="/">Premier League Table</a>
            </li>
            <li>
                <a href="/">Matches</a>
            </li>
            <li>
                <a href="/">Champions League</a>
            </li>
            <li>
                <a href="/">About us</a>
            </li>
            <li>
                <a href="/">News and Updates</a>
            </li>
        </ul>
    </nav>
    );
};

export default sideDrawer 