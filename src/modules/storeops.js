import * as ApiComms from './apicomms';
import * as Actions from '../actions/actions';

const getPokemonsInStore = async (pokemon, dispatchFcn) => {
  const pokemonInfo = await ApiComms.getOnePokemonInfo(pokemon.name);
  const {
    id,
    name,
    sprites: { front_default: imagesm },
    sprites: { other: { dream_world: { front_default: imagelg } } },
    types,
    weight,
    height,
  } = pokemonInfo;

  const newTypes = types.map(item => item.type.name);

  const onePokemon = {
    id,
    name,
    imagesm,
    imagelg,
    types: newTypes,
    weight,
    height,
  };
  dispatchFcn(Actions.addPokemon(onePokemon));
};

const dataInit = async store => {
  const { results: pokemons } = await ApiComms.getPokemons(1);
  pokemons.forEach(pokemon => {
    getPokemonsInStore(pokemon, store.dispatch);
  });
};

export { getPokemonsInStore, dataInit };
