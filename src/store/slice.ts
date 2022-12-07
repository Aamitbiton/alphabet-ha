import { createSlice } from "@reduxjs/toolkit";
import {IAppInitialState} from "../utils/models";



const initialState = {
 bets:[],
    betBuilder: true
} as IAppInitialState;

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addBet: (app, action) => {
   app.bets.push(action.payload)
    },
    removeBet:(app,action) =>{
    app.bets = app.bets.filter((bet)=>bet.id !== action.payload)
    },
    updateBet:(app,action) =>{
    app.bets[action.payload.index] = action.payload.bet
    },
    setBetBuilder:(app,action)=>{
        app.betBuilder = action.payload
    }

  },
});

export const { addBet, removeBet, updateBet, setBetBuilder } = appSlice.actions;

export default appSlice.reducer;
