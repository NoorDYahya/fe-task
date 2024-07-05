

import {React ,useState} from 'react';
import { useLocation, useNavigate} from "react-router-dom" ;
import '../components/CardStyle.css';

function PokemonDetails() {

  const navigate = useNavigate();
  const location = useLocation();
  const pokemon = location.state?.pokemon;

  const [caught, setCaught] = useState(false);

  if (!pokemon) {
    return <div>Cant reach pokemon data</div>;
  }
  // console.log(pokemon);
  const Name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  const attemptCatch = async () => {

      const success = await Catch();

      if (success) {
       
        const caughtPokemonData = JSON.parse(localStorage.getItem('caughtedPokemon')) || [];
        if (!caughtPokemonData.find(p => p.id === pokemon.id)) {
          caughtPokemonData.push(pokemon);
          localStorage.setItem('caughtedPokemon', JSON.stringify(caughtPokemonData));

          setCaught(true); // Mark as caught
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
      }, 1000); 
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
                  <span className="value">{pokemon.abilities.map(ability => <button type="button" className="ability">{ability.ability.name}</button> )}</span>
                </p>
                
              </div>
              <div className="detail-column">
                
                <p>
                  <span className="label">Height:</span> 
                  <span className="value">{pokemon.height}</span>
                </p>
          
                <p>
                  <span className="label">Type:</span> 
                  <span className="value">{pokemon.types.map(type => <button type="button" className="type">{type.type.name}</button> )}</span>
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
    <button type="button"className="back" onClick={() => navigate(-1)}>Back to List</button>
    <button type="button"className="catch" onClick={attemptCatch}disabled={caught}>{caught ? 'Pokemon Caught!' : 'Catch!'}</button>
   </div>



  </>






  );
}

export default PokemonDetails;
