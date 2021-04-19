import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>Where in the world?</h1>
      </div>
      <div>
        <i className="fas fa-moon">Dark Mode</i>
      </div>
    </div>
  );
};

export default Header;
