import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up("md")]: {
      paddingRight: 0
    }
  }
});

const Featured = props => {
  return (
    <Paper className={props.classes.mainFeaturedPost}>
      <Grid container>
        <Grid item md={6}>
          <div className={props.classes.mainFeaturedPostContent}>
            <Typography variant="display2" color="inherit" gutterBottom>
              Ruth es la nueva emperadora de Edge el Golf.
            </Typography>
            <Typography variant="headline" color="inherit" paragraph>
              Despues de un golpe de estado, Ruth logro convirtirse en CEO de
              Edge.
            </Typography>
            <Typography variant="title" color="inherit">
              Continue reading...
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

Featured.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Featured);
