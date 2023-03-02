import React from "react";
import PropTypes from "prop-types";
import battleShipLogo from "../battleship_design/battleship_logo.png";
import "./Header.css";

function Header({ title }) {
  return (
    <header className="Header">
      <img
        style={{ width: "10%", height: "100%", alignItems: "left" }}
        src={battleShipLogo}
        alt="battleShipLogo"
      />
      <h1 className="Header-title">{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
