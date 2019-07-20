import React, { Component } from 'react';
import axios from 'axios';
import db from './db';

import SearchBar from './SearchBar';
import Category from './Category';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      categories: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  componentDidMount() {
    db.favorites
      .toArray(this.sortFavorites)
      .then((favorites) => this.setState({ categories: favorites }))
      .catch((err) => console.log(err));
  }

  sortFavorites(list) {
    const catalog = {};
    for (let obj of list) {
      if (!catalog[obj.type]) catalog[obj.type] = [reducer(obj)];
      else catalog[obj.type].push(reducer(obj));
    }
    return catalog;
    function reducer(obj) {
      const { id, name, artwork, genre, url } = obj;
      let newObj = {
        id,
        name,
        artwork,
        genre,
        url,
      };
      return newObj;
    }
  }

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

  handleFavorite(record) {
    db.favorites
      .put(record)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    let { categories, term } = this.state;
    let { handleSubmit, handleChange, handleFavorite } = this;
    return (
      <>
        <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} term={term} />
        {Object.keys(categories).map((key, i) => {
          return <Category category={categories[key]} handleFavorite={handleFavorite} sectionName={key} key={i} />;
        })}
      </>
    );
  }
}

export default App;
