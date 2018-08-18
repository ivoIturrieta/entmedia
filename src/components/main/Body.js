import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  mainGrid: {
    marginTop: theme.spacing.unit * 3
  }
});

const MainBody = props => {
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="title" gutterBottom>
        From the Firehose
      </Typography>
      <Divider />
    </Grid>
  );
};

MainBody.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainBody);
