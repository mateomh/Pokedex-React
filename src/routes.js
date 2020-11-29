import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/app';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      {/* <Route exact path="/home" component={Home} />
      <Route exact path="/quote" component={Quotes} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
