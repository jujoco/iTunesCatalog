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
    axios.post("http://localhost:3000/sign_s3", {
      fileName: file.name,
      fileType: file.type
    })
      .then(response => {
        let { signedRequest, url } = response.data
        var options = {
          headers: {
            'Content-Type': file.type
          }
        }

        axios.put(signedRequest, file, options)
          .then(result => {
            console.log(result)
            console.log(url);
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
