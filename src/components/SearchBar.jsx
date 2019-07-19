import React from 'react';

const SearchBar = ({ handleSubmit, handleChange, term }) => {
  return (
    <form id="search" onSubmit={handleSubmit}>
      <input className="input" type="text" value={term} onChange={handleChange} placeholder="Search" />
      <button className="btn">Search</button>
    </form>
  );
};

export default SearchBar;
