import React from "react";
import "./UserBanner.css"; 
import UserProfile from "../UserProfile";
import { Panel} from 'react-bootstrap';
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";

class UserBanner extends React.Component { 
    state = {
        open: false
    }
    handler = () => {
        this.setState({
            open: !this.state.open
        });
    }
    render() {
        return (
            <div>
                <Panel id="collapsible-panel-example-1" expanded={this.state.open} >
                    <div className="container userBanner"> 
                    <UserProfile  action={() => this.handler()} image={this.props.image ? this.props.image : "http://www.skywardimaging.com/wp-content/uploads/2015/11/default-user-image.png"}/>
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
                            <div className="row">
                                <div className="col-md-6">
                                    <p>Social Media:</p>
                                    {this.props.userSocials.facebook ? (<p>{'Facebook: '+ this.props.userSocials.facebook} </p>) : null}
                                    {this.props.userSocials.twitter ? (<p>{'Twitter: ' + this.props.userSocials.twitter}</p>) : null}
                                    {this.props.userSocials.snapchat ? (<p>{'Snapchat: ' + this.props.userSocials.snapchat}</p>) : null}
                                    {this.props.userSocials.linkedin ? (<p>{'LinkedIn: ' + this.props.userSocials.linkedin}</p>) : null}
                                    {this.props.userSocials.instagram ? (<p>{'Instagram: ' + this.props.userSocials.instagram}</p>) : null}
                                </div>
                                <div className="col-md-6">
                                    <p>Files:</p>
                                    {this.props.userFiles.pdf ? (<p>{'Pdf: ' + this.props.userFiles.pdf}</p>) : null}
                                    {this.props.userFiles.audiofile ? (<p>{'Audio File: ' + this.props.userFiles.audiofile}</p>) : null}
                                    {this.props.userFiles.javascript ? (<p>{'JavaScript: ' + this.props.userFiles.javascript}</p>) : null}
                                </div>
                            </div>
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
            </div>    
        )
    }
}

export default UserBanner;