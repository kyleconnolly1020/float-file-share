import React from "react";
import "./NavBar.css";
import Search from "../Search";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <Search
                    searchUsersUpdate = {this.props.searchUsersUpdate}
                />
                <span className="location">{this.props.location}</span>

                <span className="navbar-brand navbar-right">
                    <Link to={this.props.onProfilePage ? '/' : '/profile'}>
                        {this.props.onProfilePage 
                        ? <span className="glyphicon glyphicon-home"></span> 
                        : <span className="glyphicon glyphicon-user"></span>}
                    </Link>
                </span>

            </nav>
        );
    }

}

export default NavBar;