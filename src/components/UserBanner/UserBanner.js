import React from "react";
import "./UserBanner.css"; 
import UserProfile from "../UserProfile";

class UserBanner extends React.Component { 

    facebookIcon(props){
        if(this.props.facebook){
            return <i className="fab fa-facebook-square"></i>;
        }
    }

    twitterIcon(props){
        if(this.props.twitter){
            return <i className="fab fa-twitter"></i>;
        }
    }

    snapchatIcon(props){
        if(this.props.snapchat){
            return <i className="fab fa-snapchat-ghost"></i>;
        }
    }

    linkedinIcon(props){
        if(this.props.linkedin){
            return <i className="fab fa-linkedin"></i>;
        }
    }

    instagramIcon(props){
        if(this.props.instagram){
            return <i className="fab fa-instagram"></i>;
        }
    }

    pdfIcon(props){
        if(this.props.pdf){
            return <i className="far fa-file-pdf"></i>;
        }
    }

    audiofileIcon(props){
        if(this.props.audiofile){
            return <i className="fas fa-file-audio"></i>;
        }
    }
    
    javascriptIcon(props){
        if(this.props.javascript){
            return <i className="fab fa-js-square"></i>;
        }
    }

    render(props) {
        return (
            <div className="container userBanner"> 
                <UserProfile image={this.props.image ? this.props.image : "http://www.skywardimaging.com/wp-content/uploads/2015/11/default-user-image.png"}/>
                <div className="userName">
                    {this.props.userName}
                </div>
                <div className="radius">
                    {this.props.radius}
                </div>
                
                    <span className="facebookIcon">{this.facebookIcon(props)}</span>
                    <span className="twitterIcon">{this.twitterIcon(props)}</span>
                    <span className="snapchatIcon">{this.snapchatIcon(props)}</span>
                    <span className="linkedinIcon">{this.linkedinIcon(props)}</span>
                    <span className="instagramIcon">{this.instagramIcon(props)}</span>
                    <span className="pdfIcon">{this.pdfIcon(props)}</span>
                    <span className="audiofileIcon">{this.audiofileIcon(props)}</span>
                    <span className="javascriptIcon">{this.javascriptIcon(props)}</span>
            

            </div>
            
        )
    }
}

export default UserBanner;