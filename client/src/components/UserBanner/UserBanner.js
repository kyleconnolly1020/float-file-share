import React from "react";
import "./UserBanner.css";
import UserProfile from "../UserProfile";
import { Panel } from 'react-bootstrap';
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";
import {
    FormGroup,
    FormControl,
    HelpBlock,
    ControlLabel,
    Button
} from "react-bootstrap";

class UserBanner extends React.Component {
    state = {
        open: false,
        update: false
    }
    handler = () => {
        this.setState({
            open: !this.state.open
        });
    }

    formSwitch = () => {
        this.setState({
            update: !this.state.update
        });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <Panel id="collapsible-panel-example-1" expanded={this.props.open ? this.props.open : this.state.open} >
                    <div className="container userBanner">
                        <UserProfile action={() => this.handler()} image={this.props.image ? this.props.image : "http://www.skywardimaging.com/wp-content/uploads/2015/11/default-user-image.png"} />
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
                            imagefile={this.props.imagefile}
                        />
                    </div>
                    <Panel.Collapse>
                        <Panel.Body>
                            <div className="row">
                                <div className="col-md-6">
                                    {this.state.update ? (<input type="text" defaultValue={this.props.description} />) : (<p><strong>{this.props.description}</strong></p>)}
                                    {this.state.update ? (<p className="facebook"><span><i className='fab fa-facebook-square'></i> </span><input type="text" defaultValue="facebook.com/"/></p>) : (this.props.userSocials.facebook ? (<p className="facebook"><span><i className='fab fa-facebook-square'></i></span><a href={this.props.userSocials.facebook} target="_blank">{'  ' + this.props.userSocials.facebook}</a></p>) : null)}
                                    {this.state.update ? (<p className="twitter"><span><i className='fab fa-twitter'></i> </span><input type="text" defaultValue="twitter.com/"/></p>) : (this.props.userSocials.twitter ? (<p className="twitter"><span><i className='fab fa-twitter'></i></span><a href={this.props.userSocials.twitter} target="_blank">{'  ' + this.props.userSocials.twitter}</a></p>) : null)}
                                    {this.state.update ? (<p className="snapchat"><span><i className='fab fa-snapchat-ghost'></i> </span><input type="text" defaultValue={this.props.userSocials.snapchat}/></p>) : (this.props.userSocials.snapchat ? (<p className="snapchat"><span><i className='fab fa-snapchat-ghost'></i></span><a href={this.props.userSocials.snapchat} target="_blank">{'  ' + this.props.userSocials.snapchat}</a></p>) : null)}
                                    {this.state.update ? (<p className="linkedin"><span><i className='fab fa-linkedin'></i> </span><input type="text" defaultValue="linkedin.com/"/></p>) : (this.props.userSocials.linkedin ? (<p className="linkedin"><span><i className='fab fa-linkedin'></i></span><a href={this.props.userSocials.linkedin} target="_blank">{'  ' + this.props.userSocials.linkedin}</a></p>) : null)}
                                    {this.state.update ? (<p className="instagram"><span><i className='fab fa-instagram'></i> </span><input type="text" defaultValue={this.props.userSocials.instagram}/></p>) : (this.props.userSocials.instagram ? (<p className="instagram"><span><i className='fab fa-instagram'></i></span><a href={this.props.userSocials.instagram} target="_blank">{'  ' + this.props.userSocials.instagram}</a></p>) : null)}
                                </div>
                                <div className="col-md-6">
                                    {this.props.userFiles.map(file => {
                                        switch (file.filetype) {
                                            case "application/pdf":
                                                return <p className="pdf"><span><i className='far fa-file-pdf'></i></span><a href={file.url} target="_blank">{'  ' + file.filename}</a></p>
                                            case "audio/mp3":
                                                return <p className="audiofile"><span><i className='fas fa-file-audio'></i></span><a href={file.url} target="_blank">{'  ' + file.filename}</a></p>
                                            case "application/javascript":
                                                return <p className="javascript"><span><i className='fab fa-js-square'></i></span><a href={file.url} target="_blank">{'  ' + file.filename}</a></p>
                                            case "image/jpeg":
                                                return <p className="imagefile"><span><i className='fas fa-image'></i></span><a href={file.url} target="_blank">{'  ' + file.filename}</a></p>
                                            default:
                                        }
                                        return true;
                                    })}
                                </div>
                            </div>
                            {this.props.open &&
                                <form onSubmit={this.props.handleFormSubmit} onChange={this.props.handleInputChange} className="text-center">
                                    <FormGroup controlId="formControlsFile">
                                        <ControlLabel>Upload File</ControlLabel>
                                        <div id="form">
                                            <FormControl type="file" name="file" />
                                        </div>
                                        <HelpBlock>Select a file you would like to upload</HelpBlock>
                                    </FormGroup>
                                    <Button id="submitButton" type="submit">Submit</Button>
                                    <Button style={{ float: "right" }} onClick={this.formSwitch}>Update Profile</Button>
                                </form>
                            }
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
            </div>
        )
    }
}

export default UserBanner;