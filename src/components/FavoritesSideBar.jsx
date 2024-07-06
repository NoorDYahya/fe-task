
import React, { useState } from 'react';
import '../components/FavoritesSideBar.css';
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeCaughtPokemon } from '../components/authSlice';

import SearchBar from '../components/SearchBar';

function FavoritesSideBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const caughtPokemon = useSelector(state => state.auth.caughtPokemon);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnClick = (pokemon) => {
    navigate(`/pokemon/${pokemon.id}`, { state: { pokemon } });
  };

  const handleRemovePokemon = (id) => {
    dispatch(removeCaughtPokemon(id));
  };


  const filteredPokemon = caughtPokemon.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  if (!caughtPokemon) {
    return <div>Loading...</div>; // Handle initial loading state
  }

  return (
    <aside className="aside-panel">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ul className="pokemon-list">
        {filteredPokemon.map(pokemon => (
          <li key={pokemon.id}>
            <PokemonCard
              img={pokemon.img}
              name={pokemon.name}
              id={pokemon.id}
              onclick={() => handleOnClick(pokemon)}
            />
            <button className="remove-button" onClick={() => handleRemovePokemon(pokemon.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default FavoritesSideBar;


