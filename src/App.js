import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import Router from "./Router";
import { database } from "./firebase";
import { receivedEntities } from "./redux/actions/entities";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

class App extends Component {
  componentDidMount() {
    this.ref = database.ref("/").on("value", snapshot => {
      this.props.receivedEntities(snapshot.val());
    });
  }

  componentWillUnmount() {
    this.ref.off();
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <Header />
          <Router />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { receivedEntities: entities => receivedEntities(entities) },
    dispatch
  );

export default connect(
  undefined,
  mapDispatchToProps
)(withStyles(styles)(App));
