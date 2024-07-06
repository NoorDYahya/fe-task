
import { createSlice } from '@reduxjs/toolkit';

// Helper function to load data from localStorage and ensure that onRefresh  the data didnt remove
const loadFromLocalStorage = () => {
  const caughtPokemonData = localStorage.getItem('caughtedPokemon');
  return caughtPokemonData ? JSON.parse(caughtPokemonData) : [];
};

const initialState = {
  caughtPokemon: loadFromLocalStorage(),

};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addCaughtPokemon: (state, action) => {
      state.caughtPokemon.push(action.payload);
      localStorage.setItem('caughtedPokemon', JSON.stringify(state.caughtPokemon));
    },
    removeCaughtPokemon: (state, action) => {
      state.caughtPokemon = state.caughtPokemon.filter(pokemon => pokemon.id !== action.payload);
      localStorage.setItem('caughtedPokemon', JSON.stringify(state.caughtPokemon));
    },

  },
});

export const { addCaughtPokemon, removeCaughtPokemon } = authSlice.actions;
export default authSlice.reducer;
