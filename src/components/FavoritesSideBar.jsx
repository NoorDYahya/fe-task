
import {useState ,useEffect} from 'react';
import '../components/SideBar.css';
import PokemonCard from './PokemonCard';
function FavoritesSideBar() {
  const [caughtPokemon, setCaughtPokemon] = useState([]);

  const handleOnClick = (pokemon) =>{
    navigate(`/pokemon/${pokemon.id}`, { state: { pokemon } });
  };

  useEffect(() => {
    const caughtPokemonData = JSON.parse(localStorage.getItem('caughtedPokemon')) || [];
    setCaughtPokemon(caughtPokemonData);
  }, [caughtPokemon]);

  return (
    // <>
    //   {/* Add the side bar content. Use the PokemonCard component to show each Pokemon in the favorites list */}

    // </>
    <aside className="aside-panel">
    <ul>
      {caughtPokemon.map(pokemon => (
        <PokemonCard img={pokemon.img} name ={pokemon.name} id={pokemon.id} onClick={handleOnClick} />
      ))}
    </ul>
  </aside>
  );
}

export default FavoritesSideBar;
