import React from "react"; 
import "./UserProfile.css";

class UserProfile extends React.Component {
    
    render(props){
        return(
            <img className="circle-avatar" alt="profPic" src="http://www.skywardimaging.com/wp-content/uploads/2015/11/default-user-image.png"/>
        )
    }
}

export default UserProfile;