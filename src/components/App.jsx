import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {},
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/search/coding`)
      .then((res) => {
        this.setState({ categories: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onSubmit(e) {
    console.log('click');
  }

  render() {
    let { categories } = this.state;

    return <div className="section">HelloWorld</div>;
  }
}

export default App;
