import React from "react";
import "./NavBar.css";
import Search from "../Search";
import { Link } from "react-router-dom";
import Menu from "../Menu";

class NavBar extends React.Component {
    render(props) {
        return (
            <nav className="navbar navbar-default">
                <Menu/>
                <Search/>
                <span className="location">{this.props.location}</span>

                <span className="navbar-brand navbar-right">
                    <Link to='/profile'>
                        <span className="glyphicon glyphicon-user"></span>
                    </Link>
                </span>

            </nav>
        );
    }

}

export default NavBar;