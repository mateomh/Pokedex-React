import { combineReducers } from 'redux';
import filterReducer from './filter';
import pokemonPageReducer from './pokemon';
import pageReducer from './page';

const rootReducer = combineReducers({
  filter: filterReducer,
  pokemons: pokemonPageReducer,
  page: pageReducer,
});

export default rootReducer;
