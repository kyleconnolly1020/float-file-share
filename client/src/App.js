import React, { Component } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Home from "./components/Home";
import history from "./history.js";
import { Router, Switch, Route } from "react-router-dom";
import Auth0Lock from "auth0-lock";
import Landing from "./components/Landing";
import axios from "axios";

const lock = new Auth0Lock(
  "53iFqYpDLAFAoYE413j848KsIV2KcvQS",
  "floatfile.auth0.com"
);

class App extends Component {
  state = {
    isAuthenticated: false,
    justSingedUp: false
  };

  componentWillMount() {
    const self = this;
    if (localStorage.getItem("accessToken")) {
      this.setState({
        isAuthenticated: true
      });
    }

    lock.on("signup submit", function(authResult) {
      localStorage.setItem("justSignedUp", true);
    });

    lock.on("authenticated", function(authResult) {
      localStorage.setItem("accessToken", authResult.accessToken);
      if (localStorage.getItem("justSignedUp")) {
        lock.getUserInfo(authResult.accessToken, function(error, profile) {
          if (error) {
            console.log(error);
            return;
          }
          /*
          NEW USER API CALL HERE
          */
         console.log("made new user");

        });
        localStorage.removeItem("justSignedUp");
        history.push("/profile");
        self.setState({
          isAuthenticated: true
        });
      } else {
        self.setState({
          isAuthenticated: true
        });
      }
    });

    //LOGOUT METHOD FOR REFERENCE
    // lock.logout({ returnTo: '/' });
  }

  render() {
    return (
      <div>
        {this.state.isAuthenticated
          ? [
              <div>
                <Router history={history}>
                  <Switch>
                    <Route
                      exact
                      path="/"
                      render={props => <Home lock={lock} {...props} />}
                    />
                    <Route
                      exact
                      path="/profile"
                      render={props => <Profile lock={lock} {...props} />}
                    />
                  </Switch>
                </Router>
              </div>
            ]
          : [
              <div>
                <Landing lock={lock} />
              </div>
            ]}
      </div>
    );
  }
}

export default App;
