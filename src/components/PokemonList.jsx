
import {useEffect, useState} from 'react';
import PokemonCard from './PokemonCard';
import { getPokemons, getPokemonDetailsByURL } from  "../services/pokemon.service.js";

import { useNavigate } from "react-router-dom";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
      const fetchPokemon = async ()=>{

        try{
            const result = await getPokemons();
            if(!result){
              throw new Error("failed to fetch PokemonList");
            }
            const pokemonDetails = result.map(async pokemon => {
              const details = await getPokemonDetailsByURL(pokemon.url);
              if (!details) {
                throw new Error('Failed to fetch Pokemon details');
              }
              return {
                id: details.id,
                name: details.name,
                img: details.sprites.front_default,
                sprites:details.sprites,
                types:details.types,
                weight: details.weight,
                height:details.height,
                abilities:details.abilities,


              };
            });
            const pokemons = await Promise.all(pokemonDetails);
            setPokemonList(pokemons);
        }
        catch(error){
            console.error(error);
        }

      };
      fetchPokemon()

  },[])

  const handleOnClick = (pokemon) =>{
    navigate(`/pokemon/${pokemon.id}`, { state: { pokemon } });
  };


  return (
 
    <div className="card-list">
      {pokemonList.map(pokemon =>
        (
          <PokemonCard img={pokemon.img} name={capitalizeFirstLetter(pokemon.name)} id= {pokemon.id} onclick={() =>handleOnClick(pokemon)}/>
        )
      )}
    </div>
  );
}

export default PokemonList;
