import React, { Component } from 'react';
import UserBanner from "./components/UserBanner";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";
import "./App.css";



class App extends Component {
  render() {
    return ( 
    <div>
      <Logo/>
        <div className="container">
          <div className="appWindow">
            <NavBar
            location="La Jolla, California"
            />
            <UserBanner
            userName="Kyle Connolly"
            radius="1.0 Miles Away"
            facebook="true"
            twitter="true"
            snapchat="true"
            linkedin="true"
            instagram="true"
            pdf="true"
            audiofile="true"
            javascript="true"
            image="https://orig00.deviantart.net/bac7/f/2014/041/9/a/profile_picture_by_i_am_a_random_person-d75xov8.jpg"
            />
            <br/>
            <UserBanner
            userName="John Mai"
            radius="0.5 Miles Away"
            snapchat="true"
            linkedin="true"
            javascript="true"
            />
            <br/>
            <UserBanner
            userName="Ben Harloe"
            radius="1.3 Miles Away"
            facebook="true"
            instagram="true"
            pdf="true"
            />
            <br/>
            <UserBanner
            userName="Kevin Semo"
            radius="0.7 Miles Away"
            facebook="true"
            twitter="true"
            javascript="true"
            />
            <br/>
            <UserBanner
            userName="Clark Phan"
            radius="0.3 Miles Away"
            facebook="true"
            twitter="true"
            snapchat="true"
            audiofile="true"
            javascript="true"
            />
            <br/>
            <UserBanner
            userName="Travis Thompson"
            radius="2.0 Miles Away"
            />
            <br/>
            <UserBanner
            userName="John Derosiers"
            radius="3.3 Miles Away"
            />
            <br/>
            <UserBanner
            userName="David Habibi"
            radius="2.7 Miles Away"
            />
            <br/>
            <UserBanner
            userName="Mark Zuckerberg"
            radius="5.2 Miles Away"
            />
            <br/>
            <UserBanner
            userName="John Smith"
            radius="2.8 Miles Away"
            />
            <br/>
            <UserBanner
            userName="Bill Gates"
            radius="0.9 Miles Away"
            facebook="true"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
