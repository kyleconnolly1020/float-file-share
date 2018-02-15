import React from "react";
import "./ProfileInfo.css";



class ProfileInfo extends React.Component {
    render() {
        return (
            <div className="userName">{this.props.userName}</div>
        )
    }
}


export default ProfileInfo;