import React, { useState } from "react";
import "./Board.css";

// Ships
import AircraftShape from "../battleship_design/assets/AircraftShape.png";
import BattleshipShape from "../battleship_design/assets/BattleshipShape.png";
import CarrierShape from "../battleship_design/assets/CarrierShape.png";
import CruiserShape from "../battleship_design/assets/CruiserShape.png";
import SubmarineShape from "../battleship_design/assets/SubmarineShape.png";

const PlayBoard = () => {
  const [board, setBoard] = useState(Array(100).fill(null));

  const handleClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
  };

  return (
    <div className="rowC">
      <div>
      <img className="image" src={AircraftShape} alt="AircraftShape"/>
      <br />
      <img className="image" src={BattleshipShape} alt="BattleshipShape"/>
      <br />
      <img className="image" src={CarrierShape} alt="CarrierShape"/>
      <br />
      <img className="image" src={CruiserShape} alt="CruiserShape"/>
      <br />
      <img className="image" src={SubmarineShape} alt="SubmarineShape"/>
      </div>
      <div className="board">
        {board.map((square, index) => (
          <div
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {square}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayBoard;
