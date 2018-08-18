import React, { Component } from "react";
import Blog from "./components/Blog";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Coworks from "./components/Coworks";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Blog} />
          <Route path="/coworks" component={Coworks} />
        </div>
      </Router>
    );
  }
}

export default App;
