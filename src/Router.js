import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Coworks from "./components/pages/coworks/Coworks";
import Article from "./components/articles/Article";
import Investors from "./components/pages/investors/Investors";
import InvestorInfo from "./components/pages/investors/InvestorInfo";
import SignInPage from "./components/pages/auth/SignInPage";
import SignUpPage from "./components/pages/auth/SignUpPage";
import CardExpandable from "./components/card/CardExpandable";
import { auth } from "./components/pages/auth/firebase";
import AddressForm from "./components/forms/AddressForm";

class Main extends Component {
  state = {
    authUser: null
  };

  componentDidMount() {
    auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/articles/:id" component={Article} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/coworks" component={Coworks} />
          <Route path="/cowork/:id" component={CardExpandable} />
          <Route path="/inversionistas/new" component={AddressForm} />
          <Route path="/inversionistas" component={Investors} />
          <Route path="/inversionista/:id" component={InvestorInfo} />
        </Switch>
      </main>
    );
  }
}

export default Main;
