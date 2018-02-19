import React from "react";
import "./ProfileTable.css";
import ReactTable from 'react-table'
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import { s3Upload } from "../../utils/awsLib";

class ProfileTable extends React.Component {

  state = {
    isLoading: null,
    content: "",
    file: null
  };

  handleFileChange = event => {
    this.file = event.target.files[0];
  }

  handleSubmit = async event => {
    event.preventDefault();

    // if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
    //   alert("Please pick a file smaller than 5MB");
    //   return;
    // }

    this.setState({ isLoading: true });

    try {
      const uploadedFilename = this.file
        ? (await s3Upload(this.file, "filename")).Location
        : null;

      await this.createNote({
        content: this.state.content,
        attachment: uploadedFilename
      });
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <div>

        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Type</th>
              <th scope="col">File Name</th>
              <th scope="col">Date Added</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="id" scope="row">{this.props.id}</th>
              <td className="type">{this.props.type}</td>
              <td className="fileName">{this.props.fileName}</td>
              <td className="dateAdded">{this.props.dateAdded}</td>
            </tr>
            <tr>
              <th className="id" scope="row">2</th>
              <td className="type">AI</td>
              <td className="fileName">Project 2</td>
              <td className="dateAdded">03/12/2018</td>
            </tr>
            <tr>
              <th className="id" scope="row">3</th>
              <td className="type">PSD</td>
              <td className="fileName">Project 3</td>
              <td className="dateAdded">04/20/2018</td>
            </tr>
          </tbody>
        </table>

        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="content">
            <FormControl
              onChange={this.handleChange}
              value={this.state.content}
              componentClass="textarea"
            />
          </FormGroup>
          <FormGroup controlId="file">
            <ControlLabel>Attachment</ControlLabel>
            <FormControl onChange={this.handleFileChange} type="file" />
          </FormGroup>
          <Button
            type="submit"
          //   className={`LoaderButton ${className}`}
          //   disabled={disabled || isLoading}
          //   {...props}
          // >
          //   {isLoading && <Glyphicon glyph="refresh" className="spinning" />}
          //   {!isLoading ? text : loadingText}
          >Submit File
          </Button>

          {/* <LoaderButton
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}

            isLoading={this.state.isLoading}
            text="Create"
            loadingText="Creating…"
          /> */}
        </form>

        <button type="button" class="btn btn-primary">Upload</button>
        <button type="button" class="btn btn-primary">Edit</button>
      </div>
    )
  }
};



export default ProfileTable;