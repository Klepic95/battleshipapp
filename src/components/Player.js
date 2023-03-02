import React from 'react';
import PropTypes from 'prop-types';
import './Player.css';

function Player({ title }) {
  return (
    <header className="Player">
      <h1 className="Player-title">{title}</h1>
    </header>
  );
}

Player.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Player;