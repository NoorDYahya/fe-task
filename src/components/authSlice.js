

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  caughtPokemon: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addCaughtPokemon(state, action) {
      state.caughtPokemon.push(action.payload);
    },
    removeCaughtPokemon(state, action) {
      state.caughtPokemon = state.caughtPokemon.filter(pokemon => pokemon.id !== action.payload);
    },
  },
});

export const { addCaughtPokemon, removeCaughtPokemon } = authSlice.actions;
export default authSlice.reducer;
