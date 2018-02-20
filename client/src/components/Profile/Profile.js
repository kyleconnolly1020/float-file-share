import React from "react";
import "./Profile.css";
import Logo from "../Logo";
import ProfileInfo from "../ProfileInfo";
import ProfilePic from "../ProfilePic";
import ProfileNav from "../ProfileNav";
import ProfileTable from "../ProfileTable";
import {
  FormGroup,
  FormControl,
  HelpBlock,
  ControlLabel,
  Button
} from "react-bootstrap";
import AWS from "aws-sdk";
import uuidv4 from "uuid/v4";
import axios from "axios";


// Initialize the Amazon Cognito credentials provider
AWS.config.region = "us-east-1"; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-east-1:dad425a0-ab0f-4f77-809b-bf3f95050d35"
});

const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: "floatfileshare" }
});

const postFile = fileData => {
  axios.post("/api/users/update", fileData)
    .then(response => console.log(response.data))
    .catch(function(error) {
      console.log(error);
    })
};

class Profile extends React.Component {
  state = {
    file: null
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.uploadToS3(this.state.file);
  };

  handleInputChange = event => {
    const value = event.target.files[0];
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  uploadToS3 = userFile => {
    // var files = document.getElementById('photoupload').files;
    if (!userFile) {
      return alert("Please choose a file to upload first.");
    }
    // var file = userFile;
    // var fileName = userFile.name;
    var uuid = uuidv4();
  
    var fileKey = uuid;

    s3.upload(
      {
        Key: fileKey,
        Body: userFile,
        ACL: "public-read",
        ContentType: userFile.type
      },
      function(err, data) {
        if (err) {
          return alert("There was an error uploading your file: ", err.message);
        }
        alert("Successfully uploaded file");
        console.log(data);
        console.log(userFile);
        postFile({
          url: data.Location,
          filetype: userFile.type,
          filename: userFile.name,
          username: "kyleconnolly"
        });
      }
    );
  }

  render() {
    return (
      <div>
        <Logo />
        <div className="container">
          <ProfileNav location="La Jolla, California" />
          <ProfilePic
            image={
              this.props.image
                ? this.props.image
                : "http://www.skywardimaging.com/wp-content/uploads/2015/11/default-user-image.png"
            }
          />
          <ProfileInfo userName="Travis Thompson" />
        </div>

        <br />

        <div className="container documents">
          <ProfileTable
            id="1"
            type="PDF"
            fileName="Project 1"
            dateAdded="02/15/2018"
          />

          <form onSubmit={this.handleFormSubmit} onChange={this.handleInputChange} >
            <FormGroup
              controlId="formControlsFile"
            >
              <ControlLabel>Upload File</ControlLabel>
              <FormControl type="file" name="file"/>
              <HelpBlock>Select a file you would like to upload</HelpBlock>
            </FormGroup>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Profile;
