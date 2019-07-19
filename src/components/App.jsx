import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      categories: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}

  handleChange(e) {
    this.setState({ term: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let term = this.state.term;
    axios
      .get(`/search/${term}`)
      .then((res) => {
        this.setState({ categories: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let { categories, term } = this.state;
    let { handleSubmit, handleChange } = this;

    return (
      <div className="section">
        <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} term={term} />
      </div>
    );
  }
}

export default App;
