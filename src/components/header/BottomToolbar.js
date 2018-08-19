import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const styles = () => ({
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

const EnterpreurBottomToolbar = props => {
  const { classes } = props;

  return (
    <Toolbar variant="dense" className={classes.toolbarSecondary}>
      {sections.map(section => (
        <Typography color="inherit" noWrap key={section}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/${section.toLowerCase()}`}
            activeClassName="current"
          >
            {section}
          </Link>
        </Typography>
      ))}
    </Toolbar>
  );
};

EnterpreurBottomToolbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EnterpreurBottomToolbar);
