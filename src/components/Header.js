import React from "react";
import PropTypes from "prop-types";
import battleShipLogo from "../battleship_design/battleship_logo.png";
import "./Header.css";
import "./Board";

function Header({ title }) {
  return (
    <div className="rowC">
      <header className="Header">
        <img className="image" src={battleShipLogo} alt="battleShipLogo" />
        <h1 className="Header-title">{title}</h1>
      </header>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
