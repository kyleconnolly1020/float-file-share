import React from "react";
import UserBanner from "../UserBanner";
import NavBar from "../NavBar";
import Logo from "../Logo";

// import users from "./users.json";
import axios from "axios";
class Home extends React.Component {
    state = {
        users: []
    }

    searchUsersUpdate = userData => {
        this.setState({ users: userData });
        console.log(this.state.users);
    }

    updateUsers = userData => {
        
        const auth0id = localStorage.getItem("profileAuthId").replace(/['"]+/g, "");
        
        //filter out current user
        userData.forEach(function(e) {
            if (e.auth0id === auth0id) {
                userData.splice(e, 1)
            }
        });
          

        this.setState({ users: userData });
        console.log(this.state.users);
    }

    componentDidMount() {
        const self = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position.coords.longitude, position.coords.latitude);
            axios.post('/api/users/near', {
                coords: [position.coords.longitude, position.coords.latitude]
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
                            searchUsersUpdate={this.searchUsersUpdate}
                            location="San Diego, California"
                            lock={this.props.lock}
                        />
                        {this.state.users.map(user => {
                            return (
                                <UserBanner
                                    userName={user.username}
                                    radius={`latitude: ${user.location.coordinates[0]} \n longitude: ${user.location.coordinates[1]}`}
                                    facebook={user.socialProfiles.facebook ? "true" : null}
                                    twitter={user.socialProfiles.twitter ? "true" : null}
                                    snapchat={user.socialProfiles.snapchat ? "true" : null}
                                    linkedin={user.socialProfiles.linkedin ? "true" : null}
                                    instagram={user.socialProfiles.instagram ? "true" : null}

                                    pdf={user.files.find(file => {
                                        console.log(file.filetype);
                                        if (file.filetype === "application/pdf")
                                        return true;
                                        return false;
                                    })}
                                    audiofile={user.files.find(file => {
                                        console.log(file.filetype);
                                        if (file.filetype === "audio/mp3")
                                            return true;
                                        return false;
                                    })}
                                    javascript={user.files.find(file => {
                                        console.log(file.filetype);
                                        if (file.filetype === "application/javascript")
                                            return true;
                                        return false;
                                    })}
                                    imagefile={user.files.find(file => {
                                        console.log(file.filetype);
                                        if (file.filetype === "image/jpeg")
                                            return true;
                                        return false;
                                    })}

                                    description={user.description ? user.description : null}
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
