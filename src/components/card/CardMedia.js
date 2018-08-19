import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const styles = theme => ({
  cover: {
    width: 200,
    height: 170,
    padding: 0
  }
});

const CardPhotos = props => {
  const { classes } = props;

  return (
    <CardMedia
      className={classes.cover}
      image={props.image}
      title="Live from space album cover"
    />
  );
};

CardPhotos.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(CardPhotos);
