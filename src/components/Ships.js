import React from "react";

// Ships
import AircraftShape from "../battleship_design/assets/AircraftShape.png";
import BattleshipShape from "../battleship_design/assets/BattleshipShape.png";
import CarrierShape from "../battleship_design/assets/CarrierShape.png";
import CruiserShape from "../battleship_design/assets/CruiserShape.png";
import SubmarineShape from "../battleship_design/assets/SubmarineShape.png";

const Ships = () => {
  return (
    <div>
      <img className="image" src={AircraftShape} alt="AircraftShape" />
      <br />
      <img className="image" src={BattleshipShape} alt="BattleshipShape" />
      <br />
      <img className="image" src={CarrierShape} alt="CarrierShape" />
      <br />
      <img className="image" src={CruiserShape} alt="CruiserShape" />
      <br />
      <img className="image" src={SubmarineShape} alt="SubmarineShape" />
    </div>
  );
};

export default Ships;
