import React, { Component } from 'react';
import axios from 'axios';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
    }
  }

  handleChange = (ev) => {
    const file = ev.target.files[0]
    axios.post("/sign_s3", {
      fileName: file.name,
      fileType: file.type
    })
      .then(response => {
        let { signedRequest, url } = response.data
        let options = {
          headers: {
            'Content-Type': file.type
          },
          body: file
        }

        axios.put(signedRequest, file, options)
          .then(res => {
            console.log('Success ', res);
            this.setState({ success: true });
          })
          .catch(error => {
            console.log('2nd fetch error ', error)
          })
      })
      .catch(error => {
        console.log('1st fetch error ', error)
      })
  }

  render() {
    return (
      <div className="App">
        <h1>UPLOAD A FILE</h1>
        <input onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file" />

        {this.state.success ? <h3 style={{color: 'green'}}>SUCCESSFUL UPLOAD</h3> : null}
      </div>
    );
  }
}
