import { combineReducers } from 'redux';
import filterReducer from './filter';
import pokemonReducer from './pokemon';

const allReducer = combineReducers({
  filter: filterReducer,
  pokemons: pokemonReducer,
});

export default allReducer;
