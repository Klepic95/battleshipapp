import React, { useState, useEffect } from "react";
import Player from "./Player";
import MessageArea from "./MessageArea";
import shipData from "../shipData";
import "./styles/Board.css";

// Ship pictures
import AircraftShape from "../battleship_design/assets/AircraftShape.png";
import BattleshipShape from "../battleship_design/assets/BattleshipShape.png";
import CarrierShape from "../battleship_design/assets/CarrierShape.png";
import CruiserShape from "../battleship_design/assets/CruiserShape.png";
import SubmarineShape from "../battleship_design/assets/SubmarineShape.png";

const Board = () => {
  const [board, setBoard] = useState(Array(100).fill(null));
  const [isFirstPlayer, setIsFirstPlayer] = useState(true);
  const [firstPlayerScore, setFirstPlayerScore] = useState(0);
  const [secondPlayerScore, setSecondPlayerScore] = useState(0);
  const [shipPositions, setShipPositions] = useState([]);
  const [shipCountParts, setShipCountParts] = useState([]);

  // Ships count
  const [carrierParts, setCarrierParts] = useState(
    shipData.shipTypes.carrier.size
  );
  const [battleShipParts, setBattleShipParts] = useState(
    shipData.shipTypes.battleship.size
  );
  const [cruiserParts, setCruiserParts] = useState(
    shipData.shipTypes.cruiser.size
  );
  const [submarineParts, setSubmarineParts] = useState(
    shipData.shipTypes.submarine.size
  );
  const [destroyerParts, setDestroyerParts] = useState(
    shipData.shipTypes.destroyer.size
  );

  useEffect(() => {
    const calculatedLayout = shipData.layout.map((layout) =>
      layout.positions.map((x) => (x[0] + 1) * 10 + (x[1] + 1))
    );
    const newPosition = shipData.layout.map((layout, index) => ({
      ship: layout.ship,
      positions: calculatedLayout[index],
    }));
    setShipPositions(newPosition);
    setShipCountParts(shipData.shipTypes);
  }, []);

  const handleClick = (index) => {
    const newBoard = [...board];

    if (newBoard[index] === "O" || newBoard[index] === "X") {
      return;
    }

    for (let i = 0; i < shipPositions.length; i++) {
      const ship = shipPositions[i];
      const positions = ship.positions;
      if (positions.includes(index)) {
        console.log(`Ship ${ship.ship} was clicked`);

        const specificShip = shipCountParts[ship.ship];
        const shipSize = specificShip.size;
        if (shipSize > 0) {
          shipCountParts[ship.ship].size--;
        }
        var firstScore = firstPlayerScore;
        var secondScore = secondPlayerScore;
        if (`${ship.ship}` === "carrier") {
          const carrierShip = shipCountParts["carrier"];
          const carrierSize = carrierShip?.size ?? 0;
          setCarrierParts(carrierSize);
          if (carrierSize === 0 && isFirstPlayer) {
            firstScore += 5;
            setFirstPlayerScore(firstScore);
          }
          if (carrierSize === 0 && !isFirstPlayer) {
            secondScore += 5;
            setSecondPlayerScore(secondScore);
          }
        }
        if (`${ship.ship}` === "battleship") {
          const battleshipShip = shipCountParts["battleship"];
          const battleshipSize = battleshipShip?.size ?? 0;
          setBattleShipParts(battleshipSize);
          if (battleshipSize === 0 && isFirstPlayer) {
            firstScore += 4;
            setFirstPlayerScore(firstScore);
          }
          if (battleshipSize === 0 && !isFirstPlayer) {
            secondScore += 4;
            setSecondPlayerScore(secondScore);
          }
        }
        if (`${ship.ship}` === "cruiser") {
          const cruiserShip = shipCountParts["cruiser"];
          const cruiserSize = cruiserShip?.size ?? 0;
          setCruiserParts(cruiserSize);
          if (cruiserSize === 0 && isFirstPlayer) {
            firstScore += 3;
            setFirstPlayerScore(firstScore);
          }
          if (cruiserSize === 0 && !isFirstPlayer) {
            secondScore += 3;
            setSecondPlayerScore(secondScore);
          }
        }
        if (`${ship.ship}` === "submarine") {
          const submarineShip = shipCountParts["submarine"];
          const submarineSize = submarineShip?.size ?? 0;
          setSubmarineParts(submarineSize);
          if (submarineSize === 0 && isFirstPlayer) {
            firstScore += 3;
            setFirstPlayerScore(firstScore);
          }
          if (submarineSize === 0 && !isFirstPlayer) {
            secondScore += 3;
            setSecondPlayerScore(secondScore);
          }
        }
        if (`${ship.ship}` === "destroyer") {
          const destroyerShip = shipCountParts["destroyer"];
          const destroyerSize = destroyerShip?.size ?? 0;
          setDestroyerParts(destroyerSize);
          if (destroyerSize === 0 && isFirstPlayer) {
            firstScore += 2;
            setFirstPlayerScore(firstScore);
          }
          if (destroyerSize === 0 && !isFirstPlayer) {
            secondScore += 2;
            setSecondPlayerScore(secondScore);
          }
        }
        newBoard[index] = "O";
        setBoard(newBoard);
        setIsFirstPlayer(!isFirstPlayer);
        return;
      }
      newBoard[index] = "X";
    }
    setIsFirstPlayer(!isFirstPlayer);
    setBoard(newBoard);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      {carrierParts === 0 &&
      battleShipParts === 0 &&
      cruiserParts === 0 &&
      submarineParts === 0 &&
      destroyerParts === 0 ? (
        <MessageArea
          message={
            firstPlayerScore > secondPlayerScore
              ? "The Winner is First Player!"
              : "The Winner is Second Player"
          }
          type="success"
        />
      ) : (
        <></>
      )}
      <div className="rowC">
        <div>
          <button onClick={refreshPage}>Start new game</button>
          <h3>Turn: {isFirstPlayer ? "First Player" : "Second Player"}</h3>
          <h1>SCORE: </h1>
          <Player title={"1st Player: " + firstPlayerScore} />
          <Player title={"2nd Player: " + secondPlayerScore} />
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
        <div className="TableApp">
          <table>
            <tr>
              <th>Remaining units</th>
              <th>Ship Type</th>
            </tr>
            <tr>
              <td>
                <h1>{carrierParts}</h1>
              </td>
              <td>
                <img className="image" src={CarrierShape} alt="CarrierShape" />
                <p>Carrier Ship</p>
              </td>
            </tr>
            <tr>
              <td>
                <h1>{battleShipParts}</h1>
              </td>
              <td>
                <img
                  className="image"
                  src={BattleshipShape}
                  alt="BattleshipShape"
                />
                <p>Battle Ship</p>
              </td>
            </tr>
            <tr>
              <td>
                <h1>{cruiserParts}</h1>
              </td>
              <td>
                <img className="image" src={CruiserShape} alt="CruiserShape" />
                <p>Cruiser Ship</p>
              </td>
            </tr>
            <tr>
              <td>
                <h1>{submarineParts}</h1>
              </td>
              <td>
                <img
                  className="image"
                  src={SubmarineShape}
                  alt="SubmarineShape"
                />
                <p>Submarine Ship</p>
              </td>
            </tr>
            <tr>
              <td>
                <h1>{destroyerParts}</h1>
              </td>
              <td>
                <img
                  className="image"
                  src={AircraftShape}
                  alt="AircraftShape"
                />
                <p>Aircraft Ship</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Board;
