
const url = 'https://pokeapi.co/api/v2/pokemon/';
export async function getPokemons() {
  // Fetch the list of pokemons from the API

  try{
    const response = await fetch(url);
    if(!response.ok){
      throw new Error("failed to fetch this url");
    }
    const data = await response.json();
    return data.results;
  }
  catch(error){
     console.error(error);
     return null
  }
}

export async function getPokemonDetailsByURL(url) {
  // Fetch the pokemon details from according to the url given in the list of pokemons
  // Transform the data to only include to include only the id, name, relevant sprites, types, weight, height, and abilities.
    try
      {const response = await fetch(url);
      if(!response.ok){
        throw new Error("failed to fetch this url");
      }
      const data = await response.json();
      // filter the desired data
      const {id ,name,sprites,types,weight,height,abilities} = data

      return {id ,name,sprites,types,weight,height,abilities}
    }
    catch(error){
      console.error(error);
      return null;
    }
     


}
