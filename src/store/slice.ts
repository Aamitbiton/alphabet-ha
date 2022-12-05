import { createSlice } from "@reduxjs/toolkit";

interface AppInitialState {

}

const initialState = {

} as AppInitialState;

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addToFavorites: (app, action) => {
    },

  },
});

export const { addToFavorites } = appSlice.actions;

export default appSlice.reducer;
