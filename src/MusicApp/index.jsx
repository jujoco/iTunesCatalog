import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import db from './db';
import { SearchBar } from './components/SearchBar';
import { Category } from './components/Category';

export const App = () => {
  const categories = useSelector(state => state.categories)

  return (
    <>
      <SearchBar />
      {Object.keys(categories).map((category, i) => {
        return <Category category={categories[category]} sectionName={category} key={i} />;
      })}
    </>
  )
}