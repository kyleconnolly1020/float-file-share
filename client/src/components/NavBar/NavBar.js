import React from "react";
import "./NavBar.css";
import Search from "../Search";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";

class NavBar extends React.Component {
    logout = () => {
        console.log("logout")
        localStorage.clear();
        this.props.lock.logout();
        window.location.reload();
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                {this.props.onProfilePage 
                    ? null 
                    : <Search searchUsersUpdate = {this.props.searchUsersUpdate}/>
                }
                <span className="location hideOnMobile">{this.props.location}</span>

                <span className="icons navbar-brand navbar-right">
                    <Link to={this.props.onProfilePage ? '/' : '/profile'}>
                        {this.props.onProfilePage 
                        ? <span className="glyphicon glyphicon-home"></span> 
                        : <span className="glyphicon glyphicon-user"></span>}
                    </Link>
                    <Button className="logOutButton" onClick={this.logout}>
                     Log Out
                    </Button>
                </span>

            </nav>
        );
    }

}

export default NavBar;