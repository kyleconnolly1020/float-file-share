import React, { Component } from 'react';
import "./App.css";
import Profile from "./components/Profile";
import Home from "./components/Home";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";



class App extends Component {
  render() {
    return ( 
    <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/profile' component={Profile}/>
            {/* both /roster and /roster/:number begin with /roster */}
          </Switch>
        </Router>
      </div>
      
    );
  }
}

export default App;
