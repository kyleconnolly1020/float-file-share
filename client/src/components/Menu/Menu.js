import React from "react";
import "./Menu.css";

class Menu extends React.Component {
    render() {
        return (
            <a className="navbar-brand">
                <span className="glyphicon glyphicon-menu-hamburger"></span>
            </a>
        );
    }
}

export default Menu;