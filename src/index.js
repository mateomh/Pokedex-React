/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Routes from './routes';
import rootReducer from './reducers/root';
import AppStyles from './components/styles/app.module.css';
import PokeLogo from './components/pokelogo';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

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
