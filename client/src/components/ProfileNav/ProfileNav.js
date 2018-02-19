import React from "react";
import "./ProfileNav.css";

class ProfileNav extends React.Component {
    render() {
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