import React from 'react';
import ListItemComponent from '../ListItemComponent/ListItemComponent';
import './ListComponent.css';

const ListComponent = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItemComponent key={item.id || index} item={item} />
      ))}
    </ul>
  );
};

export default ListComponent;
