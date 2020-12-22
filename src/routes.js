import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GameBuilder from "./containers/GameBuilder/GameBuilder";
import GameDetail from "./components/GameDetail/GameDetail";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={GameBuilder} />
      <Route path="/game/:id" component={GameDetail} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
