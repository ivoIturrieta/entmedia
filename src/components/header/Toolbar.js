import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  toolbarSecondary: {
    justifyContent: "space-between"
  }
});

const sections = [
  "Home",
  "Inversionistas",
  "Educación",
  "Coworks",
  "Ideas",
  "Redes",
  "Noticias"
];

const Toolbar = props => {
  const { classes } = props;

  return (
    <Toolbar variant="dense" className={classes.toolbarSecondary}>
      {sections.map(section => (
        <Typography color="inherit" noWrap key={section}>
          {section}
        </Typography>
      ))}
    </Toolbar>
  );
};

Toolbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Toolbar);
