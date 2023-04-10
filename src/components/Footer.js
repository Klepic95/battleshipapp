import React from "react";
import battleShipLogo from "../battleship_design/battleship_logo.png";
import "./styles/Footer.css";

<img className="image" src={battleShipLogo} alt="battleShipLogo" />

function Footer() {
  return (
    <header className="Footer">
      <h1 className="Footer-title">© All rights reserved. 2023 Predrag Klepic</h1>
    </header>
  );
}

export default Footer;
