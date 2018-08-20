import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import HorizontalCard from "../../card/HorizontalCard";
import { rows } from "./CoworkData";

const styles = theme => ({
  root: {
    display: "flex",
    marginTop: theme.spacing.unit * 3,
    flexWrap: "wrap"
  },
  cards: {
    width: "50%"
  },
  heading: {
    textDecoration: "underline"
  },
  linkButton: {
    textDecoration: "none"
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

const CoworkList = props => {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      {rows.map(row => {
        return (
          <div className={classes.cards}>
            <HorizontalCard row={row} />
          </div>
        );
      })}
    </Paper>
  );
};

CoworkList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CoworkList);
