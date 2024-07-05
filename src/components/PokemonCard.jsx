
function PokemonCard({img,name,id ,onclick}) {
  return (
    <>
       <div className="card" onClick={onclick}>
        <img src = {img} alt={name} className="pokemon-img" />
        <div className="content">
          <h2 className="pokemon-name">
            {name}
          </h2>
          <p className="pokemin-num">{id}</p>
        </div>
       </div>

    </>
  );
}


export default PokemonCard;