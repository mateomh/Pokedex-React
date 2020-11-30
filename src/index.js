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
import getPokemonsInStore from './modules/storeops';
import AppStyles from './components/styles/app.module.css';
import PokeFilter from './components/pokefilter';
import PokeLogo from './components/pokelogo';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const dataInit = async () => {
  const { results: pokemons } = await ApiComms.getPokemons(1);
  pokemons.forEach(pokemon => {
    getPokemonsInStore(pokemon, store.dispatch);
  });
};

dataInit();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <div className={AppStyles.Container}>
        <PokeLogo />
        <Routes />
      </div>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
