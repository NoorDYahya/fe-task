

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addCaughtPokemon } from '../components/authSlice'; 
import { addFavorite } from '../services/favorites.service'; 
import '../components/PokemonDetails.css';

function PokemonDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const pokemon = location.state?.pokemon;
  const caughtPokemon = useSelector(state => state.auth.caughtPokemon);
  const Name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  if (!pokemon) {
    return <div>Can't reach pokemon data</div>;
  }


  const attemptCatch = async () => {
    const success = await Catch();

    if (success) {
      if (!caughtPokemon.find(p => p.id === pokemon.id)) {
        dispatch(addCaughtPokemon(pokemon)); // Dispatch action to add caught Pokemon to Redux
        await addFavorite(pokemon); // Add caught Pokemon to favorites
      }
    } else {
      console.log('Failed to catch the Pokemon!');
    }
  };

  const Catch = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        const success = Math.random() < 0.5;
        resolve(success);
      }, 50);
    });
  };

  return (
    <>
      <h1>{Name}</h1>
      <div className="pokemon-detail">
        <div className="display">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div className="title">
          <h5>Pokemon Info</h5>
          <div className="display1">
            <div className="details-container">
              <div className="detail-column">
                <p>
                  <span className="label">Name:</span>
                  <span className="value">{Name}</span>
                </p>
                <p>
                  <span className="label">Abilities:</span>
                  <span className="value">
                    {pokemon.abilities.map(ability => (
                      <button type="button" className="ability" key={ability.ability.name}>
                        {ability.ability.name}
                      </button>
                    ))}
                  </span>
                </p>
              </div>
              <div className="detail-column">
                <p>
                  <span className="label">Height:</span>
                  <span className="value">{pokemon.height}</span>
                </p>
                <p>
                  <span className="label">Type:</span>
                  <span className="value">
                    {pokemon.types.map(type => (
                      <button type="button" className="type" key={type.type.name}>
                        {type.type.name}
                      </button>
                    ))}
                  </span>
                </p>
              </div>
              <div className="detail-column">
                <p>
                  <span className="label">Weight:</span>
                  <span className="value">{pokemon.weight}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="catch-div">
        <button type="button" className="back" onClick={() => navigate(`/pokemons`)}>
          Back to List
        </button>
        <button type="button" className="catch" onClick={attemptCatch} disabled={caughtPokemon.some(p => p.id === pokemon.id)}>
          {caughtPokemon.some(p => p.id === pokemon.id) ? 'Pokemon Caught!' : 'Catch!'}
        </button>
      </div>
    </>
  );
}

export default PokemonDetails;




