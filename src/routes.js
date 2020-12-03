import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokeDex from './containers/pokedex';
import PokeInfo from './containers/pokeinfo';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PokeDex} />
      <Route exact path="/info" component={PokeInfo} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
