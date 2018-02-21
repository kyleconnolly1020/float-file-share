import React from "react";
import "./Profile.css";
import Logo from "../Logo";
import ProfileInfo from "../ProfileInfo";
import ProfilePic from "../ProfilePic";
import ProfileNav from "../ProfileNav";
import ProfileTable from "../ProfileTable";
import UserBanner from "../UserBanner";
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
import BurgerMenu from "../BurgerMenu";
import NavBar from "../NavBar";


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
  axios.post("/api/users/upload", fileData)
    .then(response => console.log(response.data))
    .catch(function (error) {
      console.log(error);
    })
};

const updateUser = (username, updateInfo) => {
  axios.put(`/api/users/update/${username}`, updateInfo)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => console.log(error))
}

class Profile extends React.Component {
  state = {
    file: null,
    user: null
  };

  componentWillMount() {
    axios.get("/api/users/search/kyleconnolly")
      .then(response => {
        this.setState({ user: response.data[0] })
        console.log(this.state.user);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.uploadToS3(this.state.file);
    updateUser();
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
      function (err, data) {
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
        window.location.reload();
      }
    );
  }

  render() {
    const userIsTrue = this.state.user;
    return (


      <div>

        <BurgerMenu />
        <Logo />
        {userIsTrue &&

          <div className="container">
            <NavBar
              onProfilePage={true}
              searchUsersUpdate={this.searchUsersUpdate}
              location="La Jolla, California"
            />
            
            <UserBanner
              handleFormSubmit = {this.handleFormSubmit}
              handleInputChange = {this.handleInputChange}
              open = {true}
              userName={this.state.user.username}
              // radius={`latitude: ${this.state.user.location.coordinates[0]} longitude: ${this.state.user.location.coordinates[1]}`}
              facebook={this.state.user.socialProfiles.facebook ? "true" : null}
              twitter={this.state.user.socialProfiles.twitter ? "true" : null}
              snapchat={this.state.user.socialProfiles.snapchat ? "true" : null}
              linkedin={this.state.user.socialProfiles.linkedin ? "true" : null}
              instagram={this.state.user.socialProfiles.instagram ? "true" : null}

              pdf={this.state.user.files.find(file => {
                console.log(file.filetype);
                if (file.filetype === "application/pdf")
                  return true;
                return false;
              })}
              audiofile={this.state.user.files.find(file => {
                console.log(file.filetype);
                if (file.filetype === "audio/mp3")
                  return true;
                return false;
              })}
              javascript={this.state.user.files.find(file => {
                console.log(file.filetype);
                if (file.filetype === "application/javascript")
                  return true;
                return false;
              })}
              imagefile={this.state.user.files.find(file => {
                console.log(file.filetype);
                if (file.filetype === "image/jpeg")
                  return true;
                return false;
              })}

              description={this.state.user.description ? this.state.user.description : null}
              userSocials={this.state.user.socialProfiles}
              userFiles={this.state.user.files}
              image={this.state.user.image}
            />
          </div>
        }
      </div>
    );
  }
}

export default Profile;