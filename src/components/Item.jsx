import React from 'react';

function Item({ item, onDelete }) {
  return (
    <li className="item-row">
      <span className="item-name">{item.name}</span>
      <span className="item-price">{item.price} сом</span>
      <button className="delete-btn" onClick={() => onDelete(item.id)}>
        Удалить
      </button>
    </li>
  );
}

export default Item;