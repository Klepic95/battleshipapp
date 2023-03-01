import React from 'react'; 
import './App.css';

// Components
import Header from './components/Header';
import Board from './components/Board';
import MessageArea from './components/MessageArea';

const tileStatus = {
  UNSELECTED: 'unselected',
  HIT: 'hit',
  MISS: 'miss'
};

function App() {
  return (
    <div>
      <Header title="Battleship Game" />
      <Board />
    </div>
  );
}

export default App;
