import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ButtonGeneric from "./Button";
const styles = theme => ({
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  toolbarTitle: {
    flex: 1
  }
});

const EnterpreurTopToolbar = props => {
  const { classes } = props;

  return (
    <Toolbar className={classes.toolbarMain}>
      <ButtonGeneric size="small" name={"Subscribe"} variant="outlined" />
      <Typography
        variant="headline"
        color="inherit"
        align="center"
        noWrap
        className={classes.toolbarTitle}
      >
        Emprende
      </Typography>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <ButtonGeneric size="small" name={"Sign Up"} variant="outlined" />
    </Toolbar>
  );
};

EnterpreurTopToolbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EnterpreurTopToolbar);
