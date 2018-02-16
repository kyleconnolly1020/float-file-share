import React from "react";
import "./Profile.css";
import Logo from "../Logo";
import ProfileInfo from "../ProfileInfo";
import ProfilePic from "../ProfilePic";
import ProfileNav from "../ProfileNav";
import ProfileTable from "../ProfileTable";

class Profile extends React.Component {

    render(props) {
        return (
            <div>
                <Logo />
                <div className="container">
                    <ProfileNav
                        location="La Jolla, California"
                    />
                    <ProfilePic image={this.props.image ? this.props.image : "http://www.skywardimaging.com/wp-content/uploads/2015/11/default-user-image.png"} />
                    <ProfileInfo
                        userName="Travis Thompson"
                    />
                </div>

                <br />

                <div className="container documents">
                <ProfileTable
                id="1"
                type="PDF"
                fileName="Project 1"
                dateAdded="02/15/2018"
                />
                </div>
            </div>
        )
    }
}

export default Profile;