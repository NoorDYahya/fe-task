
import {useState ,useEffect} from 'react';
import '../components/SideBar.css';
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom';
function FavoritesSideBar() {
  const [caughtPokemon, setCaughtPokemon] = useState([]);
  const navigate = useNavigate();

  const handleOnClick = (pokemon) =>{
    
    navigate(`/pokemon/${pokemon.id}`, { state: { pokemon } });
  };

  useEffect(() => {
    const caughtPokemonData = JSON.parse(localStorage.getItem('caughtedPokemon')) || [];
    setCaughtPokemon(caughtPokemonData);
  }, []);
  const handleRemovePokemon = (id) => {
    const updatedCaughtPokemon = caughtPokemon.filter(pokemon => pokemon.id !== id);
    setCaughtPokemon(updatedCaughtPokemon);
    localStorage.setItem('caughtedPokemon', JSON.stringify(updatedCaughtPokemon));
  };
  return (

    <aside className="aside-panel">
      <ul className="pokemon-list">
        {caughtPokemon.map(pokemon => (
          <li key={pokemon.id}>
            <PokemonCard img={pokemon.img} name={pokemon.name} id={pokemon.id} onClick={()=>handleOnClick(pokemon)} />
            <button className="remove-button" onClick={() => handleRemovePokemon(pokemon.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default FavoritesSideBar;
