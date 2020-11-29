import { combineReducers } from 'redux';
import filterReducer from './filter';
import pokedexReducer from './pokedex';
import pageReducer from './page';
import pokemonReducer from './pokemon';

const rootReducer = combineReducers({
  filter: filterReducer,
  pokemons: pokedexReducer,
  page: pageReducer,
  currentPokemon: pokemonReducer,
});

export default rootReducer;
