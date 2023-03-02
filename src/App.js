import React from "react";
import "./App.css";

// Components
import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header title="Battleship Game" />
      <Board />
      <Footer />
    </div>
  );
}

export default App;
