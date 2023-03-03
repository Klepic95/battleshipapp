import React, { useState } from "react";
import ReactSwitch from "react-switch";
import "./App.css";

// Components
import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";

function App() {
  const [checked, setChecked] = useState(false);
  const handleCheck = (val) => {
    setChecked(val);
  };
  return (
    <div style={{ backgroundColor: checked ? "#696969" : "#f0ffff" }}>
      <Header title="Battleship Game" />
      <div className="App">
        <ReactSwitch checked={checked} onChange={handleCheck} />
        <p>Dark Mode</p>
      </div>
      <Board />
      <Footer />
    </div>
  );
}

export default App;
