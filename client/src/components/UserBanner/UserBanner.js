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
import axios from "axios"; 

class UserBanner extends React.Component {
    state = {
        open: false,
        editing: false,
        edits: false,
        updates: {
            description: this.props.description,
            socialProfiles: {
                facebook: this.props.userSocials.facebook,
                twitter: this.props.userSocials.twitter,
                snapchat: this.props.userSocials.snapchat,
                linkedin: this.props.userSocials.linkedin,
                instagram: this.props.userSocials.instagram
            }
        }
    }
    handler = () => {
        this.setState({
            open: !this.state.open
        });
    }

    updateUser = (username, updateInfo) => {
        axios.put(`/api/users/update/${username}`, updateInfo)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }

    updateUserFields = event => {
        this.setState({ edits: true });
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };


    formSwitch = () => {

        if (this.state.editing && this.state.edits) {
            this.updateUser(this.props.userName, this.state.updates);
            this.setState({
                editing: !this.state.editing,
                edits: false
            });

        }

        else {
            this.setState({
                editing: !this.state.editing
            });
        }

    }

    render() {
        console.log(this.state);
        return (
            <div>
                <Panel id="collapsible-panel-example-1" expanded={this.props.open ? this.props.open : this.state.open} >
                    <div className="container userBanner">
                        <UserProfile action={() => this.handler()} image={this.props.image ? this.props.image : "https://s3.amazonaws.com/floatfileshare/default-user-image.png"} />
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
                                    {this.state.editing ? (<input type="text" name="updates.description" defaultValue={this.props.description} onChange={this.updateUserFields} />) : (<p><strong>{this.props.description}</strong></p>)}
                                    {this.state.editing ? (<p className="facebook"><span><i className='fab fa-facebook-square'></i> </span><input type="text" name="updates.socialProfiles.facebook" defaultValue="facebook.com/" onChange={this.updateUserFields} /></p>) : (this.props.userSocials.facebook ? (<p className="facebook"><span><i className='fab fa-facebook-square'></i></span><a href={this.props.userSocials.facebook} target="_blank">{'  ' + this.props.userSocials.facebook}</a></p>) : null)}
                                    {this.state.editing ? (<p className="twitter"><span><i className='fab fa-twitter'></i> </span><input type="text" name="updates.socialProfiles.twitter" defaultValue="twitter.com/" onChange={this.updateUserFields} /></p>) : (this.props.userSocials.twitter ? (<p className="twitter"><span><i className='fab fa-twitter'></i></span><a href={this.props.userSocials.twitter} target="_blank">{'  ' + this.props.userSocials.twitter}</a></p>) : null)}
                                    {this.state.editing ? (<p className="snapchat"><span><i className='fab fa-snapchat-ghost'></i> </span><input type="text" name="updates.socialProfiles.snapchat" defaultValue={this.props.userSocials.snapchat} onChange={this.updateUserFields} /></p>) : (this.props.userSocials.snapchat ? (<p className="snapchat"><span><i className='fab fa-snapchat-ghost'></i></span><a href={this.props.userSocials.snapchat} target="_blank">{'  ' + this.props.userSocials.snapchat}</a></p>) : null)}
                                    {this.state.editing ? (<p className="linkedin"><span><i className='fab fa-linkedin'></i> </span><input type="text" name="updates.socialProfiles.linkedin" defaultValue="linkedin.com/" onChange={this.updateUserFields} /></p>) : (this.props.userSocials.linkedin ? (<p className="linkedin"><span><i className='fab fa-linkedin'></i></span><a href={this.props.userSocials.linkedin} target="_blank">{'  ' + this.props.userSocials.linkedin}</a></p>) : null)}
                                    {this.state.editing ? (<p className="instagram"><span><i className='fab fa-instagram'></i> </span><input type="text" name="updates.socialProfiles.instagram" defaultValue={this.props.userSocials.instagram} onChange={this.updateUserFields} /></p>) : (this.props.userSocials.instagram ? (<p className="instagram"><span><i className='fab fa-instagram'></i></span><a href={this.props.userSocials.instagram} target="_blank">{'  ' + this.props.userSocials.instagram}</a></p>) : null)}
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