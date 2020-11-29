import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokeDex from './components/pokedex';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PokeDex} />
      {/* <Route exact path="/home" component={Home} />
      <Route exact path="/quote" component={Quotes} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
