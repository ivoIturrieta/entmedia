import React from "react";

import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Coworks from "./components/pages/coworks/Coworks";
import Article from "./components/articles/Article";
import Investors from "./components/pages/investors/Investors";
import InvestorInfo from "./components/pages/investors/InvestorInfo";
import CardExpandable from "./components/card/CardExpandable";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/coworks" component={Coworks} />
      <Route path="/cowork/:id" component={CardExpandable} />
      <Route path="/inversionistas" component={Investors} />
      <Route path="/inversionista/:id" component={InvestorInfo} />
      <Route path="/articles/:id" component={Article} />
    </Switch>
  </main>
);

export default Main;
