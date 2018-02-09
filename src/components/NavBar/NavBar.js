import React from "react";
import "./NavBar.css"; 

class NavBar extends React.Component{
    render (props) {
        return(
            <nav className="navbar navbar-default">
                <a class="navbar-brand" href="#">
                    <span class="glyphicon glyphicon-menu-hamburger"></span>
                </a>
                <span className="location">{this.props.location}</span>
                <a class="navbar-brand navbar-right" href="#">
                    <span class="glyphicon glyphicon-user"></span>
                </a>
            </nav>
        );
    }
    
}

export default NavBar;