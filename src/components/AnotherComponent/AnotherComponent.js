import React from 'react';
import './AnotherComponent.css';

const AnotherComponent = ({ children }) => {
  return (
    <div>
      <h2>Conteúdo Adicional</h2>
      {children}
    </div>
  );
};

export default AnotherComponent;
