/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Routes from './routes';
import rootReducer from './reducers/root';
import * as ApiComms from './apicomms/apicomms';
import * as Actions from './actions/actions';
import AppStyles from './components/styles/app.module.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const dataInit = async () => {
  const { results: pokemons } = await ApiComms.getPokemons(1);
  store.dispatch(Actions.addPokemon(pokemons));
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
