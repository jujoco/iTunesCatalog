import React from 'react';
import { Item } from './Item';

export const Category = ({ category, sectionName }) => {
  return (
    <div className="Category">
      <h2>{sectionName}</h2>
      <table className="Table">
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
            return (
              <Item
                type={sectionName}
                details={item}
                key={i} />
            )
          })}
        </tbody>
      </table>
    </div>
  );
};
