import React from 'react';

export const Item = ({ type, details }) => {
  function saveFavorite(e) {
    e.preventDefault();
    //todo: dispatch save item
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

