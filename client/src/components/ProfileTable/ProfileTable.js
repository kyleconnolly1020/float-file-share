import React from "react";
import "./ProfileTable.css";
import ReactTable from 'react-table'

const Sort = () => {

}

class ProfileTable extends React.Component {
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
        <button type="button" class="btn btn-primary">Upload</button>
        <button type="button" class="btn btn-primary">Edit</button>
      </div>
    )
  }
};



export default ProfileTable;