import React from 'react';
import './ListItemComponent.css';

const ListItemComponent = ({ item }) => {
  return (
    <div className="list-item">
      <h4>{item.title || item}</h4> {/* Exibe o título do item ou o próprio item se não for um objeto */}
    </div>
  );
};

export default ListItemComponent;
