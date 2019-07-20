import React from 'react';
import { Button, InputGroup, Input, InputGroupAddon, Form } from 'reactstrap';

const SearchBar = ({ handleSubmit, handleChange, term }) => {
  return (
    <InputGroup onSubmit={handleSubmit} style={{ padding: '3rem', margin: '0 auto', width: '70vw' }}>
      <InputGroupAddon addonType="prepend">
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </InputGroupAddon>
      <Input className="input" type="text" value={term} onChange={handleChange} placeholder="Search iTunes store" />
    </InputGroup>
  );
};

export default SearchBar;
