import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const saveToLocalStorage = (state) => {
  localStorage.setItem('caughtedPokemon', JSON.stringify(state.auth.caughtPokemon));
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    // other reducers
  },
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
