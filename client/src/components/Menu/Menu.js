import React from "react";
import "./Menu.css";

class Menu extends React.Component {

    closeMenu() {
        window.onclick = function (event) {
            if (!event.target.matches('.navbar-brand')) {

                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
    }

    myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    render() {
        return (
            <span>
                {this.closeMenu()}
                <button onClick={() => this.myFunction()} className="navbar-brand">
                    <span className="glyphicon glyphicon-menu-hamburger"></span>
                </button>
                <div id="myDropdown" className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </span>
        );
    }
}

export default Menu;

