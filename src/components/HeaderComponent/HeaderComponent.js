import React from 'react';
import './HeaderComponent.css';

const HeaderComponent = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default HeaderComponent;
