const endpointUrl = 'https://pokeapi.co/api/v2/pokemon/';

const getDataFromApi = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getPokemons = async (page = 1, numberperpage = 151) => {
  const paginationparams = `?limit=${numberperpage}&offset=${(page - 1) * numberperpage}`;
  const pokemonUrl = endpointUrl.concat(paginationparams);

  const pokedata = getDataFromApi(pokemonUrl);
  return pokedata;
};

const getOnePokemonInfo = async pokemon => {
  const pokemonUrl = endpointUrl.concat(pokemon);

  const pokedata = getDataFromApi(pokemonUrl);
  return pokedata;
};

export { getPokemons, getOnePokemonInfo };
