import React from "react";
import "./UserBanner.css"; 
import UserProfile from "../UserProfile";
import { Panel} from 'react-bootstrap';
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";

class UserBanner extends React.Component { 
    state = {
        open: false
    }
    render() {
        return (
            <div>
                <Panel id="collapsible-panel-example-1" expanded={this.state.open}>
                    <div className="container userBanner" onClick={() => this.setState({ open: !this.state.open })}> 
                    <UserProfile image={this.props.image ? this.props.image : "http://www.skywardimaging.com/wp-content/uploads/2015/11/default-user-image.png"}/>
                    <div className="userName">{this.props.userName}</div>
                    <div className="radius">{this.props.radius}</div>
                    <SocialMediaBar
                        facebook={this.props.facebook}
                        twitter={this.props.twitter}
                        snapchat={this.props.snapchat}
                        linkedin={this.props.linkedin}
                        instagram={this.props.instagram}
                        pdf={this.props.pdf}
                        audiofile={this.props.audiofile}
                        javascript={this.props.javascript}
                    />
                    </div>
                    <Panel.Collapse>
                        <Panel.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred nesciunt sapiente
                            ea proident.
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
            </div>    
        )
    }
}

export default UserBanner;