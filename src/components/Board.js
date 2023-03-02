import React, { useState, useEffect } from "react";
import "./Board.css";
import Ships from "./Ships";
import Header from "./Header";
import shipData from "../shipData";

const Board = () => {
  const [board, setBoard] = useState(Array(100).fill(null));
  const [isFirstPlayer, setIsFirstPlayer] = useState(true);
  const [firstPlayerScore, setFirstPlayerScore] = useState(0);
  const [secondPlayerScore, setSecondPlayerScore] = useState(0);
  const [shipPositions, setShipPositions] = useState([]);

  useEffect(() => {
    const calculatedLayout = shipData.layout.map(layout =>
      layout.positions.map(x => (x[0] + 1) * 10 + (x[1] + 1))
    );
    const newPosition = shipData.layout.map((layout, index) => ({
      ship: layout.ship,
      positions: calculatedLayout[index]
    }));
    setShipPositions(newPosition);
  }, []);

  const handleClick = (index) => {
    console.log(shipPositions);
    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
  };

  return (
    <div className="rowC">
      <div>
        <Header title={"First Player Score: " + firstPlayerScore} />
        <Header title={"Second Player Score: " + secondPlayerScore} />
      </div>
      <div>
        <Ships />
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

export default Board;
