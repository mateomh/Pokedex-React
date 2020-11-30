import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokeDex from './components/pokedex';
import PokeInfo from './components/pokeinfo';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PokeDex} />
      <Route exact path="/info" component={PokeInfo} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
