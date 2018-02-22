import React, { Component } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Home from "./components/Home";
import history from "./history.js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Auth0Lock from "auth0-lock";
import Landing from "./components/Landing";

const lock = new Auth0Lock(
  "53iFqYpDLAFAoYE413j848KsIV2KcvQS",
  "floatfile.auth0.com"
)

class App extends Component {

  state = {
    isAuthenticated: false
  };

  componentWillMount() {
    const self = this;
    if ( localStorage.getItem("accessToken")){
      this.setState({
        isAuthenticated: true
      })
    }
    lock.on("authenticated", function (authResult) {
      console.log("authenticated");
      localStorage.setItem("accessToken", authResult.accessToken);
      self.setState({
        isAuthenticated: true
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.isAuthenticated ?
          [
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
          ]
      }
      </div>
      );
    }
  }
  
export default App;