import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const changeTheme = () => {
    const moon = document.querySelector('.fa-moon');
    const header = document.querySelector('.header');
    const input = document.querySelector('#search');
    const select = document.querySelector('select');
    moon.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      header.classList.toggle('light-theme');
      input.classList.toggle('light-theme');
      select.classList.toggle('light-theme');
    });
  };
  return (
    <div className="header">
      <div>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
          <h1>Where in the world?</h1>
        </Link>
      </div>
      <div>
        <i className="fas fa-moon" onClick={() => changeTheme()}></i>
      </div>
    </div>
  );
};

export default Header;
