import React, { Component } from 'react';
import axios from 'axios';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      url: "",
      error: false,
      errorMessage: ""
    }
  }

  handleChange = (ev) => {
    const file = ev.target.files[0]
    fetch("http://localhost:3000/sign_s3", {
      method: 'POST',
      body: {
        fileName: file.name,
        fileType: file.type
      }
    })
      .then(res => res.json())
      .then(res => {
        let { signedRequest, url } = res.data
        var options = {
          method: 'PUT',
          headers: {
            'Content-Type': file.type
          },
          body: file
        }

        fetch(signedRequest, options)
          .then(res => res.json())
          .then(res => {
            console.log('Successfuly Uploaded')
            this.setState({ success: true });
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="App">
        <h1>UPLOAD A FILE</h1>
        <input onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file" />
      </div>
    );
  }
}
