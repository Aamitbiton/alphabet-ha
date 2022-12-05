import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import GameBoard from "./components/gameBoard/GameBoard";
import SubMenus from "./components/subMenus/SubMenus";
import Selections from "./components/selections/Selections";

function App() {
  return (
    <div className="app">
      <Header/>
        <GameBoard/>
         <SubMenus/>
        <Selections/>
    </div>
  );
}

export default App;
