import React from "react"; 
import "./UserProfile.css";

class UserProfile extends React.Component {
    
    render(props){
        return(
            <img className="circle-avatar" alt="profPic" src={this.props.image}/>
        )
    }
}

export default UserProfile;