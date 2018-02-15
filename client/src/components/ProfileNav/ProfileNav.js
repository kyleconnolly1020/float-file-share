import React from "react";
import "./ProfileNav.css";
import { Link } from "react-router-dom";


class ProfileNav extends React.Component {
    render(props) {
        return (
            <nav className="navbar navbar-default">
                <a className="navbar-brand">
                    <span className="glyphicon glyphicon-menu-hamburger"></span>
                </a>
                <span className="location">{this.props.location}</span>

            </nav>
        );
    }

}

export default ProfileNav;