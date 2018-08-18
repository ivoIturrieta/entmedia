import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MainBody from "./Body";
import MainSideBar from "./Sidebar";

const styles = theme => ({
  mainGrid: {
    marginTop: theme.spacing.unit * 3
  }
});

const MainContent = props => {
  return (
    <Grid container spacing={40} className={props.classes.mainGrid}>
      <MainBody />
      <MainSideBar />
    </Grid>
  );
};

MainContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainContent);
