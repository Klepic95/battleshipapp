import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

function Header({ title }) {
  return (
    <header className="Header">
      <h1 className="Header-title">{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;