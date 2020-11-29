const endpointUrl = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemons = async (page = 1, numberperpage = 10) => {
  const paginationparams = `?limit=${numberperpage}&offset=${(page - 1) * numberperpage}`;
  const pokemonUrl = endpointUrl.concat(paginationparams);

  const data = await fetch(pokemonUrl);
  const pokedata = await data.json();
  return pokedata;
};

const getOnePokemonInfo = async pokemon => {
  const pokemonUrl = endpointUrl.concat(pokemon);

  const data = await fetch(pokemonUrl);
  const pokedata = await data.json();
  return pokedata;
};

export { getPokemons, getOnePokemonInfo };
