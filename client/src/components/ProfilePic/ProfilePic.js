import React from "react";
import "./ProfilePic.css";

class ProfilePic extends React.Component {
    
    render(props){
        return(
            <img className="profilePic" alt="profPic" src={this.props.image}/>
        )
    }
}

export default ProfilePic;