import React from 'react';
import Item from './Item';
import { Table } from 'reactstrap';

const Category = ({ category, sectionName, handleFavorite }) => {
  return (
    <div className="Category">
      <h2>{sectionName}</h2>
      <Table className="Table" dark>
        <thead>
          <tr scope="row">
            <th>Artwork</th>
            <th>Favorite</th>
            <th>Name</th>
            <th>Genre</th>
            <th>Link to iTunes</th>
          </tr>
        </thead>
        <tbody>
          {category.map((item, i) => {
            return <Item type={sectionName} details={item} handleFavorite={handleFavorite} key={i} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Category;
