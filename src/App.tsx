import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import GameBoard from "./components/gameBoard/GameBoard";
import SubMenus from "./components/subMenus/SubMenus";
import Selections from "./components/selections/Selections";
import BetSlip from "./components/betSlip/BetSlip";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="app">
      <Header/>
        <GameBoard/>
         <SubMenus/>
        <Selections/>
        <BetSlip/>
        <ToastContainer />
    </div>
  );
}

export default App;
