import React from 'react';

const Item = ({ type, details, handleFavorite }) => {
  function saveFavorite(e) {
    e.preventDefault();
    handleFavorite({ type, ...details });
  }

  return (
    <tr scope="row">
      <td>
        <img src={details.artwork} alt="pic" />
      </td>
      <td>
        <button className="save-btn" onClick={saveFavorite}>
          Save
        </button>
      </td>
      <td>{details.name}</td>
      <td>{details.genre}</td>
      <td>
        <a href={details.url} target="_blank">
          iTunes Store
        </a>
      </td>
    </tr>
  );
};

export default Item;
