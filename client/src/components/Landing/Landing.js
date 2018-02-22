import React, { Component } from "react";
import Logo from "../Logo";
import "./Landing.css";
import { Button } from "react-bootstrap";

class Landing extends Component {
  showLock = () => {
    // Show the Auth0Lock widget
    this.props.lock.show();
  };

  showLockSignUp = () => {
    // Show the Auth0Lock widget
    this.props.lock.show({ initialScreen: "signUp" });
  };

  render() {
    return (
      <div>
        <Logo />
        <div className="landingButtonContainer">
          <Button className="signInButton" onClick={this.showLock}>
            Sign In
          </Button>
          <Button className="signUpButton" onClick={this.showLockSignUp}>
            Sign Up
          </Button>
        </div>
      </div>
    );
  }
}

export default Landing;
