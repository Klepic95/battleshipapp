import React from 'react'; 
import './App.css';

// Components
import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <div>
      <Header title="Battleship Game" />
      <Board />
    </div>
  );
}

export default App;
