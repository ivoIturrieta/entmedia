import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Investor from "./Investor";
import { rows } from "./InvestorsData";

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

const InvestorsList = props => {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      {rows.map(row => {
        return (
          <div className={classes.cards}>
            <Investor row={row} />
          </div>
        );
      })}
    </Paper>
  );
};

InvestorsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InvestorsList);
