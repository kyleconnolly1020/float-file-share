import React from "react";
import UserBanner from "../UserBanner";
import NavBar from "../NavBar";
import Logo from "../Logo";
import users from "./users.json";
import axios from "axios";
class Home extends React.Component {
    state = {
        users
    }
    updateUsers = userData => {
        this.setState({users: userData}); 
        console.log(this.state.users);
    }
    componentDidMount() {
        const self = this;
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.longitude, position.coords.latitude);
            axios.post('/api/users/near', {
                coords:[position.coords.longitude, position.coords.latitude]
            })
            .then(response => self.updateUsers(response.data))
            .catch(function (error) {
                console.log(error);
            });
        })
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
                                    radius={`latitude: ${user.location.coordinates[0]} longitude: ${user.location.coordinates[1]}`}
                                    facebook={user.socialProfiles.facebook ? "true" : null}
                                    twitter={user.socialProfiles.twitter ? "true" : null}
                                    snapchat={user.socialProfiles.snapchat ? "true" : null}
                                    linkedin={user.socialProfiles.linkedin ? "true" : null}
                                    instagram={user.socialProfiles.instagram ? "true" : null}
                                    pdf = {user.files.pdf ? "true"  : null}
                                    audiofile = {user.files.audiofile ? "true"  : null}
                                    javascript = {user.files.javascript ? "true"  : null}
                                    description = {user.description ? user.description : null}
                                    userSocials={user.socialProfiles}
                                    userFiles={user.files}
                                    image={user.image}
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