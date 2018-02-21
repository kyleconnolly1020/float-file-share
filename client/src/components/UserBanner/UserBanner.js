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
                                    {<p><strong>{this.props.description}</strong></p>}
                                    {this.props.userSocials.facebook ? (<p className="facebook"><span><i className='fab fa-facebook-square'></i></span><a href={this.props.userSocials.facebook} target="_blank">{'  ' + this.props.userSocials.facebook}</a></p>) : null}
                                    {this.props.userSocials.twitter ? (<p className="twitter"><span><i className='fab fa-twitter'></i></span><a href={this.props.userSocials.twitter} target="_blank">{'  ' + this.props.userSocials.twitter}</a></p>) : null}
                                    {this.props.userSocials.snapchat ? (<p className="snapchat"><span><i className='fab fa-snapchat-ghost'></i></span>{'  ' + this.props.userSocials.snapchat}</p>) : null}
                                    {this.props.userSocials.linkedin ? (<p className="linkedin"><span><i className='fab fa-linkedin'></i></span><a href={this.props.userSocials.linkedin} target="_blank">{'  ' + this.props.userSocials.linkedin}</a></p>) : null}
                                    {this.props.userSocials.instagram ? (<p className="instagram"><span><i className='fab fa-instagram'></i></span><a href={this.props.userSocials.instagram} target="_blank">{'  ' + this.props.userSocials.instagram}</a></p>) : null}
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
                            <form onSubmit={this.handleFormSubmit} onChange={this.handleInputChange} >
                                <FormGroup controlId="formControlsFile">
                                    <ControlLabel>Upload File</ControlLabel>
                                    <FormControl type="file" name="file" />
                                    <HelpBlock>Select a file you would like to upload</HelpBlock>
                                </FormGroup>
                                <Button type="submit">Submit</Button>
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