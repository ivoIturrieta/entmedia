import React from "react";

import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Coworks from "./components/Coworks";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/coworks" component={Coworks} />
    </Switch>
  </main>
);

export default Main;
