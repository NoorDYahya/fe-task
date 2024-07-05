import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import pokemonLogo from '../assets/pokemon.png'; // Ensure this path is correct

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <img src={pokemonLogo} alt="Pokémon Logo" className="pokemon-logo" />
      <h1>Welcome to the Pokedex Gallary</h1>
      <button className="pokemon-list-button" onClick={() => navigate('/pokemons')}>View Pokemon List</button>
    </div>
  );
}

export default Home;
