/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Routes from './routes';
import rootReducer from './reducers/root';
import * as ApiComms from './modules/apicomms';
import * as Actions from './actions/actions';
import AppStyles from './components/styles/app.module.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const getPokemonsInStore = async pokemon => {
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

  const onePokemon = {
    id,
    name,
    imagesm,
    imagelg,
    types,
    weight,
    height,
  };
  store.dispatch(Actions.addPokemon(onePokemon));
};

const dataInit = async () => {
  const { results: pokemons } = await ApiComms.getPokemons(1);
  pokemons.forEach(pokemon => {
    getPokemonsInStore(pokemon);
  });
};

dataInit();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
