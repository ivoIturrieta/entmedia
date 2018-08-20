import React from "react";

import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Coworks from "./components/pages/Coworks";
import Article from "./components/articles/Article";
import CardExpandable from "./components/card/CardExpandable";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/coworks" component={Coworks} />
      <Route path="/cowork/:id" component={CardExpandable} />
      <Route path="/articles/:id" component={Article} />
    </Switch>
  </main>
);

export default Main;
