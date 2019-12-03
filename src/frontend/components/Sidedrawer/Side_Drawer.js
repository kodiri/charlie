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