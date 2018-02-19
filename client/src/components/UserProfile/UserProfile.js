import React from "react"; 
import "./UserProfile.css";

class UserProfile extends React.Component {
    
    render(){
        return(
            <img className="circle-avatar" alt="profPic" src={this.props.image} onClick={this.props.action}/>
        )
    }
}

export default UserProfile;