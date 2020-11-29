import { combineReducers } from 'redux';
import filterReducer from './filter';
import pokemonPageReducer from './pokemon';

const rootReducer = combineReducers({
  filter: filterReducer,
  pokemons: pokemonPageReducer,
});

export default rootReducer;
