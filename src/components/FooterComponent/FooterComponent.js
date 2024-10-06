import React from 'react';
import './FooterComponent.css';

const FooterComponent = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Dynamics Components. Todos os direitos reservados.</p>
    </footer>
  );
};

export default FooterComponent;
