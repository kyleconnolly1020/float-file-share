import React from "react";
import UserBanner from "../UserBanner";
import NavBar from "../NavBar";
import Logo from "../Logo";
import users from "./users.json";
class Home extends React.Component {
    state = {
        users
    }
    render() {
        return (
            <div>
                <Logo />
                <div className="container">
                    <div className="appWindow">
                        <NavBar
                            location="La Jolla, California"
                        />
                        {this.state.users.map(user => {
                            return(
                                <UserBanner
                                    userName={user.username}
                                    radius={`latitude: ${user.location[0]} longitude: ${user.location[1]}`}
                                    facebook={user.socialProfiles.facebook ? "true" : null}
                                    twitter={user.socialProfiles.twitter ? "true" : null}
                                    snapchat={user.socialProfiles.snapchat ? "true" : null}
                                    linkedin={user.socialProfiles.linkedin ? "true" : null}
                                    instagram={user.socialProfiles.instagram ? "true" : null}
                                    pdf = {user.files ? (user.files.pdf ? "true" : null) : null}
                                    audiofile = {user.files ? (user.files.audiofile ? "true" : null) : null}
                                    javascript = {user.files ? (user.files.javascript ? "true" : null) : null}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;