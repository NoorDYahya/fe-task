
import React, { useState, useEffect } from 'react';
import '../components/FavoritesSideBar.css';
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeCaughtPokemon } from '../components/authSlice';
import { getFavorites } from '../services/favorites.service'; 
import SearchBar from '../components/SearchBar';

function FavoritesSideBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);
  const caughtPokemon = useSelector(state => state.auth.caughtPokemon);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchFavorites() {
      const favs = await getFavorites();
      setFavorites(favs);
    }
    fetchFavorites();
  }, []);

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
    return <div>Loading...</div>; 
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
